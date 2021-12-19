/* eslint-disable fp/no-class, @typescript-eslint/no-useless-constructor */

import { HTTPError } from 'ky'
import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'
import { errorBoundary } from '@stayradiated/error-boundary'

class ConfigError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class NetError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class APIError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

type APIErrorContext = {
  Message: string
}

const getCause = async (error: Error): Promise<Error> => {
  if (error instanceof HTTPError) {
    return errorBoundary(async () => {
      const context = (await error.response.json()) as APIErrorContext
      return new APIError({
        message: context.Message,
        context,
      })
    })
  }

  return error
}

export { ConfigError, NetError, APIError, getCause }
