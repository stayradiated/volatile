import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import type { Pool } from '../../types.js'
import type { UserExchangeRequest } from './types.js'

const insertUserExchangeRequest = async (
  pool: Pool,
  userExchangeRequest: Except<UserExchangeRequest, 'uid'>,
): Promise<UserExchangeRequest | Error> => {
  const insert: s.user_exchange_request.Insertable = {
    uid: randomUUID(),
    user_uid: userExchangeRequest.userUid,
    exchange_uid: userExchangeRequest.exchangeUid,
    user_exchange_keys_uid: userExchangeRequest.userExchangeKeysUid,
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
    db
      .insert('user_exchange_request', insert, { returning: ['uid'] })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...userExchangeRequest,
    uid: row.uid,
  }
}

export { insertUserExchangeRequest }
