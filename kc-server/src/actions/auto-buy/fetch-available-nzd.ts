import * as kiwiCoin from '@stayradiated/kiwi-coin-api'

const fetchAvailableNZD = async (
  kiwiCoinConfig: kiwiCoin.Config,
): Promise<number | Error> => {
  const balance = await kiwiCoin.balance(kiwiCoinConfig)
  if (balance instanceof Error) {
    return balance
  }

  const availableNZD = Number.parseFloat(balance.nzd_available)
  return availableNZD
}

export { fetchAvailableNZD }
