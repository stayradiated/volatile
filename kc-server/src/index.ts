import createFastify from 'fastify'

import { PORT } from './env.js'
import { pool } from './pool.js'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from './models/exchange/index.js'
import {
  getMarketUID,
  MARKET_KIWI_COIN,
  MARKET_BINANCE_US,
} from './models/market/index.js'

import * as actions from './actions/index.js'
import { bindActionHandler } from './utils/action-handler.js'

const fastify = createFastify({
  logger: true,
})

const addRoute = bindActionHandler(fastify)

addRoute('auto_buy', actions.autoBuyHandler)
addRoute('create_auth_token', actions.createAuthTokenHandler)
addRoute('create_dca_order', actions.createDCAOrderHandler)
addRoute('create_user', actions.createUserHandler)
addRoute('fetch_market_price', actions.fetchMarketPriceHandler)
addRoute('get_email', actions.getEmailHandler)
addRoute('set_user_exchange_keys', actions.setUserExchangeKeysHandler)
addRoute('validate_user_exchange_keys', actions.validateUserExchangeKeysHandler)

void fastify.listen(PORT, '0.0.0.0')

void (async function () {
  // Make sure markets + exchanges exist in DB
  await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  await getMarketUID(pool, MARKET_KIWI_COIN)
  await getMarketUID(pool, MARKET_BINANCE_US)

  // Const context = {
  //   config,
  //   pool,
  //   input: {},
  //   session: {
  //     'x-hasura-role': 'admin',
  //     'x-hasura-user-id': '',
  //   },
  // }

  // await Promise.all([actions.fetchMarketPriceHandler(context), actions.autoBuyHandler(context)])
})()
