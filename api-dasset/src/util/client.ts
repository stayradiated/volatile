import ky from 'ky-universal'
import type KyClient from 'ky'
import debug from 'debug'

const log = debug('dasset-api')

const client: typeof KyClient = ky.create({
  prefixUrl: 'https://api.dassetx.com/api/',
  hooks: {
    beforeRequest: [
      (request) => {
        log(request.method.slice(0, 3), request.url)
      },
    ],
    afterResponse: [
      (request) => {
        log(request.method.slice(0, 3), request.url)
      },
    ],
  },
})

export { client }
