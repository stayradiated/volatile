import test from 'ava'
import { throwIfError } from '@stayradiated/error-boundary'

import { getOrderMinimumVolumes } from './get-order-minimum-volumes.js'

test('should get order minimum volumes', async (t) => {
  const result = await throwIfError(getOrderMinimumVolumes())
  const values = Object.values(result)
  t.true(values.every((value) => typeof value === 'number'))
})
