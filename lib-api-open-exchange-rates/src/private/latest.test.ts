import test from 'ava'
import { mockGlobalDispatcher } from '@volatile/kanye'
import { assertOk } from '@stayradiated/error-boundary'

import { latest } from './latest.js'

const mock = mockGlobalDispatcher('https://openexchangerates.org')

test('Should get latest data', async (t) => {
  mock
    .intercept({
      method: 'GET',
      path: '/api/latest.json?app_id=APP_ID&base=USD&prettyprint=false&symbols=AUD',
    })
    .reply(200, {
      /* eslint-disable @typescript-eslint/naming-convention */
      disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
      license: 'https://openexchangerates.org/license',
      timestamp: 1_659_423_600,
      base: 'USD',
      rates: {
        AUD: 1.438_914,
        USD: 1,
      },
      /* eslint-enable @typescript-eslint/naming-convention */
    })

  const [result] = await latest({
    config: {
      appId: 'APP_ID',
    },
    base: 'USD',
    symbols: ['AUD'],
  })
  assertOk(result)

  t.pass()
})
