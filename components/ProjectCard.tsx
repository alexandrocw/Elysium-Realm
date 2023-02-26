import { supabase } from "lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import SkeletonBG from "public/skeleton-bg.png";
import { useEffect, useState } from "react";
import { ProjectCardProps } from "types/types";

const ProjectCard = ({ project, key }: ProjectCardProps) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if(project.featuredImage) downloadImage(project.featuredImage);
  }, [project.featuredImage])

  const downloadImage = async (path: any) => {
    try {
      const { data, error } = await supabase.storage.from("elysium-realm").download(path);
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data);
      setImageUrl(url)
    } catch (error) {

    }
  }

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
          <p>By Admin On {project.createdAt.toString()}</p>
          <p>Tag(s): {project.tags.map((tag) => (tag.name))}</p>
          <p>Tech Stack(s): {project.techs.map((tech) => (tech.name))}</p>
          <p>Latest Updated On {project.updatedAt.toString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;