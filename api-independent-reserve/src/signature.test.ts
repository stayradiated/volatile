import test from 'ava'

import { createSignature, createSignedBody } from './signature.js'

test('createSignature', (t) => {
  const signature = createSignature({
    config: {
      apiKey: 'api_ey',
      apiSecret: 'api_secret',
    },
    url: 'https://api.independentreserve.com/Private/Test',
    args: ['a=1', 'b=2', 'c=3'],
    nonce: 1_629_192_445_766,
  })
  t.is(
    '750CAACBD0C251B152A76A6DCAA20B7694EA68E89535B0D263BDB1DF04215E03',
    signature,
  )
})

test('createSignedBody', (t) => {
  const body = createSignedBody({
    config: {
      apiKey: 'api_key',
      apiSecret: 'api_secret',
    },
    endpoint: 'Private/Test',
    parameters: {
      a: 1,
      b: 2,
      c: 3,
    },
    nonce: 1_629_192_445_766,
  })
  t.deepEqual(
    {
      apiKey: 'api_key',
      nonce: '1629192445766',
      signature:
        '6BB0D678C9457A8D6F26A93A5DEBFBAF5B1C9DEE4E5EBE09EFCBE7E39A828E95',
    },
    body,
  )
})
