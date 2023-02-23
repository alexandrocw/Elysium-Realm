import Image from "next/image";
import SkeletonBG from "public/skeleton-bg.png";
import { BlogCardProps } from "types/types";
import Link from "next/link";
import { supabase } from "lib/supabaseClient";
import { useEffect, useState } from "react";

const BlogCard = ({ post, key, path }: BlogCardProps) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if(post.featuredImage) downloadImage(post.featuredImage);
  }, [post.featuredImage])

  const downloadImage = async (path: any) => {
    try {
      const { data, error } = await supabase.storage.from("elysium-realm").download(path);
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data);
      setImageUrl(url)
    } catch (error) {

    }
  }

  return (
    <Link href={`/${path}/${post.slug}`}>
      <div className="flex m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200" key={key}>
        {
          imageUrl ? (
            <Image alt="" src={imageUrl} width={200} height={200} />
          ) : (
            <Image alt="" src={SkeletonBG} width={200} height={200} />
         )
        }
        <div className="flex flex-col">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.excerpt}</p>
          <p>By {post.author.name} On </p>
          <p>Tag(s): {post.tags.map((tag) => (tag.name))}</p>
          <p>Latest Updated On </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;