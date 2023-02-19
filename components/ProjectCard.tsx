import Image from "next/image";
import Link from "next/link";
import SkeletonBG from "public/skeleton-bg.png";
import { ProjectCardProps } from "types/types";

const ProjectCard = ({ project, key}: ProjectCardProps) => {
  project.createdAt = new Date(project.createdAt);
  project.updatedAt = new Date(project.updatedAt);

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="flex m-2 border-y-2 border-gray-200 space-x-2 hover:bg-gray-200" key={key}>
        {
          project.featuredImage ? (
            <Image alt="" src={project.featuredImage} width={200} height={200} />
          ) : (
            <Image alt="" src={SkeletonBG} width={200} height={200} />
          )
        }
        <div className="flex flex-col">
          <h3 className="font-bold">{project.title}</h3>
          <p>{project.excerpt}</p>
          <p>By Admin On {project.createdAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
          <p>Tag(s): {project.tags.map((tag) => (tag.name))}</p>
          <p>Tech Stack(s): {project.techs.map((tech) => (tech.name))}</p>
          <p>Latest Updated On {project.updatedAt.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;