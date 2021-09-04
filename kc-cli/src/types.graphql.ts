export type Maybe<T> = T | null;
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
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['String'];
};

export type CreateCustomerPortalSession = {
  __typename?: 'CreateCustomerPortalSession';
  session_url: Scalars['String'];
};

export type CreateDcaOrderResult = {
  __typename?: 'CreateDCAOrderResult';
  dca_order_uid: Scalars['uuid'];
};

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput';
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  user_uid: Scalars['String'];
};

export type CustomerCheckoutSessionOutput = {
  __typename?: 'CustomerCheckoutSessionOutput';
  session_url: Scalars['String'];
};

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput';
  user_uid: Scalars['uuid'];
};

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput';
  auth_token: Scalars['String'];
  user_uid: Scalars['uuid'];
};

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput';
  secret: Scalars['String'];
  user_uid: Scalars['uuid'];
};

export type SendUserPasswordResetOutput = {
  __typename?: 'SendUserPasswordResetOutput';
  secret: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput';
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput';
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput';
  user_exchange_keys_uid: Scalars['uuid'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput';
  is_valid: Scalars['Boolean'];
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['String'];
  validation_message?: Maybe<Scalars['String']>;
};

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput';
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>;
};

/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_Order = {
  __typename?: 'kc_dca_order';
  created_at: Scalars['timestamptz'];
  daily_average: Scalars['numeric'];
  /** An array relationship */
  dca_order_histories: Array<Kc_Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  exchange: Kc_Exchange;
  exchange_uid: Scalars['uuid'];
  /** An object relationship */
  market: Kc_Market;
  market_offset: Scalars['numeric'];
  market_uid: Scalars['uuid'];
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  start_at: Scalars['timestamptz'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderDca_Order_HistoriesArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};

/** aggregated selection of "kc.dca_order" */
export type Kc_Dca_Order_Aggregate = {
  __typename?: 'kc_dca_order_aggregate';
  aggregate?: Maybe<Kc_Dca_Order_Aggregate_Fields>;
  nodes: Array<Kc_Dca_Order>;
};

/** aggregate fields of "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_Fields = {
  __typename?: 'kc_dca_order_aggregate_fields';
  avg?: Maybe<Kc_Dca_Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Dca_Order_Max_Fields>;
  min?: Maybe<Kc_Dca_Order_Min_Fields>;
  stddev?: Maybe<Kc_Dca_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Dca_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Dca_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Dca_Order_Sum_Fields>;
  var_pop?: Maybe<Kc_Dca_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Dca_Order_Var_Samp_Fields>;
  variance?: Maybe<Kc_Dca_Order_Variance_Fields>;
};


/** aggregate fields of "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_Order_By = {
  avg?: Maybe<Kc_Dca_Order_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_Dca_Order_Max_Order_By>;
  min?: Maybe<Kc_Dca_Order_Min_Order_By>;
  stddev?: Maybe<Kc_Dca_Order_Stddev_Order_By>;
  stddev_pop?: Maybe<Kc_Dca_Order_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kc_Dca_Order_Stddev_Samp_Order_By>;
  sum?: Maybe<Kc_Dca_Order_Sum_Order_By>;
  var_pop?: Maybe<Kc_Dca_Order_Var_Pop_Order_By>;
  var_samp?: Maybe<Kc_Dca_Order_Var_Samp_Order_By>;
  variance?: Maybe<Kc_Dca_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kc_Dca_Order_Avg_Fields = {
  __typename?: 'kc_dca_order_avg_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Avg_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.dca_order". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_Bool_Exp = {
  _and?: Maybe<Array<Kc_Dca_Order_Bool_Exp>>;
  _not?: Maybe<Kc_Dca_Order_Bool_Exp>;
  _or?: Maybe<Array<Kc_Dca_Order_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  daily_average?: Maybe<Numeric_Comparison_Exp>;
  dca_order_histories?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
  enabled_at?: Maybe<Timestamptz_Comparison_Exp>;
  exchange?: Maybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: Maybe<Uuid_Comparison_Exp>;
  market?: Maybe<Kc_Market_Bool_Exp>;
  market_offset?: Maybe<Numeric_Comparison_Exp>;
  market_uid?: Maybe<Uuid_Comparison_Exp>;
  max_price?: Maybe<Numeric_Comparison_Exp>;
  max_value?: Maybe<Numeric_Comparison_Exp>;
  min_price?: Maybe<Numeric_Comparison_Exp>;
  min_value?: Maybe<Numeric_Comparison_Exp>;
  primary_currency?: Maybe<String_Comparison_Exp>;
  secondary_currency?: Maybe<String_Comparison_Exp>;
  start_at?: Maybe<Timestamptz_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Kc_User_Bool_Exp>;
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
  user_exchange_keys_uid?: Maybe<Uuid_Comparison_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "kc.dca_order_history" */
export type Kc_Dca_Order_History = {
  __typename?: 'kc_dca_order_history';
  available_balance: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  created_order: Scalars['Boolean'];
  /** An object relationship */
  dca_order: Kc_Dca_Order;
  dca_order_uid: Scalars['uuid'];
  description: Scalars['String'];
  market_offset: Scalars['numeric'];
  market_price: Scalars['numeric'];
  /** An object relationship */
  order?: Maybe<Kc_Order>;
  order_uid?: Maybe<Scalars['uuid']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  target_value: Scalars['numeric'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
};

/** aggregated selection of "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate = {
  __typename?: 'kc_dca_order_history_aggregate';
  aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Fields>;
  nodes: Array<Kc_Dca_Order_History>;
};

/** aggregate fields of "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_Fields = {
  __typename?: 'kc_dca_order_history_aggregate_fields';
  avg?: Maybe<Kc_Dca_Order_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Dca_Order_History_Max_Fields>;
  min?: Maybe<Kc_Dca_Order_History_Min_Fields>;
  stddev?: Maybe<Kc_Dca_Order_History_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Dca_Order_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Dca_Order_History_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Dca_Order_History_Sum_Fields>;
  var_pop?: Maybe<Kc_Dca_Order_History_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Dca_Order_History_Var_Samp_Fields>;
  variance?: Maybe<Kc_Dca_Order_History_Variance_Fields>;
};


/** aggregate fields of "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_Order_By = {
  avg?: Maybe<Kc_Dca_Order_History_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_Dca_Order_History_Max_Order_By>;
  min?: Maybe<Kc_Dca_Order_History_Min_Order_By>;
  stddev?: Maybe<Kc_Dca_Order_History_Stddev_Order_By>;
  stddev_pop?: Maybe<Kc_Dca_Order_History_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kc_Dca_Order_History_Stddev_Samp_Order_By>;
  sum?: Maybe<Kc_Dca_Order_History_Sum_Order_By>;
  var_pop?: Maybe<Kc_Dca_Order_History_Var_Pop_Order_By>;
  var_samp?: Maybe<Kc_Dca_Order_History_Var_Samp_Order_By>;
  variance?: Maybe<Kc_Dca_Order_History_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kc_Dca_Order_History_Avg_Fields = {
  __typename?: 'kc_dca_order_history_avg_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Avg_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.dca_order_history". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_History_Bool_Exp = {
  _and?: Maybe<Array<Kc_Dca_Order_History_Bool_Exp>>;
  _not?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
  _or?: Maybe<Array<Kc_Dca_Order_History_Bool_Exp>>;
  available_balance?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_order?: Maybe<Boolean_Comparison_Exp>;
  dca_order?: Maybe<Kc_Dca_Order_Bool_Exp>;
  dca_order_uid?: Maybe<Uuid_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  market_offset?: Maybe<Numeric_Comparison_Exp>;
  market_price?: Maybe<Numeric_Comparison_Exp>;
  order?: Maybe<Kc_Order_Bool_Exp>;
  order_uid?: Maybe<Uuid_Comparison_Exp>;
  primary_currency?: Maybe<String_Comparison_Exp>;
  secondary_currency?: Maybe<String_Comparison_Exp>;
  target_value?: Maybe<Numeric_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Kc_User_Bool_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
  value?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kc_Dca_Order_History_Max_Fields = {
  __typename?: 'kc_dca_order_history_max_fields';
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

/** order by max() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Max_Order_By = {
  available_balance?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dca_order_uid?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  order_uid?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Dca_Order_History_Min_Fields = {
  __typename?: 'kc_dca_order_history_min_fields';
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

/** order by min() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Min_Order_By = {
  available_balance?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dca_order_uid?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  order_uid?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "kc.dca_order_history". */
export type Kc_Dca_Order_History_Order_By = {
  available_balance?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_order?: Maybe<Order_By>;
  dca_order?: Maybe<Kc_Dca_Order_Order_By>;
  dca_order_uid?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  order?: Maybe<Kc_Order_Order_By>;
  order_uid?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Kc_User_Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Select_Column {
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
export type Kc_Dca_Order_History_Stddev_Fields = {
  __typename?: 'kc_dca_order_history_stddev_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_Dca_Order_History_Stddev_Pop_Fields = {
  __typename?: 'kc_dca_order_history_stddev_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Pop_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_Dca_Order_History_Stddev_Samp_Fields = {
  __typename?: 'kc_dca_order_history_stddev_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Samp_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_Dca_Order_History_Sum_Fields = {
  __typename?: 'kc_dca_order_history_sum_fields';
  available_balance?: Maybe<Scalars['numeric']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_price?: Maybe<Scalars['numeric']>;
  target_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Sum_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kc_Dca_Order_History_Var_Pop_Fields = {
  __typename?: 'kc_dca_order_history_var_pop_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Var_Pop_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_Dca_Order_History_Var_Samp_Fields = {
  __typename?: 'kc_dca_order_history_var_samp_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Var_Samp_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_Dca_Order_History_Variance_Fields = {
  __typename?: 'kc_dca_order_history_variance_fields';
  available_balance?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  market_price?: Maybe<Scalars['Float']>;
  target_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Variance_Order_By = {
  available_balance?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_price?: Maybe<Order_By>;
  target_value?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "kc.dca_order" */
export type Kc_Dca_Order_Inc_Input = {
  daily_average?: Maybe<Scalars['numeric']>;
  market_offset?: Maybe<Scalars['numeric']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Kc_Dca_Order_Max_Fields = {
  __typename?: 'kc_dca_order_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_average?: Maybe<Scalars['numeric']>;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  daily_average?: Maybe<Order_By>;
  enabled_at?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_uid?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_exchange_keys_uid?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Dca_Order_Min_Fields = {
  __typename?: 'kc_dca_order_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  daily_average?: Maybe<Scalars['numeric']>;
  enabled_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  daily_average?: Maybe<Order_By>;
  enabled_at?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  market_uid?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_exchange_keys_uid?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** response of any mutation on the table "kc.dca_order" */
export type Kc_Dca_Order_Mutation_Response = {
  __typename?: 'kc_dca_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Dca_Order>;
};

/** Ordering options when selecting data from "kc.dca_order". */
export type Kc_Dca_Order_Order_By = {
  created_at?: Maybe<Order_By>;
  daily_average?: Maybe<Order_By>;
  dca_order_histories_aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  enabled_at?: Maybe<Order_By>;
  exchange?: Maybe<Kc_Exchange_Order_By>;
  exchange_uid?: Maybe<Order_By>;
  market?: Maybe<Kc_Market_Order_By>;
  market_offset?: Maybe<Order_By>;
  market_uid?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  start_at?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Kc_User_Order_By>;
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Order_By>;
  user_exchange_keys_uid?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** primary key columns input for table: kc_dca_order */
export type Kc_Dca_Order_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "kc.dca_order" */
export enum Kc_Dca_Order_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyAverage = 'daily_average',
  /** column name */
  EnabledAt = 'enabled_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
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
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
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

/** input type for updating data in table "kc.dca_order" */
export type Kc_Dca_Order_Set_Input = {
  daily_average?: Maybe<Scalars['numeric']>;
  market_offset?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Kc_Dca_Order_Stddev_Fields = {
  __typename?: 'kc_dca_order_stddev_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_Dca_Order_Stddev_Pop_Fields = {
  __typename?: 'kc_dca_order_stddev_pop_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Pop_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_Dca_Order_Stddev_Samp_Fields = {
  __typename?: 'kc_dca_order_stddev_samp_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Samp_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_Dca_Order_Sum_Fields = {
  __typename?: 'kc_dca_order_sum_fields';
  daily_average?: Maybe<Scalars['numeric']>;
  market_offset?: Maybe<Scalars['numeric']>;
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Sum_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kc_Dca_Order_Var_Pop_Fields = {
  __typename?: 'kc_dca_order_var_pop_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Var_Pop_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_Dca_Order_Var_Samp_Fields = {
  __typename?: 'kc_dca_order_var_samp_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Var_Samp_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_Dca_Order_Variance_Fields = {
  __typename?: 'kc_dca_order_variance_fields';
  daily_average?: Maybe<Scalars['Float']>;
  market_offset?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Variance_Order_By = {
  daily_average?: Maybe<Order_By>;
  market_offset?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_value?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_value?: Maybe<Order_By>;
};

/** columns and relationships of "kc.exchange" */
export type Kc_Exchange = {
  __typename?: 'kc_exchange';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Kc_Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Kc_Order>;
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate;
  /** An array relationship */
  trades: Array<Kc_Trade>;
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_OrdersArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrdersArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeTradesArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeTrades_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_KeysArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "kc.exchange". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Bool_Exp = {
  _and?: Maybe<Array<Kc_Exchange_Bool_Exp>>;
  _not?: Maybe<Kc_Exchange_Bool_Exp>;
  _or?: Maybe<Array<Kc_Exchange_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Kc_Order_Bool_Exp>;
  trades?: Maybe<Kc_Trade_Bool_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.exchange". */
export type Kc_Exchange_Order_By = {
  created_at?: Maybe<Order_By>;
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Kc_Order_Aggregate_Order_By>;
  trades_aggregate?: Maybe<Kc_Trade_Aggregate_Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_exchange_keys_aggregate?: Maybe<Kc_User_Exchange_Keys_Aggregate_Order_By>;
};

/** select columns of table "kc.exchange" */
export enum Kc_Exchange_Select_Column {
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

/** columns and relationships of "kc.market" */
export type Kc_Market = {
  __typename?: 'kc_market';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Kc_Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  market_prices: Array<Kc_Market_Price>;
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "kc.market" */
export type Kc_MarketDca_OrdersArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.market" */
export type Kc_MarketDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.market" */
export type Kc_MarketMarket_PricesArgs = {
  distinct_on?: Maybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Market_Price_Order_By>>;
  where?: Maybe<Kc_Market_Price_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "kc.market". All fields are combined with a logical 'AND'. */
export type Kc_Market_Bool_Exp = {
  _and?: Maybe<Array<Kc_Market_Bool_Exp>>;
  _not?: Maybe<Kc_Market_Bool_Exp>;
  _or?: Maybe<Array<Kc_Market_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  market_prices?: Maybe<Kc_Market_Price_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.market". */
export type Kc_Market_Order_By = {
  created_at?: Maybe<Order_By>;
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  market_prices_aggregate?: Maybe<Kc_Market_Price_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "kc.market_price" */
export type Kc_Market_Price = {
  __typename?: 'kc_market_price';
  asset_symbol: Scalars['String'];
  currency: Scalars['bpchar'];
  fx_rate: Scalars['numeric'];
  /** An object relationship */
  market: Kc_Market;
  market_uid: Scalars['uuid'];
  price: Scalars['numeric'];
  price_nzd: Scalars['numeric'];
  timestamp: Scalars['timestamptz'];
};

/** order by aggregate values of table "kc.market_price" */
export type Kc_Market_Price_Aggregate_Order_By = {
  avg?: Maybe<Kc_Market_Price_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_Market_Price_Max_Order_By>;
  min?: Maybe<Kc_Market_Price_Min_Order_By>;
  stddev?: Maybe<Kc_Market_Price_Stddev_Order_By>;
  stddev_pop?: Maybe<Kc_Market_Price_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kc_Market_Price_Stddev_Samp_Order_By>;
  sum?: Maybe<Kc_Market_Price_Sum_Order_By>;
  var_pop?: Maybe<Kc_Market_Price_Var_Pop_Order_By>;
  var_samp?: Maybe<Kc_Market_Price_Var_Samp_Order_By>;
  variance?: Maybe<Kc_Market_Price_Variance_Order_By>;
};

/** order by avg() on columns of table "kc.market_price" */
export type Kc_Market_Price_Avg_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.market_price". All fields are combined with a logical 'AND'. */
export type Kc_Market_Price_Bool_Exp = {
  _and?: Maybe<Array<Kc_Market_Price_Bool_Exp>>;
  _not?: Maybe<Kc_Market_Price_Bool_Exp>;
  _or?: Maybe<Array<Kc_Market_Price_Bool_Exp>>;
  asset_symbol?: Maybe<String_Comparison_Exp>;
  currency?: Maybe<Bpchar_Comparison_Exp>;
  fx_rate?: Maybe<Numeric_Comparison_Exp>;
  market?: Maybe<Kc_Market_Bool_Exp>;
  market_uid?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  price_nzd?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "kc.market_price" */
export type Kc_Market_Price_Max_Order_By = {
  asset_symbol?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  fx_rate?: Maybe<Order_By>;
  market_uid?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** order by min() on columns of table "kc.market_price" */
export type Kc_Market_Price_Min_Order_By = {
  asset_symbol?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  fx_rate?: Maybe<Order_By>;
  market_uid?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "kc.market_price". */
export type Kc_Market_Price_Order_By = {
  asset_symbol?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  fx_rate?: Maybe<Order_By>;
  market?: Maybe<Kc_Market_Order_By>;
  market_uid?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** select columns of table "kc.market_price" */
export enum Kc_Market_Price_Select_Column {
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
  PriceNzd = 'price_nzd',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** order by sum() on columns of table "kc.market_price" */
export type Kc_Market_Price_Sum_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Pop_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Samp_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** order by variance() on columns of table "kc.market_price" */
export type Kc_Market_Price_Variance_Order_By = {
  fx_rate?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_nzd?: Maybe<Order_By>;
};

/** select columns of table "kc.market" */
export enum Kc_Market_Select_Column {
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

/** columns and relationships of "kc.order" */
export type Kc_Order = {
  __typename?: 'kc_order';
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_order_histories: Array<Kc_Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate;
  /** An object relationship */
  exchange: Kc_Exchange;
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
  user: Kc_User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
  volume: Scalars['numeric'];
};


/** columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_HistoriesArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};

/** aggregated selection of "kc.order" */
export type Kc_Order_Aggregate = {
  __typename?: 'kc_order_aggregate';
  aggregate?: Maybe<Kc_Order_Aggregate_Fields>;
  nodes: Array<Kc_Order>;
};

/** aggregate fields of "kc.order" */
export type Kc_Order_Aggregate_Fields = {
  __typename?: 'kc_order_aggregate_fields';
  avg?: Maybe<Kc_Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Order_Max_Fields>;
  min?: Maybe<Kc_Order_Min_Fields>;
  stddev?: Maybe<Kc_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Order_Sum_Fields>;
  var_pop?: Maybe<Kc_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Order_Var_Samp_Fields>;
  variance?: Maybe<Kc_Order_Variance_Fields>;
};


/** aggregate fields of "kc.order" */
export type Kc_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kc_Order_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.order" */
export type Kc_Order_Aggregate_Order_By = {
  avg?: Maybe<Kc_Order_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_Order_Max_Order_By>;
  min?: Maybe<Kc_Order_Min_Order_By>;
  stddev?: Maybe<Kc_Order_Stddev_Order_By>;
  stddev_pop?: Maybe<Kc_Order_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kc_Order_Stddev_Samp_Order_By>;
  sum?: Maybe<Kc_Order_Sum_Order_By>;
  var_pop?: Maybe<Kc_Order_Var_Pop_Order_By>;
  var_samp?: Maybe<Kc_Order_Var_Samp_Order_By>;
  variance?: Maybe<Kc_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kc_Order_Avg_Fields = {
  __typename?: 'kc_order_avg_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kc.order" */
export type Kc_Order_Avg_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.order". All fields are combined with a logical 'AND'. */
export type Kc_Order_Bool_Exp = {
  _and?: Maybe<Array<Kc_Order_Bool_Exp>>;
  _not?: Maybe<Kc_Order_Bool_Exp>;
  _or?: Maybe<Array<Kc_Order_Bool_Exp>>;
  closed_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
  exchange?: Maybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: Maybe<Uuid_Comparison_Exp>;
  opened_at?: Maybe<Timestamptz_Comparison_Exp>;
  order_id?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  primary_currency?: Maybe<String_Comparison_Exp>;
  secondary_currency?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Kc_User_Bool_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
  value?: Maybe<Numeric_Comparison_Exp>;
  volume?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kc_Order_Max_Fields = {
  __typename?: 'kc_order_max_fields';
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

/** order by max() on columns of table "kc.order" */
export type Kc_Order_Max_Order_By = {
  closed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  opened_at?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Order_Min_Fields = {
  __typename?: 'kc_order_min_fields';
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

/** order by min() on columns of table "kc.order" */
export type Kc_Order_Min_Order_By = {
  closed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  opened_at?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "kc.order". */
export type Kc_Order_Order_By = {
  closed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dca_order_histories_aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  exchange?: Maybe<Kc_Exchange_Order_By>;
  exchange_uid?: Maybe<Order_By>;
  opened_at?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Kc_User_Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** select columns of table "kc.order" */
export enum Kc_Order_Select_Column {
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
export type Kc_Order_Stddev_Fields = {
  __typename?: 'kc_order_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.order" */
export type Kc_Order_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_Order_Stddev_Pop_Fields = {
  __typename?: 'kc_order_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.order" */
export type Kc_Order_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_Order_Stddev_Samp_Fields = {
  __typename?: 'kc_order_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.order" */
export type Kc_Order_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_Order_Sum_Fields = {
  __typename?: 'kc_order_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kc.order" */
export type Kc_Order_Sum_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kc_Order_Var_Pop_Fields = {
  __typename?: 'kc_order_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.order" */
export type Kc_Order_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_Order_Var_Samp_Fields = {
  __typename?: 'kc_order_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.order" */
export type Kc_Order_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_Order_Variance_Fields = {
  __typename?: 'kc_order_variance_fields';
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kc.order" */
export type Kc_Order_Variance_Order_By = {
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** columns and relationships of "kc.trade" */
export type Kc_Trade = {
  __typename?: 'kc_trade';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  exchange: Kc_Exchange;
  exchange_uid: Scalars['uuid'];
  fee: Scalars['numeric'];
  /** An object relationship */
  order?: Maybe<Kc_Order>;
  order_uid?: Maybe<Scalars['uuid']>;
  price: Scalars['numeric'];
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  trade_id: Scalars['String'];
  type: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
  value: Scalars['numeric'];
  volume: Scalars['numeric'];
};

/** aggregated selection of "kc.trade" */
export type Kc_Trade_Aggregate = {
  __typename?: 'kc_trade_aggregate';
  aggregate?: Maybe<Kc_Trade_Aggregate_Fields>;
  nodes: Array<Kc_Trade>;
};

/** aggregate fields of "kc.trade" */
export type Kc_Trade_Aggregate_Fields = {
  __typename?: 'kc_trade_aggregate_fields';
  avg?: Maybe<Kc_Trade_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Trade_Max_Fields>;
  min?: Maybe<Kc_Trade_Min_Fields>;
  stddev?: Maybe<Kc_Trade_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Trade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Trade_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Trade_Sum_Fields>;
  var_pop?: Maybe<Kc_Trade_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Trade_Var_Samp_Fields>;
  variance?: Maybe<Kc_Trade_Variance_Fields>;
};


/** aggregate fields of "kc.trade" */
export type Kc_Trade_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kc_Trade_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.trade" */
export type Kc_Trade_Aggregate_Order_By = {
  avg?: Maybe<Kc_Trade_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_Trade_Max_Order_By>;
  min?: Maybe<Kc_Trade_Min_Order_By>;
  stddev?: Maybe<Kc_Trade_Stddev_Order_By>;
  stddev_pop?: Maybe<Kc_Trade_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kc_Trade_Stddev_Samp_Order_By>;
  sum?: Maybe<Kc_Trade_Sum_Order_By>;
  var_pop?: Maybe<Kc_Trade_Var_Pop_Order_By>;
  var_samp?: Maybe<Kc_Trade_Var_Samp_Order_By>;
  variance?: Maybe<Kc_Trade_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kc_Trade_Avg_Fields = {
  __typename?: 'kc_trade_avg_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kc.trade" */
export type Kc_Trade_Avg_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.trade". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Bool_Exp = {
  _and?: Maybe<Array<Kc_Trade_Bool_Exp>>;
  _not?: Maybe<Kc_Trade_Bool_Exp>;
  _or?: Maybe<Array<Kc_Trade_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  exchange?: Maybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: Maybe<Uuid_Comparison_Exp>;
  fee?: Maybe<Numeric_Comparison_Exp>;
  order?: Maybe<Kc_Order_Bool_Exp>;
  order_uid?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  primary_currency?: Maybe<String_Comparison_Exp>;
  secondary_currency?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  trade_id?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Kc_User_Bool_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
  value?: Maybe<Numeric_Comparison_Exp>;
  volume?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kc_Trade_Max_Fields = {
  __typename?: 'kc_trade_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  trade_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "kc.trade" */
export type Kc_Trade_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order_uid?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Trade_Min_Fields = {
  __typename?: 'kc_trade_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  fee?: Maybe<Scalars['numeric']>;
  order_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  trade_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "kc.trade" */
export type Kc_Trade_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order_uid?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "kc.trade". */
export type Kc_Trade_Order_By = {
  created_at?: Maybe<Order_By>;
  exchange?: Maybe<Kc_Exchange_Order_By>;
  exchange_uid?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Kc_Order_Order_By>;
  order_uid?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  primary_currency?: Maybe<Order_By>;
  secondary_currency?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Kc_User_Order_By>;
  user_uid?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** select columns of table "kc.trade" */
export enum Kc_Trade_Select_Column {
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
export type Kc_Trade_Stddev_Fields = {
  __typename?: 'kc_trade_stddev_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_stddev_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Pop_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_stddev_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Samp_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_Trade_Sum_Fields = {
  __typename?: 'kc_trade_sum_fields';
  fee?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kc.trade" */
export type Kc_Trade_Sum_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kc_Trade_Var_Pop_Fields = {
  __typename?: 'kc_trade_var_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.trade" */
export type Kc_Trade_Var_Pop_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Var_Samp_Fields = {
  __typename?: 'kc_trade_var_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.trade" */
export type Kc_Trade_Var_Samp_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_Trade_Variance_Fields = {
  __typename?: 'kc_trade_variance_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kc.trade" */
export type Kc_Trade_Variance_Order_By = {
  fee?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** columns and relationships of "kc.user" */
export type Kc_User = {
  __typename?: 'kc_user';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_order_histories: Array<Kc_Dca_Order_History>;
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate;
  /** An array relationship */
  dca_orders: Array<Kc_Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate;
  email_verified: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Kc_Order>;
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate;
  /** An array relationship */
  trades: Array<Kc_Trade>;
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user2FA: Kc_User_2fa;
  /** An array relationship */
  user_devices: Array<Kc_User_Device>;
  /** An aggregate relationship */
  user_devices_aggregate: Kc_User_Device_Aggregate;
  /** An array relationship */
  user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_Order_HistoriesArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_Order_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_OrdersArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserOrdersArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserTradesArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserTrades_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_DevicesArgs = {
  distinct_on?: Maybe<Array<Kc_User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Device_Order_By>>;
  where?: Maybe<Kc_User_Device_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_Devices_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Device_Order_By>>;
  where?: Maybe<Kc_User_Device_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_KeysArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** columns and relationships of "kc.user_2fa" */
export type Kc_User_2fa = {
  __typename?: 'kc_user_2fa';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "kc.user_2fa". All fields are combined with a logical 'AND'. */
export type Kc_User_2fa_Bool_Exp = {
  _and?: Maybe<Array<Kc_User_2fa_Bool_Exp>>;
  _not?: Maybe<Kc_User_2fa_Bool_Exp>;
  _or?: Maybe<Array<Kc_User_2fa_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Kc_User_Bool_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
};

/** response of any mutation on the table "kc.user_2fa" */
export type Kc_User_2fa_Mutation_Response = {
  __typename?: 'kc_user_2fa_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User_2fa>;
};

/** Ordering options when selecting data from "kc.user_2fa". */
export type Kc_User_2fa_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Kc_User_Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** select columns of table "kc.user_2fa" */
export enum Kc_User_2fa_Select_Column {
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

/** Boolean expression to filter rows from the table "kc.user". All fields are combined with a logical 'AND'. */
export type Kc_User_Bool_Exp = {
  _and?: Maybe<Array<Kc_User_Bool_Exp>>;
  _not?: Maybe<Kc_User_Bool_Exp>;
  _or?: Maybe<Array<Kc_User_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>;
  email_verified?: Maybe<Boolean_Comparison_Exp>;
  orders?: Maybe<Kc_Order_Bool_Exp>;
  trades?: Maybe<Kc_Trade_Bool_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user2FA?: Maybe<Kc_User_2fa_Bool_Exp>;
  user_devices?: Maybe<Kc_User_Device_Bool_Exp>;
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** columns and relationships of "kc.user_device" */
export type Kc_User_Device = {
  __typename?: 'kc_user_device';
  accessed_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  trusted: Scalars['Boolean'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "kc.user_device" */
export type Kc_User_Device_Aggregate = {
  __typename?: 'kc_user_device_aggregate';
  aggregate?: Maybe<Kc_User_Device_Aggregate_Fields>;
  nodes: Array<Kc_User_Device>;
};

/** aggregate fields of "kc.user_device" */
export type Kc_User_Device_Aggregate_Fields = {
  __typename?: 'kc_user_device_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_User_Device_Max_Fields>;
  min?: Maybe<Kc_User_Device_Min_Fields>;
};


/** aggregate fields of "kc.user_device" */
export type Kc_User_Device_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kc_User_Device_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.user_device" */
export type Kc_User_Device_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_User_Device_Max_Order_By>;
  min?: Maybe<Kc_User_Device_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.user_device". All fields are combined with a logical 'AND'. */
export type Kc_User_Device_Bool_Exp = {
  _and?: Maybe<Array<Kc_User_Device_Bool_Exp>>;
  _not?: Maybe<Kc_User_Device_Bool_Exp>;
  _or?: Maybe<Array<Kc_User_Device_Bool_Exp>>;
  accessed_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  trusted?: Maybe<Boolean_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kc_User_Device_Max_Fields = {
  __typename?: 'kc_user_device_max_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kc.user_device" */
export type Kc_User_Device_Max_Order_By = {
  accessed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_User_Device_Min_Fields = {
  __typename?: 'kc_user_device_min_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kc.user_device" */
export type Kc_User_Device_Min_Order_By = {
  accessed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** response of any mutation on the table "kc.user_device" */
export type Kc_User_Device_Mutation_Response = {
  __typename?: 'kc_user_device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User_Device>;
};

/** Ordering options when selecting data from "kc.user_device". */
export type Kc_User_Device_Order_By = {
  accessed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  trusted?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** primary key columns input for table: kc_user_device */
export type Kc_User_Device_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "kc.user_device" */
export enum Kc_User_Device_Select_Column {
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

/** input type for updating data in table "kc.user_device" */
export type Kc_User_Device_Set_Input = {
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys = {
  __typename?: 'kc_user_exchange_keys';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  dca_orders: Array<Kc_Dca_Order>;
  /** An aggregate relationship */
  dca_orders_aggregate: Kc_Dca_Order_Aggregate;
  description: Scalars['String'];
  /** An object relationship */
  exchange: Kc_Exchange;
  exchange_uid: Scalars['uuid'];
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};


/** columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_OrdersArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};

/** aggregated selection of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate = {
  __typename?: 'kc_user_exchange_keys_aggregate';
  aggregate?: Maybe<Kc_User_Exchange_Keys_Aggregate_Fields>;
  nodes: Array<Kc_User_Exchange_Keys>;
};

/** aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Fields = {
  __typename?: 'kc_user_exchange_keys_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_User_Exchange_Keys_Max_Fields>;
  min?: Maybe<Kc_User_Exchange_Keys_Min_Fields>;
};


/** aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Kc_User_Exchange_Keys_Max_Order_By>;
  min?: Maybe<Kc_User_Exchange_Keys_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.user_exchange_keys". All fields are combined with a logical 'AND'. */
export type Kc_User_Exchange_Keys_Bool_Exp = {
  _and?: Maybe<Array<Kc_User_Exchange_Keys_Bool_Exp>>;
  _not?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
  _or?: Maybe<Array<Kc_User_Exchange_Keys_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dca_orders?: Maybe<Kc_Dca_Order_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  exchange?: Maybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: Maybe<Uuid_Comparison_Exp>;
  invalidated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Kc_User_Bool_Exp>;
  user_uid?: Maybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kc_User_Exchange_Keys_Max_Fields = {
  __typename?: 'kc_user_exchange_keys_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  invalidated_at?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_User_Exchange_Keys_Min_Fields = {
  __typename?: 'kc_user_exchange_keys_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  exchange_uid?: Maybe<Order_By>;
  invalidated_at?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** response of any mutation on the table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Mutation_Response = {
  __typename?: 'kc_user_exchange_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User_Exchange_Keys>;
};

/** Ordering options when selecting data from "kc.user_exchange_keys". */
export type Kc_User_Exchange_Keys_Order_By = {
  created_at?: Maybe<Order_By>;
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  exchange?: Maybe<Kc_Exchange_Order_By>;
  exchange_uid?: Maybe<Order_By>;
  invalidated_at?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Kc_User_Order_By>;
  user_uid?: Maybe<Order_By>;
};

/** select columns of table "kc.user_exchange_keys" */
export enum Kc_User_Exchange_Keys_Select_Column {
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

/** Ordering options when selecting data from "kc.user". */
export type Kc_User_Order_By = {
  created_at?: Maybe<Order_By>;
  dca_order_histories_aggregate?: Maybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  dca_orders_aggregate?: Maybe<Kc_Dca_Order_Aggregate_Order_By>;
  email_verified?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Kc_Order_Aggregate_Order_By>;
  trades_aggregate?: Maybe<Kc_Trade_Aggregate_Order_By>;
  uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user2FA?: Maybe<Kc_User_2fa_Order_By>;
  user_devices_aggregate?: Maybe<Kc_User_Device_Aggregate_Order_By>;
  user_exchange_keys_aggregate?: Maybe<Kc_User_Exchange_Keys_Aggregate_Order_By>;
};

/** select columns of table "kc.user" */
export enum Kc_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  create_auth_token?: Maybe<CreateAuthTokenOutput>;
  create_dca_order?: Maybe<CreateDcaOrderResult>;
  create_user?: Maybe<CreateUserOutput>;
  create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>;
  /** delete data from the table: "kc.dca_order" */
  delete_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>;
  /** delete single row from the table: "kc.dca_order" */
  delete_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>;
  /** delete data from the table: "kc.user_2fa" */
  delete_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>;
  /** delete single row from the table: "kc.user_2fa" */
  delete_kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** delete data from the table: "kc.user_device" */
  delete_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>;
  /** delete single row from the table: "kc.user_device" */
  delete_kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** delete data from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>;
  /** delete single row from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
  enable_user_2fa?: Maybe<EnableUser2FaOutput>;
  reset_user_password: ResetUserPasswordOutput;
  send_user_email_verify: SendUserEmailVerifyOutput;
  send_user_password_reset: SendUserPasswordResetOutput;
  sync_exchange_open_order_list?: Maybe<SyncExchangeOpenOrderListOutput>;
  sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>;
  /** update data of the table: "kc.dca_order" */
  update_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>;
  /** update single row of the table: "kc.dca_order" */
  update_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>;
  /** update data of the table: "kc.user_device" */
  update_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>;
  /** update single row of the table: "kc.user_device" */
  update_kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  update_user: UpdateUserOutput;
  update_user_exchange_keys?: Maybe<UpdateUserExchangeKeysOutput>;
  validate_user_exchange_keys?: Maybe<ValidateUserExchangeKeysOutput>;
  verify_user_email: VerifyUserEmailOutput;
};


/** mutation root */
export type Mutation_RootCreate_Auth_TokenArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  token_2fa?: Maybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootCreate_Dca_OrderArgs = {
  daily_average: Scalars['Float'];
  market_offset: Scalars['Float'];
  market_uid: Scalars['uuid'];
  max_price?: Maybe<Scalars['Float']>;
  max_value?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_value?: Maybe<Scalars['Float']>;
  primary_currency: Scalars['String'];
  secondary_currency: Scalars['String'];
  start_at: Scalars['timestamp'];
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootCreate_UserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreate_User_Exchange_KeysArgs = {
  description: Scalars['String'];
  exchange_uid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_Dca_OrderArgs = {
  where: Kc_Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_2faArgs = {
  where: Kc_User_2fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_DeviceArgs = {
  where: Kc_User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_Exchange_KeysArgs = {
  where: Kc_User_Exchange_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootEnable_User_2faArgs = {
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootReset_User_PasswordArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  new_password: Scalars['String'];
  password_reset_secret: Scalars['String'];
  token_2fa?: Maybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootSend_User_Password_ResetArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSync_Exchange_Open_Order_ListArgs = {
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootSync_Exchange_Trade_ListArgs = {
  force_sync?: Maybe<Scalars['Boolean']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Dca_OrderArgs = {
  _inc?: Maybe<Kc_Dca_Order_Inc_Input>;
  _set?: Maybe<Kc_Dca_Order_Set_Input>;
  where: Kc_Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_By_PkArgs = {
  _inc?: Maybe<Kc_Dca_Order_Inc_Input>;
  _set?: Maybe<Kc_Dca_Order_Set_Input>;
  pk_columns: Kc_Dca_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_DeviceArgs = {
  _set?: Maybe<Kc_User_Device_Set_Input>;
  where: Kc_User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Device_By_PkArgs = {
  _set?: Maybe<Kc_User_Device_Set_Input>;
  pk_columns: Kc_User_Device_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Exchange_KeysArgs = {
  description: Scalars['String'];
  keys: Scalars['jsonb'];
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootValidate_User_Exchange_KeysArgs = {
  user_exchange_keys_uid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootVerify_User_EmailArgs = {
  email_verify_secret: Scalars['String'];
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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

export type Query_Root = {
  __typename?: 'query_root';
  customer_checkout_session: CustomerCheckoutSessionOutput;
  customer_portal_session?: Maybe<CreateCustomerPortalSession>;
  /** fetch data from the table: "kc.dca_order" */
  kc_dca_order: Array<Kc_Dca_Order>;
  /** fetch aggregated fields from the table: "kc.dca_order" */
  kc_dca_order_aggregate: Kc_Dca_Order_Aggregate;
  /** fetch data from the table: "kc.dca_order" using primary key columns */
  kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>;
  /** fetch data from the table: "kc.dca_order_history" */
  kc_dca_order_history: Array<Kc_Dca_Order_History>;
  /** fetch aggregated fields from the table: "kc.dca_order_history" */
  kc_dca_order_history_aggregate: Kc_Dca_Order_History_Aggregate;
  /** fetch data from the table: "kc.dca_order_history" using primary key columns */
  kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>;
  /** fetch data from the table: "kc.exchange" */
  kc_exchange: Array<Kc_Exchange>;
  /** fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>;
  /** fetch data from the table: "kc.market" */
  kc_market: Array<Kc_Market>;
  /** fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>;
  /** fetch data from the table: "kc.market_price" */
  kc_market_price: Array<Kc_Market_Price>;
  /** fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** fetch data from the table: "kc.order" */
  kc_order: Array<Kc_Order>;
  /** fetch aggregated fields from the table: "kc.order" */
  kc_order_aggregate: Kc_Order_Aggregate;
  /** fetch data from the table: "kc.order" using primary key columns */
  kc_order_by_pk?: Maybe<Kc_Order>;
  /** fetch data from the table: "kc.trade" */
  kc_trade: Array<Kc_Trade>;
  /** fetch aggregated fields from the table: "kc.trade" */
  kc_trade_aggregate: Kc_Trade_Aggregate;
  /** fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** fetch data from the table: "kc.user" */
  kc_user: Array<Kc_User>;
  /** fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Array<Kc_User_2fa>;
  /** fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>;
  /** fetch data from the table: "kc.user_device" */
  kc_user_device: Array<Kc_User_Device>;
  /** fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate;
  /** fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
};


export type Query_RootKc_Dca_OrderArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_ExchangeArgs = {
  distinct_on?: Maybe<Array<Kc_Exchange_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Exchange_Order_By>>;
  where?: Maybe<Kc_Exchange_Bool_Exp>;
};


export type Query_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_MarketArgs = {
  distinct_on?: Maybe<Array<Kc_Market_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Market_Order_By>>;
  where?: Maybe<Kc_Market_Bool_Exp>;
};


export type Query_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_Market_PriceArgs = {
  distinct_on?: Maybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Market_Price_Order_By>>;
  where?: Maybe<Kc_Market_Price_Bool_Exp>;
};


export type Query_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  market_uid: Scalars['uuid'];
  timestamp: Scalars['timestamptz'];
};


export type Query_RootKc_OrderArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


export type Query_RootKc_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


export type Query_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_TradeArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


export type Query_RootKc_Trade_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


export type Query_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_UserArgs = {
  distinct_on?: Maybe<Array<Kc_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Order_By>>;
  where?: Maybe<Kc_User_Bool_Exp>;
};


export type Query_RootKc_User_2faArgs = {
  distinct_on?: Maybe<Array<Kc_User_2fa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_2fa_Order_By>>;
  where?: Maybe<Kc_User_2fa_Bool_Exp>;
};


export type Query_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_DeviceArgs = {
  distinct_on?: Maybe<Array<Kc_User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Device_Order_By>>;
  where?: Maybe<Kc_User_Device_Bool_Exp>;
};


export type Query_RootKc_User_Device_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Device_Order_By>>;
  where?: Maybe<Kc_User_Device_Bool_Exp>;
};


export type Query_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "kc.dca_order" */
  kc_dca_order: Array<Kc_Dca_Order>;
  /** fetch aggregated fields from the table: "kc.dca_order" */
  kc_dca_order_aggregate: Kc_Dca_Order_Aggregate;
  /** fetch data from the table: "kc.dca_order" using primary key columns */
  kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>;
  /** fetch data from the table: "kc.dca_order_history" */
  kc_dca_order_history: Array<Kc_Dca_Order_History>;
  /** fetch aggregated fields from the table: "kc.dca_order_history" */
  kc_dca_order_history_aggregate: Kc_Dca_Order_History_Aggregate;
  /** fetch data from the table: "kc.dca_order_history" using primary key columns */
  kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>;
  /** fetch data from the table: "kc.exchange" */
  kc_exchange: Array<Kc_Exchange>;
  /** fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>;
  /** fetch data from the table: "kc.market" */
  kc_market: Array<Kc_Market>;
  /** fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>;
  /** fetch data from the table: "kc.market_price" */
  kc_market_price: Array<Kc_Market_Price>;
  /** fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** fetch data from the table: "kc.order" */
  kc_order: Array<Kc_Order>;
  /** fetch aggregated fields from the table: "kc.order" */
  kc_order_aggregate: Kc_Order_Aggregate;
  /** fetch data from the table: "kc.order" using primary key columns */
  kc_order_by_pk?: Maybe<Kc_Order>;
  /** fetch data from the table: "kc.trade" */
  kc_trade: Array<Kc_Trade>;
  /** fetch aggregated fields from the table: "kc.trade" */
  kc_trade_aggregate: Kc_Trade_Aggregate;
  /** fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** fetch data from the table: "kc.user" */
  kc_user: Array<Kc_User>;
  /** fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Array<Kc_User_2fa>;
  /** fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>;
  /** fetch data from the table: "kc.user_device" */
  kc_user_device: Array<Kc_User_Device>;
  /** fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate;
  /** fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
};


export type Subscription_RootKc_Dca_OrderArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_Order_By>>;
  where?: Maybe<Kc_Dca_Order_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: Maybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_ExchangeArgs = {
  distinct_on?: Maybe<Array<Kc_Exchange_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Exchange_Order_By>>;
  where?: Maybe<Kc_Exchange_Bool_Exp>;
};


export type Subscription_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_MarketArgs = {
  distinct_on?: Maybe<Array<Kc_Market_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Market_Order_By>>;
  where?: Maybe<Kc_Market_Bool_Exp>;
};


export type Subscription_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_Market_PriceArgs = {
  distinct_on?: Maybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Market_Price_Order_By>>;
  where?: Maybe<Kc_Market_Price_Bool_Exp>;
};


export type Subscription_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  market_uid: Scalars['uuid'];
  timestamp: Scalars['timestamptz'];
};


export type Subscription_RootKc_OrderArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


export type Subscription_RootKc_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Order_Order_By>>;
  where?: Maybe<Kc_Order_Bool_Exp>;
};


export type Subscription_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_TradeArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


export type Subscription_RootKc_Trade_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_Trade_Order_By>>;
  where?: Maybe<Kc_Trade_Bool_Exp>;
};


export type Subscription_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_UserArgs = {
  distinct_on?: Maybe<Array<Kc_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Order_By>>;
  where?: Maybe<Kc_User_Bool_Exp>;
};


export type Subscription_RootKc_User_2faArgs = {
  distinct_on?: Maybe<Array<Kc_User_2fa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_2fa_Order_By>>;
  where?: Maybe<Kc_User_2fa_Bool_Exp>;
};


export type Subscription_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_DeviceArgs = {
  distinct_on?: Maybe<Array<Kc_User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Device_Order_By>>;
  where?: Maybe<Kc_User_Device_Bool_Exp>;
};


export type Subscription_RootKc_User_Device_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Device_Order_By>>;
  where?: Maybe<Kc_User_Device_Bool_Exp>;
};


export type Subscription_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: Maybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: Maybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
