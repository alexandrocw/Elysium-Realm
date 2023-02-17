import Image from "next/image";
import SkeletonBG from "../public/skeleton-bg.png"
import { ProjectCardProps } from "types/types";

const ProjectCard = ({ project, key}: ProjectCardProps) => {
  return (
    <div className="flex w-full m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200">
      {
        project.featuredImage.length === 0 ? (
          <Image alt="" src={SkeletonBG} width={200} height={200} />
        ) : (
          <Image alt="" src={project.featuredImage} width={200} height={200} />
        )
      }
      <div className="flex flex-col">
        <p className="font-bold">{project.title}</p>
        <p>{project.excerpt}</p>
        <p>By {project.author} On {project.timeCreated}</p>
        <p>Tag(s): {project.tags.join(" ")}</p>
        <p>Latest Updated On {project.timeUpdated}</p>
      </div>
    </div>
  );
}

export default ProjectCard;