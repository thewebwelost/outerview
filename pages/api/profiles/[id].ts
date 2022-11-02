import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ id: req.query });

  if (!req.query) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  const user = await prisma.profile.findUnique({
    where: {
      id: parseInt(req.query.id as string),
    },
    include: {
      experience: true,
      education: true,
      socials: true,
    },
  });

  res.status(200).json(user);
};
