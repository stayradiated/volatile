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

class ApiError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

type ApiErrorContext = {
  error: true
  status: number
  message: string
  description: string
}

const getCause = async (error: Error): Promise<Error> => {
  if (error instanceof HTTPError) {
    return errorBoundary(async () => {
      const context = (await error.response.json()) as ApiErrorContext
      return new ApiError({
        message: context.message,
        context,
      })
    })
  }

  return error
}

export { ConfigError, NetError, ApiError, getCause }
