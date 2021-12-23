import { parseISO } from 'date-fns'

import { IllegalStateError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { syncCurrencyFx } from '../../model/currency-fx/index.js'

type Input = {
  start_date: string
  end_date: string
  from_symbol: string
  to_symbol: string
}

type Output = {
  insert_count: number
}

const syncCurrencyFxHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { input, pool, session } = context
  const { role } = session
  if (role !== 'admin') {
    return new IllegalStateError({
      message: 'Only admin can query user email.',
      context: { role },
    })
  }

  const {
    start_date: startDate,
    end_date: endDate,
    from_symbol: fromSymbol,
    to_symbol: toSymbol,
  } = input

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
    insert_count: result.count,
  }
}

export { syncCurrencyFxHandler }
