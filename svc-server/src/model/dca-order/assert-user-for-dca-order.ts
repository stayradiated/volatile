import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { PermissionError } from '../../util/error.js'

type AssertUserForDcaOrderOptions = {
  userUid: string
  dcaOrderUid: string
}

const assertUserForDcaOrder = async (
  pool: Pool,
  options: AssertUserForDcaOrderOptions,
): Promise<true | Error> => {
  const { dcaOrderUid, userUid } = options

  const dcaOrder = await errorBoundary(async () =>
    db
      .selectExactlyOne('dca_order', {
        uid: dcaOrderUid,
        user_uid: userUid,
      })
      .run(pool),
  )
  if (dcaOrder instanceof Error) {
    return new PermissionError({
      message: 'User does not have access to Dca Order.',
      context: { dcaOrderUid, userUid },
    })
  }

  return true
}

export { assertUserForDcaOrder }
