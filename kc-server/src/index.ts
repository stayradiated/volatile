import { readConfig } from '@stayradiated/kc-config'
import createFastify from 'fastify'
import { DateTime } from 'luxon'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import { CONFIG_PATH, PORT } from './env.js'
import { pool } from './pool.js'
// Import { fetchMarketPrice } from './components/market-price/index.js'
// Import { initAutoBuy } from './components/auto-buy/index.js'
import { createUser } from './components/user/index.js'
import { createAuthToken } from './components/auth-token/index.js'
import { keyring } from './utils/keyring.js'
import {
  setUserExchangeKeys,
  validateUserExchangeKeys,
} from './components/user-exchange-keys/index.js'
import {
  getExchangeUID,
  EXCHANGE_KIWI_COIN,
} from './components/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from './components/market/index.js'
import { createDCAOrder } from './components/dca-order/index.js'

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
>('create_user', async (input) => {
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
>('create_auth_token', async (input) => {
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
>('get_email', async (_input, session) => {
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
>('set_user_exchange_keys', async (input, session) => {
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

createActionHandler<
  {
    exchange_uid: string
  },
  {
    is_valid: boolean
    validation_message: string | undefined
    user_exchange_keys_uid: string
  }
>('validate_user_exchange_keys', async (input, session) => {
  const { exchange_uid: exchangeUID } = input
  const userUID = session['x-hasura-user-id']

  const result = await validateUserExchangeKeys(pool, {
    userUID,
    exchangeUID,
  })
  if (result instanceof Error) {
    return result
  }

  return {
    is_valid: result.isValid,
    validation_message: result.validationMessage,
    user_exchange_keys_uid: result.userExchangeKeysUID,
  }
})

createActionHandler<
  {
    exchange_uid: string
    market_uid: string
    start_at: string
    market_offset: number
    daily_average: number
    min_price: number
    max_price: number
    min_amount: number
    max_amount: number
  },
  {
    dca_order_uid: string
  }
>('create_dca_order', async (input, session) => {
  const {
    exchange_uid: exchangeUID,
    market_uid: marketUID,
    start_at: startAt,
    market_offset: marketOffset,
    daily_average: dailyAverage,
    min_price: minPrice,
    max_price: maxPrice,
    min_amount: minAmount,
    max_amount: maxAmount,
  } = input
  const userUID = session['x-hasura-user-id']

  const dcaOrder = await createDCAOrder(pool, {
    userUID,
    exchangeUID,
    marketUID,
    startAt: DateTime.fromISO(startAt),
    marketOffset,
    dailyAverage,
    minPrice,
    maxPrice,
    minAmount,
    maxAmount,
  })
  if (dcaOrder instanceof Error) {
    return dcaOrder
  }

  return {
    dca_order_uid: dcaOrder.UID,
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

  // Make sure markets + exchanges exist in DB
  await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  await getMarketUID(pool, MARKET_KIWI_COIN)

  await Promise.all([
    // FetchMarketPrice(props),
    // , initAutoBuy(props)
  ])
})()
