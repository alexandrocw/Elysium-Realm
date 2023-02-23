import prisma from "lib/prisma";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { PostDetailsProps } from "types/types";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { supabase } from "lib/supabaseClient";
import SkeletonBG from "public/skeleton-bg.png";
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

  const serializedDrafts = JSON.parse(JSON.stringify(post));

  return {
    props: {
      post: serializedDrafts
    }
  }
}

const PostDetails = ({ post }: PostDetailsProps) => {
  const [imageUrl, setImageUrl] =  useState("");
  const { data: session, status } = useSession();
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === post.author.email;
  let title = post.title;
  

  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);

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

  const handlePublish = async (id: string): Promise<void> => {
    await fetch(`/api/publish/${id}`, {
      method: 'PUT',
    });
    await Router.push('/blog');
  }

  const handleDelete = async (id: string): Promise<void> => {
    await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });
    Router.push('/drafts')
  }

  if (status === 'loading') {
    return <div>Authenticating...</div>
  }

  if (!post.status) {
    title = `${title} (Draft)`
  }

  return (
    <>
      <Head>
        <title>Elysium Realm | {title}</title>
        <meta name="description" content={post.content} />
        <meta name="keywords" content={post.tags.map((tag) => (tag.name)).join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col m-10 bg-white justify-center p-5 rounded-md">
        <h1 className="text-center text-4xl">{title}</h1>
        <div className="flex justify-center items-center">
          {
            imageUrl ? (
              <Image alt="" src={imageUrl} width={600} height={800}  />
            ) : (
              <Image alt="" src={SkeletonBG} width={600} height={800} />
          )
          }
        </div>
        <h2 className="text-center text-xl">By {post.author.name}</h2>
        <p className="text-center">Latest Updated On {post.updatedAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <p className="text-center">Tag(s): {post.tags.map((tag) => (tag.name))}</p>

        <div className="mt-10">
          {!post.status && userHasValidSession && postBelongsToUser && (
            <div>
              <p>{post.content}</p>
              <button type="button" onClick={() => handlePublish(post.id)} className="bg-green-400 p-5 rounded-lg hover:bg-green-500 mt-10">Publish</button>
              <button type="button" onClick={() => handleDelete(post.id)} className="bg-red-400 p-5 rounded-lg hover:bg-red-500 mt-10">Delete</button>
            </div>
          )}
        </div>
      </div>
    </> 
  )
}

export default PostDetails;