import { ApolloServer } from 'apollo-server-micro';
import { DateTimeResolver } from 'graphql-scalars';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import cors from 'micro-cors';
import { asNexusMethod, makeSchema, nonNull, nullable, objectType, stringArg } from 'nexus';
const Company = objectType({
  name: 'Company',
  definition(t) {
    t.string('id');
    t.string('companyName');
    t.list.field('company', {
      type: 'Company',
      resolve: (parent) =>
        prisma.company
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .posts(),
    });
  },
});
export const schema = makeSchema({
  types: [Company],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema });

let apolloServerHandler: NextApiHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: '/api',
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler<any> = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

export default cors()(handler);
