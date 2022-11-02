import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  if (!body.userId) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  try {
    const applications = await prisma.application.findMany({
      where: {
        userId: body.userId,
      },
      include: {
        contacts: true,
        userEvents: true,
      },
    });
    res.status(200).json(applications);
  } catch (err) {
    console.error(err);
  }
};
