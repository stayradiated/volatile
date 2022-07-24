import { GraphQLClient } from 'graphql-request'
import config from './env.server'
import { getSdk } from '~/graphql/generated'

const sdk = getSdk(new GraphQLClient(config.GRAPHQL_ENDPOINT))

export { sdk }
