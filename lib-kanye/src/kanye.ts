import type { IncomingHttpHeaders } from 'node:http'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'
import { request, errors as undiciErrors } from 'undici'

import { NetworkError, ServerError } from './error.js'
import { buildRedactFn } from './redact.js'

import type { Kanye } from './types.js'

type KanyeOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD'
  origin?: string
  body?: string
  headers?: Record<string, string>
  signal?: AbortSignal
  bodyTimeout?: number
  headersTimeout?: number
  redact?: string[]
  searchParams?: URLSearchParams | Record<string, string>
}

const parseHeaders = (
  headers: IncomingHttpHeaders | string[] | undefined,
): Record<string, string | string[]> => {
  if (typeof headers === 'undefined') {
    return {}
  }

  if (Array.isArray(headers)) {
    return { _: headers }
  }

  const output: Record<string, string | string[]> = {}
  for (const [key, value] of Object.entries(headers)) {
    output[key] = typeof value === 'undefined' ? '' : value
  }

  return output
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
  const {
    method = 'GET',
    origin,
    headers: requestHeaders,
    body: requestBody,
    searchParams,
    signal,
    bodyTimeout,
    headersTimeout,
  } = options

  const urlSearchParameters = searchParams
    ? new URLSearchParams(searchParams)
    : undefined
  const endpointWithSearchParameters =
    endpoint + (urlSearchParameters ? '?' + urlSearchParameters.toString() : '')
  const url: string = new URL(endpointWithSearchParameters, origin).toString()

  const requestAt = new Date()

  log(`∙ ${method.slice(0, 3)} ${url}`)

  const response = await errorBoundary(async () => {
    return request(url, {
      method,
      body: requestBody,
      headers: requestHeaders,
      signal,
      bodyTimeout,
      headersTimeout,
      throwOnError: false,
    })
  })

  log(`✓ ${method.slice(0, 3)} ${url}`)

  const responseAt = new Date()

  if (response instanceof Error) {
    if (response instanceof undiciErrors.HeadersTimeoutError) {
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

    if (response instanceof undiciErrors.ResponseStatusCodeError) {
      console.log('ResponseStatusCodeError', response)
      const responseBodyText =
        response.body === null ||
        typeof response.body === 'undefined' ||
        typeof response.body === 'string'
          ? response.body ?? undefined
          : JSON.stringify(response.body)

      return buildReturnValue(options, {
        error: response,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: response.statusCode,
        responseHeaders: parseHeaders(response.headers ?? undefined),
        responseBody: responseBodyText,
      })
    }

    const error = new NetworkError(
      `Unexpected error ocurred while requesting ${method} ${endpoint}`,
      {
        cause: response,
      },
    )

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

  const responseBody = await errorBoundary(async () => response.body.text())
  const responseBodyAt = new Date()

  if (responseBody instanceof Error) {
    if (responseBody instanceof undiciErrors.BodyTimeoutError) {
      return buildReturnValue(options, {
        error: new NetworkError(`Timed out waiting for ${method} ${url}`, {
          cause: requestBody,
        }),
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseBodyAt,
      })
    }

    if (responseBody instanceof undiciErrors.UndiciError) {
      return buildReturnValue(options, {
        error: responseBody,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: response.statusCode,
        responseHeaders: parseHeaders(response.headers),
        responseBodyAt,
      })
    }

    const error = new NetworkError(`Received error from ${method} ${url}`, {
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

  if (response.statusCode >= 400) {
    return buildReturnValue(options, {
      error: new ServerError(
        `Received ${response.statusCode} error from ${method} ${url}: ${responseBody}`,
      ),
      method,
      url,
      requestAt,
      requestHeaders,
      requestBody,
      responseStatus: response.statusCode,
      responseHeaders: parseHeaders(response.headers),
      responseBody,
      responseAt,
    })
  }

  return buildReturnValue(options, {
    error: undefined,
    method,
    url,
    requestAt,
    requestHeaders,
    requestBody,
    responseStatus: response.statusCode,
    responseHeaders: parseHeaders(response.headers),
    responseBody,
    responseAt,
    responseBodyAt,
  })
}

export { kanye }
export type { KanyeOptions }
