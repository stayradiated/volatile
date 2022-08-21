import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

const deleteUserEmailVerify = async (
  pool: Pool,
  userEmailVerifyUid: string,
): Promise<void | Error> => {
  const error = await errorBoundary(async () =>
    db.deletes('user_email_verify', { uid: userEmailVerifyUid }).run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { deleteUserEmailVerify }
