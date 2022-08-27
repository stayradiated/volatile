class UnexpectedError extends Error {}
class CronError extends Error {}
class ModelError extends Error {}
class ConfigError extends Error {}
class ExchangeError extends Error {}
class DbError extends Error {}
class NoEntityError extends Error {}
class AuthError extends Error {}
class UserLimitError extends Error {}
class PermissionError extends Error {}
class AlreadyInitializedError extends Error {}
class NotInitializedError extends Error {}
class IllegalArgumentError extends Error {}
class IllegalArgumentTypeError extends Error {}
class MissingRequiredArgumentError extends Error {}
class IllegalStateError extends Error {}

const messageWithContext = <T extends Record<string, unknown>>(
  errorMessage: string,
  context: T,
): string => {
  return `${errorMessage}
${JSON.stringify(context)}`
}

const firstLine = (errorMessage: string): string => {
  return errorMessage.split('\n')[0] ?? ''
}

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
  messageWithContext,
  firstLine,
}
