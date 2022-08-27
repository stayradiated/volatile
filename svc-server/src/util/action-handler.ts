import { Buffer } from 'node:buffer'
import { timingSafeEqual } from 'node:crypto'
import type { FastifyInstance, RouteHandlerMethod } from 'fastify'
import type {
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from 'fastify/types/utils'
import type { RouteGenericInterface } from 'fastify/types/route'
import * as z from 'zod'

import { IllegalArgumentError, firstLine } from '../util/error.js'
import { config } from '../env.js'

import { pool } from '../pool.js'
import type { Pool } from '../types.js'

type RouteHandler<RouteGeneric extends RouteGenericInterface> =
  RouteHandlerMethod<
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
    return new IllegalArgumentError('session_variables must be an object.')
  }

  const role = input['x-hasura-role'] as SessionRole
  if (
    role !== 'user' &&
    role !== 'superuser' &&
    role !== 'guest' &&
    role !== 'admin'
  ) {
    return new IllegalArgumentError(
      'session_variables has an invalid x-hasura-role.',
    )
  }

  const userUid = input['x-hasura-user-id']
  if ((role === 'user' || role === 'superuser') && !userUid) {
    return new IllegalArgumentError(
      'session_variables is missing x-hasura-user-id.',
    )
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

type Schema<Input, Output> = {
  input: Input
  output: Output
}

type SchemaAny = Schema<z.ZodRawShape, z.ZodRawShape>

type ActionHandler<S extends SchemaAny> = {
  schema: S
  handler: ActionHandlerFn<
    z.infer<z.ZodObject<S['input']>>,
    z.infer<z.ZodObject<S['output']>>
  >
}

const createActionHandler =
  (
    actions: Map<string, ActionHandler<SchemaAny>>,
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
    const actionHandler = actions.get(actionName)

    if (!actionHandler) {
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

    const validInput = z.object(actionHandler.schema.input).safeParse(input)
    if (!validInput.success) {
      await reply.code(400).send({ message: validInput.error.message })
      return
    }

    const context: Context<Record<string, unknown>> = {
      pool,
      input: validInput.data,
      session,
    }

    try {
      const output = await actionHandler.handler(context)
      if (output instanceof Error) {
        console.error(output)
        await reply.code(400).send({ message: output.message })
        return
      }

      const validOutput = z
        .object(actionHandler.schema.output)
        .safeParse(output)
      if (!validOutput.success) {
        await reply.code(400).send({ message: validOutput.error.message })
        return
      }

      await reply.send(validOutput.data)
    } catch (error: unknown) {
      console.error(error)
      const message =
        error instanceof Error
          ? firstLine(error.message)
          : 'Unknown error occured'
      await reply.code(499).send({ message })
    }
  }

const bindActionHandler = (fastify: FastifyInstance) => {
  const actions = new Map<string, ActionHandler<any>>()

  fastify.post('/action', createActionHandler(actions))

  return (actionName: string, handler: ActionHandler<any>) => {
    actions.set(actionName, handler)
  }
}

export { bindActionHandler }
export type { ActionHandler, ActionHandlerFn, Session, SessionRole }
