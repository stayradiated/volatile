import * as z from 'zod'
import type { ActionHandler } from '../../util/action-handler.js'
import {
  updateDcaOrder,
  assertUserForDcaOrder,
} from '../../model/dca-order/index.js'
import {
  MissingRequiredArgumentError,
  messageWithContext,
} from '../../util/error.js'

const schema = {
  input: {
    dcaOrderUid: z.string(),
    enabled: z.boolean(),
  },
  output: {
    dcaOrderUid: z.string(),
  },
}
const updateDcaOrderHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
    const { session, pool, input } = context
    const { userUid } = session
    if (!userUid) {
      return new MissingRequiredArgumentError(
        messageWithContext(`userUid is required`, {
          userUid,
        }),
      )
    }

    const { dcaOrderUid, enabled } = input

    const assertError = await assertUserForDcaOrder(pool, {
      userUid,
      dcaOrderUid,
    })
    if (assertError instanceof Error) {
      return assertError
    }

    const error = await updateDcaOrder(pool, { dcaOrderUid, enabled })
    if (error instanceof Error) {
      return error
    }

    return {
      dcaOrderUid,
    }
  },
}

export { updateDcaOrderHandler }
