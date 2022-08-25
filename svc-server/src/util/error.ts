import { BetterError } from '@volatile/lib-error'

class UnexpectedError extends BetterError {}
class CronError extends BetterError {}

class ModelError extends BetterError {}

class ConfigError extends BetterError {}

class ExchangeError extends BetterError {}

class DbError extends BetterError {}

class NoEntityError extends BetterError {}

class AuthError extends BetterError {}

class UserLimitError extends BetterError {}

class PermissionError extends BetterError {}

class AlreadyInitializedError extends BetterError {}

class NotInitializedError extends BetterError {}

class IllegalArgumentError extends BetterError {}

class IllegalArgumentTypeError extends BetterError {}

class MissingRequiredArgumentError extends BetterError {}

class IllegalStateError extends BetterError {}

export {
  AlreadyInitializedError,
  AuthError,
  ConfigError,
  CronError,
  DbError,
  NoEntityError,
  ExchangeError,
  UserLimitError,
  PermissionError,
  IllegalArgumentError,
  IllegalArgumentTypeError,
  IllegalStateError,
  MissingRequiredArgumentError,
  ModelError,
  NotInitializedError,
  UnexpectedError,
}
