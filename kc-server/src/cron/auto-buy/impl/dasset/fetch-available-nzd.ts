import * as dasset from '@stayradiated/dasset-api'

import { explainError } from '../../../../util/error.js'

const fetchAvailableNZD = async (
  config: dasset.Config,
): Promise<number | Error> => {
  const balance = await dasset.balanceSingle(config, 'NZD')
  if (balance instanceof Error) {
    return balance
  }

  const availableNZD = balance.total
  if (typeof availableNZD !== 'number' || Number.isNaN(availableNZD)) {
    return explainError('Could not fetch available NZD from dassetx.com', {
      balance: JSON.stringify(balance),
    })
  }

  return availableNZD
}

export { fetchAvailableNZD }
