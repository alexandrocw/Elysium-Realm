import prisma from "lib/prisma";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { ProjectDetailsProps } from "types/types";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const projects = await prisma.projectPost.findMany();

  const paths = projects.map((project) => {
    return {
      params: { slug: project.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const project = await prisma.projectPost.findUnique({
    where: {
      slug: slug,
    },
    include: {
      tags: { select: { name: true }},
      techs: { select: { name: true }}
    }
  })

  const serializedProject = JSON.parse(JSON.stringify(project))

  return {
    props: {
      project: serializedProject
    }
  }
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  project.createdAt = new Date(project.createdAt);
  project.updatedAt = new Date(project.updatedAt);

  return (
    <>
      <Head>
        <title>Elysium Realm | {project.title}</title>
        <meta name="description" content={project.content} />
        <meta name="keywords" content={`${project.tags.map((tag) => (tag.name)).join(", ")} + ${project.techs.map((tech) => (tech.name)).join(", ")}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col m-10 bg-white justify-center p-5 rounded-md">
        <h1 className="text-center text-4xl">{project.title}</h1>
        <h2 className="text-center text-xl">By Admin</h2>
        <p className="text-center">Latest Updated On {project.updatedAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <p className="text-center">Tag(s): {project.tags.map((tag) => (tag.name))}</p>
        <p className="text-center">Techs(s): {project.techs.map((tech) => (tech.name))}</p>

        <div className="mt-10">
          <p>{project.content}</p>
        </div>
      </div>
    </> 
  )
}

export default ProjectDetails;