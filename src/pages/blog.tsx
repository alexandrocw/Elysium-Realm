import BlogCard from "components/BlogCard";
import Head from "next/head";

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
        <div className="bg-white rounded-md shadow-md flex flex-wrap">
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
      </div>
    </>
  );
}

export default BlogPage;