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
    frequencyMs: 1000 * 5,
    timeoutMs: 1000 * 60 * 2,
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
