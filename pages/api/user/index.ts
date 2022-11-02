import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany({
    include: {
      profiles: true,
      applications: true,
    },
  });
  res.status(200).json(users);
};
