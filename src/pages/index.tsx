import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import prisma from "lib/prisma";
import { BlogPost, ProjectPost } from "types/types";
import { useEffect } from "react";

interface Props {
  post: BlogPost;
  project: ProjectPost;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const post = await prisma.blogPost.findFirst({
    where: {
      status: true,
    },
    include: { 
      author: { select: { name: true, email: true } },
      tags: { select: { name: true } },
    },
    orderBy: {
      updatedAt: "desc"
    }
  });

  const project = await prisma.projectPost.findFirst({
    include: {
      techs: { select: { name: true } },
      tags: { select: { name: true } },
    },
    orderBy: {
      updatedAt: "desc"
    }
  })

  if (post && project) {
    const serializedPost = JSON.parse(JSON.stringify(post));
    const serializedProject = JSON.parse(JSON.stringify(project));

    return {
      props: {
        post: {
          ...serializedPost,
          createdAt: new Date(post.createdAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          updatedAt: new Date(post.updatedAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})
        },
        project: {
          ...serializedProject,
          createdAt: new Date(project.createdAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          updatedAt: new Date(project.updatedAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})
        },
      }
    }
  } else {
    return {
      props: {
        post: null,
        project: null
      }
    }
  }
}

const HomePage = ({ post, project }: Props) => {

  return (
    <>
      <Head>
        <title>Elysium Realm | Home</title>
        <meta name="description" content="Find paradise in a website here" />
        <meta name="keywords" content="paradise, elysium" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="m-10 flex flex-grow lg:flex-row flex-col justify-between items-center text-white">
        <div className="w-1/2 p-10 space-y-5">
          <h1 className="text-6xl">Discover fun things<br/>in a single site</h1>
          <h2 className="text-4xl">Get started by checking<br/> the latest blog and projects</h2>
        </div>

        <div className="w-1/2 flex flex-col text-white border-2 border-white m-10 rounded-lg pt-2">
          <h3 className="text-center m-2 font-bold">What&apos;s going on?</h3>
          <div className="bg-white text-black px-4 py-2 mb-2 w-full hover:bg-gray-200">
            <h4 className="font-bold text-blue-500">Latest Project</h4>
            <Link href={`/project/${project.slug}`}>
              <p className="font-bold">{project.title}</p>
              <p>{project.excerpt}</p>
              <p>By Admin On {project.createdAt.toString()}</p>
              <p>Tag(s): Uncategorized</p>
              <p>Tech Stacks: {project.techs.map((tech) => (tech.name))}</p>
              <p>Last Updated On {project.updatedAt.toString()}</p>
            </Link>
          </div>

          <div className="bg-white text-black px-4 py-2 hover:bg-gray-200">
            <h4 className="font-bold text-blue-500">Latest Blog Post</h4>
            <Link href={`/blog/${post.slug}`}>
              <p className="font-bold">{post.title}</p>
              <p>{post.excerpt}</p>
              <p>By {post.author.name} On {post.createdAt.toString()}</p>
              <p>Tag(s): Uncategorized</p>
              <p>Last Updated On {post.updatedAt.toString()}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;