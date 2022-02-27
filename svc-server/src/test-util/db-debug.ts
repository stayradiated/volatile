import debug from 'debug'
import * as db from 'zapatos/db'

const queryDebug = debug('db:query')
const resultDebug = debug('db:result')
const txnDebug = debug('db:transaction')
const stringFromTxnId = (txnId: number | undefined) =>
  txnId === undefined ? '-' : String(txnId)

db.setConfig({
  queryListener(query, txnId) {
    queryDebug(`(%s) %s\n%o`, stringFromTxnId(txnId), query.text, query.values)
  },
  resultListener(result, txnId, elapsedMs) {
    resultDebug(
      `(%s, %dms) %O`,
      stringFromTxnId(txnId),
      elapsedMs?.toFixed(1),
      result,
    )
  },
  transactionListener(message, txnId) {
    txnDebug(`(%s) %s`, stringFromTxnId(txnId), message)
  },
})
