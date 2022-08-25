import { createHmac } from 'node:crypto'
import type { ConditionalExcept } from 'type-fest'

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

  const hmac = createHmac('sha256', apiSecret, { encoding: 'utf8' })
  hmac.update(message, 'utf8')
  const signature = hmac.digest('hex').toUpperCase()

  return signature
}

type NonNullValues<P> = ConditionalExcept<P, undefined>

const filterNonNullValues = <
  P extends Record<string, undefined | boolean | number | string>,
  Q extends NonNullValues<P>,
>(
  input: P,
): Q => {
  const output: Record<string, boolean | number | string> = {}
  for (const key in input) {
    if (Object.hasOwnProperty.call(input, key)) {
      const value = input[key]
      if (typeof value !== 'undefined' && value !== null) {
        output[key] = value
      }
    }
  }

  return output as unknown as Q
}

type CreateSignedBodyOptions<P> = {
  config: Config
  endpoint: string
  parameters: P
  nonce: number
}

type SignedBody<P> = P & {
  apiKey: string
  nonce: string
  signature: string
}

const createSignedBody = <
  P extends Record<string, undefined | string | number>,
>(
  options: CreateSignedBodyOptions<P>,
): SignedBody<NonNullValues<P>> => {
  const { config, endpoint, parameters, nonce } = options
  const { apiKey } = config

  const validParameters = filterNonNullValues(parameters)

  const args: string[] = []
  for (const key in validParameters) {
    if (Object.hasOwnProperty.call(validParameters, key)) {
      const value = validParameters[key]
      args.push(`${key}=${String(value)}`)
    }
  }

  const url = 'https://api.independentreserve.com/' + endpoint

  return {
    apiKey,
    nonce: String(nonce),
    signature: createSignature({ config, url, args, nonce }),
    ...validParameters,
  }
}

export { createSignature, createSignedBody }
