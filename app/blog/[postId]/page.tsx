import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import getPostMetadata from "@/helpers/getPostMetadata";


const getPostContent = (postId: string) => {
  const folder = "posts/";
  const file = `${folder}${postId}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    postId: post.postId,
  }));
};


// post page converts the .md post file and shows it in HTML

export default function PostPage(props: any) {
  const postId = props.params.postId;
  const post = getPostContent(postId);

  return (
    <main>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.excerpt}</p>
      </div>
      <Image src={post.data.cover_image} width={200} height={100} alt="cover image" />

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
      

    </main>
  );
};
