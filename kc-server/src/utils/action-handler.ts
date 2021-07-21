import type { FastifyInstance, RouteHandlerMethod } from 'fastify'
import type {
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from 'fastify/types/utils'

import { pool } from '../pool.js'
import type { Pool, Config } from '../types.js'
import { config } from './config.js'

type RouteHandler<RouteGeneric> = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGeneric
>

type ActionHandlerRequest<Input> = {
  Body: {
    input: Input
    action: { name: string }
    session_variables: {
      'x-hasura-role'?: string
      'x-hasura-user-id'?: string
    }
  }
}

enum SessionRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

type Session = {
  role: SessionRole
  userUID: string | undefined
}

const parseSessionVariables = (
  input: Record<string, string>,
): Session | Error => {
  if (typeof input !== 'object' || input === null) {
    return new Error('session_variables must be an object.')
  }

  const role = input['x-hasura-role'] as SessionRole
  if (!Object.values(SessionRole).includes(role)) {
    return new Error('session_variables has an invalid x-hasura-role.')
  }

  const userUID = input['x-hasura-user-id']
  if (role !== SessionRole.GUEST && !userUID) {
    return new Error('session_variables is missing x-hasura-user-uid.')
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
  config: Config
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
    if (typeof request.body !== 'object' || request.body === null) {
      await reply.code(401).send({
        error: `Invalid request body`,
      })
    }

    const { session_variables: sessionVariables, input, action } = request.body
    const session = parseSessionVariables(sessionVariables)
    if (session instanceof Error) {
      await reply.code(401).send({
        error: `Invalid session_variables. ${session.message}`,
      })
      return
    }

    if (action.name !== actionName) {
      await reply.code(404).send({
        error: `Action name mismatch, expecting '${actionName}', received: '${action.name}'`,
      })
      return
    }

    const context = { pool, input, session, config }
    const output = await fn(context)
    if (output instanceof Error) {
      await reply.code(500).send({ error: output.message })
    }

    await reply.send(output)
  }

const bindActionHandler =
  (fastify: FastifyInstance) =>
  <Input, Output>(actionName: string, fn: ActionHandlerFn<Input, Output>) => {
    const path = `/action/${actionName}`
    return fastify.post(path, wrapActionHandler<Input, Output>(actionName, fn))
  }

export { ActionHandlerFn, wrapActionHandler, bindActionHandler, SessionRole }
