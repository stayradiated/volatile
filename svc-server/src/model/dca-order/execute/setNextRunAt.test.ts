import db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../../test-util/ava.js'

import setNextRunAt from './setNextRunAt.js'

const CRON_JOB_DEFAULTS = {
  intervalMs: 1000 * 60,
  lastRunAt: undefined,
  nextRunAt: undefined,
}

test('(lastRunAt=null, nextRunAt=null) set nextRunAt', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: undefined,
    nextRunAt: undefined,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.next_run_at, 'string')
})

test('(lastRunAt=null, nextRunAt=now) nothing', async (t) => {
  const { pool, make } = t.context

  const nextRunAt = new Date()

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: undefined,
    nextRunAt,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.next_run_at, 'string')
  t.is(parseISO(updatedJob.next_run_at!).valueOf(), nextRunAt.valueOf())
})

test('(lastRunAt=x, nextRunAt=x) set nextRunAt', async (t) => {
  const { pool, make } = t.context

  const x = new Date()

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: x,
    nextRunAt: x,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), x.valueOf())

  t.is(typeof updatedJob.next_run_at, 'string')
  t.not(parseISO(updatedJob.next_run_at!).valueOf(), x.valueOf())
})

test('(lastRunAt=x+1, nextRunAt=x) set nextRunAt', async (t) => {
  const { pool, make } = t.context

  const x = new Date()
  const y = new Date()
  y.setFullYear(x.getFullYear() + 1)

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: y,
    nextRunAt: x,
  })

  await setNextRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), y.valueOf())

  t.is(typeof updatedJob.next_run_at, 'string')
  t.not(parseISO(updatedJob.next_run_at!).valueOf(), x.valueOf())
})
