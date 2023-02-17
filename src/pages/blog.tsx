import BlogCard from "components/BlogCard";
import Head from "next/head";
import { posts } from "data/posts";
import { BlogPost } from "types/types";

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
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;