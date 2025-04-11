import {
	serial,
	pgTable,
	varchar,
	timestamp,
	text,
	pgEnum,
	json,
} from 'drizzle-orm/pg-core';
import { userTable } from './user.schema';
import { relations } from 'drizzle-orm';

export const eventTypeEnum = pgEnum('eventType', ['request', 'error', 'login']);

export const eventStatusEnum = pgEnum('eventStatus', [
	'info',
	'success',
	'failure',
]);

export const activityLogTable = pgTable('activity_log', {
	id: serial('id').primaryKey(),
	// (optional) Related User
	userId: serial('user_id').references(() => userTable.id, {
		onDelete: 'cascade',
	}),
	// Device Tracking
	ip: varchar('ip', { length: 16 }).notNull(),
	userAgent: varchar('user_agent', { length: 256 }).notNull(),
	// Event Classification
	eventType: eventTypeEnum('event_type').notNull(),
	eventStatus: eventStatusEnum('event_status').default('info'),
	// Any Error?
	errorMessage: text('error_message'),
	// Request Info
	requestPath: varchar('request_path', { length: 255 }).notNull(),
	// Extra Data
	additionalMetadata: json('additional_metadata'),
	// Timestamp
	createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export const activityLogTableRelations = relations(
	activityLogTable,
	({ one }) => {
		return {
			user: one(userTable),
		};
	}
);
