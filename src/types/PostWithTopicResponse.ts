import { Post } from "./Post";
import { Topic } from "./Topic";

export type PostWithTopicResponse = {
  topics: {
    edges: [
      {
        node: Topic;
      }
    ];
  };
} & Post;
