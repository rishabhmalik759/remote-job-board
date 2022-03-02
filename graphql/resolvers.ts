export const resolvers = {
  Query: {
    companies: (_parent, _args, ctx) => {
      return ctx.prisma.Company.findMany();
    },
  },
};
