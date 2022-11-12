import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('body', req.body);

  if (!req.body.userId) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  try {
    const event = await prisma.event.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(event);
  } catch (err) {
    console.error(err);
  }
};
