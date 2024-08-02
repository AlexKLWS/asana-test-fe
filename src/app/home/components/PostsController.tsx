import PostsView from "./PostsView";
import { PostsResponse } from "@/types/PostsResponse";

const query = `
{
  posts(last: 10) {
    totalCount
    edges {
      node {
        id
        name
        tagline
        description
        createdAt
        thumbnail {
            url
        }
        topics {
            edges {
                node {
                    name
                    description
                }
            }
        }
      }
    }
  }
}
`;

const fetchData = async () => {
  try {
    const result = await fetch(process.env.API_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    const parsedResult = await result.json();

    return { response: parsedResult as PostsResponse };
  } catch (e) {
    return { error: e };
  }
};

export default async function PostsController() {
  const posts = await fetchData();

  if (posts.response) {
    return <PostsView posts={posts.response} />;
  } else {
    return <div>{(posts.error as Error)?.message || "Error!"}</div>;
  }
}
