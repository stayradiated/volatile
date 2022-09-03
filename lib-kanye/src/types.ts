type KanyeRedacted = {
  error: Error | undefined
  method: string
  url: string
  requestAt: Date
  requestBody: string | undefined
  requestHeaders: Record<string, string> | undefined
  responseAt: Date | undefined
  responseStatus: number | undefined
  responseHeaders: Record<string, string | string[]> | undefined
  responseBody: string | undefined
  responseBodyAt: Date | undefined
}

type KanyeRedactFn = () => KanyeRedacted

type Kanye = KanyeRedacted & {
  redacted: KanyeRedactFn
}

export type { Kanye, KanyeRedacted, KanyeRedactFn }
