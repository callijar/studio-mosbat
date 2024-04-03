// blog page shows a preview of all posts

import type { Metadata } from "next";

import getPostMetadata from "@/helpers/getPostMetadata";
import PostPreview from "@/layouts/PostPreview";

export const metadata: Metadata = {
  title: "مقالات",
};

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.postId} {...post} /> // the spread operator (...) gives ALL of the post parameters as PostPreview props
  ));

  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      <h1 className="py-10 text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        {" "}
        مقالات{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </main>
  );
}
