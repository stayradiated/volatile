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
import { errorBoundary } from '@stayradiated/error-boundary'

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

const bindHandler =
  (fastify: FastifyInstance) =>
  <Request, Output>(path: string, fn: HandlerFn<Request, Output>) =>
    fastify.register((fastify, _options, done) => {
      fastify.addContentTypeParser(
        'application/json',
        { parseAs: 'buffer' },
        (_request, body, done) => {
          const error = errorBoundary(() => {
            const newBody = { raw: body }
            done(null, newBody)
          })
          if (error instanceof Error) {
            done(error, undefined)
          }
        },
      )
      fastify.post(path, wrapHandler<Request, Output>(fn))
      done()
    })

export { HandlerFn, wrapHandler, bindHandler }
