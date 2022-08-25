import * as z from 'zod'
import { parseISO } from 'date-fns'

import { IllegalStateError } from '../../util/error.js'

import { ActionHandler } from '../../util/action-handler.js'

import { syncCurrencyFx } from '../../model/currency-fx/index.js'

const schema = {
  input: {
    startDate: z.string(),
    endDate: z.string(),
    fromSymbol: z.string(),
    toSymbol: z.string(),
  },
  output: {
    insertCount: z.number(),
  },
}
const syncCurrencyFxHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { input, pool, session } = context
    const { role } = session
    if (role !== 'admin') {
      return new IllegalStateError({
        message: 'Only admin can query user email.',
        context: { role },
      })
    }

    const { startDate, endDate, fromSymbol, toSymbol } = input

    const result = await syncCurrencyFx(pool, {
      startDate: parseISO(startDate),
      endDate: parseISO(endDate),
      fromSymbol,
      toSymbol,
    })
    if (result instanceof Error) {
      return result
    }

    return {
      insertCount: result.count,
    }
  },
}

export { syncCurrencyFxHandler }
