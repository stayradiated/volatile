import { errorBoundary } from '@stayradiated/error-boundary'
import {
  Kanye,
  getResponseBody as getKanyeResponseBody,
  APIError,
} from '@volatile/kanye'

const prefixUrl = 'https://api.dassetx.com/api/'
const timeout = 15_000

const requestOptions = {
  prefixUrl,
  timeout,
}

type DassetAPIError = {
  status: number
  type: string
  code: number
  message: string
}

const isDassetAPIError = (
  responseBody: unknown,
): responseBody is DassetAPIError => {
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
  const responseBody = getKanyeResponseBody(raw)
  if (responseBody instanceof Error) {
    const rawResponseBody = raw.responseBody
    if (rawResponseBody) {
      const responseBodyJSON = errorBoundary(
        () => JSON.parse(rawResponseBody) as T,
      )
      if (isDassetAPIError(responseBodyJSON)) {
        return new APIError({
          message: responseBodyJSON.message,
          context: responseBodyJSON,
        })
      }
    }

    return responseBody
  }

  const responseBodyJSON = errorBoundary(() => JSON.parse(responseBody) as T)
  return responseBodyJSON
}

export { prefixUrl, timeout, requestOptions, getResponseBody }
