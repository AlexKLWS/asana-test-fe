"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PostsResponse } from "@/types/PostsResponse";
import { PostWithTopicResponse } from "@/types/PostWithTopicResponse";

type Props = {
  posts: PostsResponse;
};

const PostsView = (props: Props) => {
  const [selectedPost, setSelectedPost] = useState<PostWithTopicResponse>(
    props.posts.data.posts.edges[0].node
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-12 px-4">
      <div className="space-y-4">
        {props.posts.data.posts.edges.map((edge) => (
          <Card
            key={edge.node.id}
            className={`${
              edge.node.id === selectedPost.id ? "" : "border-0"
            } shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
            onClick={() => setSelectedPost(edge.node)}
          >
            <CardTitle className="text-lg font-medium">
              {edge.node.name}
            </CardTitle>
          </Card>
        ))}
      </div>
      {selectedPost && (
        <div>
          <Card className="shadow-md border-0">
            <img
              src={selectedPost.thumbnail.url || ""}
              alt={selectedPost.name}
              width={600}
              height={400}
              className="rounded-lg mb-4 object-cover w-full h-64"
            />
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
