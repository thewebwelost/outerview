import prisma from '../../prisma/client';

const getUserByEmail = async (email: string) => {
  const creds = await prisma.credentials.findUniqueOrThrow({
    where: {
      email,
    },
  });

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: creds?.id,
    },
  });

  return user;
};

export default getUserByEmail;
