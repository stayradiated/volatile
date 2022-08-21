import { ActionHandlerFn } from '../../util/action-handler.js'
import {
  updateDcaOrder,
  assertUserForDcaOrder,
} from '../../model/dca-order/index.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

type Input = {
  dca_order_uid: string
  enabled: boolean
}
type Output = {
  dca_order_uid: string
}

const updateDcaOrderHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { session, pool, input } = context
  const { userUid } = session
  if (!userUid) {
    return new MissingRequiredArgumentError({
      message: 'userUid is required',
      context: { userUid },
    })
  }

  const { dca_order_uid: dcaOrderUid, enabled } = input

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
    dca_order_uid: dcaOrderUid,
  }
}

export { updateDcaOrderHandler }
