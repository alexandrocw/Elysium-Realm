import Image from "next/image";
import SkeletonBG from "public/skeleton-bg.png";
import { BlogCardProps } from "types/types";
import Link from "next/link";

const BlogCard = ({ post, key, path }: BlogCardProps) => {
  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);

  return (
    <Link href={`/${path}/${post.slug}`}>
      <div className="flex m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200" key={key}>
        {
          post.featuredImage ? (
            <Image alt="" src={post.featuredImage} width={200} height={200} />
          ) : (
            <Image alt="" src={SkeletonBG} width={200} height={200} />
         )
        }
        <div className="flex flex-col">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.excerpt}</p>
          <p>By {post.author.name} On {post.createdAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
          <p>Tag(s): {post.tags.map((tag) => (tag.name))}</p>
          <p>Latest Updated On {post.updatedAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;