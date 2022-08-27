import { parseISO } from 'date-fns'
import * as z from 'zod'

import { MissingRequiredArgumentError } from '../../util/error.js'

import type { ActionHandler } from '../../util/action-handler.js'
import { insertDcaOrder } from '../../model/dca-order/index.js'
import { getUserExchangeKeys } from '../../model/user-exchange-keys/index.js'

const schema = {
  input: {
    userExchangeKeysUid: z.string(),
    marketUid: z.string(),
    primaryCurrency: z.string(),
    secondaryCurrency: z.string(),
    startAt: z.string(),
    marketOffset: z.number(),
    dailyAverage: z.number(),
    intervalMs: z.number(),
    minPrice: z.optional(z.number()),
    maxPrice: z.optional(z.number()),
    minValue: z.optional(z.number()),
    maxValue: z.optional(z.number()),
  },
  output: {
    dcaOrderUid: z.string(),
  },
}

const createDcaOrderHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { pool, input, session } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        `userUid is required${JSON.stringify(userUid)}`,
      )
    }

    const {
      userExchangeKeysUid,
      marketUid,
      primaryCurrency,
      secondaryCurrency,
      startAt,
      marketOffset,
      dailyAverage,
      intervalMs,
      minPrice,
      maxPrice,
      minValue,
      maxValue,
    } = input

    const userExchangeKeys = await getUserExchangeKeys(
      pool,
      userExchangeKeysUid,
    )
    if (userExchangeKeys instanceof Error) {
      return userExchangeKeys
    }

    const dcaOrder = await insertDcaOrder(pool, {
      userUid,
      exchangeUid: userExchangeKeys.exchangeUid,
      userExchangeKeysUid,
      marketUid,
      primaryCurrency,
      secondaryCurrency,
      startAt: parseISO(startAt),
      marketOffset,
      dailyAverage,
      intervalMs,
      minPrice,
      maxPrice,
      minValue,
      maxValue,
      enabledAt: undefined,
      nextRunAt: undefined,
      lastRunAt: undefined,
    })
    if (dcaOrder instanceof Error) {
      return dcaOrder
    }

    return {
      dcaOrderUid: dcaOrder.uid,
    }
  },
}

export { createDcaOrderHandler }
