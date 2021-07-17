import { PORT } from './env.js'
import { pool } from './pool.js'

import { getExchangeUID, EXCHANGE_KIWI_COIN } from './models/exchange/index.js'
import {
  getMarketUID,
  MARKET_KIWI_COIN,
  MARKET_BINANCE_US,
} from './models/market/index.js'

import * as actions from './actions/index.js'
import { fastify } from './utils/fastify.js'
// import { config } from './utils/config.js'
import { bindActionHandler } from './utils/action-handler.js'

bindActionHandler('auto_buy', actions.autoBuyHandler)
bindActionHandler('create_auth_token', actions.createAuthTokenHandler)
bindActionHandler('create_dca_order', actions.createDCAOrderHandler)
bindActionHandler('create_user', actions.createUserHandler)
bindActionHandler('fetch_market_price', actions.fetchMarketPriceHandler)
bindActionHandler('get_email', actions.getEmailHandler)
bindActionHandler('set_user_exchange_keys', actions.setUserExchangeKeysHandler)
bindActionHandler('validate_user_exchange_keys', actions.validateUserExchangeKeysHandler)

void fastify.listen(PORT, '0.0.0.0')

void (async function () {
  // Make sure markets + exchanges exist in DB
  await getExchangeUID(pool, EXCHANGE_KIWI_COIN)
  await getMarketUID(pool, MARKET_KIWI_COIN)
  await getMarketUID(pool, MARKET_BINANCE_US)

  // const context = {
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
