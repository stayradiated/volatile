type Kanye = {
  error: Error | undefined
  method: string
  url: string
  requestAt: Date
  requestBody: string | undefined
  requestHeaders: Record<string, string> | undefined
  responseAt: Date | undefined
  responseStatus: number | undefined
  responseHeaders: Record<string, string> | undefined
  responseBody: string | undefined
  responseBodyAt: Date | undefined
}

export { Kanye }
