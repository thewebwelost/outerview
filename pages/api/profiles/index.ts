import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  if (!body.userId) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  try {
    const users = await prisma.profile.findMany({
      where: {
        userId: body.userId,
      },
      include: {
        experience: true,
        education: true,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
  }
};
