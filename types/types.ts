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
  createdAt: string;
  updatedAt: string;
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

interface PostDetailsProps {
  post: BlogPost;
}

export type {
  BlogCardProps,
  LayoutProps,
  FormData,
  BlogPost,
  ProjectCardProps,
  ProjectPost,
  BlogPosts,
  PostDetailsProps
}