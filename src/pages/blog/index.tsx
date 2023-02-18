import BlogCard from "components/BlogCard";
import Head from "next/head";
import { BlogPost, BlogPosts } from "types/types";
import prisma from "lib/prisma";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { status: true },
    orderBy: { updatedAt: "desc" },
    include: {
      author: {
        select: { name: true },
      },
      tags: {
        select: { name: true }
      }
    },
  });

  const serializedPosts = JSON.parse(JSON.stringify(posts))
  
  return {
    props: { posts: serializedPosts },
    revalidate: 10
  }
}

const BlogPage = ({ posts }: BlogPosts) => {
  return (
    <>
      <Head>
        <title>Elysium Realm | Blog</title>
        <meta name="description" content="Home to the people who wants to out their thoughts" />
        <meta name="keywords" content="blog, thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <div className="m-10 bg-white rounded-md shadow-md flex flex-col flex-wrap flex-grow">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;