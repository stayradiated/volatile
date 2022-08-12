import createFastify from 'fastify'

import { config } from './env.js'

import * as actions from './action/index.js'
import * as webhooks from './webhooks/index.js'
import * as cron from './cron/index.js'
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

addAction('action_create_admin_auth_token', actions.createAdminAuthTokenHandler)
addAction('action_create_auth_token', actions.createAuthTokenHandler)
addAction('action_create_dca_order', actions.createDCAOrderHandler)
addAction('action_create_stripe_subscription', actions.createStripeSubscription)
addAction('action_create_user', actions.createUserHandler)
addAction('action_create_user_exchange_keys', actions.createUserExchangeKeysHandler)
addAction('action_delete_user', actions.deleteUserHandler)
addAction('action_delete_user_2fa', actions.deleteUser2FAHandler)
addAction('action_enable_user_2fa', actions.enableUser2FAHandler)
addAction('action_query_live_stripe_subscription', actions.queryLiveStripeSubscription)
addAction('action_query_stripe_config', actions.queryStripeConfig)
addAction('action_query_user_email', actions.queryUserEmailHandler)
addAction('action_query_user_limit', actions.queryUserLimitHandler)
addAction('action_refresh_auth_token', actions.refreshAuthTokenHandler)
addAction('action_reset_user_password', actions.resetUserPasswordHandler)
addAction('action_seed_test_account', actions.seedTestAccount)
addAction('action_send_user_email_verify', actions.sendUserEmailVerifyHandler)
addAction('action_send_user_password_reset', actions.sendUserPasswordResetHandler)
addAction('action_setup_user_2fa', actions.setupUser2FAHandler)
addAction('action_sync_currency_fx', actions.syncCurrencyFxHandler)
addAction('action_sync_exchange_open_order_list', actions.syncExchangeOpenOrderListHandler)
addAction('action_sync_exchange_trade_list', actions.syncExchangeTradeListHandler)
addAction('action_update_dca_order', actions.updateDCAOrderHandler)
addAction('action_update_stripe_subscription', actions.updateStripeSubscriptionHandler)
addAction('action_update_user', actions.updateUserHandler)
addAction('action_update_user_exchange_keys', actions.updateUserExchangeKeysHandler)
addAction('action_validate_user_exchange_keys', actions.validateUserExchangeKeysHandler)
addAction('action_validate_user_exchange_keys_live', actions.validateUserExchangeKeysLiveHandler)
addAction('action_validate_user_password_reset', actions.validateUserPasswordReset)
addAction('action_verify_user_email', actions.verifyUserEmailHandler)

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

const start = async () => {
  try {
    const runner = await startWorker({
      connectionString: config.DATABASE_URL,
      jobs: [
        {
          active: false,
          name: 'autoBuy',
          pattern: '* * * * *',
          handler: cron.autoBuyHandler,
        },
        {
          active: false,
          name: 'fetchCurrencyFx',
          pattern: '0 * * * *',
          handler: cron.fetchCurrencyFxHandler,
        },
        {
          active: false,
          name: 'fetchMarketPrice',
          pattern: '* * * * *',
          handler: cron.fetchMarketPriceHandler,
        },
        {
          active: true,
          name: 'fetchStripe',
          pattern: '0 * * * *',
          handler: cron.fetchStripeHandler,
        },
      ],
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
