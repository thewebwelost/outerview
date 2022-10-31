import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ req, res });

  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
    },
  });

  const users = await prisma.user.findMany();

  console.log({ newUser, users });

  res.status(200).json(users);
};
