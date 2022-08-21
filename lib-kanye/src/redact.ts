import escapeStringRegexp from 'escape-string-regexp'

import type { KanyeRedactFn, KanyeRedacted } from './types.js'

const buildRedactRegExp = (redact: string[]) => {
  return new RegExp(
    redact.map((query) => escapeStringRegexp(query)).join('|'),
    'g',
  )
}

const redactString = (regExp: RegExp, input: string): string => {
  return input.replace(regExp, '********')
}

const redactObject = (
  regExp: RegExp,
  headers: Record<string, string>,
): Record<string, string> | undefined => {
  return Object.fromEntries(
    Object.entries(headers).map((entry) => {
      const [key, value] = entry
      return [key, redactString(regExp, value)]
    }),
  )
}

const buildRedactFn = (
  redact: string[] | undefined,
  input: KanyeRedacted,
): KanyeRedactFn => {
  if (!redact) {
    return () => input
  }

  return () => {
    const regExp = buildRedactRegExp(redact)
    return {
      ...input,
      url: redactString(regExp, input.url),
      requestHeaders: input.requestHeaders
        ? redactObject(regExp, input.requestHeaders)
        : undefined,
      requestBody: input.requestBody
        ? redactString(regExp, input.requestBody)
        : undefined,
    }
  }
}

export { buildRedactRegExp, redactString, redactObject, buildRedactFn }
