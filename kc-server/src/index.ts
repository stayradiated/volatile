import createFastify from 'fastify'

import { PORT } from './env.js'

import * as actions from './action/index.js'
import * as cron from './cron/index.js'
import * as webhooks from './webhooks/index.js'
import { bindActionHandler } from './util/action-handler.js'
import { bindCronHandler } from './util/cron-handler.js'
import { bindHandler } from './util/handler.js'

const fastify = createFastify({ logger: true })

const addAction = bindActionHandler(fastify)
addAction('create_auth_token', actions.createAuthTokenHandler)
addAction('create_dca_order', actions.createDCAOrderHandler)
addAction('create_user', actions.createUserHandler)
addAction('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addAction('customer_checkout_session', actions.customerCheckoutSessionHandler)
addAction('customer_portal_session', actions.customerPortalSessionHandler)
addAction('update_user', actions.updateUserHandler)
addAction('sync_exchange_trade_list', actions.syncExchangeTradeListHandler)
addAction(
  'validate_user_exchange_keys',
  actions.validateUserExchangeKeysHandler,
)

const addCron = bindCronHandler(fastify)
addCron('fetch_market_price', cron.fetchMarketPriceHandler)

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

void fastify.listen(PORT, '0.0.0.0')
