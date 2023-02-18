import prisma from "lib/prisma";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
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
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const post = await prisma.blogPost.findUnique({
    where: {
      slug: slug,
    },
    include: {
      author: { select: { name: true } },
      tags: { select: { name: true }}
    }
  })

  const serializedPost = JSON.parse(JSON.stringify(post))

  return {
    props: {
      post: serializedPost
    }
  }
}

const PostDetails = ({ post }: PostDetailsProps) => {
  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);

  return (
    <>
      <Head>
        <title>Elysium Realm | {post.title}</title>
        <meta name="description" content={post.content} />
        <meta name="keywords" content={post.tags.map((tag) => (tag.name)).join(" ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col m-10 bg-white justify-center p-5 rounded-md">
        <h1 className="text-center text-4xl">{post.title}</h1>
        <h2 className="text-center text-xl">By {post.author.name}</h2>
        <p className="text-center">Latest Updated On {post.updatedAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <p className="text-center">Tag(s): {post.tags.map((tag) => (tag.name))}</p>

        <div className="mt-10">
          <p>{post.content}</p>
        </div>
      </div>
    </> 
  )
}

export default PostDetails;