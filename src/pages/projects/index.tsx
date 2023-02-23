import ProjectCard from "components/ProjectCard";
import Head from "next/head";
import Image from "next/image";
import SkeletonBG from "public/skeleton-bg.png"
import { ProjectPost, ProjectPosts } from "types/types";
import { GetStaticProps } from "next";
import prisma from "lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma.projectPost.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      tags: {
        select: { name: true }
      },
      techs: {
        select: { name: true }
      },
    }
  })

  const serializedProjects = JSON.parse(JSON.stringify(projects))

  return {
    props: { projects: serializedProjects },
    revalidate: 10
  }
}

const ProjectsPage = ({ projects }: ProjectPosts) => {

  return (
    <>
      <Head>
        <title>Elysium Realm | Projects</title>
        <meta name="description" content="A compilation of Project built by Elysium Realm" />
        <meta name="keywords" content="projects, programs, applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="">
        <div className="m-10 bg-white rounded-md shadow-md flex flex-col flex-wrap flex-grow">
          {projects.map((project: ProjectPost) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;