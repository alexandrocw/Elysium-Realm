import prisma from "lib/prisma";
import { Request, Response } from "express";

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
  const postId = String(req.query.id);
  const { title, slug, content, featuredImage } = req.body;
  const excerpt = createExcerpt(content, 50);

  if (req.method == "POST") {
    const result = await prisma.blogPost.update({
      where: {
        id: postId,
      },
      data: {
        title: title,
        slug: slug,
        content: content,
        excerpt: excerpt,
        featuredImage: featuredImage,
      }
    })
    res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}

export default handle;