import createFastify from 'fastify'
import { config } from './env.js'

import * as actions from './action/index.js'
import * as webhooks from './webhooks/index.js'
import * as cron from './cron/index.js'
import { bindActionHandler } from './util/action-handler.js'
import { bindHandler } from './util/handler.js'

import { startWorker } from './worker.js'

import {
  getExchangeUid,
  EXCHANGE_DASSET,
  EXCHANGE_INDEPENDENT_RESERVE,
  EXCHANGE_KIWI_COIN,
} from './model/exchange/index.js'
import { pool } from './pool.js'

// Log queries
// import './test-util/db-debug.js'

const fastify = createFastify({ logger: true })

const addAction = bindActionHandler(fastify)

addAction('actionCreateAdminAuthToken', actions.createAdminAuthTokenHandler)
addAction('actionCreateAuthToken', actions.createAuthTokenHandler)
addAction('actionCreateDcaOrder', actions.createDcaOrderHandler)
addAction('actionCreateStripeSubscription', actions.createStripeSubscription)
addAction('actionCreateUser', actions.createUserHandler)
addAction('actionCreateUserExchangeKeys', actions.createUserExchangeKeysHandler)
addAction('actionDeleteUser', actions.deleteUserHandler)
addAction('actionDeleteUser2fa', actions.deleteUser2FaHandler)
addAction('actionEnableUser2fa', actions.enableUser2FaHandler)
addAction(
  'actionQueryLiveStripeSubscription',
  actions.queryLiveStripeSubscription,
)
addAction('actionQueryStripeConfig', actions.queryStripeConfig)
addAction('actionQueryUserEmail', actions.queryUserEmailHandler)
addAction('actionQueryUserLimit', actions.queryUserLimitHandler)
addAction('actionRefreshAuthToken', actions.refreshAuthTokenHandler)
addAction('actionResetUserPassword', actions.resetUserPasswordHandler)
addAction('actionSeedTestAccount', actions.seedTestAccount)
addAction('actionSendUserEmailVerify', actions.sendUserEmailVerifyHandler)
addAction('actionSendUserPasswordReset', actions.sendUserPasswordResetHandler)
addAction('actionSetupUser2fa', actions.setupUser2FaHandler)
addAction('actionSyncCurrencyFx', actions.syncCurrencyFxHandler)
addAction(
  'actionSyncExchangeOpenOrderList',
  actions.syncExchangeOpenOrderListHandler,
)
addAction('actionSyncExchangeTradeList', actions.syncExchangeTradeListHandler)
addAction('actionUpdateDcaOrder', actions.updateDcaOrderHandler)
addAction(
  'actionUpdateStripeSubscription',
  actions.updateStripeSubscriptionHandler,
)
addAction('actionUpdateUser', actions.updateUserHandler)
addAction('actionUpdateUserExchangeKeys', actions.updateUserExchangeKeysHandler)
addAction(
  'actionValidateUserExchangeKeys',
  actions.validateUserExchangeKeysHandler,
)
addAction(
  'actionValidateUserExchangeKeysLive',
  actions.validateUserExchangeKeysLiveHandler,
)
addAction('actionValidateUserPasswordReset', actions.validateUserPasswordReset)
addAction('actionVerifyUserEmail', actions.verifyUserEmailHandler)

const addRoute = bindHandler(fastify)
addRoute('/webhook/stripe', webhooks.stripeHandler)

const start = async () => {
  const runner = await startWorker({
    connectionString: config.DATABASE_URL,
    jobs: [
      {
        active: config.ACTIVE_JOBS.includes('autoBuy'),
        name: 'autoBuy',
        pattern: '* * * * *',
        handler: cron.autoBuyHandler,
      },
      {
        active: config.ACTIVE_JOBS.includes('fetchCurrencyFx'),
        name: 'fetchCurrencyFx',
        pattern: '0 * * * *',
        handler: cron.fetchCurrencyFxHandler,
      },
      {
        active: config.ACTIVE_JOBS.includes('fetchMarketPrice'),
        name: 'fetchMarketPrice',
        pattern: '* * * * *',
        handler: cron.fetchMarketPriceHandler,
      },
      {
        active: config.ACTIVE_JOBS.includes('fetchStripe'),
        name: 'fetchStripe',
        pattern: '0 * * * *',
        handler: cron.fetchStripeHandler,
      },
    ],
  })
  runner.promise.catch(console.error)

  // Make sure exchanges exist in the database
  await Promise.all([
    getExchangeUid(pool, EXCHANGE_DASSET),
    getExchangeUid(pool, EXCHANGE_KIWI_COIN),
    getExchangeUid(pool, EXCHANGE_INDEPENDENT_RESERVE),
  ])

  await fastify.listen({ port: config.PORT, host: '::' })
}

start().catch((error: unknown) => {
  fastify.log.error(error)
})
