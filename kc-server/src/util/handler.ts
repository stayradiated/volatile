import type {
  FastifyInstance,
  FastifyRequest,
  RouteHandlerMethod,
} from 'fastify'
import type {
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from 'fastify/types/utils'

import { pool } from '../pool.js'
import type { Pool, Config } from '../types.js'
import { config } from './config.js'

type RouteHandler<RequestGeneric> = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RequestGeneric
>

type HandlerRequest<Input> = {
  Body: Input
}

type Context<Input> = {
  pool: Pool
  config: Config
  request: FastifyRequest<HandlerRequest<Input>>
}

type HandlerFn<Input, Output> = (
  context: Context<Input>,
) => Promise<Output | Error>

const wrapHandler =
  <Input, Output>(
    fn: HandlerFn<Input, Output>,
  ): RouteHandler<HandlerRequest<Input>> =>
  async (request, reply) => {
    const context: Context<Input> = { pool, request, config }

    const output = await fn(context)
    if (output instanceof Error) {
      await reply.code(500).send({ error: output.message })
      return
    }

    await reply.send(output)
  }

const bindHandler = (fastify: FastifyInstance) => {
  fastify.addContentTypeParser(
    'application/json',
    { parseAs: 'buffer' },
    (_request, body, done) => {
      try {
        const newBody = { raw: body }
        done(null, newBody)
      } catch (error) {
        error.statusCode = 400
        done(error, undefined)
      }
    },
  )

  return <Request, Output>(path: string, fn: HandlerFn<Request, Output>) =>
    fastify.post(path, wrapHandler<Request, Output>(fn))
}

export { HandlerFn, wrapHandler, bindHandler }
