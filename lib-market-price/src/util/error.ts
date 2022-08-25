/* eslint-disable @typescript-eslint/no-useless-constructor */

import {
  BetterError,
  BetterErrorConstructorArg,
} from '@volatile/lib-error'

class IllegalStateError extends BetterError {
  constructor(arg: BetterErrorConstructorArg) {
    super(arg)
  }
}

export { IllegalStateError }
