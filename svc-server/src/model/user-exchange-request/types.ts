type UserExchangeRequest = {
  uid: string
  userUid: string
  exchangeUid: string
  userExchangeKeysUid: string | undefined
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

export type { UserExchangeRequest }
