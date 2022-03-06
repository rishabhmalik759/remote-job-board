import { Prisma } from '@prisma/client';

import { prisma } from '../lib/prisma';

const companyData: Prisma.CompanyCreateInput = {
  companyName: 'test',
  emailToCandidates: false,
  getMatches: false,
  highlightPost: false,
  jobPostDuration: 0,
  jobTags: ['React', 'CSS', 'HTML'],
  jobLocation: 'Remote',
  jobDetails: {
    create: {
      companyId: Math.random().toString(36).substring(7),
      highlightWithCompanyColor: false,
      companyLogo: 'This is the logo',
      minAnnualSalary: 10000,
      maxAnnualSalary: 20000,
      applyURL: 'https://www.google.com',
      applyEmail: 'google@google.com',
      jobDescription: {
        create: {
          companyId: Math.random().toString(36).substring(7),
          text: 'This is a job description',
          html: '<p>This is a job description</p>',
        },
      },
      howToApply: {
        create: {
          companyId: Math.random().toString(36).substring(7),
          text: 'This is how to apply',
          html: '<p>This is how to apply</p>',
        },
      },
    },
  },
  invoiceDetails: {
    create: {
      companyId: Math.random().toString(36).substring(7),
      companyInvoiceEmail: 'google@google.com',
      emailListToSendInvoice: [''],
      invoiceAddress: 'google@google.com',
      invoiceNotesPurchaseOrder: '',
      payLater: false,
    },
  },
  position: 'Frontend Engineer',
  positionType: 'Full-time',
  primaryTag: 'Developer',
  showCompanyLogo: false,
  stickForDuration: 0,
};

async function main() {
  console.log(`Start seeding ...`);

  await prisma.company.create({
    data: {
      ...companyData,
    },
  });

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
