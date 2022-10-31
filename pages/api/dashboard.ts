import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const profiles = await prisma.profile.findMany();
  const application = await prisma.application.findMany();
  const userEvent = await prisma.event.findMany();
  res.status(200).json({
    profiles,
    application,
    userEvent,
  });
};
