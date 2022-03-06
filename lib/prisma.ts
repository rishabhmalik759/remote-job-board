import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: typeof prisma
};

declare global {
  var __globalPrisma__: PrismaClient
}

export let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error', 'warn']
  })
} else {
  // Comment out query so I don't get spammed by logs.
  if (!global.__globalPrisma__) {
    global.__globalPrisma__ = new PrismaClient({
      log: [
        // 'query',
        'error',
        'warn'
      ]
    })
  }

  prisma = global.__globalPrisma__
}
