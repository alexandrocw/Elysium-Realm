import prisma from "lib/prisma";
import { GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { ParsedUrlQuery } from "querystring";
import { BlogPost, PostDetailsProps } from "types/types";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { status: true }
  });

  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const post = await prisma.blogPost.findUnique({
    where: {
      slug: slug,
    },
    include: {
      author: { select: { name: true, email: true } },
      tags: { select: { name: true }}
    }
  })

  if (!post) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const serializedPost = JSON.parse(JSON.stringify(post))

  return {
    props: {
      post: serializedPost
    }
  }
}

const PostDetails = ({ post }: PostDetailsProps) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Authenticating...</div>
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === post.author.email;
  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);

  const handleDelete = async (id: string): Promise<void> => {
    await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });
    Router.push('/')
  }

  return (
    <>
      <Head>
        <title>Elysium Realm | {post.title}</title>
        <meta name="description" content={post.content} />
        <meta name="keywords" content={post.tags.map((tag) => (tag.name)).join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col m-10 bg-white justify-center p-5 rounded-md">
        <h1 className="text-center text-4xl">{post.title}</h1>
        <h2 className="text-center text-xl">By {post.author.name}</h2>
        <p className="text-center">Latest Updated On {post.updatedAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <p className="text-center">Tag(s): {post.tags.map((tag) => (tag.name))}</p>

        <div className="mt-10">
          <p>{post.content}</p>
          {userHasValidSession && postBelongsToUser && (
            <button type="button" onClick={() => handleDelete(post.id)} className="bg-red-400 p-5 rounded-lg hover:bg-red-500 mt-10">Delete</button>
          )}
        </div>
      </div>
    </> 
  )
}

export default PostDetails;