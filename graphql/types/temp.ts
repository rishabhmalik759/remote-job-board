import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { Context } from '../../lib/prisma';
import { Company } from './Company';

export const JobPost = objectType({
  name: 'JobPost',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('content');
    t.boolean('published');
    t.list.field('company', {
      type: Company,
    });
    t.string('companyId');
    t.string('position');
    t.string('positionType');
    t.string('primaryTag');
    t.list.string('tags');
    t.string('jobLocation');
    t.boolean('showCompanyLogo');
    t.boolean('emailToCandidates');
    t.boolean('getMatches');
    t.boolean('highlightPost');
    t.int('stickForDuration');
    t.int('jobPostDuration');

    t.list.field('companyId', {
      type: Company,
    });

    t.list.field('invoice', {
      type: Invoice,
    });

    t.list.field('jobDetails', {
      type: JobDetails,
    });
  },
});
export const Invoice = objectType({
  name: 'Invoice',
  definition(t) {
    t.id('id');
    t.string('jobPostId');
    t.list.field('jobPost', {
      type: JobPost,
    });
    t.string('companyInvoiceEmail');
    t.string('emailListToSendInvoice');
    t.string('invoiceAddress');
    t.string('invoiceNotesPurchaseOrder');
    t.boolean('payLater');
  },
});

export const JobDetails = objectType({
  name: 'JobDetails',
  definition(t) {
    t.id('id');
    t.string('companyLogo');
    t.list.field('jobPost', {
      type: JobPost,
    });
    t.int('minAnnualSalary');
    t.int('maxAnnualSalary');
    t.string('applyURL');
    t.string('applyEmail');
    t.boolean('highlightWithCompanyColor');
    t.list.field('jobDescription', {
      type: JobDescription,
    });
    t.list.field('howToApply', {
      type: HowToApply,
    });
  },
});

export const JobDescription = objectType({
  name: 'JobDescription',
  definition(t) {
    t.id('id');
    t.field('jobDetails', {
      type: 'JobDetails',
    });
    t.string('jobDetailsId');
    t.string('text');
    t.string('html');
  },
});

export const HowToApply = objectType({
  name: 'HowToApply',
  definition(t) {
    t.id('id');
    t.field('jobDetails', {
      type: 'JobDetails',
    });
    t.string('jobDetailsId');
    t.string('text');
    t.string('html');
  },
});

export const CompanyMutation = extendType({
  type: 'Mutation',
  definition(t) {
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
        });
      },
    });

    t.field('createJobPost', {
      type: 'JobPost',
      args: {
        title: stringArg(),
        content: stringArg(),
        position: stringArg(),
        positionType: stringArg(),
        primaryTag: stringArg(),
        jobLocation: stringArg(),
        stickForDuration: intArg(),
        jobPostDuration: intArg(),
      },
      resolve(
        _root,
        { title, content, position, positionType, primaryTag, jobLocation, stickForDuration, jobPostDuration },
        ctx: Context,
      ) {
        return ctx.prisma.jobPost.create({
          data: { title, content, position, positionType, primaryTag, jobLocation, stickForDuration, jobPostDuration },
        });
      },
    });
  },
});
