import { readConfig } from '@stayradiated/kc-config'
import createFastify from 'fastify'

import { CONFIG_PATH, PORT } from './env.js'
import pool from './pg-pool.js'
// Import { fetchMarketPrice } from './components/market-price/index.js'
// Import { initAutoBuy } from './components/auto-buy/index.js'
import { createUser } from './components/user/index.js'
import { createAuthToken } from './components/auth-token/index.js'

import type { ComponentProps } from './types.js'

const fastify = createFastify({
  logger: true,
})

type ActionHandlerFn<Input, Output> = (input: Input) => Promise<Output | Error>

const createActionHandler = <Input, Output>(
  actionName: string,
  fn: ActionHandlerFn<Input, Output>,
) =>
  fastify.post<{ Body: { input: Input; action: { name: string } } }>(
    `/action/${actionName}`,
    async (request, reply) => {
      const { input, action } = request.body
      if (action.name !== actionName) {
        await reply.code(404).send({ error: `Action name mismatch, expecting '${actionName}', received: '${action.name}'` })
        return
      }

      const output = await fn(input)
      if (output instanceof Error) {
        await reply.code(500).send({ error: output.message })
      }

      await reply.send(output)
    },
  )

createActionHandler<
  {
    email: string
    password: string
  },
  {
    userUid: string
  }
>('createUser', async (input) => {
  const { email, password } = input
  const result = await createUser(pool, { email, password })
  if (result instanceof Error) {
    return result
  }
  return {
    userUid: result.uid
  }
})

createActionHandler<
  {
    email: string
    password: string
  },
  {
    userUid: string
    authToken: string
  }
>('createAuthToken', async (input) => {
  const { email, password } = input
  console.log({ email, password })
  const result = await createAuthToken(pool, { email, password })
  if (result instanceof Error) {
    return result
  }
  return {
    userUid: result.uid,
    authToken: result.authToken,
  }
})

fastify.listen(PORT, '0.0.0.0')

void (async function () {
  const config = await readConfig(CONFIG_PATH)
  if (config instanceof Error) {
    console.error(config)
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }

  const props: ComponentProps = {
    config,
    pool,
  }

  console.log(props)

  await Promise.all([
    // FetchMarketPrice(props),
    // , initAutoBuy(props)
  ])
})()
