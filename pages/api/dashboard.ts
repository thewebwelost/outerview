import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

type ResponseData = {
  profiles: object[];
  applications: object[];
  events: object[];
};

type ErrorData = {
  error: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrorData>
) => {
  if (!req.body.email) {
    return res.status(400).send({ error: 'unknown email' });
  }

  const user = await prisma.credentials.findUnique({
    where: {
      email: req.body.email,
    },
  });

  const profiles = await prisma.profile.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      education: true,
      experience: true,
    },
  });

  const applications = await prisma.application.findMany({
    where: {
      userId: req.body.userId,
    },
    include: {
      contacts: true,
      userEvents: true,
    },
  });

  const events = await prisma.event.findMany({
    where: {
      userId: req.body.userId,
    },
  });

  res.status(200).json({
    profiles,
    applications,
    events,
  });
};
