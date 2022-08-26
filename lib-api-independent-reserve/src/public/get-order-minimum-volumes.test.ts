import test from 'ava'
import { assertOk } from '@stayradiated/error-boundary'

import { getOrderMinimumVolumes } from './get-order-minimum-volumes.js'

test('should get order minimum volumes', async (t) => {
  const [result] = await getOrderMinimumVolumes()
  assertOk(result)

  const values = Object.values(result)
  t.true(values.every((value) => typeof value === 'number'))
})
