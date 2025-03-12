import { sql } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = t.pgTableCreator((name) => `code-milkshake_${name}`);

export const languageEnum = t.pgEnum("language", [
  "javascript",
  "typescript",
  "liquid",
  "css",
]);

export const snippets = createTable("snippet", {
  id: t.integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: t.varchar("name", { length: 256 }).notNull(),
  code: t.varchar("code", { length: 1024 }).notNull(),
  isPublic: t.boolean("is_public").default(false),
  language: languageEnum("language").default("javascript"),
  description: t.varchar("description", { length: 512 }),
  createdAt: t
    .timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: t
    .timestamp("updated_at", { withTimezone: true })
    .$onUpdate(() => new Date()),
});
