import escapeStringRegexp from 'escape-string-regexp'

const redactString = (
  config: Record<string, string>,
  input: string,
): string => {
  const regex = new RegExp(
    Object.values(config).map(escapeStringRegexp).join('|'),
    'g',
  )
  return input.replace(regex, '********')
}

const redactObject = (
  config: Record<string, string>,
  headers: Record<string, string>,
): Record<string, string> | undefined => {
  return Object.fromEntries(
    Object.entries(headers).map((entry) => {
      const [key, value] = entry
      return [key, redactString(config, value)]
    }),
  )
}

export { redactString, redactObject }
