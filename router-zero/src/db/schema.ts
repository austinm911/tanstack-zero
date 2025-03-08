import { pgTable, varchar } from 'drizzle-orm/pg-core'

export const persons = pgTable('persons', {
	id: varchar('id').primaryKey(),
	name: varchar('name').notNull(),
})
