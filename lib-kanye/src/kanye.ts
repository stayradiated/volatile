import ky from 'ky-universal'
import { Options as KyOptions, HTTPError, TimeoutError } from 'ky'
import debug from 'debug'
import { errorBoundary } from '@stayradiated/error-boundary'

import { NetError } from './error.js'
import type { Kanye } from './types.js'

const parseHeaders = (headers: Headers): Record<string, string> => {
  return Object.fromEntries((headers as any).entries())
}

const kanye = async (endpoint: string, options: KyOptions): Promise<Kanye> => {
  const log = debug('kanye')

  const method = options.method ?? 'GET'
  let url = (options.prefixUrl ?? '') + endpoint
  let requestBody: string | undefined
  let requestHeaders: {} | undefined

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
      return {
        error: response,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: undefined,
        responseHeaders: undefined,
        responseBody: undefined,
        responseBodyAt: undefined,
      }
    }

    if (response instanceof HTTPError) {
      const responseBodyText = await errorBoundary(async () => {
        const responseBodyText = response.response.text()
        return responseBodyText
      })

      return {
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
        responseBodyAt: undefined,
      }
    }

    const error = new NetError({
      message: `Unexpected error ocurred while making POST request to ${endpoint}`,
      cause: response,
    })

    return {
      error,
      method,
      url,
      requestAt,
        requestHeaders,
      requestBody,
      responseAt,
      responseStatus: undefined,
      responseHeaders: undefined,
      responseBody: undefined,
      responseBodyAt: undefined,
    }
  }

  const responseBody = await errorBoundary(async () => response.text())
  const responseBodyAt = new Date()

  if (responseBody instanceof Error) {
    if (responseBody instanceof TimeoutError) {
      return {
        error: responseBody,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: undefined,
        responseHeaders: undefined,
        responseBody: undefined,
        responseBodyAt,
      }
    }

    if (responseBody instanceof HTTPError) {
      return {
        error: responseBody,
        method,
        url,
        requestAt,
        requestHeaders,
        requestBody,
        responseAt,
        responseStatus: responseBody.response.status,
        responseHeaders: parseHeaders(responseBody.response.headers),
        responseBody: undefined,
        responseBodyAt,
      }
    }

    const error = new NetError({
      message: `Received error from POST ${url}`,
      cause: responseBody,
    })

    return {
      error,
      method,
      url,
      requestAt,
        requestHeaders,
      requestBody,
      responseAt,
      responseStatus: undefined,
      responseHeaders: undefined,
      responseBody: undefined,
      responseBodyAt,
    }
  }

  return {
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
  }
}

export { kanye }
