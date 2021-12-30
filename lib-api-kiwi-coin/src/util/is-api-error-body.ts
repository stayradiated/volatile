type APIErrorBody = { error: string | Record<string, unknown> }

const isAPIErrorBody = (
  responseBody: unknown,
): responseBody is APIErrorBody => {
  if (typeof responseBody === 'object' && responseBody !== null) {
    const responseBodyObject = responseBody as Record<string, unknown>
    return (
      typeof responseBodyObject['error'] === 'string' ||
      (typeof responseBodyObject['error'] === 'object' &&
        responseBodyObject['error'] !== null)
    )
  }

  return false
}

export { isAPIErrorBody }
export type { APIErrorBody }
