export type BetterCause =
  | Error
  | BetterError
  | Array<Error | BetterError>
  | undefined

export type BetterErrorConstructorArg = {
  cause?: Error | BetterError
  betterCause?: BetterCause
  message?: string
  context?: any
  code?: string
}

/**
 * A base error class that has `code` & `cause` properties, forming a chain of `Error`s, as well as convenient message & object formatting.
 */
export class BetterError extends Error {
  /**
   * The value to use when omitting a value.
   * @type {null}
   */
  public static OMISSION = null

  /**
   * Formats an error message suitable for `this.message`.
   * Always includes information from available `message` & `code` properties recursively through `cause`.
   * Though not prevented or removed, callers are discouraged from using newlines or carriage returns in `message` text.
   * @protected
   */
  protected static _message({
    code,
    message,
    cause,
  }: {
    code?: string
    message?: string
    cause?: BetterCause
  } = {}): string {
    let m = code ?? ''
    if (message) m += `${m && ': '}${message || ''}`

    if (Array.isArray(cause)) {
      m += `${m && ': '}[${cause
        .map((it) => it?.message)
        .filter((it) => it !== null && it !== undefined)
        .join(', ')}]`
    } else {
      m += cause ? `${m && ': '}${cause?.message}` : ''
    }

    return m
  }

  /**
   * If the given `key` is not omitted, sets `on[key]` to the value of `from[key]`.
   * If the given `key` _is_ omitted, set `on[key]` to `null`.
   *
   * @param omitting The normalized array of property names being omitted.
   * @param on The target object whose properties are being set or omitted.
   * @param from The source object whose properties are being set or ommitted on `target`.
   * @param key The key being set or omitted on `target` from `from`.
   * @protected
   */
  protected static _setOrOmit<T>({
    omitting,
    on,
    from,
    key,
  }: {
    omitting: string[]
    on: T
    from: any
    key: string
  }): T {
    ;(on as any)[key] = omitting.includes(key)
      ? BetterError.OMISSION
      : from[key]
    return on
  }

  /**
   * Safely returns the given item as a plain object or primitive type with special consideration for {@link BetterError}s & `Error`s.
   *
   * * If `item` is `null` or `undefined`, returns the item.
   * * If `item` satisfies `typeof item !== 'object'`, returns the item.
   * * If `item` is an `Array`, returns an `Array` with its elements passed to this method.
   * * If `item` is a {@link BetterError} or `Error`, returns the item using {@link BetterError#toObject} or as a literal object, respectively.
   * * Otherwise, the item's keys are enumerated (via `Object.keys(item)`) and passed to this method recursively; the return value becomes the value at that key.
   *
   * @param {object} [arg0={}] The argument to be deconstructed.
   * @param {*} [arg0.item=undefined] The item to convert.
   * @param {string|string[]|boolean} [arg0.omitting=[]] The property names to omit recursively during (@link BetterError#toObject}.
   * If a `boolean`, whether to omit `stack` if `true`, or include `stack` if `false.
   * If a property is omitted, its value is explicitly set to `null`, as apposed to `undefined`, in an effort to communicate that it was present but actively omitted.
   * @return {object}
   * @private
   */
  protected static _anyToObject({
    item,
    omitting = 'stack',
  }: {
    item: any
    omitting: string | string[] | boolean
  }): any | any[] {
    if (item === undefined || item === null) return item

    if (typeof item !== 'object') return item

    if (Array.isArray(item)) {
      return item.map((it) => BetterError._anyToObject({ item: it, omitting }))
    }

    if (item instanceof BetterError) return item.toObject({ omitting })

    const omittings = BetterError._normalizeOmitting(omitting)

    if (item instanceof Error) {
      return ['message', 'name', 'stack'].reduce(
        (accum, key) =>
          BetterError._setOrOmit({
            omitting: omittings,
            on: accum,
            from: item,
            key,
          }),
        {},
      )
    }

    return Object.keys(item).reduce((accum: any, key) => {
      accum[key] = omittings.includes(key)
        ? BetterError.OMISSION
        : BetterError._anyToObject({ item: item[key], omitting })
      return accum
    }, {})
  }

  /**
   * Safely normalizes the array of property names to be omitted during (@link BetterError#toObject} and (@link BetterError._anyToObject}.
   * Any non-string elements are silently ignored.
   *
   * @param {string|string[]|boolean} [omitting=[]] The property names to omit recursively during (@link BetterError#toObject}.
   * If a `boolean`, whether to omit `stack` if `true`, or include `stack` if `false.
   * If a property is omitted, its value is explicitly set to `null`, as apposed to `undefined`, in an effort to communicate that it was present but actively omitted.
   * @return {string[]} An array of strings.
   * @private
   */
  protected static _normalizeOmitting(
    omitting: string | string[] | boolean | undefined | undefined = [],
  ): string[] {
    if (omitting === null || omitting === undefined) omitting = true
    if (typeof omitting === 'boolean') return omitting ? ['stack'] : []

    return (
      omitting ? (Array.isArray(omitting) ? omitting : [omitting]) : []
    ).reduce<string[]>((accum, it) => {
      accum.push(it)
      return accum
    }, [])
  }

  public code: string

  public cause: Error | BetterError | undefined

  public betterCause:
    | Error
    | BetterError
    | Array<Error | BetterError>
    | undefined

  public info: any

  /**
   * Constructs a new instance of this class.
   *
   * @param cause An optional cause or list of causes of this error.
   * @param message An optional message. Though not prevented or removed, callers are discouraged from using newlines or carriage returns in `message` text.
   * @param context An optional, contextual value of any kind.
   * @param code An optional code for instances of this class; defaults to `E_` followed by the UPPER_SNAKE_CASING of this class name minus the "Error" suffix, if present.
   */
  constructor({
    cause,
    message,
    context,
    code,
  }: BetterErrorConstructorArg = {}) {
    super('')
    this.name = this.constructor.name
    this.code = code = _deriveCodeFromName(this.name)

    this.message = BetterError._message({
      code,
      message,
      cause,
    })

    this.cause = Array.isArray(cause) ? cause[0] : cause
    this.betterCause = cause
    this.info = context
  }

  /**
   * Safely returns this object as a plain, JavaScript object literal, suitable for use with `JSON.stringify()`, etc.
   *
   * @param omitting The property names to omit recursively during (@link BetterError#toObject}.
   * If a `boolean`, whether to omit `stack` if `true`, or include `stack` if `false`.
   * If a property is omitted, its value is explicitly set to `null`, as apposed to `undefined`, in an effort to communicate that it was present but actively omitted.
   * @returns {Record<string, unknown>} A plain, literal JavaScript object representation of this error.  See README.md for more information.
   */
  toObject(
    { omitting }: { omitting: string | string[] | boolean } = {
      omitting: 'stack',
    },
  ): Record<string, unknown> {
    const omittings = BetterError._normalizeOmitting(omitting)

    return Object.keys(this)
      .concat(['message', 'stack'])
      .reduce<Record<string, unknown>>((accum, key) => {
        if (key === 'betterCause') {
          // Possibly recurse here
          accum['betterCause'] = omittings.includes(key)
            ? BetterError.OMISSION
            : BetterError._anyToObject({
                item: this.betterCause,
                omitting,
              })
          return accum
        }

        return BetterError._setOrOmit({
          omitting: omittings,
          on: accum,
          from: this,
          key,
        })
      }, {})
  }

  /**
   * Because you don't want error handling throwing or logging errors, this method attempts to `JSON.stringify` itself.
   * In the event that `JSON.stringify` throws an `Error`, a fallback JSON representation of this object is returned.
   * The fallback object includes the following keys:
   * * `error`, with the `message`, `code`, `name` & `stack` of this error (subject to `omitting`), and
   * * `jsonStringifyError`, with the same properties as above except from the `JSON.stringify` error.
   *
   * @param {object} [arg0=undefined] The argument to be deconstructed.
   * @param {string|string[]|boolean} [arg0.omitting='stack'] The property names to omit recursively during (@link BetterError#toObject}.
   * If a `boolean`, whether to omit `stack` if `true`, or include `stack` if `false.
   * If a property is omitted, its value is explicitly set to `null`, as apposed to `undefined`, in an effort to communicate that it was present but actively omitted.
   * @param {function} [arg0.replacer] The [`toJSON` replacer function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to use.
   * @param {number} [arg0.spaces] The number of spaces to use for indentation.
   * @return {string}
   */
  toJson({
    omitting = 'stack',
    replacer,
    spaces,
  }: {
    omitting?: string | string[] | boolean
    replacer?: (
      this: any,
      key: string,
      value: any,
    ) => any | Array<number | string> | undefined
    spaces?: string | number
  } = {}): string {
    try {
      return JSON.stringify(this.toObject({ omitting }), replacer, spaces)
    } catch (error: unknown) {
      const fallback = { jsonStringifyError: {}, error: {} }

      const omittings = BetterError._normalizeOmitting(omitting)
      for (const key of ['message', 'code', 'name', 'stack']) {
        for (const prop of ['jsonStringifyError', 'error']) {
          ;(fallback as any)[prop][key] = omittings.includes(key)
            ? null
            : // @ts-expect-error TODO: rewrite this
              (prop === 'error' ? this : error)[key]
        }
      }

      return JSON.stringify(fallback, null, spaces)
    }
  }
}

/**
 * Derives a code from a camel case name.
 * @private
 */
function _deriveCodeFromName(name: string) {
  if (!name) throw new Error('name or code is required')

  return `e${name}`
    .replace(/Error$/, '')
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .toUpperCase()
}
