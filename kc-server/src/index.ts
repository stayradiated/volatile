import { readConfig } from '@stayradiated/kc-config'
import createFastify from 'fastify'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { CONFIG_PATH, PORT } from './env.js'
import { pool } from './pool.js'
// Import { fetchMarketPrice } from './components/market-price/index.js'
// Import { initAutoBuy } from './components/auto-buy/index.js'
import { createUser } from './components/user/index.js'
import { createAuthToken } from './components/auth-token/index.js'
import { keyring } from './utils/keyring.js'
import { setUserExchangeKeys } from './components/user-exchange-keys/index.js'
import {
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
} from './components/exchange/index.js'

import type { ComponentProps } from './types.js'

const fastify = createFastify({
  logger: true,
})

type Session = {
  'x-hasura-role': string
  'x-hasura-user-id': string
}

type ActionHandlerFn<Input, Output> = (
  input: Input,
  session: Session,
) => Promise<Output | Error>

const createActionHandler = <Input, Output>(
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

    const output = await fn(input, session)
    if (output instanceof Error) {
      await reply.code(500).send({ error: output.message })
    }

    await reply.send(output)
  })

createActionHandler<
  {
    email: string
    password: string
  },
  {
    user_uid: string
  }
>('createUser', async (input) => {
  const { email, password } = input
  const result = await createUser(pool, { email, password })
  if (result instanceof Error) {
    return result
  }

  return {
    user_uid: result.UID,
  }
})

createActionHandler<
  {
    email: string
    password: string
  },
  {
    user_uid: string
    auth_token: string
  }
>('createAuthToken', async (input) => {
  const { email, password } = input
  const result = await createAuthToken(pool, { email, password })
  if (result instanceof Error) {
    return result
  }

  return {
    user_uid: result.uid,
    auth_token: result.authToken,
  }
})

createActionHandler<
  Record<string, unknown>,
  {
    email: string
  }
>('getEmail', async (_input, session) => {
  const uid = session['x-hasura-user-id']

  const [row] = await db.sql<s.user.SQL, s.user.Selectable[]>`
    SELECT ${'email_keyring_id'}, ${'email_encrypted'}
    FROM ${'user'}
    WHERE ${{ uid }}
  `.run(pool)

  if (!row) {
    return new Error('Could not read email for user')
  }

  const email = keyring.decrypt(row.email_encrypted, row.email_keyring_id)
  if (email instanceof Error) {
    return email
  }

  return {
    email,
  }
})

createActionHandler<
  {
    exchange_uid: string
    keys: Record<string, string>
    description: string
  },
  {
    user_exchange_keys_uid: string
  }
>('setUserExchangeKeys', async (input, session) => {
  const { exchange_uid: exchangeUID, keys, description } = input
  const userUID = session['x-hasura-user-id']

  const result = await setUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
    keys,
    description,
    invalidatedAt: undefined,
  })
  if (result instanceof Error) {
    return result
  }

  return {
    user_exchange_keys_uid: result.UID,
  }
})

void fastify.listen(PORT, '0.0.0.0')

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

  // Make sure exchanges exist in DB
  await getExchangeUID(pool, EXCHANGE_KIWI_COIN)

  await Promise.all([
    // FetchMarketPrice(props),
    // , initAutoBuy(props)
  ])
})()
