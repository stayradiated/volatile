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
import * as webhooks from './webhooks/index.js'
import { bindActionHandler, SessionRole } from './util/action-handler.js'
import { bindHandler } from './util/handler.js'

const fastify = createFastify({
  logger: true,
})

const addAction = bindActionHandler(fastify)

// AddAction('auto_buy_kiwi_coin', actions.autoBuyKiwiCoinHandler)
// addAction('auto_buy_dasset actions.autoBuyDassetHandler)
addAction('create_auth_token', actions.createAuthTokenHandler)
addAction('create_dca_order', actions.createDCAOrderHandler)
addAction('create_user', actions.createUserHandler)
// AddAction('fetch_market_price', actions.fetchMarketPriceHandler)
addAction('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addAction(
  'validate_user_exchange_keys',
  actions.validateUserExchangeKeysHandler,
)
addAction('create_checkout_session', actions.createCheckoutSessionHandler)

// AddRoute('auto_buy_kiwi_coin', actions.autoBuyKiwiCoinHandler)
// AddRoute('fetch_market_price', actions.fetchMarketPriceHandler)
// addRoute('auto_buy_dasset actions.autoBuyDassetHandler)
addRoute('create_auth_token', actions.createAuthTokenHandler)
addRoute('create_dca_order', actions.createDCAOrderHandler)
addRoute('create_user', actions.createUserHandler)
addRoute('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addRoute('sync_exchange_trade_list', actions.syncExchangeTradeListHandler)
addRoute('validate_user_exchange_keys', actions.validateUserExchangeKeysHandler)

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

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

  console.log(context)

  // Await Promise.all([
  //   actions.fetchMarketPriceHandler(context),
  //   actions.autoBuyKiwiCoinHandler(context),
  //   actions.autoBuyDassetHandler(context),
  // ])
})()
