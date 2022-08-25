import test from 'ava'
import { BetterError } from './index.js'

test('should default correctly', (t) => {
  class FooError extends BetterError {}

  const error = new FooError()

  t.is(error.code, 'E_FOO')
  t.is(error.message, 'E_FOO')
  t.falsy(error.info)
  t.falsy(error.cause)
})

test('should have code & name but no cause', (t) => {
  class MyError extends BetterError {}

  const code = 'E_MY'
  const message = 'boom'
  const error = new MyError({ message })

  t.true(error instanceof Error)
  t.true(error instanceof BetterError)
  t.true(error instanceof MyError)
  t.is(error.name, 'MyError')
  t.is(error.code, code)
  t.is(error.message, `${error.code}: ${message}`)
  t.deepEqual(error.toObject(), {
    message: `${code}: ${message}`,
    name: 'MyError',
    stack: null,
    code,
    info: undefined,
    cause: undefined,
  })
})

test('should have a cause with code as name', (t) => {
  const code = 'E_MY'
  const name = 'MyError'
  const causeCode = 'E_MY_CAUSE'

  class MyCauseError extends BetterError {}

  class MyError extends BetterError {}

  const message = 'boom'
  const causeMessage = 'because many badness so high'
  const cause = new MyCauseError({ message: causeMessage })
  const error = new MyError({ message, cause })
  t.true(error instanceof Error)
  t.true(error instanceof MyError)
  t.is(error.name, name)
  t.is(error.code, code)
  t.is(error.message, `${code}: ${message}: ${causeCode}: ${causeMessage}`)

  let object = error.toObject()
  const defaultExpectation = {
    message: `${error.code}: ${message}: ${
      (error.cause as BetterError).message
    }`,
    name,
    stack: null,
    code,
    info: undefined,
    cause: {
      message: `${causeCode}: ${causeMessage}`,
      name: 'MyCauseError',
      stack: null,
      code: 'E_MY_CAUSE',
      info: undefined,
      cause: undefined,
    },
  }
  t.deepEqual(object, defaultExpectation)

  const defaultExpectationJson = JSON.stringify(defaultExpectation)
  t.deepEqual(JSON.parse(error.toJson()), JSON.parse(defaultExpectationJson))

  object = error.toObject({ omitting: true })
  t.deepEqual(object, defaultExpectation)

  object = error.toObject({ omitting: [] })
  t.truthy(object['stack'])

  object = error.toObject({ omitting: false })
  t.truthy(object['stack'])
})

test('should produce error properties correctly', (t) => {
  class BadError extends BetterError {}

  let error = new BadError()
  t.is(error.code, 'E_BAD')
  t.is(error.message, 'E_BAD')
  t.is(error.name, 'BadError')

  error = new BadError({ message: 'foobar' })
  t.is(error.code, 'E_BAD')
  t.is(error.message, 'E_BAD: foobar')
  t.is(error.name, 'BadError')

  error = new BadError({
    message: 'this is bad',
    cause: new BadError({ message: 'this is why' }),
  })
  t.is(error.code, 'E_BAD')
  t.is(error.message, 'E_BAD: this is bad: E_BAD: this is why')
  t.is(error.name, 'BadError')

  error = new BadError({
    message: 'this is bad',
    cause: new Error('this is why'),
  })
  t.is(error.code, 'E_BAD')
  t.is(error.message, 'E_BAD: this is bad: this is why')
  t.is(error.name, 'BadError')
})
