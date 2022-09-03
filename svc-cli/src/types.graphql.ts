export type Maybe<T> = T | undefined
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bpchar: any
  jsonb: any
  numeric: any
  timestamp: any
  timestamptz: any
  uuid: any
}

export type AvailableBalanceFxBalanceArgs = {
  currency?: InputMaybe<Scalars['String']>
}

/** Columns and relationships of "balance" */
export type Balance = {
  __typename?: 'Balance'
  availableBalance: Scalars['numeric']
  /** A computed field, executes function "balance_available_balance_fx" */
  availableBalanceFx?: Maybe<Scalars['numeric']>
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  currency: Currency
  currencySymbol: Scalars['String']
  /** An object relationship */
  exchange: Exchange
  exchangeUid: Scalars['uuid']
  totalBalance: Scalars['numeric']
  /** A computed field, executes function "balance_total_balance_fx" */
  totalBalanceFx?: Maybe<Scalars['numeric']>
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  /** An object relationship */
  userExchangeKey: UserExchangeKeys
  userExchangeKeysUid: Scalars['uuid']
  userUid: Scalars['uuid']
}

/** Columns and relationships of "balance" */
export type BalanceAvailableBalanceFxArgs = {
  args: AvailableBalanceFxBalanceArgs
}

/** Columns and relationships of "balance" */
export type BalanceTotalBalanceFxArgs = {
  args: TotalBalanceFxBalanceArgs
}

/** Boolean expression to filter rows from the table "balance". All fields are combined with a logical 'AND'. */
export type BalanceBoolExp = {
  _and?: InputMaybe<BalanceBoolExp[]>
  _not?: InputMaybe<BalanceBoolExp>
  _or?: InputMaybe<BalanceBoolExp[]>
  availableBalance?: InputMaybe<NumericComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  currency?: InputMaybe<CurrencyBoolExp>
  currencySymbol?: InputMaybe<StringComparisonExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  totalBalance?: InputMaybe<NumericComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userExchangeKey?: InputMaybe<UserExchangeKeysBoolExp>
  userExchangeKeysUid?: InputMaybe<UuidComparisonExp>
  userUid?: InputMaybe<UuidComparisonExp>
}

/** Ordering options when selecting data from "balance". */
export type BalanceOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  currency?: InputMaybe<CurrencyOrderBy>
  currencySymbol?: InputMaybe<OrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  totalBalance?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userExchangeKey?: InputMaybe<UserExchangeKeysOrderBy>
  userExchangeKeysUid?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Select columns of table "balance" */
export enum BalanceSelectColumn {
  /** Column name */
  AvailableBalance = 'availableBalance',
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  CurrencySymbol = 'currencySymbol',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  TotalBalance = 'totalBalance',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserExchangeKeysUid = 'userExchangeKeysUid',
  /** Column name */
  UserUid = 'userUid',
}

export type BalanceUserExchangeKeysArgs = {
  timestamp_at?: InputMaybe<Scalars['timestamptz']>
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type BpcharComparisonExp = {
  _eq?: InputMaybe<Scalars['bpchar']>
  _gt?: InputMaybe<Scalars['bpchar']>
  _gte?: InputMaybe<Scalars['bpchar']>
  /** Does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>
  _in?: InputMaybe<Array<Scalars['bpchar']>>
  /** Does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>
  _isNull?: InputMaybe<Scalars['Boolean']>
  /** Does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>
  _lt?: InputMaybe<Scalars['bpchar']>
  _lte?: InputMaybe<Scalars['bpchar']>
  _neq?: InputMaybe<Scalars['bpchar']>
  /** Does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>
  _nin?: InputMaybe<Array<Scalars['bpchar']>>
  /** Does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>
  /** Does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>
  /** Does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>
  /** Does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>
  /** Does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>
  /** Does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>
}

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput'
  authToken: Scalars['String']
  expiresAt: Scalars['timestamptz']
  user?: Maybe<User>
  userUid: Scalars['String']
}

export type CreateDcaOrderResult = {
  __typename?: 'CreateDcaOrderResult'
  dcaOrder?: Maybe<DcaOrder>
  dcaOrderUid: Scalars['uuid']
}

export type CreateStripeSubscription = {
  __typename?: 'CreateStripeSubscription'
  clientSecret: Scalars['String']
  stripeSubscription?: Maybe<StripeSubscription>
  subscriptionId: Scalars['String']
}

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput'
  userExchangeKeys?: Maybe<UserExchangeKeys>
  userExchangeKeysUid: Scalars['uuid']
}

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput'
  userUid: Scalars['String']
}

/** Columns and relationships of "currency" */
export type Currency = {
  __typename?: 'Currency'
  createdAt: Scalars['timestamptz']
  name: Scalars['String']
  symbol: Scalars['String']
  updatedAt: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type CurrencyBoolExp = {
  _and?: InputMaybe<CurrencyBoolExp[]>
  _not?: InputMaybe<CurrencyBoolExp>
  _or?: InputMaybe<CurrencyBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  symbol?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "currency". */
export type CurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Select columns of table "currency" */
export enum CurrencySelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  Name = 'name',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updatedAt',
}

/** Columns and relationships of "dca_order" */
export type DcaOrder = {
  __typename?: 'DcaOrder'
  createdAt: Scalars['timestamptz']
  dailyAverage: Scalars['numeric']
  /** An array relationship */
  dcaOrderHistories: DcaOrderHistory[]
  /** An aggregate relationship */
  dcaOrderHistoriesAggregate: DcaOrderHistoryAggregate
  enabledAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  exchange: Exchange
  exchangeMarketTradingPair?: Maybe<MarketTradingPair[]>
  exchangeUid: Scalars['uuid']
  intervalMs: Scalars['Int']
  lastRunAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  market: Market
  marketOffset: Scalars['numeric']
  /** An array relationship */
  marketPrices: MarketPrice[]
  marketUid: Scalars['uuid']
  maxPrice?: Maybe<Scalars['numeric']>
  maxValue?: Maybe<Scalars['numeric']>
  minPrice?: Maybe<Scalars['numeric']>
  minValue?: Maybe<Scalars['numeric']>
  nextRunAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  primaryCurrency: Currency
  primaryCurrencySymbol: Scalars['String']
  /** An object relationship */
  secondaryCurrency: Currency
  secondaryCurrencySymbol: Scalars['String']
  startAt: Scalars['timestamptz']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  /** An object relationship */
  userExchangeKeys: UserExchangeKeys
  userExchangeKeysUid: Scalars['uuid']
  userUid: Scalars['uuid']
}

/** Columns and relationships of "dca_order" */
export type DcaOrderDcaOrderHistoriesArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

/** Columns and relationships of "dca_order" */
export type DcaOrderDcaOrderHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

/** Columns and relationships of "dca_order" */
export type DcaOrderExchangeMarketTradingPairArgs = {
  distinctOn?: InputMaybe<MarketTradingPairSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketTradingPairOrderBy[]>
  where?: InputMaybe<MarketTradingPairBoolExp>
}

/** Columns and relationships of "dca_order" */
export type DcaOrderMarketPricesArgs = {
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

/** Aggregated selection of "dca_order" */
export type DcaOrderAggregate = {
  __typename?: 'DcaOrderAggregate'
  aggregate?: Maybe<DcaOrderAggregateFields>
  nodes: DcaOrder[]
}

/** Aggregate fields of "dca_order" */
export type DcaOrderAggregateFields = {
  __typename?: 'DcaOrderAggregateFields'
  avg?: Maybe<DcaOrderAvgFields>
  count: Scalars['Int']
  max?: Maybe<DcaOrderMaxFields>
  min?: Maybe<DcaOrderMinFields>
  stddev?: Maybe<DcaOrderStddevFields>
  stddevPop?: Maybe<DcaOrderStddevPopFields>
  stddevSamp?: Maybe<DcaOrderStddevSampFields>
  sum?: Maybe<DcaOrderSumFields>
  varPop?: Maybe<DcaOrderVarPopFields>
  varSamp?: Maybe<DcaOrderVarSampFields>
  variance?: Maybe<DcaOrderVarianceFields>
}

/** Aggregate fields of "dca_order" */
export type DcaOrderAggregateFieldsCountArgs = {
  columns?: InputMaybe<DcaOrderSelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "dca_order" */
export type DcaOrderAggregateOrderBy = {
  avg?: InputMaybe<DcaOrderAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<DcaOrderMaxOrderBy>
  min?: InputMaybe<DcaOrderMinOrderBy>
  stddev?: InputMaybe<DcaOrderStddevOrderBy>
  stddev_pop?: InputMaybe<DcaOrderStddevPopOrderBy>
  stddev_samp?: InputMaybe<DcaOrderStddevSampOrderBy>
  sum?: InputMaybe<DcaOrderSumOrderBy>
  var_pop?: InputMaybe<DcaOrderVarPopOrderBy>
  var_samp?: InputMaybe<DcaOrderVarSampOrderBy>
  variance?: InputMaybe<DcaOrderVarianceOrderBy>
}

/** Aggregate avg on columns */
export type DcaOrderAvgFields = {
  __typename?: 'DcaOrderAvgFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "dca_order" */
export type DcaOrderAvgOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "dca_order". All fields are combined with a logical 'AND'. */
export type DcaOrderBoolExp = {
  _and?: InputMaybe<DcaOrderBoolExp[]>
  _not?: InputMaybe<DcaOrderBoolExp>
  _or?: InputMaybe<DcaOrderBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  dailyAverage?: InputMaybe<NumericComparisonExp>
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>
  enabledAt?: InputMaybe<TimestamptzComparisonExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeMarketTradingPair?: InputMaybe<MarketTradingPairBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  intervalMs?: InputMaybe<IntComparisonExp>
  lastRunAt?: InputMaybe<TimestamptzComparisonExp>
  market?: InputMaybe<MarketBoolExp>
  marketOffset?: InputMaybe<NumericComparisonExp>
  marketPrices?: InputMaybe<MarketPriceBoolExp>
  marketUid?: InputMaybe<UuidComparisonExp>
  maxPrice?: InputMaybe<NumericComparisonExp>
  maxValue?: InputMaybe<NumericComparisonExp>
  minPrice?: InputMaybe<NumericComparisonExp>
  minValue?: InputMaybe<NumericComparisonExp>
  nextRunAt?: InputMaybe<TimestamptzComparisonExp>
  primaryCurrency?: InputMaybe<CurrencyBoolExp>
  primaryCurrencySymbol?: InputMaybe<StringComparisonExp>
  secondaryCurrency?: InputMaybe<CurrencyBoolExp>
  secondaryCurrencySymbol?: InputMaybe<StringComparisonExp>
  startAt?: InputMaybe<TimestamptzComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>
  userExchangeKeysUid?: InputMaybe<UuidComparisonExp>
  userUid?: InputMaybe<UuidComparisonExp>
}

/** Columns and relationships of "dca_order_history" */
export type DcaOrderHistory = {
  __typename?: 'DcaOrderHistory'
  availableBalance: Scalars['numeric']
  createdAt: Scalars['timestamptz']
  createdOrder: Scalars['Boolean']
  /** An object relationship */
  dcaOrder: DcaOrder
  dcaOrderUid: Scalars['uuid']
  description: Scalars['String']
  marketOffset: Scalars['numeric']
  marketPrice: Scalars['numeric']
  /** An object relationship */
  order?: Maybe<Order>
  orderUid?: Maybe<Scalars['uuid']>
  primaryCurrency: Scalars['String']
  secondaryCurrency: Scalars['String']
  targetValue: Scalars['numeric']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userUid: Scalars['uuid']
  value: Scalars['numeric']
}

/** Aggregated selection of "dca_order_history" */
export type DcaOrderHistoryAggregate = {
  __typename?: 'DcaOrderHistoryAggregate'
  aggregate?: Maybe<DcaOrderHistoryAggregateFields>
  nodes: DcaOrderHistory[]
}

/** Aggregate fields of "dca_order_history" */
export type DcaOrderHistoryAggregateFields = {
  __typename?: 'DcaOrderHistoryAggregateFields'
  avg?: Maybe<DcaOrderHistoryAvgFields>
  count: Scalars['Int']
  max?: Maybe<DcaOrderHistoryMaxFields>
  min?: Maybe<DcaOrderHistoryMinFields>
  stddev?: Maybe<DcaOrderHistoryStddevFields>
  stddevPop?: Maybe<DcaOrderHistoryStddevPopFields>
  stddevSamp?: Maybe<DcaOrderHistoryStddevSampFields>
  sum?: Maybe<DcaOrderHistorySumFields>
  varPop?: Maybe<DcaOrderHistoryVarPopFields>
  varSamp?: Maybe<DcaOrderHistoryVarSampFields>
  variance?: Maybe<DcaOrderHistoryVarianceFields>
}

/** Aggregate fields of "dca_order_history" */
export type DcaOrderHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<DcaOrderHistorySelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "dca_order_history" */
export type DcaOrderHistoryAggregateOrderBy = {
  avg?: InputMaybe<DcaOrderHistoryAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<DcaOrderHistoryMaxOrderBy>
  min?: InputMaybe<DcaOrderHistoryMinOrderBy>
  stddev?: InputMaybe<DcaOrderHistoryStddevOrderBy>
  stddev_pop?: InputMaybe<DcaOrderHistoryStddevPopOrderBy>
  stddev_samp?: InputMaybe<DcaOrderHistoryStddevSampOrderBy>
  sum?: InputMaybe<DcaOrderHistorySumOrderBy>
  var_pop?: InputMaybe<DcaOrderHistoryVarPopOrderBy>
  var_samp?: InputMaybe<DcaOrderHistoryVarSampOrderBy>
  variance?: InputMaybe<DcaOrderHistoryVarianceOrderBy>
}

/** Aggregate avg on columns */
export type DcaOrderHistoryAvgFields = {
  __typename?: 'DcaOrderHistoryAvgFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "dca_order_history" */
export type DcaOrderHistoryAvgOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "dca_order_history". All fields are combined with a logical 'AND'. */
export type DcaOrderHistoryBoolExp = {
  _and?: InputMaybe<DcaOrderHistoryBoolExp[]>
  _not?: InputMaybe<DcaOrderHistoryBoolExp>
  _or?: InputMaybe<DcaOrderHistoryBoolExp[]>
  availableBalance?: InputMaybe<NumericComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  createdOrder?: InputMaybe<BooleanComparisonExp>
  dcaOrder?: InputMaybe<DcaOrderBoolExp>
  dcaOrderUid?: InputMaybe<UuidComparisonExp>
  description?: InputMaybe<StringComparisonExp>
  marketOffset?: InputMaybe<NumericComparisonExp>
  marketPrice?: InputMaybe<NumericComparisonExp>
  order?: InputMaybe<OrderBoolExp>
  orderUid?: InputMaybe<UuidComparisonExp>
  primaryCurrency?: InputMaybe<StringComparisonExp>
  secondaryCurrency?: InputMaybe<StringComparisonExp>
  targetValue?: InputMaybe<NumericComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userUid?: InputMaybe<UuidComparisonExp>
  value?: InputMaybe<NumericComparisonExp>
}

/** Aggregate max on columns */
export type DcaOrderHistoryMaxFields = {
  __typename?: 'DcaOrderHistoryMaxFields'
  availableBalance?: Maybe<Scalars['numeric']>
  createdAt?: Maybe<Scalars['timestamptz']>
  dcaOrderUid?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  marketOffset?: Maybe<Scalars['numeric']>
  marketPrice?: Maybe<Scalars['numeric']>
  orderUid?: Maybe<Scalars['uuid']>
  primaryCurrency?: Maybe<Scalars['String']>
  secondaryCurrency?: Maybe<Scalars['String']>
  targetValue?: Maybe<Scalars['numeric']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
}

/** Order by max() on columns of table "dca_order_history" */
export type DcaOrderHistoryMaxOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  dcaOrderUid?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  orderUid?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type DcaOrderHistoryMinFields = {
  __typename?: 'DcaOrderHistoryMinFields'
  availableBalance?: Maybe<Scalars['numeric']>
  createdAt?: Maybe<Scalars['timestamptz']>
  dcaOrderUid?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  marketOffset?: Maybe<Scalars['numeric']>
  marketPrice?: Maybe<Scalars['numeric']>
  orderUid?: Maybe<Scalars['uuid']>
  primaryCurrency?: Maybe<Scalars['String']>
  secondaryCurrency?: Maybe<Scalars['String']>
  targetValue?: Maybe<Scalars['numeric']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
}

/** Order by min() on columns of table "dca_order_history" */
export type DcaOrderHistoryMinOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  dcaOrderUid?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  orderUid?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "dca_order_history". */
export type DcaOrderHistoryOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  createdOrder?: InputMaybe<OrderBy>
  dcaOrder?: InputMaybe<DcaOrderOrderBy>
  dcaOrderUid?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  order?: InputMaybe<OrderOrderBy>
  orderUid?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Select columns of table "dca_order_history" */
export enum DcaOrderHistorySelectColumn {
  /** Column name */
  AvailableBalance = 'availableBalance',
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  CreatedOrder = 'createdOrder',
  /** Column name */
  DcaOrderUid = 'dcaOrderUid',
  /** Column name */
  Description = 'description',
  /** Column name */
  MarketOffset = 'marketOffset',
  /** Column name */
  MarketPrice = 'marketPrice',
  /** Column name */
  OrderUid = 'orderUid',
  /** Column name */
  PrimaryCurrency = 'primaryCurrency',
  /** Column name */
  SecondaryCurrency = 'secondaryCurrency',
  /** Column name */
  TargetValue = 'targetValue',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserUid = 'userUid',
  /** Column name */
  Value = 'value',
}

/** Aggregate stddev on columns */
export type DcaOrderHistoryStddevFields = {
  __typename?: 'DcaOrderHistoryStddevFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "dca_order_history" */
export type DcaOrderHistoryStddevOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate stddev_pop on columns */
export type DcaOrderHistoryStddevPopFields = {
  __typename?: 'DcaOrderHistoryStddevPopFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "dca_order_history" */
export type DcaOrderHistoryStddevPopOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate stddev_samp on columns */
export type DcaOrderHistoryStddevSampFields = {
  __typename?: 'DcaOrderHistoryStddevSampFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "dca_order_history" */
export type DcaOrderHistoryStddevSampOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate sum on columns */
export type DcaOrderHistorySumFields = {
  __typename?: 'DcaOrderHistorySumFields'
  availableBalance?: Maybe<Scalars['numeric']>
  marketOffset?: Maybe<Scalars['numeric']>
  marketPrice?: Maybe<Scalars['numeric']>
  targetValue?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "dca_order_history" */
export type DcaOrderHistorySumOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate var_pop on columns */
export type DcaOrderHistoryVarPopFields = {
  __typename?: 'DcaOrderHistoryVarPopFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "dca_order_history" */
export type DcaOrderHistoryVarPopOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate var_samp on columns */
export type DcaOrderHistoryVarSampFields = {
  __typename?: 'DcaOrderHistoryVarSampFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "dca_order_history" */
export type DcaOrderHistoryVarSampOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Aggregate variance on columns */
export type DcaOrderHistoryVarianceFields = {
  __typename?: 'DcaOrderHistoryVarianceFields'
  availableBalance?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  marketPrice?: Maybe<Scalars['Float']>
  targetValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "dca_order_history" */
export type DcaOrderHistoryVarianceOrderBy = {
  availableBalance?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPrice?: InputMaybe<OrderBy>
  targetValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
}

/** Input type for incrementing numeric columns in table "dca_order" */
export type DcaOrderIncInput = {
  dailyAverage?: InputMaybe<Scalars['numeric']>
  intervalMs?: InputMaybe<Scalars['Int']>
  marketOffset?: InputMaybe<Scalars['numeric']>
  maxPrice?: InputMaybe<Scalars['numeric']>
  maxValue?: InputMaybe<Scalars['numeric']>
  minPrice?: InputMaybe<Scalars['numeric']>
  minValue?: InputMaybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type DcaOrderMaxFields = {
  __typename?: 'DcaOrderMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  dailyAverage?: Maybe<Scalars['numeric']>
  enabledAt?: Maybe<Scalars['timestamptz']>
  exchangeUid?: Maybe<Scalars['uuid']>
  intervalMs?: Maybe<Scalars['Int']>
  lastRunAt?: Maybe<Scalars['timestamptz']>
  marketOffset?: Maybe<Scalars['numeric']>
  marketUid?: Maybe<Scalars['uuid']>
  maxPrice?: Maybe<Scalars['numeric']>
  maxValue?: Maybe<Scalars['numeric']>
  minPrice?: Maybe<Scalars['numeric']>
  minValue?: Maybe<Scalars['numeric']>
  nextRunAt?: Maybe<Scalars['timestamptz']>
  primaryCurrencySymbol?: Maybe<Scalars['String']>
  secondaryCurrencySymbol?: Maybe<Scalars['String']>
  startAt?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userExchangeKeysUid?: Maybe<Scalars['uuid']>
  userUid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "dca_order" */
export type DcaOrderMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dailyAverage?: InputMaybe<OrderBy>
  enabledAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  lastRunAt?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketUid?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
  nextRunAt?: InputMaybe<OrderBy>
  primaryCurrencySymbol?: InputMaybe<OrderBy>
  secondaryCurrencySymbol?: InputMaybe<OrderBy>
  startAt?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userExchangeKeysUid?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type DcaOrderMinFields = {
  __typename?: 'DcaOrderMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  dailyAverage?: Maybe<Scalars['numeric']>
  enabledAt?: Maybe<Scalars['timestamptz']>
  exchangeUid?: Maybe<Scalars['uuid']>
  intervalMs?: Maybe<Scalars['Int']>
  lastRunAt?: Maybe<Scalars['timestamptz']>
  marketOffset?: Maybe<Scalars['numeric']>
  marketUid?: Maybe<Scalars['uuid']>
  maxPrice?: Maybe<Scalars['numeric']>
  maxValue?: Maybe<Scalars['numeric']>
  minPrice?: Maybe<Scalars['numeric']>
  minValue?: Maybe<Scalars['numeric']>
  nextRunAt?: Maybe<Scalars['timestamptz']>
  primaryCurrencySymbol?: Maybe<Scalars['String']>
  secondaryCurrencySymbol?: Maybe<Scalars['String']>
  startAt?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userExchangeKeysUid?: Maybe<Scalars['uuid']>
  userUid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "dca_order" */
export type DcaOrderMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dailyAverage?: InputMaybe<OrderBy>
  enabledAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  lastRunAt?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketUid?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
  nextRunAt?: InputMaybe<OrderBy>
  primaryCurrencySymbol?: InputMaybe<OrderBy>
  secondaryCurrencySymbol?: InputMaybe<OrderBy>
  startAt?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userExchangeKeysUid?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Response of any mutation on the table "dca_order" */
export type DcaOrderMutationResponse = {
  __typename?: 'DcaOrderMutationResponse'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: DcaOrder[]
}

/** Ordering options when selecting data from "dca_order". */
export type DcaOrderOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dailyAverage?: InputMaybe<OrderBy>
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>
  enabledAt?: InputMaybe<OrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeMarketTradingPairAggregate?: InputMaybe<MarketTradingPairAggregateOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  lastRunAt?: InputMaybe<OrderBy>
  market?: InputMaybe<MarketOrderBy>
  marketOffset?: InputMaybe<OrderBy>
  marketPricesAggregate?: InputMaybe<MarketPriceAggregateOrderBy>
  marketUid?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
  nextRunAt?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<CurrencyOrderBy>
  primaryCurrencySymbol?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<CurrencyOrderBy>
  secondaryCurrencySymbol?: InputMaybe<OrderBy>
  startAt?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userExchangeKeys?: InputMaybe<UserExchangeKeysOrderBy>
  userExchangeKeysUid?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Primary key columns input for table: dca_order */
export type DcaOrderPkColumnsInput = {
  uid: Scalars['uuid']
}

/** Select columns of table "dca_order" */
export enum DcaOrderSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  DailyAverage = 'dailyAverage',
  /** Column name */
  EnabledAt = 'enabledAt',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  IntervalMs = 'intervalMs',
  /** Column name */
  LastRunAt = 'lastRunAt',
  /** Column name */
  MarketOffset = 'marketOffset',
  /** Column name */
  MarketUid = 'marketUid',
  /** Column name */
  MaxPrice = 'maxPrice',
  /** Column name */
  MaxValue = 'maxValue',
  /** Column name */
  MinPrice = 'minPrice',
  /** Column name */
  MinValue = 'minValue',
  /** Column name */
  NextRunAt = 'nextRunAt',
  /** Column name */
  PrimaryCurrencySymbol = 'primaryCurrencySymbol',
  /** Column name */
  SecondaryCurrencySymbol = 'secondaryCurrencySymbol',
  /** Column name */
  StartAt = 'startAt',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserExchangeKeysUid = 'userExchangeKeysUid',
  /** Column name */
  UserUid = 'userUid',
}

/** Input type for updating data in table "dca_order" */
export type DcaOrderSetInput = {
  dailyAverage?: InputMaybe<Scalars['numeric']>
  intervalMs?: InputMaybe<Scalars['Int']>
  marketOffset?: InputMaybe<Scalars['numeric']>
  marketUid?: InputMaybe<Scalars['uuid']>
  maxPrice?: InputMaybe<Scalars['numeric']>
  maxValue?: InputMaybe<Scalars['numeric']>
  minPrice?: InputMaybe<Scalars['numeric']>
  minValue?: InputMaybe<Scalars['numeric']>
  startAt?: InputMaybe<Scalars['timestamptz']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userExchangeKeysUid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate stddev on columns */
export type DcaOrderStddevFields = {
  __typename?: 'DcaOrderStddevFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "dca_order" */
export type DcaOrderStddevOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

/** Aggregate stddev_pop on columns */
export type DcaOrderStddevPopFields = {
  __typename?: 'DcaOrderStddevPopFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "dca_order" */
export type DcaOrderStddevPopOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

/** Aggregate stddev_samp on columns */
export type DcaOrderStddevSampFields = {
  __typename?: 'DcaOrderStddevSampFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "dca_order" */
export type DcaOrderStddevSampOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

/** Aggregate sum on columns */
export type DcaOrderSumFields = {
  __typename?: 'DcaOrderSumFields'
  dailyAverage?: Maybe<Scalars['numeric']>
  intervalMs?: Maybe<Scalars['Int']>
  marketOffset?: Maybe<Scalars['numeric']>
  maxPrice?: Maybe<Scalars['numeric']>
  maxValue?: Maybe<Scalars['numeric']>
  minPrice?: Maybe<Scalars['numeric']>
  minValue?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "dca_order" */
export type DcaOrderSumOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

export type DcaOrderUpdates = {
  /** Increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DcaOrderIncInput>
  /** Sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DcaOrderSetInput>
  where: DcaOrderBoolExp
}

/** Aggregate var_pop on columns */
export type DcaOrderVarPopFields = {
  __typename?: 'DcaOrderVarPopFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "dca_order" */
export type DcaOrderVarPopOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

/** Aggregate var_samp on columns */
export type DcaOrderVarSampFields = {
  __typename?: 'DcaOrderVarSampFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "dca_order" */
export type DcaOrderVarSampOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

/** Aggregate variance on columns */
export type DcaOrderVarianceFields = {
  __typename?: 'DcaOrderVarianceFields'
  dailyAverage?: Maybe<Scalars['Float']>
  intervalMs?: Maybe<Scalars['Float']>
  marketOffset?: Maybe<Scalars['Float']>
  maxPrice?: Maybe<Scalars['Float']>
  maxValue?: Maybe<Scalars['Float']>
  minPrice?: Maybe<Scalars['Float']>
  minValue?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "dca_order" */
export type DcaOrderVarianceOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>
  intervalMs?: InputMaybe<OrderBy>
  marketOffset?: InputMaybe<OrderBy>
  maxPrice?: InputMaybe<OrderBy>
  maxValue?: InputMaybe<OrderBy>
  minPrice?: InputMaybe<OrderBy>
  minValue?: InputMaybe<OrderBy>
}

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput'
  user?: Maybe<User>
  userUid: Scalars['uuid']
}

/** Columns and relationships of "exchange" */
export type Exchange = {
  __typename?: 'Exchange'
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  dcaOrders: DcaOrder[]
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate
  id: Scalars['String']
  name: Scalars['String']
  /** An array relationship */
  orders: Order[]
  /** An aggregate relationship */
  ordersAggregate: OrderAggregate
  /** An array relationship */
  primaryCurrencies: ExchangePrimaryCurrency[]
  /** An array relationship */
  secondaryCurrencies: ExchangeSecondaryCurrency[]
  /** An array relationship */
  trades: Trade[]
  /** An aggregate relationship */
  tradesAggregate: TradeAggregate
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  url: Scalars['String']
  /** An array relationship */
  userExchangeKeys: UserExchangeKeys[]
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate
}

/** Columns and relationships of "exchange" */
export type ExchangeDcaOrdersArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeOrdersArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeOrdersAggregateArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangePrimaryCurrenciesArgs = {
  distinctOn?: InputMaybe<ExchangePrimaryCurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangePrimaryCurrencyOrderBy[]>
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeSecondaryCurrenciesArgs = {
  distinctOn?: InputMaybe<ExchangeSecondaryCurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangeSecondaryCurrencyOrderBy[]>
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeTradesArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeTradesAggregateArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

/** Columns and relationships of "exchange" */
export type ExchangeUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

/** Boolean expression to filter rows from the table "exchange". All fields are combined with a logical 'AND'. */
export type ExchangeBoolExp = {
  _and?: InputMaybe<ExchangeBoolExp[]>
  _not?: InputMaybe<ExchangeBoolExp>
  _or?: InputMaybe<ExchangeBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  dcaOrders?: InputMaybe<DcaOrderBoolExp>
  id?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  orders?: InputMaybe<OrderBoolExp>
  primaryCurrencies?: InputMaybe<ExchangePrimaryCurrencyBoolExp>
  secondaryCurrencies?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>
  trades?: InputMaybe<TradeBoolExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  url?: InputMaybe<StringComparisonExp>
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>
}

/** Ordering options when selecting data from "exchange". */
export type ExchangeOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  ordersAggregate?: InputMaybe<OrderAggregateOrderBy>
  primaryCurrenciesAggregate?: InputMaybe<ExchangePrimaryCurrencyAggregateOrderBy>
  secondaryCurrenciesAggregate?: InputMaybe<ExchangeSecondaryCurrencyAggregateOrderBy>
  tradesAggregate?: InputMaybe<TradeAggregateOrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  url?: InputMaybe<OrderBy>
  userExchangeKeysAggregate?: InputMaybe<UserExchangeKeysAggregateOrderBy>
}

/** Columns and relationships of "exchange_primary_currency" */
export type ExchangePrimaryCurrency = {
  __typename?: 'ExchangePrimaryCurrency'
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  currency: Currency
  /** An object relationship */
  exchange: Exchange
  exchangeUid: Scalars['uuid']
  symbol: Scalars['String']
  updatedAt: Scalars['timestamptz']
}

/** Order by aggregate values of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<ExchangePrimaryCurrencyMaxOrderBy>
  min?: InputMaybe<ExchangePrimaryCurrencyMinOrderBy>
}

/** Boolean expression to filter rows from the table "exchange_primary_currency". All fields are combined with a logical 'AND'. */
export type ExchangePrimaryCurrencyBoolExp = {
  _and?: InputMaybe<ExchangePrimaryCurrencyBoolExp[]>
  _not?: InputMaybe<ExchangePrimaryCurrencyBoolExp>
  _or?: InputMaybe<ExchangePrimaryCurrencyBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  currency?: InputMaybe<CurrencyBoolExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  symbol?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Order by max() on columns of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Order by min() on columns of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "exchange_primary_currency". */
export type ExchangePrimaryCurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  currency?: InputMaybe<CurrencyOrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Select columns of table "exchange_primary_currency" */
export enum ExchangePrimaryCurrencySelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updatedAt',
}

/** Columns and relationships of "exchange_secondary_currency" */
export type ExchangeSecondaryCurrency = {
  __typename?: 'ExchangeSecondaryCurrency'
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  currency: Currency
  /** An object relationship */
  exchange: Exchange
  exchangeUid: Scalars['uuid']
  symbol: Scalars['String']
  updatedAt: Scalars['timestamptz']
}

/** Order by aggregate values of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<ExchangeSecondaryCurrencyMaxOrderBy>
  min?: InputMaybe<ExchangeSecondaryCurrencyMinOrderBy>
}

/** Boolean expression to filter rows from the table "exchange_secondary_currency". All fields are combined with a logical 'AND'. */
export type ExchangeSecondaryCurrencyBoolExp = {
  _and?: InputMaybe<ExchangeSecondaryCurrencyBoolExp[]>
  _not?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>
  _or?: InputMaybe<ExchangeSecondaryCurrencyBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  currency?: InputMaybe<CurrencyBoolExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  symbol?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Order by max() on columns of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Order by min() on columns of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "exchange_secondary_currency". */
export type ExchangeSecondaryCurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  currency?: InputMaybe<CurrencyOrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Select columns of table "exchange_secondary_currency" */
export enum ExchangeSecondaryCurrencySelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updatedAt',
}

/** Select columns of table "exchange" */
export enum ExchangeSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  Id = 'id',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  Url = 'url',
}

export type FeeFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Columns and relationships of "market" */
export type Market = {
  __typename?: 'Market'
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  dcaOrders: DcaOrder[]
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate
  id: Scalars['String']
  /** An array relationship */
  marketPrices: MarketPrice[]
  name: Scalars['String']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
}

/** Columns and relationships of "market" */
export type MarketDcaOrdersArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "market" */
export type MarketDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "market" */
export type MarketMarketPricesArgs = {
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

/** Boolean expression to filter rows from the table "market". All fields are combined with a logical 'AND'. */
export type MarketBoolExp = {
  _and?: InputMaybe<MarketBoolExp[]>
  _not?: InputMaybe<MarketBoolExp>
  _or?: InputMaybe<MarketBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  dcaOrders?: InputMaybe<DcaOrderBoolExp>
  id?: InputMaybe<StringComparisonExp>
  marketPrices?: InputMaybe<MarketPriceBoolExp>
  name?: InputMaybe<StringComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "market". */
export type MarketOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>
  id?: InputMaybe<OrderBy>
  marketPricesAggregate?: InputMaybe<MarketPriceAggregateOrderBy>
  name?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Columns and relationships of "market_price" */
export type MarketPrice = {
  __typename?: 'MarketPrice'
  assetSymbol: Scalars['String']
  currency: Scalars['String']
  fxRate: Scalars['numeric']
  /** An object relationship */
  market: Market
  marketUid: Scalars['uuid']
  price: Scalars['numeric']
  sourceCurrency: Scalars['bpchar']
  sourcePrice: Scalars['numeric']
  timestamp: Scalars['timestamptz']
}

/** Order by aggregate values of table "market_price" */
export type MarketPriceAggregateOrderBy = {
  avg?: InputMaybe<MarketPriceAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<MarketPriceMaxOrderBy>
  min?: InputMaybe<MarketPriceMinOrderBy>
  stddev?: InputMaybe<MarketPriceStddevOrderBy>
  stddev_pop?: InputMaybe<MarketPriceStddevPopOrderBy>
  stddev_samp?: InputMaybe<MarketPriceStddevSampOrderBy>
  sum?: InputMaybe<MarketPriceSumOrderBy>
  var_pop?: InputMaybe<MarketPriceVarPopOrderBy>
  var_samp?: InputMaybe<MarketPriceVarSampOrderBy>
  variance?: InputMaybe<MarketPriceVarianceOrderBy>
}

/** Order by avg() on columns of table "market_price" */
export type MarketPriceAvgOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "market_price". All fields are combined with a logical 'AND'. */
export type MarketPriceBoolExp = {
  _and?: InputMaybe<MarketPriceBoolExp[]>
  _not?: InputMaybe<MarketPriceBoolExp>
  _or?: InputMaybe<MarketPriceBoolExp[]>
  assetSymbol?: InputMaybe<StringComparisonExp>
  currency?: InputMaybe<StringComparisonExp>
  fxRate?: InputMaybe<NumericComparisonExp>
  market?: InputMaybe<MarketBoolExp>
  marketUid?: InputMaybe<UuidComparisonExp>
  price?: InputMaybe<NumericComparisonExp>
  sourceCurrency?: InputMaybe<BpcharComparisonExp>
  sourcePrice?: InputMaybe<NumericComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
}

export type MarketPriceLatestArgs = {
  asset_symbol?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  market_uid?: InputMaybe<Scalars['uuid']>
}

/** Order by max() on columns of table "market_price" */
export type MarketPriceMaxOrderBy = {
  assetSymbol?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  fxRate?: InputMaybe<OrderBy>
  marketUid?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourceCurrency?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
}

/** Order by min() on columns of table "market_price" */
export type MarketPriceMinOrderBy = {
  assetSymbol?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  fxRate?: InputMaybe<OrderBy>
  marketUid?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourceCurrency?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "market_price". */
export type MarketPriceOrderBy = {
  assetSymbol?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  fxRate?: InputMaybe<OrderBy>
  market?: InputMaybe<MarketOrderBy>
  marketUid?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourceCurrency?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
}

/** Select columns of table "market_price" */
export enum MarketPriceSelectColumn {
  /** Column name */
  AssetSymbol = 'assetSymbol',
  /** Column name */
  Currency = 'currency',
  /** Column name */
  FxRate = 'fxRate',
  /** Column name */
  MarketUid = 'marketUid',
  /** Column name */
  Price = 'price',
  /** Column name */
  SourceCurrency = 'sourceCurrency',
  /** Column name */
  SourcePrice = 'sourcePrice',
  /** Column name */
  Timestamp = 'timestamp',
}

/** Order by stddev() on columns of table "market_price" */
export type MarketPriceStddevOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Order by stddev_pop() on columns of table "market_price" */
export type MarketPriceStddevPopOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Order by stddev_samp() on columns of table "market_price" */
export type MarketPriceStddevSampOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Order by sum() on columns of table "market_price" */
export type MarketPriceSumOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Order by var_pop() on columns of table "market_price" */
export type MarketPriceVarPopOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Order by var_samp() on columns of table "market_price" */
export type MarketPriceVarSampOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Order by variance() on columns of table "market_price" */
export type MarketPriceVarianceOrderBy = {
  fxRate?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  sourcePrice?: InputMaybe<OrderBy>
}

/** Select columns of table "market" */
export enum MarketSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  Id = 'id',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
}

/** Columns and relationships of "market_trading_pair" */
export type MarketTradingPair = {
  __typename?: 'MarketTradingPair'
  /** An object relationship */
  currency: Currency
  /** An object relationship */
  currencyBySecondaryCurrencySymbol: Currency
  /** An object relationship */
  market: Market
  /** An array relationship */
  marketPrices: MarketPrice[]
  marketUid: Scalars['uuid']
  primaryCurrencySymbol: Scalars['String']
  secondaryCurrencySymbol: Scalars['String']
}

/** Columns and relationships of "market_trading_pair" */
export type MarketTradingPairMarketPricesArgs = {
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

/** Order by aggregate values of table "market_trading_pair" */
export type MarketTradingPairAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<MarketTradingPairMaxOrderBy>
  min?: InputMaybe<MarketTradingPairMinOrderBy>
}

/** Boolean expression to filter rows from the table "market_trading_pair". All fields are combined with a logical 'AND'. */
export type MarketTradingPairBoolExp = {
  _and?: InputMaybe<MarketTradingPairBoolExp[]>
  _not?: InputMaybe<MarketTradingPairBoolExp>
  _or?: InputMaybe<MarketTradingPairBoolExp[]>
  currency?: InputMaybe<CurrencyBoolExp>
  currencyBySecondaryCurrencySymbol?: InputMaybe<CurrencyBoolExp>
  market?: InputMaybe<MarketBoolExp>
  marketPrices?: InputMaybe<MarketPriceBoolExp>
  marketUid?: InputMaybe<UuidComparisonExp>
  primaryCurrencySymbol?: InputMaybe<StringComparisonExp>
  secondaryCurrencySymbol?: InputMaybe<StringComparisonExp>
}

/** Order by max() on columns of table "market_trading_pair" */
export type MarketTradingPairMaxOrderBy = {
  marketUid?: InputMaybe<OrderBy>
  primaryCurrencySymbol?: InputMaybe<OrderBy>
  secondaryCurrencySymbol?: InputMaybe<OrderBy>
}

/** Order by min() on columns of table "market_trading_pair" */
export type MarketTradingPairMinOrderBy = {
  marketUid?: InputMaybe<OrderBy>
  primaryCurrencySymbol?: InputMaybe<OrderBy>
  secondaryCurrencySymbol?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "market_trading_pair". */
export type MarketTradingPairOrderBy = {
  currency?: InputMaybe<CurrencyOrderBy>
  currencyBySecondaryCurrencySymbol?: InputMaybe<CurrencyOrderBy>
  market?: InputMaybe<MarketOrderBy>
  marketPricesAggregate?: InputMaybe<MarketPriceAggregateOrderBy>
  marketUid?: InputMaybe<OrderBy>
  primaryCurrencySymbol?: InputMaybe<OrderBy>
  secondaryCurrencySymbol?: InputMaybe<OrderBy>
}

/** Select columns of table "market_trading_pair" */
export enum MarketTradingPairSelectColumn {
  /** Column name */
  MarketUid = 'marketUid',
  /** Column name */
  PrimaryCurrencySymbol = 'primaryCurrencySymbol',
  /** Column name */
  SecondaryCurrencySymbol = 'secondaryCurrencySymbol',
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** Columns and relationships of "order" */
export type Order = {
  __typename?: 'Order'
  closedAt?: Maybe<Scalars['timestamptz']>
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  dcaOrderHistories: DcaOrderHistory[]
  /** An aggregate relationship */
  dcaOrderHistoriesAggregate: DcaOrderHistoryAggregate
  /** An object relationship */
  exchange: Exchange
  exchangeUid: Scalars['uuid']
  openedAt: Scalars['timestamptz']
  orderId: Scalars['String']
  price: Scalars['numeric']
  primaryCurrency: Scalars['String']
  secondaryCurrency: Scalars['String']
  type: Scalars['String']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userUid: Scalars['uuid']
  value: Scalars['numeric']
  volume: Scalars['numeric']
}

/** Columns and relationships of "order" */
export type OrderDcaOrderHistoriesArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

/** Columns and relationships of "order" */
export type OrderDcaOrderHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

/** Aggregated selection of "order" */
export type OrderAggregate = {
  __typename?: 'OrderAggregate'
  aggregate?: Maybe<OrderAggregateFields>
  nodes: Order[]
}

/** Aggregate fields of "order" */
export type OrderAggregateFields = {
  __typename?: 'OrderAggregateFields'
  avg?: Maybe<OrderAvgFields>
  count: Scalars['Int']
  max?: Maybe<OrderMaxFields>
  min?: Maybe<OrderMinFields>
  stddev?: Maybe<OrderStddevFields>
  stddevPop?: Maybe<OrderStddevPopFields>
  stddevSamp?: Maybe<OrderStddevSampFields>
  sum?: Maybe<OrderSumFields>
  varPop?: Maybe<OrderVarPopFields>
  varSamp?: Maybe<OrderVarSampFields>
  variance?: Maybe<OrderVarianceFields>
}

/** Aggregate fields of "order" */
export type OrderAggregateFieldsCountArgs = {
  columns?: InputMaybe<OrderSelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "order" */
export type OrderAggregateOrderBy = {
  avg?: InputMaybe<OrderAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<OrderMaxOrderBy>
  min?: InputMaybe<OrderMinOrderBy>
  stddev?: InputMaybe<OrderStddevOrderBy>
  stddev_pop?: InputMaybe<OrderStddevPopOrderBy>
  stddev_samp?: InputMaybe<OrderStddevSampOrderBy>
  sum?: InputMaybe<OrderSumOrderBy>
  var_pop?: InputMaybe<OrderVarPopOrderBy>
  var_samp?: InputMaybe<OrderVarSampOrderBy>
  variance?: InputMaybe<OrderVarianceOrderBy>
}

/** Aggregate avg on columns */
export type OrderAvgFields = {
  __typename?: 'OrderAvgFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "order" */
export type OrderAvgOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type OrderBoolExp = {
  _and?: InputMaybe<OrderBoolExp[]>
  _not?: InputMaybe<OrderBoolExp>
  _or?: InputMaybe<OrderBoolExp[]>
  closedAt?: InputMaybe<TimestamptzComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  openedAt?: InputMaybe<TimestamptzComparisonExp>
  orderId?: InputMaybe<StringComparisonExp>
  price?: InputMaybe<NumericComparisonExp>
  primaryCurrency?: InputMaybe<StringComparisonExp>
  secondaryCurrency?: InputMaybe<StringComparisonExp>
  type?: InputMaybe<StringComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userUid?: InputMaybe<UuidComparisonExp>
  value?: InputMaybe<NumericComparisonExp>
  volume?: InputMaybe<NumericComparisonExp>
}

/** Column ordering options */
export enum OrderBy {
  /** In ascending order, nulls last */
  Asc = 'ASC',
  /** In ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** In ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** In descending order, nulls first */
  Desc = 'DESC',
  /** In descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** In descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST',
}

/** Aggregate max on columns */
export type OrderMaxFields = {
  __typename?: 'OrderMaxFields'
  closedAt?: Maybe<Scalars['timestamptz']>
  createdAt?: Maybe<Scalars['timestamptz']>
  exchangeUid?: Maybe<Scalars['uuid']>
  openedAt?: Maybe<Scalars['timestamptz']>
  orderId?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  primaryCurrency?: Maybe<Scalars['String']>
  secondaryCurrency?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by max() on columns of table "order" */
export type OrderMaxOrderBy = {
  closedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  openedAt?: InputMaybe<OrderBy>
  orderId?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type OrderMinFields = {
  __typename?: 'OrderMinFields'
  closedAt?: Maybe<Scalars['timestamptz']>
  createdAt?: Maybe<Scalars['timestamptz']>
  exchangeUid?: Maybe<Scalars['uuid']>
  openedAt?: Maybe<Scalars['timestamptz']>
  orderId?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  primaryCurrency?: Maybe<Scalars['String']>
  secondaryCurrency?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by min() on columns of table "order" */
export type OrderMinOrderBy = {
  closedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  openedAt?: InputMaybe<OrderBy>
  orderId?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "order". */
export type OrderOrderBy = {
  closedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  openedAt?: InputMaybe<OrderBy>
  orderId?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Select columns of table "order" */
export enum OrderSelectColumn {
  /** Column name */
  ClosedAt = 'closedAt',
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  OpenedAt = 'openedAt',
  /** Column name */
  OrderId = 'orderId',
  /** Column name */
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primaryCurrency',
  /** Column name */
  SecondaryCurrency = 'secondaryCurrency',
  /** Column name */
  Type = 'type',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserUid = 'userUid',
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Aggregate stddev on columns */
export type OrderStddevFields = {
  __typename?: 'OrderStddevFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "order" */
export type OrderStddevOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate stddev_pop on columns */
export type OrderStddevPopFields = {
  __typename?: 'OrderStddevPopFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "order" */
export type OrderStddevPopOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate stddev_samp on columns */
export type OrderStddevSampFields = {
  __typename?: 'OrderStddevSampFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "order" */
export type OrderStddevSampOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate sum on columns */
export type OrderSumFields = {
  __typename?: 'OrderSumFields'
  price?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "order" */
export type OrderSumOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate var_pop on columns */
export type OrderVarPopFields = {
  __typename?: 'OrderVarPopFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "order" */
export type OrderVarPopOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate var_samp on columns */
export type OrderVarSampFields = {
  __typename?: 'OrderVarSampFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "order" */
export type OrderVarSampOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate variance on columns */
export type OrderVarianceFields = {
  __typename?: 'OrderVarianceFields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "order" */
export type OrderVarianceOrderBy = {
  price?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

export type PriceFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>
}

export type QueryLiveStripeSubscriptionOutput = {
  __typename?: 'QueryLiveStripeSubscriptionOutput'
  clientSecret: Scalars['String']
  id: Scalars['String']
}

export type QueryStripeConfigOutput = {
  __typename?: 'QueryStripeConfigOutput'
  publishableKey: Scalars['String']
}

export type QueryUserLimitOutput = {
  __typename?: 'QueryUserLimitOutput'
  userLimit: Scalars['jsonb']
  userUid: Scalars['String']
}

export type RefreshAuthTokenOutput = {
  __typename?: 'RefreshAuthTokenOutput'
  authToken: Scalars['String']
  expiresAt: Scalars['timestamptz']
  user?: Maybe<User>
  userUid: Scalars['String']
}

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput'
  authToken: Scalars['String']
  expiresAt: Scalars['timestamptz']
  userUid: Scalars['uuid']
}

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput'
  userUid: Scalars['uuid']
}

export type SendUserPasswordResetOutput = {
  __typename?: 'SendUserPasswordResetOutput'
  email: Scalars['String']
}

export type SetupUser2FaOutput = {
  __typename?: 'SetupUser2FAOutput'
  qrcode: Scalars['String']
  secret: Scalars['String']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** Does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** Does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _isNull?: InputMaybe<Scalars['Boolean']>
  /** Does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** Does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** Does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** Does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** Does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** Does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** Does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** Does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** Columns and relationships of "stripe_price" */
export type StripePrice = {
  __typename?: 'StripePrice'
  active: Scalars['Boolean']
  billingScheme: Scalars['String']
  currency: Scalars['bpchar']
  id: Scalars['String']
  nickname?: Maybe<Scalars['String']>
  productId: Scalars['String']
  recurringAggregateUsage?: Maybe<Scalars['String']>
  recurringInterval?: Maybe<Scalars['String']>
  recurringIntervalCount?: Maybe<Scalars['Int']>
  recurringUsageType?: Maybe<Scalars['String']>
  /** An object relationship */
  stripeProduct: StripeProduct
  /** An array relationship */
  stripeSubscriptions: StripeSubscription[]
  /** An aggregate relationship */
  stripeSubscriptionsAggregate: StripeSubscriptionAggregate
  type: Scalars['String']
  unitAmount?: Maybe<Scalars['Int']>
}

/** Columns and relationships of "stripe_price" */
export type StripePriceStripeSubscriptionsArgs = {
  distinctOn?: InputMaybe<StripeSubscriptionSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeSubscriptionOrderBy[]>
  where?: InputMaybe<StripeSubscriptionBoolExp>
}

/** Columns and relationships of "stripe_price" */
export type StripePriceStripeSubscriptionsAggregateArgs = {
  distinctOn?: InputMaybe<StripeSubscriptionSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeSubscriptionOrderBy[]>
  where?: InputMaybe<StripeSubscriptionBoolExp>
}

/** Order by aggregate values of table "stripe_price" */
export type StripePriceAggregateOrderBy = {
  avg?: InputMaybe<StripePriceAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<StripePriceMaxOrderBy>
  min?: InputMaybe<StripePriceMinOrderBy>
  stddev?: InputMaybe<StripePriceStddevOrderBy>
  stddev_pop?: InputMaybe<StripePriceStddevPopOrderBy>
  stddev_samp?: InputMaybe<StripePriceStddevSampOrderBy>
  sum?: InputMaybe<StripePriceSumOrderBy>
  var_pop?: InputMaybe<StripePriceVarPopOrderBy>
  var_samp?: InputMaybe<StripePriceVarSampOrderBy>
  variance?: InputMaybe<StripePriceVarianceOrderBy>
}

/** Order by avg() on columns of table "stripe_price" */
export type StripePriceAvgOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "stripe_price". All fields are combined with a logical 'AND'. */
export type StripePriceBoolExp = {
  _and?: InputMaybe<StripePriceBoolExp[]>
  _not?: InputMaybe<StripePriceBoolExp>
  _or?: InputMaybe<StripePriceBoolExp[]>
  active?: InputMaybe<BooleanComparisonExp>
  billingScheme?: InputMaybe<StringComparisonExp>
  currency?: InputMaybe<BpcharComparisonExp>
  id?: InputMaybe<StringComparisonExp>
  nickname?: InputMaybe<StringComparisonExp>
  productId?: InputMaybe<StringComparisonExp>
  recurringAggregateUsage?: InputMaybe<StringComparisonExp>
  recurringInterval?: InputMaybe<StringComparisonExp>
  recurringIntervalCount?: InputMaybe<IntComparisonExp>
  recurringUsageType?: InputMaybe<StringComparisonExp>
  stripeProduct?: InputMaybe<StripeProductBoolExp>
  stripeSubscriptions?: InputMaybe<StripeSubscriptionBoolExp>
  type?: InputMaybe<StringComparisonExp>
  unitAmount?: InputMaybe<IntComparisonExp>
}

/** Order by max() on columns of table "stripe_price" */
export type StripePriceMaxOrderBy = {
  billingScheme?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  nickname?: InputMaybe<OrderBy>
  productId?: InputMaybe<OrderBy>
  recurringAggregateUsage?: InputMaybe<OrderBy>
  recurringInterval?: InputMaybe<OrderBy>
  recurringIntervalCount?: InputMaybe<OrderBy>
  recurringUsageType?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by min() on columns of table "stripe_price" */
export type StripePriceMinOrderBy = {
  billingScheme?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  nickname?: InputMaybe<OrderBy>
  productId?: InputMaybe<OrderBy>
  recurringAggregateUsage?: InputMaybe<OrderBy>
  recurringInterval?: InputMaybe<OrderBy>
  recurringIntervalCount?: InputMaybe<OrderBy>
  recurringUsageType?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "stripe_price". */
export type StripePriceOrderBy = {
  active?: InputMaybe<OrderBy>
  billingScheme?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  nickname?: InputMaybe<OrderBy>
  productId?: InputMaybe<OrderBy>
  recurringAggregateUsage?: InputMaybe<OrderBy>
  recurringInterval?: InputMaybe<OrderBy>
  recurringIntervalCount?: InputMaybe<OrderBy>
  recurringUsageType?: InputMaybe<OrderBy>
  stripeProduct?: InputMaybe<StripeProductOrderBy>
  stripeSubscriptionsAggregate?: InputMaybe<StripeSubscriptionAggregateOrderBy>
  type?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Select columns of table "stripe_price" */
export enum StripePriceSelectColumn {
  /** Column name */
  Active = 'active',
  /** Column name */
  BillingScheme = 'billingScheme',
  /** Column name */
  Currency = 'currency',
  /** Column name */
  Id = 'id',
  /** Column name */
  Nickname = 'nickname',
  /** Column name */
  ProductId = 'productId',
  /** Column name */
  RecurringAggregateUsage = 'recurringAggregateUsage',
  /** Column name */
  RecurringInterval = 'recurringInterval',
  /** Column name */
  RecurringIntervalCount = 'recurringIntervalCount',
  /** Column name */
  RecurringUsageType = 'recurringUsageType',
  /** Column name */
  Type = 'type',
  /** Column name */
  UnitAmount = 'unitAmount',
}

/** Order by stddev() on columns of table "stripe_price" */
export type StripePriceStddevOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by stddev_pop() on columns of table "stripe_price" */
export type StripePriceStddevPopOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by stddev_samp() on columns of table "stripe_price" */
export type StripePriceStddevSampOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by sum() on columns of table "stripe_price" */
export type StripePriceSumOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by var_pop() on columns of table "stripe_price" */
export type StripePriceVarPopOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by var_samp() on columns of table "stripe_price" */
export type StripePriceVarSampOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Order by variance() on columns of table "stripe_price" */
export type StripePriceVarianceOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>
  unitAmount?: InputMaybe<OrderBy>
}

/** Columns and relationships of "stripe_product" */
export type StripeProduct = {
  __typename?: 'StripeProduct'
  active: Scalars['Boolean']
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  name: Scalars['String']
  /** An array relationship */
  stripePrices: StripePrice[]
}

/** Columns and relationships of "stripe_product" */
export type StripeProductStripePricesArgs = {
  distinctOn?: InputMaybe<StripePriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripePriceOrderBy[]>
  where?: InputMaybe<StripePriceBoolExp>
}

/** Boolean expression to filter rows from the table "stripe_product". All fields are combined with a logical 'AND'. */
export type StripeProductBoolExp = {
  _and?: InputMaybe<StripeProductBoolExp[]>
  _not?: InputMaybe<StripeProductBoolExp>
  _or?: InputMaybe<StripeProductBoolExp[]>
  active?: InputMaybe<BooleanComparisonExp>
  description?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  stripePrices?: InputMaybe<StripePriceBoolExp>
}

/** Ordering options when selecting data from "stripe_product". */
export type StripeProductOrderBy = {
  active?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  stripePricesAggregate?: InputMaybe<StripePriceAggregateOrderBy>
}

/** Select columns of table "stripe_product" */
export enum StripeProductSelectColumn {
  /** Column name */
  Active = 'active',
  /** Column name */
  Description = 'description',
  /** Column name */
  Id = 'id',
  /** Column name */
  Name = 'name',
}

/** Columns and relationships of "stripe_subscription" */
export type StripeSubscription = {
  __typename?: 'StripeSubscription'
  cancelAt?: Maybe<Scalars['timestamptz']>
  cancelAtPeriodEnd: Scalars['Boolean']
  canceledAt?: Maybe<Scalars['timestamptz']>
  currentPeriodEnd: Scalars['timestamptz']
  currentPeriodStart: Scalars['timestamptz']
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  quantity: Scalars['Int']
  status: Scalars['String']
  /** An object relationship */
  stripePrice: StripePrice
}

/** Aggregated selection of "stripe_subscription" */
export type StripeSubscriptionAggregate = {
  __typename?: 'StripeSubscriptionAggregate'
  aggregate?: Maybe<StripeSubscriptionAggregateFields>
  nodes: StripeSubscription[]
}

/** Aggregate fields of "stripe_subscription" */
export type StripeSubscriptionAggregateFields = {
  __typename?: 'StripeSubscriptionAggregateFields'
  avg?: Maybe<StripeSubscriptionAvgFields>
  count: Scalars['Int']
  max?: Maybe<StripeSubscriptionMaxFields>
  min?: Maybe<StripeSubscriptionMinFields>
  stddev?: Maybe<StripeSubscriptionStddevFields>
  stddevPop?: Maybe<StripeSubscriptionStddevPopFields>
  stddevSamp?: Maybe<StripeSubscriptionStddevSampFields>
  sum?: Maybe<StripeSubscriptionSumFields>
  varPop?: Maybe<StripeSubscriptionVarPopFields>
  varSamp?: Maybe<StripeSubscriptionVarSampFields>
  variance?: Maybe<StripeSubscriptionVarianceFields>
}

/** Aggregate fields of "stripe_subscription" */
export type StripeSubscriptionAggregateFieldsCountArgs = {
  columns?: InputMaybe<StripeSubscriptionSelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "stripe_subscription" */
export type StripeSubscriptionAggregateOrderBy = {
  avg?: InputMaybe<StripeSubscriptionAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<StripeSubscriptionMaxOrderBy>
  min?: InputMaybe<StripeSubscriptionMinOrderBy>
  stddev?: InputMaybe<StripeSubscriptionStddevOrderBy>
  stddev_pop?: InputMaybe<StripeSubscriptionStddevPopOrderBy>
  stddev_samp?: InputMaybe<StripeSubscriptionStddevSampOrderBy>
  sum?: InputMaybe<StripeSubscriptionSumOrderBy>
  var_pop?: InputMaybe<StripeSubscriptionVarPopOrderBy>
  var_samp?: InputMaybe<StripeSubscriptionVarSampOrderBy>
  variance?: InputMaybe<StripeSubscriptionVarianceOrderBy>
}

/** Aggregate avg on columns */
export type StripeSubscriptionAvgFields = {
  __typename?: 'StripeSubscriptionAvgFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "stripe_subscription" */
export type StripeSubscriptionAvgOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "stripe_subscription". All fields are combined with a logical 'AND'. */
export type StripeSubscriptionBoolExp = {
  _and?: InputMaybe<StripeSubscriptionBoolExp[]>
  _not?: InputMaybe<StripeSubscriptionBoolExp>
  _or?: InputMaybe<StripeSubscriptionBoolExp[]>
  cancelAt?: InputMaybe<TimestamptzComparisonExp>
  cancelAtPeriodEnd?: InputMaybe<BooleanComparisonExp>
  canceledAt?: InputMaybe<TimestamptzComparisonExp>
  currentPeriodEnd?: InputMaybe<TimestamptzComparisonExp>
  currentPeriodStart?: InputMaybe<TimestamptzComparisonExp>
  description?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<StringComparisonExp>
  quantity?: InputMaybe<IntComparisonExp>
  status?: InputMaybe<StringComparisonExp>
  stripePrice?: InputMaybe<StripePriceBoolExp>
}

/** Aggregate max on columns */
export type StripeSubscriptionMaxFields = {
  __typename?: 'StripeSubscriptionMaxFields'
  cancelAt?: Maybe<Scalars['timestamptz']>
  canceledAt?: Maybe<Scalars['timestamptz']>
  currentPeriodEnd?: Maybe<Scalars['timestamptz']>
  currentPeriodStart?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['String']>
}

/** Order by max() on columns of table "stripe_subscription" */
export type StripeSubscriptionMaxOrderBy = {
  cancelAt?: InputMaybe<OrderBy>
  canceledAt?: InputMaybe<OrderBy>
  currentPeriodEnd?: InputMaybe<OrderBy>
  currentPeriodStart?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  quantity?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type StripeSubscriptionMinFields = {
  __typename?: 'StripeSubscriptionMinFields'
  cancelAt?: Maybe<Scalars['timestamptz']>
  canceledAt?: Maybe<Scalars['timestamptz']>
  currentPeriodEnd?: Maybe<Scalars['timestamptz']>
  currentPeriodStart?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  quantity?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['String']>
}

/** Order by min() on columns of table "stripe_subscription" */
export type StripeSubscriptionMinOrderBy = {
  cancelAt?: InputMaybe<OrderBy>
  canceledAt?: InputMaybe<OrderBy>
  currentPeriodEnd?: InputMaybe<OrderBy>
  currentPeriodStart?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  quantity?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "stripe_subscription". */
export type StripeSubscriptionOrderBy = {
  cancelAt?: InputMaybe<OrderBy>
  cancelAtPeriodEnd?: InputMaybe<OrderBy>
  canceledAt?: InputMaybe<OrderBy>
  currentPeriodEnd?: InputMaybe<OrderBy>
  currentPeriodStart?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  quantity?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripePrice?: InputMaybe<StripePriceOrderBy>
}

/** Select columns of table "stripe_subscription" */
export enum StripeSubscriptionSelectColumn {
  /** Column name */
  CancelAt = 'cancelAt',
  /** Column name */
  CancelAtPeriodEnd = 'cancelAtPeriodEnd',
  /** Column name */
  CanceledAt = 'canceledAt',
  /** Column name */
  CurrentPeriodEnd = 'currentPeriodEnd',
  /** Column name */
  CurrentPeriodStart = 'currentPeriodStart',
  /** Column name */
  Description = 'description',
  /** Column name */
  Id = 'id',
  /** Column name */
  Quantity = 'quantity',
  /** Column name */
  Status = 'status',
}

/** Aggregate stddev on columns */
export type StripeSubscriptionStddevFields = {
  __typename?: 'StripeSubscriptionStddevFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "stripe_subscription" */
export type StripeSubscriptionStddevOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Aggregate stddev_pop on columns */
export type StripeSubscriptionStddevPopFields = {
  __typename?: 'StripeSubscriptionStddevPopFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "stripe_subscription" */
export type StripeSubscriptionStddevPopOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Aggregate stddev_samp on columns */
export type StripeSubscriptionStddevSampFields = {
  __typename?: 'StripeSubscriptionStddevSampFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "stripe_subscription" */
export type StripeSubscriptionStddevSampOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Aggregate sum on columns */
export type StripeSubscriptionSumFields = {
  __typename?: 'StripeSubscriptionSumFields'
  quantity?: Maybe<Scalars['Int']>
}

/** Order by sum() on columns of table "stripe_subscription" */
export type StripeSubscriptionSumOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Aggregate var_pop on columns */
export type StripeSubscriptionVarPopFields = {
  __typename?: 'StripeSubscriptionVarPopFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "stripe_subscription" */
export type StripeSubscriptionVarPopOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Aggregate var_samp on columns */
export type StripeSubscriptionVarSampFields = {
  __typename?: 'StripeSubscriptionVarSampFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "stripe_subscription" */
export type StripeSubscriptionVarSampOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

/** Aggregate variance on columns */
export type StripeSubscriptionVarianceFields = {
  __typename?: 'StripeSubscriptionVarianceFields'
  quantity?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "stripe_subscription" */
export type StripeSubscriptionVarianceOrderBy = {
  quantity?: InputMaybe<OrderBy>
}

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput'
  user?: Maybe<User>
  userUid: Scalars['uuid']
}

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput'
  user?: Maybe<User>
  userUid: Scalars['uuid']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

export type TotalBalanceFxBalanceArgs = {
  currency?: InputMaybe<Scalars['String']>
}

export type TotalValueFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>
}

/** Columns and relationships of "trade" */
export type Trade = {
  __typename?: 'Trade'
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  exchange: Exchange
  exchangeUid: Scalars['uuid']
  fee: Scalars['numeric']
  /** A computed field, executes function "trade_fee_fx" */
  feeFx?: Maybe<Scalars['numeric']>
  /** An object relationship */
  order?: Maybe<Order>
  orderUid?: Maybe<Scalars['uuid']>
  price: Scalars['numeric']
  /** A computed field, executes function "trade_price_fx" */
  priceFx?: Maybe<Scalars['numeric']>
  primaryCurrency: Scalars['String']
  secondaryCurrency: Scalars['String']
  timestamp: Scalars['timestamptz']
  totalValue: Scalars['numeric']
  /** A computed field, executes function "trade_total_value_fx" */
  totalValueFx?: Maybe<Scalars['numeric']>
  tradeId: Scalars['String']
  type: Scalars['String']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userUid: Scalars['uuid']
  value: Scalars['numeric']
  /** A computed field, executes function "trade_value_fx" */
  valueFx?: Maybe<Scalars['numeric']>
  volume: Scalars['numeric']
}

/** Columns and relationships of "trade" */
export type TradeFeeFxArgs = {
  args: FeeFxTradeArgs
}

/** Columns and relationships of "trade" */
export type TradePriceFxArgs = {
  args: PriceFxTradeArgs
}

/** Columns and relationships of "trade" */
export type TradeTotalValueFxArgs = {
  args: TotalValueFxTradeArgs
}

/** Columns and relationships of "trade" */
export type TradeValueFxArgs = {
  args: ValueFxTradeArgs
}

/** Aggregated selection of "trade" */
export type TradeAggregate = {
  __typename?: 'TradeAggregate'
  aggregate?: Maybe<TradeAggregateFields>
  nodes: Trade[]
}

/** Aggregate fields of "trade" */
export type TradeAggregateFields = {
  __typename?: 'TradeAggregateFields'
  avg?: Maybe<TradeAvgFields>
  count: Scalars['Int']
  max?: Maybe<TradeMaxFields>
  min?: Maybe<TradeMinFields>
  stddev?: Maybe<TradeStddevFields>
  stddevPop?: Maybe<TradeStddevPopFields>
  stddevSamp?: Maybe<TradeStddevSampFields>
  sum?: Maybe<TradeSumFields>
  varPop?: Maybe<TradeVarPopFields>
  varSamp?: Maybe<TradeVarSampFields>
  variance?: Maybe<TradeVarianceFields>
}

/** Aggregate fields of "trade" */
export type TradeAggregateFieldsCountArgs = {
  columns?: InputMaybe<TradeSelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "trade" */
export type TradeAggregateOrderBy = {
  avg?: InputMaybe<TradeAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<TradeMaxOrderBy>
  min?: InputMaybe<TradeMinOrderBy>
  stddev?: InputMaybe<TradeStddevOrderBy>
  stddev_pop?: InputMaybe<TradeStddevPopOrderBy>
  stddev_samp?: InputMaybe<TradeStddevSampOrderBy>
  sum?: InputMaybe<TradeSumOrderBy>
  var_pop?: InputMaybe<TradeVarPopOrderBy>
  var_samp?: InputMaybe<TradeVarSampOrderBy>
  variance?: InputMaybe<TradeVarianceOrderBy>
}

/** Aggregate avg on columns */
export type TradeAvgFields = {
  __typename?: 'TradeAvgFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "trade" */
export type TradeAvgOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

export type TradeAvgPriceByWindowArgs = {
  currency?: InputMaybe<Scalars['String']>
  group_by?: InputMaybe<Scalars['String']>
}

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type TradeBoolExp = {
  _and?: InputMaybe<TradeBoolExp[]>
  _not?: InputMaybe<TradeBoolExp>
  _or?: InputMaybe<TradeBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  fee?: InputMaybe<NumericComparisonExp>
  order?: InputMaybe<OrderBoolExp>
  orderUid?: InputMaybe<UuidComparisonExp>
  price?: InputMaybe<NumericComparisonExp>
  primaryCurrency?: InputMaybe<StringComparisonExp>
  secondaryCurrency?: InputMaybe<StringComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
  totalValue?: InputMaybe<NumericComparisonExp>
  tradeId?: InputMaybe<StringComparisonExp>
  type?: InputMaybe<StringComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userUid?: InputMaybe<UuidComparisonExp>
  value?: InputMaybe<NumericComparisonExp>
  volume?: InputMaybe<NumericComparisonExp>
}

/** Aggregate max on columns */
export type TradeMaxFields = {
  __typename?: 'TradeMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  exchangeUid?: Maybe<Scalars['uuid']>
  fee?: Maybe<Scalars['numeric']>
  orderUid?: Maybe<Scalars['uuid']>
  price?: Maybe<Scalars['numeric']>
  primaryCurrency?: Maybe<Scalars['String']>
  secondaryCurrency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  totalValue?: Maybe<Scalars['numeric']>
  tradeId?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by max() on columns of table "trade" */
export type TradeMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  fee?: InputMaybe<OrderBy>
  orderUid?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  tradeId?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type TradeMinFields = {
  __typename?: 'TradeMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  exchangeUid?: Maybe<Scalars['uuid']>
  fee?: Maybe<Scalars['numeric']>
  orderUid?: Maybe<Scalars['uuid']>
  price?: Maybe<Scalars['numeric']>
  primaryCurrency?: Maybe<Scalars['String']>
  secondaryCurrency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  totalValue?: Maybe<Scalars['numeric']>
  tradeId?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by min() on columns of table "trade" */
export type TradeMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  fee?: InputMaybe<OrderBy>
  orderUid?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  tradeId?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "trade". */
export type TradeOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  fee?: InputMaybe<OrderBy>
  order?: InputMaybe<OrderOrderBy>
  orderUid?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  secondaryCurrency?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  tradeId?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Select columns of table "trade" */
export enum TradeSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  Fee = 'fee',
  /** Column name */
  OrderUid = 'orderUid',
  /** Column name */
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primaryCurrency',
  /** Column name */
  SecondaryCurrency = 'secondaryCurrency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'totalValue',
  /** Column name */
  TradeId = 'tradeId',
  /** Column name */
  Type = 'type',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserUid = 'userUid',
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Aggregate stddev on columns */
export type TradeStddevFields = {
  __typename?: 'TradeStddevFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "trade" */
export type TradeStddevOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate stddev_pop on columns */
export type TradeStddevPopFields = {
  __typename?: 'TradeStddevPopFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "trade" */
export type TradeStddevPopOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate stddev_samp on columns */
export type TradeStddevSampFields = {
  __typename?: 'TradeStddevSampFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "trade" */
export type TradeStddevSampOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

export type TradeSumByWindowArgs = {
  currency?: InputMaybe<Scalars['String']>
  group_by?: InputMaybe<Scalars['String']>
}

/** Aggregate sum on columns */
export type TradeSumFields = {
  __typename?: 'TradeSumFields'
  fee?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  totalValue?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "trade" */
export type TradeSumOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate var_pop on columns */
export type TradeVarPopFields = {
  __typename?: 'TradeVarPopFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "trade" */
export type TradeVarPopOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate var_samp on columns */
export type TradeVarSampFields = {
  __typename?: 'TradeVarSampFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "trade" */
export type TradeVarSampOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Aggregate variance on columns */
export type TradeVarianceFields = {
  __typename?: 'TradeVarianceFields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  totalValue?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "trade" */
export type TradeVarianceOrderBy = {
  fee?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Columns and relationships of "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindow = {
  __typename?: 'TypeTradeAvgPriceByWindow'
  avgPrice?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  primaryCurrency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  totalValue?: Maybe<Scalars['numeric']>
  userUid?: Maybe<Scalars['uuid']>
  volume?: Maybe<Scalars['numeric']>
}

/** Boolean expression to filter rows from the table "type_trade_avg_price_by_window". All fields are combined with a logical 'AND'. */
export type TypeTradeAvgPriceByWindowBoolExp = {
  _and?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp[]>
  _not?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>
  _or?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp[]>
  avgPrice?: InputMaybe<NumericComparisonExp>
  price?: InputMaybe<NumericComparisonExp>
  primaryCurrency?: InputMaybe<StringComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
  totalValue?: InputMaybe<NumericComparisonExp>
  userUid?: InputMaybe<UuidComparisonExp>
  volume?: InputMaybe<NumericComparisonExp>
}

/** Ordering options when selecting data from "type_trade_avg_price_by_window". */
export type TypeTradeAvgPriceByWindowOrderBy = {
  avgPrice?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  primaryCurrency?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Select columns of table "type_trade_avg_price_by_window" */
export enum TypeTradeAvgPriceByWindowSelectColumn {
  /** Column name */
  AvgPrice = 'avgPrice',
  /** Column name */
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primaryCurrency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'totalValue',
  /** Column name */
  UserUid = 'userUid',
  /** Column name */
  Volume = 'volume',
}

/** Columns and relationships of "type_trade_sum_by_window" */
export type TypeTradeSumByWindow = {
  __typename?: 'TypeTradeSumByWindow'
  primaryCurrency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  totalValue?: Maybe<Scalars['numeric']>
  userUid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Boolean expression to filter rows from the table "type_trade_sum_by_window". All fields are combined with a logical 'AND'. */
export type TypeTradeSumByWindowBoolExp = {
  _and?: InputMaybe<TypeTradeSumByWindowBoolExp[]>
  _not?: InputMaybe<TypeTradeSumByWindowBoolExp>
  _or?: InputMaybe<TypeTradeSumByWindowBoolExp[]>
  primaryCurrency?: InputMaybe<StringComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
  totalValue?: InputMaybe<NumericComparisonExp>
  userUid?: InputMaybe<UuidComparisonExp>
  value?: InputMaybe<NumericComparisonExp>
  volume?: InputMaybe<NumericComparisonExp>
}

/** Ordering options when selecting data from "type_trade_sum_by_window". */
export type TypeTradeSumByWindowOrderBy = {
  primaryCurrency?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  totalValue?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
  value?: InputMaybe<OrderBy>
  volume?: InputMaybe<OrderBy>
}

/** Select columns of table "type_trade_sum_by_window" */
export enum TypeTradeSumByWindowSelectColumn {
  /** Column name */
  PrimaryCurrency = 'primaryCurrency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'totalValue',
  /** Column name */
  UserUid = 'userUid',
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

export type UpdateDcaOrderOutput = {
  __typename?: 'UpdateDcaOrderOutput'
  dcaOrder?: Maybe<DcaOrder>
  dcaOrderUid: Scalars['uuid']
}

export type UpdateSubscriptionOutput = {
  __typename?: 'UpdateSubscriptionOutput'
  stripeSubscription?: Maybe<StripeSubscription>
  subscriptionId: Scalars['String']
}

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput'
  userExchangeKeys?: Maybe<UserExchangeKeys>
  userExchangeKeysUid: Scalars['uuid']
}

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput'
  user?: Maybe<User>
  userUid: Scalars['uuid']
}

/** Columns and relationships of "user" */
export type User = {
  __typename?: 'User'
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  dcaOrderHistories: DcaOrderHistory[]
  /** An aggregate relationship */
  dcaOrderHistoriesAggregate: DcaOrderHistoryAggregate
  /** An array relationship */
  dcaOrders: DcaOrder[]
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate
  emailVerified: Scalars['Boolean']
  /** An array relationship */
  orders: Order[]
  /** An aggregate relationship */
  ordersAggregate: OrderAggregate
  timezone: Scalars['String']
  /** An array relationship */
  trades: Trade[]
  /** An aggregate relationship */
  tradesAggregate: TradeAggregate
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user2fa?: Maybe<User2fa>
  /** An array relationship */
  userDevices: UserDevice[]
  /** An aggregate relationship */
  userDevicesAggregate: UserDeviceAggregate
  /** An array relationship */
  userExchangeKeys: UserExchangeKeys[]
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate
}

/** Columns and relationships of "user" */
export type UserDcaOrderHistoriesArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

/** Columns and relationships of "user" */
export type UserDcaOrderHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

/** Columns and relationships of "user" */
export type UserDcaOrdersArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "user" */
export type UserDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "user" */
export type UserOrdersArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

/** Columns and relationships of "user" */
export type UserOrdersAggregateArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

/** Columns and relationships of "user" */
export type UserTradesArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

/** Columns and relationships of "user" */
export type UserTradesAggregateArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

/** Columns and relationships of "user" */
export type UserUserDevicesArgs = {
  distinctOn?: InputMaybe<UserDeviceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserDeviceOrderBy[]>
  where?: InputMaybe<UserDeviceBoolExp>
}

/** Columns and relationships of "user" */
export type UserUserDevicesAggregateArgs = {
  distinctOn?: InputMaybe<UserDeviceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserDeviceOrderBy[]>
  where?: InputMaybe<UserDeviceBoolExp>
}

/** Columns and relationships of "user" */
export type UserUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

/** Columns and relationships of "user" */
export type UserUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

/** Columns and relationships of "user_2fa" */
export type User2fa = {
  __typename?: 'User2fa'
  createdAt: Scalars['timestamptz']
  name: Scalars['String']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userUid: Scalars['uuid']
}

/** Boolean expression to filter rows from the table "user_2fa". All fields are combined with a logical 'AND'. */
export type User2faBoolExp = {
  _and?: InputMaybe<User2faBoolExp[]>
  _not?: InputMaybe<User2faBoolExp>
  _or?: InputMaybe<User2faBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userUid?: InputMaybe<UuidComparisonExp>
}

/** Ordering options when selecting data from "user_2fa". */
export type User2faOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Select columns of table "user_2fa" */
export enum User2faSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserUid = 'userUid',
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<UserBoolExp[]>
  _not?: InputMaybe<UserBoolExp>
  _or?: InputMaybe<UserBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>
  dcaOrders?: InputMaybe<DcaOrderBoolExp>
  emailVerified?: InputMaybe<BooleanComparisonExp>
  orders?: InputMaybe<OrderBoolExp>
  timezone?: InputMaybe<StringComparisonExp>
  trades?: InputMaybe<TradeBoolExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user2fa?: InputMaybe<User2faBoolExp>
  userDevices?: InputMaybe<UserDeviceBoolExp>
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>
}

/** Columns and relationships of "user_device" */
export type UserDevice = {
  __typename?: 'UserDevice'
  accessedAt: Scalars['timestamptz']
  createdAt: Scalars['timestamptz']
  name: Scalars['String']
  trusted: Scalars['Boolean']
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  userUid: Scalars['uuid']
}

/** Aggregated selection of "user_device" */
export type UserDeviceAggregate = {
  __typename?: 'UserDeviceAggregate'
  aggregate?: Maybe<UserDeviceAggregateFields>
  nodes: UserDevice[]
}

/** Aggregate fields of "user_device" */
export type UserDeviceAggregateFields = {
  __typename?: 'UserDeviceAggregateFields'
  count: Scalars['Int']
  max?: Maybe<UserDeviceMaxFields>
  min?: Maybe<UserDeviceMinFields>
}

/** Aggregate fields of "user_device" */
export type UserDeviceAggregateFieldsCountArgs = {
  columns?: InputMaybe<UserDeviceSelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "user_device" */
export type UserDeviceAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<UserDeviceMaxOrderBy>
  min?: InputMaybe<UserDeviceMinOrderBy>
}

/** Boolean expression to filter rows from the table "user_device". All fields are combined with a logical 'AND'. */
export type UserDeviceBoolExp = {
  _and?: InputMaybe<UserDeviceBoolExp[]>
  _not?: InputMaybe<UserDeviceBoolExp>
  _or?: InputMaybe<UserDeviceBoolExp[]>
  accessedAt?: InputMaybe<TimestamptzComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  trusted?: InputMaybe<BooleanComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  userUid?: InputMaybe<UuidComparisonExp>
}

/** Aggregate max on columns */
export type UserDeviceMaxFields = {
  __typename?: 'UserDeviceMaxFields'
  accessedAt?: Maybe<Scalars['timestamptz']>
  createdAt?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "user_device" */
export type UserDeviceMaxOrderBy = {
  accessedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type UserDeviceMinFields = {
  __typename?: 'UserDeviceMinFields'
  accessedAt?: Maybe<Scalars['timestamptz']>
  createdAt?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "user_device" */
export type UserDeviceMinOrderBy = {
  accessedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Response of any mutation on the table "user_device" */
export type UserDeviceMutationResponse = {
  __typename?: 'UserDeviceMutationResponse'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: UserDevice[]
}

/** Ordering options when selecting data from "user_device". */
export type UserDeviceOrderBy = {
  accessedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  trusted?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Primary key columns input for table: user_device */
export type UserDevicePkColumnsInput = {
  uid: Scalars['uuid']
}

/** Select columns of table "user_device" */
export enum UserDeviceSelectColumn {
  /** Column name */
  AccessedAt = 'accessedAt',
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  Name = 'name',
  /** Column name */
  Trusted = 'trusted',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserUid = 'userUid',
}

/** Input type for updating data in table "user_device" */
export type UserDeviceSetInput = {
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

export type UserDeviceUpdates = {
  /** Sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserDeviceSetInput>
  where: UserDeviceBoolExp
}

/** Columns and relationships of "user_exchange_keys" */
export type UserExchangeKeys = {
  __typename?: 'UserExchangeKeys'
  /** A computed field, executes function "user_exchange_keys_balance" */
  balance?: Maybe<Balance[]>
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  dcaOrders: DcaOrder[]
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate
  description: Scalars['String']
  /** An object relationship */
  exchange: Exchange
  exchangeUid: Scalars['uuid']
  invalidatedAt?: Maybe<Scalars['timestamptz']>
  uid: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userUid: Scalars['uuid']
}

/** Columns and relationships of "user_exchange_keys" */
export type UserExchangeKeysBalanceArgs = {
  args: BalanceUserExchangeKeysArgs
  distinctOn?: InputMaybe<BalanceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BalanceOrderBy[]>
  where?: InputMaybe<BalanceBoolExp>
}

/** Columns and relationships of "user_exchange_keys" */
export type UserExchangeKeysDcaOrdersArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Columns and relationships of "user_exchange_keys" */
export type UserExchangeKeysDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

/** Aggregated selection of "user_exchange_keys" */
export type UserExchangeKeysAggregate = {
  __typename?: 'UserExchangeKeysAggregate'
  aggregate?: Maybe<UserExchangeKeysAggregateFields>
  nodes: UserExchangeKeys[]
}

/** Aggregate fields of "user_exchange_keys" */
export type UserExchangeKeysAggregateFields = {
  __typename?: 'UserExchangeKeysAggregateFields'
  count: Scalars['Int']
  max?: Maybe<UserExchangeKeysMaxFields>
  min?: Maybe<UserExchangeKeysMinFields>
}

/** Aggregate fields of "user_exchange_keys" */
export type UserExchangeKeysAggregateFieldsCountArgs = {
  columns?: InputMaybe<UserExchangeKeysSelectColumn[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "user_exchange_keys" */
export type UserExchangeKeysAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<UserExchangeKeysMaxOrderBy>
  min?: InputMaybe<UserExchangeKeysMinOrderBy>
}

/** Boolean expression to filter rows from the table "user_exchange_keys". All fields are combined with a logical 'AND'. */
export type UserExchangeKeysBoolExp = {
  _and?: InputMaybe<UserExchangeKeysBoolExp[]>
  _not?: InputMaybe<UserExchangeKeysBoolExp>
  _or?: InputMaybe<UserExchangeKeysBoolExp[]>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  dcaOrders?: InputMaybe<DcaOrderBoolExp>
  description?: InputMaybe<StringComparisonExp>
  exchange?: InputMaybe<ExchangeBoolExp>
  exchangeUid?: InputMaybe<UuidComparisonExp>
  invalidatedAt?: InputMaybe<TimestamptzComparisonExp>
  uid?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userUid?: InputMaybe<UuidComparisonExp>
}

/** Aggregate max on columns */
export type UserExchangeKeysMaxFields = {
  __typename?: 'UserExchangeKeysMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  exchangeUid?: Maybe<Scalars['uuid']>
  invalidatedAt?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "user_exchange_keys" */
export type UserExchangeKeysMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  invalidatedAt?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Aggregate min on columns */
export type UserExchangeKeysMinFields = {
  __typename?: 'UserExchangeKeysMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  exchangeUid?: Maybe<Scalars['uuid']>
  invalidatedAt?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userUid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "user_exchange_keys" */
export type UserExchangeKeysMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  invalidatedAt?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Response of any mutation on the table "user_exchange_keys" */
export type UserExchangeKeysMutationResponse = {
  __typename?: 'UserExchangeKeysMutationResponse'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: UserExchangeKeys[]
}

/** Ordering options when selecting data from "user_exchange_keys". */
export type UserExchangeKeysOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>
  description?: InputMaybe<OrderBy>
  exchange?: InputMaybe<ExchangeOrderBy>
  exchangeUid?: InputMaybe<OrderBy>
  invalidatedAt?: InputMaybe<OrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userUid?: InputMaybe<OrderBy>
}

/** Select columns of table "user_exchange_keys" */
export enum UserExchangeKeysSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  Description = 'description',
  /** Column name */
  ExchangeUid = 'exchangeUid',
  /** Column name */
  InvalidatedAt = 'invalidatedAt',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
  /** Column name */
  UserUid = 'userUid',
}

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>
  emailVerified?: InputMaybe<OrderBy>
  ordersAggregate?: InputMaybe<OrderAggregateOrderBy>
  timezone?: InputMaybe<OrderBy>
  tradesAggregate?: InputMaybe<TradeAggregateOrderBy>
  uid?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user2fa?: InputMaybe<User2faOrderBy>
  userDevicesAggregate?: InputMaybe<UserDeviceAggregateOrderBy>
  userExchangeKeysAggregate?: InputMaybe<UserExchangeKeysAggregateOrderBy>
}

/** Select columns of table "user" */
export enum UserSelectColumn {
  /** Column name */
  CreatedAt = 'createdAt',
  /** Column name */
  EmailVerified = 'emailVerified',
  /** Column name */
  Timezone = 'timezone',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updatedAt',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type ValidatUserPasswordResetOutput = {
  __typename?: 'ValidatUserPasswordResetOutput'
  email?: Maybe<Scalars['String']>
  isValid: Scalars['Boolean']
}

export type ValidateUserExchangeKeysLiveOutput = {
  __typename?: 'ValidateUserExchangeKeysLiveOutput'
  isValid: Scalars['Boolean']
  validationMessage?: Maybe<Scalars['String']>
}

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput'
  isValid: Scalars['Boolean']
  userExchangeKeys?: Maybe<UserExchangeKeys>
  userExchangeKeysUid: Scalars['uuid']
  validationMessage?: Maybe<Scalars['String']>
}

export type ValueFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>
}

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput'
  email: Scalars['String']
}

/** Mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  actionCreateAuthToken?: Maybe<CreateAuthTokenOutput>
  actionCreateDcaOrder?: Maybe<CreateDcaOrderResult>
  actionCreateStripeSubscription: CreateStripeSubscription
  actionCreateUser?: Maybe<CreateUserOutput>
  actionCreateUserExchangeKeys?: Maybe<CreateUserExchangeKeysOutput>
  actionEnableUser2fa?: Maybe<EnableUser2FaOutput>
  actionRefreshAuthToken?: Maybe<RefreshAuthTokenOutput>
  actionResetUserPassword: ResetUserPasswordOutput
  actionSendUserEmailVerify: SendUserEmailVerifyOutput
  actionSendUserPasswordReset: SendUserPasswordResetOutput
  actionSyncExchangeOpenOrderList?: Maybe<SyncExchangeOpenOrderListOutput>
  actionSyncExchangeTradeList?: Maybe<SyncExchangeTradeListOutput>
  actionUpdateDcaOrder: UpdateDcaOrderOutput
  actionUpdateStripeSubscription: UpdateSubscriptionOutput
  actionUpdateUser: UpdateUserOutput
  actionUpdateUserExchangeKeys?: Maybe<UpdateUserExchangeKeysOutput>
  actionValidateUserExchangeKeys?: Maybe<ValidateUserExchangeKeysOutput>
  actionValidateUserExchangeKeysLive?: Maybe<ValidateUserExchangeKeysLiveOutput>
  actionValidateUserPasswordReset: ValidatUserPasswordResetOutput
  actionVerifyUserEmail: VerifyUserEmailOutput
  /** Delete data from the table: "dca_order" */
  deleteDcaOrder?: Maybe<DcaOrderMutationResponse>
  /** Delete single row from the table: "dca_order" */
  deleteDcaOrderByPk?: Maybe<DcaOrder>
  /** Delete data from the table: "user_device" */
  deleteUserDevice?: Maybe<UserDeviceMutationResponse>
  /** Delete single row from the table: "user_device" */
  deleteUserDeviceByPk?: Maybe<UserDevice>
  /** Delete data from the table: "user_exchange_keys" */
  deleteUserExchangeKeys?: Maybe<UserExchangeKeysMutationResponse>
  /** Delete single row from the table: "user_exchange_keys" */
  deleteUserExchangeKeysByPk?: Maybe<UserExchangeKeys>
  /** Update data of the table: "dca_order" */
  updateDcaOrder?: Maybe<DcaOrderMutationResponse>
  /** Update single row of the table: "dca_order" */
  updateDcaOrderByPk?: Maybe<DcaOrder>
  /** Update multiples rows of table: "dca_order" */
  updateDcaOrderMany?: Maybe<Array<Maybe<DcaOrderMutationResponse>>>
  /** Update data of the table: "user_device" */
  updateUserDevice?: Maybe<UserDeviceMutationResponse>
  /** Update single row of the table: "user_device" */
  updateUserDeviceByPk?: Maybe<UserDevice>
  /** Update multiples rows of table: "user_device" */
  updateUserDeviceMany?: Maybe<Array<Maybe<UserDeviceMutationResponse>>>
}

/** Mutation root */
export type Mutation_RootActionCreateAuthTokenArgs = {
  deviceId: Scalars['String']
  deviceName: Scalars['String']
  deviceTrusted: Scalars['Boolean']
  email: Scalars['String']
  password: Scalars['String']
  role: Scalars['String']
  token2fa?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootActionCreateDcaOrderArgs = {
  dailyAverage: Scalars['Float']
  intervalMs: Scalars['Int']
  marketOffset: Scalars['Float']
  marketUid: Scalars['uuid']
  maxPrice?: InputMaybe<Scalars['Float']>
  maxValue?: InputMaybe<Scalars['Float']>
  minPrice?: InputMaybe<Scalars['Float']>
  minValue?: InputMaybe<Scalars['Float']>
  primaryCurrency: Scalars['String']
  secondaryCurrency: Scalars['String']
  startAt: Scalars['timestamp']
  userExchangeKeysUid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootActionCreateStripeSubscriptionArgs = {
  priceId?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootActionCreateUserArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

/** Mutation root */
export type Mutation_RootActionCreateUserExchangeKeysArgs = {
  description: Scalars['String']
  exchangeUid: Scalars['uuid']
  keys: Scalars['jsonb']
}

/** Mutation root */
export type Mutation_RootActionEnableUser2faArgs = {
  name: Scalars['String']
  secret: Scalars['String']
  token: Scalars['String']
}

/** Mutation root */
export type Mutation_RootActionResetUserPasswordArgs = {
  deviceId: Scalars['String']
  deviceName: Scalars['String']
  deviceTrusted: Scalars['Boolean']
  newPassword: Scalars['String']
  passwordResetSecret: Scalars['String']
  token2fa?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootActionSendUserPasswordResetArgs = {
  email: Scalars['String']
}

/** Mutation root */
export type Mutation_RootActionSyncExchangeOpenOrderListArgs = {
  userExchangeKeysUid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootActionSyncExchangeTradeListArgs = {
  forceSync?: InputMaybe<Scalars['Boolean']>
  userExchangeKeysUid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootActionUpdateDcaOrderArgs = {
  dcaOrderUid: Scalars['uuid']
  enabled: Scalars['Boolean']
}

/** Mutation root */
export type Mutation_RootActionUpdateStripeSubscriptionArgs = {
  cancelAtPeriodEnd: Scalars['Boolean']
  subscriptionId: Scalars['String']
}

/** Mutation root */
export type Mutation_RootActionUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootActionUpdateUserExchangeKeysArgs = {
  description?: InputMaybe<Scalars['String']>
  keys?: InputMaybe<Scalars['jsonb']>
  userExchangeKeysUid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootActionValidateUserExchangeKeysArgs = {
  userExchangeKeysUid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootActionValidateUserExchangeKeysLiveArgs = {
  exchangeUid: Scalars['uuid']
  keys: Scalars['jsonb']
}

/** Mutation root */
export type Mutation_RootActionValidateUserPasswordResetArgs = {
  passwordResetSecret: Scalars['String']
}

/** Mutation root */
export type Mutation_RootActionVerifyUserEmailArgs = {
  emailVerifySecret: Scalars['String']
}

/** Mutation root */
export type Mutation_RootDeleteDcaOrderArgs = {
  where: DcaOrderBoolExp
}

/** Mutation root */
export type Mutation_RootDeleteDcaOrderByPkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDeleteUserDeviceArgs = {
  where: UserDeviceBoolExp
}

/** Mutation root */
export type Mutation_RootDeleteUserDeviceByPkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDeleteUserExchangeKeysArgs = {
  where: UserExchangeKeysBoolExp
}

/** Mutation root */
export type Mutation_RootDeleteUserExchangeKeysByPkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootUpdateDcaOrderArgs = {
  _inc?: InputMaybe<DcaOrderIncInput>
  _set?: InputMaybe<DcaOrderSetInput>
  where: DcaOrderBoolExp
}

/** Mutation root */
export type Mutation_RootUpdateDcaOrderByPkArgs = {
  _inc?: InputMaybe<DcaOrderIncInput>
  _set?: InputMaybe<DcaOrderSetInput>
  pk_columns: DcaOrderPkColumnsInput
}

/** Mutation root */
export type Mutation_RootUpdateDcaOrderManyArgs = {
  updates: DcaOrderUpdates[]
}

/** Mutation root */
export type Mutation_RootUpdateUserDeviceArgs = {
  _set?: InputMaybe<UserDeviceSetInput>
  where: UserDeviceBoolExp
}

/** Mutation root */
export type Mutation_RootUpdateUserDeviceByPkArgs = {
  _set?: InputMaybe<UserDeviceSetInput>
  pk_columns: UserDevicePkColumnsInput
}

/** Mutation root */
export type Mutation_RootUpdateUserDeviceManyArgs = {
  updates: UserDeviceUpdates[]
}

export type Query_Root = {
  __typename?: 'query_root'
  /** Query information about a Stripe Subscription (direct from Stripe) */
  actionQueryLiveStripeSubscription: QueryLiveStripeSubscriptionOutput
  actionQueryStripeConfig: QueryStripeConfigOutput
  actionQueryUserLimit?: Maybe<QueryUserLimitOutput>
  actionSetupUser2fa?: Maybe<SetupUser2FaOutput>
  /** Fetch data from the table: "balance" */
  balance: Balance[]
  /** Fetch data from the table: "balance" using primary key columns */
  balanceByPk?: Maybe<Balance>
  /** Fetch data from the table: "currency" */
  currency: Currency[]
  /** Fetch data from the table: "currency" using primary key columns */
  currencyByPk?: Maybe<Currency>
  /** Fetch data from the table: "dca_order" */
  dcaOrder: DcaOrder[]
  /** Fetch aggregated fields from the table: "dca_order" */
  dcaOrderAggregate: DcaOrderAggregate
  /** Fetch data from the table: "dca_order" using primary key columns */
  dcaOrderByPk?: Maybe<DcaOrder>
  /** Fetch data from the table: "dca_order_history" */
  dcaOrderHistory: DcaOrderHistory[]
  /** Fetch aggregated fields from the table: "dca_order_history" */
  dcaOrderHistoryAggregate: DcaOrderHistoryAggregate
  /** Fetch data from the table: "dca_order_history" using primary key columns */
  dcaOrderHistoryByPk?: Maybe<DcaOrderHistory>
  /** Fetch data from the table: "exchange" */
  exchange: Exchange[]
  /** Fetch data from the table: "exchange" using primary key columns */
  exchangeByPk?: Maybe<Exchange>
  /** Fetch data from the table: "exchange_primary_currency" */
  exchangePrimaryCurrency: ExchangePrimaryCurrency[]
  /** Fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>
  /** Fetch data from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrency: ExchangeSecondaryCurrency[]
  /** Fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>
  /** Fetch data from the table: "market" */
  market: Market[]
  /** Fetch data from the table: "market" using primary key columns */
  marketByPk?: Maybe<Market>
  /** Fetch data from the table: "market_price" */
  marketPrice: MarketPrice[]
  /** Fetch data from the table: "market_price" using primary key columns */
  marketPriceByPk?: Maybe<MarketPrice>
  /** Execute function "market_price_latest" which returns "market_price" */
  marketPriceLatest: MarketPrice[]
  /** Fetch data from the table: "market_trading_pair" */
  marketTradingPair: MarketTradingPair[]
  /** Fetch data from the table: "order" */
  order: Order[]
  /** Fetch aggregated fields from the table: "order" */
  orderAggregate: OrderAggregate
  /** Fetch data from the table: "order" using primary key columns */
  orderByPk?: Maybe<Order>
  /** Fetch data from the table: "stripe_price" */
  stripePrice: StripePrice[]
  /** Fetch data from the table: "stripe_price" using primary key columns */
  stripePriceByPk?: Maybe<StripePrice>
  /** Fetch data from the table: "stripe_product" */
  stripeProduct: StripeProduct[]
  /** Fetch data from the table: "stripe_product" using primary key columns */
  stripeProductByPk?: Maybe<StripeProduct>
  /** Fetch data from the table: "stripe_subscription" */
  stripeSubscription: StripeSubscription[]
  /** Fetch aggregated fields from the table: "stripe_subscription" */
  stripeSubscriptionAggregate: StripeSubscriptionAggregate
  /** Fetch data from the table: "stripe_subscription" using primary key columns */
  stripeSubscriptionByPk?: Maybe<StripeSubscription>
  /** Fetch data from the table: "trade" */
  trade: Trade[]
  /** Fetch aggregated fields from the table: "trade" */
  tradeAggregate: TradeAggregate
  /** Execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  tradeAvgPriceByWindow: TypeTradeAvgPriceByWindow[]
  /** Fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>
  /** Execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  tradeSumByWindow: TypeTradeSumByWindow[]
  /** Fetch data from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindow: TypeTradeAvgPriceByWindow[]
  /** Fetch data from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindow: TypeTradeSumByWindow[]
  /** Fetch data from the table: "user" */
  user: User[]
  /** Fetch data from the table: "user_2fa" */
  user2fa: User2fa[]
  /** Fetch data from the table: "user_2fa" using primary key columns */
  user2faByPk?: Maybe<User2fa>
  /** Fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>
  /** Fetch data from the table: "user_device" */
  userDevice: UserDevice[]
  /** Fetch aggregated fields from the table: "user_device" */
  userDeviceAggregate: UserDeviceAggregate
  /** Fetch data from the table: "user_device" using primary key columns */
  userDeviceByPk?: Maybe<UserDevice>
  /** An array relationship */
  userExchangeKeys: UserExchangeKeys[]
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate
  /** Fetch data from the table: "user_exchange_keys" using primary key columns */
  userExchangeKeysByPk?: Maybe<UserExchangeKeys>
}

export type Query_RootActionQueryLiveStripeSubscriptionArgs = {
  subscriptionId: Scalars['String']
}

export type Query_RootBalanceArgs = {
  distinctOn?: InputMaybe<BalanceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BalanceOrderBy[]>
  where?: InputMaybe<BalanceBoolExp>
}

export type Query_RootBalanceByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootCurrencyArgs = {
  distinctOn?: InputMaybe<CurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<CurrencyOrderBy[]>
  where?: InputMaybe<CurrencyBoolExp>
}

export type Query_RootCurrencyByPkArgs = {
  symbol: Scalars['String']
}

export type Query_RootDcaOrderArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

export type Query_RootDcaOrderAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

export type Query_RootDcaOrderByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootDcaOrderHistoryArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

export type Query_RootDcaOrderHistoryAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

export type Query_RootDcaOrderHistoryByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootExchangeArgs = {
  distinctOn?: InputMaybe<ExchangeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangeOrderBy[]>
  where?: InputMaybe<ExchangeBoolExp>
}

export type Query_RootExchangeByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootExchangePrimaryCurrencyArgs = {
  distinctOn?: InputMaybe<ExchangePrimaryCurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangePrimaryCurrencyOrderBy[]>
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>
}

export type Query_RootExchangePrimaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Query_RootExchangeSecondaryCurrencyArgs = {
  distinctOn?: InputMaybe<ExchangeSecondaryCurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangeSecondaryCurrencyOrderBy[]>
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>
}

export type Query_RootExchangeSecondaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Query_RootMarketArgs = {
  distinctOn?: InputMaybe<MarketSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketOrderBy[]>
  where?: InputMaybe<MarketBoolExp>
}

export type Query_RootMarketByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootMarketPriceArgs = {
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

export type Query_RootMarketPriceByPkArgs = {
  assetSymbol: Scalars['String']
  currency: Scalars['String']
  marketUid: Scalars['uuid']
  sourceCurrency: Scalars['bpchar']
  timestamp: Scalars['timestamptz']
}

export type Query_RootMarketPriceLatestArgs = {
  args: MarketPriceLatestArgs
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

export type Query_RootMarketTradingPairArgs = {
  distinctOn?: InputMaybe<MarketTradingPairSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketTradingPairOrderBy[]>
  where?: InputMaybe<MarketTradingPairBoolExp>
}

export type Query_RootOrderArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

export type Query_RootOrderAggregateArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

export type Query_RootOrderByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootStripePriceArgs = {
  distinctOn?: InputMaybe<StripePriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripePriceOrderBy[]>
  where?: InputMaybe<StripePriceBoolExp>
}

export type Query_RootStripePriceByPkArgs = {
  id: Scalars['String']
}

export type Query_RootStripeProductArgs = {
  distinctOn?: InputMaybe<StripeProductSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeProductOrderBy[]>
  where?: InputMaybe<StripeProductBoolExp>
}

export type Query_RootStripeProductByPkArgs = {
  id: Scalars['String']
}

export type Query_RootStripeSubscriptionArgs = {
  distinctOn?: InputMaybe<StripeSubscriptionSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeSubscriptionOrderBy[]>
  where?: InputMaybe<StripeSubscriptionBoolExp>
}

export type Query_RootStripeSubscriptionAggregateArgs = {
  distinctOn?: InputMaybe<StripeSubscriptionSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeSubscriptionOrderBy[]>
  where?: InputMaybe<StripeSubscriptionBoolExp>
}

export type Query_RootStripeSubscriptionByPkArgs = {
  id: Scalars['String']
}

export type Query_RootTradeArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

export type Query_RootTradeAggregateArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

export type Query_RootTradeAvgPriceByWindowArgs = {
  args: TradeAvgPriceByWindowArgs
  distinctOn?: InputMaybe<TypeTradeAvgPriceByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeAvgPriceByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>
}

export type Query_RootTradeByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootTradeSumByWindowArgs = {
  args: TradeSumByWindowArgs
  distinctOn?: InputMaybe<TypeTradeSumByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeSumByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>
}

export type Query_RootTypeTradeAvgPriceByWindowArgs = {
  distinctOn?: InputMaybe<TypeTradeAvgPriceByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeAvgPriceByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>
}

export type Query_RootTypeTradeSumByWindowArgs = {
  distinctOn?: InputMaybe<TypeTradeSumByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeSumByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>
}

export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<UserSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserOrderBy[]>
  where?: InputMaybe<UserBoolExp>
}

export type Query_RootUser2faArgs = {
  distinctOn?: InputMaybe<User2faSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User2faOrderBy[]>
  where?: InputMaybe<User2faBoolExp>
}

export type Query_RootUser2faByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootUserByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootUserDeviceArgs = {
  distinctOn?: InputMaybe<UserDeviceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserDeviceOrderBy[]>
  where?: InputMaybe<UserDeviceBoolExp>
}

export type Query_RootUserDeviceAggregateArgs = {
  distinctOn?: InputMaybe<UserDeviceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserDeviceOrderBy[]>
  where?: InputMaybe<UserDeviceBoolExp>
}

export type Query_RootUserDeviceByPkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

export type Query_RootUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

export type Query_RootUserExchangeKeysByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** Fetch data from the table: "balance" */
  balance: Balance[]
  /** Fetch data from the table: "balance" using primary key columns */
  balanceByPk?: Maybe<Balance>
  /** Fetch data from the table: "currency" */
  currency: Currency[]
  /** Fetch data from the table: "currency" using primary key columns */
  currencyByPk?: Maybe<Currency>
  /** Fetch data from the table: "dca_order" */
  dcaOrder: DcaOrder[]
  /** Fetch aggregated fields from the table: "dca_order" */
  dcaOrderAggregate: DcaOrderAggregate
  /** Fetch data from the table: "dca_order" using primary key columns */
  dcaOrderByPk?: Maybe<DcaOrder>
  /** Fetch data from the table: "dca_order_history" */
  dcaOrderHistory: DcaOrderHistory[]
  /** Fetch aggregated fields from the table: "dca_order_history" */
  dcaOrderHistoryAggregate: DcaOrderHistoryAggregate
  /** Fetch data from the table: "dca_order_history" using primary key columns */
  dcaOrderHistoryByPk?: Maybe<DcaOrderHistory>
  /** Fetch data from the table: "exchange" */
  exchange: Exchange[]
  /** Fetch data from the table: "exchange" using primary key columns */
  exchangeByPk?: Maybe<Exchange>
  /** Fetch data from the table: "exchange_primary_currency" */
  exchangePrimaryCurrency: ExchangePrimaryCurrency[]
  /** Fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>
  /** Fetch data from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrency: ExchangeSecondaryCurrency[]
  /** Fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>
  /** Fetch data from the table: "market" */
  market: Market[]
  /** Fetch data from the table: "market" using primary key columns */
  marketByPk?: Maybe<Market>
  /** Fetch data from the table: "market_price" */
  marketPrice: MarketPrice[]
  /** Fetch data from the table: "market_price" using primary key columns */
  marketPriceByPk?: Maybe<MarketPrice>
  /** Execute function "market_price_latest" which returns "market_price" */
  marketPriceLatest: MarketPrice[]
  /** Fetch data from the table: "market_trading_pair" */
  marketTradingPair: MarketTradingPair[]
  /** Fetch data from the table: "order" */
  order: Order[]
  /** Fetch aggregated fields from the table: "order" */
  orderAggregate: OrderAggregate
  /** Fetch data from the table: "order" using primary key columns */
  orderByPk?: Maybe<Order>
  /** Fetch data from the table: "stripe_price" */
  stripePrice: StripePrice[]
  /** Fetch data from the table: "stripe_price" using primary key columns */
  stripePriceByPk?: Maybe<StripePrice>
  /** Fetch data from the table: "stripe_product" */
  stripeProduct: StripeProduct[]
  /** Fetch data from the table: "stripe_product" using primary key columns */
  stripeProductByPk?: Maybe<StripeProduct>
  /** Fetch data from the table: "stripe_subscription" */
  stripeSubscription: StripeSubscription[]
  /** Fetch aggregated fields from the table: "stripe_subscription" */
  stripeSubscriptionAggregate: StripeSubscriptionAggregate
  /** Fetch data from the table: "stripe_subscription" using primary key columns */
  stripeSubscriptionByPk?: Maybe<StripeSubscription>
  /** Fetch data from the table: "trade" */
  trade: Trade[]
  /** Fetch aggregated fields from the table: "trade" */
  tradeAggregate: TradeAggregate
  /** Execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  tradeAvgPriceByWindow: TypeTradeAvgPriceByWindow[]
  /** Fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>
  /** Execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  tradeSumByWindow: TypeTradeSumByWindow[]
  /** Fetch data from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindow: TypeTradeAvgPriceByWindow[]
  /** Fetch data from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindow: TypeTradeSumByWindow[]
  /** Fetch data from the table: "user" */
  user: User[]
  /** Fetch data from the table: "user_2fa" */
  user2fa: User2fa[]
  /** Fetch data from the table: "user_2fa" using primary key columns */
  user2faByPk?: Maybe<User2fa>
  /** Fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>
  /** Fetch data from the table: "user_device" */
  userDevice: UserDevice[]
  /** Fetch aggregated fields from the table: "user_device" */
  userDeviceAggregate: UserDeviceAggregate
  /** Fetch data from the table: "user_device" using primary key columns */
  userDeviceByPk?: Maybe<UserDevice>
  /** An array relationship */
  userExchangeKeys: UserExchangeKeys[]
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate
  /** Fetch data from the table: "user_exchange_keys" using primary key columns */
  userExchangeKeysByPk?: Maybe<UserExchangeKeys>
}

export type Subscription_RootBalanceArgs = {
  distinctOn?: InputMaybe<BalanceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BalanceOrderBy[]>
  where?: InputMaybe<BalanceBoolExp>
}

export type Subscription_RootBalanceByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootCurrencyArgs = {
  distinctOn?: InputMaybe<CurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<CurrencyOrderBy[]>
  where?: InputMaybe<CurrencyBoolExp>
}

export type Subscription_RootCurrencyByPkArgs = {
  symbol: Scalars['String']
}

export type Subscription_RootDcaOrderArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

export type Subscription_RootDcaOrderAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderOrderBy[]>
  where?: InputMaybe<DcaOrderBoolExp>
}

export type Subscription_RootDcaOrderByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootDcaOrderHistoryArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

export type Subscription_RootDcaOrderHistoryAggregateArgs = {
  distinctOn?: InputMaybe<DcaOrderHistorySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DcaOrderHistoryOrderBy[]>
  where?: InputMaybe<DcaOrderHistoryBoolExp>
}

export type Subscription_RootDcaOrderHistoryByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootExchangeArgs = {
  distinctOn?: InputMaybe<ExchangeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangeOrderBy[]>
  where?: InputMaybe<ExchangeBoolExp>
}

export type Subscription_RootExchangeByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootExchangePrimaryCurrencyArgs = {
  distinctOn?: InputMaybe<ExchangePrimaryCurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangePrimaryCurrencyOrderBy[]>
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>
}

export type Subscription_RootExchangePrimaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Subscription_RootExchangeSecondaryCurrencyArgs = {
  distinctOn?: InputMaybe<ExchangeSecondaryCurrencySelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ExchangeSecondaryCurrencyOrderBy[]>
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>
}

export type Subscription_RootExchangeSecondaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Subscription_RootMarketArgs = {
  distinctOn?: InputMaybe<MarketSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketOrderBy[]>
  where?: InputMaybe<MarketBoolExp>
}

export type Subscription_RootMarketByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootMarketPriceArgs = {
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

export type Subscription_RootMarketPriceByPkArgs = {
  assetSymbol: Scalars['String']
  currency: Scalars['String']
  marketUid: Scalars['uuid']
  sourceCurrency: Scalars['bpchar']
  timestamp: Scalars['timestamptz']
}

export type Subscription_RootMarketPriceLatestArgs = {
  args: MarketPriceLatestArgs
  distinctOn?: InputMaybe<MarketPriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketPriceOrderBy[]>
  where?: InputMaybe<MarketPriceBoolExp>
}

export type Subscription_RootMarketTradingPairArgs = {
  distinctOn?: InputMaybe<MarketTradingPairSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MarketTradingPairOrderBy[]>
  where?: InputMaybe<MarketTradingPairBoolExp>
}

export type Subscription_RootOrderArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

export type Subscription_RootOrderAggregateArgs = {
  distinctOn?: InputMaybe<OrderSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OrderOrderBy[]>
  where?: InputMaybe<OrderBoolExp>
}

export type Subscription_RootOrderByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootStripePriceArgs = {
  distinctOn?: InputMaybe<StripePriceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripePriceOrderBy[]>
  where?: InputMaybe<StripePriceBoolExp>
}

export type Subscription_RootStripePriceByPkArgs = {
  id: Scalars['String']
}

export type Subscription_RootStripeProductArgs = {
  distinctOn?: InputMaybe<StripeProductSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeProductOrderBy[]>
  where?: InputMaybe<StripeProductBoolExp>
}

export type Subscription_RootStripeProductByPkArgs = {
  id: Scalars['String']
}

export type Subscription_RootStripeSubscriptionArgs = {
  distinctOn?: InputMaybe<StripeSubscriptionSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeSubscriptionOrderBy[]>
  where?: InputMaybe<StripeSubscriptionBoolExp>
}

export type Subscription_RootStripeSubscriptionAggregateArgs = {
  distinctOn?: InputMaybe<StripeSubscriptionSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<StripeSubscriptionOrderBy[]>
  where?: InputMaybe<StripeSubscriptionBoolExp>
}

export type Subscription_RootStripeSubscriptionByPkArgs = {
  id: Scalars['String']
}

export type Subscription_RootTradeArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

export type Subscription_RootTradeAggregateArgs = {
  distinctOn?: InputMaybe<TradeSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TradeOrderBy[]>
  where?: InputMaybe<TradeBoolExp>
}

export type Subscription_RootTradeAvgPriceByWindowArgs = {
  args: TradeAvgPriceByWindowArgs
  distinctOn?: InputMaybe<TypeTradeAvgPriceByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeAvgPriceByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>
}

export type Subscription_RootTradeByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootTradeSumByWindowArgs = {
  args: TradeSumByWindowArgs
  distinctOn?: InputMaybe<TypeTradeSumByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeSumByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>
}

export type Subscription_RootTypeTradeAvgPriceByWindowArgs = {
  distinctOn?: InputMaybe<TypeTradeAvgPriceByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeAvgPriceByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>
}

export type Subscription_RootTypeTradeSumByWindowArgs = {
  distinctOn?: InputMaybe<TypeTradeSumByWindowSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TypeTradeSumByWindowOrderBy[]>
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>
}

export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<UserSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserOrderBy[]>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootUser2faArgs = {
  distinctOn?: InputMaybe<User2faSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User2faOrderBy[]>
  where?: InputMaybe<User2faBoolExp>
}

export type Subscription_RootUser2faByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootUserByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootUserDeviceArgs = {
  distinctOn?: InputMaybe<UserDeviceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserDeviceOrderBy[]>
  where?: InputMaybe<UserDeviceBoolExp>
}

export type Subscription_RootUserDeviceAggregateArgs = {
  distinctOn?: InputMaybe<UserDeviceSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserDeviceOrderBy[]>
  where?: InputMaybe<UserDeviceBoolExp>
}

export type Subscription_RootUserDeviceByPkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

export type Subscription_RootUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<UserExchangeKeysSelectColumn[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UserExchangeKeysOrderBy[]>
  where?: InputMaybe<UserExchangeKeysBoolExp>
}

export type Subscription_RootUserExchangeKeysByPkArgs = {
  uid: Scalars['uuid']
}
