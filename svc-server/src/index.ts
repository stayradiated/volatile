import createFastify from 'fastify'

import { config } from './env.js'

import * as actions from './action/index.js'
import * as webhooks from './webhooks/index.js'
import { bindActionHandler } from './util/action-handler.js'
import { bindHandler } from './util/handler.js'

import { startWorker } from './worker.js'

import {
  getExchangeUID,
  EXCHANGE_DASSET,
  EXCHANGE_INDEPENDENT_RESERVE,
  EXCHANGE_KIWI_COIN,
} from './model/exchange/index.js'
import { pool } from './pool.js'

// Log queries
import './test-util/db-debug.js'

const fastify = createFastify({ logger: true })

const addAction = bindActionHandler(fastify)

addAction('create_auth_token', actions.createAuthTokenHandler)
addAction('create_dca_order', actions.createDCAOrderHandler)
addAction('create_stripe_subscription', actions.createStripeSubscription)
addAction('create_user', actions.createUserHandler)
addAction('create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addAction('delete_user', actions.deleteUserHandler)
addAction('delete_user_2fa', actions.deleteUser2FAHandler)
addAction('enable_user_2fa', actions.enableUser2FAHandler)
addAction('query_live_stripe_subscription', actions.queryLiveStripeSubscription)
addAction('query_stripe_config', actions.queryStripeConfig)
addAction('query_user_email', actions.queryUserEmailHandler)
addAction('query_user_limit', actions.queryUserLimitHandler)
addAction('refresh_auth_token', actions.refreshAuthTokenHandler)
addAction('reset_user_password', actions.resetUserPasswordHandler)
addAction('seed_test_account', actions.seedTestAccount)
addAction('send_user_email_verify', actions.sendUserEmailVerifyHandler)
addAction('send_user_password_reset', actions.sendUserPasswordResetHandler)
addAction('setup_user_2fa', actions.setupUser2FAHandler)
addAction('sync_currency_fx', actions.syncCurrencyFxHandler)
addAction(
  'sync_exchange_open_order_list',
  actions.syncExchangeOpenOrderListHandler,
)
addAction('sync_exchange_trade_list', actions.syncExchangeTradeListHandler)
addAction('update_dca_order', actions.updateDCAOrderHandler)
addAction('update_stripe_subscription', actions.updateStripeSubscriptionHandler)
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

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

const start = async () => {
  try {
    const runner = await startWorker({
      connectionString: config.DATABASE_URL,
      enabledCronTasks: {
        autoBuy: false,
        fetchCurrencyFx: false,
        fetchMarketPrice: false,
        fetchStripe: true,
      },
    })
    runner.promise.catch(console.error)

    // Make sure exchanges exist in the database
    await Promise.all([
      getExchangeUID(pool, EXCHANGE_DASSET),
      getExchangeUID(pool, EXCHANGE_KIWI_COIN),
      getExchangeUID(pool, EXCHANGE_INDEPENDENT_RESERVE),
    ])

    await fastify.listen({ port: config.PORT, host: '0.0.0.0' })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
