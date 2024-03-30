import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/helpers/PostMetadata";

export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      cover_image: matterResult.data.cover_image,
      category: matterResult.data.category,
      author: matterResult.data.author,
      author_image: matterResult.data.subtitle,
      id: fileName.replace(".md", ""),
    };
  });

  return posts;
}
