export type Maybe<T> = T | null
export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bpchar: string
  jsonb: unknown
  numeric: number
  timestamp: string
  timestamptz: string
  uuid: string
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput'
  auth_token: Scalars['String']
  expires_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['String']
}

export type CreateCustomerPortalSession = {
  __typename?: 'CreateCustomerPortalSession'
  session_url: Scalars['String']
}

export type CreateDcaOrderResult = {
  __typename?: 'CreateDCAOrderResult'
  dca_order_uid: Scalars['uuid']
}

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput'
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys
  user_exchange_keys_uid: Scalars['uuid']
}

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput'
  user_uid: Scalars['String']
}

export type CustomerCheckoutSessionOutput = {
  __typename?: 'CustomerCheckoutSessionOutput'
  session_url: Scalars['String']
}

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput'
  user_uid: Scalars['uuid']
}

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput'
  auth_token: Scalars['String']
  user_uid: Scalars['uuid']
}

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput'
  secret: Scalars['String']
  user_uid: Scalars['uuid']
}

export type SendUserPasswordResetOutput = {
  __typename?: 'SendUserPasswordResetOutput'
  secret: Scalars['String']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** Does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** Does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** Does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** Does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** Does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** Does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** Does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** Does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** Does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** Does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput'
  user_exchange_keys_uid: Scalars['uuid']
}

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput'
  is_valid: Scalars['Boolean']
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys
  user_exchange_keys_uid: Scalars['String']
  validation_message?: Maybe<Scalars['String']>
}

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>
  _gt?: Maybe<Scalars['bpchar']>
  _gte?: Maybe<Scalars['bpchar']>
  /** Does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>
  _in?: Maybe<Array<Scalars['bpchar']>>
  /** Does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** Does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>
  _lt?: Maybe<Scalars['bpchar']>
  _lte?: Maybe<Scalars['bpchar']>
  _neq?: Maybe<Scalars['bpchar']>
  /** Does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>
  _nin?: Maybe<Array<Scalars['bpchar']>>
  /** Does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>
  /** Does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>
  /** Does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>
  /** Does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>
  /** Does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>
  /** Does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_Order = {
  __typename?: 'kc_dca_order'
  asset_symbol: Scalars['String']
  created_at: Scalars['timestamptz']
  daily_average: Scalars['numeric']
  /** An array relationship */
  dca_order_histories: Kc_Dca_Order_History[]
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate
  enabled_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  /** An object relationship */
  market: Kc_Market
  market_offset: Scalars['numeric']
  market_uid: Scalars['uuid']
  max_amount_nzd?: Maybe<Scalars['numeric']>
  max_price_nzd?: Maybe<Scalars['numeric']>
  min_amount_nzd?: Maybe<Scalars['numeric']>
  min_price_nzd?: Maybe<Scalars['numeric']>
  start_at: Scalars['timestamptz']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys
  user_exchange_keys_uid: Scalars['uuid']
  user_uid: Scalars['uuid']
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderDca_Order_HistoriesArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Aggregated selection of "kc.dca_order" */
export type Kc_Dca_Order_Aggregate = {
  __typename?: 'kc_dca_order_aggregate'
  aggregate?: Maybe<Kc_Dca_Order_Aggregate_Fields>
  nodes: Kc_Dca_Order[]
}

/** Aggregate fields of "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_Fields = {
  __typename?: 'kc_dca_order_aggregate_fields'
  avg?: Maybe<Kc_Dca_Order_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Dca_Order_Max_Fields>
  min?: Maybe<Kc_Dca_Order_Min_Fields>
  stddev?: Maybe<Kc_Dca_Order_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Dca_Order_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Dca_Order_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Dca_Order_Sum_Fields>
  var_pop?: Maybe<Kc_Dca_Order_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Dca_Order_Var_Samp_Fields>
  variance?: Maybe<Kc_Dca_Order_Variance_Fields>
}

/** Aggregate fields of "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Kc_Dca_Order_Select_Column[]>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_Order_By = {
  avg?: Maybe<Kc_Dca_Order_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Kc_Dca_Order_Max_Order_By>
  min?: Maybe<Kc_Dca_Order_Min_Order_By>
  stddev?: Maybe<Kc_Dca_Order_Stddev_Order_By>
  stddev_pop?: Maybe<Kc_Dca_Order_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Kc_Dca_Order_Stddev_Samp_Order_By>
  sum?: Maybe<Kc_Dca_Order_Sum_Order_By>
  var_pop?: Maybe<Kc_Dca_Order_Var_Pop_Order_By>
  var_samp?: Maybe<Kc_Dca_Order_Var_Samp_Order_By>
  variance?: Maybe<Kc_Dca_Order_Variance_Order_By>
}

/** Aggregate avg on columns */
export type Kc_Dca_Order_Avg_Fields = {
  __typename?: 'kc_dca_order_avg_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Avg_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.dca_order". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_Bool_Exp = {
  _and?: Maybe<Kc_Dca_Order_Bool_Exp[]>
  _not?: Maybe<Kc_Dca_Order_Bool_Exp>
  _or?: Maybe<Kc_Dca_Order_Bool_Exp[]>
  asset_symbol?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  daily_average?: Maybe<Numeric_Comparison_Exp>
  dca_order_histories?: Maybe<Kc_Dca_Order_History_Bool_Exp>
  enabled_at?: Maybe<Timestamptz_Comparison_Exp>
  exchange?: Maybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: Maybe<Uuid_Comparison_Exp>
  market?: Maybe<Kc_Market_Bool_Exp>
  market_offset?: Maybe<Numeric_Comparison_Exp>
  market_uid?: Maybe<Uuid_Comparison_Exp>
  max_amount_nzd?: Maybe<Numeric_Comparison_Exp>
  max_price_nzd?: Maybe<Numeric_Comparison_Exp>
  min_amount_nzd?: Maybe<Numeric_Comparison_Exp>
  min_price_nzd?: Maybe<Numeric_Comparison_Exp>
  start_at?: Maybe<Timestamptz_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Kc_User_Bool_Exp>
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
  user_exchange_keys_uid?: Maybe<Uuid_Comparison_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Columns and relationships of "kc.dca_order_history" */
export type Kc_Dca_Order_History = {
  __typename?: 'kc_dca_order_history'
  asset_symbol: Scalars['String']
  available_balance_nzd: Scalars['numeric']
  calculated_amount_nzd: Scalars['numeric']
  created_at: Scalars['timestamptz']
  created_order: Scalars['Boolean']
  /** An object relationship */
  dca_order: Kc_Dca_Order
  dca_order_uid: Scalars['uuid']
  description: Scalars['String']
  market_offset: Scalars['numeric']
  market_price_nzd: Scalars['numeric']
  /** An object relationship */
  order?: Maybe<Kc_Order>
  order_uid?: Maybe<Scalars['uuid']>
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Aggregated selection of "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate = {
  __typename?: 'kc_dca_order_history_aggregate'
  aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Fields>
  nodes: Kc_Dca_Order_History[]
}

/** Aggregate fields of "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_Fields = {
  __typename?: 'kc_dca_order_history_aggregate_fields'
  avg?: Maybe<Kc_Dca_Order_History_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Dca_Order_History_Max_Fields>
  min?: Maybe<Kc_Dca_Order_History_Min_Fields>
  stddev?: Maybe<Kc_Dca_Order_History_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Dca_Order_History_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Dca_Order_History_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Dca_Order_History_Sum_Fields>
  var_pop?: Maybe<Kc_Dca_Order_History_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Dca_Order_History_Var_Samp_Fields>
  variance?: Maybe<Kc_Dca_Order_History_Variance_Fields>
}

/** Aggregate fields of "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_Order_By = {
  avg?: Maybe<Kc_Dca_Order_History_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Kc_Dca_Order_History_Max_Order_By>
  min?: Maybe<Kc_Dca_Order_History_Min_Order_By>
  stddev?: Maybe<Kc_Dca_Order_History_Stddev_Order_By>
  stddev_pop?: Maybe<Kc_Dca_Order_History_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Kc_Dca_Order_History_Stddev_Samp_Order_By>
  sum?: Maybe<Kc_Dca_Order_History_Sum_Order_By>
  var_pop?: Maybe<Kc_Dca_Order_History_Var_Pop_Order_By>
  var_samp?: Maybe<Kc_Dca_Order_History_Var_Samp_Order_By>
  variance?: Maybe<Kc_Dca_Order_History_Variance_Order_By>
}

/** Aggregate avg on columns */
export type Kc_Dca_Order_History_Avg_Fields = {
  __typename?: 'kc_dca_order_history_avg_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Avg_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.dca_order_history". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_History_Bool_Exp = {
  _and?: Maybe<Kc_Dca_Order_History_Bool_Exp[]>
  _not?: Maybe<Kc_Dca_Order_History_Bool_Exp>
  _or?: Maybe<Kc_Dca_Order_History_Bool_Exp[]>
  asset_symbol?: Maybe<String_Comparison_Exp>
  available_balance_nzd?: Maybe<Numeric_Comparison_Exp>
  calculated_amount_nzd?: Maybe<Numeric_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  created_order?: Maybe<Boolean_Comparison_Exp>
  dca_order?: Maybe<Kc_Dca_Order_Bool_Exp>
  dca_order_uid?: Maybe<Uuid_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  market_offset?: Maybe<Numeric_Comparison_Exp>
  market_price_nzd?: Maybe<Numeric_Comparison_Exp>
  order?: Maybe<Kc_Order_Bool_Exp>
  order_uid?: Maybe<Uuid_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Kc_User_Bool_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Aggregate max on columns */
export type Kc_Dca_Order_History_Max_Fields = {
  __typename?: 'kc_dca_order_history_max_fields'
  asset_symbol?: Maybe<Scalars['String']>
  available_balance_nzd?: Maybe<Scalars['numeric']>
  calculated_amount_nzd?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  dca_order_uid?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  market_offset?: Maybe<Scalars['numeric']>
  market_price_nzd?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Max_Order_By = {
  asset_symbol?: Maybe<Order_By>
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  dca_order_uid?: Maybe<Order_By>
  description?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
  order_uid?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Dca_Order_History_Min_Fields = {
  __typename?: 'kc_dca_order_history_min_fields'
  asset_symbol?: Maybe<Scalars['String']>
  available_balance_nzd?: Maybe<Scalars['numeric']>
  calculated_amount_nzd?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  dca_order_uid?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  market_offset?: Maybe<Scalars['numeric']>
  market_price_nzd?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Min_Order_By = {
  asset_symbol?: Maybe<Order_By>
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  dca_order_uid?: Maybe<Order_By>
  description?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
  order_uid?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Ordering options when selecting data from "kc.dca_order_history". */
export type Kc_Dca_Order_History_Order_By = {
  asset_symbol?: Maybe<Order_By>
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  created_order?: Maybe<Order_By>
  dca_order?: Maybe<Kc_Dca_Order_Order_By>
  dca_order_uid?: Maybe<Order_By>
  description?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
  order?: Maybe<Kc_Order_Order_By>
  order_uid?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Kc_User_Order_By>
  user_uid?: Maybe<Order_By>
}

/** Select columns of table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Select_Column {
  /** Column name */
  AssetSymbol = 'asset_symbol',
  /** Column name */
  AvailableBalanceNzd = 'available_balance_nzd',
  /** Column name */
  CalculatedAmountNzd = 'calculated_amount_nzd',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  CreatedOrder = 'created_order',
  /** Column name */
  DcaOrderUid = 'dca_order_uid',
  /** Column name */
  Description = 'description',
  /** Column name */
  MarketOffset = 'market_offset',
  /** Column name */
  MarketPriceNzd = 'market_price_nzd',
  /** Column name */
  OrderUid = 'order_uid',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Aggregate stddev on columns */
export type Kc_Dca_Order_History_Stddev_Fields = {
  __typename?: 'kc_dca_order_history_stddev_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Dca_Order_History_Stddev_Pop_Fields = {
  __typename?: 'kc_dca_order_history_stddev_pop_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Pop_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Dca_Order_History_Stddev_Samp_Fields = {
  __typename?: 'kc_dca_order_history_stddev_samp_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Samp_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Dca_Order_History_Sum_Fields = {
  __typename?: 'kc_dca_order_history_sum_fields'
  available_balance_nzd?: Maybe<Scalars['numeric']>
  calculated_amount_nzd?: Maybe<Scalars['numeric']>
  market_offset?: Maybe<Scalars['numeric']>
  market_price_nzd?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Sum_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Aggregate var_pop on columns */
export type Kc_Dca_Order_History_Var_Pop_Fields = {
  __typename?: 'kc_dca_order_history_var_pop_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Var_Pop_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Dca_Order_History_Var_Samp_Fields = {
  __typename?: 'kc_dca_order_history_var_samp_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Var_Samp_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Dca_Order_History_Variance_Fields = {
  __typename?: 'kc_dca_order_history_variance_fields'
  available_balance_nzd?: Maybe<Scalars['Float']>
  calculated_amount_nzd?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Variance_Order_By = {
  available_balance_nzd?: Maybe<Order_By>
  calculated_amount_nzd?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_price_nzd?: Maybe<Order_By>
}

/** Input type for incrementing numeric columns in table "kc.dca_order" */
export type Kc_Dca_Order_Inc_Input = {
  daily_average?: Maybe<Scalars['numeric']>
  market_offset?: Maybe<Scalars['numeric']>
  max_amount_nzd?: Maybe<Scalars['numeric']>
  max_price_nzd?: Maybe<Scalars['numeric']>
  min_amount_nzd?: Maybe<Scalars['numeric']>
  min_price_nzd?: Maybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type Kc_Dca_Order_Max_Fields = {
  __typename?: 'kc_dca_order_max_fields'
  asset_symbol?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  daily_average?: Maybe<Scalars['numeric']>
  enabled_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  market_offset?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  max_amount_nzd?: Maybe<Scalars['numeric']>
  max_price_nzd?: Maybe<Scalars['numeric']>
  min_amount_nzd?: Maybe<Scalars['numeric']>
  min_price_nzd?: Maybe<Scalars['numeric']>
  start_at?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Max_Order_By = {
  asset_symbol?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  daily_average?: Maybe<Order_By>
  enabled_at?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_uid?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
  start_at?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_exchange_keys_uid?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Dca_Order_Min_Fields = {
  __typename?: 'kc_dca_order_min_fields'
  asset_symbol?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  daily_average?: Maybe<Scalars['numeric']>
  enabled_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  market_offset?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  max_amount_nzd?: Maybe<Scalars['numeric']>
  max_price_nzd?: Maybe<Scalars['numeric']>
  min_amount_nzd?: Maybe<Scalars['numeric']>
  min_price_nzd?: Maybe<Scalars['numeric']>
  start_at?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Min_Order_By = {
  asset_symbol?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  daily_average?: Maybe<Order_By>
  enabled_at?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  market_uid?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
  start_at?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_exchange_keys_uid?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Response of any mutation on the table "kc.dca_order" */
export type Kc_Dca_Order_Mutation_Response = {
  __typename?: 'kc_dca_order_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Dca_Order[]
}

/** Ordering options when selecting data from "kc.dca_order". */
export type Kc_Dca_Order_Order_By = {
  asset_symbol?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  daily_average?: Maybe<Order_By>
  dca_order_histories_aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Order_By>
  enabled_at?: Maybe<Order_By>
  exchange?: Maybe<Kc_Exchange_Order_By>
  exchange_uid?: Maybe<Order_By>
  market?: Maybe<Kc_Market_Order_By>
  market_offset?: Maybe<Order_By>
  market_uid?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
  start_at?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Kc_User_Order_By>
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Order_By>
  user_exchange_keys_uid?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Primary key columns input for table: kc_dca_order */
export type Kc_Dca_Order_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.dca_order" */
export enum Kc_Dca_Order_Select_Column {
  /** Column name */
  AssetSymbol = 'asset_symbol',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  DailyAverage = 'daily_average',
  /** Column name */
  EnabledAt = 'enabled_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  MarketOffset = 'market_offset',
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  MaxAmountNzd = 'max_amount_nzd',
  /** Column name */
  MaxPriceNzd = 'max_price_nzd',
  /** Column name */
  MinAmountNzd = 'min_amount_nzd',
  /** Column name */
  MinPriceNzd = 'min_price_nzd',
  /** Column name */
  StartAt = 'start_at',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.dca_order" */
export type Kc_Dca_Order_Set_Input = {
  daily_average?: Maybe<Scalars['numeric']>
  market_offset?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  max_amount_nzd?: Maybe<Scalars['numeric']>
  max_price_nzd?: Maybe<Scalars['numeric']>
  min_amount_nzd?: Maybe<Scalars['numeric']>
  min_price_nzd?: Maybe<Scalars['numeric']>
  start_at?: Maybe<Scalars['timestamptz']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Aggregate stddev on columns */
export type Kc_Dca_Order_Stddev_Fields = {
  __typename?: 'kc_dca_order_stddev_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Dca_Order_Stddev_Pop_Fields = {
  __typename?: 'kc_dca_order_stddev_pop_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Pop_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Dca_Order_Stddev_Samp_Fields = {
  __typename?: 'kc_dca_order_stddev_samp_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Samp_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Dca_Order_Sum_Fields = {
  __typename?: 'kc_dca_order_sum_fields'
  daily_average?: Maybe<Scalars['numeric']>
  market_offset?: Maybe<Scalars['numeric']>
  max_amount_nzd?: Maybe<Scalars['numeric']>
  max_price_nzd?: Maybe<Scalars['numeric']>
  min_amount_nzd?: Maybe<Scalars['numeric']>
  min_price_nzd?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Sum_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Aggregate var_pop on columns */
export type Kc_Dca_Order_Var_Pop_Fields = {
  __typename?: 'kc_dca_order_var_pop_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Var_Pop_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Dca_Order_Var_Samp_Fields = {
  __typename?: 'kc_dca_order_var_samp_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Var_Samp_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Dca_Order_Variance_Fields = {
  __typename?: 'kc_dca_order_variance_fields'
  daily_average?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Variance_Order_By = {
  daily_average?: Maybe<Order_By>
  market_offset?: Maybe<Order_By>
  max_amount_nzd?: Maybe<Order_By>
  max_price_nzd?: Maybe<Order_By>
  min_amount_nzd?: Maybe<Order_By>
  min_price_nzd?: Maybe<Order_By>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_Exchange = {
  __typename?: 'kc_exchange'
  created_at: Scalars['timestamptz']
  /** An array relationship */
  dca_orders: Kc_Dca_Order[]
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate
  id: Scalars['String']
  name: Scalars['String']
  /** An array relationship */
  orders: Kc_Order[]
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate
  /** An array relationship */
  trades: Kc_Trade[]
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  user_exchange_keys: Kc_User_Exchange_Keys[]
  /** An aggregate relationship */
  user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_OrdersArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrdersArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrders_AggregateArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeTradesArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeTrades_AggregateArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_KeysArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Boolean expression to filter rows from the table "kc.exchange". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Bool_Exp = {
  _and?: Maybe<Kc_Exchange_Bool_Exp[]>
  _not?: Maybe<Kc_Exchange_Bool_Exp>
  _or?: Maybe<Kc_Exchange_Bool_Exp[]>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>
  id?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  orders?: Maybe<Kc_Order_Bool_Exp>
  trades?: Maybe<Kc_Trade_Bool_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Ordering options when selecting data from "kc.exchange". */
export type Kc_Exchange_Order_By = {
  created_at?: Maybe<Order_By>
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  orders_aggregate?: Maybe<Kc_Order_Aggregate_Order_By>
  trades_aggregate?: Maybe<Kc_Trade_Aggregate_Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_exchange_keys_aggregate?: Maybe<Kc_User_Exchange_Keys_Aggregate_Order_By>
}

/** Select columns of table "kc.exchange" */
export enum Kc_Exchange_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Id = 'id',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Columns and relationships of "kc.market" */
export type Kc_Market = {
  __typename?: 'kc_market'
  created_at: Scalars['timestamptz']
  /** An array relationship */
  dca_orders: Kc_Dca_Order[]
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate
  id: Scalars['String']
  /** An array relationship */
  market_prices: Kc_Market_Price[]
  name: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketDca_OrdersArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketMarket_PricesArgs = {
  distinct_on?: Maybe<Kc_Market_Price_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Market_Price_Order_By[]>
  where?: Maybe<Kc_Market_Price_Bool_Exp>
}

/** Boolean expression to filter rows from the table "kc.market". All fields are combined with a logical 'AND'. */
export type Kc_Market_Bool_Exp = {
  _and?: Maybe<Kc_Market_Bool_Exp[]>
  _not?: Maybe<Kc_Market_Bool_Exp>
  _or?: Maybe<Kc_Market_Bool_Exp[]>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>
  id?: Maybe<String_Comparison_Exp>
  market_prices?: Maybe<Kc_Market_Price_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** Ordering options when selecting data from "kc.market". */
export type Kc_Market_Order_By = {
  created_at?: Maybe<Order_By>
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>
  id?: Maybe<Order_By>
  market_prices_aggregate?: Maybe<Kc_Market_Price_Aggregate_Order_By>
  name?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** Columns and relationships of "kc.market_price" */
export type Kc_Market_Price = {
  __typename?: 'kc_market_price'
  asset_symbol: Scalars['String']
  currency: Scalars['bpchar']
  fx_rate: Scalars['numeric']
  /** An object relationship */
  market: Kc_Market
  market_uid: Scalars['uuid']
  price: Scalars['numeric']
  price_nzd: Scalars['numeric']
  timestamp: Scalars['timestamptz']
}

/** Order by aggregate values of table "kc.market_price" */
export type Kc_Market_Price_Aggregate_Order_By = {
  avg?: Maybe<Kc_Market_Price_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Kc_Market_Price_Max_Order_By>
  min?: Maybe<Kc_Market_Price_Min_Order_By>
  stddev?: Maybe<Kc_Market_Price_Stddev_Order_By>
  stddev_pop?: Maybe<Kc_Market_Price_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Kc_Market_Price_Stddev_Samp_Order_By>
  sum?: Maybe<Kc_Market_Price_Sum_Order_By>
  var_pop?: Maybe<Kc_Market_Price_Var_Pop_Order_By>
  var_samp?: Maybe<Kc_Market_Price_Var_Samp_Order_By>
  variance?: Maybe<Kc_Market_Price_Variance_Order_By>
}

/** Order by avg() on columns of table "kc.market_price" */
export type Kc_Market_Price_Avg_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.market_price". All fields are combined with a logical 'AND'. */
export type Kc_Market_Price_Bool_Exp = {
  _and?: Maybe<Kc_Market_Price_Bool_Exp[]>
  _not?: Maybe<Kc_Market_Price_Bool_Exp>
  _or?: Maybe<Kc_Market_Price_Bool_Exp[]>
  asset_symbol?: Maybe<String_Comparison_Exp>
  currency?: Maybe<Bpchar_Comparison_Exp>
  fx_rate?: Maybe<Numeric_Comparison_Exp>
  market?: Maybe<Kc_Market_Bool_Exp>
  market_uid?: Maybe<Uuid_Comparison_Exp>
  price?: Maybe<Numeric_Comparison_Exp>
  price_nzd?: Maybe<Numeric_Comparison_Exp>
  timestamp?: Maybe<Timestamptz_Comparison_Exp>
}

/** Order by max() on columns of table "kc.market_price" */
export type Kc_Market_Price_Max_Order_By = {
  asset_symbol?: Maybe<Order_By>
  currency?: Maybe<Order_By>
  fx_rate?: Maybe<Order_By>
  market_uid?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  timestamp?: Maybe<Order_By>
}

/** Order by min() on columns of table "kc.market_price" */
export type Kc_Market_Price_Min_Order_By = {
  asset_symbol?: Maybe<Order_By>
  currency?: Maybe<Order_By>
  fx_rate?: Maybe<Order_By>
  market_uid?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  timestamp?: Maybe<Order_By>
}

/** Ordering options when selecting data from "kc.market_price". */
export type Kc_Market_Price_Order_By = {
  asset_symbol?: Maybe<Order_By>
  currency?: Maybe<Order_By>
  fx_rate?: Maybe<Order_By>
  market?: Maybe<Kc_Market_Order_By>
  market_uid?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  timestamp?: Maybe<Order_By>
}

/** Select columns of table "kc.market_price" */
export enum Kc_Market_Price_Select_Column {
  /** Column name */
  AssetSymbol = 'asset_symbol',
  /** Column name */
  Currency = 'currency',
  /** Column name */
  FxRate = 'fx_rate',
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  Price = 'price',
  /** Column name */
  PriceNzd = 'price_nzd',
  /** Column name */
  Timestamp = 'timestamp',
}

/** Order by stddev() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Order by stddev_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Order by stddev_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Order by sum() on columns of table "kc.market_price" */
export type Kc_Market_Price_Sum_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Order by var_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Pop_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Order by var_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Samp_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Order by variance() on columns of table "kc.market_price" */
export type Kc_Market_Price_Variance_Order_By = {
  fx_rate?: Maybe<Order_By>
  price?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Select columns of table "kc.market" */
export enum Kc_Market_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Id = 'id',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Columns and relationships of "kc.order" */
export type Kc_Order = {
  __typename?: 'kc_order'
  amount: Scalars['numeric']
  asset_symbol: Scalars['String']
  closed_at?: Maybe<Scalars['timestamptz']>
  created_at: Scalars['timestamptz']
  /** An array relationship */
  dca_order_histories: Kc_Dca_Order_History[]
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  opened_at: Scalars['timestamptz']
  order_id: Scalars['String']
  price_nzd: Scalars['numeric']
  type: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_HistoriesArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Aggregated selection of "kc.order" */
export type Kc_Order_Aggregate = {
  __typename?: 'kc_order_aggregate'
  aggregate?: Maybe<Kc_Order_Aggregate_Fields>
  nodes: Kc_Order[]
}

/** Aggregate fields of "kc.order" */
export type Kc_Order_Aggregate_Fields = {
  __typename?: 'kc_order_aggregate_fields'
  avg?: Maybe<Kc_Order_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Order_Max_Fields>
  min?: Maybe<Kc_Order_Min_Fields>
  stddev?: Maybe<Kc_Order_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Order_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Order_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Order_Sum_Fields>
  var_pop?: Maybe<Kc_Order_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Order_Var_Samp_Fields>
  variance?: Maybe<Kc_Order_Variance_Fields>
}

/** Aggregate fields of "kc.order" */
export type Kc_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Kc_Order_Select_Column[]>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.order" */
export type Kc_Order_Aggregate_Order_By = {
  avg?: Maybe<Kc_Order_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Kc_Order_Max_Order_By>
  min?: Maybe<Kc_Order_Min_Order_By>
  stddev?: Maybe<Kc_Order_Stddev_Order_By>
  stddev_pop?: Maybe<Kc_Order_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Kc_Order_Stddev_Samp_Order_By>
  sum?: Maybe<Kc_Order_Sum_Order_By>
  var_pop?: Maybe<Kc_Order_Var_Pop_Order_By>
  var_samp?: Maybe<Kc_Order_Var_Samp_Order_By>
  variance?: Maybe<Kc_Order_Variance_Order_By>
}

/** Aggregate avg on columns */
export type Kc_Order_Avg_Fields = {
  __typename?: 'kc_order_avg_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.order" */
export type Kc_Order_Avg_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.order". All fields are combined with a logical 'AND'. */
export type Kc_Order_Bool_Exp = {
  _and?: Maybe<Kc_Order_Bool_Exp[]>
  _not?: Maybe<Kc_Order_Bool_Exp>
  _or?: Maybe<Kc_Order_Bool_Exp[]>
  amount?: Maybe<Numeric_Comparison_Exp>
  asset_symbol?: Maybe<String_Comparison_Exp>
  closed_at?: Maybe<Timestamptz_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  dca_order_histories?: Maybe<Kc_Dca_Order_History_Bool_Exp>
  exchange?: Maybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: Maybe<Uuid_Comparison_Exp>
  opened_at?: Maybe<Timestamptz_Comparison_Exp>
  order_id?: Maybe<String_Comparison_Exp>
  price_nzd?: Maybe<Numeric_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Kc_User_Bool_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Aggregate max on columns */
export type Kc_Order_Max_Fields = {
  __typename?: 'kc_order_max_fields'
  amount?: Maybe<Scalars['numeric']>
  asset_symbol?: Maybe<Scalars['String']>
  closed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  opened_at?: Maybe<Scalars['timestamptz']>
  order_id?: Maybe<Scalars['String']>
  price_nzd?: Maybe<Scalars['numeric']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.order" */
export type Kc_Order_Max_Order_By = {
  amount?: Maybe<Order_By>
  asset_symbol?: Maybe<Order_By>
  closed_at?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  opened_at?: Maybe<Order_By>
  order_id?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  type?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Order_Min_Fields = {
  __typename?: 'kc_order_min_fields'
  amount?: Maybe<Scalars['numeric']>
  asset_symbol?: Maybe<Scalars['String']>
  closed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  opened_at?: Maybe<Scalars['timestamptz']>
  order_id?: Maybe<Scalars['String']>
  price_nzd?: Maybe<Scalars['numeric']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.order" */
export type Kc_Order_Min_Order_By = {
  amount?: Maybe<Order_By>
  asset_symbol?: Maybe<Order_By>
  closed_at?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  opened_at?: Maybe<Order_By>
  order_id?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  type?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Ordering options when selecting data from "kc.order". */
export type Kc_Order_Order_By = {
  amount?: Maybe<Order_By>
  asset_symbol?: Maybe<Order_By>
  closed_at?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  dca_order_histories_aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Order_By>
  exchange?: Maybe<Kc_Exchange_Order_By>
  exchange_uid?: Maybe<Order_By>
  opened_at?: Maybe<Order_By>
  order_id?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  type?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Kc_User_Order_By>
  user_uid?: Maybe<Order_By>
}

/** Select columns of table "kc.order" */
export enum Kc_Order_Select_Column {
  /** Column name */
  Amount = 'amount',
  /** Column name */
  AssetSymbol = 'asset_symbol',
  /** Column name */
  ClosedAt = 'closed_at',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  OpenedAt = 'opened_at',
  /** Column name */
  OrderId = 'order_id',
  /** Column name */
  PriceNzd = 'price_nzd',
  /** Column name */
  Type = 'type',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Aggregate stddev on columns */
export type Kc_Order_Stddev_Fields = {
  __typename?: 'kc_order_stddev_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.order" */
export type Kc_Order_Stddev_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Order_Stddev_Pop_Fields = {
  __typename?: 'kc_order_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.order" */
export type Kc_Order_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Order_Stddev_Samp_Fields = {
  __typename?: 'kc_order_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.order" */
export type Kc_Order_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Order_Sum_Fields = {
  __typename?: 'kc_order_sum_fields'
  amount?: Maybe<Scalars['numeric']>
  price_nzd?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.order" */
export type Kc_Order_Sum_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Aggregate var_pop on columns */
export type Kc_Order_Var_Pop_Fields = {
  __typename?: 'kc_order_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.order" */
export type Kc_Order_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Order_Var_Samp_Fields = {
  __typename?: 'kc_order_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.order" */
export type Kc_Order_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Order_Variance_Fields = {
  __typename?: 'kc_order_variance_fields'
  amount?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.order" */
export type Kc_Order_Variance_Order_By = {
  amount?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
}

/** Columns and relationships of "kc.trade" */
export type Kc_Trade = {
  __typename?: 'kc_trade'
  amount: Scalars['numeric']
  asset_symbol: Scalars['String']
  created_at: Scalars['timestamptz']
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  fee_nzd: Scalars['numeric']
  /** An object relationship */
  order?: Maybe<Kc_Order>
  order_uid?: Maybe<Scalars['uuid']>
  price_nzd: Scalars['numeric']
  timestamp: Scalars['timestamptz']
  total_nzd: Scalars['numeric']
  trade_id: Scalars['String']
  type: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Aggregated selection of "kc.trade" */
export type Kc_Trade_Aggregate = {
  __typename?: 'kc_trade_aggregate'
  aggregate?: Maybe<Kc_Trade_Aggregate_Fields>
  nodes: Kc_Trade[]
}

/** Aggregate fields of "kc.trade" */
export type Kc_Trade_Aggregate_Fields = {
  __typename?: 'kc_trade_aggregate_fields'
  avg?: Maybe<Kc_Trade_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Trade_Max_Fields>
  min?: Maybe<Kc_Trade_Min_Fields>
  stddev?: Maybe<Kc_Trade_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Trade_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Trade_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Trade_Sum_Fields>
  var_pop?: Maybe<Kc_Trade_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Trade_Var_Samp_Fields>
  variance?: Maybe<Kc_Trade_Variance_Fields>
}

/** Aggregate fields of "kc.trade" */
export type Kc_Trade_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Kc_Trade_Select_Column[]>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.trade" */
export type Kc_Trade_Aggregate_Order_By = {
  avg?: Maybe<Kc_Trade_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Kc_Trade_Max_Order_By>
  min?: Maybe<Kc_Trade_Min_Order_By>
  stddev?: Maybe<Kc_Trade_Stddev_Order_By>
  stddev_pop?: Maybe<Kc_Trade_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Kc_Trade_Stddev_Samp_Order_By>
  sum?: Maybe<Kc_Trade_Sum_Order_By>
  var_pop?: Maybe<Kc_Trade_Var_Pop_Order_By>
  var_samp?: Maybe<Kc_Trade_Var_Samp_Order_By>
  variance?: Maybe<Kc_Trade_Variance_Order_By>
}

/** Aggregate avg on columns */
export type Kc_Trade_Avg_Fields = {
  __typename?: 'kc_trade_avg_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.trade" */
export type Kc_Trade_Avg_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.trade". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Bool_Exp = {
  _and?: Maybe<Kc_Trade_Bool_Exp[]>
  _not?: Maybe<Kc_Trade_Bool_Exp>
  _or?: Maybe<Kc_Trade_Bool_Exp[]>
  amount?: Maybe<Numeric_Comparison_Exp>
  asset_symbol?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  exchange?: Maybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: Maybe<Uuid_Comparison_Exp>
  fee_nzd?: Maybe<Numeric_Comparison_Exp>
  order?: Maybe<Kc_Order_Bool_Exp>
  order_uid?: Maybe<Uuid_Comparison_Exp>
  price_nzd?: Maybe<Numeric_Comparison_Exp>
  timestamp?: Maybe<Timestamptz_Comparison_Exp>
  total_nzd?: Maybe<Numeric_Comparison_Exp>
  trade_id?: Maybe<String_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Kc_User_Bool_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Aggregate max on columns */
export type Kc_Trade_Max_Fields = {
  __typename?: 'kc_trade_max_fields'
  amount?: Maybe<Scalars['numeric']>
  asset_symbol?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  fee_nzd?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  price_nzd?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_nzd?: Maybe<Scalars['numeric']>
  trade_id?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.trade" */
export type Kc_Trade_Max_Order_By = {
  amount?: Maybe<Order_By>
  asset_symbol?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  order_uid?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  timestamp?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
  trade_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Trade_Min_Fields = {
  __typename?: 'kc_trade_min_fields'
  amount?: Maybe<Scalars['numeric']>
  asset_symbol?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  fee_nzd?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  price_nzd?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_nzd?: Maybe<Scalars['numeric']>
  trade_id?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.trade" */
export type Kc_Trade_Min_Order_By = {
  amount?: Maybe<Order_By>
  asset_symbol?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  order_uid?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  timestamp?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
  trade_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Ordering options when selecting data from "kc.trade". */
export type Kc_Trade_Order_By = {
  amount?: Maybe<Order_By>
  asset_symbol?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  exchange?: Maybe<Kc_Exchange_Order_By>
  exchange_uid?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  order?: Maybe<Kc_Order_Order_By>
  order_uid?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  timestamp?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
  trade_id?: Maybe<Order_By>
  type?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Kc_User_Order_By>
  user_uid?: Maybe<Order_By>
}

/** Select columns of table "kc.trade" */
export enum Kc_Trade_Select_Column {
  /** Column name */
  Amount = 'amount',
  /** Column name */
  AssetSymbol = 'asset_symbol',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  FeeNzd = 'fee_nzd',
  /** Column name */
  OrderUid = 'order_uid',
  /** Column name */
  PriceNzd = 'price_nzd',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalNzd = 'total_nzd',
  /** Column name */
  TradeId = 'trade_id',
  /** Column name */
  Type = 'type',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Aggregate stddev on columns */
export type Kc_Trade_Stddev_Fields = {
  __typename?: 'kc_trade_stddev_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Trade_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Trade_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Trade_Sum_Fields = {
  __typename?: 'kc_trade_sum_fields'
  amount?: Maybe<Scalars['numeric']>
  fee_nzd?: Maybe<Scalars['numeric']>
  price_nzd?: Maybe<Scalars['numeric']>
  total_nzd?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.trade" */
export type Kc_Trade_Sum_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Aggregate var_pop on columns */
export type Kc_Trade_Var_Pop_Fields = {
  __typename?: 'kc_trade_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.trade" */
export type Kc_Trade_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Trade_Var_Samp_Fields = {
  __typename?: 'kc_trade_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.trade" */
export type Kc_Trade_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Trade_Variance_Fields = {
  __typename?: 'kc_trade_variance_fields'
  amount?: Maybe<Scalars['Float']>
  fee_nzd?: Maybe<Scalars['Float']>
  price_nzd?: Maybe<Scalars['Float']>
  total_nzd?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.trade" */
export type Kc_Trade_Variance_Order_By = {
  amount?: Maybe<Order_By>
  fee_nzd?: Maybe<Order_By>
  price_nzd?: Maybe<Order_By>
  total_nzd?: Maybe<Order_By>
}

/** Columns and relationships of "kc.user" */
export type Kc_User = {
  __typename?: 'kc_user'
  created_at: Scalars['timestamptz']
  /** An array relationship */
  dca_order_histories: Kc_Dca_Order_History[]
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate
  /** An array relationship */
  dca_orders: Kc_Dca_Order[]
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate
  email_verified: Scalars['Boolean']
  /** An array relationship */
  orders: Kc_Order[]
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate
  /** An array relationship */
  trades: Kc_Trade[]
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user2FA: Kc_User_2fa
  /** An array relationship */
  user_devices: Kc_User_Device[]
  /** An aggregate relationship */
  user_devices_aggregate: Kc_User_Device_Aggregate
  /** An array relationship */
  user_exchange_keys: Kc_User_Exchange_Keys[]
  /** An aggregate relationship */
  user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_Order_HistoriesArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_Order_Histories_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_OrdersArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserOrdersArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserOrders_AggregateArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserTradesArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserTrades_AggregateArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_DevicesArgs = {
  distinct_on?: Maybe<Kc_User_Device_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Device_Order_By[]>
  where?: Maybe<Kc_User_Device_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_Devices_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Device_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Device_Order_By[]>
  where?: Maybe<Kc_User_Device_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_KeysArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.user_2fa" */
export type Kc_User_2fa = {
  __typename?: 'kc_user_2fa'
  created_at: Scalars['timestamptz']
  name: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Boolean expression to filter rows from the table "kc.user_2fa". All fields are combined with a logical 'AND'. */
export type Kc_User_2fa_Bool_Exp = {
  _and?: Maybe<Kc_User_2fa_Bool_Exp[]>
  _not?: Maybe<Kc_User_2fa_Bool_Exp>
  _or?: Maybe<Kc_User_2fa_Bool_Exp[]>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Kc_User_Bool_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Response of any mutation on the table "kc.user_2fa" */
export type Kc_User_2fa_Mutation_Response = {
  __typename?: 'kc_user_2fa_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_2fa[]
}

/** Ordering options when selecting data from "kc.user_2fa". */
export type Kc_User_2fa_Order_By = {
  created_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Kc_User_Order_By>
  user_uid?: Maybe<Order_By>
}

/** Select columns of table "kc.user_2fa" */
export enum Kc_User_2fa_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Boolean expression to filter rows from the table "kc.user". All fields are combined with a logical 'AND'. */
export type Kc_User_Bool_Exp = {
  _and?: Maybe<Kc_User_Bool_Exp[]>
  _not?: Maybe<Kc_User_Bool_Exp>
  _or?: Maybe<Kc_User_Bool_Exp[]>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  dca_order_histories?: Maybe<Kc_Dca_Order_History_Bool_Exp>
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>
  email_verified?: Maybe<Boolean_Comparison_Exp>
  orders?: Maybe<Kc_Order_Bool_Exp>
  trades?: Maybe<Kc_Trade_Bool_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user2FA?: Maybe<Kc_User_2fa_Bool_Exp>
  user_devices?: Maybe<Kc_User_Device_Bool_Exp>
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.user_device" */
export type Kc_User_Device = {
  __typename?: 'kc_user_device'
  accessed_at: Scalars['timestamptz']
  created_at: Scalars['timestamptz']
  name: Scalars['String']
  trusted: Scalars['Boolean']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  user_uid: Scalars['uuid']
}

/** Aggregated selection of "kc.user_device" */
export type Kc_User_Device_Aggregate = {
  __typename?: 'kc_user_device_aggregate'
  aggregate?: Maybe<Kc_User_Device_Aggregate_Fields>
  nodes: Kc_User_Device[]
}

/** Aggregate fields of "kc.user_device" */
export type Kc_User_Device_Aggregate_Fields = {
  __typename?: 'kc_user_device_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_User_Device_Max_Fields>
  min?: Maybe<Kc_User_Device_Min_Fields>
}

/** Aggregate fields of "kc.user_device" */
export type Kc_User_Device_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Kc_User_Device_Select_Column[]>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.user_device" */
export type Kc_User_Device_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Kc_User_Device_Max_Order_By>
  min?: Maybe<Kc_User_Device_Min_Order_By>
}

/** Boolean expression to filter rows from the table "kc.user_device". All fields are combined with a logical 'AND'. */
export type Kc_User_Device_Bool_Exp = {
  _and?: Maybe<Kc_User_Device_Bool_Exp[]>
  _not?: Maybe<Kc_User_Device_Bool_Exp>
  _or?: Maybe<Kc_User_Device_Bool_Exp[]>
  accessed_at?: Maybe<Timestamptz_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  trusted?: Maybe<Boolean_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Aggregate max on columns */
export type Kc_User_Device_Max_Fields = {
  __typename?: 'kc_user_device_max_fields'
  accessed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.user_device" */
export type Kc_User_Device_Max_Order_By = {
  accessed_at?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_User_Device_Min_Fields = {
  __typename?: 'kc_user_device_min_fields'
  accessed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.user_device" */
export type Kc_User_Device_Min_Order_By = {
  accessed_at?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Response of any mutation on the table "kc.user_device" */
export type Kc_User_Device_Mutation_Response = {
  __typename?: 'kc_user_device_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_Device[]
}

/** Ordering options when selecting data from "kc.user_device". */
export type Kc_User_Device_Order_By = {
  accessed_at?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  trusted?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Primary key columns input for table: kc_user_device */
export type Kc_User_Device_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.user_device" */
export enum Kc_User_Device_Select_Column {
  /** Column name */
  AccessedAt = 'accessed_at',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Name = 'name',
  /** Column name */
  Trusted = 'trusted',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.user_device" */
export type Kc_User_Device_Set_Input = {
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys = {
  __typename?: 'kc_user_exchange_keys'
  created_at: Scalars['timestamptz']
  /** An array relationship */
  dca_orders: Kc_Dca_Order[]
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate
  description: Scalars['String']
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  invalidated_at?: Maybe<Scalars['timestamptz']>
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_OrdersArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

/** Aggregated selection of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate = {
  __typename?: 'kc_user_exchange_keys_aggregate'
  aggregate?: Maybe<Kc_User_Exchange_Keys_Aggregate_Fields>
  nodes: Kc_User_Exchange_Keys[]
}

/** Aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Fields = {
  __typename?: 'kc_user_exchange_keys_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_User_Exchange_Keys_Max_Fields>
  min?: Maybe<Kc_User_Exchange_Keys_Min_Fields>
}

/** Aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Kc_User_Exchange_Keys_Max_Order_By>
  min?: Maybe<Kc_User_Exchange_Keys_Min_Order_By>
}

/** Boolean expression to filter rows from the table "kc.user_exchange_keys". All fields are combined with a logical 'AND'. */
export type Kc_User_Exchange_Keys_Bool_Exp = {
  _and?: Maybe<Kc_User_Exchange_Keys_Bool_Exp[]>
  _not?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
  _or?: Maybe<Kc_User_Exchange_Keys_Bool_Exp[]>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>
  description?: Maybe<String_Comparison_Exp>
  exchange?: Maybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: Maybe<Uuid_Comparison_Exp>
  invalidated_at?: Maybe<Timestamptz_Comparison_Exp>
  uid?: Maybe<Uuid_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Kc_User_Bool_Exp>
  user_uid?: Maybe<Uuid_Comparison_Exp>
}

/** Aggregate max on columns */
export type Kc_User_Exchange_Keys_Max_Fields = {
  __typename?: 'kc_user_exchange_keys_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  exchange_uid?: Maybe<Scalars['uuid']>
  invalidated_at?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Max_Order_By = {
  created_at?: Maybe<Order_By>
  description?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  invalidated_at?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_User_Exchange_Keys_Min_Fields = {
  __typename?: 'kc_user_exchange_keys_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  exchange_uid?: Maybe<Scalars['uuid']>
  invalidated_at?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Min_Order_By = {
  created_at?: Maybe<Order_By>
  description?: Maybe<Order_By>
  exchange_uid?: Maybe<Order_By>
  invalidated_at?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_uid?: Maybe<Order_By>
}

/** Response of any mutation on the table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Mutation_Response = {
  __typename?: 'kc_user_exchange_keys_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_Exchange_Keys[]
}

/** Ordering options when selecting data from "kc.user_exchange_keys". */
export type Kc_User_Exchange_Keys_Order_By = {
  created_at?: Maybe<Order_By>
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>
  description?: Maybe<Order_By>
  exchange?: Maybe<Kc_Exchange_Order_By>
  exchange_uid?: Maybe<Order_By>
  invalidated_at?: Maybe<Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Kc_User_Order_By>
  user_uid?: Maybe<Order_By>
}

/** Select columns of table "kc.user_exchange_keys" */
export enum Kc_User_Exchange_Keys_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Description = 'description',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  InvalidatedAt = 'invalidated_at',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Ordering options when selecting data from "kc.user". */
export type Kc_User_Order_By = {
  created_at?: Maybe<Order_By>
  dca_order_histories_aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Order_By>
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>
  email_verified?: Maybe<Order_By>
  orders_aggregate?: Maybe<Kc_Order_Aggregate_Order_By>
  trades_aggregate?: Maybe<Kc_Trade_Aggregate_Order_By>
  uid?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user2FA?: Maybe<Kc_User_2fa_Order_By>
  user_devices_aggregate?: Maybe<Kc_User_Device_Aggregate_Order_By>
  user_exchange_keys_aggregate?: Maybe<Kc_User_Exchange_Keys_Aggregate_Order_By>
}

/** Select columns of table "kc.user" */
export enum Kc_User_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  EmailVerified = 'email_verified',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  create_auth_token?: Maybe<CreateAuthTokenOutput>
  create_dca_order?: Maybe<CreateDcaOrderResult>
  create_user?: Maybe<CreateUserOutput>
  create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>
  /** Delete data from the table: "kc.dca_order" */
  delete_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>
  /** Delete single row from the table: "kc.dca_order" */
  delete_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Delete data from the table: "kc.user_2fa" */
  delete_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>
  /** Delete single row from the table: "kc.user_2fa" */
  delete_kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Delete data from the table: "kc.user_device" */
  delete_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>
  /** Delete single row from the table: "kc.user_device" */
  delete_kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Delete data from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>
  /** Delete single row from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
  enable_user_2fa?: Maybe<EnableUser2FaOutput>
  reset_user_password: ResetUserPasswordOutput
  send_user_email_verify: SendUserEmailVerifyOutput
  send_user_password_reset: SendUserPasswordResetOutput
  sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>
  /** Update data of the table: "kc.dca_order" */
  update_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>
  /** Update single row of the table: "kc.dca_order" */
  update_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Update data of the table: "kc.user_device" */
  update_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>
  /** Update single row of the table: "kc.user_device" */
  update_kc_user_device_by_pk?: Maybe<Kc_User_Device>
  update_user: UpdateUserOutput
  update_user_exchange_keys?: Maybe<UpdateUserExchangeKeysOutput>
  validate_user_exchange_keys?: Maybe<ValidateUserExchangeKeysOutput>
  verify_user_email: VerifyUserEmailOutput
}

/** Mutation root */
export type Mutation_RootCreate_Auth_TokenArgs = {
  device_id: Scalars['String']
  device_name: Scalars['String']
  device_trusted: Scalars['Boolean']
  email: Scalars['String']
  password: Scalars['String']
  token_2fa?: Maybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootCreate_Dca_OrderArgs = {
  asset_symbol: Scalars['String']
  daily_average: Scalars['Float']
  market_offset: Scalars['Float']
  market_uid: Scalars['uuid']
  max_amount_nzd?: Maybe<Scalars['Float']>
  max_price_nzd?: Maybe<Scalars['Float']>
  min_amount_nzd?: Maybe<Scalars['Float']>
  min_price_nzd?: Maybe<Scalars['Float']>
  start_at: Scalars['timestamp']
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootCreate_UserArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

/** Mutation root */
export type Mutation_RootCreate_User_Exchange_KeysArgs = {
  description: Scalars['String']
  exchange_uid: Scalars['uuid']
  keys: Scalars['jsonb']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Dca_OrderArgs = {
  where: Kc_Dca_Order_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_2faArgs = {
  where: Kc_User_2fa_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_DeviceArgs = {
  where: Kc_User_Device_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_Device_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_Exchange_KeysArgs = {
  where: Kc_User_Exchange_Keys_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootEnable_User_2faArgs = {
  name: Scalars['String']
  secret: Scalars['String']
  token: Scalars['String']
}

/** Mutation root */
export type Mutation_RootReset_User_PasswordArgs = {
  device_id: Scalars['String']
  device_name: Scalars['String']
  device_trusted: Scalars['Boolean']
  new_password: Scalars['String']
  password_reset_secret: Scalars['String']
  token_2fa?: Maybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootSend_User_Password_ResetArgs = {
  email: Scalars['String']
}

/** Mutation root */
export type Mutation_RootSync_Exchange_Trade_ListArgs = {
  exchange_uid: Scalars['uuid']
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Dca_OrderArgs = {
  _inc?: Maybe<Kc_Dca_Order_Inc_Input>
  _set?: Maybe<Kc_Dca_Order_Set_Input>
  where: Kc_Dca_Order_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_By_PkArgs = {
  _inc?: Maybe<Kc_Dca_Order_Inc_Input>
  _set?: Maybe<Kc_Dca_Order_Set_Input>
  pk_columns: Kc_Dca_Order_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_DeviceArgs = {
  _set?: Maybe<Kc_User_Device_Set_Input>
  where: Kc_User_Device_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Device_By_PkArgs = {
  _set?: Maybe<Kc_User_Device_Set_Input>
  pk_columns: Kc_User_Device_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_UserArgs = {
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootUpdate_User_Exchange_KeysArgs = {
  description: Scalars['String']
  keys: Scalars['jsonb']
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootValidate_User_Exchange_KeysArgs = {
  user_exchange_keys_uid: Scalars['String']
}

/** Mutation root */
export type Mutation_RootVerify_User_EmailArgs = {
  email_verify_secret: Scalars['String']
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
}

/** Column ordering options */
export enum Order_By {
  /** In ascending order, nulls last */
  Asc = 'asc',
  /** In ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** In ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** In descending order, nulls first */
  Desc = 'desc',
  /** In descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** In descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  customer_checkout_session: CustomerCheckoutSessionOutput
  customer_portal_session?: Maybe<CreateCustomerPortalSession>
  /** Fetch data from the table: "kc.dca_order" */
  kc_dca_order: Kc_Dca_Order[]
  /** Fetch aggregated fields from the table: "kc.dca_order" */
  kc_dca_order_aggregate: Kc_Dca_Order_Aggregate
  /** Fetch data from the table: "kc.dca_order" using primary key columns */
  kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Fetch data from the table: "kc.dca_order_history" */
  kc_dca_order_history: Kc_Dca_Order_History[]
  /** Fetch aggregated fields from the table: "kc.dca_order_history" */
  kc_dca_order_history_aggregate: Kc_Dca_Order_History_Aggregate
  /** Fetch data from the table: "kc.dca_order_history" using primary key columns */
  kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>
  /** Fetch data from the table: "kc.exchange" */
  kc_exchange: Kc_Exchange[]
  /** Fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Fetch data from the table: "kc.market" */
  kc_market: Kc_Market[]
  /** Fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>
  /** Fetch data from the table: "kc.market_price" */
  kc_market_price: Kc_Market_Price[]
  /** Fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Fetch data from the table: "kc.order" */
  kc_order: Kc_Order[]
  /** Fetch aggregated fields from the table: "kc.order" */
  kc_order_aggregate: Kc_Order_Aggregate
  /** Fetch data from the table: "kc.order" using primary key columns */
  kc_order_by_pk?: Maybe<Kc_Order>
  /** Fetch data from the table: "kc.trade" */
  kc_trade: Kc_Trade[]
  /** Fetch aggregated fields from the table: "kc.trade" */
  kc_trade_aggregate: Kc_Trade_Aggregate
  /** Fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Fetch data from the table: "kc.user" */
  kc_user: Kc_User[]
  /** Fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Kc_User_2fa[]
  /** Fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>
  /** Fetch data from the table: "kc.user_device" */
  kc_user_device: Kc_User_Device[]
  /** Fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate
  /** Fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Kc_User_Exchange_Keys[]
  /** Fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
  /** Fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
}

export type Query_RootKc_Dca_OrderArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

export type Query_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

export type Query_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Query_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Query_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_ExchangeArgs = {
  distinct_on?: Maybe<Kc_Exchange_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Exchange_Order_By[]>
  where?: Maybe<Kc_Exchange_Bool_Exp>
}

export type Query_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_MarketArgs = {
  distinct_on?: Maybe<Kc_Market_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Market_Order_By[]>
  where?: Maybe<Kc_Market_Bool_Exp>
}

export type Query_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_Market_PriceArgs = {
  distinct_on?: Maybe<Kc_Market_Price_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Market_Price_Order_By[]>
  where?: Maybe<Kc_Market_Price_Bool_Exp>
}

export type Query_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String']
  market_uid: Scalars['uuid']
  timestamp: Scalars['timestamptz']
}

export type Query_RootKc_OrderArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

export type Query_RootKc_Order_AggregateArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

export type Query_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_TradeArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

export type Query_RootKc_Trade_AggregateArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

export type Query_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_UserArgs = {
  distinct_on?: Maybe<Kc_User_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Order_By[]>
  where?: Maybe<Kc_User_Bool_Exp>
}

export type Query_RootKc_User_2faArgs = {
  distinct_on?: Maybe<Kc_User_2fa_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_2fa_Order_By[]>
  where?: Maybe<Kc_User_2fa_Bool_Exp>
}

export type Query_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_DeviceArgs = {
  distinct_on?: Maybe<Kc_User_Device_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Device_Order_By[]>
  where?: Maybe<Kc_User_Device_Bool_Exp>
}

export type Query_RootKc_User_Device_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Device_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Device_Order_By[]>
  where?: Maybe<Kc_User_Device_Bool_Exp>
}

export type Query_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Query_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Query_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** Fetch data from the table: "kc.dca_order" */
  kc_dca_order: Kc_Dca_Order[]
  /** Fetch aggregated fields from the table: "kc.dca_order" */
  kc_dca_order_aggregate: Kc_Dca_Order_Aggregate
  /** Fetch data from the table: "kc.dca_order" using primary key columns */
  kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Fetch data from the table: "kc.dca_order_history" */
  kc_dca_order_history: Kc_Dca_Order_History[]
  /** Fetch aggregated fields from the table: "kc.dca_order_history" */
  kc_dca_order_history_aggregate: Kc_Dca_Order_History_Aggregate
  /** Fetch data from the table: "kc.dca_order_history" using primary key columns */
  kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>
  /** Fetch data from the table: "kc.exchange" */
  kc_exchange: Kc_Exchange[]
  /** Fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Fetch data from the table: "kc.market" */
  kc_market: Kc_Market[]
  /** Fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>
  /** Fetch data from the table: "kc.market_price" */
  kc_market_price: Kc_Market_Price[]
  /** Fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Fetch data from the table: "kc.order" */
  kc_order: Kc_Order[]
  /** Fetch aggregated fields from the table: "kc.order" */
  kc_order_aggregate: Kc_Order_Aggregate
  /** Fetch data from the table: "kc.order" using primary key columns */
  kc_order_by_pk?: Maybe<Kc_Order>
  /** Fetch data from the table: "kc.trade" */
  kc_trade: Kc_Trade[]
  /** Fetch aggregated fields from the table: "kc.trade" */
  kc_trade_aggregate: Kc_Trade_Aggregate
  /** Fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Fetch data from the table: "kc.user" */
  kc_user: Kc_User[]
  /** Fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Kc_User_2fa[]
  /** Fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>
  /** Fetch data from the table: "kc.user_device" */
  kc_user_device: Kc_User_Device[]
  /** Fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate
  /** Fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Kc_User_Exchange_Keys[]
  /** Fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
  /** Fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
}

export type Subscription_RootKc_Dca_OrderArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_Order_By[]>
  where?: Maybe<Kc_Dca_Order_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: Maybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Dca_Order_History_Order_By[]>
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_ExchangeArgs = {
  distinct_on?: Maybe<Kc_Exchange_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Exchange_Order_By[]>
  where?: Maybe<Kc_Exchange_Bool_Exp>
}

export type Subscription_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_MarketArgs = {
  distinct_on?: Maybe<Kc_Market_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Market_Order_By[]>
  where?: Maybe<Kc_Market_Bool_Exp>
}

export type Subscription_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_Market_PriceArgs = {
  distinct_on?: Maybe<Kc_Market_Price_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Market_Price_Order_By[]>
  where?: Maybe<Kc_Market_Price_Bool_Exp>
}

export type Subscription_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String']
  market_uid: Scalars['uuid']
  timestamp: Scalars['timestamptz']
}

export type Subscription_RootKc_OrderArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

export type Subscription_RootKc_Order_AggregateArgs = {
  distinct_on?: Maybe<Kc_Order_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Order_Order_By[]>
  where?: Maybe<Kc_Order_Bool_Exp>
}

export type Subscription_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_TradeArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

export type Subscription_RootKc_Trade_AggregateArgs = {
  distinct_on?: Maybe<Kc_Trade_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_Trade_Order_By[]>
  where?: Maybe<Kc_Trade_Bool_Exp>
}

export type Subscription_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_UserArgs = {
  distinct_on?: Maybe<Kc_User_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Order_By[]>
  where?: Maybe<Kc_User_Bool_Exp>
}

export type Subscription_RootKc_User_2faArgs = {
  distinct_on?: Maybe<Kc_User_2fa_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_2fa_Order_By[]>
  where?: Maybe<Kc_User_2fa_Bool_Exp>
}

export type Subscription_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_DeviceArgs = {
  distinct_on?: Maybe<Kc_User_Device_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Device_Order_By[]>
  where?: Maybe<Kc_User_Device_Bool_Exp>
}

export type Subscription_RootKc_User_Device_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Device_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Device_Order_By[]>
  where?: Maybe<Kc_User_Device_Bool_Exp>
}

export type Subscription_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Subscription_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Subscription_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}
