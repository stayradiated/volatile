# `better-error`

A better base error class than JavaScript's native `Error` class and convenient, commonly used error classes.

In addition to providing many common errors, this module's base error class, `BetterError`, provides additional
properties

- `code` to hold a programmatic symbol representing the error (like `E_SOMETHING_WICKED`),
- `cause` to hold the causing `BetterError`, `BetterError[]`, `Error`, or `Error[]`, and
- `context` to hold any contextual information you may want to include.

Further, each error provides a `toObject` method that converts the error to a plain object literal to aid in converting
errors to DTOs in service method calls, and a `toJson` method that is guaranteed not to throw, because you don't want
errors being thrown during your error handling.

## Common error classes

This is a partial list of common error classes provided by this module:

- `AlreadyInitializedError`
- `NotInitializedError`
- `IllegalArgumentError`
- `IllegalArgumentTypeError`
- `IllegalStateError`
- `MissingRequiredArgumentError`

There may be more than these if this documentation isn't in sync with the code. Check the source for all errors provided
by this module. All error classes can be found in `./errors/index.ts`.

Usage example of an error provided by this module:

```javascript
const { IllegalArgumentError } = require('@northscaler/error-support/errors')
throw new IllegalArgumentError({ message: 'foobar', context: { sna: 'fu' } })
```

> NOTE: There are helpful IDE-specific templates to assist you in following the patterns prescribed by this library.
> See ./src/templates for more information.
> If you don't see templates for your IDE, please submit a pull/merge request.

## Codes

Unfortunately, JavaScript's `Error` class only supports `name` (if you set it) & `message` to convey error information
in a standard way. Folks haven't been exactly disciplined when it comes to the format of the `message` property.

A common solution to this is to subclass `Error` with one that supports a `code` property (among others, possibly). This
is exactly what this library does, and more.

The `code` is guaranteed never to change, whereas the `message` can. Also, `code` can be anything you like, but we
recommend `string`s like `E_SOMETHING_BAD`.
`Symbol`s or `number`s aren't a bad idea, but `Symbol`s don't `toString()` very well, and you always have to go look up
a `number` to see what it means.

In Node.js, there is [a well known issue](https://github.com/nodejs/node/issues/13937) that discusses this.

> NOTE: never depend on the `message` property's content.
> Always use the `code` property in your error handling logic.

## Messages

`BetterError` also provides for pretty well-formatted `message` properties, modeled somewhat after Node.js's message
formats. By default, they don't include newlines or carriage returns, but provide as much detail of the error chain as
possible as a simple string.

```javascript
class BadError extends BetterError {
  constructor(arg: BetterErrorConstructorArg) {
    super(arg)
  }
}

console.log(new BadError({ message: 'foobar' }).message)
// 'E_BAD: foobar'

console.log(new BadError().message)
// 'E_BAD'
```

## Causes

`BetterError` not only supports a `code` property, but also a `cause` property, which can be a `BetterError` instance, an `Error` instance, or an array thereof.
This provides for a cause _chain_.

```javascript
console.log(
  new BadError({
    message: 'this is bad',
    cause: new BadError({ message: 'this is why' }),
  }).message
)
// 'E_BAD: this is bad: E_BAD: this is why'

console.log(
  new BadError({ message: 'this is bad', cause: new Error('this is why') })
    .message
)
// 'E_BAD: this is bad: this is why'
```

## Contextual information

`BetterError` also gives you a property, called `context`, to place arbitrary, contextual information that could be
relevant to the error at hand.

```javascript
new BadError({
  message: 'this is bad',
  context: {
    foo: 'bar',
    sna: { fu: 'goo' },
  },
})
```

## Serializing

`BetterError` provides to convenient methods for converting itself to a POJO (plain, old JavaScript object).

### `toObject`

Use the `toObject` method to convert the `BetterError` chain to a POJO. By default, the `stack` property is omitted
transitively, but you can override that behavior via arguments to `toObject`.

```javascript
console.log(
  new BadError({
    message: 'this is bad',
    context: {
      foo: 'bar',
      sna: { fu: 'goo' },
    },
  }).toObject()
)

// returns:
// {
//   name: 'BadError',
//   code: 'E_BAD',
//   cause: undefined,
//   context: { foo: 'bar', sna: { fu: 'goo' } },
//   message: 'E_BAD: this is bad',
//   stack: null
// }
```

### `toJson`

Since many folks log JSON to their log channels, `BetterError` has a convenient method that _tries_ to `JSON.stringify()`
itself. Note that this is not the same as
JavaScript's [`toJSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON_behavior)
protocol method.

```javascript
new BadError({
  message: 'this is bad',
  context: {
    foo: 'bar',
    sna: { fu: 'goo' },
  },
}).toJson({ spaces: 2 }) // NOTE: this is NOT the same as toJSON!

// logs:
// {
//   "name": "BadError",
//   "code": "E_BAD",
//   "context": {
//     "foo": "bar",
//     "sna": {
//       "fu": "goo"
//     }
//   },
//   "message": "E_BAD: this is bad",
//   "stack": null
// }
```

> NOTE: if you want to opt in to the `toJSON` protocol, simply have `toJSON` delegate to `toObject`.

#### Omitted properties in JSON

Notice how `stack` is omitted by default. A couple things about that:

1. `stack` is omitted by default, because you usually only want stack traces in development, so the library makes a
   conservative choice here. Use your own configuration to decide what you'll be omitting in your system when logging.
2. You can omit any properties recursively that you want. It's just that the default is `['stack']`.
3. Omitted properties are omitted all the way down the error chain, except in your `context` context objects. If
   properties need to be omitted in your `context` context objects, don't include them.
4. When a property is omitted, the property _name_ remains in the stringified object, but it's _value_ is set to `null`,
   which is intended to express that the property was present but actively supressed.

#### Errors when handling errors

Sometimes, there could be circular references in the cause chain or any of the chain's `context` properties. Since you
don't want your error handling to be throwing `Error`s when logging, `toJson` is _guaranteed_ to always return valid
JSON. If `JSON.stringify` worked, you'll get that result, but if it throws, you'll get a fallback string that is the
JSON representation of the following, subject to your desired omissions:

```javascript
{
  jsonStringifyError: {
    message: '...',
      name
  :
    '...',
      code
  :
    '...',
      stack
  :
    '...'
  }
,
  error: {
    message: '...',
      name
  :
    '...',
      code
  :
    '...',
      stack
  :
    '...'
  }
}
```

Here's an example.

```javascript
const context = {}
context.circular = context // circular reference

console.log(new BadError({
  message: 'this is bad',
  context
}).toJson({ spaces: 2 }))

// logs:
// {
//   "jsonStringifyError": {
//     "message": "Converting circular structure to JSON",
//     "name": "TypeError",
//     "stack": null
//   },
//   "error": {
//     "message": "E_BAD: this is bad",
//     "code": "E_BAD",
//     "name": "BadError",
//     "stack": null
//   }
}
```
