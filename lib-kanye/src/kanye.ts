import ky from 'ky-universal'
import { Options as KyOptions, HTTPError, TimeoutError } from 'ky'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from './error.js'
import { buildRedactFn } from './redact.js'

import type { Kanye } from './types.js'

const parseHeaders = (headers: Headers): Record<string, string> => {
  return Object.fromEntries((headers as any).entries())
}

type KanyeOptions = KyOptions & {
  redact?: string[]
}

const buildReturnValue = (
  options: KanyeOptions,
  input: Partial<Kanye>,
): Kanye => {
  const object = {
    error: undefined,
    method: 'UNKNOWN',
    url: '[unknown]',
    requestAt: new Date(0),
    requestHeaders: undefined,
    requestBody: undefined,
    responseStatus: undefined,
    responseHeaders: undefined,
    responseBody: undefined,
    responseAt: undefined,
    responseBodyAt: undefined,
    ...input,
  }

  object.redacted = buildRedactFn(options.redact, object)

  return object as Kanye
}

const kanye = async (
  endpoint: string,
  options: KanyeOptions,
): Promise<Kanye> => {
  const log = debug('kanye')

  const method = options.method ?? 'GET'
  let url = (options.prefixUrl ?? '') + endpoint
  let requestBody: string | undefined
  let requestHeaders: Record<string, string> | undefined

  const requestAt = new Date()

  const response = await errorBoundary(async () =>
    ky(endpoint, {
      hooks: {
        beforeRequest: [
          (request) => {
            url = request.url
            requestHeaders = parseHeaders(request.headers)
            requestBody = String(request.body)
            log(`∙ ${request.method.slice(0, 3)} ${request.url}`)
          },
        ],
        afterResponse: [
          (request) => {
            log(`✓ ${request.method.slice(0, 3)} ${request.url}`)
          },
        ],
      },
      ...options,
    }),
  )
  const responseAt = new Date()

  if (response instanceof Error) {
    if (response instanceof TimeoutError) {
      return buildReturnValue(options, {
        error: response,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
      })
    }

    if (response instanceof HTTPError) {
      const responseBodyText = await errorBoundary(async () => {
        const responseBodyText = response.response.text()
        return responseBodyText
      })

      return buildReturnValue(options, {
        error: response,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: response.response.status,
        responseHeaders: parseHeaders(response.response.headers),
        responseBody:
          responseBodyText instanceof Error ? undefined : responseBodyText,
      })
    }

    const error = new NetError({
      message: `Unexpected error ocurred while making POST request to ${endpoint}`,
      cause: response,
    })

    return buildReturnValue(options, {
      error,
      method,
      url,
      requestAt,
      requestHeaders,
      requestBody,
      responseAt,
    })
  }

  const responseBody = await errorBoundary(async () => response.text())
  const responseBodyAt = new Date()

  if (responseBody instanceof Error) {
    if (responseBody instanceof TimeoutError) {
      return buildReturnValue(options, {
        error: responseBody,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseBodyAt,
      })
    }

    if (responseBody instanceof HTTPError) {
      return buildReturnValue(options, {
        error: responseBody,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: responseBody.response.status,
        responseHeaders: parseHeaders(responseBody.response.headers),
        responseBodyAt,
      })
    }

    const error = new NetError({
      message: `Received error from POST ${url}`,
      cause: responseBody,
    })

    return buildReturnValue(options, {
      error,
      method,
      url,
      requestAt,
      requestHeaders,
      requestBody,
      responseAt,
      responseBodyAt,
    })
  }

  return buildReturnValue(options, {
    error: undefined,
    method,
    url,
    requestAt,
    requestHeaders,
    requestBody,
    responseStatus: response.status,
    responseHeaders: parseHeaders(response.headers),
    responseBody,
    responseAt,
    responseBodyAt,
  })
}

export { kanye }
export type { KanyeOptions }
