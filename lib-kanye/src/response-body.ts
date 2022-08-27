import { HTTPError, TimeoutError } from 'ky'
import { errorBoundarySync } from '@stayradiated/error-boundary'

import { NetworkError, ServerError } from './error.js'

import type { Kanye } from './types.js'

const getResponseBodyText = (input: Kanye): string | Error => {
  if (input.error) {
    if (input.error instanceof TimeoutError) {
      return new NetworkError(
        `Timed out waiting for ${input.method} ${input.url}`,
        {
          cause: input.error,
        },
      )
    }

    if (input.error instanceof HTTPError) {
      return new ServerError(
        `Received ${input.responseStatus ?? '???'} error from ${input.method} ${
          input.url
        }: ${input.responseBody ?? ''}`,
        {
          cause: input.error,
        },
      )
    }

    return input.error
  }

  if (!input.responseBody) {
    return new Error('No response body')
  }

  return input.responseBody
}

const getResponseBodyJson = <T>(raw: Kanye): T | Error => {
  const responseBodyText = getResponseBodyText(raw)
  if (responseBodyText instanceof Error) {
    return responseBodyText
  }

  const responseBodyJson = errorBoundarySync(
    () => JSON.parse(responseBodyText) as T,
  )
  if (responseBodyJson instanceof Error) {
    return responseBodyJson
  }

  return responseBodyJson
}

export { getResponseBodyText, getResponseBodyJson }
