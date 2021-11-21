import { inspect } from 'util'
import test from 'ava'

import { parseStats, Stats } from './stats.js'

// Convert Stats object into a human readable string
const serializeStats = (stats: Stats): string => {
  const prices = stats.prices
    .map((price) =>
      [
        price.datetime.toUTC().toFormat('yyyy.LL.dd'),
        price.open.toFixed(2),
        price.close.toFixed(2),
        price.low.toFixed(2),
        price.high.toFixed(2),
        price.volume.toFixed(8),
      ].join(' '),
    )
    .join('\n')

  const deals = stats.deals
    .map((deal) =>
      [
        deal.datetime.toUTC().toFormat('yyyy.LL.dd HH:mm:ss'),
        deal.price.toFixed(2),
        deal.volume.toFixed(8),
        deal.direction,
      ].join(' '),
    )
    .join('\n')

  return `\n${prices}\n\n${deals}`
}

test('parseStats', (t) => {
  const input = `
var PriceArray = [{"o":12345.67,"c":98765.43,"l":10000.00,"h":99999.99,"v":0.12345668},{"o":59832.01,"c":48522.91,"l":53421.44,"h":98934.24,"v":0.12345678901234567}] ;
var DealArray = [{"datetime":1625987654,"price":45678.9,"volume":0.01234567,"direction":"buy"},{"datetime":1625876543,"price":56789.01,"volume":0.98765432,"direction":"sell"}];
var Begin = 1623412800;
var Period = 86400;`

  const stats = parseStats(input)
  if (stats instanceof Error) {
    t.fail(inspect(stats))
    return
  }

  const expected = `
2021.06.11 12345.67 98765.43 10000.00 99999.99 0.12345668
2021.06.12 59832.01 48522.91 53421.44 98934.24 0.12345679

2021.07.11 07:14:14 45678.90 0.01234567 0
2021.07.10 00:22:23 56789.01 0.98765432 1`

  const output = serializeStats(stats)
  t.is(output, expected)
})
