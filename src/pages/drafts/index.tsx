import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";
import prisma from "lib/prisma";
import Head from "next/head";
import BlogCard from "components/BlogCard";
import { BlogPost } from "types/types";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.blogPost.findMany({
    where: {
      author: { email: session.user!.email! },
      status: false,
    },
    include: {
      author: { select: { name: true } },
      tags: { select: { name: true } },
    }
  })

  const serializedDrafts = JSON.parse(JSON.stringify(drafts))

  return {
    props: { drafts: serializedDrafts },
  };
};

type Props = {
  drafts: any
}

const Drafts = (props: Props) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="m-10 p-5 bg-white rounded-lg text-center">
        <h1>My Drafts</h1>
        <p>You need to be authenticated to view this page.</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Elysium Realm | Drafts</title>
        <meta name="description" content="drafts" />
        <meta name="keywords" content="blog, thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="m-10 p-5 bg-white rounded-lg">
        <h1 className="font-bold text-3xl">My Drafts</h1>
        {props.drafts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} path="drafts" />
        ))}
      </div>
    </>
  )
}

export default Drafts