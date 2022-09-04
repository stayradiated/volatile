import { errorBoundarySync } from '@stayradiated/error-boundary'

import type { Kanye } from './types.js'

const getResponseBodyText = (input: Kanye): string | Error => {
  if (input.error) {
    return input.error
  }

  if (typeof input.responseBody !== 'string') {
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
