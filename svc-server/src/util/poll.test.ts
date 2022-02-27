import test from 'ava'

import { poll } from './poll.js'

test('poll every 500ms until end', async (t) => {
  const result = await poll<number>({
    frequencyMs: 500,
    timeoutMs: 1000 * 10,
    async fn(count) {
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
    frequencyMs: 500,
    timeoutMs: 1000 * 2,
    async fn(count) {
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
