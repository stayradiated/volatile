import { HTTPError, TimeoutError } from 'ky'
import { errorBoundary } from '@stayradiated/error-boundary'

import { APIError, NetError } from './error.js'

import type { Kanye } from './types.js'

const getResponseBodyText = (input: Kanye): string | Error => {
  if (input.error) {
    if (input.error instanceof TimeoutError) {
      return new NetError({
        message: `Timed out waiting for ${input.method} ${input.url}`,
        context: input,
      })
    }

    if (input.error instanceof HTTPError) {
      return new APIError({
        message: `Received ${input.responseStatus ?? 'unknown'} error from ${
          input.method
        } ${input.url}: ${input.responseBody}`,
        context: input,
      })
    }

    return input.error
  }

  if (!input.responseBody) {
    return new Error('No response body')
  }

  return input.responseBody
}

const getResponseBodyJSON = <T>(raw: Kanye): T | Error => {
  const responseBodyText = getResponseBodyText(raw)
  if (responseBodyText instanceof Error) {
    return responseBodyText
  }

  const responseBodyJSON = errorBoundary(
    () => JSON.parse(responseBodyText) as T,
  )
  if (responseBodyJSON instanceof Error) {
    return responseBodyJSON
  }

  return responseBodyJSON
}

export { getResponseBodyText, getResponseBodyJSON }
