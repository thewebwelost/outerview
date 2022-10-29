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
        create: [{}],
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
