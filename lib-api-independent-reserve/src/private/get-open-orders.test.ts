import test from 'ava'

import { getOpenOrders } from './get-open-orders.js'

test('get open orders', async (t) => {
  const result = await getOpenOrders({
    config: {
      apiKey: '9a979e46-0116-4b5a-9cdc-f62cd8693a55',
      apiSecret: 'e0459277e75f42fc9452c7eabc99bb93',
    },
    pageIndex: 1,
    pageSize: 50,
  })
  console.log(result)
  t.pass()
})
