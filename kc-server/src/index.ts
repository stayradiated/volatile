import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { v4 as uuidv4 } from 'uuid'

import pool from './pg-pool.js'

void (async function () {
  const now = new Date()
  const marketPrice: s.market_price.Insertable = {
    id: uuidv4(),
    created_at: now,
    updated_at: now,
    date: now,
    market_name: 'easycrypto.ai',
    price: 53_838.989_119_14,
  }

  await db.sql<s.market_price.SQL>`
    INSERT INTO ${'market_price'} (${db.cols(marketPrice)})
    VALUES (${db.vals(marketPrice)})`.run(pool)
})()
