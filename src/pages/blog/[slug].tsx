import prisma from "lib/prisma";
import { supabase } from "lib/supabaseClient";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { BlogPost, PostDetailsProps } from "types/types";
import SkeletonBG from "public/skeleton-bg.png"
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.blogPost.findUnique({
    where: {
      slug: String(params?.slug)
    },
    include: { 
      author: { select: { name: true, email: true } },
      tags: { select: { name: true } },
    },
  });

  if (!post) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const serializedPost = JSON.parse(JSON.stringify(post));

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
  const [imageUrl, setImageUrl] =  useState("");
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === post.author.email;

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

  const handleDelete = async (id: string): Promise<void> => {
    await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });
    Router.push('/blog')
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
        {
          imageUrl ? (
            <Image alt="" src={imageUrl} width={600} height={800} />
          ) : (
            <Image alt="" src={SkeletonBG} width={600} height={800} />
         )
        }
        <h1 className="text-center text-4xl">{post.title}</h1>
        <h2 className="text-center text-xl">By {post.author.name}</h2>
        <p className="text-center">Latest Updated On </p>
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