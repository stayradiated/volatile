import { run, parseCronItems, CronItem } from 'graphile-worker'

import * as cron from './cron/index.js'
import { bindCronHandlers } from './util/cron-handler.js'

type StartWorkerOptions = {
  connectionString: string
  enabledCronTasks: {
    autoBuy: boolean
    fetchCurrencyFx: boolean
    fetchMarketPrice: boolean
    fetchStripe: boolean
  }
}

const startWorker = async (options: StartWorkerOptions) => {
  const { connectionString, enabledCronTasks } = options

  const cronItemList: CronItem[] = []

  if (enabledCronTasks.autoBuy) {
    cronItemList.push({
      task: 'autoBuy',
      pattern: '* * * * *',
      payload: {},
    })
  }

  if (enabledCronTasks.fetchCurrencyFx) {
    cronItemList.push({
      task: 'fetchCurrencyFx',
      pattern: '0 * * * *',
      payload: {},
    })
  }

  if (enabledCronTasks.fetchMarketPrice) {
    cronItemList.push({
      task: 'fetchMarketPrice',
      pattern: '* * * * *',
      payload: {},
    })
  }

  if (enabledCronTasks.fetchStripe) {
    cronItemList.push({
      task: 'fetchStripe',
      pattern: '* * * * *',
      payload: {},
    })
  }

  const runner = await run({
    connectionString,
    concurrency: 5,

    taskList: bindCronHandlers({
      autoBuy: cron.autoBuyHandler,
      fetchCurrencyFx: cron.fetchCurrencyFxHandler,
      fetchMarketPrice: cron.fetchMarketPriceHandler,
      fetchStripe: cron.fetchStripe,
    }),

    parsedCronItems: parseCronItems(cronItemList),
  })

  return runner
}

export { startWorker }
