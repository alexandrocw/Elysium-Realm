import Image from "next/image";
import SkeletonBG from "public/skeleton-bg.png";
import { BlogCardProps } from "types/types";
import Link from "next/link";
import { supabase } from "lib/supabaseClient";
import { useEffect, useState } from "react";

const BlogCard = ({ post, key, path }: BlogCardProps) => {
  const [imageUrl, setImageUrl] = useState("");
  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);

  useEffect(() => {
    const getImageUrl = async () => {
      const signedUrl = await supabase.storage.from(`elysium-realm`).createSignedUrl(post.featuredImage, 1);
      setImageUrl(String(signedUrl));
    }
    getImageUrl();
  }, [])

  return (
    <Link href={`/${path}/${post.slug}`}>
      <div className="flex m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200" key={key}>
        {
          post.featuredImage ? (
            <Image alt="" src={SkeletonBG} width={200} height={200} />
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