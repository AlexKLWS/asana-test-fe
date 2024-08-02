import { PostWithTopicResponse } from "./PostWithTopicResponse";

export type PostsResponse = {
  data: {
    posts: {
      totalCount: number;
      edges: { node: PostWithTopicResponse }[];
    };
  };
};
