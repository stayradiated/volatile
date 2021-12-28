import db from 'zapatos/db'
import { parseISO } from 'date-fns'

import { test } from '../../../test-util/ava.js'

import setLastRunAt from './setLastRunAt.js'

const DISTANT_PAST = new Date('1994-02-15')
const PAST = new Date('2018-02-15')
const FUTURE = new Date('2034-02-15')

const CRON_JOB_DEFAULTS = {
  intervalMs: 1000 * 60,
  lastRunAt: undefined,
  nextRunAt: undefined,
}

test('(lastRunAt=NULL, nextRunAt=PAST) set lastRunAt', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: undefined,
    nextRunAt: PAST,
  })

  await setLastRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
})

test('(lastRunAt=DISTANT_PAST, nextRunAt=PAST) set lastRunAt', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: DISTANT_PAST,
    nextRunAt: PAST,
  })

  await setLastRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.not(parseISO(updatedJob.last_run_at!).valueOf(), DISTANT_PAST.valueOf())
  t.not(parseISO(updatedJob.last_run_at!).valueOf(), PAST.valueOf())
})

test('(lastRunAt=PAST, nextRunAt=PAST) do nothing', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: PAST,
    nextRunAt: PAST,
  })

  await setLastRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), PAST.valueOf())
})

test('(lastRunAt=PAST, nextRunAt=FUTURE) do nothing', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: PAST,
    nextRunAt: FUTURE,
  })

  await setLastRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), PAST.valueOf())
})

test('(lastRunAt=FUTURE, nextRunAt=PAST) do nothing', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: FUTURE,
  })

  await setLastRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), FUTURE.valueOf())
})

test('(lastRunAt=DISTANT_PAST, nextRunAt=NULL) do nothing', async (t) => {
  const { pool, make } = t.context

  const dcaOrderUID = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: FUTURE,
    nextRunAt: undefined,
  })

  await setLastRunAt(pool)

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUID })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), FUTURE.valueOf())
})
