import { createHmac } from 'crypto'

import type { Config } from './types.js'

type CreateSignatureOptions = {
  config: Config
  url: string
  args: string[]
  nonce: number
}

const createSignature = (options: CreateSignatureOptions): string => {
  const { config, url, args, nonce } = options
  const { apiKey, apiSecret } = config

  const message = [
    url,
    `apiKey=` + apiKey,
    `nonce=` + String(nonce),
    ...args,
  ].join(',')

  console.log(message)

  const hmac = createHmac('sha256', apiSecret, { encoding: 'utf8' })
  hmac.update(message, 'utf8')
  const signature = hmac.digest('hex').toUpperCase()

  return signature
}

const filterNullKeys = (
  input: Record<string, undefined | null | number | string>,
): Record<string, number | string> =>
  Object.fromEntries(
    Object.entries(input).filter((pair) => {
      const value = pair[1]
      return typeof value !== 'undefined' && value !== null
    }) as Array<[string, string | number]>,
  )

type CreateSignedBodyOptions = {
  config: Config
  endpoint: string
  parameters: Record<string, undefined | string | number>
  nonce?: number
}

type SignedBody = {
  apiKey: string
  nonce: string
  signature: string
}

const createSignedBody = (options: CreateSignedBodyOptions): SignedBody => {
  const { config, endpoint, parameters, nonce = Date.now() } = options
  const { apiKey } = config

  const validParameters = filterNullKeys(parameters)

  const args: string[] = Object.entries(validParameters).map(
    ([key, value]) => `${key}=${value}`,
  )

  const url = 'https://api.independentreserve.com/' + endpoint

  return {
    apiKey,
    nonce: String(nonce),
    signature: createSignature({ config, url, args, nonce }),
    ...validParameters,
  }
}

export { createSignature, createSignedBody }
