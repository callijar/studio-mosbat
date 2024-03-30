import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "@/helpers/PostMetadata";

// post preview card style
// shown on blog page
export default function PostPreview(props: PostMetadata) {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <Image src={props.cover_image} width={600} height={400} alt="cover image" />

      <Link href={`/blog/${props.postId}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p>{props.category}</p>
      <p className="text-slate-700">{props.excerpt}</p>
    </div>
  );
}
