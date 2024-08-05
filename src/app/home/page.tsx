import { Suspense } from "react";
import { cookies } from "next/headers";

import { LogOutButton } from "@/components/smart/buttons/LogOutButton";
import PostsLoader from "./components/PostsLoader";
import PostsController from "./components/PostsController";
import { USERNAME_COOKIE_NAME } from "@/constants/cookies";

export default function Component() {
  const username = cookies().get(USERNAME_COOKIE_NAME);

  return (
    <>
      <div className="pt-8 px-8 flex items-center justify-end w-full">
        <div className="text-orange-400 mr-8">{`Hi ${username?.value}!`}</div>
        <LogOutButton />
      </div>
      <Suspense fallback={<PostsLoader />}>
        <PostsController />
      </Suspense>
    </>
  );
}
