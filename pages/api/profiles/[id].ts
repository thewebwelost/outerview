import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ query: req.query });

  const user = await prisma.profile.findUnique({
    where: {
      id: parseInt(req.query.id as string),
    },
    include: {
      experience: true,
      education: true,
    },
  });

  res.status(200).json(user);
};
