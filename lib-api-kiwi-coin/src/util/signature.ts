import { createHmac } from 'node:crypto'

import { isValidConfig } from './is-valid-config.js'
import { ConfigError } from './error.js'
import type { Config } from './types.js'

type Signature = {
  key: string
  nonce: string
  signature: string
}

const createSignature = (
  config: Config,
  endpoint: string,
  args: string[] = [],
): Signature => {
  const { userId, apiKey, apiSecret } = config

  const nonce = Date.now().toString()

  const message = [
    nonce,
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
): string | Error => {
  if (!isValidConfig(config)) {
    return new ConfigError(
      `Config is not valid for kiwi-coin.com.
${JSON.stringify({ config })}`,
    )
  }

  const formData = new URLSearchParams()
  for (const [key, value] of Object.entries(parameters)) {
    formData.set(key, value)
  }

  const args: string[] = Object.values(parameters)

  const { key, nonce, signature } = createSignature(config, endpoint, args)

  formData.set('key', key)
  formData.set('nonce', nonce)
  formData.set('signature', signature)

  return formData.toString()
}

export { createSignature, createSignedBody }
