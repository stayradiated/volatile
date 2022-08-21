/* eslint-disable @typescript-eslint/no-useless-constructor */

import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'

// WHEN
// do we use
// NetError
// and when
// do we use
// APIError?

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

export { NetError, ApiError }
