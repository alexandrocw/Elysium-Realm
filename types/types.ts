import { ReactNode } from "react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  timeCreated: string;
  timeUpdated: string;
  author: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: string;
}

interface ProjectPost {
  id: string;
  title: string;
  slug: string;
  timeCreated: string;
  timeUpdated: string;
  author: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: string;
}

interface BlogCardProps {
  post: BlogPost;
  key: string;
}

interface ProjectCardProps {
  project: ProjectPost;
  key: string;
}

interface FormData {
  subject: string;
  message: string;
}

interface LayoutProps {
  children?: ReactNode;
}

export type {
  BlogCardProps,
  LayoutProps,
  FormData,
  BlogPost,
  ProjectCardProps,
  ProjectPost
}