import test from 'ava'
import tk from 'timekeeper'
import { addMinutes, subMinutes } from 'date-fns'

import calculateNextRunAt from './calculateNextRunAt.js'

const now = new Date('2000-01-01 01:00:00 UTC')
tk.freeze(now)

type MacroInput = { startMinAgo: number; intervalMin: number }
type MacroExpected = { nextRunAtInMin: number }

const macro = test.macro({
  exec(t, input: MacroInput, expected: MacroExpected) {
    const { startMinAgo, intervalMin } = input
    const { nextRunAtInMin } = expected

    const result = calculateNextRunAt({
      startAt: subMinutes(now, startMinAgo),
      intervalMs: 1000 * 60 * intervalMin,
    })

    t.deepEqual(result, addMinutes(now, nextRunAtInMin))
  },
  title(title = '', input, expected) {
    return `${title} startAt: ${input.startMinAgo} min ago, interval: ${input.intervalMin} min → next run in ${expected.nextRunAtInMin} min`
  },
})

test(macro, { startMinAgo: 0, intervalMin: 1 }, { nextRunAtInMin: 1 })
test(macro, { startMinAgo: 0, intervalMin: 5 }, { nextRunAtInMin: 5 })
test(macro, { startMinAgo: 0, intervalMin: 7 }, { nextRunAtInMin: 7 })

test(macro, { startMinAgo: 1, intervalMin: 1 }, { nextRunAtInMin: 1 })
test(macro, { startMinAgo: 1, intervalMin: 5 }, { nextRunAtInMin: 4 })
test(macro, { startMinAgo: 1, intervalMin: 7 }, { nextRunAtInMin: 6 })

test(macro, { startMinAgo: 5, intervalMin: 1 }, { nextRunAtInMin: 1 })
test(macro, { startMinAgo: 5, intervalMin: 5 }, { nextRunAtInMin: 5 })
test(macro, { startMinAgo: 5, intervalMin: 7 }, { nextRunAtInMin: 2 })

test(macro, { startMinAgo: 7, intervalMin: 1 }, { nextRunAtInMin: 1 })
test(macro, { startMinAgo: 7, intervalMin: 5 }, { nextRunAtInMin: 3 })
test(macro, { startMinAgo: 7, intervalMin: 7 }, { nextRunAtInMin: 7 })
