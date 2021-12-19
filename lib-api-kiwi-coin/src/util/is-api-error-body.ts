type APIErrorBody = { error: string | Record<string, unknown> }

const isAPIErrorBody = (
  response: Record<string, unknown>,
): response is APIErrorBody =>
  typeof response === 'object' &&
  response !== null &&
  (typeof response['error'] === 'string' ||
    (typeof response['error'] === 'object' && response['error'] !== null))

export { isAPIErrorBody }
export type { APIErrorBody }
