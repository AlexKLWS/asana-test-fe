import { Suspense } from "react";

import { LogOutButton } from "@/components/smart/buttons/LogOutButton";
import PostsLoader from "./components/PostsLoader";
import PostsController from "./components/PostsController";

export default function Component() {
  return (
    <>
      <div className="pt-8 px-8 flex justify-end w-full">
        <LogOutButton />
      </div>
      <Suspense fallback={<PostsLoader />}>
        <PostsController />
      </Suspense>
    </>
  );
}
