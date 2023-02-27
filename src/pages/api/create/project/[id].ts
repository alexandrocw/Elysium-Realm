import prisma from "lib/prisma";
import { Request, Response } from "express";

const handle = async (req: Request, res: Response) => {
  const postId = String(req.query.id);
  if (req.method === 'DELETE') {
    const post = await prisma.projectPost.delete({
      where: { id: postId },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}

export default handle;