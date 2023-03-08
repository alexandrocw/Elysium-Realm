import { supabase } from "lib/supabaseClient";
import { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { BlogPost } from "types/types";

interface Props {
  post: BlogPost;
}

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

  if (post) {
    const serializedPost = JSON.parse(JSON.stringify(post));
    return {
      props: {
        post: {
          ...serializedPost,
          createdAt: new Date(post.createdAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          updatedAt: new Date(post.updatedAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})  
        }
      }
    }
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

const UpdateBlog: NextPage<Props> = ({ post }: Props ) => {
  const [image, setImage] = useState<any | null>(null);
  const [title, setTitle] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if(post.author.email === session?.user?.email) {
      setImage(post.featuredImage);
      setTitle(post.title);
      setSlug(post.slug);
      setContent(post.content);
      setIsAuthorized(true);
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <>Loading...</>
    )
  }

  if (!isAuthorized) {
    Router.push("/");
  }

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0]
      setImage(i);
    }
  }

  const submitData = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      let body;
      if (image) {
        const { data, error } = await supabase.storage.from("elysium-realm").upload(`blogImages/${image.name}`, image as File);
        body = { title, slug, content, featuredImage: data?.path };
      } else {
        body = { title, slug, content, featuredImage: null };
      }
      await fetch(`/api/update/blog/${post.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/blog');
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <Head>
        <title>Elysium Realm | Update {post.title}</title>
        <meta name="description" content={post.content} />
        <meta name="keywords" content={post.tags.map((tag) => (tag.name)).join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <form onSubmit={submitData} className="m-10 bg-white rounded-lg p-5">
        <h1 className="font-bold text-3xl text-center">Create A New Post</h1>

        <div className="flex flex-col m-5 space-y-5">
          <div className="flex flex-col">
            <input type="file" id="featuredImage" name="featuredImage" onChange={handleImage} accept="image/*" />
            <label htmlFor="title" className="hidden">Title</label>
            <input
              autoFocus
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              className={"p-5 text-lg my-5 border-2 rounded-lg"}
            />
            <label htmlFor="slug" className="hidden">Slug</label>
            <input
              id="slug"
              disabled
              placeholder="Slug"
              type="text"
              value={slug}
              className={"p-5 bg-gray-200 w-1/3 border-2 rounded-lg"}
            />
          </div>

          <label htmlFor="tags" className="hidden">Tags</label>
          <select 
            id="tags"
            name="tags"
          >
          </select>

          <label htmlFor="content" className="hidden">Content</label>
          <textarea
            id="content"
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
            className={"p-5 text-lg border-2 rounded-lg"}
          />
          <input disabled={!title || !content} type="submit" value="Update" className="bg-green-400 p-5 active:bg-green-500" />
          <button type="button" onClick={() => Router.push("/")} className="bg-red-400 p-5 hover:bg-red-500">Or Cancel</button>
        </div>
      </form>
    </>
  )
}

export default UpdateBlog