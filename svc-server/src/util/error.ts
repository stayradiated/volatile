/* eslint-disable fp/no-class, @typescript-eslint/no-useless-constructor */

import {
  BetterError,
  BetterErrorConstructorArg,
} from '@northscaler/better-error'

class UnexpectedError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class CronError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class ModelError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class ConfigError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class ExchangeError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class DBError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class AuthError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class AlreadyInitializedError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class NotInitializedError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class IllegalArgumentError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class IllegalArgumentTypeError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class MissingRequiredArgumentError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

class IllegalStateError extends BetterError {
  constructor(arg?: BetterErrorConstructorArg) {
    super(arg)
  }
}

export {
  AlreadyInitializedError,
  AuthError,
  ConfigError,
  CronError,
  DBError,
  ExchangeError,
  IllegalArgumentError,
  IllegalArgumentTypeError,
  IllegalStateError,
  MissingRequiredArgumentError,
  ModelError,
  NotInitializedError,
  UnexpectedError,
}
