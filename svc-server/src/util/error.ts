import type db from 'zapatos/db'

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
  errorToObject,
}
