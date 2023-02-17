import Image from "next/image";
import SkeletonBG from "../public/skeleton-bg.png"
import { BlogCardProps } from "types/types";

const BlogCard = ({ post, key }: BlogCardProps) => {
  return (
    <div className="flex w-full m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200" key={key}>
      {
        post.featuredImage.length === 0 ? (
          <Image alt="" src={SkeletonBG} width={200} height={200} />
        ) : (
          <Image alt="" src={post.featuredImage} width={200} height={200} />
        )
      }
      <div className="flex flex-col">
        <p className="font-bold">{post.title}</p>
        <p>{post.excerpt}</p>
        <p>By {post.author} On {post.timeCreated}</p>
        <p>Tag(s): {post.tags.join(" ")}</p>
        <p>Latest Updated On {post.timeUpdated}</p>
      </div>
    </div>
  );
}

export default BlogCard;