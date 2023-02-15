import BlogCard from "components/BlogCard";
import Head from "next/head";
import Image from "next/image";
import SkeletonBG from "../../public/skeleton-bg.png"

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Elysium Realm | Blog</title>
        <meta name="description" content="Home to the people who wants to out their thoughts" />
        <meta name="keywords" content="blog, thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="m-10 flex space-x-2">
        <div className="w-2/3 bg-white rounded-md shadow-md flex flex-wrap">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />

        </div>

        <div className="bg-white h-full w-1/3 rounded-md border-2 border-gray-200">
          <div className="font-bold text-center text-black p-2">
            <h3>Sponsored Content</h3>
          </div>

          <Image alt="" src={SkeletonBG} width={600} height={1200} />
        </div>
      </div>
    </>
  );
}

export default BlogPage;