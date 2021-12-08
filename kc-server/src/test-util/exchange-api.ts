/* eslint-disable import/no-named-as-default-member */
import sinon from 'sinon'

import type { Exchange } from '../model/exchange/index.js'
import type { UserExchangeAPI } from '../exchange-api/index.js'

const EXCHANGE_MOCK: Exchange = {
  ID: 'mock',
  name: 'Mock Exchange',
  url: 'https://mock-exchange',
}

type CancelOrderArgs = Parameters<UserExchangeAPI['cancelOrder']>
type CancelOrderResult = ReturnType<UserExchangeAPI['cancelOrder']>

const mockUserExchangeAPI = (exchange: Exchange = EXCHANGE_MOCK) => ({
  exchange,
  getLowestAskPrice: sinon.stub(),
  getBalance: sinon.stub(),
  getOpenOrders: sinon.stub(),
  getTrades: sinon.stub(),
  createOrder: sinon.stub(),
  cancelOrder: sinon
    .stub<CancelOrderArgs, CancelOrderResult>()
    .resolves(undefined),
})

export { EXCHANGE_MOCK, mockUserExchangeAPI }
