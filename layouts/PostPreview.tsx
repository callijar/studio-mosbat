import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "@/helpers/PostMetadata";

// post preview card style
// shown on blog page
export default function PostPreview(props: PostMetadata) {
  return (
    <Link
      href={`/blog/${props.postId}`}
      className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <Image
      className="mb-5 rounded-lg"
        src={props.cover_image}
        width={600}
        height={400}
        alt="cover image"
      />

      <div className="my-3">{props.category}</div>

      <h2 className="inline-block mb-3 text-2xl font-semibold bg-gradient-to-l from-indigo-200 to-indigo-100 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_15px]">
        {props.title}
      </h2>

      <p className="m-0 max-w-[30ch] text-gray-600">{props.excerpt}</p>
    </Link>
  );
}
