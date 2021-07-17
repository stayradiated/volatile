import { pool } from '../pool.js'
import type { Pool, Config } from '../types.js'
import { fastify } from './fastify.js'
import { config } from './config.js'

type Session = {
  'x-hasura-role': string
  'x-hasura-user-id': string
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

const bindActionHandler = <Input, Output>(
  actionName: string,
  fn: ActionHandlerFn<Input, Output>,
) =>
  fastify.post<{
    Body: { input: Input; action: { name: string }; session_variables: Session }
  }>(`/action/${actionName}`, async (request, reply) => {
    const { session_variables: session, input, action } = request.body
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
  })

export { ActionHandlerFn, bindActionHandler }
