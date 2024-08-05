import { Post } from "./Post";

export type PostsResponse = {
  totalCount: number;
  posts?: Post[] | null;
  forYou?: Post[] | null;
};
