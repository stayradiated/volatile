import test from 'ava'
import { Duration } from 'luxon'

import { poll } from './poll.js'

test('poll every 500ms until end', async (t) => {
  const result = await poll<number>({
    frequency: Duration.fromMillis(500),
    timeout: Duration.fromISOTime('00:00:10', {}),
    fn: async (count) => {
      if (count > 5) {
        return {
          end: true,
          value: count,
        }
      }

      return {
        end: false,
        value: count,
      }
    },
  })
  t.is(result, 6)
})

test('hit timeout after 2s', async (t) => {
  const result = await poll<number>({
    frequency: Duration.fromMillis(500),
    timeout: Duration.fromISOTime('00:00:02', {}),
    fn: async (count) => {
      if (count > 5) {
        return {
          end: true,
          value: count,
        }
      }

      return {
        end: false,
        value: count,
      }
    },
  })
  t.true(result instanceof Error)
})
