import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  boolean,
  uniqueIndex,
  integer,
} from "drizzle-orm/pg-core";

// Define the tables
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  image: varchar("image", { length: 255 }),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  content: text("description").notNull(),
  image: varchar("image", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .notNull()
    .references(() => posts.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  comment: text("comment").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const follows = pgTable(
  "follows",
  {
    id: serial("id").primaryKey(),
    followerId: integer("follower_id")
      .notNull()
      .references(() => users.id),
    followingId: integer("following_id")
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
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    postId: integer("post_id").references(() => posts.id),
    commentId: integer("comment_id").references(() => comments.id),
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
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  image: varchar("image", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});
