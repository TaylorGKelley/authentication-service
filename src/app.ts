import express from 'express';
import cors from 'cors';
import passport from '@/infrastructure/configurations/passport';
import authRouter from './interfaces/routers/auth.router';
import { errorHandler } from './interfaces/controllers/error.controller';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import userRouter from './interfaces/routers/user.router';
import csrfProtected from './interfaces/middleware/csrfProtected';
import { generalLimiter } from './interfaces/middleware/rateLimiters';

const app = express();

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin:
    process.env.NODE_ENV === 'development' ? '*' : 'http://production.url',
  credentials: true, // Allow cookies (refresh token) to be sent
} as const;
app.use(cors(corsOptions));
app.use(helmet());
app.use(generalLimiter);

app.use(
  csrfProtected({
    exemptRoutes: [
      '/api/v1/login',
      '/api/v1/register',
      '/api/v1/isauthenticated',
    ],
  })
); // Protect the entire application (CSRF)

app.use(passport.initialize());

app.use('/api/v1', authRouter);
app.use('/api/v1/users', userRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

export default app;
