import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('body', req.body);

  if (!req.body.userId) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  try {
    const { contacts, ...body } = req.body;

    const applications = await prisma.application.create({
      data: {
        userId: body.userId,
        company: body.title,
        role: body.role,
        url: body.url,
        description: body.desc,
        salary: body.comp,
        location: body.location,
        contacts: {
          create: contacts.map((item: any) => ({
            title: item.name,
            url: item.contact,
          })),
        },
      },
    });
    res.status(200).json(applications);
  } catch (err) {
    console.error(err);
  }
};
