export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type AvailableBalanceFxBalanceArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "balance" */
export type Balance = {
  __typename?: 'Balance';
  availableBalance: Scalars['numeric'];
  /** A computed field, executes function "balance_available_balance_fx" */
  availableBalanceFx?: Maybe<Scalars['numeric']>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  currencySymbol: Scalars['String'];
  /** An object relationship */
  exchange: Exchange;
  exchangeUid: Scalars['uuid'];
  totalBalance: Scalars['numeric'];
  /** A computed field, executes function "balance_total_balance_fx" */
  totalBalanceFx?: Maybe<Scalars['numeric']>;
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  userExchangeKey: UserExchangeKeys;
  userExchangeKeysUid: Scalars['uuid'];
  userUid: Scalars['uuid'];
};


/** columns and relationships of "balance" */
export type BalanceAvailableBalanceFxArgs = {
  args: AvailableBalanceFxBalanceArgs;
};


/** columns and relationships of "balance" */
export type BalanceTotalBalanceFxArgs = {
  args: TotalBalanceFxBalanceArgs;
};

/** Boolean expression to filter rows from the table "balance". All fields are combined with a logical 'AND'. */
export type BalanceBoolExp = {
  _and?: InputMaybe<Array<BalanceBoolExp>>;
  _not?: InputMaybe<BalanceBoolExp>;
  _or?: InputMaybe<Array<BalanceBoolExp>>;
  availableBalance?: InputMaybe<NumericComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  currencySymbol?: InputMaybe<StringComparisonExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  totalBalance?: InputMaybe<NumericComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userExchangeKey?: InputMaybe<UserExchangeKeysBoolExp>;
  userExchangeKeysUid?: InputMaybe<UuidComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** Ordering options when selecting data from "balance". */
export type BalanceOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  currencySymbol?: InputMaybe<OrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  totalBalance?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userExchangeKey?: InputMaybe<UserExchangeKeysOrderBy>;
  userExchangeKeysUid?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** select columns of table "balance" */
export enum BalanceSelectColumn {
  /** column name */
  AvailableBalance = 'availableBalance',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencySymbol = 'currencySymbol',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  TotalBalance = 'totalBalance',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserExchangeKeysUid = 'userExchangeKeysUid',
  /** column name */
  UserUid = 'userUid'
}

export type BalanceUserExchangeKeysArgs = {
  timestamp_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type BpcharComparisonExp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput';
  authToken: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
  user?: Maybe<User>;
  userUid: Scalars['String'];
};

export type CreateDcaOrderResult = {
  __typename?: 'CreateDcaOrderResult';
  dcaOrder?: Maybe<DcaOrder>;
  dcaOrderUid: Scalars['uuid'];
};

export type CreateStripeSubscription = {
  __typename?: 'CreateStripeSubscription';
  clientSecret: Scalars['String'];
  stripeSubscription?: Maybe<StripeSubscription>;
  subscriptionId: Scalars['String'];
};

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput';
  userExchangeKeys?: Maybe<UserExchangeKeys>;
  userExchangeKeysUid: Scalars['uuid'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  userUid: Scalars['String'];
};

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'Currency';
  createdAt: Scalars['timestamptz'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type CurrencyBoolExp = {
  _and?: InputMaybe<Array<CurrencyBoolExp>>;
  _not?: InputMaybe<CurrencyBoolExp>;
  _or?: InputMaybe<Array<CurrencyBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  symbol?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "currency". */
export type CurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "currency" */
export enum CurrencySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "dca_order" */
export type DcaOrder = {
  __typename?: 'DcaOrder';
  createdAt: Scalars['timestamptz'];
  dailyAverage: Scalars['numeric'];
  /** An array relationship */
  dcaOrderHistories: Array<DcaOrderHistory>;
  /** An aggregate relationship */
  dcaOrderHistoriesAggregate: DcaOrderHistoryAggregate;
  enabledAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  exchange: Exchange;
  exchangeMarketTradingPair?: Maybe<Array<MarketTradingPair>>;
  exchangeUid: Scalars['uuid'];
  intervalMs: Scalars['Int'];
  lastRunAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  market: Market;
  marketOffset: Scalars['numeric'];
  /** An array relationship */
  marketPrices: Array<MarketPrice>;
  marketUid: Scalars['uuid'];
  maxPrice?: Maybe<Scalars['numeric']>;
  maxValue?: Maybe<Scalars['numeric']>;
  minPrice?: Maybe<Scalars['numeric']>;
  minValue?: Maybe<Scalars['numeric']>;
  nextRunAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  primaryCurrency: Currency;
  primaryCurrencySymbol: Scalars['String'];
  /** An object relationship */
  secondaryCurrency: Currency;
  secondaryCurrencySymbol: Scalars['String'];
  startAt: Scalars['timestamptz'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  userExchangeKeys: UserExchangeKeys;
  userExchangeKeysUid: Scalars['uuid'];
  userUid: Scalars['uuid'];
};


/** columns and relationships of "dca_order" */
export type DcaOrderDcaOrderHistoriesArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


/** columns and relationships of "dca_order" */
export type DcaOrderDcaOrderHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


/** columns and relationships of "dca_order" */
export type DcaOrderExchangeMarketTradingPairArgs = {
  distinctOn?: InputMaybe<Array<MarketTradingPairSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketTradingPairOrderBy>>;
  where?: InputMaybe<MarketTradingPairBoolExp>;
};


/** columns and relationships of "dca_order" */
export type DcaOrderMarketPricesArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};

/** aggregated selection of "dca_order" */
export type DcaOrderAggregate = {
  __typename?: 'DcaOrderAggregate';
  aggregate?: Maybe<DcaOrderAggregateFields>;
  nodes: Array<DcaOrder>;
};

/** aggregate fields of "dca_order" */
export type DcaOrderAggregateFields = {
  __typename?: 'DcaOrderAggregateFields';
  avg?: Maybe<DcaOrderAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DcaOrderMaxFields>;
  min?: Maybe<DcaOrderMinFields>;
  stddev?: Maybe<DcaOrderStddevFields>;
  stddevPop?: Maybe<DcaOrderStddevPopFields>;
  stddevSamp?: Maybe<DcaOrderStddevSampFields>;
  sum?: Maybe<DcaOrderSumFields>;
  varPop?: Maybe<DcaOrderVarPopFields>;
  varSamp?: Maybe<DcaOrderVarSampFields>;
  variance?: Maybe<DcaOrderVarianceFields>;
};


/** aggregate fields of "dca_order" */
export type DcaOrderAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DcaOrderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dca_order" */
export type DcaOrderAggregateOrderBy = {
  avg?: InputMaybe<DcaOrderAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DcaOrderMaxOrderBy>;
  min?: InputMaybe<DcaOrderMinOrderBy>;
  stddev?: InputMaybe<DcaOrderStddevOrderBy>;
  stddev_pop?: InputMaybe<DcaOrderStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DcaOrderStddevSampOrderBy>;
  sum?: InputMaybe<DcaOrderSumOrderBy>;
  var_pop?: InputMaybe<DcaOrderVarPopOrderBy>;
  var_samp?: InputMaybe<DcaOrderVarSampOrderBy>;
  variance?: InputMaybe<DcaOrderVarianceOrderBy>;
};

/** aggregate avg on columns */
export type DcaOrderAvgFields = {
  __typename?: 'DcaOrderAvgFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dca_order" */
export type DcaOrderAvgOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "dca_order". All fields are combined with a logical 'AND'. */
export type DcaOrderBoolExp = {
  _and?: InputMaybe<Array<DcaOrderBoolExp>>;
  _not?: InputMaybe<DcaOrderBoolExp>;
  _or?: InputMaybe<Array<DcaOrderBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dailyAverage?: InputMaybe<NumericComparisonExp>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>;
  enabledAt?: InputMaybe<TimestamptzComparisonExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeMarketTradingPair?: InputMaybe<MarketTradingPairBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  intervalMs?: InputMaybe<IntComparisonExp>;
  lastRunAt?: InputMaybe<TimestamptzComparisonExp>;
  market?: InputMaybe<MarketBoolExp>;
  marketOffset?: InputMaybe<NumericComparisonExp>;
  marketPrices?: InputMaybe<MarketPriceBoolExp>;
  marketUid?: InputMaybe<UuidComparisonExp>;
  maxPrice?: InputMaybe<NumericComparisonExp>;
  maxValue?: InputMaybe<NumericComparisonExp>;
  minPrice?: InputMaybe<NumericComparisonExp>;
  minValue?: InputMaybe<NumericComparisonExp>;
  nextRunAt?: InputMaybe<TimestamptzComparisonExp>;
  primaryCurrency?: InputMaybe<CurrencyBoolExp>;
  primaryCurrencySymbol?: InputMaybe<StringComparisonExp>;
  secondaryCurrency?: InputMaybe<CurrencyBoolExp>;
  secondaryCurrencySymbol?: InputMaybe<StringComparisonExp>;
  startAt?: InputMaybe<TimestamptzComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>;
  userExchangeKeysUid?: InputMaybe<UuidComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** columns and relationships of "dca_order_history" */
export type DcaOrderHistory = {
  __typename?: 'DcaOrderHistory';
  availableBalance: Scalars['numeric'];
  createdAt: Scalars['timestamptz'];
  createdOrder: Scalars['Boolean'];
  /** An object relationship */
  dcaOrder: DcaOrder;
  dcaOrderUid: Scalars['uuid'];
  description: Scalars['String'];
  marketOffset: Scalars['numeric'];
  marketPrice: Scalars['numeric'];
  /** An object relationship */
  order?: Maybe<Order>;
  orderUid?: Maybe<Scalars['uuid']>;
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  targetValue: Scalars['numeric'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userUid: Scalars['uuid'];
  value: Scalars['numeric'];
};

/** aggregated selection of "dca_order_history" */
export type DcaOrderHistoryAggregate = {
  __typename?: 'DcaOrderHistoryAggregate';
  aggregate?: Maybe<DcaOrderHistoryAggregateFields>;
  nodes: Array<DcaOrderHistory>;
};

/** aggregate fields of "dca_order_history" */
export type DcaOrderHistoryAggregateFields = {
  __typename?: 'DcaOrderHistoryAggregateFields';
  avg?: Maybe<DcaOrderHistoryAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DcaOrderHistoryMaxFields>;
  min?: Maybe<DcaOrderHistoryMinFields>;
  stddev?: Maybe<DcaOrderHistoryStddevFields>;
  stddevPop?: Maybe<DcaOrderHistoryStddevPopFields>;
  stddevSamp?: Maybe<DcaOrderHistoryStddevSampFields>;
  sum?: Maybe<DcaOrderHistorySumFields>;
  varPop?: Maybe<DcaOrderHistoryVarPopFields>;
  varSamp?: Maybe<DcaOrderHistoryVarSampFields>;
  variance?: Maybe<DcaOrderHistoryVarianceFields>;
};


/** aggregate fields of "dca_order_history" */
export type DcaOrderHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dca_order_history" */
export type DcaOrderHistoryAggregateOrderBy = {
  avg?: InputMaybe<DcaOrderHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DcaOrderHistoryMaxOrderBy>;
  min?: InputMaybe<DcaOrderHistoryMinOrderBy>;
  stddev?: InputMaybe<DcaOrderHistoryStddevOrderBy>;
  stddev_pop?: InputMaybe<DcaOrderHistoryStddevPopOrderBy>;
  stddev_samp?: InputMaybe<DcaOrderHistoryStddevSampOrderBy>;
  sum?: InputMaybe<DcaOrderHistorySumOrderBy>;
  var_pop?: InputMaybe<DcaOrderHistoryVarPopOrderBy>;
  var_samp?: InputMaybe<DcaOrderHistoryVarSampOrderBy>;
  variance?: InputMaybe<DcaOrderHistoryVarianceOrderBy>;
};

/** aggregate avg on columns */
export type DcaOrderHistoryAvgFields = {
  __typename?: 'DcaOrderHistoryAvgFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dca_order_history" */
export type DcaOrderHistoryAvgOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "dca_order_history". All fields are combined with a logical 'AND'. */
export type DcaOrderHistoryBoolExp = {
  _and?: InputMaybe<Array<DcaOrderHistoryBoolExp>>;
  _not?: InputMaybe<DcaOrderHistoryBoolExp>;
  _or?: InputMaybe<Array<DcaOrderHistoryBoolExp>>;
  availableBalance?: InputMaybe<NumericComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdOrder?: InputMaybe<BooleanComparisonExp>;
  dcaOrder?: InputMaybe<DcaOrderBoolExp>;
  dcaOrderUid?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  marketOffset?: InputMaybe<NumericComparisonExp>;
  marketPrice?: InputMaybe<NumericComparisonExp>;
  order?: InputMaybe<OrderBoolExp>;
  orderUid?: InputMaybe<UuidComparisonExp>;
  primaryCurrency?: InputMaybe<StringComparisonExp>;
  secondaryCurrency?: InputMaybe<StringComparisonExp>;
  targetValue?: InputMaybe<NumericComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
  value?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type DcaOrderHistoryMaxFields = {
  __typename?: 'DcaOrderHistoryMaxFields';
  availableBalance?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dcaOrderUid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  marketOffset?: Maybe<Scalars['numeric']>;
  marketPrice?: Maybe<Scalars['numeric']>;
  orderUid?: Maybe<Scalars['uuid']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  secondaryCurrency?: Maybe<Scalars['String']>;
  targetValue?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "dca_order_history" */
export type DcaOrderHistoryMaxOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  dcaOrderUid?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  orderUid?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DcaOrderHistoryMinFields = {
  __typename?: 'DcaOrderHistoryMinFields';
  availableBalance?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dcaOrderUid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  marketOffset?: Maybe<Scalars['numeric']>;
  marketPrice?: Maybe<Scalars['numeric']>;
  orderUid?: Maybe<Scalars['uuid']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  secondaryCurrency?: Maybe<Scalars['String']>;
  targetValue?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "dca_order_history" */
export type DcaOrderHistoryMinOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  dcaOrderUid?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  orderUid?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "dca_order_history". */
export type DcaOrderHistoryOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdOrder?: InputMaybe<OrderBy>;
  dcaOrder?: InputMaybe<DcaOrderOrderBy>;
  dcaOrderUid?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderOrderBy>;
  orderUid?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** select columns of table "dca_order_history" */
export enum DcaOrderHistorySelectColumn {
  /** column name */
  AvailableBalance = 'availableBalance',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedOrder = 'createdOrder',
  /** column name */
  DcaOrderUid = 'dcaOrderUid',
  /** column name */
  Description = 'description',
  /** column name */
  MarketOffset = 'marketOffset',
  /** column name */
  MarketPrice = 'marketPrice',
  /** column name */
  OrderUid = 'orderUid',
  /** column name */
  PrimaryCurrency = 'primaryCurrency',
  /** column name */
  SecondaryCurrency = 'secondaryCurrency',
  /** column name */
  TargetValue = 'targetValue',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type DcaOrderHistoryStddevFields = {
  __typename?: 'DcaOrderHistoryStddevFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dca_order_history" */
export type DcaOrderHistoryStddevOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DcaOrderHistoryStddevPopFields = {
  __typename?: 'DcaOrderHistoryStddevPopFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dca_order_history" */
export type DcaOrderHistoryStddevPopOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DcaOrderHistoryStddevSampFields = {
  __typename?: 'DcaOrderHistoryStddevSampFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dca_order_history" */
export type DcaOrderHistoryStddevSampOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type DcaOrderHistorySumFields = {
  __typename?: 'DcaOrderHistorySumFields';
  availableBalance?: Maybe<Scalars['numeric']>;
  marketOffset?: Maybe<Scalars['numeric']>;
  marketPrice?: Maybe<Scalars['numeric']>;
  targetValue?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "dca_order_history" */
export type DcaOrderHistorySumOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type DcaOrderHistoryVarPopFields = {
  __typename?: 'DcaOrderHistoryVarPopFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dca_order_history" */
export type DcaOrderHistoryVarPopOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DcaOrderHistoryVarSampFields = {
  __typename?: 'DcaOrderHistoryVarSampFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dca_order_history" */
export type DcaOrderHistoryVarSampOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DcaOrderHistoryVarianceFields = {
  __typename?: 'DcaOrderHistoryVarianceFields';
  availableBalance?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  targetValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dca_order_history" */
export type DcaOrderHistoryVarianceOrderBy = {
  availableBalance?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPrice?: InputMaybe<OrderBy>;
  targetValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "dca_order" */
export type DcaOrderIncInput = {
  dailyAverage?: InputMaybe<Scalars['numeric']>;
  intervalMs?: InputMaybe<Scalars['Int']>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  maxPrice?: InputMaybe<Scalars['numeric']>;
  maxValue?: InputMaybe<Scalars['numeric']>;
  minPrice?: InputMaybe<Scalars['numeric']>;
  minValue?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type DcaOrderMaxFields = {
  __typename?: 'DcaOrderMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dailyAverage?: Maybe<Scalars['numeric']>;
  enabledAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  intervalMs?: Maybe<Scalars['Int']>;
  lastRunAt?: Maybe<Scalars['timestamptz']>;
  marketOffset?: Maybe<Scalars['numeric']>;
  marketUid?: Maybe<Scalars['uuid']>;
  maxPrice?: Maybe<Scalars['numeric']>;
  maxValue?: Maybe<Scalars['numeric']>;
  minPrice?: Maybe<Scalars['numeric']>;
  minValue?: Maybe<Scalars['numeric']>;
  nextRunAt?: Maybe<Scalars['timestamptz']>;
  primaryCurrencySymbol?: Maybe<Scalars['String']>;
  secondaryCurrencySymbol?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: Maybe<Scalars['uuid']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "dca_order" */
export type DcaOrderMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dailyAverage?: InputMaybe<OrderBy>;
  enabledAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  lastRunAt?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
  nextRunAt?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
  startAt?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userExchangeKeysUid?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DcaOrderMinFields = {
  __typename?: 'DcaOrderMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dailyAverage?: Maybe<Scalars['numeric']>;
  enabledAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  intervalMs?: Maybe<Scalars['Int']>;
  lastRunAt?: Maybe<Scalars['timestamptz']>;
  marketOffset?: Maybe<Scalars['numeric']>;
  marketUid?: Maybe<Scalars['uuid']>;
  maxPrice?: Maybe<Scalars['numeric']>;
  maxValue?: Maybe<Scalars['numeric']>;
  minPrice?: Maybe<Scalars['numeric']>;
  minValue?: Maybe<Scalars['numeric']>;
  nextRunAt?: Maybe<Scalars['timestamptz']>;
  primaryCurrencySymbol?: Maybe<Scalars['String']>;
  secondaryCurrencySymbol?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: Maybe<Scalars['uuid']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "dca_order" */
export type DcaOrderMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dailyAverage?: InputMaybe<OrderBy>;
  enabledAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  lastRunAt?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
  nextRunAt?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
  startAt?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userExchangeKeysUid?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "dca_order" */
export type DcaOrderMutationResponse = {
  __typename?: 'DcaOrderMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DcaOrder>;
};

/** Ordering options when selecting data from "dca_order". */
export type DcaOrderOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dailyAverage?: InputMaybe<OrderBy>;
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>;
  enabledAt?: InputMaybe<OrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeMarketTradingPairAggregate?: InputMaybe<MarketTradingPairAggregateOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  lastRunAt?: InputMaybe<OrderBy>;
  market?: InputMaybe<MarketOrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  marketPricesAggregate?: InputMaybe<MarketPriceAggregateOrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
  nextRunAt?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<CurrencyOrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<CurrencyOrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
  startAt?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysOrderBy>;
  userExchangeKeysUid?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: dca_order */
export type DcaOrderPkColumnsInput = {
  uid: Scalars['uuid'];
};

/** select columns of table "dca_order" */
export enum DcaOrderSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DailyAverage = 'dailyAverage',
  /** column name */
  EnabledAt = 'enabledAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  IntervalMs = 'intervalMs',
  /** column name */
  LastRunAt = 'lastRunAt',
  /** column name */
  MarketOffset = 'marketOffset',
  /** column name */
  MarketUid = 'marketUid',
  /** column name */
  MaxPrice = 'maxPrice',
  /** column name */
  MaxValue = 'maxValue',
  /** column name */
  MinPrice = 'minPrice',
  /** column name */
  MinValue = 'minValue',
  /** column name */
  NextRunAt = 'nextRunAt',
  /** column name */
  PrimaryCurrencySymbol = 'primaryCurrencySymbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondaryCurrencySymbol',
  /** column name */
  StartAt = 'startAt',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserExchangeKeysUid = 'userExchangeKeysUid',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "dca_order" */
export type DcaOrderSetInput = {
  dailyAverage?: InputMaybe<Scalars['numeric']>;
  intervalMs?: InputMaybe<Scalars['Int']>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  maxPrice?: InputMaybe<Scalars['numeric']>;
  maxValue?: InputMaybe<Scalars['numeric']>;
  minPrice?: InputMaybe<Scalars['numeric']>;
  minValue?: InputMaybe<Scalars['numeric']>;
  startAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type DcaOrderStddevFields = {
  __typename?: 'DcaOrderStddevFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dca_order" */
export type DcaOrderStddevOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DcaOrderStddevPopFields = {
  __typename?: 'DcaOrderStddevPopFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dca_order" */
export type DcaOrderStddevPopOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DcaOrderStddevSampFields = {
  __typename?: 'DcaOrderStddevSampFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dca_order" */
export type DcaOrderStddevSampOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type DcaOrderSumFields = {
  __typename?: 'DcaOrderSumFields';
  dailyAverage?: Maybe<Scalars['numeric']>;
  intervalMs?: Maybe<Scalars['Int']>;
  marketOffset?: Maybe<Scalars['numeric']>;
  maxPrice?: Maybe<Scalars['numeric']>;
  maxValue?: Maybe<Scalars['numeric']>;
  minPrice?: Maybe<Scalars['numeric']>;
  minValue?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "dca_order" */
export type DcaOrderSumOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

export type DcaOrderUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DcaOrderIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DcaOrderSetInput>;
  where: DcaOrderBoolExp;
};

/** aggregate var_pop on columns */
export type DcaOrderVarPopFields = {
  __typename?: 'DcaOrderVarPopFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dca_order" */
export type DcaOrderVarPopOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DcaOrderVarSampFields = {
  __typename?: 'DcaOrderVarSampFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dca_order" */
export type DcaOrderVarSampOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DcaOrderVarianceFields = {
  __typename?: 'DcaOrderVarianceFields';
  dailyAverage?: Maybe<Scalars['Float']>;
  intervalMs?: Maybe<Scalars['Float']>;
  marketOffset?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dca_order" */
export type DcaOrderVarianceOrderBy = {
  dailyAverage?: InputMaybe<OrderBy>;
  intervalMs?: InputMaybe<OrderBy>;
  marketOffset?: InputMaybe<OrderBy>;
  maxPrice?: InputMaybe<OrderBy>;
  maxValue?: InputMaybe<OrderBy>;
  minPrice?: InputMaybe<OrderBy>;
  minValue?: InputMaybe<OrderBy>;
};

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput';
  user?: Maybe<User>;
  userUid: Scalars['uuid'];
};

/** columns and relationships of "exchange" */
export type Exchange = {
  __typename?: 'Exchange';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  dcaOrders: Array<DcaOrder>;
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  ordersAggregate: OrderAggregate;
  /** An array relationship */
  primaryCurrencies: Array<ExchangePrimaryCurrency>;
  /** An array relationship */
  secondaryCurrencies: Array<ExchangeSecondaryCurrency>;
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  tradesAggregate: TradeAggregate;
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An array relationship */
  userExchangeKeys: Array<UserExchangeKeys>;
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate;
};


/** columns and relationships of "exchange" */
export type ExchangeDcaOrdersArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeOrdersArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeOrdersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangePrimaryCurrenciesArgs = {
  distinctOn?: InputMaybe<Array<ExchangePrimaryCurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangePrimaryCurrencyOrderBy>>;
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeSecondaryCurrenciesArgs = {
  distinctOn?: InputMaybe<Array<ExchangeSecondaryCurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangeSecondaryCurrencyOrderBy>>;
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeTradesArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeTradesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};


/** columns and relationships of "exchange" */
export type ExchangeUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};

/** Boolean expression to filter rows from the table "exchange". All fields are combined with a logical 'AND'. */
export type ExchangeBoolExp = {
  _and?: InputMaybe<Array<ExchangeBoolExp>>;
  _not?: InputMaybe<ExchangeBoolExp>;
  _or?: InputMaybe<Array<ExchangeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrders?: InputMaybe<DcaOrderBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  orders?: InputMaybe<OrderBoolExp>;
  primaryCurrencies?: InputMaybe<ExchangePrimaryCurrencyBoolExp>;
  secondaryCurrencies?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>;
  trades?: InputMaybe<TradeBoolExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>;
};

/** Ordering options when selecting data from "exchange". */
export type ExchangeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  ordersAggregate?: InputMaybe<OrderAggregateOrderBy>;
  primaryCurrenciesAggregate?: InputMaybe<ExchangePrimaryCurrencyAggregateOrderBy>;
  secondaryCurrenciesAggregate?: InputMaybe<ExchangeSecondaryCurrencyAggregateOrderBy>;
  tradesAggregate?: InputMaybe<TradeAggregateOrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  userExchangeKeysAggregate?: InputMaybe<UserExchangeKeysAggregateOrderBy>;
};

/** columns and relationships of "exchange_primary_currency" */
export type ExchangePrimaryCurrency = {
  __typename?: 'ExchangePrimaryCurrency';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  exchange: Exchange;
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExchangePrimaryCurrencyMaxOrderBy>;
  min?: InputMaybe<ExchangePrimaryCurrencyMinOrderBy>;
};

/** Boolean expression to filter rows from the table "exchange_primary_currency". All fields are combined with a logical 'AND'. */
export type ExchangePrimaryCurrencyBoolExp = {
  _and?: InputMaybe<Array<ExchangePrimaryCurrencyBoolExp>>;
  _not?: InputMaybe<ExchangePrimaryCurrencyBoolExp>;
  _or?: InputMaybe<Array<ExchangePrimaryCurrencyBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  symbol?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "exchange_primary_currency". */
export type ExchangePrimaryCurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "exchange_primary_currency" */
export enum ExchangePrimaryCurrencySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "exchange_secondary_currency" */
export type ExchangeSecondaryCurrency = {
  __typename?: 'ExchangeSecondaryCurrency';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  exchange: Exchange;
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExchangeSecondaryCurrencyMaxOrderBy>;
  min?: InputMaybe<ExchangeSecondaryCurrencyMinOrderBy>;
};

/** Boolean expression to filter rows from the table "exchange_secondary_currency". All fields are combined with a logical 'AND'. */
export type ExchangeSecondaryCurrencyBoolExp = {
  _and?: InputMaybe<Array<ExchangeSecondaryCurrencyBoolExp>>;
  _not?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>;
  _or?: InputMaybe<Array<ExchangeSecondaryCurrencyBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  symbol?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "exchange_secondary_currency". */
export type ExchangeSecondaryCurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "exchange_secondary_currency" */
export enum ExchangeSecondaryCurrencySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select columns of table "exchange" */
export enum ExchangeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

export type FeeFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "market" */
export type Market = {
  __typename?: 'Market';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  dcaOrders: Array<DcaOrder>;
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate;
  id: Scalars['String'];
  /** An array relationship */
  marketPrices: Array<MarketPrice>;
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "market" */
export type MarketDcaOrdersArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "market" */
export type MarketDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "market" */
export type MarketMarketPricesArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};

/** Boolean expression to filter rows from the table "market". All fields are combined with a logical 'AND'. */
export type MarketBoolExp = {
  _and?: InputMaybe<Array<MarketBoolExp>>;
  _not?: InputMaybe<MarketBoolExp>;
  _or?: InputMaybe<Array<MarketBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrders?: InputMaybe<DcaOrderBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  marketPrices?: InputMaybe<MarketPriceBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "market". */
export type MarketOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  marketPricesAggregate?: InputMaybe<MarketPriceAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** columns and relationships of "market_price" */
export type MarketPrice = {
  __typename?: 'MarketPrice';
  assetSymbol: Scalars['String'];
  currency: Scalars['String'];
  fxRate: Scalars['numeric'];
  /** An object relationship */
  market: Market;
  marketUid: Scalars['uuid'];
  price: Scalars['numeric'];
  sourceCurrency: Scalars['bpchar'];
  sourcePrice: Scalars['numeric'];
  timestamp: Scalars['timestamptz'];
};

/** order by aggregate values of table "market_price" */
export type MarketPriceAggregateOrderBy = {
  avg?: InputMaybe<MarketPriceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<MarketPriceMaxOrderBy>;
  min?: InputMaybe<MarketPriceMinOrderBy>;
  stddev?: InputMaybe<MarketPriceStddevOrderBy>;
  stddev_pop?: InputMaybe<MarketPriceStddevPopOrderBy>;
  stddev_samp?: InputMaybe<MarketPriceStddevSampOrderBy>;
  sum?: InputMaybe<MarketPriceSumOrderBy>;
  var_pop?: InputMaybe<MarketPriceVarPopOrderBy>;
  var_samp?: InputMaybe<MarketPriceVarSampOrderBy>;
  variance?: InputMaybe<MarketPriceVarianceOrderBy>;
};

/** order by avg() on columns of table "market_price" */
export type MarketPriceAvgOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "market_price". All fields are combined with a logical 'AND'. */
export type MarketPriceBoolExp = {
  _and?: InputMaybe<Array<MarketPriceBoolExp>>;
  _not?: InputMaybe<MarketPriceBoolExp>;
  _or?: InputMaybe<Array<MarketPriceBoolExp>>;
  assetSymbol?: InputMaybe<StringComparisonExp>;
  currency?: InputMaybe<StringComparisonExp>;
  fxRate?: InputMaybe<NumericComparisonExp>;
  market?: InputMaybe<MarketBoolExp>;
  marketUid?: InputMaybe<UuidComparisonExp>;
  price?: InputMaybe<NumericComparisonExp>;
  sourceCurrency?: InputMaybe<BpcharComparisonExp>;
  sourcePrice?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
};

export type MarketPriceLatestArgs = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "market_price" */
export type MarketPriceMaxOrderBy = {
  assetSymbol?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  fxRate?: InputMaybe<OrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourceCurrency?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "market_price" */
export type MarketPriceMinOrderBy = {
  assetSymbol?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  fxRate?: InputMaybe<OrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourceCurrency?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "market_price". */
export type MarketPriceOrderBy = {
  assetSymbol?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  fxRate?: InputMaybe<OrderBy>;
  market?: InputMaybe<MarketOrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourceCurrency?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
};

/** select columns of table "market_price" */
export enum MarketPriceSelectColumn {
  /** column name */
  AssetSymbol = 'assetSymbol',
  /** column name */
  Currency = 'currency',
  /** column name */
  FxRate = 'fxRate',
  /** column name */
  MarketUid = 'marketUid',
  /** column name */
  Price = 'price',
  /** column name */
  SourceCurrency = 'sourceCurrency',
  /** column name */
  SourcePrice = 'sourcePrice',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "market_price" */
export type MarketPriceStddevOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "market_price" */
export type MarketPriceStddevPopOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "market_price" */
export type MarketPriceStddevSampOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "market_price" */
export type MarketPriceSumOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "market_price" */
export type MarketPriceVarPopOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "market_price" */
export type MarketPriceVarSampOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "market_price" */
export type MarketPriceVarianceOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** select columns of table "market" */
export enum MarketSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "market_trading_pair" */
export type MarketTradingPair = {
  __typename?: 'MarketTradingPair';
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  currencyBySecondaryCurrencySymbol: Currency;
  /** An object relationship */
  market: Market;
  /** An array relationship */
  marketPrices: Array<MarketPrice>;
  marketUid: Scalars['uuid'];
  primaryCurrencySymbol: Scalars['String'];
  secondaryCurrencySymbol: Scalars['String'];
};


/** columns and relationships of "market_trading_pair" */
export type MarketTradingPairMarketPricesArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};

/** order by aggregate values of table "market_trading_pair" */
export type MarketTradingPairAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<MarketTradingPairMaxOrderBy>;
  min?: InputMaybe<MarketTradingPairMinOrderBy>;
};

/** Boolean expression to filter rows from the table "market_trading_pair". All fields are combined with a logical 'AND'. */
export type MarketTradingPairBoolExp = {
  _and?: InputMaybe<Array<MarketTradingPairBoolExp>>;
  _not?: InputMaybe<MarketTradingPairBoolExp>;
  _or?: InputMaybe<Array<MarketTradingPairBoolExp>>;
  currency?: InputMaybe<CurrencyBoolExp>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<CurrencyBoolExp>;
  market?: InputMaybe<MarketBoolExp>;
  marketPrices?: InputMaybe<MarketPriceBoolExp>;
  marketUid?: InputMaybe<UuidComparisonExp>;
  primaryCurrencySymbol?: InputMaybe<StringComparisonExp>;
  secondaryCurrencySymbol?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "market_trading_pair" */
export type MarketTradingPairMaxOrderBy = {
  marketUid?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "market_trading_pair" */
export type MarketTradingPairMinOrderBy = {
  marketUid?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "market_trading_pair". */
export type MarketTradingPairOrderBy = {
  currency?: InputMaybe<CurrencyOrderBy>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<CurrencyOrderBy>;
  market?: InputMaybe<MarketOrderBy>;
  marketPricesAggregate?: InputMaybe<MarketPriceAggregateOrderBy>;
  marketUid?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
};

/** select columns of table "market_trading_pair" */
export enum MarketTradingPairSelectColumn {
  /** column name */
  MarketUid = 'marketUid',
  /** column name */
  PrimaryCurrencySymbol = 'primaryCurrencySymbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondaryCurrencySymbol'
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'Order';
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  dcaOrderHistories: Array<DcaOrderHistory>;
  /** An aggregate relationship */
  dcaOrderHistoriesAggregate: DcaOrderHistoryAggregate;
  /** An object relationship */
  exchange: Exchange;
  exchangeUid: Scalars['uuid'];
  openedAt: Scalars['timestamptz'];
  orderId: Scalars['String'];
  price: Scalars['numeric'];
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userUid: Scalars['uuid'];
  value: Scalars['numeric'];
  volume: Scalars['numeric'];
};


/** columns and relationships of "order" */
export type OrderDcaOrderHistoriesArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


/** columns and relationships of "order" */
export type OrderDcaOrderHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};

/** aggregated selection of "order" */
export type OrderAggregate = {
  __typename?: 'OrderAggregate';
  aggregate?: Maybe<OrderAggregateFields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type OrderAggregateFields = {
  __typename?: 'OrderAggregateFields';
  avg?: Maybe<OrderAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<OrderMaxFields>;
  min?: Maybe<OrderMinFields>;
  stddev?: Maybe<OrderStddevFields>;
  stddevPop?: Maybe<OrderStddevPopFields>;
  stddevSamp?: Maybe<OrderStddevSampFields>;
  sum?: Maybe<OrderSumFields>;
  varPop?: Maybe<OrderVarPopFields>;
  varSamp?: Maybe<OrderVarSampFields>;
  variance?: Maybe<OrderVarianceFields>;
};


/** aggregate fields of "order" */
export type OrderAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type OrderAggregateOrderBy = {
  avg?: InputMaybe<OrderAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OrderMaxOrderBy>;
  min?: InputMaybe<OrderMinOrderBy>;
  stddev?: InputMaybe<OrderStddevOrderBy>;
  stddev_pop?: InputMaybe<OrderStddevPopOrderBy>;
  stddev_samp?: InputMaybe<OrderStddevSampOrderBy>;
  sum?: InputMaybe<OrderSumOrderBy>;
  var_pop?: InputMaybe<OrderVarPopOrderBy>;
  var_samp?: InputMaybe<OrderVarSampOrderBy>;
  variance?: InputMaybe<OrderVarianceOrderBy>;
};

/** aggregate avg on columns */
export type OrderAvgFields = {
  __typename?: 'OrderAvgFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type OrderAvgOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type OrderBoolExp = {
  _and?: InputMaybe<Array<OrderBoolExp>>;
  _not?: InputMaybe<OrderBoolExp>;
  _or?: InputMaybe<Array<OrderBoolExp>>;
  closedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  openedAt?: InputMaybe<TimestamptzComparisonExp>;
  orderId?: InputMaybe<StringComparisonExp>;
  price?: InputMaybe<NumericComparisonExp>;
  primaryCurrency?: InputMaybe<StringComparisonExp>;
  secondaryCurrency?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
  value?: InputMaybe<NumericComparisonExp>;
  volume?: InputMaybe<NumericComparisonExp>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** aggregate max on columns */
export type OrderMaxFields = {
  __typename?: 'OrderMaxFields';
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  orderId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  secondaryCurrency?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "order" */
export type OrderMaxOrderBy = {
  closedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  openedAt?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OrderMinFields = {
  __typename?: 'OrderMinFields';
  closedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  openedAt?: Maybe<Scalars['timestamptz']>;
  orderId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  secondaryCurrency?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "order" */
export type OrderMinOrderBy = {
  closedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  openedAt?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "order". */
export type OrderOrderBy = {
  closedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  openedAt?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** select columns of table "order" */
export enum OrderSelectColumn {
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  OpenedAt = 'openedAt',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primaryCurrency',
  /** column name */
  SecondaryCurrency = 'secondaryCurrency',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** aggregate stddev on columns */
export type OrderStddevFields = {
  __typename?: 'OrderStddevFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type OrderStddevOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OrderStddevPopFields = {
  __typename?: 'OrderStddevPopFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type OrderStddevPopOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OrderStddevSampFields = {
  __typename?: 'OrderStddevSampFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type OrderStddevSampOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type OrderSumFields = {
  __typename?: 'OrderSumFields';
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "order" */
export type OrderSumOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type OrderVarPopFields = {
  __typename?: 'OrderVarPopFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type OrderVarPopOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OrderVarSampFields = {
  __typename?: 'OrderVarSampFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type OrderVarSampOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OrderVarianceFields = {
  __typename?: 'OrderVarianceFields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type OrderVarianceOrderBy = {
  price?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

export type PriceFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

export type QueryLiveStripeSubscriptionOutput = {
  __typename?: 'QueryLiveStripeSubscriptionOutput';
  clientSecret: Scalars['String'];
  id: Scalars['String'];
};

export type QueryStripeConfigOutput = {
  __typename?: 'QueryStripeConfigOutput';
  publishableKey: Scalars['String'];
};

export type QueryUserLimitOutput = {
  __typename?: 'QueryUserLimitOutput';
  userLimit: Scalars['jsonb'];
  userUid: Scalars['String'];
};

export type RefreshAuthTokenOutput = {
  __typename?: 'RefreshAuthTokenOutput';
  authToken: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
  user?: Maybe<User>;
  userUid: Scalars['String'];
};

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput';
  authToken: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
  userUid: Scalars['uuid'];
};

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput';
  userUid: Scalars['uuid'];
};

export type SendUserPasswordResetOutput = {
  __typename?: 'SendUserPasswordResetOutput';
  email: Scalars['String'];
};

export type SetupUser2FaOutput = {
  __typename?: 'SetupUser2FAOutput';
  qrcode: Scalars['String'];
  secret: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "stripe_price" */
export type StripePrice = {
  __typename?: 'StripePrice';
  active: Scalars['Boolean'];
  billingScheme: Scalars['String'];
  currency: Scalars['bpchar'];
  id: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
  recurringAggregateUsage?: Maybe<Scalars['String']>;
  recurringInterval?: Maybe<Scalars['String']>;
  recurringIntervalCount?: Maybe<Scalars['Int']>;
  recurringUsageType?: Maybe<Scalars['String']>;
  /** An object relationship */
  stripeProduct: StripeProduct;
  /** An array relationship */
  stripeSubscriptions: Array<StripeSubscription>;
  /** An aggregate relationship */
  stripeSubscriptionsAggregate: StripeSubscriptionAggregate;
  type: Scalars['String'];
  unitAmount?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "stripe_price" */
export type StripePriceStripeSubscriptionsArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};


/** columns and relationships of "stripe_price" */
export type StripePriceStripeSubscriptionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};

/** order by aggregate values of table "stripe_price" */
export type StripePriceAggregateOrderBy = {
  avg?: InputMaybe<StripePriceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<StripePriceMaxOrderBy>;
  min?: InputMaybe<StripePriceMinOrderBy>;
  stddev?: InputMaybe<StripePriceStddevOrderBy>;
  stddev_pop?: InputMaybe<StripePriceStddevPopOrderBy>;
  stddev_samp?: InputMaybe<StripePriceStddevSampOrderBy>;
  sum?: InputMaybe<StripePriceSumOrderBy>;
  var_pop?: InputMaybe<StripePriceVarPopOrderBy>;
  var_samp?: InputMaybe<StripePriceVarSampOrderBy>;
  variance?: InputMaybe<StripePriceVarianceOrderBy>;
};

/** order by avg() on columns of table "stripe_price" */
export type StripePriceAvgOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "stripe_price". All fields are combined with a logical 'AND'. */
export type StripePriceBoolExp = {
  _and?: InputMaybe<Array<StripePriceBoolExp>>;
  _not?: InputMaybe<StripePriceBoolExp>;
  _or?: InputMaybe<Array<StripePriceBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  billingScheme?: InputMaybe<StringComparisonExp>;
  currency?: InputMaybe<BpcharComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  nickname?: InputMaybe<StringComparisonExp>;
  productId?: InputMaybe<StringComparisonExp>;
  recurringAggregateUsage?: InputMaybe<StringComparisonExp>;
  recurringInterval?: InputMaybe<StringComparisonExp>;
  recurringIntervalCount?: InputMaybe<IntComparisonExp>;
  recurringUsageType?: InputMaybe<StringComparisonExp>;
  stripeProduct?: InputMaybe<StripeProductBoolExp>;
  stripeSubscriptions?: InputMaybe<StripeSubscriptionBoolExp>;
  type?: InputMaybe<StringComparisonExp>;
  unitAmount?: InputMaybe<IntComparisonExp>;
};

/** order by max() on columns of table "stripe_price" */
export type StripePriceMaxOrderBy = {
  billingScheme?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nickname?: InputMaybe<OrderBy>;
  productId?: InputMaybe<OrderBy>;
  recurringAggregateUsage?: InputMaybe<OrderBy>;
  recurringInterval?: InputMaybe<OrderBy>;
  recurringIntervalCount?: InputMaybe<OrderBy>;
  recurringUsageType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "stripe_price" */
export type StripePriceMinOrderBy = {
  billingScheme?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nickname?: InputMaybe<OrderBy>;
  productId?: InputMaybe<OrderBy>;
  recurringAggregateUsage?: InputMaybe<OrderBy>;
  recurringInterval?: InputMaybe<OrderBy>;
  recurringIntervalCount?: InputMaybe<OrderBy>;
  recurringUsageType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "stripe_price". */
export type StripePriceOrderBy = {
  active?: InputMaybe<OrderBy>;
  billingScheme?: InputMaybe<OrderBy>;
  currency?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nickname?: InputMaybe<OrderBy>;
  productId?: InputMaybe<OrderBy>;
  recurringAggregateUsage?: InputMaybe<OrderBy>;
  recurringInterval?: InputMaybe<OrderBy>;
  recurringIntervalCount?: InputMaybe<OrderBy>;
  recurringUsageType?: InputMaybe<OrderBy>;
  stripeProduct?: InputMaybe<StripeProductOrderBy>;
  stripeSubscriptionsAggregate?: InputMaybe<StripeSubscriptionAggregateOrderBy>;
  type?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** select columns of table "stripe_price" */
export enum StripePriceSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  BillingScheme = 'billingScheme',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProductId = 'productId',
  /** column name */
  RecurringAggregateUsage = 'recurringAggregateUsage',
  /** column name */
  RecurringInterval = 'recurringInterval',
  /** column name */
  RecurringIntervalCount = 'recurringIntervalCount',
  /** column name */
  RecurringUsageType = 'recurringUsageType',
  /** column name */
  Type = 'type',
  /** column name */
  UnitAmount = 'unitAmount'
}

/** order by stddev() on columns of table "stripe_price" */
export type StripePriceStddevOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "stripe_price" */
export type StripePriceStddevPopOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "stripe_price" */
export type StripePriceStddevSampOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "stripe_price" */
export type StripePriceSumOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "stripe_price" */
export type StripePriceVarPopOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "stripe_price" */
export type StripePriceVarSampOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "stripe_price" */
export type StripePriceVarianceOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "stripe_product" */
export type StripeProduct = {
  __typename?: 'StripeProduct';
  active: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  stripePrices: Array<StripePrice>;
};


/** columns and relationships of "stripe_product" */
export type StripeProductStripePricesArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};

/** Boolean expression to filter rows from the table "stripe_product". All fields are combined with a logical 'AND'. */
export type StripeProductBoolExp = {
  _and?: InputMaybe<Array<StripeProductBoolExp>>;
  _not?: InputMaybe<StripeProductBoolExp>;
  _or?: InputMaybe<Array<StripeProductBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  stripePrices?: InputMaybe<StripePriceBoolExp>;
};

/** Ordering options when selecting data from "stripe_product". */
export type StripeProductOrderBy = {
  active?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  stripePricesAggregate?: InputMaybe<StripePriceAggregateOrderBy>;
};

/** select columns of table "stripe_product" */
export enum StripeProductSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "stripe_subscription" */
export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  cancelAt?: Maybe<Scalars['timestamptz']>;
  cancelAtPeriodEnd: Scalars['Boolean'];
  canceledAt?: Maybe<Scalars['timestamptz']>;
  currentPeriodEnd: Scalars['timestamptz'];
  currentPeriodStart: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
  /** An object relationship */
  stripePrice: StripePrice;
};

/** aggregated selection of "stripe_subscription" */
export type StripeSubscriptionAggregate = {
  __typename?: 'StripeSubscriptionAggregate';
  aggregate?: Maybe<StripeSubscriptionAggregateFields>;
  nodes: Array<StripeSubscription>;
};

/** aggregate fields of "stripe_subscription" */
export type StripeSubscriptionAggregateFields = {
  __typename?: 'StripeSubscriptionAggregateFields';
  avg?: Maybe<StripeSubscriptionAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<StripeSubscriptionMaxFields>;
  min?: Maybe<StripeSubscriptionMinFields>;
  stddev?: Maybe<StripeSubscriptionStddevFields>;
  stddevPop?: Maybe<StripeSubscriptionStddevPopFields>;
  stddevSamp?: Maybe<StripeSubscriptionStddevSampFields>;
  sum?: Maybe<StripeSubscriptionSumFields>;
  varPop?: Maybe<StripeSubscriptionVarPopFields>;
  varSamp?: Maybe<StripeSubscriptionVarSampFields>;
  variance?: Maybe<StripeSubscriptionVarianceFields>;
};


/** aggregate fields of "stripe_subscription" */
export type StripeSubscriptionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stripe_subscription" */
export type StripeSubscriptionAggregateOrderBy = {
  avg?: InputMaybe<StripeSubscriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<StripeSubscriptionMaxOrderBy>;
  min?: InputMaybe<StripeSubscriptionMinOrderBy>;
  stddev?: InputMaybe<StripeSubscriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<StripeSubscriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<StripeSubscriptionStddevSampOrderBy>;
  sum?: InputMaybe<StripeSubscriptionSumOrderBy>;
  var_pop?: InputMaybe<StripeSubscriptionVarPopOrderBy>;
  var_samp?: InputMaybe<StripeSubscriptionVarSampOrderBy>;
  variance?: InputMaybe<StripeSubscriptionVarianceOrderBy>;
};

/** aggregate avg on columns */
export type StripeSubscriptionAvgFields = {
  __typename?: 'StripeSubscriptionAvgFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stripe_subscription" */
export type StripeSubscriptionAvgOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "stripe_subscription". All fields are combined with a logical 'AND'. */
export type StripeSubscriptionBoolExp = {
  _and?: InputMaybe<Array<StripeSubscriptionBoolExp>>;
  _not?: InputMaybe<StripeSubscriptionBoolExp>;
  _or?: InputMaybe<Array<StripeSubscriptionBoolExp>>;
  cancelAt?: InputMaybe<TimestamptzComparisonExp>;
  cancelAtPeriodEnd?: InputMaybe<BooleanComparisonExp>;
  canceledAt?: InputMaybe<TimestamptzComparisonExp>;
  currentPeriodEnd?: InputMaybe<TimestamptzComparisonExp>;
  currentPeriodStart?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  quantity?: InputMaybe<IntComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  stripePrice?: InputMaybe<StripePriceBoolExp>;
};

/** aggregate max on columns */
export type StripeSubscriptionMaxFields = {
  __typename?: 'StripeSubscriptionMaxFields';
  cancelAt?: Maybe<Scalars['timestamptz']>;
  canceledAt?: Maybe<Scalars['timestamptz']>;
  currentPeriodEnd?: Maybe<Scalars['timestamptz']>;
  currentPeriodStart?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stripe_subscription" */
export type StripeSubscriptionMaxOrderBy = {
  cancelAt?: InputMaybe<OrderBy>;
  canceledAt?: InputMaybe<OrderBy>;
  currentPeriodEnd?: InputMaybe<OrderBy>;
  currentPeriodStart?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type StripeSubscriptionMinFields = {
  __typename?: 'StripeSubscriptionMinFields';
  cancelAt?: Maybe<Scalars['timestamptz']>;
  canceledAt?: Maybe<Scalars['timestamptz']>;
  currentPeriodEnd?: Maybe<Scalars['timestamptz']>;
  currentPeriodStart?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "stripe_subscription" */
export type StripeSubscriptionMinOrderBy = {
  cancelAt?: InputMaybe<OrderBy>;
  canceledAt?: InputMaybe<OrderBy>;
  currentPeriodEnd?: InputMaybe<OrderBy>;
  currentPeriodStart?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "stripe_subscription". */
export type StripeSubscriptionOrderBy = {
  cancelAt?: InputMaybe<OrderBy>;
  cancelAtPeriodEnd?: InputMaybe<OrderBy>;
  canceledAt?: InputMaybe<OrderBy>;
  currentPeriodEnd?: InputMaybe<OrderBy>;
  currentPeriodStart?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  stripePrice?: InputMaybe<StripePriceOrderBy>;
};

/** select columns of table "stripe_subscription" */
export enum StripeSubscriptionSelectColumn {
  /** column name */
  CancelAt = 'cancelAt',
  /** column name */
  CancelAtPeriodEnd = 'cancelAtPeriodEnd',
  /** column name */
  CanceledAt = 'canceledAt',
  /** column name */
  CurrentPeriodEnd = 'currentPeriodEnd',
  /** column name */
  CurrentPeriodStart = 'currentPeriodStart',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status'
}

/** aggregate stddev on columns */
export type StripeSubscriptionStddevFields = {
  __typename?: 'StripeSubscriptionStddevFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stripe_subscription" */
export type StripeSubscriptionStddevOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type StripeSubscriptionStddevPopFields = {
  __typename?: 'StripeSubscriptionStddevPopFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stripe_subscription" */
export type StripeSubscriptionStddevPopOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type StripeSubscriptionStddevSampFields = {
  __typename?: 'StripeSubscriptionStddevSampFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stripe_subscription" */
export type StripeSubscriptionStddevSampOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type StripeSubscriptionSumFields = {
  __typename?: 'StripeSubscriptionSumFields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stripe_subscription" */
export type StripeSubscriptionSumOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type StripeSubscriptionVarPopFields = {
  __typename?: 'StripeSubscriptionVarPopFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stripe_subscription" */
export type StripeSubscriptionVarPopOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type StripeSubscriptionVarSampFields = {
  __typename?: 'StripeSubscriptionVarSampFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stripe_subscription" */
export type StripeSubscriptionVarSampOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type StripeSubscriptionVarianceFields = {
  __typename?: 'StripeSubscriptionVarianceFields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stripe_subscription" */
export type StripeSubscriptionVarianceOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput';
  user?: Maybe<User>;
  userUid: Scalars['uuid'];
};

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput';
  user?: Maybe<User>;
  userUid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type TotalBalanceFxBalanceArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

export type TotalValueFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "trade" */
export type Trade = {
  __typename?: 'Trade';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  exchange: Exchange;
  exchangeUid: Scalars['uuid'];
  fee: Scalars['numeric'];
  /** A computed field, executes function "trade_fee_fx" */
  feeFx?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  order?: Maybe<Order>;
  orderUid?: Maybe<Scalars['uuid']>;
  price: Scalars['numeric'];
  /** A computed field, executes function "trade_price_fx" */
  priceFx?: Maybe<Scalars['numeric']>;
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  totalValue: Scalars['numeric'];
  /** A computed field, executes function "trade_total_value_fx" */
  totalValueFx?: Maybe<Scalars['numeric']>;
  tradeId: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userUid: Scalars['uuid'];
  value: Scalars['numeric'];
  /** A computed field, executes function "trade_value_fx" */
  valueFx?: Maybe<Scalars['numeric']>;
  volume: Scalars['numeric'];
};


/** columns and relationships of "trade" */
export type TradeFeeFxArgs = {
  args: FeeFxTradeArgs;
};


/** columns and relationships of "trade" */
export type TradePriceFxArgs = {
  args: PriceFxTradeArgs;
};


/** columns and relationships of "trade" */
export type TradeTotalValueFxArgs = {
  args: TotalValueFxTradeArgs;
};


/** columns and relationships of "trade" */
export type TradeValueFxArgs = {
  args: ValueFxTradeArgs;
};

/** aggregated selection of "trade" */
export type TradeAggregate = {
  __typename?: 'TradeAggregate';
  aggregate?: Maybe<TradeAggregateFields>;
  nodes: Array<Trade>;
};

/** aggregate fields of "trade" */
export type TradeAggregateFields = {
  __typename?: 'TradeAggregateFields';
  avg?: Maybe<TradeAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TradeMaxFields>;
  min?: Maybe<TradeMinFields>;
  stddev?: Maybe<TradeStddevFields>;
  stddevPop?: Maybe<TradeStddevPopFields>;
  stddevSamp?: Maybe<TradeStddevSampFields>;
  sum?: Maybe<TradeSumFields>;
  varPop?: Maybe<TradeVarPopFields>;
  varSamp?: Maybe<TradeVarSampFields>;
  variance?: Maybe<TradeVarianceFields>;
};


/** aggregate fields of "trade" */
export type TradeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TradeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade" */
export type TradeAggregateOrderBy = {
  avg?: InputMaybe<TradeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TradeMaxOrderBy>;
  min?: InputMaybe<TradeMinOrderBy>;
  stddev?: InputMaybe<TradeStddevOrderBy>;
  stddev_pop?: InputMaybe<TradeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TradeStddevSampOrderBy>;
  sum?: InputMaybe<TradeSumOrderBy>;
  var_pop?: InputMaybe<TradeVarPopOrderBy>;
  var_samp?: InputMaybe<TradeVarSampOrderBy>;
  variance?: InputMaybe<TradeVarianceOrderBy>;
};

/** aggregate avg on columns */
export type TradeAvgFields = {
  __typename?: 'TradeAvgFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade" */
export type TradeAvgOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

export type TradeAvgPriceByWindowArgs = {
  currency?: InputMaybe<Scalars['String']>;
  group_by?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type TradeBoolExp = {
  _and?: InputMaybe<Array<TradeBoolExp>>;
  _not?: InputMaybe<TradeBoolExp>;
  _or?: InputMaybe<Array<TradeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  fee?: InputMaybe<NumericComparisonExp>;
  order?: InputMaybe<OrderBoolExp>;
  orderUid?: InputMaybe<UuidComparisonExp>;
  price?: InputMaybe<NumericComparisonExp>;
  primaryCurrency?: InputMaybe<StringComparisonExp>;
  secondaryCurrency?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  totalValue?: InputMaybe<NumericComparisonExp>;
  tradeId?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
  value?: InputMaybe<NumericComparisonExp>;
  volume?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type TradeMaxFields = {
  __typename?: 'TradeMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  orderUid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  secondaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  tradeId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "trade" */
export type TradeMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  fee?: InputMaybe<OrderBy>;
  orderUid?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  tradeId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TradeMinFields = {
  __typename?: 'TradeMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  orderUid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  secondaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  tradeId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "trade" */
export type TradeMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  fee?: InputMaybe<OrderBy>;
  orderUid?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  tradeId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "trade". */
export type TradeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  fee?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderOrderBy>;
  orderUid?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  secondaryCurrency?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  tradeId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** select columns of table "trade" */
export enum TradeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  Fee = 'fee',
  /** column name */
  OrderUid = 'orderUid',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primaryCurrency',
  /** column name */
  SecondaryCurrency = 'secondaryCurrency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'totalValue',
  /** column name */
  TradeId = 'tradeId',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** aggregate stddev on columns */
export type TradeStddevFields = {
  __typename?: 'TradeStddevFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade" */
export type TradeStddevOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TradeStddevPopFields = {
  __typename?: 'TradeStddevPopFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade" */
export type TradeStddevPopOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TradeStddevSampFields = {
  __typename?: 'TradeStddevSampFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade" */
export type TradeStddevSampOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

export type TradeSumByWindowArgs = {
  currency?: InputMaybe<Scalars['String']>;
  group_by?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type TradeSumFields = {
  __typename?: 'TradeSumFields';
  fee?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  totalValue?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "trade" */
export type TradeSumOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type TradeVarPopFields = {
  __typename?: 'TradeVarPopFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade" */
export type TradeVarPopOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TradeVarSampFields = {
  __typename?: 'TradeVarSampFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade" */
export type TradeVarSampOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TradeVarianceFields = {
  __typename?: 'TradeVarianceFields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade" */
export type TradeVarianceOrderBy = {
  fee?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** columns and relationships of "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindow = {
  __typename?: 'TypeTradeAvgPriceByWindow';
  avgPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  userUid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "type_trade_avg_price_by_window". All fields are combined with a logical 'AND'. */
export type TypeTradeAvgPriceByWindowBoolExp = {
  _and?: InputMaybe<Array<TypeTradeAvgPriceByWindowBoolExp>>;
  _not?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>;
  _or?: InputMaybe<Array<TypeTradeAvgPriceByWindowBoolExp>>;
  avgPrice?: InputMaybe<NumericComparisonExp>;
  price?: InputMaybe<NumericComparisonExp>;
  primaryCurrency?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  totalValue?: InputMaybe<NumericComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
  volume?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "type_trade_avg_price_by_window". */
export type TypeTradeAvgPriceByWindowOrderBy = {
  avgPrice?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  primaryCurrency?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** select columns of table "type_trade_avg_price_by_window" */
export enum TypeTradeAvgPriceByWindowSelectColumn {
  /** column name */
  AvgPrice = 'avgPrice',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primaryCurrency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'totalValue',
  /** column name */
  UserUid = 'userUid',
  /** column name */
  Volume = 'volume'
}

/** columns and relationships of "type_trade_sum_by_window" */
export type TypeTradeSumByWindow = {
  __typename?: 'TypeTradeSumByWindow';
  primaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "type_trade_sum_by_window". All fields are combined with a logical 'AND'. */
export type TypeTradeSumByWindowBoolExp = {
  _and?: InputMaybe<Array<TypeTradeSumByWindowBoolExp>>;
  _not?: InputMaybe<TypeTradeSumByWindowBoolExp>;
  _or?: InputMaybe<Array<TypeTradeSumByWindowBoolExp>>;
  primaryCurrency?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  totalValue?: InputMaybe<NumericComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
  value?: InputMaybe<NumericComparisonExp>;
  volume?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "type_trade_sum_by_window". */
export type TypeTradeSumByWindowOrderBy = {
  primaryCurrency?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalValue?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  volume?: InputMaybe<OrderBy>;
};

/** select columns of table "type_trade_sum_by_window" */
export enum TypeTradeSumByWindowSelectColumn {
  /** column name */
  PrimaryCurrency = 'primaryCurrency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'totalValue',
  /** column name */
  UserUid = 'userUid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

export type UpdateDcaOrderOutput = {
  __typename?: 'UpdateDcaOrderOutput';
  dcaOrder?: Maybe<DcaOrder>;
  dcaOrderUid: Scalars['uuid'];
};

export type UpdateSubscriptionOutput = {
  __typename?: 'UpdateSubscriptionOutput';
  stripeSubscription?: Maybe<StripeSubscription>;
  subscriptionId: Scalars['String'];
};

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput';
  userExchangeKeys?: Maybe<UserExchangeKeys>;
  userExchangeKeysUid: Scalars['uuid'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  user?: Maybe<User>;
  userUid: Scalars['uuid'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  dcaOrderHistories: Array<DcaOrderHistory>;
  /** An aggregate relationship */
  dcaOrderHistoriesAggregate: DcaOrderHistoryAggregate;
  /** An array relationship */
  dcaOrders: Array<DcaOrder>;
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  ordersAggregate: OrderAggregate;
  timezone: Scalars['String'];
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  tradesAggregate: TradeAggregate;
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user2fa?: Maybe<User2fa>;
  /** An array relationship */
  userDevices: Array<UserDevice>;
  /** An aggregate relationship */
  userDevicesAggregate: UserDeviceAggregate;
  /** An array relationship */
  userExchangeKeys: Array<UserExchangeKeys>;
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate;
};


/** columns and relationships of "user" */
export type UserDcaOrderHistoriesArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


/** columns and relationships of "user" */
export type UserDcaOrderHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


/** columns and relationships of "user" */
export type UserDcaOrdersArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "user" */
export type UserDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "user" */
export type UserOrdersArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


/** columns and relationships of "user" */
export type UserOrdersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


/** columns and relationships of "user" */
export type UserTradesArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


/** columns and relationships of "user" */
export type UserTradesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


/** columns and relationships of "user" */
export type UserUserDevicesArgs = {
  distinctOn?: InputMaybe<Array<UserDeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserDeviceOrderBy>>;
  where?: InputMaybe<UserDeviceBoolExp>;
};


/** columns and relationships of "user" */
export type UserUserDevicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserDeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserDeviceOrderBy>>;
  where?: InputMaybe<UserDeviceBoolExp>;
};


/** columns and relationships of "user" */
export type UserUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};


/** columns and relationships of "user" */
export type UserUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};

/** columns and relationships of "user_2fa" */
export type User2fa = {
  __typename?: 'User2fa';
  createdAt: Scalars['timestamptz'];
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userUid: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "user_2fa". All fields are combined with a logical 'AND'. */
export type User2faBoolExp = {
  _and?: InputMaybe<Array<User2faBoolExp>>;
  _not?: InputMaybe<User2faBoolExp>;
  _or?: InputMaybe<Array<User2faBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** Ordering options when selecting data from "user_2fa". */
export type User2faOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** select columns of table "user_2fa" */
export enum User2faSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>;
  dcaOrders?: InputMaybe<DcaOrderBoolExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  orders?: InputMaybe<OrderBoolExp>;
  timezone?: InputMaybe<StringComparisonExp>;
  trades?: InputMaybe<TradeBoolExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user2fa?: InputMaybe<User2faBoolExp>;
  userDevices?: InputMaybe<UserDeviceBoolExp>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>;
};

/** columns and relationships of "user_device" */
export type UserDevice = {
  __typename?: 'UserDevice';
  accessedAt: Scalars['timestamptz'];
  createdAt: Scalars['timestamptz'];
  name: Scalars['String'];
  trusted: Scalars['Boolean'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  userUid: Scalars['uuid'];
};

/** aggregated selection of "user_device" */
export type UserDeviceAggregate = {
  __typename?: 'UserDeviceAggregate';
  aggregate?: Maybe<UserDeviceAggregateFields>;
  nodes: Array<UserDevice>;
};

/** aggregate fields of "user_device" */
export type UserDeviceAggregateFields = {
  __typename?: 'UserDeviceAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserDeviceMaxFields>;
  min?: Maybe<UserDeviceMinFields>;
};


/** aggregate fields of "user_device" */
export type UserDeviceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserDeviceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_device" */
export type UserDeviceAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserDeviceMaxOrderBy>;
  min?: InputMaybe<UserDeviceMinOrderBy>;
};

/** Boolean expression to filter rows from the table "user_device". All fields are combined with a logical 'AND'. */
export type UserDeviceBoolExp = {
  _and?: InputMaybe<Array<UserDeviceBoolExp>>;
  _not?: InputMaybe<UserDeviceBoolExp>;
  _or?: InputMaybe<Array<UserDeviceBoolExp>>;
  accessedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  trusted?: InputMaybe<BooleanComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** aggregate max on columns */
export type UserDeviceMaxFields = {
  __typename?: 'UserDeviceMaxFields';
  accessedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_device" */
export type UserDeviceMaxOrderBy = {
  accessedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserDeviceMinFields = {
  __typename?: 'UserDeviceMinFields';
  accessedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_device" */
export type UserDeviceMinOrderBy = {
  accessedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_device" */
export type UserDeviceMutationResponse = {
  __typename?: 'UserDeviceMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserDevice>;
};

/** Ordering options when selecting data from "user_device". */
export type UserDeviceOrderBy = {
  accessedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  trusted?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_device */
export type UserDevicePkColumnsInput = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_device" */
export enum UserDeviceSelectColumn {
  /** column name */
  AccessedAt = 'accessedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  Trusted = 'trusted',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "user_device" */
export type UserDeviceSetInput = {
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type UserDeviceUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserDeviceSetInput>;
  where: UserDeviceBoolExp;
};

/** columns and relationships of "user_exchange_keys" */
export type UserExchangeKeys = {
  __typename?: 'UserExchangeKeys';
  /** A computed field, executes function "user_exchange_keys_balance" */
  balance?: Maybe<Array<Balance>>;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  dcaOrders: Array<DcaOrder>;
  /** An aggregate relationship */
  dcaOrdersAggregate: DcaOrderAggregate;
  description: Scalars['String'];
  /** An object relationship */
  exchange: Exchange;
  exchangeUid: Scalars['uuid'];
  invalidatedAt?: Maybe<Scalars['timestamptz']>;
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userUid: Scalars['uuid'];
};


/** columns and relationships of "user_exchange_keys" */
export type UserExchangeKeysBalanceArgs = {
  args: BalanceUserExchangeKeysArgs;
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


/** columns and relationships of "user_exchange_keys" */
export type UserExchangeKeysDcaOrdersArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


/** columns and relationships of "user_exchange_keys" */
export type UserExchangeKeysDcaOrdersAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};

/** aggregated selection of "user_exchange_keys" */
export type UserExchangeKeysAggregate = {
  __typename?: 'UserExchangeKeysAggregate';
  aggregate?: Maybe<UserExchangeKeysAggregateFields>;
  nodes: Array<UserExchangeKeys>;
};

/** aggregate fields of "user_exchange_keys" */
export type UserExchangeKeysAggregateFields = {
  __typename?: 'UserExchangeKeysAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserExchangeKeysMaxFields>;
  min?: Maybe<UserExchangeKeysMinFields>;
};


/** aggregate fields of "user_exchange_keys" */
export type UserExchangeKeysAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_exchange_keys" */
export type UserExchangeKeysAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserExchangeKeysMaxOrderBy>;
  min?: InputMaybe<UserExchangeKeysMinOrderBy>;
};

/** Boolean expression to filter rows from the table "user_exchange_keys". All fields are combined with a logical 'AND'. */
export type UserExchangeKeysBoolExp = {
  _and?: InputMaybe<Array<UserExchangeKeysBoolExp>>;
  _not?: InputMaybe<UserExchangeKeysBoolExp>;
  _or?: InputMaybe<Array<UserExchangeKeysBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrders?: InputMaybe<DcaOrderBoolExp>;
  description?: InputMaybe<StringComparisonExp>;
  exchange?: InputMaybe<ExchangeBoolExp>;
  exchangeUid?: InputMaybe<UuidComparisonExp>;
  invalidatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** aggregate max on columns */
export type UserExchangeKeysMaxFields = {
  __typename?: 'UserExchangeKeysMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_exchange_keys" */
export type UserExchangeKeysMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  invalidatedAt?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserExchangeKeysMinFields = {
  __typename?: 'UserExchangeKeysMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_exchange_keys" */
export type UserExchangeKeysMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  invalidatedAt?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_exchange_keys" */
export type UserExchangeKeysMutationResponse = {
  __typename?: 'UserExchangeKeysMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserExchangeKeys>;
};

/** Ordering options when selecting data from "user_exchange_keys". */
export type UserExchangeKeysOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  description?: InputMaybe<OrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  invalidatedAt?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** select columns of table "user_exchange_keys" */
export enum UserExchangeKeysSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  InvalidatedAt = 'invalidatedAt',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  ordersAggregate?: InputMaybe<OrderAggregateOrderBy>;
  timezone?: InputMaybe<OrderBy>;
  tradesAggregate?: InputMaybe<TradeAggregateOrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user2fa?: InputMaybe<User2faOrderBy>;
  userDevicesAggregate?: InputMaybe<UserDeviceAggregateOrderBy>;
  userExchangeKeysAggregate?: InputMaybe<UserExchangeKeysAggregateOrderBy>;
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ValidatUserPasswordResetOutput = {
  __typename?: 'ValidatUserPasswordResetOutput';
  email?: Maybe<Scalars['String']>;
  isValid: Scalars['Boolean'];
};

export type ValidateUserExchangeKeysLiveOutput = {
  __typename?: 'ValidateUserExchangeKeysLiveOutput';
  isValid: Scalars['Boolean'];
  validationMessage?: Maybe<Scalars['String']>;
};

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput';
  isValid: Scalars['Boolean'];
  userExchangeKeys?: Maybe<UserExchangeKeys>;
  userExchangeKeysUid: Scalars['uuid'];
  validationMessage?: Maybe<Scalars['String']>;
};

export type ValueFxTradeArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput';
  email: Scalars['String'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  actionCreateAuthToken?: Maybe<CreateAuthTokenOutput>;
  actionCreateDcaOrder?: Maybe<CreateDcaOrderResult>;
  actionCreateStripeSubscription: CreateStripeSubscription;
  actionCreateUser?: Maybe<CreateUserOutput>;
  actionCreateUserExchangeKeys?: Maybe<CreateUserExchangeKeysOutput>;
  actionEnableUser2fa?: Maybe<EnableUser2FaOutput>;
  actionRefreshAuthToken?: Maybe<RefreshAuthTokenOutput>;
  actionResetUserPassword: ResetUserPasswordOutput;
  actionSendUserEmailVerify: SendUserEmailVerifyOutput;
  actionSendUserPasswordReset: SendUserPasswordResetOutput;
  actionSyncExchangeOpenOrderList?: Maybe<SyncExchangeOpenOrderListOutput>;
  actionSyncExchangeTradeList?: Maybe<SyncExchangeTradeListOutput>;
  actionUpdateDcaOrder: UpdateDcaOrderOutput;
  actionUpdateStripeSubscription: UpdateSubscriptionOutput;
  actionUpdateUser: UpdateUserOutput;
  actionUpdateUserExchangeKeys?: Maybe<UpdateUserExchangeKeysOutput>;
  actionValidateUserExchangeKeys?: Maybe<ValidateUserExchangeKeysOutput>;
  actionValidateUserExchangeKeysLive?: Maybe<ValidateUserExchangeKeysLiveOutput>;
  actionValidateUserPasswordReset: ValidatUserPasswordResetOutput;
  actionVerifyUserEmail: VerifyUserEmailOutput;
  /** delete data from the table: "dca_order" */
  deleteDcaOrder?: Maybe<DcaOrderMutationResponse>;
  /** delete single row from the table: "dca_order" */
  deleteDcaOrderByPk?: Maybe<DcaOrder>;
  /** delete data from the table: "user_device" */
  deleteUserDevice?: Maybe<UserDeviceMutationResponse>;
  /** delete single row from the table: "user_device" */
  deleteUserDeviceByPk?: Maybe<UserDevice>;
  /** delete data from the table: "user_exchange_keys" */
  deleteUserExchangeKeys?: Maybe<UserExchangeKeysMutationResponse>;
  /** delete single row from the table: "user_exchange_keys" */
  deleteUserExchangeKeysByPk?: Maybe<UserExchangeKeys>;
  /** update data of the table: "dca_order" */
  updateDcaOrder?: Maybe<DcaOrderMutationResponse>;
  /** update single row of the table: "dca_order" */
  updateDcaOrderByPk?: Maybe<DcaOrder>;
  /** update multiples rows of table: "dca_order" */
  updateDcaOrderMany?: Maybe<Array<Maybe<DcaOrderMutationResponse>>>;
  /** update data of the table: "user_device" */
  updateUserDevice?: Maybe<UserDeviceMutationResponse>;
  /** update single row of the table: "user_device" */
  updateUserDeviceByPk?: Maybe<UserDevice>;
  /** update multiples rows of table: "user_device" */
  updateUserDeviceMany?: Maybe<Array<Maybe<UserDeviceMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootActionCreateAuthTokenArgs = {
  deviceId: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  token2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootActionCreateDcaOrderArgs = {
  dailyAverage: Scalars['Float'];
  intervalMs: Scalars['Int'];
  marketOffset: Scalars['Float'];
  marketUid: Scalars['uuid'];
  maxPrice?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  minValue?: InputMaybe<Scalars['Float']>;
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  startAt: Scalars['timestamp'];
  userExchangeKeysUid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootActionCreateStripeSubscriptionArgs = {
  priceId?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootActionCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionCreateUserExchangeKeysArgs = {
  description: Scalars['String'];
  exchangeUid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootActionEnableUser2faArgs = {
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionResetUserPasswordArgs = {
  deviceId: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
  newPassword: Scalars['String'];
  passwordResetSecret: Scalars['String'];
  token2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootActionSendUserPasswordResetArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionSyncExchangeOpenOrderListArgs = {
  userExchangeKeysUid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootActionSyncExchangeTradeListArgs = {
  forceSync?: InputMaybe<Scalars['Boolean']>;
  userExchangeKeysUid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootActionUpdateDcaOrderArgs = {
  dcaOrderUid: Scalars['uuid'];
  enabled: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootActionUpdateStripeSubscriptionArgs = {
  cancelAtPeriodEnd: Scalars['Boolean'];
  subscriptionId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootActionUpdateUserExchangeKeysArgs = {
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
  userExchangeKeysUid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootActionValidateUserExchangeKeysArgs = {
  userExchangeKeysUid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootActionValidateUserExchangeKeysLiveArgs = {
  exchangeUid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootActionValidateUserPasswordResetArgs = {
  passwordResetSecret: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionVerifyUserEmailArgs = {
  emailVerifySecret: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteDcaOrderArgs = {
  where: DcaOrderBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteDcaOrderByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserDeviceArgs = {
  where: UserDeviceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserDeviceByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserExchangeKeysArgs = {
  where: UserExchangeKeysBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserExchangeKeysByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdateDcaOrderArgs = {
  _inc?: InputMaybe<DcaOrderIncInput>;
  _set?: InputMaybe<DcaOrderSetInput>;
  where: DcaOrderBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateDcaOrderByPkArgs = {
  _inc?: InputMaybe<DcaOrderIncInput>;
  _set?: InputMaybe<DcaOrderSetInput>;
  pk_columns: DcaOrderPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateDcaOrderManyArgs = {
  updates: Array<DcaOrderUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserDeviceArgs = {
  _set?: InputMaybe<UserDeviceSetInput>;
  where: UserDeviceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserDeviceByPkArgs = {
  _set?: InputMaybe<UserDeviceSetInput>;
  pk_columns: UserDevicePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserDeviceManyArgs = {
  updates: Array<UserDeviceUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** Query information about a Stripe Subscription (direct from Stripe) */
  actionQueryLiveStripeSubscription: QueryLiveStripeSubscriptionOutput;
  actionQueryStripeConfig: QueryStripeConfigOutput;
  actionQueryUserLimit?: Maybe<QueryUserLimitOutput>;
  actionSetupUser2fa?: Maybe<SetupUser2FaOutput>;
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch data from the table: "balance" using primary key columns */
  balanceByPk?: Maybe<Balance>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch data from the table: "currency" using primary key columns */
  currencyByPk?: Maybe<Currency>;
  /** fetch data from the table: "dca_order" */
  dcaOrder: Array<DcaOrder>;
  /** fetch aggregated fields from the table: "dca_order" */
  dcaOrderAggregate: DcaOrderAggregate;
  /** fetch data from the table: "dca_order" using primary key columns */
  dcaOrderByPk?: Maybe<DcaOrder>;
  /** fetch data from the table: "dca_order_history" */
  dcaOrderHistory: Array<DcaOrderHistory>;
  /** fetch aggregated fields from the table: "dca_order_history" */
  dcaOrderHistoryAggregate: DcaOrderHistoryAggregate;
  /** fetch data from the table: "dca_order_history" using primary key columns */
  dcaOrderHistoryByPk?: Maybe<DcaOrderHistory>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch data from the table: "exchange" using primary key columns */
  exchangeByPk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchangePrimaryCurrency: Array<ExchangePrimaryCurrency>;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrency: Array<ExchangeSecondaryCurrency>;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch data from the table: "market" using primary key columns */
  marketByPk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  marketPrice: Array<MarketPrice>;
  /** fetch data from the table: "market_price" using primary key columns */
  marketPriceByPk?: Maybe<MarketPrice>;
  /** execute function "market_price_latest" which returns "market_price" */
  marketPriceLatest: Array<MarketPrice>;
  /** fetch data from the table: "market_trading_pair" */
  marketTradingPair: Array<MarketTradingPair>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  orderAggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  orderByPk?: Maybe<Order>;
  /** fetch data from the table: "stripe_price" */
  stripePrice: Array<StripePrice>;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripePriceByPk?: Maybe<StripePrice>;
  /** fetch data from the table: "stripe_product" */
  stripeProduct: Array<StripeProduct>;
  /** fetch data from the table: "stripe_product" using primary key columns */
  stripeProductByPk?: Maybe<StripeProduct>;
  /** fetch data from the table: "stripe_subscription" */
  stripeSubscription: Array<StripeSubscription>;
  /** fetch aggregated fields from the table: "stripe_subscription" */
  stripeSubscriptionAggregate: StripeSubscriptionAggregate;
  /** fetch data from the table: "stripe_subscription" using primary key columns */
  stripeSubscriptionByPk?: Maybe<StripeSubscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  tradeAggregate: TradeAggregate;
  /** execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  tradeAvgPriceByWindow: Array<TypeTradeAvgPriceByWindow>;
  /** fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  tradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindow: Array<TypeTradeAvgPriceByWindow>;
  /** fetch data from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user2fa: Array<User2fa>;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user2faByPk?: Maybe<User2fa>;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  userDevice: Array<UserDevice>;
  /** fetch aggregated fields from the table: "user_device" */
  userDeviceAggregate: UserDeviceAggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  userDeviceByPk?: Maybe<UserDevice>;
  /** An array relationship */
  userExchangeKeys: Array<UserExchangeKeys>;
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  userExchangeKeysByPk?: Maybe<UserExchangeKeys>;
};


export type Query_RootActionQueryLiveStripeSubscriptionArgs = {
  subscriptionId: Scalars['String'];
};


export type Query_RootBalanceArgs = {
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


export type Query_RootBalanceByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootCurrencyArgs = {
  distinctOn?: InputMaybe<Array<CurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrencyOrderBy>>;
  where?: InputMaybe<CurrencyBoolExp>;
};


export type Query_RootCurrencyByPkArgs = {
  symbol: Scalars['String'];
};


export type Query_RootDcaOrderArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


export type Query_RootDcaOrderAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


export type Query_RootDcaOrderByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootDcaOrderHistoryArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


export type Query_RootDcaOrderHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


export type Query_RootDcaOrderHistoryByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootExchangeArgs = {
  distinctOn?: InputMaybe<Array<ExchangeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangeOrderBy>>;
  where?: InputMaybe<ExchangeBoolExp>;
};


export type Query_RootExchangeByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootExchangePrimaryCurrencyArgs = {
  distinctOn?: InputMaybe<Array<ExchangePrimaryCurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangePrimaryCurrencyOrderBy>>;
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>;
};


export type Query_RootExchangePrimaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootExchangeSecondaryCurrencyArgs = {
  distinctOn?: InputMaybe<Array<ExchangeSecondaryCurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangeSecondaryCurrencyOrderBy>>;
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>;
};


export type Query_RootExchangeSecondaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootMarketArgs = {
  distinctOn?: InputMaybe<Array<MarketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketOrderBy>>;
  where?: InputMaybe<MarketBoolExp>;
};


export type Query_RootMarketByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootMarketPriceArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};


export type Query_RootMarketPriceByPkArgs = {
  assetSymbol: Scalars['String'];
  currency: Scalars['String'];
  marketUid: Scalars['uuid'];
  sourceCurrency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Query_RootMarketPriceLatestArgs = {
  args: MarketPriceLatestArgs;
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};


export type Query_RootMarketTradingPairArgs = {
  distinctOn?: InputMaybe<Array<MarketTradingPairSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketTradingPairOrderBy>>;
  where?: InputMaybe<MarketTradingPairBoolExp>;
};


export type Query_RootOrderArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


export type Query_RootOrderAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


export type Query_RootOrderByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootStripePriceArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};


export type Query_RootStripePriceByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootStripeProductArgs = {
  distinctOn?: InputMaybe<Array<StripeProductSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeProductOrderBy>>;
  where?: InputMaybe<StripeProductBoolExp>;
};


export type Query_RootStripeProductByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootStripeSubscriptionArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};


export type Query_RootStripeSubscriptionAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};


export type Query_RootStripeSubscriptionByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootTradeArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


export type Query_RootTradeAggregateArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


export type Query_RootTradeAvgPriceByWindowArgs = {
  args: TradeAvgPriceByWindowArgs;
  distinctOn?: InputMaybe<Array<TypeTradeAvgPriceByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeAvgPriceByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>;
};


export type Query_RootTradeByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootTradeSumByWindowArgs = {
  args: TradeSumByWindowArgs;
  distinctOn?: InputMaybe<Array<TypeTradeSumByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeSumByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>;
};


export type Query_RootTypeTradeAvgPriceByWindowArgs = {
  distinctOn?: InputMaybe<Array<TypeTradeAvgPriceByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeAvgPriceByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>;
};


export type Query_RootTypeTradeSumByWindowArgs = {
  distinctOn?: InputMaybe<Array<TypeTradeSumByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeSumByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>;
};


export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUser2faArgs = {
  distinctOn?: InputMaybe<Array<User2faSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<User2faOrderBy>>;
  where?: InputMaybe<User2faBoolExp>;
};


export type Query_RootUser2faByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUserByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUserDeviceArgs = {
  distinctOn?: InputMaybe<Array<UserDeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserDeviceOrderBy>>;
  where?: InputMaybe<UserDeviceBoolExp>;
};


export type Query_RootUserDeviceAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserDeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserDeviceOrderBy>>;
  where?: InputMaybe<UserDeviceBoolExp>;
};


export type Query_RootUserDeviceByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};


export type Query_RootUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};


export type Query_RootUserExchangeKeysByPkArgs = {
  uid: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch data from the table: "balance" using primary key columns */
  balanceByPk?: Maybe<Balance>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch data from the table: "currency" using primary key columns */
  currencyByPk?: Maybe<Currency>;
  /** fetch data from the table: "dca_order" */
  dcaOrder: Array<DcaOrder>;
  /** fetch aggregated fields from the table: "dca_order" */
  dcaOrderAggregate: DcaOrderAggregate;
  /** fetch data from the table: "dca_order" using primary key columns */
  dcaOrderByPk?: Maybe<DcaOrder>;
  /** fetch data from the table: "dca_order_history" */
  dcaOrderHistory: Array<DcaOrderHistory>;
  /** fetch aggregated fields from the table: "dca_order_history" */
  dcaOrderHistoryAggregate: DcaOrderHistoryAggregate;
  /** fetch data from the table: "dca_order_history" using primary key columns */
  dcaOrderHistoryByPk?: Maybe<DcaOrderHistory>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch data from the table: "exchange" using primary key columns */
  exchangeByPk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchangePrimaryCurrency: Array<ExchangePrimaryCurrency>;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrency: Array<ExchangeSecondaryCurrency>;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch data from the table: "market" using primary key columns */
  marketByPk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  marketPrice: Array<MarketPrice>;
  /** fetch data from the table: "market_price" using primary key columns */
  marketPriceByPk?: Maybe<MarketPrice>;
  /** execute function "market_price_latest" which returns "market_price" */
  marketPriceLatest: Array<MarketPrice>;
  /** fetch data from the table: "market_trading_pair" */
  marketTradingPair: Array<MarketTradingPair>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  orderAggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  orderByPk?: Maybe<Order>;
  /** fetch data from the table: "stripe_price" */
  stripePrice: Array<StripePrice>;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripePriceByPk?: Maybe<StripePrice>;
  /** fetch data from the table: "stripe_product" */
  stripeProduct: Array<StripeProduct>;
  /** fetch data from the table: "stripe_product" using primary key columns */
  stripeProductByPk?: Maybe<StripeProduct>;
  /** fetch data from the table: "stripe_subscription" */
  stripeSubscription: Array<StripeSubscription>;
  /** fetch aggregated fields from the table: "stripe_subscription" */
  stripeSubscriptionAggregate: StripeSubscriptionAggregate;
  /** fetch data from the table: "stripe_subscription" using primary key columns */
  stripeSubscriptionByPk?: Maybe<StripeSubscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  tradeAggregate: TradeAggregate;
  /** execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  tradeAvgPriceByWindow: Array<TypeTradeAvgPriceByWindow>;
  /** fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  tradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindow: Array<TypeTradeAvgPriceByWindow>;
  /** fetch data from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user2fa: Array<User2fa>;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user2faByPk?: Maybe<User2fa>;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  userDevice: Array<UserDevice>;
  /** fetch aggregated fields from the table: "user_device" */
  userDeviceAggregate: UserDeviceAggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  userDeviceByPk?: Maybe<UserDevice>;
  /** An array relationship */
  userExchangeKeys: Array<UserExchangeKeys>;
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  userExchangeKeysByPk?: Maybe<UserExchangeKeys>;
};


export type Subscription_RootBalanceArgs = {
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


export type Subscription_RootBalanceByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootCurrencyArgs = {
  distinctOn?: InputMaybe<Array<CurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrencyOrderBy>>;
  where?: InputMaybe<CurrencyBoolExp>;
};


export type Subscription_RootCurrencyByPkArgs = {
  symbol: Scalars['String'];
};


export type Subscription_RootDcaOrderArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


export type Subscription_RootDcaOrderAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderOrderBy>>;
  where?: InputMaybe<DcaOrderBoolExp>;
};


export type Subscription_RootDcaOrderByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootDcaOrderHistoryArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


export type Subscription_RootDcaOrderHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<DcaOrderHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DcaOrderHistoryOrderBy>>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
};


export type Subscription_RootDcaOrderHistoryByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootExchangeArgs = {
  distinctOn?: InputMaybe<Array<ExchangeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangeOrderBy>>;
  where?: InputMaybe<ExchangeBoolExp>;
};


export type Subscription_RootExchangeByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootExchangePrimaryCurrencyArgs = {
  distinctOn?: InputMaybe<Array<ExchangePrimaryCurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangePrimaryCurrencyOrderBy>>;
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>;
};


export type Subscription_RootExchangePrimaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootExchangeSecondaryCurrencyArgs = {
  distinctOn?: InputMaybe<Array<ExchangeSecondaryCurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ExchangeSecondaryCurrencyOrderBy>>;
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>;
};


export type Subscription_RootExchangeSecondaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootMarketArgs = {
  distinctOn?: InputMaybe<Array<MarketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketOrderBy>>;
  where?: InputMaybe<MarketBoolExp>;
};


export type Subscription_RootMarketByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootMarketPriceArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};


export type Subscription_RootMarketPriceByPkArgs = {
  assetSymbol: Scalars['String'];
  currency: Scalars['String'];
  marketUid: Scalars['uuid'];
  sourceCurrency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Subscription_RootMarketPriceLatestArgs = {
  args: MarketPriceLatestArgs;
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};


export type Subscription_RootMarketTradingPairArgs = {
  distinctOn?: InputMaybe<Array<MarketTradingPairSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketTradingPairOrderBy>>;
  where?: InputMaybe<MarketTradingPairBoolExp>;
};


export type Subscription_RootOrderArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


export type Subscription_RootOrderAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  where?: InputMaybe<OrderBoolExp>;
};


export type Subscription_RootOrderByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootStripePriceArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};


export type Subscription_RootStripePriceByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStripeProductArgs = {
  distinctOn?: InputMaybe<Array<StripeProductSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeProductOrderBy>>;
  where?: InputMaybe<StripeProductBoolExp>;
};


export type Subscription_RootStripeProductByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStripeSubscriptionArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};


export type Subscription_RootStripeSubscriptionAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};


export type Subscription_RootStripeSubscriptionByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTradeArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


export type Subscription_RootTradeAggregateArgs = {
  distinctOn?: InputMaybe<Array<TradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TradeOrderBy>>;
  where?: InputMaybe<TradeBoolExp>;
};


export type Subscription_RootTradeAvgPriceByWindowArgs = {
  args: TradeAvgPriceByWindowArgs;
  distinctOn?: InputMaybe<Array<TypeTradeAvgPriceByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeAvgPriceByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>;
};


export type Subscription_RootTradeByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootTradeSumByWindowArgs = {
  args: TradeSumByWindowArgs;
  distinctOn?: InputMaybe<Array<TypeTradeSumByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeSumByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>;
};


export type Subscription_RootTypeTradeAvgPriceByWindowArgs = {
  distinctOn?: InputMaybe<Array<TypeTradeAvgPriceByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeAvgPriceByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeAvgPriceByWindowBoolExp>;
};


export type Subscription_RootTypeTradeSumByWindowArgs = {
  distinctOn?: InputMaybe<Array<TypeTradeSumByWindowSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeTradeSumByWindowOrderBy>>;
  where?: InputMaybe<TypeTradeSumByWindowBoolExp>;
};


export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUser2faArgs = {
  distinctOn?: InputMaybe<Array<User2faSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<User2faOrderBy>>;
  where?: InputMaybe<User2faBoolExp>;
};


export type Subscription_RootUser2faByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUserByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUserDeviceArgs = {
  distinctOn?: InputMaybe<Array<UserDeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserDeviceOrderBy>>;
  where?: InputMaybe<UserDeviceBoolExp>;
};


export type Subscription_RootUserDeviceAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserDeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserDeviceOrderBy>>;
  where?: InputMaybe<UserDeviceBoolExp>;
};


export type Subscription_RootUserDeviceByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUserExchangeKeysArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};


export type Subscription_RootUserExchangeKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserExchangeKeysOrderBy>>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};


export type Subscription_RootUserExchangeKeysByPkArgs = {
  uid: Scalars['uuid'];
};
