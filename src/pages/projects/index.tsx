import ProjectCard from "components/ProjectCard";
import Head from "next/head";
import Image from "next/image";
import SkeletonBG from "public/skeleton-bg.png"
import { ProjectPost, ProjectPosts } from "types/types";
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.projectPost.findMany({
    include: {
      techs: { select: { name: true } },
      tags: { select: { name: true } },
    },
    orderBy: {
      updatedAt: "desc"
    }
  })

  if (projects) {
    const serializedProjects = JSON.parse(JSON.stringify(projects));
    const modifiedProjects = serializedProjects.map((project: any) => {
      return {
        ...project,
        createdAt: new Date(project.createdAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
        updatedAt: new Date(project.updatedAt).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})
      }
    })
    return {
      props: {
        projects: modifiedProjects
      }
    }
  } else {
    return {
      props: {
        projects: null
      }
    }
  }
}

const ProjectsPage = ({ projects }: ProjectPosts) => {
	const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Elysium Realm | Projects</title>
        <meta name="description" content="A compilation of Project built by Elysium Realm" />
        <meta name="keywords" content="projects, programs, applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="m-10 flex flex-col space-y-5">
        {
          !session ? 
          <>
          </> 
          : (
          <div className="flex flex-col space-y-2">
            <Link className="bg-white p-5 rounded-lg hover:bg-gray-200 text-center text-3xl" href="/create/project">
              Create a new project
            </Link>
          </div>    
          )
        }

        <div className="bg-white rounded-md shadow-md flex flex-col flex-wrap flex-grow">
          {projects.map((project: ProjectPost) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;