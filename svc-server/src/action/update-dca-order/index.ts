import { ActionHandlerFn } from '../../util/action-handler.js'
import {
  updateDCAOrder,
  assertUserForDCAOrder,
} from '../../model/dca-order/index.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

type Input = {
  dca_order_uid: string
  enabled: boolean
}
type Output = {
  dca_order_uid: string
}

const updateDCAOrderHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { session, pool, input } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const { dca_order_uid: dcaOrderUID, enabled } = input

  const assertError = await assertUserForDCAOrder(pool, {
    userUID,
    dcaOrderUID,
  })
  if (assertError instanceof Error) {
    return assertError
  }

  const error = await updateDCAOrder(pool, { dcaOrderUID, enabled })
  if (error instanceof Error) {
    return error
  }

  return {
    dca_order_uid: dcaOrderUID,
  }
}

export { updateDCAOrderHandler }
