export type CommentFeedProps = {
  userId: number;
  postId: number;
};

export type Comment = {
  userId: number;
  comment: string;
  createdAt: Date;
  name: string;
};
