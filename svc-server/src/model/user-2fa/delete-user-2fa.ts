import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type DeleteUser2FAOptions = {
  userUid: string
}

const deleteUser2FA = async (
  pool: Pool,
  options: DeleteUser2FAOptions,
): Promise<void | Error> => {
  const error = await errorBoundary(async () =>
    db
      .deletes('user_2fa', {
        user_uid: options.userUid,
      })
      .run(pool),
  )

  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { deleteUser2FA }
export type { DeleteUser2FAOptions }
