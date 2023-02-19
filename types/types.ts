import { ReactNode } from "react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    name: string
  };
  authorId: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  tags: {
    name: string;
  }[];
  status: string;
}

interface BlogPosts {
  posts: BlogPost[];
}

interface ProjectPost {
  id: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  featuredImage: string;
  links: String[];
  techs: {
    name: string;
  }[];
  excerpt: string;
  content: string;
  tags: {
    name: string;
  }[];
  status: string;
}

interface ProjectPosts {
  projects: ProjectPost[];
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

interface PostDetailsProps {
  post: BlogPost;
}

interface ProjectDetailsProps {
  project: ProjectPost;
}

export type {
  BlogCardProps,
  LayoutProps,
  FormData,
  BlogPost,
  ProjectCardProps,
  ProjectPost,
  ProjectPosts,
  BlogPosts,
  PostDetailsProps,
  ProjectDetailsProps
}