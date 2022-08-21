import { Kanye, getResponseBodyJson, ApiError } from '@volatile/kanye'

import { Config } from './types.js'

const prefixUrl = 'https://api.dassetx.com/api/'
const timeout = 15_000

const requestOptions = (config: Config) => ({
  prefixUrl,
  timeout,
  redact: [config.accountId, config.apiKey],
})

type DassetApiError = {
  status: number
  type: string
  code: number
  message: string
}

const isDassetApiError = (
  responseBody: unknown,
): responseBody is DassetApiError => {
  if (typeof responseBody === 'object' && responseBody !== null) {
    const responseBodyObject = responseBody as Record<string, unknown>
    return (
      typeof responseBodyObject['status'] === 'number' &&
      responseBodyObject['type'] === 'string' &&
      responseBodyObject['code'] === 'number' &&
      responseBodyObject['message'] === 'string'
    )
  }

  return false
}

const getResponseBody = <T>(raw: Kanye): T | Error => {
  const responseBody = getResponseBodyJson<T>(raw)
  if (responseBody instanceof Error) {
    if (isDassetApiError(responseBody)) {
      return new ApiError({
        message: responseBody.message,
        context: responseBody,
      })
    }

    return responseBody
  }

  return responseBody
}

export { prefixUrl, timeout, requestOptions, getResponseBody }
