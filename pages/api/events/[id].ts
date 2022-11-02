import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query) {
    return res.status(400).send({ error: 'Unknown applicationId' });
  }

  const userEvent = await prisma.event.findUnique({
    where: {
      id: parseInt(req.query.id as string),
    },
  });

  res.status(200).json(userEvent);
};
