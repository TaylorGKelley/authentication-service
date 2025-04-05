/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as ProtectedRouteImport } from './routes/protected.route'
import { Route as IndexImport } from './routes/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as ForgotPasswordIndexImport } from './routes/forgot-password/index'
import { Route as ForgotPasswordResetImport } from './routes/forgot-password/reset'
import { Route as LoginOauthCallbackImport } from './routes/login/oauth/callback'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRouteRoute = ProtectedRouteImport.update({
  id: '/protected',
  path: '/protected',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordIndexRoute = ForgotPasswordIndexImport.update({
  id: '/forgot-password/',
  path: '/forgot-password/',
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordResetRoute = ForgotPasswordResetImport.update({
  id: '/forgot-password/reset',
  path: '/forgot-password/reset',
  getParentRoute: () => rootRoute,
} as any)

const LoginOauthCallbackRoute = LoginOauthCallbackImport.update({
  id: '/login/oauth/callback',
  path: '/login/oauth/callback',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/protected': {
      id: '/protected'
      path: '/protected'
      fullPath: '/protected'
      preLoaderRoute: typeof ProtectedRouteImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password/reset': {
      id: '/forgot-password/reset'
      path: '/forgot-password/reset'
      fullPath: '/forgot-password/reset'
      preLoaderRoute: typeof ForgotPasswordResetImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password/': {
      id: '/forgot-password/'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof ForgotPasswordIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/oauth/callback': {
      id: '/login/oauth/callback'
      path: '/login/oauth/callback'
      fullPath: '/login/oauth/callback'
      preLoaderRoute: typeof LoginOauthCallbackImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/protected': typeof ProtectedRouteRoute
  '/register': typeof RegisterRoute
  '/forgot-password/reset': typeof ForgotPasswordResetRoute
  '/forgot-password': typeof ForgotPasswordIndexRoute
  '/login': typeof LoginIndexRoute
  '/login/oauth/callback': typeof LoginOauthCallbackRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/protected': typeof ProtectedRouteRoute
  '/register': typeof RegisterRoute
  '/forgot-password/reset': typeof ForgotPasswordResetRoute
  '/forgot-password': typeof ForgotPasswordIndexRoute
  '/login': typeof LoginIndexRoute
  '/login/oauth/callback': typeof LoginOauthCallbackRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/protected': typeof ProtectedRouteRoute
  '/register': typeof RegisterRoute
  '/forgot-password/reset': typeof ForgotPasswordResetRoute
  '/forgot-password/': typeof ForgotPasswordIndexRoute
  '/login/': typeof LoginIndexRoute
  '/login/oauth/callback': typeof LoginOauthCallbackRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/protected'
    | '/register'
    | '/forgot-password/reset'
    | '/forgot-password'
    | '/login'
    | '/login/oauth/callback'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/protected'
    | '/register'
    | '/forgot-password/reset'
    | '/forgot-password'
    | '/login'
    | '/login/oauth/callback'
  id:
    | '__root__'
    | '/'
    | '/protected'
    | '/register'
    | '/forgot-password/reset'
    | '/forgot-password/'
    | '/login/'
    | '/login/oauth/callback'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProtectedRouteRoute: typeof ProtectedRouteRoute
  RegisterRoute: typeof RegisterRoute
  ForgotPasswordResetRoute: typeof ForgotPasswordResetRoute
  ForgotPasswordIndexRoute: typeof ForgotPasswordIndexRoute
  LoginIndexRoute: typeof LoginIndexRoute
  LoginOauthCallbackRoute: typeof LoginOauthCallbackRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProtectedRouteRoute: ProtectedRouteRoute,
  RegisterRoute: RegisterRoute,
  ForgotPasswordResetRoute: ForgotPasswordResetRoute,
  ForgotPasswordIndexRoute: ForgotPasswordIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  LoginOauthCallbackRoute: LoginOauthCallbackRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/protected",
        "/register",
        "/forgot-password/reset",
        "/forgot-password/",
        "/login/",
        "/login/oauth/callback"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/protected": {
      "filePath": "protected.route.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/forgot-password/reset": {
      "filePath": "forgot-password/reset.tsx"
    },
    "/forgot-password/": {
      "filePath": "forgot-password/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/login/oauth/callback": {
      "filePath": "login/oauth/callback.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
