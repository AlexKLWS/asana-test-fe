import { Topic } from "./Topic";

export type Post = {
  id: string;
  name: string;
  tagline: string | null;
  description: string | null;
  createdAt: string;
  thumbnailUrl: string | null;
  topics: Topic[];
};
