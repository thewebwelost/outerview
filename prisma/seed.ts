import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Billy',
      credentials: {
        create: {
          email: 'test2@email.yo',
          password: 'aaaa',
        },
      },
      profiles: {
        create: [
          {
            name: 'John Doe',
            title: 'the cook',
            summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
            details: ['game changer', 'spirit breaker', 'team player'],
            hardSkills: ['game changer', 'spirit breaker', 'team player'],
            softSkills: ['game changer', 'spirit breaker', 'team player'],
            experience: {},
            education: {},
            location: 'Arkham, Main str.',
            email: 'test2@email.yo',
            website: 'https://www.prisma.io/',
            socials: {},
          },
        ],
      },
      applications: {
        create: [
          {
            company: 'Cheese Ind.',
            role: 'detective',
            url: 'https://www.prisma.io/',
            description: 'Nice job, good people',
            salary: '',
            location: '',
            contacts: {
              create: [
                {
                  title: 'test 1',
                  url: 'https://www.prisma.io/',
                },
                {
                  title: 'test 2',
                  url: 'https://www.prisma.io/',
                },
              ],
            },
            userEvents: {
              create: [
                {
                  dateStart: new Date(),
                  dateEnd: new Date(),
                  meetinUrl: 'https://www.prisma.io/',
                  description: 'Some event',
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      credentials: true,
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
