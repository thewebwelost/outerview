import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.email) {
    return res.status(400).send({ error: 'Unknown user' });
  }

  try {
    const creds = await prisma.credentials.findUniqueOrThrow({
      where: {
        email: req.body.email,
      },
    });

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: creds?.id,
      },
    });

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
