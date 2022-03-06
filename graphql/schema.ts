import path from 'path'

import { makeSchema } from 'nexus'

import * as types from './types'

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), 'graphql', 'nexus-generated', 'schema.graphql'),
    typegen: path.join(process.cwd(), 'graphql', 'nexus-generated', 'nexus-typegen.ts')
  }
})
