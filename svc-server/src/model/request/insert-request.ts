import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import type { Pool } from '../../types.js'
import type { Request } from './types.js'

const insertRequest = async (
  pool: Pool,
  userExchangeRequest: Except<Request, 'UID'>,
): Promise<Request | Error> => {
  const insert: s.request.Insertable = {
    uid: randomUUID(),
    method: userExchangeRequest.method,
    url: userExchangeRequest.url,
    request_at: userExchangeRequest.requestAt,
    request_headers: userExchangeRequest.requestHeaders,
    request_body: userExchangeRequest.requestBody,
    response_at: userExchangeRequest.responseAt,
    response_status: userExchangeRequest.responseStatus,
    response_headers: userExchangeRequest.responseHeaders,
    response_body: userExchangeRequest.responseBody,
    response_body_at: userExchangeRequest.responseBodyAt,
  }

  const row = await errorBoundary(async () =>
    db.insert('request', insert, { returning: ['uid'] }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...userExchangeRequest,
    UID: row.uid,
  }
}

export { insertRequest }
