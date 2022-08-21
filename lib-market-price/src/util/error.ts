/* eslint-disable @typescript-eslint/no-useless-constructor */

import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'

class IllegalStateError extends BetterError {
  constructor(arg: BetterErrorConstructorArg) {
    super(arg)
  }
}

export { IllegalStateError }
