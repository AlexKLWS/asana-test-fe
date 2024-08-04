import { cookies } from "next/headers";

import PostsView from "./PostsView";
import { PostsResponse } from "@/types/PostsResponse";
import { USERNAME_COOKIE_NAME } from "@/constants/cookies";

const fetchData = async () => {
  try {
    const urlBase = process.env.API_URL;
    if (!urlBase) {
      throw new Error("Missing API URL in env config!");
    }

    const username = cookies().get(USERNAME_COOKIE_NAME);
    if (!username) {
      throw new Error("Somehow username is missing!");
    }

    const result = await fetch(urlBase + "/posts", {
      headers: {
        Authorization: process.env.LAMBDA_AUTH_KEY || "",
        username: username.value,
      },
      cache: "no-store",
    });

    const parsedResult = (await result.json()) as PostsResponse;

    return { response: parsedResult };
  } catch (e) {
    console.log("🚀 ~ file: PostsController.tsx ~ line 52 ~ fetchData ~ e", e);
    return { error: e };
  }
};

export default async function PostsController() {
  const posts = await fetchData();

  if (posts.response) {
    return <PostsView postsResponse={posts.response} />;
  } else {
    return <div>{(posts.error as Error)?.message || "Error!"}</div>;
  }
}
