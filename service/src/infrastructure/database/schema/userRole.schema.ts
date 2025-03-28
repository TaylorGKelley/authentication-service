import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { userTable, roleTable } from '.';

export const userRoleTable = pgTable('userRole', {
  id: serial('id').primaryKey(),
  userId: serial('user_id').references(() => userTable.id, {
    onDelete: 'cascade',
  }),
  roleId: integer('role').references(() => roleTable.id, {
    onDelete: 'cascade',
  }),
});

export const userRoleRelations = relations(userRoleTable, ({ one, many }) => {
  return {
    user: many(userTable),
    role: one(roleTable),
  };
});
