/* eslint-disable fp/no-class, @typescript-eslint/no-useless-constructor */

import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'

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

export { ConfigError, NetError, APIError }
