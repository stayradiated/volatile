/* eslint-disable import/no-named-as-default-member */
import sinon from 'sinon'

import type { Exchange } from '../model/exchange/index.js'
import type { UserExchangeAPI } from '../exchange-api/index.js'

const EXCHANGE_MOCK: Exchange = {
  ID: 'mock',
  name: 'Mock Exchange',
  url: 'https://mock-exchange',
}

type GetLowestAskPriceArg = Parameters<UserExchangeAPI['getLowestAskPrice']>
type GetLowestAskPriceResult = ReturnType<UserExchangeAPI['getLowestAskPrice']>

type GetBalanceArg = Parameters<UserExchangeAPI['getBalance']>
type GetBalanceResult = ReturnType<UserExchangeAPI['getBalance']>

type GetOpenOrdersArg = Parameters<UserExchangeAPI['getOpenOrders']>
type GetOpenOrdersResult = ReturnType<UserExchangeAPI['getOpenOrders']>

type GetTradesArg = Parameters<UserExchangeAPI['getTrades']>
type GetTradesResult = ReturnType<UserExchangeAPI['getTrades']>

type CreateOrderArg = Parameters<UserExchangeAPI['createOrder']>
type CreateOrderResult = ReturnType<UserExchangeAPI['createOrder']>

type CancelOrderArgs = Parameters<UserExchangeAPI['cancelOrder']>
type CancelOrderResult = ReturnType<UserExchangeAPI['cancelOrder']>

const mockUserExchangeAPI = (exchange: Exchange = EXCHANGE_MOCK) => ({
  exchange,
  getLowestAskPrice: sinon.stub<
    GetLowestAskPriceArg,
    GetLowestAskPriceResult
  >(),
  getBalance: sinon.stub<GetBalanceArg, GetBalanceResult>(),
  getOpenOrders: sinon.stub<GetOpenOrdersArg, GetOpenOrdersResult>(),
  getTrades: sinon.stub<GetTradesArg, GetTradesResult>(),
  createOrder: sinon.stub<CreateOrderArg, CreateOrderResult>(),
  cancelOrder: sinon.stub<CancelOrderArgs, CancelOrderResult>(),
})

export { EXCHANGE_MOCK, mockUserExchangeAPI }
