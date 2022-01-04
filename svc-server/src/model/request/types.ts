type Request = {
  UID: string
  method: string
  url: string
  requestAt: Date
  requestHeaders: Record<string, string> | undefined
  requestBody: string | undefined
  responseAt: Date | undefined
  responseStatus: number | undefined
  responseHeaders: Record<string, string> | undefined
  responseBody: string | undefined
  responseBodyAt: Date | undefined
}

export { Request }
