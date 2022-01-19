import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.company.createMany({
    data: [
      {
        companyName: 'Zoo',
      },
      {
        companyName: 'Yoo',
      },
      {
        companyName: 'Aoo',
      },
      {
        companyName: 'Boo',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
