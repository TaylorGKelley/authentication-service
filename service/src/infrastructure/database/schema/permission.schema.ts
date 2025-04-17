import {
  boolean,
  integer,
  pgTable,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';
import { linkedServiceTable } from './linkedService.schema';

export const permissionTable = pgTable('permission', {
  id: serial('id').primaryKey(),
  name: varchar('description', { length: 128 }).notNull(),
  assignToNewRole: boolean('assign_to_new_role').default(false),
  linkedServiceId: integer('linked_service_id')
    .references(() => linkedServiceTable.id, { onDelete: 'cascade' })
    .notNull(),
});
