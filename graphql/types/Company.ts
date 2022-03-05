import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../lib/prisma';

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.id('id');
    t.string('companyName');
    t.string('position');
    t.string('positionType');
    t.string('primaryTag');
    t.list.string('jobTags');
    t.string('jobLocation');
    t.boolean('showCompanyLogo');
    t.boolean('emailToCandidates');
    t.boolean('getMatches');
    t.boolean('highlightPost');
    t.int('stickForDuration');
    t.int('jobPostDuration');
    t.field('invoiceDetails', {
      type: 'InvoiceDetails',
    });
    t.field('jobDetails', {
      type: 'JobDetails',
    });
    t.string('createdAt');
    t.string('updatedAt');
  },
});

export const InvoiceDetails = objectType({
  name: 'InvoiceDetails',
  definition(t) {
    t.string('companyId');
    t.string('companyInvoiceEmail');
    t.list.string('emailListToSendInvoice');
    t.string('invoiceAddress');
    t.string('invoiceNotesPurchaseOrder');
    t.boolean('payLater');
    t.list.field('companies', {
      type: 'Company',
    });
  },
});

export const JobDetails = objectType({
  name: 'JobDetails',
  definition(t) {
    t.string('companyId');
    t.string('companyLogo');
    t.boolean('highlightWithCompanyColor');
    t.int('minAnnualSalary');
    t.int('maxAnnualSalary');
    t.string('applyURL');
    t.string('applyEmail');
    t.field('jobDescription', {
      type: 'JobDescription',
    });
    t.list.field('companies', {
      type: 'Company',
    });
    t.field('howToApply', {
      type: 'HowToApply',
    });
  },
});

export const JobDescription = objectType({
  name: 'JobDescription',
  definition(t) {
    t.string('companyId');
    t.field('jobDetails', {
      type: 'JobDetails',
    });
    t.string('text');
    t.string('html');
  },
});

export const HowToApply = objectType({
  name: 'HowToApply',
  definition(t) {
    t.string('companyId');
    t.field('jobDetails', {
      type: 'JobDetails',
    });
    t.string('text');
    t.string('html');
  },
});

export const CompanyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('companies', {
      type: 'Company',
      resolve(_root, _args, ctx: Context) {
        return ctx.prisma.company.findMany({
          include: {
            invoiceDetails: {
              include: {
                companies: true,
              },
            },
            jobDetails: {
              include: {
                howToApply: true,
                jobDescription: true,
              },
            },
          },
        });
      },
    });
  },
});

export const CompanyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createCompany', {
      type: 'Company',
      resolve(_root, args, ctx: Context) {
        const { companyName } = args;

        return ctx.prisma.company.create({
          data: {
            companyName: companyName || '',
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
          },
          include: {
            invoiceDetails: {
              include: {
                companies: true,
              },
            },
            jobDetails: {
              include: {
                howToApply: true,
                jobDescription: true,
              },
            },
          },
        });
      },
    });
    t.field('editCompany', {
      type: 'Company',
      args: {
        companyId: nonNull(stringArg()),
      },
      resolve: async (_root, args, ctx: Context) => {
        const { companyId } = args;

        const foundCompany = await ctx.prisma.company.findUnique({
          where: {
            id: companyId,
          },
        });

        if (!foundCompany) {
          throw new Error('No company found with the provided ID.');
        }

        const updatedData = {
          companyName: 'Microsoft',
          emailToCandidates: false,
          getMatches: false,
          highlightPost: false,
          jobPostDuration: 0,
          jobTags: ['Next.js', 'TailwindCSS'],
          jobLocation: 'Remote',
        };

        return ctx.prisma.company.update({
          where: {
            id: companyId,
          },
          data: {
            ...updatedData,
          },
          include: {
            invoiceDetails: {
              include: {
                companies: true,
              },
            },
            jobDetails: {
              include: {
                howToApply: true,
                jobDescription: true,
              },
            },
          },
        });
      },
    });
    t.field('deleteCompany', {
      type: 'Company',
      args: {
        companyId: nonNull(stringArg()),
      },
      resolve: async (_root, args, ctx: Context) => {
        const { companyId } = args;

        const foundCompany = await ctx.prisma.company.findUnique({
          where: {
            id: companyId,
          },
        });

        if (!foundCompany) {
          throw new Error('No company found with the provided ID.');
        }

        return ctx.prisma.company.delete({
          where: {
            id: foundCompany.id,
          },
          include: {
            invoiceDetails: {
              include: {
                companies: true,
              },
            },
            jobDetails: {
              include: {
                howToApply: true,
                jobDescription: true,
              },
            },
          },
        });
      },
    });
  },
});
