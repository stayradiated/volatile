import createFastify from 'fastify'

import { PORT } from './env.js'

import * as actions from './action/index.js'
import * as cron from './cron/index.js'
import * as webhooks from './webhooks/index.js'
import { bindActionHandler } from './util/action-handler.js'
import { bindCronHandler } from './util/cron-handler.js'
import { bindHandler } from './util/handler.js'

import {
  getExchangeUID,
  EXCHANGE_DASSET,
  EXCHANGE_INDEPENDENT_RESERVE,
  EXCHANGE_KIWI_COIN,
} from './model/exchange/index.js'
import { pool } from './pool.js'

const fastify = createFastify({ logger: true })

const addAction = bindActionHandler(fastify)

addAction('create_auth_token', actions.createAuthTokenHandler)
addAction('create_dca_order', actions.createDCAOrderHandler)
addAction('create_user', actions.createUserHandler)
addAction('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addAction('customer_checkout_session', actions.customerCheckoutSessionHandler)
addAction('customer_portal_session', actions.customerPortalSessionHandler)
addAction('delete_user', actions.deleteUserHandler)
addAction('delete_user_2fa', actions.deleteUser2FAHandler)
addAction('enable_user_2fa', actions.enableUser2FAHandler)
addAction('setup_user_2fa', actions.setupUser2FAHandler)
addAction('query_user_email', actions.queryUserEmailHandler)
addAction('refresh_auth_token', actions.refreshAuthTokenHandler)
addAction('reset_user_password', actions.resetUserPasswordHandler)
addAction('send_user_email_verify', actions.sendUserEmailVerifyHandler)
addAction('send_user_password_reset', actions.sendUserPasswordResetHandler)
addAction('sync_currency_fx', actions.syncCurrencyFxHandler)
addAction(
  'sync_exchange_open_order_list',
  actions.syncExchangeOpenOrderListHandler,
)
addAction('sync_exchange_trade_list', actions.syncExchangeTradeListHandler)
addAction('update_user', actions.updateUserHandler)
addAction('update_user_exchange_keys', actions.updateUserExchangeKeysHandler)
addAction(
  'validate_user_exchange_keys',
  actions.validateUserExchangeKeysHandler,
)
addAction(
  'validate_user_exchange_keys_live',
  actions.validateUserExchangeKeysLiveHandler,
)
addAction('validate_user_password_reset', actions.validateUserPasswordReset)
addAction('verify_user_email', actions.verifyUserEmailHandler)

const addCron = bindCronHandler(fastify)
addCron('fetch_market_price', cron.fetchMarketPriceHandler)
addCron('auto_buy', cron.autoBuyHandler)

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

void fastify.listen(PORT, '0.0.0.0')

// Make sure exchanges exist in the database
Promise.all([
  getExchangeUID(pool, EXCHANGE_DASSET),
  getExchangeUID(pool, EXCHANGE_KIWI_COIN),
  getExchangeUID(pool, EXCHANGE_INDEPENDENT_RESERVE),
]).catch(console.error)
