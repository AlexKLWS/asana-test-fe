"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PostsLoader = () => {
  return (
    <>
      <div className="text-orange-500 mx-auto my-4 text-center animate-pulse text-wrap text-lg">
        {
          "Unfortunately, JVM Lambda cold start can take up to 40 seconds, please try refreshing if it takes longer that that to load the page"
        }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-12 px-4">
        <div className="space-y-4">
          {Array(5)
            .fill(0)
            .map((post, index) => (
              <Card
                key={`${index}`}
                className={`shadow-md cursor-pointer hover:shadow-lg transition-shadow p-4 lg:p-8 bg-white/80`}
              >
                <CardTitle className="text-lg font-medium">
                  <Skeleton className="h-6 w-72" />
                </CardTitle>
              </Card>
            ))}
        </div>
        <Card className="shadow-md border-0">
          <div className="px-16 pt-8">
            <Skeleton className="mb-4 object-cover w-full h-64" />
          </div>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-8 w-[250px]" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-72 mt-4" />
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PostsLoader;
