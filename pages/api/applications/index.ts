import type { NextApiRequest, NextApiResponse } from 'next';
import getUserByEmail from '../../../api/db/getUserByEmail';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.email) {
    return res.status(400).send({ error: 'Unknown user' });
  }

  try {
    const user = await getUserByEmail(req.body.email);

    const applications = await prisma.application.findMany({
      where: {
        userId: user?.id,
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
