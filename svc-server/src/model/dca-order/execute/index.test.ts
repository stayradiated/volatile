import db from 'zapatos/db'
import { parseISO, isAfter } from 'date-fns'
import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../../test-util/ava.js'

import { execute } from './index.js'

const DISTANT_PAST = new Date('1994-02-15')
const PAST = new Date('2018-02-15')

const CRON_JOB_DEFAULTS = {
  intervalMS: 1000 * 60,
  lastRunAt: undefined,
  nextRunAt: undefined,
}

test.serial('(lastRunAt=NULL, nextRunAt=NULL) set nextRunAt', async (t) => {
  const { pool, make } = t.context
  const now = new Date()

  const dcaOrderUid = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: undefined,
    nextRunAt: undefined,
  })

  const jobs = await execute(pool)
  assertOk(jobs)
  t.false(jobs.includes(dcaOrderUid))

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(updatedJob.last_run_at, null)

  t.is(typeof updatedJob.next_run_at, 'string')
  t.true(isAfter(parseISO(updatedJob.next_run_at!), now))
})

test.serial('(lastRunAt=PAST,nextRunAt=PAST) do nothing', async (t) => {
  const { pool, make } = t.context
  const now = new Date()

  const dcaOrderUid = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: PAST,
    nextRunAt: PAST,
  })

  const jobs = await execute(pool)
  assertOk(jobs)
  t.false(jobs.includes(dcaOrderUid))

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.is(parseISO(updatedJob.last_run_at!).valueOf(), PAST.valueOf())

  t.is(typeof updatedJob.next_run_at, 'string')
  t.true(isAfter(parseISO(updatedJob.next_run_at!), now))
})

test.serial('(lastRunAt=DISTANT_PAST,nextRunAt=PAST) fire once', async (t) => {
  const { pool, make } = t.context
  const now = new Date()

  const dcaOrderUid = await make.dcaOrder({
    ...CRON_JOB_DEFAULTS,
    lastRunAt: DISTANT_PAST,
    nextRunAt: PAST,
  })

  const jobs = await execute(pool)
  assertOk(jobs)
  t.true(jobs.includes(dcaOrderUid))

  const updatedJob = await db
    .selectExactlyOne('dca_order', { uid: dcaOrderUid })
    .run(pool)

  t.is(typeof updatedJob.last_run_at, 'string')
  t.true(isAfter(parseISO(updatedJob.last_run_at!), now))

  t.is(typeof updatedJob.next_run_at, 'string')
  t.true(isAfter(parseISO(updatedJob.next_run_at!), now))
})
