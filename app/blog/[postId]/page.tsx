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

// Markdown extension converts the .md post file to HTML
export default function PostPage(props: any) {
  const postId = props.params.postId;
  const post = getPostContent(postId);

  return (
    <main className="flex min-h-screen max-w-screen-lg flex-col items-center justify-evenly px-8 mx-auto py-8 md:py-10">
      <div className="container max-w-screen-sm flex justify-between items-center mt-4">
        <div className="my-3 text-gray-600">
          {post.data.category}
        </div>
        <div className="my-3 text-gray-600">
          زمان مطالعه 5 دقیقه
        </div>
      </div>
      <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        {post.data.title}
      </h1>

      <Image
        className="mb-5 lg:rounded-lg max-w-screen-lg"
        src={post.data.cover_image}
        width={600}
        height={400}
        alt="cover image"
      />

      <article className="prose max-w-prose md:prose-lg lg:prose-xl prose-img:rounded prose-a:decoration-indigo-500 ">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
