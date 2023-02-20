import prisma from "lib/prisma";
import { Request, Response } from "express";

const handle = async (req: Request, res: Response) => {
  const postId = String(req.query.id);
  const post = await prisma.blogPost.update({
    where: { id: postId },
    data: { status: true },
  });
  res.json(post);
}

export default handle;