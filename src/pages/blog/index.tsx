import BlogCard from "components/BlogCard";
import Head from "next/head";
import { BlogPost, BlogPosts } from "types/types";
import prisma from "lib/prisma";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.blogPost.findMany({
    where: {
      status: true,
    },
    include: {
      author: { select: { name: true } },
      tags: { select: { name: true } },
    },
    orderBy: {
      updatedAt: "desc"
    }
  })

  if (posts) {
    const serializedPosts = JSON.parse(JSON.stringify(posts));
    const modifiedPosts = serializedPosts.map((post: any) => {
      return {
        ...post,
        createdAt: new Date(post.createdAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
        updatedAt: new Date(post.updatedAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})
      }
    })
    return {
      props: {
        posts: modifiedPosts
      }
    }
  } else {
    return {
      props: {
        posts: null
      }
    }
  }
};

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