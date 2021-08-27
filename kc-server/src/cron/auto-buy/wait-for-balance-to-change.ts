import { Duration } from 'luxon'

import { poll } from '../../util/poll.js'

import type { UserExchangeAPI } from '../../exchange-api/index.js'

type WaitForBalanceToChangeOptions = {
  initialBalance: number
  userExchangeAPI: UserExchangeAPI
}

const waitForBalanceToChange = async (
  options: WaitForBalanceToChangeOptions,
) => {
  const { initialBalance, userExchangeAPI } = options

  return poll<number>({
    frequency: Duration.fromISOTime('00:00:05', {}),
    timeout: Duration.fromISOTime('00:02:00', {}),
    fn: async () => {
      const balance = await userExchangeAPI.getBalance({ currency: 'NZD' })
      if (balance instanceof Error) {
        return {
          end: false,
          value: balance,
        }
      }

      const hasChanged = balance !== initialBalance
      console.log(initialBalance, balance, hasChanged)
      return {
        end: hasChanged,
        value: balance,
      }
    },
  })
}

export { waitForBalanceToChange }
