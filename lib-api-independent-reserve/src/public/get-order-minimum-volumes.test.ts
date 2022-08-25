import test from 'ava'
import { throwIfErrorSync } from '@stayradiated/error-boundary'

import { getOrderMinimumVolumes } from './get-order-minimum-volumes.js'

test('should get order minimum volumes', async (t) => {
  const [resultOrError] = await getOrderMinimumVolumes()
  const result = throwIfErrorSync(resultOrError)

  const values = Object.values(result)
  t.true(values.every((value) => typeof value === 'number'))
})
