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

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  user?: Maybe<User>;
  user_uid: Scalars['String'];
};

export type CreateDcaOrderResult = {
  __typename?: 'CreateDCAOrderResult';
  dca_order?: Maybe<Dca_Order>;
  dca_order_uid: Scalars['uuid'];
};

export type CreateStripeSubscription = {
  __typename?: 'CreateStripeSubscription';
  client_secret: Scalars['String'];
  stripe_subscription?: Maybe<Stripe_Subscription>;
  subscription_id: Scalars['String'];
};

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput';
  user_exchange_keys?: Maybe<User_Exchange_Keys>;
  user_exchange_keys_uid: Scalars['uuid'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  user_uid: Scalars['String'];
};

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type QueryLiveStripeSubscriptionOutput = {
  __typename?: 'QueryLiveStripeSubscriptionOutput';
  client_secret: Scalars['String'];
  id: Scalars['String'];
};

export type QueryStripeConfigOutput = {
  __typename?: 'QueryStripeConfigOutput';
  publishable_key: Scalars['String'];
};

export type QueryUserLimitOutput = {
  __typename?: 'QueryUserLimitOutput';
  user_limit: Scalars['jsonb'];
  user_uid: Scalars['String'];
};

export type RefreshAuthTokenOutput = {
  __typename?: 'RefreshAuthTokenOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  user?: Maybe<User>;
  user_uid: Scalars['String'];
};

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput';
  user_uid: Scalars['uuid'];
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
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
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

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type UpdateDcaOrderOutput = {
  __typename?: 'UpdateDCAOrderOutput';
  dca_order?: Maybe<Dca_Order>;
  dca_order_uid: Scalars['uuid'];
};

export type UpdateSubscriptionOutput = {
  __typename?: 'UpdateSubscriptionOutput';
  stripe_subscription?: Maybe<Stripe_Subscription>;
  subscription_id: Scalars['String'];
};

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput';
  user_exchange_keys?: Maybe<User_Exchange_Keys>;
  user_exchange_keys_uid: Scalars['uuid'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  user?: Maybe<User>;
  user_uid: Scalars['uuid'];
};

export type ValidatUserPasswordResetOutput = {
  __typename?: 'ValidatUserPasswordResetOutput';
  email?: Maybe<Scalars['String']>;
  is_valid: Scalars['Boolean'];
};

export type ValidateUserExchangeKeysLiveOutput = {
  __typename?: 'ValidateUserExchangeKeysLiveOutput';
  is_valid: Scalars['Boolean'];
  validation_message?: Maybe<Scalars['String']>;
};

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput';
  is_valid: Scalars['Boolean'];
  user_exchange_keys?: Maybe<User_Exchange_Keys>;
  user_exchange_keys_uid: Scalars['uuid'];
  validation_message?: Maybe<Scalars['String']>;
};

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput';
  email: Scalars['String'];
};

export type Available_Balance_Fx_Balance_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "balance" */
export type Balance = {
  __typename?: 'balance';
  available_balance: Scalars['numeric'];
  /** A computed field, executes function "balance_available_balance_fx" */
  available_balance_fx?: Maybe<Scalars['numeric']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  currency_symbol: Scalars['String'];
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  total_balance: Scalars['numeric'];
  /** A computed field, executes function "balance_total_balance_fx" */
  total_balance_fx?: Maybe<Scalars['numeric']>;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  user_exchange_key: User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "balance" */
export type BalanceAvailable_Balance_FxArgs = {
  args: Available_Balance_Fx_Balance_Args;
};


/** columns and relationships of "balance" */
export type BalanceTotal_Balance_FxArgs = {
  args: Total_Balance_Fx_Balance_Args;
};

/** Boolean expression to filter rows from the table "balance". All fields are combined with a logical 'AND'. */
export type Balance_Bool_Exp = {
  _and?: InputMaybe<Array<Balance_Bool_Exp>>;
  _not?: InputMaybe<Balance_Bool_Exp>;
  _or?: InputMaybe<Array<Balance_Bool_Exp>>;
  available_balance?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  currency_symbol?: InputMaybe<String_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  total_balance?: InputMaybe<Numeric_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_exchange_key?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "balance". */
export type Balance_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  total_balance?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_exchange_key?: InputMaybe<User_Exchange_Keys_Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** select columns of table "balance" */
export enum Balance_Select_Column {
  /** column name */
  AvailableBalance = 'available_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencySymbol = 'currency_symbol',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  TotalBalance = 'total_balance',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** column name */
  UserUid = 'user_uid'
}

export type Balance_User_Exchange_Keys_Args = {
  timestamp_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
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

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'currency';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Currency_Bool_Exp>>;
  _not?: InputMaybe<Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "currency". */
export type Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "dca_order" */
export type Dca_Order = {
  __typename?: 'dca_order';
  created_at: Scalars['timestamptz'];
  daily_average: Scalars['numeric'];
  /** An array relationship */
  dca_order_histories: Array<Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Dca_Order_History_Aggregate;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  exchange: Exchange;
  exchange_market_trading_pair?: Maybe<Array<Market_Trading_Pair>>;
  exchange_uid: Scalars['uuid'];
  interval_ms: Scalars['Int'];
  last_run_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  market: Market;
  market_offset: Scalars['numeric'];
  /** An array relationship */
  market_prices: Array<Market_Price>;
  market_uid: Scalars['uuid'];
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  next_run_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  primary_currency: Currency;
  primary_currency_symbol: Scalars['String'];
  /** An object relationship */
  secondary_currency: Currency;
  secondary_currency_symbol: Scalars['String'];
  start_at: Scalars['timestamptz'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An object relationship */
  user_exchange_keys: User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "dca_order" */
export type Dca_OrderDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderExchange_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


/** columns and relationships of "dca_order" */
export type Dca_OrderMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** aggregated selection of "dca_order" */
export type Dca_Order_Aggregate = {
  __typename?: 'dca_order_aggregate';
  aggregate?: Maybe<Dca_Order_Aggregate_Fields>;
  nodes: Array<Dca_Order>;
};

/** aggregate fields of "dca_order" */
export type Dca_Order_Aggregate_Fields = {
  __typename?: 'dca_order_aggregate_fields';
  avg?: Maybe<Dca_Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dca_Order_Max_Fields>;
  min?: Maybe<Dca_Order_Min_Fields>;
  stddev?: Maybe<Dca_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Dca_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dca_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Dca_Order_Sum_Fields>;
  var_pop?: Maybe<Dca_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Dca_Order_Var_Samp_Fields>;
  variance?: Maybe<Dca_Order_Variance_Fields>;
};


/** aggregate fields of "dca_order" */
export type Dca_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dca_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dca_order" */
export type Dca_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Dca_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dca_Order_Max_Order_By>;
  min?: InputMaybe<Dca_Order_Min_Order_By>;
  stddev?: InputMaybe<Dca_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dca_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dca_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dca_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Dca_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dca_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Dca_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dca_Order_Avg_Fields = {
  __typename?: 'dca_order_avg_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dca_order" */
export type Dca_Order_Avg_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dca_order". All fields are combined with a logical 'AND'. */
export type Dca_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Dca_Order_Bool_Exp>>;
  _not?: InputMaybe<Dca_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Dca_Order_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  daily_average?: InputMaybe<Numeric_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Bool_Exp>;
  enabled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_market_trading_pair?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  interval_ms?: InputMaybe<Int_Comparison_Exp>;
  last_run_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  market?: InputMaybe<Market_Bool_Exp>;
  market_offset?: InputMaybe<Numeric_Comparison_Exp>;
  market_prices?: InputMaybe<Market_Price_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  max_price?: InputMaybe<Numeric_Comparison_Exp>;
  max_value?: InputMaybe<Numeric_Comparison_Exp>;
  min_price?: InputMaybe<Numeric_Comparison_Exp>;
  min_value?: InputMaybe<Numeric_Comparison_Exp>;
  next_run_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  primary_currency?: InputMaybe<Currency_Bool_Exp>;
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<Currency_Bool_Exp>;
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "dca_order_history" */
export type Dca_Order_History = {
  __typename?: 'dca_order_history';
  available_balance: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  created_order: Scalars['Boolean'];
  /** An object relationship */
  dca_order: Dca_Order;
  dca_order_uid: Scalars['uuid'];
  description: Scalars['String'];
  market_offset: Scalars['numeric'];
  market_price: Scalars['numeric'];
  /** An object relationship */
  order?: Maybe<Order>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  target_value: Scalars['numeric'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
};

/** aggregated selection of "dca_order_history" */
export type Dca_Order_History_Aggregate = {
  __typename?: 'dca_order_history_aggregate';
  aggregate?: Maybe<Dca_Order_History_Aggregate_Fields>;
  nodes: Array<Dca_Order_History>;
};

/** aggregate fields of "dca_order_history" */
export type Dca_Order_History_Aggregate_Fields = {
  __typename?: 'dca_order_history_aggregate_fields';
  avg?: Maybe<Dca_Order_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dca_Order_History_Max_Fields>;
  min?: Maybe<Dca_Order_History_Min_Fields>;
  stddev?: Maybe<Dca_Order_History_Stddev_Fields>;
  stddev_pop?: Maybe<Dca_Order_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dca_Order_History_Stddev_Samp_Fields>;
  sum?: Maybe<Dca_Order_History_Sum_Fields>;
  var_pop?: Maybe<Dca_Order_History_Var_Pop_Fields>;
  var_samp?: Maybe<Dca_Order_History_Var_Samp_Fields>;
  variance?: Maybe<Dca_Order_History_Variance_Fields>;
};


/** aggregate fields of "dca_order_history" */
export type Dca_Order_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dca_order_history" */
export type Dca_Order_History_Aggregate_Order_By = {
  avg?: InputMaybe<Dca_Order_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dca_Order_History_Max_Order_By>;
  min?: InputMaybe<Dca_Order_History_Min_Order_By>;
  stddev?: InputMaybe<Dca_Order_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dca_Order_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dca_Order_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dca_Order_History_Sum_Order_By>;
  var_pop?: InputMaybe<Dca_Order_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dca_Order_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Dca_Order_History_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dca_Order_History_Avg_Fields = {
  __typename?: 'dca_order_history_avg_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dca_order_history" */
export type Dca_Order_History_Avg_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dca_order_history". All fields are combined with a logical 'AND'. */
export type Dca_Order_History_Bool_Exp = {
  _and?: InputMaybe<Array<Dca_Order_History_Bool_Exp>>;
  _not?: InputMaybe<Dca_Order_History_Bool_Exp>;
  _or?: InputMaybe<Array<Dca_Order_History_Bool_Exp>>;
  available_balance?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_order?: InputMaybe<Boolean_Comparison_Exp>;
  dca_order?: InputMaybe<Dca_Order_Bool_Exp>;
  dca_order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  market_offset?: InputMaybe<Numeric_Comparison_Exp>;
  market_price?: InputMaybe<Numeric_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  target_value?: InputMaybe<Numeric_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dca_Order_History_Max_Fields = {
  __typename?: 'dca_order_history_max_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dca_order_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  target_value?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "dca_order_history" */
export type Dca_Order_History_Max_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dca_Order_History_Min_Fields = {
  __typename?: 'dca_order_history_min_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dca_order_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  target_value?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "dca_order_history" */
export type Dca_Order_History_Min_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dca_order_history". */
export type Dca_Order_History_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_order?: InputMaybe<Order_By>;
  dca_order?: InputMaybe<Dca_Order_Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "dca_order_history" */
export enum Dca_Order_History_Select_Column {
  /** column name */
  AvailableBalance = 'available_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedOrder = 'created_order',
  /** column name */
  DcaOrderUid = 'dca_order_uid',
  /** column name */
  Description = 'description',
  /** column name */
  MarketOffset = 'market_offset',
  /** column name */
  MarketPrice = 'market_price',
  /** column name */
  OrderUid = 'order_uid',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  TargetValue = 'target_value',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Dca_Order_History_Stddev_Fields = {
  __typename?: 'dca_order_history_stddev_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dca_order_history" */
export type Dca_Order_History_Stddev_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dca_Order_History_Stddev_Pop_Fields = {
  __typename?: 'dca_order_history_stddev_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dca_order_history" */
export type Dca_Order_History_Stddev_Pop_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dca_Order_History_Stddev_Samp_Fields = {
  __typename?: 'dca_order_history_stddev_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dca_order_history" */
export type Dca_Order_History_Stddev_Samp_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Dca_Order_History_Sum_Fields = {
  __typename?: 'dca_order_history_sum_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  target_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "dca_order_history" */
export type Dca_Order_History_Sum_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dca_Order_History_Var_Pop_Fields = {
  __typename?: 'dca_order_history_var_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dca_order_history" */
export type Dca_Order_History_Var_Pop_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dca_Order_History_Var_Samp_Fields = {
  __typename?: 'dca_order_history_var_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dca_order_history" */
export type Dca_Order_History_Var_Samp_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dca_Order_History_Variance_Fields = {
  __typename?: 'dca_order_history_variance_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dca_order_history" */
export type Dca_Order_History_Variance_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "dca_order" */
export type Dca_Order_Inc_Input = {
  daily_average?: InputMaybe<Scalars['numeric']>;
  interval_ms?: InputMaybe<Scalars['Int']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Dca_Order_Max_Fields = {
  __typename?: 'dca_order_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_average?: Maybe<Scalars['numeric']>;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  interval_ms?: Maybe<Scalars['Int']>;
  last_run_at?: Maybe<Scalars['timestamptz']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  next_run_at?: Maybe<Scalars['timestamptz']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "dca_order" */
export type Dca_Order_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  last_run_at?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  next_run_at?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dca_Order_Min_Fields = {
  __typename?: 'dca_order_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_average?: Maybe<Scalars['numeric']>;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  interval_ms?: Maybe<Scalars['Int']>;
  last_run_at?: Maybe<Scalars['timestamptz']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  next_run_at?: Maybe<Scalars['timestamptz']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "dca_order" */
export type Dca_Order_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  last_run_at?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  next_run_at?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "dca_order" */
export type Dca_Order_Mutation_Response = {
  __typename?: 'dca_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dca_Order>;
};

/** Ordering options when selecting data from "dca_order". */
export type Dca_Order_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Dca_Order_History_Aggregate_Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_market_trading_pair_aggregate?: InputMaybe<Market_Trading_Pair_Aggregate_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  last_run_at?: InputMaybe<Order_By>;
  market?: InputMaybe<Market_Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_prices_aggregate?: InputMaybe<Market_Price_Aggregate_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  next_run_at?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Currency_Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Currency_Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dca_order */
export type Dca_Order_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "dca_order" */
export enum Dca_Order_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyAverage = 'daily_average',
  /** column name */
  EnabledAt = 'enabled_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  IntervalMs = 'interval_ms',
  /** column name */
  LastRunAt = 'last_run_at',
  /** column name */
  MarketOffset = 'market_offset',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  MaxPrice = 'max_price',
  /** column name */
  MaxValue = 'max_value',
  /** column name */
  MinPrice = 'min_price',
  /** column name */
  MinValue = 'min_value',
  /** column name */
  NextRunAt = 'next_run_at',
  /** column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "dca_order" */
export type Dca_Order_Set_Input = {
  daily_average?: InputMaybe<Scalars['numeric']>;
  interval_ms?: InputMaybe<Scalars['Int']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
  start_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Dca_Order_Stddev_Fields = {
  __typename?: 'dca_order_stddev_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dca_order" */
export type Dca_Order_Stddev_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dca_Order_Stddev_Pop_Fields = {
  __typename?: 'dca_order_stddev_pop_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dca_order" */
export type Dca_Order_Stddev_Pop_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dca_Order_Stddev_Samp_Fields = {
  __typename?: 'dca_order_stddev_samp_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dca_order" */
export type Dca_Order_Stddev_Samp_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Dca_Order_Sum_Fields = {
  __typename?: 'dca_order_sum_fields';
  daily_average?: Maybe<Scalars['numeric']>;
  interval_ms?: Maybe<Scalars['Int']>;
  market_offset?: Maybe<Scalars['numeric']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "dca_order" */
export type Dca_Order_Sum_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

export type Dca_Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Dca_Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Dca_Order_Set_Input>;
  where: Dca_Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Dca_Order_Var_Pop_Fields = {
  __typename?: 'dca_order_var_pop_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dca_order" */
export type Dca_Order_Var_Pop_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dca_Order_Var_Samp_Fields = {
  __typename?: 'dca_order_var_samp_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dca_order" */
export type Dca_Order_Var_Samp_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dca_Order_Variance_Fields = {
  __typename?: 'dca_order_variance_fields';
  daily_average?: Maybe<Scalars['Float']>;
  interval_ms?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dca_order" */
export type Dca_Order_Variance_Order_By = {
  daily_average?: InputMaybe<Order_By>;
  interval_ms?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** columns and relationships of "exchange" */
export type Exchange = {
  __typename?: 'exchange';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  /** An array relationship */
  primary_currencies: Array<Exchange_Primary_Currency>;
  /** An array relationship */
  secondary_currencies: Array<Exchange_Secondary_Currency>;
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "exchange" */
export type ExchangeDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangePrimary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeSecondary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "exchange" */
export type ExchangeUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "exchange". All fields are combined with a logical 'AND'. */
export type Exchange_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  primary_currencies?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
  secondary_currencies?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "exchange". */
export type Exchange_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  primary_currencies_aggregate?: InputMaybe<Exchange_Primary_Currency_Aggregate_Order_By>;
  secondary_currencies_aggregate?: InputMaybe<Exchange_Secondary_Currency_Aggregate_Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<User_Exchange_Keys_Aggregate_Order_By>;
};

/** columns and relationships of "exchange_primary_currency" */
export type Exchange_Primary_Currency = {
  __typename?: 'exchange_primary_currency';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exchange_Primary_Currency_Max_Order_By>;
  min?: InputMaybe<Exchange_Primary_Currency_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "exchange_primary_currency". All fields are combined with a logical 'AND'. */
export type Exchange_Primary_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Primary_Currency_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Primary_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "exchange_primary_currency" */
export type Exchange_Primary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "exchange_primary_currency". */
export type Exchange_Primary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "exchange_primary_currency" */
export enum Exchange_Primary_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "exchange_secondary_currency" */
export type Exchange_Secondary_Currency = {
  __typename?: 'exchange_secondary_currency';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exchange_Secondary_Currency_Max_Order_By>;
  min?: InputMaybe<Exchange_Secondary_Currency_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "exchange_secondary_currency". All fields are combined with a logical 'AND'. */
export type Exchange_Secondary_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Exchange_Secondary_Currency_Bool_Exp>>;
  _not?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Exchange_Secondary_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "exchange_secondary_currency" */
export type Exchange_Secondary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "exchange_secondary_currency". */
export type Exchange_Secondary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currency_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "exchange_secondary_currency" */
export enum Exchange_Secondary_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select columns of table "exchange" */
export enum Exchange_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Fee_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "market" */
export type Market = {
  __typename?: 'market';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  market_prices: Array<Market_Price>;
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "market" */
export type MarketDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "market" */
export type MarketDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "market" */
export type MarketMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "market". All fields are combined with a logical 'AND'. */
export type Market_Bool_Exp = {
  _and?: InputMaybe<Array<Market_Bool_Exp>>;
  _not?: InputMaybe<Market_Bool_Exp>;
  _or?: InputMaybe<Array<Market_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  market_prices?: InputMaybe<Market_Price_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "market". */
export type Market_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  market_prices_aggregate?: InputMaybe<Market_Price_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "market_price" */
export type Market_Price = {
  __typename?: 'market_price';
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  fx_rate: Scalars['numeric'];
  /** An object relationship */
  market: Market;
  market_uid: Scalars['uuid'];
  price: Scalars['numeric'];
  source_currency: Scalars['bpchar'];
  source_price: Scalars['numeric'];
  timestamp: Scalars['timestamptz'];
};

/** order by aggregate values of table "market_price" */
export type Market_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Market_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Market_Price_Max_Order_By>;
  min?: InputMaybe<Market_Price_Min_Order_By>;
  stddev?: InputMaybe<Market_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Market_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Market_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Market_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Market_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Market_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Market_Price_Variance_Order_By>;
};

/** order by avg() on columns of table "market_price" */
export type Market_Price_Avg_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "market_price". All fields are combined with a logical 'AND'. */
export type Market_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Market_Price_Bool_Exp>>;
  _not?: InputMaybe<Market_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Market_Price_Bool_Exp>>;
  asset_symbol?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  fx_rate?: InputMaybe<Numeric_Comparison_Exp>;
  market?: InputMaybe<Market_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  source_currency?: InputMaybe<Bpchar_Comparison_Exp>;
  source_price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

export type Market_Price_Latest_Args = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "market_price" */
export type Market_Price_Max_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "market_price" */
export type Market_Price_Min_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "market_price". */
export type Market_Price_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market?: InputMaybe<Market_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "market_price" */
export enum Market_Price_Select_Column {
  /** column name */
  AssetSymbol = 'asset_symbol',
  /** column name */
  Currency = 'currency',
  /** column name */
  FxRate = 'fx_rate',
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  Price = 'price',
  /** column name */
  SourceCurrency = 'source_currency',
  /** column name */
  SourcePrice = 'source_price',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "market_price" */
export type Market_Price_Stddev_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "market_price" */
export type Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "market_price" */
export type Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "market_price" */
export type Market_Price_Sum_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "market_price" */
export type Market_Price_Var_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "market_price" */
export type Market_Price_Var_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "market_price" */
export type Market_Price_Variance_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** select columns of table "market" */
export enum Market_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "market_trading_pair" */
export type Market_Trading_Pair = {
  __typename?: 'market_trading_pair';
  /** An object relationship */
  currency: Currency;
  /** An object relationship */
  currencyBySecondaryCurrencySymbol: Currency;
  /** An object relationship */
  market: Market;
  /** An array relationship */
  market_prices: Array<Market_Price>;
  market_uid: Scalars['uuid'];
  primary_currency_symbol: Scalars['String'];
  secondary_currency_symbol: Scalars['String'];
};


/** columns and relationships of "market_trading_pair" */
export type Market_Trading_PairMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};

/** order by aggregate values of table "market_trading_pair" */
export type Market_Trading_Pair_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Market_Trading_Pair_Max_Order_By>;
  min?: InputMaybe<Market_Trading_Pair_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "market_trading_pair". All fields are combined with a logical 'AND'. */
export type Market_Trading_Pair_Bool_Exp = {
  _and?: InputMaybe<Array<Market_Trading_Pair_Bool_Exp>>;
  _not?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
  _or?: InputMaybe<Array<Market_Trading_Pair_Bool_Exp>>;
  currency?: InputMaybe<Currency_Bool_Exp>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Currency_Bool_Exp>;
  market?: InputMaybe<Market_Bool_Exp>;
  market_prices?: InputMaybe<Market_Price_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "market_trading_pair" */
export type Market_Trading_Pair_Max_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "market_trading_pair" */
export type Market_Trading_Pair_Min_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "market_trading_pair". */
export type Market_Trading_Pair_Order_By = {
  currency?: InputMaybe<Currency_Order_By>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Currency_Order_By>;
  market?: InputMaybe<Market_Order_By>;
  market_prices_aggregate?: InputMaybe<Market_Price_Aggregate_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** select columns of table "market_trading_pair" */
export enum Market_Trading_Pair_Select_Column {
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  action_create_auth_token?: Maybe<CreateAuthTokenOutput>;
  action_create_dca_order?: Maybe<CreateDcaOrderResult>;
  action_create_stripe_subscription: CreateStripeSubscription;
  action_create_user?: Maybe<CreateUserOutput>;
  action_create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>;
  action_enable_user_2fa?: Maybe<EnableUser2FaOutput>;
  action_refresh_auth_token?: Maybe<RefreshAuthTokenOutput>;
  action_reset_user_password: ResetUserPasswordOutput;
  action_send_user_email_verify: SendUserEmailVerifyOutput;
  action_send_user_password_reset: SendUserPasswordResetOutput;
  action_sync_exchange_open_order_list?: Maybe<SyncExchangeOpenOrderListOutput>;
  action_sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>;
  action_update_dca_order: UpdateDcaOrderOutput;
  action_update_stripe_subscription: UpdateSubscriptionOutput;
  action_update_user: UpdateUserOutput;
  action_update_user_exchange_keys?: Maybe<UpdateUserExchangeKeysOutput>;
  action_validate_user_exchange_keys?: Maybe<ValidateUserExchangeKeysOutput>;
  action_validate_user_exchange_keys_live?: Maybe<ValidateUserExchangeKeysLiveOutput>;
  action_validate_user_password_reset: ValidatUserPasswordResetOutput;
  action_verify_user_email: VerifyUserEmailOutput;
  /** delete data from the table: "dca_order" */
  delete_dca_order?: Maybe<Dca_Order_Mutation_Response>;
  /** delete single row from the table: "dca_order" */
  delete_dca_order_by_pk?: Maybe<Dca_Order>;
  /** delete data from the table: "user_device" */
  delete_user_device?: Maybe<User_Device_Mutation_Response>;
  /** delete single row from the table: "user_device" */
  delete_user_device_by_pk?: Maybe<User_Device>;
  /** delete data from the table: "user_exchange_keys" */
  delete_user_exchange_keys?: Maybe<User_Exchange_Keys_Mutation_Response>;
  /** delete single row from the table: "user_exchange_keys" */
  delete_user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
  /** update data of the table: "dca_order" */
  update_dca_order?: Maybe<Dca_Order_Mutation_Response>;
  /** update single row of the table: "dca_order" */
  update_dca_order_by_pk?: Maybe<Dca_Order>;
  /** update multiples rows of table: "dca_order" */
  update_dca_order_many?: Maybe<Array<Maybe<Dca_Order_Mutation_Response>>>;
  /** update data of the table: "user_device" */
  update_user_device?: Maybe<User_Device_Mutation_Response>;
  /** update single row of the table: "user_device" */
  update_user_device_by_pk?: Maybe<User_Device>;
  /** update multiples rows of table: "user_device" */
  update_user_device_many?: Maybe<Array<Maybe<User_Device_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAction_Create_Auth_TokenArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  token_2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Create_Dca_OrderArgs = {
  daily_average: Scalars['Float'];
  interval_ms: Scalars['Int'];
  market_offset: Scalars['Float'];
  market_uid: Scalars['uuid'];
  max_price?: InputMaybe<Scalars['Float']>;
  max_value?: InputMaybe<Scalars['Float']>;
  min_price?: InputMaybe<Scalars['Float']>;
  min_value?: InputMaybe<Scalars['Float']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  start_at: Scalars['timestamp'];
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Create_Stripe_SubscriptionArgs = {
  price_id?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Create_UserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Create_User_Exchange_KeysArgs = {
  description: Scalars['String'];
  exchange_uid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootAction_Enable_User_2faArgs = {
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Reset_User_PasswordArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  new_password: Scalars['String'];
  password_reset_secret: Scalars['String'];
  token_2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Send_User_Password_ResetArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Sync_Exchange_Open_Order_ListArgs = {
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Sync_Exchange_Trade_ListArgs = {
  force_sync?: InputMaybe<Scalars['Boolean']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Update_Dca_OrderArgs = {
  dca_order_uid: Scalars['uuid'];
  enabled: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootAction_Update_Stripe_SubscriptionArgs = {
  cancel_at_period_end: Scalars['Boolean'];
  subscription_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Update_UserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootAction_Update_User_Exchange_KeysArgs = {
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Validate_User_Exchange_KeysArgs = {
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAction_Validate_User_Exchange_Keys_LiveArgs = {
  exchange_uid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootAction_Validate_User_Password_ResetArgs = {
  password_reset_secret: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAction_Verify_User_EmailArgs = {
  email_verify_secret: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Dca_OrderArgs = {
  where: Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_DeviceArgs = {
  where: User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Exchange_KeysArgs = {
  where: User_Exchange_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdate_Dca_OrderArgs = {
  _inc?: InputMaybe<Dca_Order_Inc_Input>;
  _set?: InputMaybe<Dca_Order_Set_Input>;
  where: Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dca_Order_By_PkArgs = {
  _inc?: InputMaybe<Dca_Order_Inc_Input>;
  _set?: InputMaybe<Dca_Order_Set_Input>;
  pk_columns: Dca_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dca_Order_ManyArgs = {
  updates: Array<Dca_Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_DeviceArgs = {
  _set?: InputMaybe<User_Device_Set_Input>;
  where: User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Device_By_PkArgs = {
  _set?: InputMaybe<User_Device_Set_Input>;
  pk_columns: User_Device_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Device_ManyArgs = {
  updates: Array<User_Device_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_order_histories: Array<Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Dca_Order_History_Aggregate;
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  opened_at: Scalars['timestamptz'];
  order_id: Scalars['String'];
  price: Scalars['numeric'];
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
  volume: Scalars['numeric'];
};


/** columns and relationships of "order" */
export type OrderDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "order" */
export type OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  closed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Bool_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  opened_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  order_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Dca_Order_History_Aggregate_Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  OpenedAt = 'opened_at',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

export type Price_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** Query information about a Stripe Subscription (direct from Stripe) */
  action_query_live_stripe_subscription: QueryLiveStripeSubscriptionOutput;
  action_query_stripe_config: QueryStripeConfigOutput;
  action_query_user_limit?: Maybe<QueryUserLimitOutput>;
  action_setup_user_2fa?: Maybe<SetupUser2FaOutput>;
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch data from the table: "balance" using primary key columns */
  balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "dca_order" */
  dca_order: Array<Dca_Order>;
  /** fetch aggregated fields from the table: "dca_order" */
  dca_order_aggregate: Dca_Order_Aggregate;
  /** fetch data from the table: "dca_order" using primary key columns */
  dca_order_by_pk?: Maybe<Dca_Order>;
  /** fetch data from the table: "dca_order_history" */
  dca_order_history: Array<Dca_Order_History>;
  /** fetch aggregated fields from the table: "dca_order_history" */
  dca_order_history_aggregate: Dca_Order_History_Aggregate;
  /** fetch data from the table: "dca_order_history" using primary key columns */
  dca_order_history_by_pk?: Maybe<Dca_Order_History>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch data from the table: "exchange" using primary key columns */
  exchange_by_pk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchange_primary_currency: Array<Exchange_Primary_Currency>;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchange_primary_currency_by_pk?: Maybe<Exchange_Primary_Currency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchange_secondary_currency: Array<Exchange_Secondary_Currency>;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchange_secondary_currency_by_pk?: Maybe<Exchange_Secondary_Currency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch data from the table: "market" using primary key columns */
  market_by_pk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  market_price: Array<Market_Price>;
  /** fetch data from the table: "market_price" using primary key columns */
  market_price_by_pk?: Maybe<Market_Price>;
  /** execute function "market_price_latest" which returns "market_price" */
  market_price_latest: Array<Market_Price>;
  /** fetch data from the table: "market_trading_pair" */
  market_trading_pair: Array<Market_Trading_Pair>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "stripe_price" */
  stripe_price: Array<Stripe_Price>;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripe_price_by_pk?: Maybe<Stripe_Price>;
  /** fetch data from the table: "stripe_product" */
  stripe_product: Array<Stripe_Product>;
  /** fetch data from the table: "stripe_product" using primary key columns */
  stripe_product_by_pk?: Maybe<Stripe_Product>;
  /** fetch data from the table: "stripe_subscription" */
  stripe_subscription: Array<Stripe_Subscription>;
  /** fetch aggregated fields from the table: "stripe_subscription" */
  stripe_subscription_aggregate: Stripe_Subscription_Aggregate;
  /** fetch data from the table: "stripe_subscription" using primary key columns */
  stripe_subscription_by_pk?: Maybe<Stripe_Subscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  type_trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** fetch data from the table: "type_trade_sum_by_window" */
  type_trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user_2fa: Array<User_2fa>;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user_2fa_by_pk?: Maybe<User_2fa>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  user_device: Array<User_Device>;
  /** fetch aggregated fields from the table: "user_device" */
  user_device_aggregate: User_Device_Aggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  user_device_by_pk?: Maybe<User_Device>;
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
};


export type Query_RootAction_Query_Live_Stripe_SubscriptionArgs = {
  subscription_id: Scalars['String'];
};


export type Query_RootBalanceArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Query_RootBalance_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  symbol: Scalars['String'];
};


export type Query_RootDca_OrderArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Query_RootDca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Query_RootDca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootDca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Query_RootDca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Query_RootDca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootExchangeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Query_RootExchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootExchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


export type Query_RootExchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootExchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


export type Query_RootExchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootMarketArgs = {
  distinct_on?: InputMaybe<Array<Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Order_By>>;
  where?: InputMaybe<Market_Bool_Exp>;
};


export type Query_RootMarket_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootMarket_PriceArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Query_RootMarket_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Query_RootMarket_Price_LatestArgs = {
  args: Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Query_RootMarket_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootStripe_PriceArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


export type Query_RootStripe_Price_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStripe_ProductArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Product_Order_By>>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};


export type Query_RootStripe_Product_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStripe_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Query_RootStripe_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Query_RootStripe_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_Avg_Price_By_WindowArgs = {
  args: Trade_Avg_Price_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Query_RootTrade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootTrade_Sum_By_WindowArgs = {
  args: Trade_Sum_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Query_RootType_Trade_Avg_Price_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Query_RootType_Trade_Sum_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_2faArgs = {
  distinct_on?: InputMaybe<Array<User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_2fa_Order_By>>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};


export type Query_RootUser_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_DeviceArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Query_RootUser_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Query_RootUser_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootUser_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};

/** columns and relationships of "stripe_price" */
export type Stripe_Price = {
  __typename?: 'stripe_price';
  active: Scalars['Boolean'];
  billing_scheme: Scalars['String'];
  currency: Scalars['bpchar'];
  id: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  product_id: Scalars['String'];
  recurring_aggregate_usage?: Maybe<Scalars['String']>;
  recurring_interval?: Maybe<Scalars['String']>;
  recurring_interval_count?: Maybe<Scalars['Int']>;
  recurring_usage_type?: Maybe<Scalars['String']>;
  /** An object relationship */
  stripe_product: Stripe_Product;
  /** An array relationship */
  stripe_subscriptions: Array<Stripe_Subscription>;
  /** An aggregate relationship */
  stripe_subscriptions_aggregate: Stripe_Subscription_Aggregate;
  type: Scalars['String'];
  unit_amount?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "stripe_price" */
export type Stripe_PriceStripe_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


/** columns and relationships of "stripe_price" */
export type Stripe_PriceStripe_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};

/** order by aggregate values of table "stripe_price" */
export type Stripe_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Stripe_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stripe_Price_Max_Order_By>;
  min?: InputMaybe<Stripe_Price_Min_Order_By>;
  stddev?: InputMaybe<Stripe_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stripe_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stripe_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stripe_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Stripe_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stripe_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Stripe_Price_Variance_Order_By>;
};

/** order by avg() on columns of table "stripe_price" */
export type Stripe_Price_Avg_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stripe_price". All fields are combined with a logical 'AND'. */
export type Stripe_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Price_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Price_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  billing_scheme?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  recurring_aggregate_usage?: InputMaybe<String_Comparison_Exp>;
  recurring_interval?: InputMaybe<String_Comparison_Exp>;
  recurring_interval_count?: InputMaybe<Int_Comparison_Exp>;
  recurring_usage_type?: InputMaybe<String_Comparison_Exp>;
  stripe_product?: InputMaybe<Stripe_Product_Bool_Exp>;
  stripe_subscriptions?: InputMaybe<Stripe_Subscription_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  unit_amount?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "stripe_price" */
export type Stripe_Price_Max_Order_By = {
  billing_scheme?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recurring_aggregate_usage?: InputMaybe<Order_By>;
  recurring_interval?: InputMaybe<Order_By>;
  recurring_interval_count?: InputMaybe<Order_By>;
  recurring_usage_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "stripe_price" */
export type Stripe_Price_Min_Order_By = {
  billing_scheme?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recurring_aggregate_usage?: InputMaybe<Order_By>;
  recurring_interval?: InputMaybe<Order_By>;
  recurring_interval_count?: InputMaybe<Order_By>;
  recurring_usage_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "stripe_price". */
export type Stripe_Price_Order_By = {
  active?: InputMaybe<Order_By>;
  billing_scheme?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recurring_aggregate_usage?: InputMaybe<Order_By>;
  recurring_interval?: InputMaybe<Order_By>;
  recurring_interval_count?: InputMaybe<Order_By>;
  recurring_usage_type?: InputMaybe<Order_By>;
  stripe_product?: InputMaybe<Stripe_Product_Order_By>;
  stripe_subscriptions_aggregate?: InputMaybe<Stripe_Subscription_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** select columns of table "stripe_price" */
export enum Stripe_Price_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  BillingScheme = 'billing_scheme',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  RecurringAggregateUsage = 'recurring_aggregate_usage',
  /** column name */
  RecurringInterval = 'recurring_interval',
  /** column name */
  RecurringIntervalCount = 'recurring_interval_count',
  /** column name */
  RecurringUsageType = 'recurring_usage_type',
  /** column name */
  Type = 'type',
  /** column name */
  UnitAmount = 'unit_amount'
}

/** order by stddev() on columns of table "stripe_price" */
export type Stripe_Price_Stddev_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "stripe_price" */
export type Stripe_Price_Stddev_Pop_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "stripe_price" */
export type Stripe_Price_Stddev_Samp_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "stripe_price" */
export type Stripe_Price_Sum_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "stripe_price" */
export type Stripe_Price_Var_Pop_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "stripe_price" */
export type Stripe_Price_Var_Samp_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "stripe_price" */
export type Stripe_Price_Variance_Order_By = {
  recurring_interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "stripe_product" */
export type Stripe_Product = {
  __typename?: 'stripe_product';
  active: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  stripe_prices: Array<Stripe_Price>;
};


/** columns and relationships of "stripe_product" */
export type Stripe_ProductStripe_PricesArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "stripe_product". All fields are combined with a logical 'AND'. */
export type Stripe_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Product_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Product_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  stripe_prices?: InputMaybe<Stripe_Price_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_product". */
export type Stripe_Product_Order_By = {
  active?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_prices_aggregate?: InputMaybe<Stripe_Price_Aggregate_Order_By>;
};

/** select columns of table "stripe_product" */
export enum Stripe_Product_Select_Column {
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
export type Stripe_Subscription = {
  __typename?: 'stripe_subscription';
  cancel_at?: Maybe<Scalars['timestamptz']>;
  cancel_at_period_end: Scalars['Boolean'];
  canceled_at?: Maybe<Scalars['timestamptz']>;
  current_period_end: Scalars['timestamptz'];
  current_period_start: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
  /** An object relationship */
  stripe_price: Stripe_Price;
};

/** aggregated selection of "stripe_subscription" */
export type Stripe_Subscription_Aggregate = {
  __typename?: 'stripe_subscription_aggregate';
  aggregate?: Maybe<Stripe_Subscription_Aggregate_Fields>;
  nodes: Array<Stripe_Subscription>;
};

/** aggregate fields of "stripe_subscription" */
export type Stripe_Subscription_Aggregate_Fields = {
  __typename?: 'stripe_subscription_aggregate_fields';
  avg?: Maybe<Stripe_Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stripe_Subscription_Max_Fields>;
  min?: Maybe<Stripe_Subscription_Min_Fields>;
  stddev?: Maybe<Stripe_Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Stripe_Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stripe_Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Stripe_Subscription_Sum_Fields>;
  var_pop?: Maybe<Stripe_Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Stripe_Subscription_Var_Samp_Fields>;
  variance?: Maybe<Stripe_Subscription_Variance_Fields>;
};


/** aggregate fields of "stripe_subscription" */
export type Stripe_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stripe_subscription" */
export type Stripe_Subscription_Aggregate_Order_By = {
  avg?: InputMaybe<Stripe_Subscription_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stripe_Subscription_Max_Order_By>;
  min?: InputMaybe<Stripe_Subscription_Min_Order_By>;
  stddev?: InputMaybe<Stripe_Subscription_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stripe_Subscription_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stripe_Subscription_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stripe_Subscription_Sum_Order_By>;
  var_pop?: InputMaybe<Stripe_Subscription_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stripe_Subscription_Var_Samp_Order_By>;
  variance?: InputMaybe<Stripe_Subscription_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Stripe_Subscription_Avg_Fields = {
  __typename?: 'stripe_subscription_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stripe_subscription". All fields are combined with a logical 'AND'. */
export type Stripe_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Stripe_Subscription_Bool_Exp>>;
  _not?: InputMaybe<Stripe_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Stripe_Subscription_Bool_Exp>>;
  cancel_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cancel_at_period_end?: InputMaybe<Boolean_Comparison_Exp>;
  canceled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_period_end?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_period_start?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  stripe_price?: InputMaybe<Stripe_Price_Bool_Exp>;
};

/** aggregate max on columns */
export type Stripe_Subscription_Max_Fields = {
  __typename?: 'stripe_subscription_max_fields';
  cancel_at?: Maybe<Scalars['timestamptz']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  current_period_end?: Maybe<Scalars['timestamptz']>;
  current_period_start?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Max_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stripe_Subscription_Min_Fields = {
  __typename?: 'stripe_subscription_min_fields';
  cancel_at?: Maybe<Scalars['timestamptz']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  current_period_end?: Maybe<Scalars['timestamptz']>;
  current_period_start?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Min_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "stripe_subscription". */
export type Stripe_Subscription_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  cancel_at_period_end?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stripe_price?: InputMaybe<Stripe_Price_Order_By>;
};

/** select columns of table "stripe_subscription" */
export enum Stripe_Subscription_Select_Column {
  /** column name */
  CancelAt = 'cancel_at',
  /** column name */
  CancelAtPeriodEnd = 'cancel_at_period_end',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
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
export type Stripe_Subscription_Stddev_Fields = {
  __typename?: 'stripe_subscription_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stripe_Subscription_Stddev_Pop_Fields = {
  __typename?: 'stripe_subscription_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stripe_Subscription_Stddev_Samp_Fields = {
  __typename?: 'stripe_subscription_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stripe_Subscription_Sum_Fields = {
  __typename?: 'stripe_subscription_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Stripe_Subscription_Var_Pop_Fields = {
  __typename?: 'stripe_subscription_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stripe_Subscription_Var_Samp_Fields = {
  __typename?: 'stripe_subscription_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stripe_Subscription_Variance_Fields = {
  __typename?: 'stripe_subscription_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stripe_subscription" */
export type Stripe_Subscription_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch data from the table: "balance" using primary key columns */
  balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "dca_order" */
  dca_order: Array<Dca_Order>;
  /** fetch aggregated fields from the table: "dca_order" */
  dca_order_aggregate: Dca_Order_Aggregate;
  /** fetch data from the table: "dca_order" using primary key columns */
  dca_order_by_pk?: Maybe<Dca_Order>;
  /** fetch data from the table: "dca_order_history" */
  dca_order_history: Array<Dca_Order_History>;
  /** fetch aggregated fields from the table: "dca_order_history" */
  dca_order_history_aggregate: Dca_Order_History_Aggregate;
  /** fetch data from the table: "dca_order_history" using primary key columns */
  dca_order_history_by_pk?: Maybe<Dca_Order_History>;
  /** fetch data from the table: "exchange" */
  exchange: Array<Exchange>;
  /** fetch data from the table: "exchange" using primary key columns */
  exchange_by_pk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchange_primary_currency: Array<Exchange_Primary_Currency>;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchange_primary_currency_by_pk?: Maybe<Exchange_Primary_Currency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchange_secondary_currency: Array<Exchange_Secondary_Currency>;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchange_secondary_currency_by_pk?: Maybe<Exchange_Secondary_Currency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch data from the table: "market" using primary key columns */
  market_by_pk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  market_price: Array<Market_Price>;
  /** fetch data from the table: "market_price" using primary key columns */
  market_price_by_pk?: Maybe<Market_Price>;
  /** execute function "market_price_latest" which returns "market_price" */
  market_price_latest: Array<Market_Price>;
  /** fetch data from the table: "market_trading_pair" */
  market_trading_pair: Array<Market_Trading_Pair>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "stripe_price" */
  stripe_price: Array<Stripe_Price>;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripe_price_by_pk?: Maybe<Stripe_Price>;
  /** fetch data from the table: "stripe_product" */
  stripe_product: Array<Stripe_Product>;
  /** fetch data from the table: "stripe_product" using primary key columns */
  stripe_product_by_pk?: Maybe<Stripe_Product>;
  /** fetch data from the table: "stripe_subscription" */
  stripe_subscription: Array<Stripe_Subscription>;
  /** fetch aggregated fields from the table: "stripe_subscription" */
  stripe_subscription_aggregate: Stripe_Subscription_Aggregate;
  /** fetch data from the table: "stripe_subscription" using primary key columns */
  stripe_subscription_by_pk?: Maybe<Stripe_Subscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** execute function "trade_avg_price_by_window" which returns "type_trade_avg_price_by_window" */
  trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  type_trade_avg_price_by_window: Array<Type_Trade_Avg_Price_By_Window>;
  /** fetch data from the table: "type_trade_sum_by_window" */
  type_trade_sum_by_window: Array<Type_Trade_Sum_By_Window>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user_2fa: Array<User_2fa>;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user_2fa_by_pk?: Maybe<User_2fa>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  user_device: Array<User_Device>;
  /** fetch aggregated fields from the table: "user_device" */
  user_device_aggregate: User_Device_Aggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  user_device_by_pk?: Maybe<User_Device>;
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  user_exchange_keys_by_pk?: Maybe<User_Exchange_Keys>;
};


export type Subscription_RootBalanceArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBalance_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  symbol: Scalars['String'];
};


export type Subscription_RootDca_OrderArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Subscription_RootDca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


export type Subscription_RootDca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootDca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootDca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootDca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootExchangeArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Order_By>>;
  where?: InputMaybe<Exchange_Bool_Exp>;
};


export type Subscription_RootExchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootExchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Primary_Currency_Bool_Exp>;
};


export type Subscription_RootExchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootExchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Exchange_Secondary_Currency_Bool_Exp>;
};


export type Subscription_RootExchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootMarketArgs = {
  distinct_on?: InputMaybe<Array<Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Order_By>>;
  where?: InputMaybe<Market_Bool_Exp>;
};


export type Subscription_RootMarket_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootMarket_PriceArgs = {
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Subscription_RootMarket_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Subscription_RootMarket_Price_LatestArgs = {
  args: Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Price_Order_By>>;
  where?: InputMaybe<Market_Price_Bool_Exp>;
};


export type Subscription_RootMarket_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Market_Trading_Pair_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootStripe_PriceArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Price_Order_By>>;
  where?: InputMaybe<Stripe_Price_Bool_Exp>;
};


export type Subscription_RootStripe_Price_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStripe_ProductArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Product_Order_By>>;
  where?: InputMaybe<Stripe_Product_Bool_Exp>;
};


export type Subscription_RootStripe_Product_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStripe_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Subscription_RootStripe_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stripe_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stripe_Subscription_Order_By>>;
  where?: InputMaybe<Stripe_Subscription_Bool_Exp>;
};


export type Subscription_RootStripe_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_Avg_Price_By_WindowArgs = {
  args: Trade_Avg_Price_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Subscription_RootTrade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootTrade_Sum_By_WindowArgs = {
  args: Trade_Sum_By_Window_Args;
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Subscription_RootType_Trade_Avg_Price_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
};


export type Subscription_RootType_Trade_Sum_By_WindowArgs = {
  distinct_on?: InputMaybe<Array<Type_Trade_Sum_By_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Type_Trade_Sum_By_Window_Order_By>>;
  where?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_2faArgs = {
  distinct_on?: InputMaybe<Array<User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_2fa_Order_By>>;
  where?: InputMaybe<User_2fa_Bool_Exp>;
};


export type Subscription_RootUser_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_DeviceArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Subscription_RootUser_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


export type Subscription_RootUser_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type Total_Balance_Fx_Balance_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

export type Total_Value_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "trade" */
export type Trade = {
  __typename?: 'trade';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  fee: Scalars['numeric'];
  /** A computed field, executes function "trade_fee_fx" */
  fee_fx?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  order?: Maybe<Order>;
  order_uid?: Maybe<Scalars['uuid']>;
  price: Scalars['numeric'];
  /** A computed field, executes function "trade_price_fx" */
  price_fx?: Maybe<Scalars['numeric']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  total_value: Scalars['numeric'];
  /** A computed field, executes function "trade_total_value_fx" */
  total_value_fx?: Maybe<Scalars['numeric']>;
  trade_id: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
  /** A computed field, executes function "trade_value_fx" */
  value_fx?: Maybe<Scalars['numeric']>;
  volume: Scalars['numeric'];
};


/** columns and relationships of "trade" */
export type TradeFee_FxArgs = {
  args: Fee_Fx_Trade_Args;
};


/** columns and relationships of "trade" */
export type TradePrice_FxArgs = {
  args: Price_Fx_Trade_Args;
};


/** columns and relationships of "trade" */
export type TradeTotal_Value_FxArgs = {
  args: Total_Value_Fx_Trade_Args;
};


/** columns and relationships of "trade" */
export type TradeValue_FxArgs = {
  args: Value_Fx_Trade_Args;
};

/** aggregated selection of "trade" */
export type Trade_Aggregate = {
  __typename?: 'trade_aggregate';
  aggregate?: Maybe<Trade_Aggregate_Fields>;
  nodes: Array<Trade>;
};

/** aggregate fields of "trade" */
export type Trade_Aggregate_Fields = {
  __typename?: 'trade_aggregate_fields';
  avg?: Maybe<Trade_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trade_Max_Fields>;
  min?: Maybe<Trade_Min_Fields>;
  stddev?: Maybe<Trade_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Sum_Fields>;
  var_pop?: Maybe<Trade_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Var_Samp_Fields>;
  variance?: Maybe<Trade_Variance_Fields>;
};


/** aggregate fields of "trade" */
export type Trade_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trade_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade" */
export type Trade_Aggregate_Order_By = {
  avg?: InputMaybe<Trade_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trade_Max_Order_By>;
  min?: InputMaybe<Trade_Min_Order_By>;
  stddev?: InputMaybe<Trade_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trade_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trade_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trade_Sum_Order_By>;
  var_pop?: InputMaybe<Trade_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trade_Var_Samp_Order_By>;
  variance?: InputMaybe<Trade_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Trade_Avg_Fields = {
  __typename?: 'trade_avg_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade" */
export type Trade_Avg_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

export type Trade_Avg_Price_By_Window_Args = {
  currency?: InputMaybe<Scalars['String']>;
  group_by?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type Trade_Bool_Exp = {
  _and?: InputMaybe<Array<Trade_Bool_Exp>>;
  _not?: InputMaybe<Trade_Bool_Exp>;
  _or?: InputMaybe<Array<Trade_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  fee?: InputMaybe<Numeric_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  trade_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Trade_Max_Fields = {
  __typename?: 'trade_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "trade" */
export type Trade_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Min_Fields = {
  __typename?: 'trade_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "trade" */
export type Trade_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "trade". */
export type Trade_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "trade" */
export enum Trade_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Fee = 'fee',
  /** column name */
  OrderUid = 'order_uid',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** aggregate stddev on columns */
export type Trade_Stddev_Fields = {
  __typename?: 'trade_stddev_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade" */
export type Trade_Stddev_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Stddev_Pop_Fields = {
  __typename?: 'trade_stddev_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade" */
export type Trade_Stddev_Pop_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Stddev_Samp_Fields = {
  __typename?: 'trade_stddev_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade" */
export type Trade_Stddev_Samp_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

export type Trade_Sum_By_Window_Args = {
  currency?: InputMaybe<Scalars['String']>;
  group_by?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Trade_Sum_Fields = {
  __typename?: 'trade_sum_fields';
  fee?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "trade" */
export type Trade_Sum_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Trade_Var_Pop_Fields = {
  __typename?: 'trade_var_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade" */
export type Trade_Var_Pop_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Var_Samp_Fields = {
  __typename?: 'trade_var_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade" */
export type Trade_Var_Samp_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Variance_Fields = {
  __typename?: 'trade_variance_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade" */
export type Trade_Variance_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** columns and relationships of "type_trade_avg_price_by_window" */
export type Type_Trade_Avg_Price_By_Window = {
  __typename?: 'type_trade_avg_price_by_window';
  avg_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "type_trade_avg_price_by_window". All fields are combined with a logical 'AND'. */
export type Type_Trade_Avg_Price_By_Window_Bool_Exp = {
  _and?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Bool_Exp>>;
  _not?: InputMaybe<Type_Trade_Avg_Price_By_Window_Bool_Exp>;
  _or?: InputMaybe<Array<Type_Trade_Avg_Price_By_Window_Bool_Exp>>;
  avg_price?: InputMaybe<Numeric_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "type_trade_avg_price_by_window". */
export type Type_Trade_Avg_Price_By_Window_Order_By = {
  avg_price?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "type_trade_avg_price_by_window" */
export enum Type_Trade_Avg_Price_By_Window_Select_Column {
  /** column name */
  AvgPrice = 'avg_price',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Volume = 'volume'
}

/** columns and relationships of "type_trade_sum_by_window" */
export type Type_Trade_Sum_By_Window = {
  __typename?: 'type_trade_sum_by_window';
  primary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "type_trade_sum_by_window". All fields are combined with a logical 'AND'. */
export type Type_Trade_Sum_By_Window_Bool_Exp = {
  _and?: InputMaybe<Array<Type_Trade_Sum_By_Window_Bool_Exp>>;
  _not?: InputMaybe<Type_Trade_Sum_By_Window_Bool_Exp>;
  _or?: InputMaybe<Array<Type_Trade_Sum_By_Window_Bool_Exp>>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "type_trade_sum_by_window". */
export type Type_Trade_Sum_By_Window_Order_By = {
  primary_currency?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "type_trade_sum_by_window" */
export enum Type_Trade_Sum_By_Window_Select_Column {
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Value = 'value',
  /** column name */
  Volume = 'volume'
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_order_histories: Array<Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Dca_Order_History_Aggregate;
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  email_verified: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  timezone: Scalars['String'];
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_2fa?: Maybe<User_2fa>;
  /** An array relationship */
  user_devices: Array<User_Device>;
  /** An aggregate relationship */
  user_devices_aggregate: User_Device_Aggregate;
  /** An array relationship */
  user_exchange_keys: Array<User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "user" */
export type UserDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_History_Order_By>>;
  where?: InputMaybe<Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_DevicesArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Device_Order_By>>;
  where?: InputMaybe<User_Device_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** columns and relationships of "user_2fa" */
export type User_2fa = {
  __typename?: 'user_2fa';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "user_2fa". All fields are combined with a logical 'AND'. */
export type User_2fa_Bool_Exp = {
  _and?: InputMaybe<Array<User_2fa_Bool_Exp>>;
  _not?: InputMaybe<User_2fa_Bool_Exp>;
  _or?: InputMaybe<Array<User_2fa_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "user_2fa". */
export type User_2fa_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** select columns of table "user_2fa" */
export enum User_2fa_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Dca_Order_History_Bool_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_2fa?: InputMaybe<User_2fa_Bool_Exp>;
  user_devices?: InputMaybe<User_Device_Bool_Exp>;
  user_exchange_keys?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
};

/** columns and relationships of "user_device" */
export type User_Device = {
  __typename?: 'user_device';
  accessed_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  trusted: Scalars['Boolean'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "user_device" */
export type User_Device_Aggregate = {
  __typename?: 'user_device_aggregate';
  aggregate?: Maybe<User_Device_Aggregate_Fields>;
  nodes: Array<User_Device>;
};

/** aggregate fields of "user_device" */
export type User_Device_Aggregate_Fields = {
  __typename?: 'user_device_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Device_Max_Fields>;
  min?: Maybe<User_Device_Min_Fields>;
};


/** aggregate fields of "user_device" */
export type User_Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_device" */
export type User_Device_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Device_Max_Order_By>;
  min?: InputMaybe<User_Device_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_device". All fields are combined with a logical 'AND'. */
export type User_Device_Bool_Exp = {
  _and?: InputMaybe<Array<User_Device_Bool_Exp>>;
  _not?: InputMaybe<User_Device_Bool_Exp>;
  _or?: InputMaybe<Array<User_Device_Bool_Exp>>;
  accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  trusted?: InputMaybe<Boolean_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Device_Max_Fields = {
  __typename?: 'user_device_max_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_device" */
export type User_Device_Max_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Device_Min_Fields = {
  __typename?: 'user_device_min_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_device" */
export type User_Device_Min_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_device" */
export type User_Device_Mutation_Response = {
  __typename?: 'user_device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Device>;
};

/** Ordering options when selecting data from "user_device". */
export type User_Device_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  trusted?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_device */
export type User_Device_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_device" */
export enum User_Device_Select_Column {
  /** column name */
  AccessedAt = 'accessed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Trusted = 'trusted',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "user_device" */
export type User_Device_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

export type User_Device_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Device_Set_Input>;
  where: User_Device_Bool_Exp;
};

/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_Keys = {
  __typename?: 'user_exchange_keys';
  /** A computed field, executes function "user_exchange_keys_balance" */
  balance?: Maybe<Array<Balance>>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Dca_Order_Aggregate;
  description: Scalars['String'];
  /** An object relationship */
  exchange: Exchange;
  exchange_uid: Scalars['uuid'];
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_KeysBalanceArgs = {
  args: Balance_User_Exchange_Keys_Args;
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_KeysDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};


/** columns and relationships of "user_exchange_keys" */
export type User_Exchange_KeysDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Dca_Order_Order_By>>;
  where?: InputMaybe<Dca_Order_Bool_Exp>;
};

/** aggregated selection of "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate = {
  __typename?: 'user_exchange_keys_aggregate';
  aggregate?: Maybe<User_Exchange_Keys_Aggregate_Fields>;
  nodes: Array<User_Exchange_Keys>;
};

/** aggregate fields of "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate_Fields = {
  __typename?: 'user_exchange_keys_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Exchange_Keys_Max_Fields>;
  min?: Maybe<User_Exchange_Keys_Min_Fields>;
};


/** aggregate fields of "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Exchange_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_exchange_keys" */
export type User_Exchange_Keys_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Exchange_Keys_Max_Order_By>;
  min?: InputMaybe<User_Exchange_Keys_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_exchange_keys". All fields are combined with a logical 'AND'. */
export type User_Exchange_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<User_Exchange_Keys_Bool_Exp>>;
  _not?: InputMaybe<User_Exchange_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<User_Exchange_Keys_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Dca_Order_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  exchange?: InputMaybe<Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  invalidated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Exchange_Keys_Max_Fields = {
  __typename?: 'user_exchange_keys_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Exchange_Keys_Min_Fields = {
  __typename?: 'user_exchange_keys_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_exchange_keys" */
export type User_Exchange_Keys_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_exchange_keys" */
export type User_Exchange_Keys_Mutation_Response = {
  __typename?: 'user_exchange_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Exchange_Keys>;
};

/** Ordering options when selecting data from "user_exchange_keys". */
export type User_Exchange_Keys_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** select columns of table "user_exchange_keys" */
export enum User_Exchange_Keys_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  InvalidatedAt = 'invalidated_at',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Dca_Order_History_Aggregate_Order_By>;
  dca_orders_aggregate?: InputMaybe<Dca_Order_Aggregate_Order_By>;
  email_verified?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  timezone?: InputMaybe<Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_2fa?: InputMaybe<User_2fa_Order_By>;
  user_devices_aggregate?: InputMaybe<User_Device_Aggregate_Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<User_Exchange_Keys_Aggregate_Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Value_Fx_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>;
};
