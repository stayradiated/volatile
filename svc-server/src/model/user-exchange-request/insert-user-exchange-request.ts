import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import type { Pool } from '../../types.js'
import type { UserExchangeRequest } from './types.js'

const insertUserExchangeRequest = async (
  pool: Pool,
  userExchangeRequest: Except<UserExchangeRequest, 'UID'>,
): Promise<UserExchangeRequest | Error> => {
  const insert: s.user_exchange_request.Insertable = {
    uid: randomUUID(),
    user_uid: userExchangeRequest.userUID,
    exchange_uid: userExchangeRequest.exchangeUID,
    user_exchange_keys_uid: userExchangeRequest.userExchangeKeysUID,
    method: userExchangeRequest.method,
    url: userExchangeRequest.method,
    request_at: userExchangeRequest.requestAt,
    request_body: userExchangeRequest.method,
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
    UID: row.uid,
  }
}

export { insertUserExchangeRequest }
