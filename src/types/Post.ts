export type Post = {
  id: string;
  name: string;
  tagline: string | null;
  description: string | null;
  createdAt: string;
  thumbnail: {
    url: string | null;
  };
};
