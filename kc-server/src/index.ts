import createFastify from 'fastify'

import { PORT } from './env.js'
import { pool } from './pool.js'
import { config } from './utils/config.js'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from './models/exchange/index.js'
import {
  getMarketUID,
  MARKET_KIWI_COIN,
  MARKET_BINANCE_US,
} from './models/market/index.js'

import * as actions from './actions/index.js'
import { bindActionHandler, SessionRole } from './utils/action-handler.js'

const fastify = createFastify({
  logger: true,
})

const addRoute = bindActionHandler(fastify)

// AddRoute('auto_buy_kiwi_coin', actions.autoBuyKiwiCoinHandler)
// addRoute('auto_buy_dasset actions.autoBuyDassetHandler)
addRoute('create_auth_token', actions.createAuthTokenHandler)
addRoute('create_dca_order', actions.createDCAOrderHandler)
addRoute('create_user', actions.createUserHandler)
// AddRoute('fetch_market_price', actions.fetchMarketPriceHandler)
addRoute('set_user_exchange_keys', actions.setUserExchangeKeysHandler)
addRoute('validate_user_exchange_keys', actions.validateUserExchangeKeysHandler)

void fastify.listen(PORT, '0.0.0.0')

void (async function () {
  // Make sure markets + exchanges exist in DB
  await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  await getMarketUID(pool, MARKET_KIWI_COIN)
  await getMarketUID(pool, MARKET_BINANCE_US)

  const context = {
    config,
    pool,
    input: {},
    session: {
      role: SessionRole.ADMIN,
      userUID: undefined,
    },
  }

  await Promise.all([
    actions.fetchMarketPriceHandler(context),
    actions.autoBuyKiwiCoinHandler(context),
    actions.autoBuyDassetHandler(context),
  ])
})()
