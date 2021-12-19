import type { Debugger } from 'debug'
import type { Hooks } from 'ky'

const createDebugHooks = (debug: Debugger): Hooks => ({
  beforeRequest: [
    (request) => {
      debug(`∙ ${request.method.slice(0, 3)} ${request.url}`)
    },
  ],
  afterResponse: [
    (request) => {
      debug(`✓ ${request.method.slice(0, 3)} ${request.url}`)
    },
  ],
})

export { createDebugHooks }
