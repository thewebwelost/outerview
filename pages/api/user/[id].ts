import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(req.query.id as string),
    },
    include: {
      profiles: true,
      applications: true,
    },
  });

  res.status(200).json(user);
};
