import { errorBoundary } from '@stayradiated/error-boundary'
import * as db from 'zapatos/db'

import { NoEntityError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { Customer } from './types.js'

const getCustomer = async (
  pool: Pool,
  userUID: string,
): Promise<Customer | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('customer', { user_uid: userUID }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return new NoEntityError({
      message: 'User does not have a customer.',
      context: {
        userUID
      }
    })
  }

  return {
    userUID: row.user_uid,
    customerID: row.customer_id,
  }
}

export { getCustomer }
