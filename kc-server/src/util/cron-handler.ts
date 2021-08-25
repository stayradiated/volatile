import type { FastifyInstance, RouteHandlerMethod } from 'fastify'
import type {
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from 'fastify/types/utils'
import { DateTime } from 'luxon'

import { UnexpectedError, CronError } from '../util/error.js'
import { HASURA_ACTIONS_SECRET } from '../env.js'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'

type RouteHandler<RouteGeneric> = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGeneric
>

type CronHandlerRequest<Payload> = {
  Body: {
    scheduled_time?: string
    payload?: Payload
    name?: string
    id?: string
  }
}

type Context<Input> = {
  pool: Pool
  input: Input
  scheduledTime: DateTime
  headers: RawRequestDefaultExpression['headers']
}

type CronHandlerFn<Input, Output> = (
  context: Context<Input>,
) => Promise<Output | Error>

const wrapCronHandler =
  <Input, Output>(
    path: string,
    fn: CronHandlerFn<Input, Output>,
  ): RouteHandler<CronHandlerRequest<Input>> =>
  async (request, reply) => {
    if (request.headers['x-hasura-actions-secret'] !== HASURA_ACTIONS_SECRET) {
      await reply.code(403).send({
        message: 'Invalid x-hasura-actions-secret',
      })
      return
    }

    if (typeof request.body !== 'object' || request.body === null) {
      await reply.code(401).send({
        message: `Invalid request body`,
      })
      return
    }

    const { scheduled_time: scheduledTime, payload: input } = request.body
    if (typeof scheduledTime !== 'string') {
      await reply.code(401).send({
        message: `Invalid request body: missing scheduled_time`,
      })
      return
    }

    if (typeof input !== 'object' || input === null) {
      await reply.code(401).send({
        message: `Invalid request body: missing payload`,
      })
      return
    }

    try {
      const context: Context<Input> = {
        pool,
        scheduledTime: DateTime.fromISO(scheduledTime),
        input,
        headers: request.headers,
      }
      const output = await fn(context)
      if (output instanceof Error) {
        const cronError = new CronError({
          message: `Error returned by cron handler for "${path}"`,
          cause: output,
          context: {
            path,
            input,
          },
        })
        await reply.code(400).send(cronError.toObject({ omitting: false }))
        return
      }

      await reply.send(output)
      return
    } catch (error: unknown) {
      const unexpectedError = new UnexpectedError({
        message: `Unexpected error thrown while executing cron hrndler for "${path}"`,
        cause: error as Error,
        context: {
          path,
          input,
        },
      })
      await reply.code(500).send(unexpectedError.toObject({ omitting: false }))
    }
  }

const bindCronHandler =
  (fastify: FastifyInstance) =>
  <Input, Output>(pathName: string, fn: CronHandlerFn<Input, Output>) => {
    const path = `/cron/${pathName}`
    return fastify.post(path, wrapCronHandler<Input, Output>(path, fn))
  }

export { CronHandlerFn, wrapCronHandler, bindCronHandler }
