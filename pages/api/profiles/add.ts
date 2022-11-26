import type { NextApiRequest, NextApiResponse } from 'next';
import {
  IEducation,
  IExperience,
} from '../../../app/(inner)/profiles/add/page';
import prisma from '../../../prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('ADD PROFILE', req.body);

  if (!req.body.userId) {
    return res.status(400).send({ error: 'Unknown userId' });
  }

  try {
    const { contacts, ...body } = req.body;

    const profile = await prisma.profile.create({
      data: {
        userId: body.userId,
        name: body.name,
        title: body.title,
        email: body.email,
        website: body.website,
        location: body.location,
        summary: body.summary,
        details: body.details,
        hardSkills: body.hardSkills,
        softSkills: body.softSkills,
        isComplete: true,
        experience: {
          create: body.experience.map((experience: IExperience) => ({
            role: experience.role,
            company: experience.company,
            startDate: experience.startDate,
            endDate: experience.endDate,
            isCurrent: experience.isCurrent,
            responsibilities: experience.resps,
            achievements: experience.achievesList,
            keywords: experience.keywordsList,
          })),
        },
        education: {
          create: body.education.map((education: IEducation) => ({
            name: education.edName,
            startDate: education.edStart,
            endDate: education.edEnd,
            degree: education.edDegree,
            details: education.edDesc,
          })),
        },
      },
    });
    res.status(200).json(profile);
  } catch (err) {
    console.error(err);
  }
};
