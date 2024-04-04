// post preview card
// display a preview of posts on the blog page
// posts will be automatically added from the root directory in the posts folder

import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "@/helpers/PostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <Link
      href={`/blog/${props.postId}`}
      className="group rounded-lg border border-transparent px-5 py-4 md:m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <Image
      className="mb-5 rounded-lg"
        src={props.cover_image}
        width={1200}
        height={480}
        alt="cover image"
      />

      <div className="my-3 text-emerald-600 font-semibold">{props.category}</div>

      <h2 className="inline-block mb-3 text-2xl font-semibold bg-gradient-to-l from-indigo-200 to-indigo-100 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_15px]">
        {props.title}
      </h2>

      <p className="m-0 text-gray-600">{props.excerpt}</p>
    </Link>
  );
}
