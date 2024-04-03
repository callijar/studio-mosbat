// individual post page

// dynamic routing
// [postId] is the post file name without extension (.md)

import fs from "fs";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/helpers/getPostMetadata";
import type { Metadata } from "next";

// generating dynamic metadata for each post
export function generateMetadata(props: any): Metadata {
  const postId = props.params.postId;
  const post = getPostContent(postId);
  return {
    title: post.data.title,
    description: post.data.excerpt,
  };
}

// read post content only from the .md file without the front-matter on top
const getPostContent = (postId: string) => {
  const folder = "posts/";
  const file = `${folder}${postId}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

// maps all posts pages and renders them as static HTML
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    postId: post.postId,
  }));
};

// Markdown extension converts the .md post file to HTML and shows it to the user
export default function PostPage(props: any) {
  const postId = props.params.postId;
  const post = getPostContent(postId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly px-8 mx-auto py-8 md:py-10">
      <h1 className="mb-5 py-10 text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        {post.data.title}
      </h1>

      <Image
        className="mb-5 lg:rounded-lg max-w-screen-md"
        src={post.data.cover_image}
        width={1200}
        height={480}
        alt="cover image"
      />

      <div className="container max-w-screen-sm flex justify-between items-center my-4 font-semibold">
        <div className="my-3 text-emerald-600">{post.data.category}</div>
        <div className="my-3 text-indigo-600">{post.data.reading_time}</div>
      </div>

      <article className="prose prose:text-gray-500 max-w-prose md:prose-md lg:prose-lg prose-img:rounded prose-a:decoration-indigo-300 prose-a:decoration-none prose-a:decoration-2 prose-a:underline-offset-4">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
