/* eslint-disable import/no-named-as-default-member */
import sinon from 'sinon'

import type { Exchange } from '../model/exchange/index.js'
import type { UserExchangeApi } from '../exchange-api/index.js'

const EXCHANGE_MOCK: Exchange = {
  ID: 'mock',
  name: 'Mock Exchange',
  url: 'https://mock-exchange',
}

type GetLowestAskPriceArg = Parameters<UserExchangeApi['getLowestAskPrice']>
type GetLowestAskPriceResult = ReturnType<UserExchangeApi['getLowestAskPrice']>

type GetBalanceArg = Parameters<UserExchangeApi['getBalance']>
type GetBalanceResult = ReturnType<UserExchangeApi['getBalance']>

type GetOpenOrdersArg = Parameters<UserExchangeApi['getOpenOrders']>
type GetOpenOrdersResult = ReturnType<UserExchangeApi['getOpenOrders']>

type GetTradesArg = Parameters<UserExchangeApi['getTrades']>
type GetTradesResult = ReturnType<UserExchangeApi['getTrades']>

type CreateOrderArg = Parameters<UserExchangeApi['createOrder']>
type CreateOrderResult = ReturnType<UserExchangeApi['createOrder']>

type CancelOrderArgs = Parameters<UserExchangeApi['cancelOrder']>
type CancelOrderResult = ReturnType<UserExchangeApi['cancelOrder']>

const mockUserExchangeApi = (exchange: Exchange = EXCHANGE_MOCK) => ({
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

export { EXCHANGE_MOCK, mockUserExchangeApi }
