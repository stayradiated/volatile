import { inspect } from 'util'
import { timingSafeEqual } from 'node:crypto'
import type { FastifyInstance, RouteHandlerMethod } from 'fastify'
import type {
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from 'fastify/types/utils'

import { IllegalArgumentError } from '../util/error.js'
import { config } from '../env.js'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'

type RouteHandler<RouteGeneric> = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGeneric
>

type ActionHandlerRequest<Input> = {
  Body: {
    input?: Input
    action?: { name?: string }
    session_variables?: {
      'x-hasura-role'?: string
      'x-hasura-user-id'?: string
    }
  }
}

type SessionRole = 'admin' | 'user' | 'superuser' | 'guest'

type Session = {
  role: SessionRole
  userUID: string | undefined
}

const parseSessionVariables = (
  input: Record<string, string> | undefined,
): Session | Error => {
  if (typeof input !== 'object' || input === null) {
    return new IllegalArgumentError({
      message: 'session_variables must be an object.',
    })
  }

  const role = input['x-hasura-role'] as SessionRole
  if (
    role !== 'user' &&
    role !== 'superuser' &&
    role !== 'guest' &&
    role !== 'admin'
  ) {
    return new IllegalArgumentError({
      message: 'session_variables has an invalid x-hasura-role.',
    })
  }

  const userUID = input['x-hasura-user-id']
  if ((role === 'user' || role === 'superuser') && !userUID) {
    return new IllegalArgumentError({
      message: 'session_variables is missing x-hasura-user-id.',
    })
  }

  return {
    role,
    userUID,
  }
}

type Context<Input> = {
  pool: Pool
  input: Input
  session: Session
}

type ActionHandlerFn<Input, Output> = (
  context: Context<Input>,
) => Promise<Output | Error>

const wrapActionHandler =
  <Input, Output>(
    actionName: string,
    fn: ActionHandlerFn<Input, Output>,
  ): RouteHandler<ActionHandlerRequest<Input>> =>
  async (request, reply) => {
    const secret = Buffer.from(
      String(request.headers['x-hasura-actions-secret']),
      'utf8',
    )
    if (!timingSafeEqual(secret, config.ACTIONS_SECRET)) {
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

    const { session_variables: sessionVariables, input, action } = request.body
    const session = parseSessionVariables(sessionVariables)
    if (session instanceof Error) {
      await reply.code(401).send({
        message: `Invalid session_variables. ${session.message}`,
      })
      return
    }

    if (action?.name !== actionName) {
      await reply.code(404).send({
        message: `Action name mismatch, expecting ${inspect(
          actionName,
        )}, received: ${inspect(action?.name)}`,
      })
      return
    }

    if (input === undefined || input === null) {
      await reply.code(400).send({
        message: `Action requires input to be defined.`,
      })
      return
    }

    try {
      const context: Context<Input> = {
        pool,
        input,
        session,
      }
      const output = await fn(context)
      if (output instanceof Error) {
        console.error(output)
        await reply.code(400).send({ message: output.message })
        return
      }

      await reply.send(output)
    } catch (error: unknown) {
      console.error(error)
      const message =
        error instanceof Error ? error.message : 'Unknown error occured'
      await reply.code(499).send({ message })
    }
  }

const bindActionHandler =
  (fastify: FastifyInstance) =>
  <Input, Output>(actionName: string, fn: ActionHandlerFn<Input, Output>) => {
    const path = `/action/${actionName}`
    return fastify.post(path, wrapActionHandler<Input, Output>(actionName, fn))
  }

export { wrapActionHandler, bindActionHandler }
export type { ActionHandlerFn, Session, SessionRole }
