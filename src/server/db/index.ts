import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

import * as schema from './schema';

export const db = drizzle(sql, { schema });

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  }
);

// export const tampons = pgTable(
//   'tampons',
//   {
//     id: serial('id').primaryKey(),
//     name: text('name').notNull(),
//     email: text('email').notNull(),
//     image: text('image').notNull(),
//     createdAt: timestamp('createdAt').defaultNow().notNull(),
//   },
//   (users) => {
//     return {
//       uniqueIdx: uniqueIndex('unique_idx').on(users.email),
//     };
//   }
// );

export const getUsers = async () => {
  const users = await db.query.users.findMany();
  return users;
};
