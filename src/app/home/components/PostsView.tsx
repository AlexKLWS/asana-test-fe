"use client";

import { useState } from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PostsResponse } from "@/types/PostsResponse";
import { PostWithTopicResponse } from "@/types/PostWithTopicResponse";
import { Post } from "@/types/Post";
import { Button } from "@/components/ui/button";

type Props = {
  postsResponse: PostsResponse;
};

const PostsView = (props: Props) => {
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(
    props.postsResponse.posts?.[0]
  );

  const [isForYouOpen, setIsForYouOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const renderPostList = () => {
    if (
      props.postsResponse.posts?.length &&
      props.postsResponse.forYou?.length
    ) {
      return (
        <>
          <Collapsible
            open={isForYouOpen}
            onOpenChange={setIsForYouOpen}
            className="w-full space-y-3"
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full p-0">
                <div className="flex items-center justify-between w-full">
                  <h4 className="font-semibold text-orange-400 text-lg">
                    For You
                  </h4>
                  <div>
                    <ChevronsUpDown className="text-orange-400 h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </Button>
            </CollapsibleTrigger>
            {props.postsResponse.forYou.slice(0, 3).map((post) => (
              <Card
                key={post.id}
                className={`${
                  post.id === selectedPost?.id
                    ? "border-orange-400"
                    : "border-0"
                } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
                onClick={() => setSelectedPost(post)}
              >
                <CardTitle className="text-lg font-medium">
                  {post.name}
                </CardTitle>
              </Card>
            ))}
            <CollapsibleContent className="space-y-3">
              {props.postsResponse.forYou
                .slice(3, props.postsResponse.forYou.length)
                .map((post) => (
                  <Card
                    key={post.id}
                    className={`${
                      post.id === selectedPost?.id
                        ? "border-orange-400"
                        : "border-0"
                    } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
                    onClick={() => setSelectedPost(post)}
                  >
                    <CardTitle className="text-lg font-medium">
                      {post.name}
                    </CardTitle>
                  </Card>
                ))}
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-3 mt-2"
          >
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full p-0">
                <div className="flex items-center justify-between w-full">
                  <h4 className="font-semibold text-orange-400 text-lg">
                    New Posts
                  </h4>
                  <div>
                    <ChevronsUpDown className="text-orange-400 h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </Button>
            </CollapsibleTrigger>
            {props.postsResponse.posts.slice(0, 5).map((post) => (
              <Card
                key={post.id}
                className={`${
                  post.id === selectedPost?.id
                    ? "border-orange-400"
                    : "border-0"
                } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
                onClick={() => setSelectedPost(post)}
              >
                <CardTitle className="text-lg font-medium">
                  {post.name}
                </CardTitle>
              </Card>
            ))}
            <CollapsibleContent className="space-y-3">
              {props.postsResponse.posts
                .slice(5, props.postsResponse.posts.length)
                .map((post) => (
                  <Card
                    key={post.id}
                    className={`${
                      post.id === selectedPost?.id
                        ? "border-orange-400"
                        : "border-0"
                    } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
                    onClick={() => setSelectedPost(post)}
                  >
                    <CardTitle className="text-lg font-medium">
                      {post.name}
                    </CardTitle>
                  </Card>
                ))}
            </CollapsibleContent>
          </Collapsible>
        </>
      );
    }

    return (
      <>
        {props.postsResponse.posts &&
          props.postsResponse.posts.map((post) => (
            <Card
              key={post.id}
              className={`${
                post.id === selectedPost?.id ? "border-orange-400" : "border-0"
              } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
              onClick={() => setSelectedPost(post)}
            >
              <CardTitle className="text-lg font-medium">{post.name}</CardTitle>
            </Card>
          ))}
        {props.postsResponse.forYou &&
          props.postsResponse.forYou.map((post) => (
            <Card
              key={post.id}
              className={`${
                post.id === selectedPost?.id ? "border-orange-400" : "border-0"
              } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
              onClick={() => setSelectedPost(post)}
            >
              <CardTitle className="text-lg font-medium">{post.name}</CardTitle>
            </Card>
          ))}
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-12 px-4">
      <div className="space-y-4">{renderPostList()}</div>
      {selectedPost && (
        <div>
          <Card className="shadow-md border-0">
            <div className="px-16 pt-8">
              <img
                src={selectedPost.thumbnailUrl || ""}
                alt={selectedPost.name}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover w-full h-64"
              />
            </div>
            <CardHeader>
              <CardTitle>{selectedPost.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {selectedPost.description}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PostsView;
