/* eslint-disable fp/no-throw */

import { randomUUID } from 'crypto'

import { createUser } from '../models/user/index.js'
import { getExchangeUID, EXCHANGE_KIWI_COIN } from '../models/exchange/index.js'
import { getMarketUID, MARKET_KIWI_COIN } from '../models/market/index.js'
import { pool } from '../pool.js'

const user = async (): Promise<string> => {
  const email = `${randomUUID()}@domain`

  const user = await createUser(pool, {
    email,
    password: 'password',
  })
  if (user instanceof Error) {
    throw user
  }

  return user.UID
}

const exchange = async (): Promise<string> => {
  const exchangeUID = await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  if (exchangeUID instanceof Error) {
    throw exchangeUID
  }

  return exchangeUID
}

const market = async (): Promise<string> => {
  const marketUID = await getMarketUID(pool, MARKET_KIWI_COIN)
  if (marketUID instanceof Error) {
    throw marketUID
  }

  return marketUID
}

export { user, exchange, market }
