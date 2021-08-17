import ky from 'ky-universal'
import type KyInstance from 'ky'
import debug from 'debug'

const log = debug('independent-reserve-api')

const client: typeof KyInstance = ky.create({
  prefixUrl: 'https://api.independentreserve.com/',
  hooks: {
    beforeRequest: [
      (request) => {
        log(request.url)
      },
    ],
    afterResponse: [
      (request) => {
        log(request.url)
      },
    ],
  },
})

export { client }
