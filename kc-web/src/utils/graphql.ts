import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  bpchar: string;
  jsonb: unknown;
  numeric: number;
  timestamp: string;
  timestamptz: string;
  uuid: string;
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
  /** An object relationship */
  dca_order: Kc_Dca_Order;
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
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

export type ValidateUserExchangeKeysLiveOutput = {
  __typename?: 'ValidateUserExchangeKeysLiveOutput';
  is_valid: Scalars['Boolean'];
  validation_message?: Maybe<Scalars['String']>;
};

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput';
  is_valid: Scalars['Boolean'];
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
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

/** columns and relationships of "kc.currency" */
export type Kc_Currency = {
  __typename?: 'kc_currency';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "kc.currency". All fields are combined with a logical 'AND'. */
export type Kc_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Currency_Bool_Exp>>;
  _not?: InputMaybe<Kc_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.currency". */
export type Kc_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "kc.currency" */
export enum Kc_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

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
  /** A computed field, executes function "kc.dca_order_market_trading_pair" */
  exchange_market_trading_pair?: Maybe<Array<Kc_Market_Trading_Pair>>;
  exchange_uid: Scalars['uuid'];
  /** An object relationship */
  market: Kc_Market;
  market_offset: Scalars['numeric'];
  /** An array relationship */
  market_prices: Array<Kc_Market_Price>;
  market_uid: Scalars['uuid'];
  max_price?: Maybe<Scalars['numeric']>;
  max_value?: Maybe<Scalars['numeric']>;
  min_price?: Maybe<Scalars['numeric']>;
  min_value?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  primary_currency: Kc_Currency;
  primary_currency_symbol: Scalars['String'];
  /** An object relationship */
  secondary_currency: Kc_Currency;
  secondary_currency_symbol: Scalars['String'];
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
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderExchange_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>;
};


/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
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
  columns?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Dca_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Dca_Order_Max_Order_By>;
  min?: InputMaybe<Kc_Dca_Order_Min_Order_By>;
  stddev?: InputMaybe<Kc_Dca_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kc_Dca_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kc_Dca_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kc_Dca_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Kc_Dca_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kc_Dca_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Kc_Dca_Order_Variance_Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.dca_order". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Dca_Order_Bool_Exp>>;
  _not?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Dca_Order_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  daily_average?: InputMaybe<Numeric_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
  enabled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>;
  exchange_market_trading_pair?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  market?: InputMaybe<Kc_Market_Bool_Exp>;
  market_offset?: InputMaybe<Numeric_Comparison_Exp>;
  market_prices?: InputMaybe<Kc_Market_Price_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  max_price?: InputMaybe<Numeric_Comparison_Exp>;
  max_value?: InputMaybe<Numeric_Comparison_Exp>;
  min_price?: InputMaybe<Numeric_Comparison_Exp>;
  min_value?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<Kc_Currency_Bool_Exp>;
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<Kc_Currency_Bool_Exp>;
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
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
  columns?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Dca_Order_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Dca_Order_History_Max_Order_By>;
  min?: InputMaybe<Kc_Dca_Order_History_Min_Order_By>;
  stddev?: InputMaybe<Kc_Dca_Order_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kc_Dca_Order_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kc_Dca_Order_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kc_Dca_Order_History_Sum_Order_By>;
  var_pop?: InputMaybe<Kc_Dca_Order_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kc_Dca_Order_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Kc_Dca_Order_History_Variance_Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.dca_order_history". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_History_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Dca_Order_History_Bool_Exp>>;
  _not?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Dca_Order_History_Bool_Exp>>;
  available_balance?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_order?: InputMaybe<Boolean_Comparison_Exp>;
  dca_order?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  dca_order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  market_offset?: InputMaybe<Numeric_Comparison_Exp>;
  market_price?: InputMaybe<Numeric_Comparison_Exp>;
  order?: InputMaybe<Kc_Order_Bool_Exp>;
  order_uid?: InputMaybe<Uuid_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  target_value?: InputMaybe<Numeric_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
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

/** Ordering options when selecting data from "kc.dca_order_history". */
export type Kc_Dca_Order_History_Order_By = {
  available_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_order?: InputMaybe<Order_By>;
  dca_order?: InputMaybe<Kc_Dca_Order_Order_By>;
  dca_order_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  order?: InputMaybe<Kc_Order_Order_By>;
  order_uid?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
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
  available_balance?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_price?: InputMaybe<Order_By>;
  target_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "kc.dca_order" */
export type Kc_Dca_Order_Inc_Input = {
  daily_average?: InputMaybe<Scalars['numeric']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
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
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  daily_average?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  enabled_at?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_market_trading_pair_aggregate?: InputMaybe<Kc_Market_Trading_Pair_Aggregate_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  market?: InputMaybe<Kc_Market_Order_By>;
  market_offset?: InputMaybe<Order_By>;
  market_prices_aggregate?: InputMaybe<Kc_Market_Price_Aggregate_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Kc_Currency_Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Kc_Currency_Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Order_By>;
  user_exchange_keys_uid?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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

/** input type for updating data in table "kc.dca_order" */
export type Kc_Dca_Order_Set_Input = {
  daily_average?: InputMaybe<Scalars['numeric']>;
  enabled_at?: InputMaybe<Scalars['timestamptz']>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  daily_average?: InputMaybe<Order_By>;
  market_offset?: InputMaybe<Order_By>;
  max_price?: InputMaybe<Order_By>;
  max_value?: InputMaybe<Order_By>;
  min_price?: InputMaybe<Order_By>;
  min_value?: InputMaybe<Order_By>;
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
  primary_currencies: Array<Kc_Exchange_Primary_Currency>;
  /** An array relationship */
  secondary_currencies: Array<Kc_Exchange_Secondary_Currency>;
  /** An array relationship */
  trades: Array<Kc_Trade>;
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate;
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An array relationship */
  user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** An aggregate relationship */
  user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrdersArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangePrimary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeSecondary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeTradesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "kc.exchange". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Exchange_Bool_Exp>>;
  _not?: InputMaybe<Kc_Exchange_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Exchange_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Kc_Order_Bool_Exp>;
  primary_currencies?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>;
  secondary_currencies?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>;
  trades?: InputMaybe<Kc_Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.exchange". */
export type Kc_Exchange_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Kc_Order_Aggregate_Order_By>;
  primary_currencies_aggregate?: InputMaybe<Kc_Exchange_Primary_Currency_Aggregate_Order_By>;
  secondary_currencies_aggregate?: InputMaybe<Kc_Exchange_Secondary_Currency_Aggregate_Order_By>;
  trades_aggregate?: InputMaybe<Kc_Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<Kc_User_Exchange_Keys_Aggregate_Order_By>;
};

/** columns and relationships of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency = {
  __typename?: 'kc_exchange_primary_currency';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Kc_Currency;
  /** An object relationship */
  exchange: Kc_Exchange;
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Exchange_Primary_Currency_Max_Order_By>;
  min?: InputMaybe<Kc_Exchange_Primary_Currency_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.exchange_primary_currency". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Primary_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Bool_Exp>>;
  _not?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Kc_Currency_Bool_Exp>;
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kc.exchange_primary_currency". */
export type Kc_Exchange_Primary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Kc_Currency_Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "kc.exchange_primary_currency" */
export enum Kc_Exchange_Primary_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency = {
  __typename?: 'kc_exchange_secondary_currency';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  currency: Kc_Currency;
  /** An object relationship */
  exchange: Kc_Exchange;
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Exchange_Secondary_Currency_Max_Order_By>;
  min?: InputMaybe<Kc_Exchange_Secondary_Currency_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.exchange_secondary_currency". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Secondary_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Bool_Exp>>;
  _not?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Kc_Currency_Bool_Exp>;
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kc.exchange_secondary_currency". */
export type Kc_Exchange_Secondary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Kc_Currency_Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "kc.exchange_secondary_currency" */
export enum Kc_Exchange_Secondary_Currency_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at'
}

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
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
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
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.market" */
export type Kc_MarketDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.market" */
export type Kc_MarketMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "kc.market". All fields are combined with a logical 'AND'. */
export type Kc_Market_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Market_Bool_Exp>>;
  _not?: InputMaybe<Kc_Market_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Market_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  market_prices?: InputMaybe<Kc_Market_Price_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.market". */
export type Kc_Market_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  market_prices_aggregate?: InputMaybe<Kc_Market_Price_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "kc.market_price" */
export type Kc_Market_Price = {
  __typename?: 'kc_market_price';
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  fx_rate: Scalars['numeric'];
  /** An object relationship */
  market: Kc_Market;
  market_uid: Scalars['uuid'];
  price: Scalars['numeric'];
  source_currency: Scalars['bpchar'];
  source_price: Scalars['numeric'];
  timestamp: Scalars['timestamptz'];
};

/** order by aggregate values of table "kc.market_price" */
export type Kc_Market_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Market_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Market_Price_Max_Order_By>;
  min?: InputMaybe<Kc_Market_Price_Min_Order_By>;
  stddev?: InputMaybe<Kc_Market_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kc_Market_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kc_Market_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kc_Market_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Kc_Market_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kc_Market_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Kc_Market_Price_Variance_Order_By>;
};

/** order by avg() on columns of table "kc.market_price" */
export type Kc_Market_Price_Avg_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.market_price". All fields are combined with a logical 'AND'. */
export type Kc_Market_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Market_Price_Bool_Exp>>;
  _not?: InputMaybe<Kc_Market_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Market_Price_Bool_Exp>>;
  asset_symbol?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  fx_rate?: InputMaybe<Numeric_Comparison_Exp>;
  market?: InputMaybe<Kc_Market_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  source_currency?: InputMaybe<Bpchar_Comparison_Exp>;
  source_price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

export type Kc_Market_Price_Latest_Args = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kc.market_price" */
export type Kc_Market_Price_Max_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "kc.market_price" */
export type Kc_Market_Price_Min_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kc.market_price". */
export type Kc_Market_Price_Order_By = {
  asset_symbol?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  fx_rate?: InputMaybe<Order_By>;
  market?: InputMaybe<Kc_Market_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_currency?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
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
  SourceCurrency = 'source_currency',
  /** column name */
  SourcePrice = 'source_price',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "kc.market_price" */
export type Kc_Market_Price_Sum_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "kc.market_price" */
export type Kc_Market_Price_Variance_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
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

/** columns and relationships of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair = {
  __typename?: 'kc_market_trading_pair';
  /** An object relationship */
  currency: Kc_Currency;
  /** An object relationship */
  currencyBySecondaryCurrencySymbol: Kc_Currency;
  /** An object relationship */
  market: Kc_Market;
  /** An array relationship */
  market_prices: Array<Kc_Market_Price>;
  market_uid: Scalars['uuid'];
  primary_currency_symbol: Scalars['String'];
  secondary_currency_symbol: Scalars['String'];
};


/** columns and relationships of "kc.market_trading_pair" */
export type Kc_Market_Trading_PairMarket_PricesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};

/** order by aggregate values of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Market_Trading_Pair_Max_Order_By>;
  min?: InputMaybe<Kc_Market_Trading_Pair_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.market_trading_pair". All fields are combined with a logical 'AND'. */
export type Kc_Market_Trading_Pair_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Market_Trading_Pair_Bool_Exp>>;
  _not?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Market_Trading_Pair_Bool_Exp>>;
  currency?: InputMaybe<Kc_Currency_Bool_Exp>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Kc_Currency_Bool_Exp>;
  market?: InputMaybe<Kc_Market_Bool_Exp>;
  market_prices?: InputMaybe<Kc_Market_Price_Bool_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Max_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Min_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kc.market_trading_pair". */
export type Kc_Market_Trading_Pair_Order_By = {
  currency?: InputMaybe<Kc_Currency_Order_By>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Kc_Currency_Order_By>;
  market?: InputMaybe<Kc_Market_Order_By>;
  market_prices_aggregate?: InputMaybe<Kc_Market_Price_Aggregate_Order_By>;
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** select columns of table "kc.market_trading_pair" */
export enum Kc_Market_Trading_Pair_Select_Column {
  /** column name */
  MarketUid = 'market_uid',
  /** column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol'
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
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
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
  columns?: InputMaybe<Array<Kc_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.order" */
export type Kc_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Order_Max_Order_By>;
  min?: InputMaybe<Kc_Order_Min_Order_By>;
  stddev?: InputMaybe<Kc_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kc_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kc_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kc_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Kc_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kc_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Kc_Order_Variance_Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kc.order". All fields are combined with a logical 'AND'. */
export type Kc_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Order_Bool_Exp>>;
  _not?: InputMaybe<Kc_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Order_Bool_Exp>>;
  closed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  opened_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
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

/** Ordering options when selecting data from "kc.order". */
export type Kc_Order_Order_By = {
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  price?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  total_value: Scalars['numeric'];
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
  columns?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.trade" */
export type Kc_Trade_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Trade_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Trade_Max_Order_By>;
  min?: InputMaybe<Kc_Trade_Min_Order_By>;
  stddev?: InputMaybe<Kc_Trade_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kc_Trade_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kc_Trade_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kc_Trade_Sum_Order_By>;
  var_pop?: InputMaybe<Kc_Trade_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kc_Trade_Var_Samp_Order_By>;
  variance?: InputMaybe<Kc_Trade_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kc_Trade_Avg_Fields = {
  __typename?: 'kc_trade_avg_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kc.trade" */
export type Kc_Trade_Avg_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** columns and relationships of "kc.trade_avg_price_by_day" */
export type Kc_Trade_Avg_Price_By_Day = {
  __typename?: 'kc_trade_avg_price_by_day';
  avg_price?: Maybe<Scalars['numeric']>;
  day?: Maybe<Scalars['timestamptz']>;
  price?: Maybe<Scalars['numeric']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum_total_value?: Maybe<Scalars['numeric']>;
  sum_volume?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "kc.trade_avg_price_by_day". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Avg_Price_By_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Bool_Exp>>;
  _not?: InputMaybe<Kc_Trade_Avg_Price_By_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Bool_Exp>>;
  avg_price?: InputMaybe<Numeric_Comparison_Exp>;
  day?: InputMaybe<Timestamptz_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  sum_total_value?: InputMaybe<Numeric_Comparison_Exp>;
  sum_volume?: InputMaybe<Numeric_Comparison_Exp>;
  total_value?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.trade_avg_price_by_day". */
export type Kc_Trade_Avg_Price_By_Day_Order_By = {
  avg_price?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  sum_total_value?: InputMaybe<Order_By>;
  sum_volume?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "kc.trade_avg_price_by_day" */
export enum Kc_Trade_Avg_Price_By_Day_Select_Column {
  /** column name */
  AvgPrice = 'avg_price',
  /** column name */
  Day = 'day',
  /** column name */
  Price = 'price',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  SumTotalValue = 'sum_total_value',
  /** column name */
  SumVolume = 'sum_volume',
  /** column name */
  TotalValue = 'total_value',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Volume = 'volume'
}

/** Boolean expression to filter rows from the table "kc.trade". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Trade_Bool_Exp>>;
  _not?: InputMaybe<Kc_Trade_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Trade_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  fee?: InputMaybe<Numeric_Comparison_Exp>;
  order?: InputMaybe<Kc_Order_Bool_Exp>;
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
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
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
  total_value?: Maybe<Scalars['numeric']>;
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
  total_value?: Maybe<Scalars['numeric']>;
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

/** Ordering options when selecting data from "kc.trade". */
export type Kc_Trade_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  order?: InputMaybe<Kc_Order_Order_By>;
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
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
export type Kc_Trade_Stddev_Fields = {
  __typename?: 'kc_trade_stddev_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_stddev_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Pop_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_stddev_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Samp_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_Trade_Sum_Fields = {
  __typename?: 'kc_trade_sum_fields';
  fee?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kc.trade" */
export type Kc_Trade_Sum_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** columns and relationships of "kc.trade_sum_total_value_by_month" */
export type Kc_Trade_Sum_Total_Value_By_Month = {
  __typename?: 'kc_trade_sum_total_value_by_month';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to filter rows from the table "kc.trade_sum_total_value_by_month". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Sum_Total_Value_By_Month_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Bool_Exp>>;
  _not?: InputMaybe<Kc_Trade_Sum_Total_Value_By_Month_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Bool_Exp>>;
  month?: InputMaybe<Timestamptz_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.trade_sum_total_value_by_month". */
export type Kc_Trade_Sum_Total_Value_By_Month_Order_By = {
  month?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** select columns of table "kc.trade_sum_total_value_by_month" */
export enum Kc_Trade_Sum_Total_Value_By_Month_Select_Column {
  /** column name */
  Month = 'month',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserUid = 'user_uid'
}

/** columns and relationships of "kc.trade_sum_total_value_by_week" */
export type Kc_Trade_Sum_Total_Value_By_Week = {
  __typename?: 'kc_trade_sum_total_value_by_week';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "kc.trade_sum_total_value_by_week". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Sum_Total_Value_By_Week_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Bool_Exp>>;
  _not?: InputMaybe<Kc_Trade_Sum_Total_Value_By_Week_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Bool_Exp>>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  week?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.trade_sum_total_value_by_week". */
export type Kc_Trade_Sum_Total_Value_By_Week_Order_By = {
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  week?: InputMaybe<Order_By>;
};

/** select columns of table "kc.trade_sum_total_value_by_week" */
export enum Kc_Trade_Sum_Total_Value_By_Week_Select_Column {
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Week = 'week'
}

/** columns and relationships of "kc.trade_sum_volume_by_month" */
export type Kc_Trade_Sum_Volume_By_Month = {
  __typename?: 'kc_trade_sum_volume_by_month';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to filter rows from the table "kc.trade_sum_volume_by_month". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Sum_Volume_By_Month_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Bool_Exp>>;
  _not?: InputMaybe<Kc_Trade_Sum_Volume_By_Month_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Bool_Exp>>;
  month?: InputMaybe<Timestamptz_Comparison_Exp>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.trade_sum_volume_by_month". */
export type Kc_Trade_Sum_Volume_By_Month_Order_By = {
  month?: InputMaybe<Order_By>;
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** select columns of table "kc.trade_sum_volume_by_month" */
export enum Kc_Trade_Sum_Volume_By_Month_Select_Column {
  /** column name */
  Month = 'month',
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserUid = 'user_uid'
}

/** columns and relationships of "kc.trade_sum_volume_by_week" */
export type Kc_Trade_Sum_Volume_By_Week = {
  __typename?: 'kc_trade_sum_volume_by_week';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "kc.trade_sum_volume_by_week". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Sum_Volume_By_Week_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Bool_Exp>>;
  _not?: InputMaybe<Kc_Trade_Sum_Volume_By_Week_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Bool_Exp>>;
  primary_currency?: InputMaybe<String_Comparison_Exp>;
  secondary_currency?: InputMaybe<String_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  week?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "kc.trade_sum_volume_by_week". */
export type Kc_Trade_Sum_Volume_By_Week_Order_By = {
  primary_currency?: InputMaybe<Order_By>;
  secondary_currency?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  week?: InputMaybe<Order_By>;
};

/** select columns of table "kc.trade_sum_volume_by_week" */
export enum Kc_Trade_Sum_Volume_By_Week_Select_Column {
  /** column name */
  PrimaryCurrency = 'primary_currency',
  /** column name */
  SecondaryCurrency = 'secondary_currency',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserUid = 'user_uid',
  /** column name */
  Week = 'week'
}

/** aggregate var_pop on columns */
export type Kc_Trade_Var_Pop_Fields = {
  __typename?: 'kc_trade_var_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.trade" */
export type Kc_Trade_Var_Pop_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Var_Samp_Fields = {
  __typename?: 'kc_trade_var_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.trade" */
export type Kc_Trade_Var_Samp_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_Trade_Variance_Fields = {
  __typename?: 'kc_trade_variance_fields';
  fee?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kc.trade" */
export type Kc_Trade_Variance_Order_By = {
  fee?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  total_value?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
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
  user2FA?: Maybe<Kc_User_2fa>;
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
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserOrdersArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserTradesArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Device_Order_By>>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Device_Order_By>>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


/** columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
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
  _and?: InputMaybe<Array<Kc_User_2fa_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_2fa_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_2fa_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
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
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  _and?: InputMaybe<Array<Kc_User_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Kc_Order_Bool_Exp>;
  trades?: InputMaybe<Kc_Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user2FA?: InputMaybe<Kc_User_2fa_Bool_Exp>;
  user_devices?: InputMaybe<Kc_User_Device_Bool_Exp>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
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
  columns?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.user_device" */
export type Kc_User_Device_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_User_Device_Max_Order_By>;
  min?: InputMaybe<Kc_User_Device_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.user_device". All fields are combined with a logical 'AND'. */
export type Kc_User_Device_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_Device_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Device_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Device_Bool_Exp>>;
  accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  trusted?: InputMaybe<Boolean_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
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
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  trusted?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
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
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


/** columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
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
  columns?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_User_Exchange_Keys_Max_Order_By>;
  min?: InputMaybe<Kc_User_Exchange_Keys_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "kc.user_exchange_keys". All fields are combined with a logical 'AND'. */
export type Kc_User_Exchange_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_Exchange_Keys_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Exchange_Keys_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>;
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>;
  invalidated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
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
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  email_verified?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Kc_Order_Aggregate_Order_By>;
  trades_aggregate?: InputMaybe<Kc_Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user2FA?: InputMaybe<Kc_User_2fa_Order_By>;
  user_devices_aggregate?: InputMaybe<Kc_User_Device_Aggregate_Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<Kc_User_Exchange_Keys_Aggregate_Order_By>;
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
  validate_user_exchange_keys_live?: Maybe<ValidateUserExchangeKeysLiveOutput>;
  verify_user_email: VerifyUserEmailOutput;
};


/** mutation root */
export type Mutation_RootCreate_Auth_TokenArgs = {
  device_id: Scalars['String'];
  device_name: Scalars['String'];
  device_trusted: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  token_2fa?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootCreate_Dca_OrderArgs = {
  daily_average: Scalars['Float'];
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
  token_2fa?: InputMaybe<Scalars['String']>;
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
  force_sync?: InputMaybe<Scalars['Boolean']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Dca_OrderArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_Inc_Input>;
  _set?: InputMaybe<Kc_Dca_Order_Set_Input>;
  where: Kc_Dca_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_By_PkArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_Inc_Input>;
  _set?: InputMaybe<Kc_Dca_Order_Set_Input>;
  pk_columns: Kc_Dca_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_DeviceArgs = {
  _set?: InputMaybe<Kc_User_Device_Set_Input>;
  where: Kc_User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Device_By_PkArgs = {
  _set?: InputMaybe<Kc_User_Device_Set_Input>;
  pk_columns: Kc_User_Device_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Exchange_KeysArgs = {
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootValidate_User_Exchange_KeysArgs = {
  user_exchange_keys_uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootValidate_User_Exchange_Keys_LiveArgs = {
  exchange_uid: Scalars['uuid'];
  keys: Scalars['jsonb'];
};


/** mutation root */
export type Mutation_RootVerify_User_EmailArgs = {
  email_verify_secret: Scalars['String'];
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
  /** fetch data from the table: "kc.currency" */
  kc_currency: Array<Kc_Currency>;
  /** fetch data from the table: "kc.currency" using primary key columns */
  kc_currency_by_pk?: Maybe<Kc_Currency>;
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
  /** fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Array<Kc_Exchange_Primary_Currency>;
  /** fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>;
  /** fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Array<Kc_Exchange_Secondary_Currency>;
  /** fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** fetch data from the table: "kc.market" */
  kc_market: Array<Kc_Market>;
  /** fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>;
  /** fetch data from the table: "kc.market_price" */
  kc_market_price: Array<Kc_Market_Price>;
  /** fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Array<Kc_Market_Price>;
  /** fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Array<Kc_Market_Trading_Pair>;
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
  /** fetch data from the table: "kc.trade_avg_price_by_day" */
  kc_trade_avg_price_by_day: Array<Kc_Trade_Avg_Price_By_Day>;
  /** fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** fetch data from the table: "kc.trade_sum_total_value_by_month" */
  kc_trade_sum_total_value_by_month: Array<Kc_Trade_Sum_Total_Value_By_Month>;
  /** fetch data from the table: "kc.trade_sum_total_value_by_week" */
  kc_trade_sum_total_value_by_week: Array<Kc_Trade_Sum_Total_Value_By_Week>;
  /** fetch data from the table: "kc.trade_sum_volume_by_month" */
  kc_trade_sum_volume_by_month: Array<Kc_Trade_Sum_Volume_By_Month>;
  /** fetch data from the table: "kc.trade_sum_volume_by_week" */
  kc_trade_sum_volume_by_week: Array<Kc_Trade_Sum_Volume_By_Week>;
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


export type Query_RootKc_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Currency_Order_By>>;
  where?: InputMaybe<Kc_Currency_Bool_Exp>;
};


export type Query_RootKc_Currency_By_PkArgs = {
  symbol: Scalars['String'];
};


export type Query_RootKc_Dca_OrderArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Query_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_ExchangeArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Bool_Exp>;
};


export type Query_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_Exchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>;
};


export type Query_RootKc_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootKc_Exchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>;
};


export type Query_RootKc_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Query_RootKc_MarketArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Order_By>>;
  where?: InputMaybe<Kc_Market_Bool_Exp>;
};


export type Query_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_Market_PriceArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};


export type Query_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Query_RootKc_Market_Price_LatestArgs = {
  args: Kc_Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};


export type Query_RootKc_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>;
};


export type Query_RootKc_OrderArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


export type Query_RootKc_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


export type Query_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_TradeArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


export type Query_RootKc_Trade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


export type Query_RootKc_Trade_Avg_Price_By_DayArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Order_By>>;
  where?: InputMaybe<Kc_Trade_Avg_Price_By_Day_Bool_Exp>;
};


export type Query_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_Trade_Sum_Total_Value_By_MonthArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Total_Value_By_Month_Bool_Exp>;
};


export type Query_RootKc_Trade_Sum_Total_Value_By_WeekArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Total_Value_By_Week_Bool_Exp>;
};


export type Query_RootKc_Trade_Sum_Volume_By_MonthArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Volume_By_Month_Bool_Exp>;
};


export type Query_RootKc_Trade_Sum_Volume_By_WeekArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Volume_By_Week_Bool_Exp>;
};


export type Query_RootKc_UserArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Order_By>>;
  where?: InputMaybe<Kc_User_Bool_Exp>;
};


export type Query_RootKc_User_2faArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_2fa_Order_By>>;
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>;
};


export type Query_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Device_Order_By>>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};


export type Query_RootKc_User_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Device_Order_By>>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};


export type Query_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Query_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "kc.currency" */
  kc_currency: Array<Kc_Currency>;
  /** fetch data from the table: "kc.currency" using primary key columns */
  kc_currency_by_pk?: Maybe<Kc_Currency>;
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
  /** fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Array<Kc_Exchange_Primary_Currency>;
  /** fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>;
  /** fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Array<Kc_Exchange_Secondary_Currency>;
  /** fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** fetch data from the table: "kc.market" */
  kc_market: Array<Kc_Market>;
  /** fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>;
  /** fetch data from the table: "kc.market_price" */
  kc_market_price: Array<Kc_Market_Price>;
  /** fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Array<Kc_Market_Price>;
  /** fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Array<Kc_Market_Trading_Pair>;
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
  /** fetch data from the table: "kc.trade_avg_price_by_day" */
  kc_trade_avg_price_by_day: Array<Kc_Trade_Avg_Price_By_Day>;
  /** fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** fetch data from the table: "kc.trade_sum_total_value_by_month" */
  kc_trade_sum_total_value_by_month: Array<Kc_Trade_Sum_Total_Value_By_Month>;
  /** fetch data from the table: "kc.trade_sum_total_value_by_week" */
  kc_trade_sum_total_value_by_week: Array<Kc_Trade_Sum_Total_Value_By_Week>;
  /** fetch data from the table: "kc.trade_sum_volume_by_month" */
  kc_trade_sum_volume_by_month: Array<Kc_Trade_Sum_Volume_By_Month>;
  /** fetch data from the table: "kc.trade_sum_volume_by_week" */
  kc_trade_sum_volume_by_week: Array<Kc_Trade_Sum_Volume_By_Week>;
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


export type Subscription_RootKc_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Currency_Order_By>>;
  where?: InputMaybe<Kc_Currency_Bool_Exp>;
};


export type Subscription_RootKc_Currency_By_PkArgs = {
  symbol: Scalars['String'];
};


export type Subscription_RootKc_Dca_OrderArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Dca_Order_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Dca_Order_History_Order_By>>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
};


export type Subscription_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_ExchangeArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Bool_Exp>;
};


export type Subscription_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_Exchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>;
};


export type Subscription_RootKc_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootKc_Exchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Order_By>>;
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>;
};


export type Subscription_RootKc_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


export type Subscription_RootKc_MarketArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Order_By>>;
  where?: InputMaybe<Kc_Market_Bool_Exp>;
};


export type Subscription_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_Market_PriceArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};


export type Subscription_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


export type Subscription_RootKc_Market_Price_LatestArgs = {
  args: Kc_Market_Price_Latest_Args;
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};


export type Subscription_RootKc_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Trading_Pair_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Trading_Pair_Order_By>>;
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>;
};


export type Subscription_RootKc_OrderArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


export type Subscription_RootKc_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Order_Order_By>>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
};


export type Subscription_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_TradeArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


export type Subscription_RootKc_Trade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Order_By>>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
};


export type Subscription_RootKc_Trade_Avg_Price_By_DayArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Order_By>>;
  where?: InputMaybe<Kc_Trade_Avg_Price_By_Day_Bool_Exp>;
};


export type Subscription_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_Trade_Sum_Total_Value_By_MonthArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Total_Value_By_Month_Bool_Exp>;
};


export type Subscription_RootKc_Trade_Sum_Total_Value_By_WeekArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Total_Value_By_Week_Bool_Exp>;
};


export type Subscription_RootKc_Trade_Sum_Volume_By_MonthArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Volume_By_Month_Bool_Exp>;
};


export type Subscription_RootKc_Trade_Sum_Volume_By_WeekArgs = {
  distinct_on?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Order_By>>;
  where?: InputMaybe<Kc_Trade_Sum_Volume_By_Week_Bool_Exp>;
};


export type Subscription_RootKc_UserArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Order_By>>;
  where?: InputMaybe<Kc_User_Bool_Exp>;
};


export type Subscription_RootKc_User_2faArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_2fa_Order_By>>;
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>;
};


export type Subscription_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Device_Order_By>>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};


export type Subscription_RootKc_User_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Device_Order_By>>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};


export type Subscription_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Exchange_Keys_Order_By>>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};


export type Subscription_RootKc_User_Exchange_Keys_By_PkArgs = {
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

export type GetDcaOrderFormCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderFormCreateQuery = { __typename?: 'query_root', kc_market: Array<{ __typename?: 'kc_market', uid: string, name: string, market_prices: Array<{ __typename?: 'kc_market_price', asset_symbol: string, currency: string }> }>, kc_user_exchange_keys: Array<{ __typename?: 'kc_user_exchange_keys', uid: string, description: string, exchange_uid: string }>, kc_exchange: Array<{ __typename?: 'kc_exchange', uid: string, name: string, primary_currencies: Array<{ __typename?: 'kc_exchange_primary_currency', symbol: string, currency: { __typename?: 'kc_currency', name: string } }>, secondary_currencies: Array<{ __typename?: 'kc_exchange_secondary_currency', symbol: string, currency: { __typename?: 'kc_currency', name: string } }> }> };

export type CreateDcaOrderMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
  marketUID: Scalars['uuid'];
  startAt: Scalars['timestamp'];
  marketOffset: Scalars['Float'];
  dailyAverage: Scalars['Float'];
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  minValue?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
}>;


export type CreateDcaOrderMutation = { __typename?: 'mutation_root', create_dca_order?: { __typename?: 'CreateDCAOrderResult', dca_order: { __typename?: 'kc_dca_order', uid: string, user_exchange_keys_uid: string, enabled_at?: string | null | undefined, market_uid: string, start_at: string, market_offset: number, daily_average: number, min_value?: number | null | undefined, max_value?: number | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string, id: string, name: string }, primary_currency: { __typename?: 'kc_currency', symbol: string }, secondary_currency: { __typename?: 'kc_currency', symbol: string } } } | null | undefined };

export type NewDcaOrderFragment = { __typename?: 'kc_dca_order', uid: string, enabled_at?: string | null | undefined, daily_average: number, start_at: string, market_offset: number, min_value?: number | null | undefined, max_value?: number | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string, id: string, name: string }, primary_currency: { __typename?: 'kc_currency', symbol: string }, secondary_currency: { __typename?: 'kc_currency', symbol: string } };

export type GetDcaOrderFormEditQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderFormEditQuery = { __typename?: 'query_root', kc_market: Array<{ __typename?: 'kc_market', uid: string, name: string, market_prices: Array<{ __typename?: 'kc_market_price', asset_symbol: string, currency: string }> }>, kc_user_exchange_keys: Array<{ __typename?: 'kc_user_exchange_keys', uid: string, exchange_uid: string, description: string }>, kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string, user_exchange_keys_uid: string, exchange_uid: string, market_uid: string, start_at: string, market_offset: number, daily_average: number, min_value?: number | null | undefined, max_value?: number | null | undefined, primary_currency: { __typename?: 'kc_currency', symbol: string, name: string }, secondary_currency: { __typename?: 'kc_currency', symbol: string, name: string }, exchange: { __typename?: 'kc_exchange', uid: string, name: string } } | null | undefined };

export type UpdateDcaOrderMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
  values: Kc_Dca_Order_Set_Input;
}>;


export type UpdateDcaOrderMutation = { __typename?: 'mutation_root', update_kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string, daily_average: number, enabled_at?: string | null | undefined, market_offset: number, market_uid: string, max_value?: number | null | undefined, min_value?: number | null | undefined, start_at: string, updated_at: string, user_exchange_keys_uid: string } | null | undefined };

export type GetDcaOrderHistoryListQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderHistoryListQuery = { __typename?: 'query_root', kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string, exchange: { __typename?: 'kc_exchange', uid: string, name: string }, primary_currency: { __typename?: 'kc_currency', symbol: string }, secondary_currency: { __typename?: 'kc_currency', symbol: string } } | null | undefined, kc_dca_order_history: Array<{ __typename?: 'kc_dca_order_history', uid: string, created_at: string, market_price: number, market_offset: number, target_value: number, available_balance: number, created_order: boolean, description: string, value: number }> };

export type GetDcaOrderHistoryPriceChartQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderHistoryPriceChartQuery = { __typename?: 'query_root', kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string, exchange_market_trading_pair?: Array<{ __typename?: 'kc_market_trading_pair', market_prices: Array<{ __typename?: 'kc_market_price', price: number, timestamp: string }> }> | null | undefined, market_prices: Array<{ __typename?: 'kc_market_price', price: number, timestamp: string }> } | null | undefined, kc_dca_order_history: Array<{ __typename?: 'kc_dca_order_history', uid: string, created_at: string, market_price: number, market_offset: number }> };

export type GetDcaOrderHistoryValueChartQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderHistoryValueChartQuery = { __typename?: 'query_root', kc_dca_order_history: Array<{ __typename?: 'kc_dca_order_history', uid: string, created_at: string, value: number, available_balance: number }> };

export type GetDcaOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderListQuery = { __typename?: 'query_root', kc_dca_order: Array<{ __typename?: 'kc_dca_order', uid: string, enabled_at?: string | null | undefined, daily_average: number, start_at: string, market_offset: number, min_value?: number | null | undefined, max_value?: number | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string, id: string, name: string }, primary_currency: { __typename?: 'kc_currency', symbol: string }, secondary_currency: { __typename?: 'kc_currency', symbol: string } }> };

export type UpdateDcaOrderEnabledAtMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
  enabledAt?: InputMaybe<Scalars['timestamptz']>;
}>;


export type UpdateDcaOrderEnabledAtMutation = { __typename?: 'mutation_root', update_kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string, enabled_at?: string | null | undefined } | null | undefined };

export type GetDcaOrderModalDeleteQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type GetDcaOrderModalDeleteQuery = { __typename?: 'query_root', kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string, enabled_at?: string | null | undefined, daily_average: number, start_at: string, market_offset: number, min_value?: number | null | undefined, max_value?: number | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string, name: string }, primary_currency: { __typename?: 'kc_currency', symbol: string }, secondary_currency: { __typename?: 'kc_currency', symbol: string } } | null | undefined };

export type DeleteDcaOrderMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid'];
}>;


export type DeleteDcaOrderMutation = { __typename?: 'mutation_root', delete_kc_dca_order_by_pk?: { __typename?: 'kc_dca_order', uid: string } | null | undefined };

export type GetDcaOrderListByUidQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderListByUidQuery = { __typename?: 'query_root', kc_dca_order: Array<{ __typename?: 'kc_dca_order', uid: string }> };

export type GetExchangeListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExchangeListQuery = { __typename?: 'query_root', kc_exchange: Array<{ __typename?: 'kc_exchange', uid: string, name: string, url: string, primary_currencies: Array<{ __typename?: 'kc_exchange_primary_currency', symbol: string }>, secondary_currencies: Array<{ __typename?: 'kc_exchange_secondary_currency', symbol: string }> }> };

export type GetMarketPriceListQueryVariables = Exact<{
  timestamp: Scalars['timestamptz'];
  filters: Kc_Market_Price_Bool_Exp;
}>;


export type GetMarketPriceListQuery = { __typename?: 'query_root', kc_market: Array<{ __typename?: 'kc_market', uid: string, id: string, name: string, market_prices: Array<{ __typename?: 'kc_market_price', timestamp: string, price: number, asset_symbol: string, currency: string }> }> };

export type GetMarketPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
}>;


export type GetMarketPriceQuery = { __typename?: 'query_root', binance: Array<{ __typename?: 'kc_market_price', price: number, timestamp: string }>, kiwi_coin: Array<{ __typename?: 'kc_market_price', price: number, timestamp: string }>, dasset: Array<{ __typename?: 'kc_market_price', price: number, timestamp: string }> };

export type GetOpenOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenOrderListQuery = { __typename?: 'query_root', kc_order: Array<{ __typename?: 'kc_order', uid: string, opened_at: string, value: number, volume: number, price: number, primary_currency: string, secondary_currency: string, type: string, exchange: { __typename?: 'kc_exchange', uid: string, id: string } }> };

export type Create_UserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type Create_UserMutation = { __typename?: 'mutation_root', create_user?: { __typename?: 'CreateUserOutput', user_uid: string } | null | undefined };

export type GetTradeSumValueByWeekQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeSumValueByWeekQuery = { __typename?: 'query_root', kc_trade_sum_total_value_by_week: Array<{ __typename?: 'kc_trade_sum_total_value_by_week', week?: string | null | undefined, sum?: number | null | undefined, primary_currency?: string | null | undefined, secondary_currency?: string | null | undefined }> };

export type GetTradeListQueryVariables = Exact<{
  filters: Kc_Trade_Bool_Exp;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetTradeListQuery = { __typename?: 'query_root', kc_trade_aggregate: { __typename?: 'kc_trade_aggregate', aggregate?: { __typename?: 'kc_trade_aggregate_fields', count: number, sum?: { __typename?: 'kc_trade_sum_fields', value?: number | null | undefined, volume?: number | null | undefined, fee?: number | null | undefined } | null | undefined, min?: { __typename?: 'kc_trade_min_fields', timestamp?: string | null | undefined } | null | undefined, max?: { __typename?: 'kc_trade_max_fields', timestamp?: string | null | undefined } | null | undefined } | null | undefined }, kc_trade: Array<{ __typename?: 'kc_trade', uid: string, timestamp: string, value: number, volume: number, primary_currency: string, secondary_currency: string, type: string, price: number, total_value: number, fee: number, exchange: { __typename?: 'kc_exchange', uid: string, id: string } }> };

export type GetTradeAvgPriceByDayQueryVariables = Exact<{
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
}>;


export type GetTradeAvgPriceByDayQuery = { __typename?: 'query_root', kc_trade_avg_price_by_day: Array<{ __typename?: 'kc_trade_avg_price_by_day', day?: string | null | undefined, price?: number | null | undefined, avg_price?: number | null | undefined }> };

export type GetUserDeviceByUidQueryVariables = Exact<{
  userDeviceUID: Scalars['uuid'];
}>;


export type GetUserDeviceByUidQuery = { __typename?: 'query_root', kc_user_device_by_pk?: { __typename?: 'kc_user_device', uid: string, name: string } | null | undefined };

export type UpdateUserDeviceMutationVariables = Exact<{
  userDeviceUID: Scalars['uuid'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserDeviceMutation = { __typename?: 'mutation_root', update_kc_user_device_by_pk?: { __typename?: 'kc_user_device', uid: string, name: string } | null | undefined };

export type GetUserDeviceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDeviceListQuery = { __typename?: 'query_root', kc_user_device: Array<{ __typename?: 'kc_user_device', uid: string, name: string, created_at: string, accessed_at: string }> };

export type DeleteUserDeviceMutationVariables = Exact<{
  userDeviceUID: Scalars['uuid'];
}>;


export type DeleteUserDeviceMutation = { __typename?: 'mutation_root', delete_kc_user_device_by_pk?: { __typename?: 'kc_user_device', uid: string } | null | undefined };

export type GetUserDeviceListByUidQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDeviceListByUidQuery = { __typename?: 'query_root', kc_user_device: Array<{ __typename?: 'kc_user_device', uid: string }> };

export type GetExchangeKeysFormCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExchangeKeysFormCreateQuery = { __typename?: 'query_root', kc_exchange: Array<{ __typename?: 'kc_exchange', uid: string, id: string, name: string }> };

export type CreateUserExchangeKeysMutationVariables = Exact<{
  description: Scalars['String'];
  exchangeUID: Scalars['uuid'];
  keys: Scalars['jsonb'];
}>;


export type CreateUserExchangeKeysMutation = { __typename?: 'mutation_root', create_user_exchange_keys?: { __typename?: 'CreateUserExchangeKeysOutput', user_exchange_keys: { __typename?: 'kc_user_exchange_keys', uid: string, description: string, invalidated_at?: string | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string }, dca_orders_aggregate: { __typename?: 'kc_dca_order_aggregate', aggregate?: { __typename?: 'kc_dca_order_aggregate_fields', count: number } | null | undefined } } } | null | undefined };

export type NewKeysFragment = { __typename?: 'kc_user_exchange_keys', uid: string, description: string, invalidated_at?: string | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string }, dca_orders_aggregate: { __typename?: 'kc_dca_order_aggregate', aggregate?: { __typename?: 'kc_dca_order_aggregate_fields', count: number } | null | undefined } };

export type GetUserExchangeKeysFormEditQueryVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type GetUserExchangeKeysFormEditQuery = { __typename?: 'query_root', kc_user_exchange_keys_by_pk?: { __typename?: 'kc_user_exchange_keys', uid: string, description: string, exchange: { __typename?: 'kc_exchange', uid: string, id: string, name: string } } | null | undefined };

export type UpdateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
}>;


export type UpdateUserExchangeKeysMutation = { __typename?: 'mutation_root', update_user_exchange_keys?: { __typename?: 'UpdateUserExchangeKeysOutput', user_exchange_keys: { __typename?: 'kc_user_exchange_keys', uid: string, description: string, invalidated_at?: string | null | undefined, exchange: { __typename?: 'kc_exchange', uid: string }, dca_orders_aggregate: { __typename?: 'kc_dca_order_aggregate', aggregate?: { __typename?: 'kc_dca_order_aggregate_fields', count: number } | null | undefined } } } | null | undefined };

export type GetUserExchangeKeysListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserExchangeKeysListQuery = { __typename?: 'query_root', kc_user_exchange_keys: Array<{ __typename?: 'kc_user_exchange_keys', uid: string, description: string, updated_at: string, exchange: { __typename?: 'kc_exchange', uid: string, name: string }, dca_orders_aggregate: { __typename?: 'kc_dca_order_aggregate', aggregate?: { __typename?: 'kc_dca_order_aggregate_fields', count: number } | null | undefined } }> };

export type DeleteUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type DeleteUserExchangeKeysMutation = { __typename?: 'mutation_root', delete_kc_user_exchange_keys_by_pk?: { __typename?: 'kc_user_exchange_keys', uid: string } | null | undefined };

export type GetUserExchangeKeysListByUidQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserExchangeKeysListByUidQuery = { __typename?: 'query_root', kc_user_exchange_keys: Array<{ __typename?: 'kc_user_exchange_keys', uid: string }> };

export type GetUserExchangeKeysModalDeleteQueryVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type GetUserExchangeKeysModalDeleteQuery = { __typename?: 'query_root', kc_user_exchange_keys_by_pk?: { __typename?: 'kc_user_exchange_keys', uid: string, description: string } | null | undefined };

export type CreateAuthTokenHookMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  deviceID: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
}>;


export type CreateAuthTokenHookMutation = { __typename?: 'mutation_root', create_auth_token?: { __typename?: 'CreateAuthTokenOutput', user_uid: string, auth_token: string, expires_at: string } | null | undefined };

export type ValidateUserExchangeKeysLiveMutationVariables = Exact<{
  exchangeUID: Scalars['uuid'];
  keys: Scalars['jsonb'];
}>;


export type ValidateUserExchangeKeysLiveMutation = { __typename?: 'mutation_root', validate_user_exchange_keys_live?: { __typename?: 'ValidateUserExchangeKeysLiveOutput', is_valid: boolean, validation_message?: string | null | undefined } | null | undefined };

export type ValidateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid'];
}>;


export type ValidateUserExchangeKeysMutation = { __typename?: 'mutation_root', validate_user_exchange_keys?: { __typename?: 'ValidateUserExchangeKeysOutput', is_valid: boolean, validation_message?: string | null | undefined } | null | undefined };

export const NewDcaOrderFragmentDoc = gql`
    fragment NewDCAOrder on kc_dca_order {
  uid
  exchange {
    uid
    id
    name
  }
  enabled_at
  daily_average
  start_at
  market_offset
  primary_currency {
    symbol
  }
  secondary_currency {
    symbol
  }
  min_value
  max_value
}
    `;
export const NewKeysFragmentDoc = gql`
    fragment NewKeys on kc_user_exchange_keys {
  uid
  description
  exchange {
    uid
  }
  invalidated_at
  dca_orders_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const GetDcaOrderFormCreateDocument = gql`
    query getDCAOrderFormCreate {
  kc_market {
    uid
    name
    market_prices(
      distinct_on: [asset_symbol, currency]
      where: {timestamp: {_gt: "2021-12-09T12:00:00"}}
    ) {
      asset_symbol
      currency
    }
  }
  kc_user_exchange_keys {
    uid
    description
    exchange_uid
  }
  kc_exchange {
    uid
    name
    primary_currencies {
      symbol
      currency {
        name
      }
    }
    secondary_currencies {
      symbol
      currency {
        name
      }
    }
  }
}
    `;
export type GetDcaOrderFormCreateQueryResult = Apollo.QueryResult<GetDcaOrderFormCreateQuery, GetDcaOrderFormCreateQueryVariables>;
export const CreateDcaOrderDocument = gql`
    mutation createDCAOrder($userExchangeKeysUID: uuid!, $marketUID: uuid!, $startAt: timestamp!, $marketOffset: Float!, $dailyAverage: Float!, $primaryCurrency: String!, $secondaryCurrency: String!, $minValue: Float, $maxValue: Float) {
  create_dca_order(
    user_exchange_keys_uid: $userExchangeKeysUID
    market_uid: $marketUID
    start_at: $startAt
    market_offset: $marketOffset
    daily_average: $dailyAverage
    primary_currency: $primaryCurrency
    secondary_currency: $secondaryCurrency
    min_value: $minValue
    max_value: $maxValue
  ) {
    dca_order {
      uid
      exchange {
        uid
        id
        name
      }
      user_exchange_keys_uid
      enabled_at
      market_uid
      start_at
      market_offset
      daily_average
      primary_currency {
        symbol
      }
      secondary_currency {
        symbol
      }
      min_value
      max_value
    }
  }
}
    `;
export type CreateDcaOrderMutationFn = Apollo.MutationFunction<CreateDcaOrderMutation, CreateDcaOrderMutationVariables>;
export type CreateDcaOrderMutationResult = Apollo.MutationResult<CreateDcaOrderMutation>;
export type CreateDcaOrderMutationOptions = Apollo.BaseMutationOptions<CreateDcaOrderMutation, CreateDcaOrderMutationVariables>;
export const GetDcaOrderFormEditDocument = gql`
    query getDCAOrderFormEdit($dcaOrderUID: uuid!) {
  kc_market {
    uid
    name
    market_prices(
      distinct_on: [asset_symbol, currency]
      where: {timestamp: {_gt: "2021-12-09T12:00:00"}}
    ) {
      asset_symbol
      currency
    }
  }
  kc_user_exchange_keys {
    uid
    exchange_uid
    description
  }
  kc_dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    user_exchange_keys_uid
    exchange_uid
    market_uid
    start_at
    market_offset
    daily_average
    primary_currency {
      symbol
      name
    }
    secondary_currency {
      symbol
      name
    }
    min_value
    max_value
    exchange {
      uid
      name
    }
  }
}
    `;
export type GetDcaOrderFormEditQueryResult = Apollo.QueryResult<GetDcaOrderFormEditQuery, GetDcaOrderFormEditQueryVariables>;
export const UpdateDcaOrderDocument = gql`
    mutation updateDCAOrder($dcaOrderUID: uuid!, $values: kc_dca_order_set_input!) {
  update_kc_dca_order_by_pk(pk_columns: {uid: $dcaOrderUID}, _set: $values) {
    uid
    daily_average
    enabled_at
    market_offset
    market_uid
    max_value
    min_value
    start_at
    updated_at
    user_exchange_keys_uid
  }
}
    `;
export type UpdateDcaOrderMutationFn = Apollo.MutationFunction<UpdateDcaOrderMutation, UpdateDcaOrderMutationVariables>;
export type UpdateDcaOrderMutationResult = Apollo.MutationResult<UpdateDcaOrderMutation>;
export type UpdateDcaOrderMutationOptions = Apollo.BaseMutationOptions<UpdateDcaOrderMutation, UpdateDcaOrderMutationVariables>;
export const GetDcaOrderHistoryListDocument = gql`
    query getDCAOrderHistoryList($dcaOrderUID: uuid!) {
  kc_dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    exchange {
      uid
      name
    }
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
  }
  kc_dca_order_history(
    where: {dca_order_uid: {_eq: $dcaOrderUID}}
    order_by: {created_at: desc}
  ) {
    uid
    created_at
    market_price
    market_offset
    target_value
    available_balance
    created_order
    description
    value
  }
}
    `;
export type GetDcaOrderHistoryListQueryResult = Apollo.QueryResult<GetDcaOrderHistoryListQuery, GetDcaOrderHistoryListQueryVariables>;
export const GetDcaOrderHistoryPriceChartDocument = gql`
    query getDCAOrderHistoryPriceChart($dcaOrderUID: uuid!) {
  kc_dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    exchange_market_trading_pair {
      market_prices(order_by: {timestamp: desc}, limit: 400) {
        price
        timestamp
      }
    }
    market_prices(order_by: {timestamp: desc}, limit: 400) {
      price
      timestamp
    }
  }
  kc_dca_order_history(
    where: {dca_order_uid: {_eq: $dcaOrderUID}}
    order_by: {created_at: desc}
  ) {
    uid
    created_at
    market_price
    market_offset
  }
}
    `;
export type GetDcaOrderHistoryPriceChartQueryResult = Apollo.QueryResult<GetDcaOrderHistoryPriceChartQuery, GetDcaOrderHistoryPriceChartQueryVariables>;
export const GetDcaOrderHistoryValueChartDocument = gql`
    query getDCAOrderHistoryValueChart($dcaOrderUID: uuid!) {
  kc_dca_order_history(
    where: {dca_order_uid: {_eq: $dcaOrderUID}}
    order_by: {created_at: desc}
  ) {
    uid
    created_at
    value
    available_balance
  }
}
    `;
export type GetDcaOrderHistoryValueChartQueryResult = Apollo.QueryResult<GetDcaOrderHistoryValueChartQuery, GetDcaOrderHistoryValueChartQueryVariables>;
export const GetDcaOrderListDocument = gql`
    query getDCAOrderList {
  kc_dca_order {
    uid
    exchange {
      uid
      id
      name
    }
    enabled_at
    daily_average
    start_at
    market_offset
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
    min_value
    max_value
  }
}
    `;
export type GetDcaOrderListQueryResult = Apollo.QueryResult<GetDcaOrderListQuery, GetDcaOrderListQueryVariables>;
export const UpdateDcaOrderEnabledAtDocument = gql`
    mutation updateDCAOrderEnabledAt($dcaOrderUID: uuid!, $enabledAt: timestamptz) {
  update_kc_dca_order_by_pk(
    pk_columns: {uid: $dcaOrderUID}
    _set: {enabled_at: $enabledAt}
  ) {
    uid
    enabled_at
  }
}
    `;
export type UpdateDcaOrderEnabledAtMutationFn = Apollo.MutationFunction<UpdateDcaOrderEnabledAtMutation, UpdateDcaOrderEnabledAtMutationVariables>;
export type UpdateDcaOrderEnabledAtMutationResult = Apollo.MutationResult<UpdateDcaOrderEnabledAtMutation>;
export type UpdateDcaOrderEnabledAtMutationOptions = Apollo.BaseMutationOptions<UpdateDcaOrderEnabledAtMutation, UpdateDcaOrderEnabledAtMutationVariables>;
export const GetDcaOrderModalDeleteDocument = gql`
    query getDCAOrderModalDelete($dcaOrderUID: uuid!) {
  kc_dca_order_by_pk(uid: $dcaOrderUID) {
    uid
    exchange {
      uid
      name
    }
    enabled_at
    daily_average
    start_at
    market_offset
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
    min_value
    max_value
  }
}
    `;
export type GetDcaOrderModalDeleteQueryResult = Apollo.QueryResult<GetDcaOrderModalDeleteQuery, GetDcaOrderModalDeleteQueryVariables>;
export const DeleteDcaOrderDocument = gql`
    mutation deleteDCAOrder($dcaOrderUID: uuid!) {
  delete_kc_dca_order_by_pk(uid: $dcaOrderUID) {
    uid
  }
}
    `;
export type DeleteDcaOrderMutationFn = Apollo.MutationFunction<DeleteDcaOrderMutation, DeleteDcaOrderMutationVariables>;
export type DeleteDcaOrderMutationResult = Apollo.MutationResult<DeleteDcaOrderMutation>;
export type DeleteDcaOrderMutationOptions = Apollo.BaseMutationOptions<DeleteDcaOrderMutation, DeleteDcaOrderMutationVariables>;
export const GetDcaOrderListByUidDocument = gql`
    query getDCAOrderListByUID {
  kc_dca_order {
    uid
  }
}
    `;
export type GetDcaOrderListByUidQueryResult = Apollo.QueryResult<GetDcaOrderListByUidQuery, GetDcaOrderListByUidQueryVariables>;
export const GetExchangeListDocument = gql`
    query getExchangeList {
  kc_exchange {
    uid
    name
    url
    primary_currencies(order_by: {symbol: asc}) {
      symbol
    }
    secondary_currencies(order_by: {symbol: asc}) {
      symbol
    }
  }
}
    `;
export type GetExchangeListQueryResult = Apollo.QueryResult<GetExchangeListQuery, GetExchangeListQueryVariables>;
export const GetMarketPriceListDocument = gql`
    query getMarketPriceList($timestamp: timestamptz!, $filters: kc_market_price_bool_exp!) {
  kc_market {
    uid
    id
    name
    market_prices(
      distinct_on: [asset_symbol, currency]
      where: {timestamp: {_gte: $timestamp}}
    ) {
      timestamp
      price
      asset_symbol
      currency
    }
  }
}
    `;
export type GetMarketPriceListQueryResult = Apollo.QueryResult<GetMarketPriceListQuery, GetMarketPriceListQueryVariables>;
export const GetMarketPriceDocument = gql`
    query getMarketPrice($primaryCurrency: String!, $secondaryCurrency: String!) {
  binance: kc_market_price(
    where: {market_uid: {_eq: ""}, asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
    order_by: {timestamp: desc}
  ) {
    price
    timestamp
  }
  kiwi_coin: kc_market_price(
    where: {market_uid: {_eq: ""}, asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
    order_by: {timestamp: desc}
  ) {
    price
    timestamp
  }
  dasset: kc_market_price(
    where: {market_uid: {_eq: ""}, asset_symbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
    order_by: {timestamp: desc}
  ) {
    price
    timestamp
  }
}
    `;
export type GetMarketPriceQueryResult = Apollo.QueryResult<GetMarketPriceQuery, GetMarketPriceQueryVariables>;
export const GetOpenOrderListDocument = gql`
    query getOpenOrderList {
  kc_order(where: {closed_at: {_is_null: true}}) {
    uid
    exchange {
      uid
      id
    }
    opened_at
    value
    volume
    price
    primary_currency
    secondary_currency
    type
  }
}
    `;
export type GetOpenOrderListQueryResult = Apollo.QueryResult<GetOpenOrderListQuery, GetOpenOrderListQueryVariables>;
export const Create_UserDocument = gql`
    mutation create_user($email: String!, $password: String!) {
  create_user(email: $email, password: $password) {
    user_uid
  }
}
    `;
export type Create_UserMutationFn = Apollo.MutationFunction<Create_UserMutation, Create_UserMutationVariables>;
export type Create_UserMutationResult = Apollo.MutationResult<Create_UserMutation>;
export type Create_UserMutationOptions = Apollo.BaseMutationOptions<Create_UserMutation, Create_UserMutationVariables>;
export const GetTradeSumValueByWeekDocument = gql`
    query getTradeSumValueByWeek {
  kc_trade_sum_total_value_by_week {
    week
    sum
    primary_currency
    secondary_currency
  }
}
    `;
export type GetTradeSumValueByWeekQueryResult = Apollo.QueryResult<GetTradeSumValueByWeekQuery, GetTradeSumValueByWeekQueryVariables>;
export const GetTradeListDocument = gql`
    query getTradeList($filters: kc_trade_bool_exp!, $offset: Int!, $limit: Int!) {
  kc_trade_aggregate(where: $filters) {
    aggregate {
      count
      sum {
        value
        volume
        fee
      }
      min {
        timestamp
      }
      max {
        timestamp
      }
    }
  }
  kc_trade(
    where: $filters
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    uid
    exchange {
      uid
      id
    }
    timestamp
    value
    volume
    primary_currency
    secondary_currency
    type
    price
    total_value
    fee
  }
}
    `;
export type GetTradeListQueryResult = Apollo.QueryResult<GetTradeListQuery, GetTradeListQueryVariables>;
export const GetTradeAvgPriceByDayDocument = gql`
    query getTradeAvgPriceByDay($primaryCurrency: String!, $secondaryCurrency: String!) {
  kc_trade_avg_price_by_day(
    where: {primary_currency: {_eq: $primaryCurrency}, secondary_currency: {_eq: $secondaryCurrency}}
    order_by: {day: desc}
  ) {
    day
    price
    avg_price
  }
}
    `;
export type GetTradeAvgPriceByDayQueryResult = Apollo.QueryResult<GetTradeAvgPriceByDayQuery, GetTradeAvgPriceByDayQueryVariables>;
export const GetUserDeviceByUidDocument = gql`
    query getUserDeviceByUID($userDeviceUID: uuid!) {
  kc_user_device_by_pk(uid: $userDeviceUID) {
    uid
    name
  }
}
    `;
export type GetUserDeviceByUidQueryResult = Apollo.QueryResult<GetUserDeviceByUidQuery, GetUserDeviceByUidQueryVariables>;
export const UpdateUserDeviceDocument = gql`
    mutation updateUserDevice($userDeviceUID: uuid!, $name: String) {
  update_kc_user_device_by_pk(
    pk_columns: {uid: $userDeviceUID}
    _set: {name: $name}
  ) {
    uid
    name
  }
}
    `;
export type UpdateUserDeviceMutationFn = Apollo.MutationFunction<UpdateUserDeviceMutation, UpdateUserDeviceMutationVariables>;
export type UpdateUserDeviceMutationResult = Apollo.MutationResult<UpdateUserDeviceMutation>;
export type UpdateUserDeviceMutationOptions = Apollo.BaseMutationOptions<UpdateUserDeviceMutation, UpdateUserDeviceMutationVariables>;
export const GetUserDeviceListDocument = gql`
    query getUserDeviceList {
  kc_user_device(order_by: {accessed_at: desc}) {
    uid
    name
    created_at
    accessed_at
  }
}
    `;
export type GetUserDeviceListQueryResult = Apollo.QueryResult<GetUserDeviceListQuery, GetUserDeviceListQueryVariables>;
export const DeleteUserDeviceDocument = gql`
    mutation deleteUserDevice($userDeviceUID: uuid!) {
  delete_kc_user_device_by_pk(uid: $userDeviceUID) {
    uid
  }
}
    `;
export type DeleteUserDeviceMutationFn = Apollo.MutationFunction<DeleteUserDeviceMutation, DeleteUserDeviceMutationVariables>;
export type DeleteUserDeviceMutationResult = Apollo.MutationResult<DeleteUserDeviceMutation>;
export type DeleteUserDeviceMutationOptions = Apollo.BaseMutationOptions<DeleteUserDeviceMutation, DeleteUserDeviceMutationVariables>;
export const GetUserDeviceListByUidDocument = gql`
    query getUserDeviceListByUID {
  kc_user_device(order_by: {accessed_at: desc}) {
    uid
  }
}
    `;
export type GetUserDeviceListByUidQueryResult = Apollo.QueryResult<GetUserDeviceListByUidQuery, GetUserDeviceListByUidQueryVariables>;
export const GetExchangeKeysFormCreateDocument = gql`
    query getExchangeKeysFormCreate {
  kc_exchange {
    uid
    id
    name
  }
}
    `;
export type GetExchangeKeysFormCreateQueryResult = Apollo.QueryResult<GetExchangeKeysFormCreateQuery, GetExchangeKeysFormCreateQueryVariables>;
export const CreateUserExchangeKeysDocument = gql`
    mutation createUserExchangeKeys($description: String!, $exchangeUID: uuid!, $keys: jsonb!) {
  create_user_exchange_keys(
    description: $description
    exchange_uid: $exchangeUID
    keys: $keys
  ) {
    user_exchange_keys {
      uid
      description
      exchange {
        uid
      }
      invalidated_at
      dca_orders_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export type CreateUserExchangeKeysMutationFn = Apollo.MutationFunction<CreateUserExchangeKeysMutation, CreateUserExchangeKeysMutationVariables>;
export type CreateUserExchangeKeysMutationResult = Apollo.MutationResult<CreateUserExchangeKeysMutation>;
export type CreateUserExchangeKeysMutationOptions = Apollo.BaseMutationOptions<CreateUserExchangeKeysMutation, CreateUserExchangeKeysMutationVariables>;
export const GetUserExchangeKeysFormEditDocument = gql`
    query getUserExchangeKeysFormEdit($userExchangeKeysUID: uuid!) {
  kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
    uid
    description
    exchange {
      uid
      id
      name
    }
  }
}
    `;
export type GetUserExchangeKeysFormEditQueryResult = Apollo.QueryResult<GetUserExchangeKeysFormEditQuery, GetUserExchangeKeysFormEditQueryVariables>;
export const UpdateUserExchangeKeysDocument = gql`
    mutation updateUserExchangeKeys($userExchangeKeysUID: uuid!, $description: String, $keys: jsonb) {
  update_user_exchange_keys(
    user_exchange_keys_uid: $userExchangeKeysUID
    description: $description
    keys: $keys
  ) {
    user_exchange_keys {
      uid
      description
      exchange {
        uid
      }
      invalidated_at
      dca_orders_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export type UpdateUserExchangeKeysMutationFn = Apollo.MutationFunction<UpdateUserExchangeKeysMutation, UpdateUserExchangeKeysMutationVariables>;
export type UpdateUserExchangeKeysMutationResult = Apollo.MutationResult<UpdateUserExchangeKeysMutation>;
export type UpdateUserExchangeKeysMutationOptions = Apollo.BaseMutationOptions<UpdateUserExchangeKeysMutation, UpdateUserExchangeKeysMutationVariables>;
export const GetUserExchangeKeysListDocument = gql`
    query getUserExchangeKeysList {
  kc_user_exchange_keys {
    uid
    description
    updated_at
    exchange {
      uid
      name
    }
    dca_orders_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export type GetUserExchangeKeysListQueryResult = Apollo.QueryResult<GetUserExchangeKeysListQuery, GetUserExchangeKeysListQueryVariables>;
export const DeleteUserExchangeKeysDocument = gql`
    mutation deleteUserExchangeKeys($userExchangeKeysUID: uuid!) {
  delete_kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
    uid
  }
}
    `;
export type DeleteUserExchangeKeysMutationFn = Apollo.MutationFunction<DeleteUserExchangeKeysMutation, DeleteUserExchangeKeysMutationVariables>;
export type DeleteUserExchangeKeysMutationResult = Apollo.MutationResult<DeleteUserExchangeKeysMutation>;
export type DeleteUserExchangeKeysMutationOptions = Apollo.BaseMutationOptions<DeleteUserExchangeKeysMutation, DeleteUserExchangeKeysMutationVariables>;
export const GetUserExchangeKeysListByUidDocument = gql`
    query getUserExchangeKeysListByUID {
  kc_user_exchange_keys {
    uid
  }
}
    `;
export type GetUserExchangeKeysListByUidQueryResult = Apollo.QueryResult<GetUserExchangeKeysListByUidQuery, GetUserExchangeKeysListByUidQueryVariables>;
export const GetUserExchangeKeysModalDeleteDocument = gql`
    query getUserExchangeKeysModalDelete($userExchangeKeysUID: uuid!) {
  kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
    uid
    description
  }
}
    `;
export type GetUserExchangeKeysModalDeleteQueryResult = Apollo.QueryResult<GetUserExchangeKeysModalDeleteQuery, GetUserExchangeKeysModalDeleteQueryVariables>;
export const CreateAuthTokenHookDocument = gql`
    mutation createAuthTokenHook($email: String!, $password: String!, $deviceID: String!, $deviceName: String!, $deviceTrusted: Boolean!) {
  create_auth_token(
    email: $email
    password: $password
    device_id: $deviceID
    device_name: $deviceName
    device_trusted: $deviceTrusted
  ) {
    user_uid
    auth_token
    expires_at
  }
}
    `;
export type CreateAuthTokenHookMutationFn = Apollo.MutationFunction<CreateAuthTokenHookMutation, CreateAuthTokenHookMutationVariables>;
export type CreateAuthTokenHookMutationResult = Apollo.MutationResult<CreateAuthTokenHookMutation>;
export type CreateAuthTokenHookMutationOptions = Apollo.BaseMutationOptions<CreateAuthTokenHookMutation, CreateAuthTokenHookMutationVariables>;
export const ValidateUserExchangeKeysLiveDocument = gql`
    mutation validateUserExchangeKeysLive($exchangeUID: uuid!, $keys: jsonb!) {
  validate_user_exchange_keys_live(exchange_uid: $exchangeUID, keys: $keys) {
    is_valid
    validation_message
  }
}
    `;
export type ValidateUserExchangeKeysLiveMutationFn = Apollo.MutationFunction<ValidateUserExchangeKeysLiveMutation, ValidateUserExchangeKeysLiveMutationVariables>;
export type ValidateUserExchangeKeysLiveMutationResult = Apollo.MutationResult<ValidateUserExchangeKeysLiveMutation>;
export type ValidateUserExchangeKeysLiveMutationOptions = Apollo.BaseMutationOptions<ValidateUserExchangeKeysLiveMutation, ValidateUserExchangeKeysLiveMutationVariables>;
export const ValidateUserExchangeKeysDocument = gql`
    mutation validateUserExchangeKeys($userExchangeKeysUID: uuid!) {
  validate_user_exchange_keys(user_exchange_keys_uid: $userExchangeKeysUID) {
    is_valid
    validation_message
  }
}
    `;
export type ValidateUserExchangeKeysMutationFn = Apollo.MutationFunction<ValidateUserExchangeKeysMutation, ValidateUserExchangeKeysMutationVariables>;
export type ValidateUserExchangeKeysMutationResult = Apollo.MutationResult<ValidateUserExchangeKeysMutation>;
export type ValidateUserExchangeKeysMutationOptions = Apollo.BaseMutationOptions<ValidateUserExchangeKeysMutation, ValidateUserExchangeKeysMutationVariables>;