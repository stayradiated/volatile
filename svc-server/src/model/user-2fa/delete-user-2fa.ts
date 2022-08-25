import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type DeleteUser2FaOptions = {
  userUid: string
}

const deleteUser2Fa = async (
  pool: Pool,
  options: DeleteUser2FaOptions,
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

export { deleteUser2Fa }
export type { DeleteUser2FaOptions }
