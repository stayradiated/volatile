import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { PermissionError } from '../../util/error.js'

type AssertUserForDCAOrderOptions = {
  userUID: string
  dcaOrderUID: string
}

const assertUserForDCAOrder = async (
  pool: Pool,
  options: AssertUserForDCAOrderOptions,
): Promise<true | Error> => {
  const { dcaOrderUID, userUID } = options

  const dcaOrder = await errorBoundary(async () =>
    db
      .selectExactlyOne('dca_order', {
        uid: dcaOrderUID,
        user_uid: userUID,
      })
      .run(pool),
  )
  if (dcaOrder instanceof Error) {
    return new PermissionError({
      message: 'User does not have access to DCA Order.',
      context: { dcaOrderUID, userUID },
    })
  }

  return true
}

export { assertUserForDCAOrder }
