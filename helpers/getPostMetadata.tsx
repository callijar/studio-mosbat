// post metadata converted from front-matter on top of the md files using gray-matter
// returns the categories as strings
// the "id" category is the name of the .md file and is used for routing

import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/helpers/PostMetadata"; // Metadata category types

export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";                // posts directory
  const files = fs.readdirSync(folder);   // read all files in directory
  const markdownPosts = files.filter((file) => file.endsWith(".md")); // select .md files

  // Get gray-matter data from each .md file
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
      postId: fileName.replace(".md", ""),
    };
  });

  return posts;
}
