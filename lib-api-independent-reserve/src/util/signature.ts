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

  const hmac = createHmac('sha256', apiSecret, { encoding: 'utf8' })
  hmac.update(message, 'utf8')
  const signature = hmac.digest('hex').toUpperCase()

  return signature
}

type PickKeysMatching<T, V> = Pick<
  T,
  { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T]
>

const filterNullKeys = <P>(input: P): PickKeysMatching<P, string | number> =>
  Object.fromEntries(
    Object.entries(input).filter((pair) => {
      const value = pair[1]
      return typeof value !== 'undefined' && value !== null
    }) as Array<[string, string | number]>,
  ) as unknown as PickKeysMatching<P, string | number>

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

const createSignedBody = <P>(
  options: CreateSignedBodyOptions<P>,
): SignedBody<PickKeysMatching<P, string | number>> => {
  const { config, endpoint, parameters, nonce } = options
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
