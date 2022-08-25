/* eslint-disable @typescript-eslint/no-useless-constructor */

import {
  BetterError,
  BetterErrorConstructorArg,
} from '@volatile/lib-error'

class ConfigError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

export { ConfigError }
