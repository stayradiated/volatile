import createFastify from 'fastify'

import { PORT } from './env.js'
import { pool } from './pool.js'

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

const fastify = createFastify({ logger: true })

const addAction = bindActionHandler(fastify)
addAction('create_auth_token', actions.createAuthTokenHandler)
addAction('create_dca_order', actions.createDCAOrderHandler)
addAction('create_user', actions.createUserHandler)
addAction('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addAction('customer_checkout_session', actions.customerCheckoutSessionHandler)
addAction('customer_portal_session', actions.customerPortalSessionHandler)
addAction('sync_exchange_trade_list', actions.syncExchangeTradeListHandler)
addAction(
  'validate_user_exchange_keys',
  actions.validateUserExchangeKeysHandler,
)

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

void fastify.listen(PORT, '0.0.0.0')

void (async function () {
  // Make sure markets + exchanges exist in DB
  await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  await getMarketUID(pool, MARKET_KIWI_COIN)
  await getMarketUID(pool, MARKET_BINANCE_US)

  const context = {
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
