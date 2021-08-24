/* eslint-disable fp/no-class, @typescript-eslint/no-useless-constructor */

import { HTTPError } from 'ky'
import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'
import { errorBoundary } from '@stayradiated/error-boundary'

class ConfigError extends BetterError {
  constructor(arg: BetterErrorConstructorArg) {
    super(arg)
  }
}

const getCause = async (error: Error): Promise<Error> => {
  if (error instanceof HTTPError) {
    return errorBoundary(async () => {
      const context = await error.response.json()
      return new APIError({
        message: context.message,
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

export { ConfigError, NetError, APIError, getCause }
