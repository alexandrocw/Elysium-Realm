import { getSession } from "next-auth/react";
import prisma from "lib/prisma";
import { Request, Response } from "express";

// POST /api/post
// Required fields in body: title, slug, excerpt, content

const createExcerpt = (value: string, maxLength: number): string => {
  if (value.length <= maxLength) {
    return value;
  }

  // Truncate the text to the given length
  let text = value.slice(0, maxLength).replace(/[\s,.:;!?]+$/, '');

  text += '...';

  return text;
}

const handle = async (req: Request, res: Response) => {
  const { title, slug, content, featuredImage } = req.body;

  const excerpt = createExcerpt(content, 20);

  const session = await getSession({ req });
  const result = await prisma.blogPost.create({
    data: {
      title: title,
      slug: slug,
      excerpt: excerpt,
      content: content,
      featuredImage: featuredImage,
      author: { connect: { email: session?.user?.email! } }
    },
  });
  res.json(result);
}

export default handle;