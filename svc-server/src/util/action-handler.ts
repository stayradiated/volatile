import { Buffer } from 'node:buffer'
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
  userUid: string | undefined
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

  const userUid = input['x-hasura-user-id']
  if ((role === 'user' || role === 'superuser') && !userUid) {
    return new IllegalArgumentError({
      message: 'session_variables is missing x-hasura-user-id.',
    })
  }

  return {
    role,
    userUid,
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

const createActionHandler =
  (
    actions: Record<string, ActionHandlerFn<unknown, unknown>>,
  ): RouteHandler<ActionHandlerRequest<unknown>> =>
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

    const actionName = action?.name ?? ''
    const actionFn = actions[actionName]

    if (!actionFn) {
      await reply.code(404).send({
        message: `Unsupported action name received: "${actionName}"`,
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
      const context: Context<unknown> = {
        pool,
        input,
        session,
      }
      const output = await actionFn(context)
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

const bindActionHandler = (fastify: FastifyInstance) => {
  const actions: Record<string, ActionHandlerFn<any, any>> = {}

  fastify.post('/action', createActionHandler(actions))

  return <Input, Output>(
    actionName: string,
    fn: ActionHandlerFn<Input, Output>,
  ) => {
    actions[actionName] = fn
  }
}

export { bindActionHandler }
export type { ActionHandlerFn, Session, SessionRole }
