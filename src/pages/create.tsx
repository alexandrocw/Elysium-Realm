import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Router from "next/router";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { SyntheticEvent } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const submitData = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, slug, content };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    setSlug(title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'').slice(0, 50));
  }, [title])

  return (
    <>
      <Head>
        <title>Elysium Realm | Create New Post</title>
        <meta name="description" content="express your thoughts" />
        <meta name="keywords" content="blog, thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <form onSubmit={submitData} className="m-10 bg-white rounded-lg p-5">
        <h1 className="font-bold text-3xl text-center">Create A New Post</h1>

        <div className="flex flex-col m-5 space-y-5">
          <div className="flex flex-col">
            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              className={"p-5 text-lg my-5 border-2 rounded-lg"}
            />
            <input
              disabled
              placeholder="Slug"
              type="text"
              value={slug}
              className={"p-5 bg-gray-200 w-1/3 border-2 rounded-lg"}
            />
          </div>
      
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
            className={"p-5 text-lg border-2 rounded-lg"}
          />
          <input disabled={!title || !content} type="submit" value="Create" className="bg-green-400 p-5 active:bg-green-500" />
          <button type="button" onClick={() => Router.push("/")} className="bg-red-400 p-5 hover:bg-red-500">Or Cancel</button>
        </div>
      </form>
    </>
  )
}

export default CreatePost;