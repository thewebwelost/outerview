import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  if (!body.userId) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  try {
    const userEvent = await prisma.event.findMany({
      where: {
        userId: body.userId,
      },
    });
    res.status(200).json(userEvent);
  } catch (err) {
    console.error(err);
  }
};
