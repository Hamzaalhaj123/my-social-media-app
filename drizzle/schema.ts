import {
  pgTable,
  varchar,
  text,
  timestamp,
  boolean,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

// Define the tables
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  surname: varchar("surname", { length: 255 }).notNull(),
  description: text("description"),
  city: varchar("city", { length: 255 }),
  school: varchar("school", { length: 255 }),
  work: varchar("work", { length: 255 }),
  website: varchar("website", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  image: varchar("image", { length: 255 }),
});

export const posts = pgTable("posts", {
  id: text("id").primaryKey().default(uuidv4()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const comments = pgTable("comments", {
  id: text("id").primaryKey().default(uuidv4()),
  postId: text("post_id")
    .notNull()
    .references(() => posts.id),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  comment: text("comment").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const follows = pgTable(
  "follows",
  {
    id: text("id").primaryKey().default(uuidv4()),
    followerId: text("follower_id")
      .notNull()
      .references(() => users.id),
    followingId: text("following_id")
      .notNull()
      .references(() => users.id),
    isAccepted: boolean("is_accepted").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (follows) => ({
    uniqueFollow: uniqueIndex("unique_follow").on(
      follows.followerId,
      follows.followingId
    ),
  })
);

export const likes = pgTable(
  "likes",
  {
    id: text("id").primaryKey().default(uuidv4()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    postId: text("post_id").references(() => posts.id),
    commentId: text("comment_id").references(() => comments.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (likes) => ({
    uniqueLike: uniqueIndex("unique_like").on(
      likes.userId,
      likes.postId,
      likes.commentId
    ),
  })
);

export const stories = pgTable("stories", {
  id: text("id").primaryKey().default(uuidv4()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  image: varchar("image", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});
