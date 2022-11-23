import prisma from './client';

// TODO: FIX SEED

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Tommy',
      credentials: {
        create: {
          email: 'test3@email.yo',
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
            experience: {
              create: [
                {
                  role: 'the cook',
                  company: 'Bagel Bros.',
                  startDate: new Date(),
                  endDate: new Date(),
                  isCurrent: true,
                  responsibilities: ['cook', 'clean', 'repeat'],
                  achievements: ['best bagel 2020'],
                  keywords: ['jira', 'osx', 'microsoft office'],
                },
                {
                  role: 'the cook',
                  company: 'McDonalds',
                  startDate: new Date(),
                  endDate: new Date(),
                  isCurrent: false,
                  responsibilities: ['cook', 'clean', 'repeat'],
                  achievements: ['best burger 2018'],
                  keywords: ['jira', 'osx', 'microsoft office'],
                },
              ],
            },
            education: {
              create: [
                {
                  name: 'Santa Clause Elf Academy',
                  startDate: new Date(),
                  endDate: new Date(),
                  degree: 'Masters',
                  details: 'Major in snow arts, minor in delivery services',
                },
              ],
            },
            location: 'Arkham, Main str.',
            email: 'test2@email.yo',
            website: 'https://www.prisma.io/',
            socials: {
              create: [
                {
                  title: 'test 3',
                  url: 'https://www.prisma.io/',
                },
                {
                  title: 'test 4',
                  url: 'https://www.prisma.io/',
                },
              ],
            },
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
            salary: '100000 - 200000',
            location: 'New York',
            status: 'OFFER',
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
      profiles: true,
      applications: true,
    },
  });
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
