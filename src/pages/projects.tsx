import ProjectCard from "components/ProjectCard";
import Head from "next/head";
import Image from "next/image";
import SkeletonBG from "../../public/skeleton-bg.png"

const ProjectsPage = () => {
  return (
    <div>
      <Head>
        <title>Elysium Realm | Projects</title>
        <meta name="description" content="A compilation of Project built by Elysium Realm" />
        <meta name="keywords" content="projects, programs, applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex m-10 bg-white rounded-lg p-5 space-x-5">
        <Image alt="" src={SkeletonBG} width={600} height={600} />
        
        <div className="text-xl text-black">
          <h3 className="text-3xl">new site</h3>
          <p>By Author On Wed Feb 15 2023</p>
          <p>Tag(s): Fullstack, nextjs, typescript</p>
          <p>Latest Updated On Wed Feb 15 2023</p>
        </div>
      </div>

      <div className="m-10 flex space-x-2">
        <div className="w-2/3 bg-white rounded-md shadow-md flex flex-wrap">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>

        <div className="bg-white h-full w-1/3 rounded-md border-2 border-gray-200">
          <div className="font-bold text-center text-black p-2">
            <h3>Sponsored Content</h3>
          </div>

          <Image alt="" src={SkeletonBG} width={600} height={1200} />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;