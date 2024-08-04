import { Post } from "./Post";
import { PostWithTopicResponse } from "./PostWithTopicResponse";

export type PostsResponse = {
  totalCount: number;
  posts?: Post[] | null;
  forYou?: Post[] | null;
};
