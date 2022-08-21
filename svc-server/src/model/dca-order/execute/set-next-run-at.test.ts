import db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../../test-util/ava.js'

import setNextRunAt from './set-next-run-at.js'

const cronJobDefaults = {
  intervalMs: 1000 * 60,
  lastRunAt: undefined,
  nextRunAt: undefined,
}

test.serial('(lastRunAt=null, nextRunAt=null) set nextRunAt', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUid = await make.dcaOrder({
    ...cronJobDefaults,
    lastRunAt: undefined,
    nextRunAt: undefined,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(typeof updatedJob.next_run_at, 'string')
})

test.serial('(lastRunAt=null, nextRunAt=now) nothing', async (t) => {
  const { pool, make } = t.context

  const nextRunAt = new Date()

  const dcaOrderUid = await make.dcaOrder({
    ...cronJobDefaults,
    lastRunAt: undefined,
    nextRunAt,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(typeof updatedJob.next_run_at, 'string')
  t.is(parseISO(updatedJob.next_run_at!).valueOf(), nextRunAt.valueOf())
})

test.serial('(lastRunAt=x, nextRunAt=x) set nextRunAt', async (t) => {
  const { pool, make } = t.context

  const x = new Date()

  const dcaOrderUid = await make.dcaOrder({
    ...cronJobDefaults,
    lastRunAt: x,
    nextRunAt: x,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), x.valueOf())

  t.is(typeof updatedJob.next_run_at, 'string')
  t.not(parseISO(updatedJob.next_run_at!).valueOf(), x.valueOf())
})

test.serial('(lastRunAt=x+1, nextRunAt=x) set nextRunAt', async (t) => {
  const { pool, make } = t.context

  const x = new Date()
  const y = new Date()
  y.setFullYear(x.getFullYear() + 1)

  const dcaOrderUid = await make.dcaOrder({
    ...cronJobDefaults,
    lastRunAt: y,
    nextRunAt: x,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), y.valueOf())

  t.is(typeof updatedJob.next_run_at, 'string')
  t.not(parseISO(updatedJob.next_run_at!).valueOf(), x.valueOf())
})
