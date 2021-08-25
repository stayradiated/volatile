import { getUserExchangeAPI } from '../user-exchange-keys/index.js'

import type { Pool } from '../../types.js'

type SyncExchangeOpenOrderListOptions = {
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
}

const syncExchangeOpenOrderList = async (
  pool: Pool,
  options: SyncExchangeOpenOrderListOptions,
): Promise<void | Error> => {
  const { userUID, exchangeUID, userExchangeKeysUID } = options

  const userExchangeAPI = await getUserExchangeAPI(pool, userExchangeKeysUID)
  if (userExchangeAPI instanceof Error) {
    return userExchangeAPI
  }

  const openOrders = await userExchangeAPI.getOpenOrders()
  if (openOrders instanceof Error) {
    return openOrders
  }

  console.log({ userUID, exchangeUID, openOrders })

  return undefined
}

export { syncExchangeOpenOrderList }
