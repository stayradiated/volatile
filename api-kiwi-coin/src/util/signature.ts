import { createHmac } from 'crypto'

import type { Config } from './types.js'

const createSignature = (
  config: Config,
  endpoint: string,
  args: string[] = [],
) => {
  const { userId, apiKey, apiSecret } = config

  const nonce = Date.now().toString()
  const message = [
    nonce.toString(),
    userId,
    apiKey,
    ';',
    [endpoint, ...args].join(','),
  ].join('')

  const hmac = createHmac('sha256', apiSecret, { encoding: 'utf8' })
  hmac.update(message, 'utf8')
  const signature = hmac.digest('hex').toUpperCase()

  return { key: apiKey, nonce, signature }
}

const createSignedBody = (
  config: Config,
  endpoint: string,
  parameters: Record<string, string> = {},
) => {
  const body = new URLSearchParams(parameters)
  const args: string[] = Object.values(parameters)

  const { key, nonce, signature } = createSignature(config, endpoint, args)

  body.set('key', key)
  body.set('nonce', nonce)
  body.set('signature', signature)

  return body
}

export { createSignature, createSignedBody }
