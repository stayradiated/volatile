import createFastify from 'fastify'

import { PORT } from './env.js'
import { pool } from './pool.js'
import { config } from './util/config.js'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from './model/exchange/index.js'
import {
  getMarketUID,
  MARKET_KIWI_COIN,
  MARKET_BINANCE_US,
} from './model/market/index.js'

import * as actions from './action/index.js'
import { bindActionHandler, SessionRole } from './util/action-handler.js'

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
addRoute('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addRoute('validate_user_exchange_keys', actions.validateUserExchangeKeysHandler)
addRoute('sync_exchange_trade_list', actions.syncExchangeTradeListHandler)

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
