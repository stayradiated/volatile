import type { Pool } from '../../types.js'
import { NoEntityError } from '../../util/error.js'

import { getCustomer } from './get-customer.js'
import { createCustomer } from './create-customer.js'

import type { Customer } from './types.js'

const getOrCreateCustomer = async (
  pool: Pool,
  userUID: string,
): Promise<Customer | Error> => {
  const existingCustomer = await getCustomer(pool, userUID)

  if (existingCustomer instanceof NoEntityError) {
    return createCustomer(pool, userUID)
  }

  if (existingCustomer instanceof Error) {
    return existingCustomer
  }

  return existingCustomer
}

export { getOrCreateCustomer }
