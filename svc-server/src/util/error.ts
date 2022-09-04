import type db from 'zapatos/db'

type ErrorOptions = NonNullable<Parameters<ErrorConstructor>[1]>

class ErrorWithCode extends Error {
  static code = 'ERR'

  code: string
  constructor(message: string, options?: ErrorOptions) {
    super('', options)
    this.code = (this.constructor as typeof ErrorWithCode).code
    this.message = `${this.code}: ${message}`
  }
}

class UnexpectedError extends ErrorWithCode {
  static override code = 'ERR_UNEXPECTED'
}

class CronError extends ErrorWithCode {
  static override code = 'ERR_CRON'
}

class ModelError extends ErrorWithCode {
  static override code = 'ERR_MODEL'
}
class ConfigError extends ErrorWithCode {
  static override code = 'ERR_CONFIG'
}
class ExchangeError extends ErrorWithCode {
  static override code = 'ERR_EXCHANGE'
}
class DbError extends ErrorWithCode {
  static override code = 'ERR_DB'
}
class NoEntityError extends ErrorWithCode {
  static override code = 'ERR_NO_ENTITY'
}
class AuthError extends ErrorWithCode {
  static override code = 'ERR_AUTH'
}
class Auth2faError extends ErrorWithCode {
  static override code = 'ERR_AUTH_2FA'
}
class UserLimitError extends ErrorWithCode {
  static override code = 'ERR_USER_LIMIT'
}
class PermissionError extends ErrorWithCode {
  static override code = 'ERR_PERMISSION'
}
class AlreadyInitializedError extends ErrorWithCode {
  static override code = 'ERR_ALREADY_INITIALIZED'
}
class NotInitializedError extends ErrorWithCode {
  static override code = 'ERR_NOT_INITIALIZED'
}
class IllegalArgumentError extends ErrorWithCode {
  static override code = 'ERR_ILLEGAL_ARGUMENT'
}
class IllegalArgumentTypeError extends ErrorWithCode {
  static override code = 'ERR_ILLEGAL_ARGUMENT_TYPE'
}
class MissingRequiredArgumentError extends ErrorWithCode {
  static override code = 'ERR_MISSING_REQUIRED_ARGUMENT'
}
class IllegalStateError extends ErrorWithCode {
  static override code = 'ERR_ILLEGAL_STATE'
}

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

type ErrorToObjectOptions = {
  omitting?: string[]
}

const OMISSION = null

type SetOrOmitOptions<Target> = {
  omitting: string[]
  key: string
  source: any
  target: Target
}

const setOrOmit = <Target extends Record<string, unknown>>(
  options: SetOrOmitOptions<Target>,
): Target => {
  const { omitting, target, source, key } = options
  ;(target as any)[key] = omitting.includes(key) ? OMISSION : source[key]
  return target
}

type AnyToObjectOptions = {
  item: unknown
  omitting: string[]
}

const unknownToJSONValue = (options: AnyToObjectOptions): db.JSONValue => {
  const { item, omitting } = options

  switch (typeof item) {
    case 'undefined':
    case 'function': {
      return null
    }

    case 'symbol': {
      return String(item)
    }

    case 'number':
    case 'string':
    case 'boolean': {
      return item
    }

    case 'bigint': {
      return Number(item)
    }

    case 'object': {
      if (item === null) {
        return null
      }

      if (Array.isArray(item)) {
        return item.map((arrayItem) =>
          unknownToJSONValue({ item: arrayItem, omitting }),
        )
      }

      if (item instanceof Error) {
        const keys = new Set([
          ...Object.keys(item),
          'message',
          'stack',
          'cause',
        ])
        return [...keys].reduce<Record<string, db.JSONValue>>((acc, key) => {
          if (key === 'cause') {
            acc['cause'] = omitting.includes('cause')
              ? OMISSION
              : unknownToJSONValue({ item: item.cause, omitting })
            return acc
          }

          return setOrOmit({ omitting, target: acc, source: item, key })
        }, {})
      }

      return Object.keys(item).reduce<Record<string, db.JSONValue>>(
        (accum, key) => {
          accum[key] = omitting.includes(key)
            ? OMISSION
            : unknownToJSONValue({ item: (item as any)[key], omitting })
          return accum
        },
        {},
      )
    }

    default:
      return null
  }
}

const errorToObject = (
  error: Error,
  options: ErrorToObjectOptions = {},
): db.JSONValue => {
  const { omitting = [] } = options
  return unknownToJSONValue({ item: error, omitting })
}

export {
  ErrorWithCode,
  AlreadyInitializedError,
  AuthError,
  Auth2faError,
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
  errorToObject,
}
