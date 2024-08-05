"use server";

import { USERNAME_COOKIE_NAME } from "@/constants/cookies";
import { Post } from "@/types/Post";
import { cookies } from "next/headers";

export async function sendViewedPost(post: Post) {
  try {
    const urlBase = process.env.API_URL;
    if (!urlBase) {
      throw new Error("Missing API URL in env config!");
    }

    const username = cookies().get(USERNAME_COOKIE_NAME);
    if (!username) {
      throw new Error("Somehow username is missing!");
    }

    const result = await fetch(urlBase + "/user/posts", {
      method: "POST",
      headers: {
        Authorization: process.env.LAMBDA_AUTH_KEY || "",
        username: username.value,
      },
      body: JSON.stringify(post),
      cache: "no-store",
    });

    return {};
  } catch (e) {
    console.log("🚀 ~ file: PostsController.tsx ~ line 52 ~ fetchData ~ e", e);
    return { error: e };
  }
}
