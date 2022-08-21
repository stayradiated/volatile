type ApiErrorBody = { error: string | Record<string, unknown> }

const isApiErrorBody = (
  responseBody: unknown,
): responseBody is ApiErrorBody => {
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

export { isApiErrorBody }
export type { ApiErrorBody }
