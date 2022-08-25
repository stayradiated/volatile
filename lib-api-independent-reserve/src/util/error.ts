/* eslint-disable @typescript-eslint/no-useless-constructor */

import type { BetterErrorConstructorArg } from '@volatile/lib-error'
import { BetterError } from '@volatile/lib-error'

class ConfigError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

export { ConfigError }
