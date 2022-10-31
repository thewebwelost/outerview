import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ResponseData = {
  profiles: object[];
  applications: object[];
  events: object[];
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const profiles = await prisma.profile.findMany({
    where: {
      userId: req.body || 1,
    },
    include: {
      education: true,
      experience: true,
    },
  });

  const applications = await prisma.application.findMany({
    where: {
      userId: req.body || 1,
    },
    include: {
      contacts: true,
      userEvents: true,
    },
  });

  const events = await prisma.event.findMany({
    where: {
      userId: req.body || 1,
    },
  });

  res.status(200).json({
    profiles,
    applications,
    events,
  });
};
