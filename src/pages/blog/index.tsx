import BlogCard from "components/BlogCard";
import Head from "next/head";
import { BlogPost, BlogPosts } from "types/types";
import prisma from "lib/prisma";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
	const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Elysium Realm | Blog</title>
        <meta name="description" content="Home to the people who wants to out their thoughts" />
        <meta name="keywords" content="blog, thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="m-10 flex flex-col space-y-5">
        {
          !session ? 
          <>
          </> 
          : (
          <div className="flex flex-col space-y-2">
            <Link className="bg-white p-5 rounded-lg hover:bg-gray-200 text-center text-3xl" href="/create">
              Create a new post
            </Link>
            <Link className="bg-white p-5 rounded-lg hover:bg-gray-200 text-center text-3xl" href="/drafts">
              Drafts
            </Link>
          </div>    
          )
        }

        <div className="bg-white rounded-md shadow-md flex flex-col flex-wrap flex-grow">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} path="blog" />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;