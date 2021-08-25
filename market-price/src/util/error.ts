/* eslint-disable fp/no-class, @typescript-eslint/no-useless-constructor */

import { HTTPError } from 'ky'
import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'

import { errorBoundary } from '@stayradiated/error-boundary'

const withErrorResponse = async (error: Error): Promise<Error> => {
  if (error instanceof HTTPError) {
    return errorBoundary(async () => {
      const context = (await error.response.json()) as unknown
      return new APIError({
        message: 'Unexpected API error.',
        context,
      })
    })
  }

  return error
}

class NetError extends BetterError {
  constructor(arg: BetterErrorConstructorArg) {
    super(arg)
  }
}

class APIError extends BetterError {
  constructor(arg: BetterErrorConstructorArg) {
    super(arg)
  }
}

export { NetError, APIError, withErrorResponse }
