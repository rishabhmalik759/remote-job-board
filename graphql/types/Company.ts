import { objectType, extendType } from 'nexus';

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.id('id');
    t.string('companyName');
  },
});

export const CompanyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('companies', {
      type: 'Company',
      resolve(_root, _args, ctx) {
        return ctx.prisma.company.findMany();
      },
    });
  },
});
