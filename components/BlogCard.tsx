import Image from "next/image";
import SkeletonBG from "../public/skeleton-bg.png"

const BlogCard = () => {
  return (
    <div className="flex w-full m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200">
      <Image alt="" src={SkeletonBG} width={200} height={200} />

      <div className="flex flex-col">
        <p className="font-bold">New blog post!</p>
        <p>This new blog post will be used for testing...</p>
        <p>By Author On Wed Feb 15 2023</p>
        <p>Tag(s): Uncategorized</p>
        <p>Latest Updated On Wed Feb 15 2023</p>
      </div>
    </div>
  );
}

export default BlogCard;