import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query) {
    return res.status(400).send({ error: 'Unknown applicationId' });
  }

  const application = await prisma.application.findUnique({
    where: {
      id: parseInt(req.query.id as string),
    },
    include: {
      contacts: true,
      userEvents: true,
    },
  });

  res.status(200).json(application);
};
