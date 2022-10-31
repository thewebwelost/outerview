import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ query: req.query });

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(req.query.id as string),
    },
  });

  res.status(200).json(user);
};
