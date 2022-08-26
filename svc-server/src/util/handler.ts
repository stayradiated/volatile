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
import type { RouteGenericInterface } from 'fastify/types/route'
import { errorBoundarySync } from '@stayradiated/error-boundary'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'

type RouteHandler<RequestGeneric extends RouteGenericInterface> =
  RouteHandlerMethod<
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
    const context: Context<Input> = { pool, request }

    const output = await fn(context)
    if (output instanceof Error) {
      await reply.code(500).send({ error: output.message })
      return
    }

    await reply.send(output)
  }

const bindHandler =
  (fastify: FastifyInstance) =>
  <Request, Output>(path: string, fn: HandlerFn<Request, Output>) => {
    Promise.resolve(
      fastify.register((fastify, _options, done) => {
        fastify.addContentTypeParser(
          'application/json',
          { parseAs: 'buffer' },
          (_request, body, done) => {
            const error = errorBoundarySync(() => {
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
      }),
    ).catch((error) => {
      console.error(error)
    })
  }

export { type HandlerFn, wrapHandler, bindHandler }
