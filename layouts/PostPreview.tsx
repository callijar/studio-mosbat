import Link from "next/link";
import { PostMetadata } from "@/helpers/PostMetadata";

export default function PostPreview (props: PostMetadata) {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <Link href={`/posts/${props.id}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.excerpt}</p>
    </div>
  );
};