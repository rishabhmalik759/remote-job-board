import { Context, prisma } from '../lib/prisma';

export async function createContext({ req, res }): Promise<Context> {
  return {
    prisma,
  };
}
