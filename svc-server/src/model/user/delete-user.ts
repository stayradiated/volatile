import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

type DeleteUserOptions = {
  userUID: string
}

const deleteUser = async (
  pool: Pool,
  options: DeleteUserOptions,
): Promise<string[] | Error> => {
  const { userUID } = options

  const rows = await errorBoundary(async () =>
    db
      .deletes(
        'user',
        { uid: userUID },
        {
          returning: ['uid'],
        },
      )
      .run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => row.uid)
}

export { deleteUser }
