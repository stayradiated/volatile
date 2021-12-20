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
  smallint: number;
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

export type QueryUserEmailOutput = {
  __typename?: 'QueryUserEmailOutput';
  email: Scalars['String'];
  user_uid: Scalars['uuid'];
};

export type RefreshAuthTokenOutput = {
  __typename?: 'RefreshAuthTokenOutput';
  auth_token: Scalars['String'];
  expires_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
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
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys;
  user_exchange_keys_uid: Scalars['uuid'];
  validation_message?: Maybe<Scalars['String']>;
};

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput';
  email: Scalars['String'];
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

/** aggregated selection of "kc.currency" */
export type Kc_Currency_Aggregate = {
  __typename?: 'kc_currency_aggregate';
  aggregate?: Maybe<Kc_Currency_Aggregate_Fields>;
  nodes: Array<Kc_Currency>;
};

/** aggregate fields of "kc.currency" */
export type Kc_Currency_Aggregate_Fields = {
  __typename?: 'kc_currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_Currency_Max_Fields>;
  min?: Maybe<Kc_Currency_Min_Fields>;
};


/** aggregate fields of "kc.currency" */
export type Kc_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** unique or primary key constraints on table "kc.currency" */
export enum Kc_Currency_Constraint {
  /** unique or primary key constraint */
  AssetPkey = 'asset_pkey'
}

/** input type for inserting data into table "kc.currency" */
export type Kc_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Kc_Currency_Max_Fields = {
  __typename?: 'kc_currency_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Kc_Currency_Min_Fields = {
  __typename?: 'kc_currency_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "kc.currency" */
export type Kc_Currency_Mutation_Response = {
  __typename?: 'kc_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Currency>;
};

/** input type for inserting object relation for remote table "kc.currency" */
export type Kc_Currency_Obj_Rel_Insert_Input = {
  data: Kc_Currency_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Currency_On_Conflict>;
};

/** on conflict condition type for table "kc.currency" */
export type Kc_Currency_On_Conflict = {
  constraint: Kc_Currency_Constraint;
  update_columns?: Array<Kc_Currency_Update_Column>;
  where?: InputMaybe<Kc_Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.currency". */
export type Kc_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kc_currency */
export type Kc_Currency_Pk_Columns_Input = {
  symbol: Scalars['String'];
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

/** input type for updating data in table "kc.currency" */
export type Kc_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "kc.currency" */
export enum Kc_Currency_Update_Column {
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
  /** An aggregate relationship */
  market_prices_aggregate: Kc_Market_Price_Aggregate;
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


/** columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderMarket_Prices_AggregateArgs = {
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

/** input type for inserting array relation for remote table "kc.dca_order" */
export type Kc_Dca_Order_Arr_Rel_Insert_Input = {
  data: Array<Kc_Dca_Order_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>;
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

/** unique or primary key constraints on table "kc.dca_order" */
export enum Kc_Dca_Order_Constraint {
  /** unique or primary key constraint */
  DcaOrderPkey = 'dca_order_pkey'
}

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

/** input type for inserting array relation for remote table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Arr_Rel_Insert_Input = {
  data: Array<Kc_Dca_Order_History_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Dca_Order_History_On_Conflict>;
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

/** unique or primary key constraints on table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Constraint {
  /** unique or primary key constraint */
  DcaOrderHistoryPkey = 'dca_order_history_pkey',
  /** unique or primary key constraint */
  UniqueDcaOrder = 'unique_dca_order'
}

/** input type for incrementing numeric columns in table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Inc_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_price?: InputMaybe<Scalars['numeric']>;
  target_value?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Insert_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_order?: InputMaybe<Scalars['Boolean']>;
  dca_order?: InputMaybe<Kc_Dca_Order_Obj_Rel_Insert_Input>;
  dca_order_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_price?: InputMaybe<Scalars['numeric']>;
  order?: InputMaybe<Kc_Order_Obj_Rel_Insert_Input>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  target_value?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
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

/** response of any mutation on the table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Mutation_Response = {
  __typename?: 'kc_dca_order_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Dca_Order_History>;
};

/** on conflict condition type for table "kc.dca_order_history" */
export type Kc_Dca_Order_History_On_Conflict = {
  constraint: Kc_Dca_Order_History_Constraint;
  update_columns?: Array<Kc_Dca_Order_History_Update_Column>;
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
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

/** primary key columns input for table: kc_dca_order_history */
export type Kc_Dca_Order_History_Pk_Columns_Input = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Set_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_order?: InputMaybe<Scalars['Boolean']>;
  dca_order_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_price?: InputMaybe<Scalars['numeric']>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  target_value?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

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

/** update columns of table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Update_Column {
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

/** input type for inserting data into table "kc.dca_order" */
export type Kc_Dca_Order_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_average?: InputMaybe<Scalars['numeric']>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Arr_Rel_Insert_Input>;
  enabled_at?: InputMaybe<Scalars['timestamptz']>;
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  market?: InputMaybe<Kc_Market_Obj_Rel_Insert_Input>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_prices?: InputMaybe<Kc_Market_Price_Arr_Rel_Insert_Input>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['timestamptz']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Obj_Rel_Insert_Input>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
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

/** input type for inserting object relation for remote table "kc.dca_order" */
export type Kc_Dca_Order_Obj_Rel_Insert_Input = {
  data: Kc_Dca_Order_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>;
};

/** on conflict condition type for table "kc.dca_order" */
export type Kc_Dca_Order_On_Conflict = {
  constraint: Kc_Dca_Order_Constraint;
  update_columns?: Array<Kc_Dca_Order_Update_Column>;
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  daily_average?: InputMaybe<Scalars['numeric']>;
  enabled_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  market_offset?: InputMaybe<Scalars['numeric']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  max_price?: InputMaybe<Scalars['numeric']>;
  max_value?: InputMaybe<Scalars['numeric']>;
  min_price?: InputMaybe<Scalars['numeric']>;
  min_value?: InputMaybe<Scalars['numeric']>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['timestamptz']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
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

/** update columns of table "kc.dca_order" */
export enum Kc_Dca_Order_Update_Column {
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
  market_uid?: Maybe<Scalars['uuid']>;
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Kc_Order>;
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate;
  /** An array relationship */
  primary_currencies: Array<Kc_Exchange_Primary_Currency>;
  /** An aggregate relationship */
  primary_currencies_aggregate: Kc_Exchange_Primary_Currency_Aggregate;
  /** An array relationship */
  secondary_currencies: Array<Kc_Exchange_Secondary_Currency>;
  /** An aggregate relationship */
  secondary_currencies_aggregate: Kc_Exchange_Secondary_Currency_Aggregate;
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
export type Kc_ExchangePrimary_Currencies_AggregateArgs = {
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
export type Kc_ExchangeSecondary_Currencies_AggregateArgs = {
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

/** aggregated selection of "kc.exchange" */
export type Kc_Exchange_Aggregate = {
  __typename?: 'kc_exchange_aggregate';
  aggregate?: Maybe<Kc_Exchange_Aggregate_Fields>;
  nodes: Array<Kc_Exchange>;
};

/** aggregate fields of "kc.exchange" */
export type Kc_Exchange_Aggregate_Fields = {
  __typename?: 'kc_exchange_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_Exchange_Max_Fields>;
  min?: Maybe<Kc_Exchange_Min_Fields>;
};


/** aggregate fields of "kc.exchange" */
export type Kc_Exchange_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Exchange_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kc.exchange". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_Exchange_Bool_Exp>>;
  _not?: InputMaybe<Kc_Exchange_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_Exchange_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  market_uid?: InputMaybe<Uuid_Comparison_Exp>;
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

/** unique or primary key constraints on table "kc.exchange" */
export enum Kc_Exchange_Constraint {
  /** unique or primary key constraint */
  ExchangePkey = 'exchange_pkey',
  /** unique or primary key constraint */
  UniqueExchangeId = 'unique_exchange_id'
}

/** input type for inserting data into table "kc.exchange" */
export type Kc_Exchange_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Kc_Order_Arr_Rel_Insert_Input>;
  primary_currencies?: InputMaybe<Kc_Exchange_Primary_Currency_Arr_Rel_Insert_Input>;
  secondary_currencies?: InputMaybe<Kc_Exchange_Secondary_Currency_Arr_Rel_Insert_Input>;
  trades?: InputMaybe<Kc_Trade_Arr_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Kc_Exchange_Max_Fields = {
  __typename?: 'kc_exchange_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  market_uid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Kc_Exchange_Min_Fields = {
  __typename?: 'kc_exchange_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  market_uid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "kc.exchange" */
export type Kc_Exchange_Mutation_Response = {
  __typename?: 'kc_exchange_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Exchange>;
};

/** input type for inserting object relation for remote table "kc.exchange" */
export type Kc_Exchange_Obj_Rel_Insert_Input = {
  data: Kc_Exchange_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Exchange_On_Conflict>;
};

/** on conflict condition type for table "kc.exchange" */
export type Kc_Exchange_On_Conflict = {
  constraint: Kc_Exchange_Constraint;
  update_columns?: Array<Kc_Exchange_Update_Column>;
  where?: InputMaybe<Kc_Exchange_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.exchange". */
export type Kc_Exchange_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  market_uid?: InputMaybe<Order_By>;
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

/** primary key columns input for table: kc_exchange */
export type Kc_Exchange_Pk_Columns_Input = {
  uid: Scalars['uuid'];
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

/** aggregated selection of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate = {
  __typename?: 'kc_exchange_primary_currency_aggregate';
  aggregate?: Maybe<Kc_Exchange_Primary_Currency_Aggregate_Fields>;
  nodes: Array<Kc_Exchange_Primary_Currency>;
};

/** aggregate fields of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_Fields = {
  __typename?: 'kc_exchange_primary_currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_Exchange_Primary_Currency_Max_Fields>;
  min?: Maybe<Kc_Exchange_Primary_Currency_Min_Fields>;
};


/** aggregate fields of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Exchange_Primary_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Exchange_Primary_Currency_Max_Order_By>;
  min?: InputMaybe<Kc_Exchange_Primary_Currency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Arr_Rel_Insert_Input = {
  data: Array<Kc_Exchange_Primary_Currency_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Exchange_Primary_Currency_On_Conflict>;
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

/** unique or primary key constraints on table "kc.exchange_primary_currency" */
export enum Kc_Exchange_Primary_Currency_Constraint {
  /** unique or primary key constraint */
  ExchangeAssetPkey = 'exchange_asset_pkey'
}

/** input type for inserting data into table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>;
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Kc_Exchange_Primary_Currency_Max_Fields = {
  __typename?: 'kc_exchange_primary_currency_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Exchange_Primary_Currency_Min_Fields = {
  __typename?: 'kc_exchange_primary_currency_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Mutation_Response = {
  __typename?: 'kc_exchange_primary_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Exchange_Primary_Currency>;
};

/** on conflict condition type for table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_On_Conflict = {
  constraint: Kc_Exchange_Primary_Currency_Constraint;
  update_columns?: Array<Kc_Exchange_Primary_Currency_Update_Column>;
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>;
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

/** primary key columns input for table: kc_exchange_primary_currency */
export type Kc_Exchange_Primary_Currency_Pk_Columns_Input = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
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

/** input type for updating data in table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "kc.exchange_primary_currency" */
export enum Kc_Exchange_Primary_Currency_Update_Column {
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

/** aggregated selection of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate = {
  __typename?: 'kc_exchange_secondary_currency_aggregate';
  aggregate?: Maybe<Kc_Exchange_Secondary_Currency_Aggregate_Fields>;
  nodes: Array<Kc_Exchange_Secondary_Currency>;
};

/** aggregate fields of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_Fields = {
  __typename?: 'kc_exchange_secondary_currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_Exchange_Secondary_Currency_Max_Fields>;
  min?: Maybe<Kc_Exchange_Secondary_Currency_Min_Fields>;
};


/** aggregate fields of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Exchange_Secondary_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_Exchange_Secondary_Currency_Max_Order_By>;
  min?: InputMaybe<Kc_Exchange_Secondary_Currency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Arr_Rel_Insert_Input = {
  data: Array<Kc_Exchange_Secondary_Currency_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Exchange_Secondary_Currency_On_Conflict>;
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

/** unique or primary key constraints on table "kc.exchange_secondary_currency" */
export enum Kc_Exchange_Secondary_Currency_Constraint {
  /** unique or primary key constraint */
  ExchangeSecondaryCurrencyPkey = 'exchange_secondary_currency_pkey'
}

/** input type for inserting data into table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>;
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Kc_Exchange_Secondary_Currency_Max_Fields = {
  __typename?: 'kc_exchange_secondary_currency_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Exchange_Secondary_Currency_Min_Fields = {
  __typename?: 'kc_exchange_secondary_currency_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Mutation_Response = {
  __typename?: 'kc_exchange_secondary_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Exchange_Secondary_Currency>;
};

/** on conflict condition type for table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_On_Conflict = {
  constraint: Kc_Exchange_Secondary_Currency_Constraint;
  update_columns?: Array<Kc_Exchange_Secondary_Currency_Update_Column>;
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>;
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

/** primary key columns input for table: kc_exchange_secondary_currency */
export type Kc_Exchange_Secondary_Currency_Pk_Columns_Input = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
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

/** input type for updating data in table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "kc.exchange_secondary_currency" */
export enum Kc_Exchange_Secondary_Currency_Update_Column {
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
  MarketUid = 'market_uid',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "kc.exchange" */
export type Kc_Exchange_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "kc.exchange" */
export enum Kc_Exchange_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MarketUid = 'market_uid',
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
  /** An aggregate relationship */
  market_prices_aggregate: Kc_Market_Price_Aggregate;
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


/** columns and relationships of "kc.market" */
export type Kc_MarketMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};

/** aggregated selection of "kc.market" */
export type Kc_Market_Aggregate = {
  __typename?: 'kc_market_aggregate';
  aggregate?: Maybe<Kc_Market_Aggregate_Fields>;
  nodes: Array<Kc_Market>;
};

/** aggregate fields of "kc.market" */
export type Kc_Market_Aggregate_Fields = {
  __typename?: 'kc_market_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_Market_Max_Fields>;
  min?: Maybe<Kc_Market_Min_Fields>;
};


/** aggregate fields of "kc.market" */
export type Kc_Market_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Market_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** unique or primary key constraints on table "kc.market" */
export enum Kc_Market_Constraint {
  /** unique or primary key constraint */
  MarketPkey = 'market_pkey',
  /** unique or primary key constraint */
  UniqueMarketId = 'unique_market_id'
}

/** input type for inserting data into table "kc.market" */
export type Kc_Market_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  market_prices?: InputMaybe<Kc_Market_Price_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Kc_Market_Max_Fields = {
  __typename?: 'kc_market_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Kc_Market_Min_Fields = {
  __typename?: 'kc_market_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "kc.market" */
export type Kc_Market_Mutation_Response = {
  __typename?: 'kc_market_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Market>;
};

/** input type for inserting object relation for remote table "kc.market" */
export type Kc_Market_Obj_Rel_Insert_Input = {
  data: Kc_Market_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Market_On_Conflict>;
};

/** on conflict condition type for table "kc.market" */
export type Kc_Market_On_Conflict = {
  constraint: Kc_Market_Constraint;
  update_columns?: Array<Kc_Market_Update_Column>;
  where?: InputMaybe<Kc_Market_Bool_Exp>;
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

/** primary key columns input for table: kc_market */
export type Kc_Market_Pk_Columns_Input = {
  uid: Scalars['uuid'];
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

/** aggregated selection of "kc.market_price" */
export type Kc_Market_Price_Aggregate = {
  __typename?: 'kc_market_price_aggregate';
  aggregate?: Maybe<Kc_Market_Price_Aggregate_Fields>;
  nodes: Array<Kc_Market_Price>;
};

/** aggregate fields of "kc.market_price" */
export type Kc_Market_Price_Aggregate_Fields = {
  __typename?: 'kc_market_price_aggregate_fields';
  avg?: Maybe<Kc_Market_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Market_Price_Max_Fields>;
  min?: Maybe<Kc_Market_Price_Min_Fields>;
  stddev?: Maybe<Kc_Market_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Market_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Market_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Market_Price_Sum_Fields>;
  var_pop?: Maybe<Kc_Market_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Market_Price_Var_Samp_Fields>;
  variance?: Maybe<Kc_Market_Price_Variance_Fields>;
};


/** aggregate fields of "kc.market_price" */
export type Kc_Market_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting array relation for remote table "kc.market_price" */
export type Kc_Market_Price_Arr_Rel_Insert_Input = {
  data: Array<Kc_Market_Price_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Market_Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Kc_Market_Price_Avg_Fields = {
  __typename?: 'kc_market_price_avg_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
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

/** unique or primary key constraints on table "kc.market_price" */
export enum Kc_Market_Price_Constraint {
  /** unique or primary key constraint */
  MarketPricePkey = 'market_price_pkey'
}

/** input type for incrementing numeric columns in table "kc.market_price" */
export type Kc_Market_Price_Inc_Input = {
  fx_rate?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  source_price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "kc.market_price" */
export type Kc_Market_Price_Insert_Input = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fx_rate?: InputMaybe<Scalars['numeric']>;
  market?: InputMaybe<Kc_Market_Obj_Rel_Insert_Input>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  source_currency?: InputMaybe<Scalars['bpchar']>;
  source_price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

export type Kc_Market_Price_Latest_Args = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kc_Market_Price_Max_Fields = {
  __typename?: 'kc_market_price_max_fields';
  asset_symbol?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fx_rate?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  source_currency?: Maybe<Scalars['bpchar']>;
  source_price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
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

/** aggregate min on columns */
export type Kc_Market_Price_Min_Fields = {
  __typename?: 'kc_market_price_min_fields';
  asset_symbol?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fx_rate?: Maybe<Scalars['numeric']>;
  market_uid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  source_currency?: Maybe<Scalars['bpchar']>;
  source_price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
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

/** response of any mutation on the table "kc.market_price" */
export type Kc_Market_Price_Mutation_Response = {
  __typename?: 'kc_market_price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Market_Price>;
};

/** on conflict condition type for table "kc.market_price" */
export type Kc_Market_Price_On_Conflict = {
  constraint: Kc_Market_Price_Constraint;
  update_columns?: Array<Kc_Market_Price_Update_Column>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
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

/** primary key columns input for table: kc_market_price */
export type Kc_Market_Price_Pk_Columns_Input = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
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

/** input type for updating data in table "kc.market_price" */
export type Kc_Market_Price_Set_Input = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fx_rate?: InputMaybe<Scalars['numeric']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  source_currency?: InputMaybe<Scalars['bpchar']>;
  source_price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Kc_Market_Price_Stddev_Fields = {
  __typename?: 'kc_market_price_stddev_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_Market_Price_Stddev_Pop_Fields = {
  __typename?: 'kc_market_price_stddev_pop_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_Market_Price_Stddev_Samp_Fields = {
  __typename?: 'kc_market_price_stddev_samp_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_Market_Price_Sum_Fields = {
  __typename?: 'kc_market_price_sum_fields';
  fx_rate?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  source_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "kc.market_price" */
export type Kc_Market_Price_Sum_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** update columns of table "kc.market_price" */
export enum Kc_Market_Price_Update_Column {
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

/** aggregate var_pop on columns */
export type Kc_Market_Price_Var_Pop_Fields = {
  __typename?: 'kc_market_price_var_pop_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_Market_Price_Var_Samp_Fields = {
  __typename?: 'kc_market_price_var_samp_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  source_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_Market_Price_Variance_Fields = {
  __typename?: 'kc_market_price_variance_fields';
  fx_rate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  source_price?: Maybe<Scalars['Float']>;
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

/** input type for updating data in table "kc.market" */
export type Kc_Market_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

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
  /** An aggregate relationship */
  market_prices_aggregate: Kc_Market_Price_Aggregate;
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


/** columns and relationships of "kc.market_trading_pair" */
export type Kc_Market_Trading_PairMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_Market_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Market_Price_Order_By>>;
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>;
};

/** aggregated selection of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate = {
  __typename?: 'kc_market_trading_pair_aggregate';
  aggregate?: Maybe<Kc_Market_Trading_Pair_Aggregate_Fields>;
  nodes: Array<Kc_Market_Trading_Pair>;
};

/** aggregate fields of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate_Fields = {
  __typename?: 'kc_market_trading_pair_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_Market_Trading_Pair_Max_Fields>;
  min?: Maybe<Kc_Market_Trading_Pair_Min_Fields>;
};


/** aggregate fields of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Market_Trading_Pair_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting data into table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Insert_Input = {
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>;
  market?: InputMaybe<Kc_Market_Obj_Rel_Insert_Input>;
  market_prices?: InputMaybe<Kc_Market_Price_Arr_Rel_Insert_Input>;
  market_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Kc_Market_Trading_Pair_Max_Fields = {
  __typename?: 'kc_market_trading_pair_max_fields';
  market_uid?: Maybe<Scalars['uuid']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Max_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kc_Market_Trading_Pair_Min_Fields = {
  __typename?: 'kc_market_trading_pair_min_fields';
  market_uid?: Maybe<Scalars['uuid']>;
  primary_currency_symbol?: Maybe<Scalars['String']>;
  secondary_currency_symbol?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Min_Order_By = {
  market_uid?: InputMaybe<Order_By>;
  primary_currency_symbol?: InputMaybe<Order_By>;
  secondary_currency_symbol?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Mutation_Response = {
  __typename?: 'kc_market_trading_pair_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Market_Trading_Pair>;
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

/** input type for updating data in table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Set_Input = {
  market_uid?: InputMaybe<Scalars['uuid']>;
  primary_currency_symbol?: InputMaybe<Scalars['String']>;
  secondary_currency_symbol?: InputMaybe<Scalars['String']>;
};

/** update columns of table "kc.market" */
export enum Kc_Market_Update_Column {
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

/** input type for inserting array relation for remote table "kc.order" */
export type Kc_Order_Arr_Rel_Insert_Input = {
  data: Array<Kc_Order_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>;
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

/** unique or primary key constraints on table "kc.order" */
export enum Kc_Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey',
  /** unique or primary key constraint */
  UniqueExchangeOrderId = 'unique_exchange_order_id'
}

/** input type for incrementing numeric columns in table "kc.order" */
export type Kc_Order_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "kc.order" */
export type Kc_Order_Insert_Input = {
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Arr_Rel_Insert_Input>;
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  opened_at?: InputMaybe<Scalars['timestamptz']>;
  order_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
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

/** response of any mutation on the table "kc.order" */
export type Kc_Order_Mutation_Response = {
  __typename?: 'kc_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Order>;
};

/** input type for inserting object relation for remote table "kc.order" */
export type Kc_Order_Obj_Rel_Insert_Input = {
  data: Kc_Order_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>;
};

/** on conflict condition type for table "kc.order" */
export type Kc_Order_On_Conflict = {
  constraint: Kc_Order_Constraint;
  update_columns?: Array<Kc_Order_Update_Column>;
  where?: InputMaybe<Kc_Order_Bool_Exp>;
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

/** primary key columns input for table: kc_order */
export type Kc_Order_Pk_Columns_Input = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "kc.order" */
export type Kc_Order_Set_Input = {
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  opened_at?: InputMaybe<Scalars['timestamptz']>;
  order_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

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

/** update columns of table "kc.order" */
export enum Kc_Order_Update_Column {
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

/** input type for inserting array relation for remote table "kc.trade" */
export type Kc_Trade_Arr_Rel_Insert_Input = {
  data: Array<Kc_Trade_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_Trade_On_Conflict>;
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

/** aggregated selection of "kc.trade_avg_price_by_day" */
export type Kc_Trade_Avg_Price_By_Day_Aggregate = {
  __typename?: 'kc_trade_avg_price_by_day_aggregate';
  aggregate?: Maybe<Kc_Trade_Avg_Price_By_Day_Aggregate_Fields>;
  nodes: Array<Kc_Trade_Avg_Price_By_Day>;
};

/** aggregate fields of "kc.trade_avg_price_by_day" */
export type Kc_Trade_Avg_Price_By_Day_Aggregate_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_aggregate_fields';
  avg?: Maybe<Kc_Trade_Avg_Price_By_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Trade_Avg_Price_By_Day_Max_Fields>;
  min?: Maybe<Kc_Trade_Avg_Price_By_Day_Min_Fields>;
  stddev?: Maybe<Kc_Trade_Avg_Price_By_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Trade_Avg_Price_By_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Trade_Avg_Price_By_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Trade_Avg_Price_By_Day_Sum_Fields>;
  var_pop?: Maybe<Kc_Trade_Avg_Price_By_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Trade_Avg_Price_By_Day_Var_Samp_Fields>;
  variance?: Maybe<Kc_Trade_Avg_Price_By_Day_Variance_Fields>;
};


/** aggregate fields of "kc.trade_avg_price_by_day" */
export type Kc_Trade_Avg_Price_By_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Trade_Avg_Price_By_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_Trade_Avg_Price_By_Day_Avg_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_avg_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
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

/** aggregate max on columns */
export type Kc_Trade_Avg_Price_By_Day_Max_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_max_fields';
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

/** aggregate min on columns */
export type Kc_Trade_Avg_Price_By_Day_Min_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_min_fields';
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

/** aggregate stddev on columns */
export type Kc_Trade_Avg_Price_By_Day_Stddev_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_stddev_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Avg_Price_By_Day_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_stddev_pop_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Avg_Price_By_Day_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_stddev_samp_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_Trade_Avg_Price_By_Day_Sum_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_sum_fields';
  avg_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  sum_total_value?: Maybe<Scalars['numeric']>;
  sum_volume?: Maybe<Scalars['numeric']>;
  total_value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Kc_Trade_Avg_Price_By_Day_Var_Pop_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_var_pop_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Avg_Price_By_Day_Var_Samp_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_var_samp_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_Trade_Avg_Price_By_Day_Variance_Fields = {
  __typename?: 'kc_trade_avg_price_by_day_variance_fields';
  avg_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sum_total_value?: Maybe<Scalars['Float']>;
  sum_volume?: Maybe<Scalars['Float']>;
  total_value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

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

/** unique or primary key constraints on table "kc.trade" */
export enum Kc_Trade_Constraint {
  /** unique or primary key constraint */
  TradePkey = 'trade_pkey',
  /** unique or primary key constraint */
  UniqueTradeExchangeTradeId = 'unique_trade_exchange_trade_id'
}

/** input type for incrementing numeric columns in table "kc.trade" */
export type Kc_Trade_Inc_Input = {
  fee?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "kc.trade" */
export type Kc_Trade_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  fee?: InputMaybe<Scalars['numeric']>;
  order?: InputMaybe<Kc_Order_Obj_Rel_Insert_Input>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  trade_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
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

/** response of any mutation on the table "kc.trade" */
export type Kc_Trade_Mutation_Response = {
  __typename?: 'kc_trade_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_Trade>;
};

/** on conflict condition type for table "kc.trade" */
export type Kc_Trade_On_Conflict = {
  constraint: Kc_Trade_Constraint;
  update_columns?: Array<Kc_Trade_Update_Column>;
  where?: InputMaybe<Kc_Trade_Bool_Exp>;
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

/** primary key columns input for table: kc_trade */
export type Kc_Trade_Pk_Columns_Input = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "kc.trade" */
export type Kc_Trade_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  fee?: InputMaybe<Scalars['numeric']>;
  order_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  primary_currency?: InputMaybe<Scalars['String']>;
  secondary_currency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  total_value?: InputMaybe<Scalars['numeric']>;
  trade_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

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

/** aggregated selection of "kc.trade_sum_total_value_by_month" */
export type Kc_Trade_Sum_Total_Value_By_Month_Aggregate = {
  __typename?: 'kc_trade_sum_total_value_by_month_aggregate';
  aggregate?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Aggregate_Fields>;
  nodes: Array<Kc_Trade_Sum_Total_Value_By_Month>;
};

/** aggregate fields of "kc.trade_sum_total_value_by_month" */
export type Kc_Trade_Sum_Total_Value_By_Month_Aggregate_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_aggregate_fields';
  avg?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Max_Fields>;
  min?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Min_Fields>;
  stddev?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Sum_Fields>;
  var_pop?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Var_Samp_Fields>;
  variance?: Maybe<Kc_Trade_Sum_Total_Value_By_Month_Variance_Fields>;
};


/** aggregate fields of "kc.trade_sum_total_value_by_month" */
export type Kc_Trade_Sum_Total_Value_By_Month_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Month_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Avg_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_avg_fields';
  sum?: Maybe<Scalars['Float']>;
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

/** aggregate max on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Max_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_max_fields';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Min_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_min_fields';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
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

/** aggregate stddev on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Stddev_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Sum_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Var_Pop_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Var_Samp_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_Trade_Sum_Total_Value_By_Month_Variance_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_month_variance_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "kc.trade_sum_total_value_by_week" */
export type Kc_Trade_Sum_Total_Value_By_Week = {
  __typename?: 'kc_trade_sum_total_value_by_week';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "kc.trade_sum_total_value_by_week" */
export type Kc_Trade_Sum_Total_Value_By_Week_Aggregate = {
  __typename?: 'kc_trade_sum_total_value_by_week_aggregate';
  aggregate?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Aggregate_Fields>;
  nodes: Array<Kc_Trade_Sum_Total_Value_By_Week>;
};

/** aggregate fields of "kc.trade_sum_total_value_by_week" */
export type Kc_Trade_Sum_Total_Value_By_Week_Aggregate_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_aggregate_fields';
  avg?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Max_Fields>;
  min?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Min_Fields>;
  stddev?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Sum_Fields>;
  var_pop?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Var_Samp_Fields>;
  variance?: Maybe<Kc_Trade_Sum_Total_Value_By_Week_Variance_Fields>;
};


/** aggregate fields of "kc.trade_sum_total_value_by_week" */
export type Kc_Trade_Sum_Total_Value_By_Week_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Trade_Sum_Total_Value_By_Week_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Avg_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_avg_fields';
  sum?: Maybe<Scalars['Float']>;
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

/** aggregate max on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Max_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_max_fields';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Min_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_min_fields';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
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

/** aggregate stddev on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Stddev_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Sum_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Var_Pop_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Var_Samp_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_Trade_Sum_Total_Value_By_Week_Variance_Fields = {
  __typename?: 'kc_trade_sum_total_value_by_week_variance_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "kc.trade_sum_volume_by_month" */
export type Kc_Trade_Sum_Volume_By_Month = {
  __typename?: 'kc_trade_sum_volume_by_month';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "kc.trade_sum_volume_by_month" */
export type Kc_Trade_Sum_Volume_By_Month_Aggregate = {
  __typename?: 'kc_trade_sum_volume_by_month_aggregate';
  aggregate?: Maybe<Kc_Trade_Sum_Volume_By_Month_Aggregate_Fields>;
  nodes: Array<Kc_Trade_Sum_Volume_By_Month>;
};

/** aggregate fields of "kc.trade_sum_volume_by_month" */
export type Kc_Trade_Sum_Volume_By_Month_Aggregate_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_aggregate_fields';
  avg?: Maybe<Kc_Trade_Sum_Volume_By_Month_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Trade_Sum_Volume_By_Month_Max_Fields>;
  min?: Maybe<Kc_Trade_Sum_Volume_By_Month_Min_Fields>;
  stddev?: Maybe<Kc_Trade_Sum_Volume_By_Month_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Trade_Sum_Volume_By_Month_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Trade_Sum_Volume_By_Month_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Trade_Sum_Volume_By_Month_Sum_Fields>;
  var_pop?: Maybe<Kc_Trade_Sum_Volume_By_Month_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Trade_Sum_Volume_By_Month_Var_Samp_Fields>;
  variance?: Maybe<Kc_Trade_Sum_Volume_By_Month_Variance_Fields>;
};


/** aggregate fields of "kc.trade_sum_volume_by_month" */
export type Kc_Trade_Sum_Volume_By_Month_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Month_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_Trade_Sum_Volume_By_Month_Avg_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_avg_fields';
  sum?: Maybe<Scalars['Float']>;
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

/** aggregate max on columns */
export type Kc_Trade_Sum_Volume_By_Month_Max_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_max_fields';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Kc_Trade_Sum_Volume_By_Month_Min_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_min_fields';
  month?: Maybe<Scalars['timestamptz']>;
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
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

/** aggregate stddev on columns */
export type Kc_Trade_Sum_Volume_By_Month_Stddev_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Sum_Volume_By_Month_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Sum_Volume_By_Month_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_Trade_Sum_Volume_By_Month_Sum_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Kc_Trade_Sum_Volume_By_Month_Var_Pop_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Sum_Volume_By_Month_Var_Samp_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_Trade_Sum_Volume_By_Month_Variance_Fields = {
  __typename?: 'kc_trade_sum_volume_by_month_variance_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "kc.trade_sum_volume_by_week" */
export type Kc_Trade_Sum_Volume_By_Week = {
  __typename?: 'kc_trade_sum_volume_by_week';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "kc.trade_sum_volume_by_week" */
export type Kc_Trade_Sum_Volume_By_Week_Aggregate = {
  __typename?: 'kc_trade_sum_volume_by_week_aggregate';
  aggregate?: Maybe<Kc_Trade_Sum_Volume_By_Week_Aggregate_Fields>;
  nodes: Array<Kc_Trade_Sum_Volume_By_Week>;
};

/** aggregate fields of "kc.trade_sum_volume_by_week" */
export type Kc_Trade_Sum_Volume_By_Week_Aggregate_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_aggregate_fields';
  avg?: Maybe<Kc_Trade_Sum_Volume_By_Week_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_Trade_Sum_Volume_By_Week_Max_Fields>;
  min?: Maybe<Kc_Trade_Sum_Volume_By_Week_Min_Fields>;
  stddev?: Maybe<Kc_Trade_Sum_Volume_By_Week_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_Trade_Sum_Volume_By_Week_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_Trade_Sum_Volume_By_Week_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_Trade_Sum_Volume_By_Week_Sum_Fields>;
  var_pop?: Maybe<Kc_Trade_Sum_Volume_By_Week_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_Trade_Sum_Volume_By_Week_Var_Samp_Fields>;
  variance?: Maybe<Kc_Trade_Sum_Volume_By_Week_Variance_Fields>;
};


/** aggregate fields of "kc.trade_sum_volume_by_week" */
export type Kc_Trade_Sum_Volume_By_Week_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_Trade_Sum_Volume_By_Week_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_Trade_Sum_Volume_By_Week_Avg_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_avg_fields';
  sum?: Maybe<Scalars['Float']>;
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

/** aggregate max on columns */
export type Kc_Trade_Sum_Volume_By_Week_Max_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_max_fields';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Kc_Trade_Sum_Volume_By_Week_Min_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_min_fields';
  primary_currency?: Maybe<Scalars['String']>;
  secondary_currency?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user_uid?: Maybe<Scalars['uuid']>;
  week?: Maybe<Scalars['timestamptz']>;
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

/** aggregate stddev on columns */
export type Kc_Trade_Sum_Volume_By_Week_Stddev_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_Trade_Sum_Volume_By_Week_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_Trade_Sum_Volume_By_Week_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_Trade_Sum_Volume_By_Week_Sum_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Kc_Trade_Sum_Volume_By_Week_Var_Pop_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_Trade_Sum_Volume_By_Week_Var_Samp_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_Trade_Sum_Volume_By_Week_Variance_Fields = {
  __typename?: 'kc_trade_sum_volume_by_week_variance_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** update columns of table "kc.trade" */
export enum Kc_Trade_Update_Column {
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
  email_encrypted: Scalars['String'];
  email_hash: Scalars['String'];
  email_keyring_id: Scalars['smallint'];
  email_verified: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Kc_Order>;
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate;
  password_hash: Scalars['String'];
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
  secret_encrypted: Scalars['String'];
  secret_keyring_id: Scalars['smallint'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Kc_User;
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "kc.user_2fa" */
export type Kc_User_2fa_Aggregate = {
  __typename?: 'kc_user_2fa_aggregate';
  aggregate?: Maybe<Kc_User_2fa_Aggregate_Fields>;
  nodes: Array<Kc_User_2fa>;
};

/** aggregate fields of "kc.user_2fa" */
export type Kc_User_2fa_Aggregate_Fields = {
  __typename?: 'kc_user_2fa_aggregate_fields';
  avg?: Maybe<Kc_User_2fa_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_User_2fa_Max_Fields>;
  min?: Maybe<Kc_User_2fa_Min_Fields>;
  stddev?: Maybe<Kc_User_2fa_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_User_2fa_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_User_2fa_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_User_2fa_Sum_Fields>;
  var_pop?: Maybe<Kc_User_2fa_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_User_2fa_Var_Samp_Fields>;
  variance?: Maybe<Kc_User_2fa_Variance_Fields>;
};


/** aggregate fields of "kc.user_2fa" */
export type Kc_User_2fa_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_User_2fa_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_User_2fa_Avg_Fields = {
  __typename?: 'kc_user_2fa_avg_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "kc.user_2fa". All fields are combined with a logical 'AND'. */
export type Kc_User_2fa_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_2fa_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_2fa_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_2fa_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  secret_encrypted?: InputMaybe<String_Comparison_Exp>;
  secret_keyring_id?: InputMaybe<Smallint_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kc.user_2fa" */
export enum Kc_User_2fa_Constraint {
  /** unique or primary key constraint */
  UniqueUser_2faUserUid = 'unique_user_2fa_user_uid',
  /** unique or primary key constraint */
  User_2faPkey = 'user_2fa_pkey'
}

/** input type for incrementing numeric columns in table "kc.user_2fa" */
export type Kc_User_2fa_Inc_Input = {
  secret_keyring_id?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "kc.user_2fa" */
export type Kc_User_2fa_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  secret_encrypted?: InputMaybe<Scalars['String']>;
  secret_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kc_User_2fa_Max_Fields = {
  __typename?: 'kc_user_2fa_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  secret_encrypted?: Maybe<Scalars['String']>;
  secret_keyring_id?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Kc_User_2fa_Min_Fields = {
  __typename?: 'kc_user_2fa_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  secret_encrypted?: Maybe<Scalars['String']>;
  secret_keyring_id?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "kc.user_2fa" */
export type Kc_User_2fa_Mutation_Response = {
  __typename?: 'kc_user_2fa_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User_2fa>;
};

/** input type for inserting object relation for remote table "kc.user_2fa" */
export type Kc_User_2fa_Obj_Rel_Insert_Input = {
  data: Kc_User_2fa_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_User_2fa_On_Conflict>;
};

/** on conflict condition type for table "kc.user_2fa" */
export type Kc_User_2fa_On_Conflict = {
  constraint: Kc_User_2fa_Constraint;
  update_columns?: Array<Kc_User_2fa_Update_Column>;
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.user_2fa". */
export type Kc_User_2fa_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  secret_encrypted?: InputMaybe<Order_By>;
  secret_keyring_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kc_user_2fa */
export type Kc_User_2fa_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "kc.user_2fa" */
export enum Kc_User_2fa_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  SecretEncrypted = 'secret_encrypted',
  /** column name */
  SecretKeyringId = 'secret_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "kc.user_2fa" */
export type Kc_User_2fa_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  secret_encrypted?: InputMaybe<Scalars['String']>;
  secret_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Kc_User_2fa_Stddev_Fields = {
  __typename?: 'kc_user_2fa_stddev_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_User_2fa_Stddev_Pop_Fields = {
  __typename?: 'kc_user_2fa_stddev_pop_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_User_2fa_Stddev_Samp_Fields = {
  __typename?: 'kc_user_2fa_stddev_samp_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_User_2fa_Sum_Fields = {
  __typename?: 'kc_user_2fa_sum_fields';
  secret_keyring_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "kc.user_2fa" */
export enum Kc_User_2fa_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  SecretEncrypted = 'secret_encrypted',
  /** column name */
  SecretKeyringId = 'secret_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** aggregate var_pop on columns */
export type Kc_User_2fa_Var_Pop_Fields = {
  __typename?: 'kc_user_2fa_var_pop_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_User_2fa_Var_Samp_Fields = {
  __typename?: 'kc_user_2fa_var_samp_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_User_2fa_Variance_Fields = {
  __typename?: 'kc_user_2fa_variance_fields';
  secret_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "kc.user" */
export type Kc_User_Aggregate = {
  __typename?: 'kc_user_aggregate';
  aggregate?: Maybe<Kc_User_Aggregate_Fields>;
  nodes: Array<Kc_User>;
};

/** aggregate fields of "kc.user" */
export type Kc_User_Aggregate_Fields = {
  __typename?: 'kc_user_aggregate_fields';
  avg?: Maybe<Kc_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_User_Max_Fields>;
  min?: Maybe<Kc_User_Min_Fields>;
  stddev?: Maybe<Kc_User_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_User_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_User_Sum_Fields>;
  var_pop?: Maybe<Kc_User_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_User_Var_Samp_Fields>;
  variance?: Maybe<Kc_User_Variance_Fields>;
};


/** aggregate fields of "kc.user" */
export type Kc_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kc_User_Avg_Fields = {
  __typename?: 'kc_user_avg_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "kc.user". All fields are combined with a logical 'AND'. */
export type Kc_User_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>;
  email_encrypted?: InputMaybe<String_Comparison_Exp>;
  email_hash?: InputMaybe<String_Comparison_Exp>;
  email_keyring_id?: InputMaybe<Smallint_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Kc_Order_Bool_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  trades?: InputMaybe<Kc_Trade_Bool_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user2FA?: InputMaybe<Kc_User_2fa_Bool_Exp>;
  user_devices?: InputMaybe<Kc_User_Device_Bool_Exp>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** unique or primary key constraints on table "kc.user" */
export enum Kc_User_Constraint {
  /** unique or primary key constraint */
  UniqueUserEmailHash = 'unique_user_email_hash',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** columns and relationships of "kc.user_device" */
export type Kc_User_Device = {
  __typename?: 'kc_user_device';
  accessed_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  device_id_hash: Scalars['String'];
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

/** input type for inserting array relation for remote table "kc.user_device" */
export type Kc_User_Device_Arr_Rel_Insert_Input = {
  data: Array<Kc_User_Device_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_User_Device_On_Conflict>;
};

/** Boolean expression to filter rows from the table "kc.user_device". All fields are combined with a logical 'AND'. */
export type Kc_User_Device_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_Device_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Device_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Device_Bool_Exp>>;
  accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device_id_hash?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  trusted?: InputMaybe<Boolean_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kc.user_device" */
export enum Kc_User_Device_Constraint {
  /** unique or primary key constraint */
  UniqueUserDeviceUserUidDeviceIdHash = 'unique_user_device_user_uid_device_id_hash',
  /** unique or primary key constraint */
  UserDevicePkey = 'user_device_pkey'
}

/** input type for inserting data into table "kc.user_device" */
export type Kc_User_Device_Insert_Input = {
  accessed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id_hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kc_User_Device_Max_Fields = {
  __typename?: 'kc_user_device_max_fields';
  accessed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id_hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kc.user_device" */
export type Kc_User_Device_Max_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
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
  device_id_hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kc.user_device" */
export type Kc_User_Device_Min_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
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

/** on conflict condition type for table "kc.user_device" */
export type Kc_User_Device_On_Conflict = {
  constraint: Kc_User_Device_Constraint;
  update_columns?: Array<Kc_User_Device_Update_Column>;
  where?: InputMaybe<Kc_User_Device_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.user_device". */
export type Kc_User_Device_Order_By = {
  accessed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
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
  DeviceIdHash = 'device_id_hash',
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
  accessed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id_hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "kc.user_device" */
export enum Kc_User_Device_Update_Column {
  /** column name */
  AccessedAt = 'accessed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceIdHash = 'device_id_hash',
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

/** columns and relationships of "kc.user_email_verify" */
export type Kc_User_Email_Verify = {
  __typename?: 'kc_user_email_verify';
  created_at: Scalars['timestamptz'];
  secret_hash: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "kc.user_email_verify" */
export type Kc_User_Email_Verify_Aggregate = {
  __typename?: 'kc_user_email_verify_aggregate';
  aggregate?: Maybe<Kc_User_Email_Verify_Aggregate_Fields>;
  nodes: Array<Kc_User_Email_Verify>;
};

/** aggregate fields of "kc.user_email_verify" */
export type Kc_User_Email_Verify_Aggregate_Fields = {
  __typename?: 'kc_user_email_verify_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_User_Email_Verify_Max_Fields>;
  min?: Maybe<Kc_User_Email_Verify_Min_Fields>;
};


/** aggregate fields of "kc.user_email_verify" */
export type Kc_User_Email_Verify_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_User_Email_Verify_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kc.user_email_verify". All fields are combined with a logical 'AND'. */
export type Kc_User_Email_Verify_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_Email_Verify_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Email_Verify_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  secret_hash?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kc.user_email_verify" */
export enum Kc_User_Email_Verify_Constraint {
  /** unique or primary key constraint */
  UniqueUserEmailVerifySecretHash = 'unique_user_email_verify_secret_hash',
  /** unique or primary key constraint */
  UniqueUserEmailVerifyUserUid = 'unique_user_email_verify_user_uid',
  /** unique or primary key constraint */
  UserEmailVerifyPkey = 'user_email_verify_pkey'
}

/** input type for inserting data into table "kc.user_email_verify" */
export type Kc_User_Email_Verify_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kc_User_Email_Verify_Max_Fields = {
  __typename?: 'kc_user_email_verify_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Kc_User_Email_Verify_Min_Fields = {
  __typename?: 'kc_user_email_verify_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "kc.user_email_verify" */
export type Kc_User_Email_Verify_Mutation_Response = {
  __typename?: 'kc_user_email_verify_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User_Email_Verify>;
};

/** on conflict condition type for table "kc.user_email_verify" */
export type Kc_User_Email_Verify_On_Conflict = {
  constraint: Kc_User_Email_Verify_Constraint;
  update_columns?: Array<Kc_User_Email_Verify_Update_Column>;
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.user_email_verify". */
export type Kc_User_Email_Verify_Order_By = {
  created_at?: InputMaybe<Order_By>;
  secret_hash?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kc_user_email_verify */
export type Kc_User_Email_Verify_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "kc.user_email_verify" */
export enum Kc_User_Email_Verify_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "kc.user_email_verify" */
export type Kc_User_Email_Verify_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "kc.user_email_verify" */
export enum Kc_User_Email_Verify_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

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
  keys_encrypted: Scalars['String'];
  keys_hash: Scalars['String'];
  keys_keyring_id: Scalars['smallint'];
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
  avg?: Maybe<Kc_User_Exchange_Keys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kc_User_Exchange_Keys_Max_Fields>;
  min?: Maybe<Kc_User_Exchange_Keys_Min_Fields>;
  stddev?: Maybe<Kc_User_Exchange_Keys_Stddev_Fields>;
  stddev_pop?: Maybe<Kc_User_Exchange_Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kc_User_Exchange_Keys_Stddev_Samp_Fields>;
  sum?: Maybe<Kc_User_Exchange_Keys_Sum_Fields>;
  var_pop?: Maybe<Kc_User_Exchange_Keys_Var_Pop_Fields>;
  var_samp?: Maybe<Kc_User_Exchange_Keys_Var_Samp_Fields>;
  variance?: Maybe<Kc_User_Exchange_Keys_Variance_Fields>;
};


/** aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_User_Exchange_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_User_Exchange_Keys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kc_User_Exchange_Keys_Max_Order_By>;
  min?: InputMaybe<Kc_User_Exchange_Keys_Min_Order_By>;
  stddev?: InputMaybe<Kc_User_Exchange_Keys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kc_User_Exchange_Keys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kc_User_Exchange_Keys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kc_User_Exchange_Keys_Sum_Order_By>;
  var_pop?: InputMaybe<Kc_User_Exchange_Keys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kc_User_Exchange_Keys_Var_Samp_Order_By>;
  variance?: InputMaybe<Kc_User_Exchange_Keys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Arr_Rel_Insert_Input = {
  data: Array<Kc_User_Exchange_Keys_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>;
};

/** aggregate avg on columns */
export type Kc_User_Exchange_Keys_Avg_Fields = {
  __typename?: 'kc_user_exchange_keys_avg_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Avg_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
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
  keys_encrypted?: InputMaybe<String_Comparison_Exp>;
  keys_hash?: InputMaybe<String_Comparison_Exp>;
  keys_keyring_id?: InputMaybe<Smallint_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Kc_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kc.user_exchange_keys" */
export enum Kc_User_Exchange_Keys_Constraint {
  /** unique or primary key constraint */
  UserExchangeKeysPkey = 'user_exchange_keys_pkey'
}

/** input type for incrementing numeric columns in table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Inc_Input = {
  keys_keyring_id?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  invalidated_at?: InputMaybe<Scalars['timestamptz']>;
  keys_encrypted?: InputMaybe<Scalars['String']>;
  keys_hash?: InputMaybe<Scalars['String']>;
  keys_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kc_User_Exchange_Keys_Max_Fields = {
  __typename?: 'kc_user_exchange_keys_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchange_uid?: Maybe<Scalars['uuid']>;
  invalidated_at?: Maybe<Scalars['timestamptz']>;
  keys_encrypted?: Maybe<Scalars['String']>;
  keys_hash?: Maybe<Scalars['String']>;
  keys_keyring_id?: Maybe<Scalars['smallint']>;
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
  keys_encrypted?: InputMaybe<Order_By>;
  keys_hash?: InputMaybe<Order_By>;
  keys_keyring_id?: InputMaybe<Order_By>;
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
  keys_encrypted?: Maybe<Scalars['String']>;
  keys_hash?: Maybe<Scalars['String']>;
  keys_keyring_id?: Maybe<Scalars['smallint']>;
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
  keys_encrypted?: InputMaybe<Order_By>;
  keys_hash?: InputMaybe<Order_By>;
  keys_keyring_id?: InputMaybe<Order_By>;
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

/** input type for inserting object relation for remote table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Obj_Rel_Insert_Input = {
  data: Kc_User_Exchange_Keys_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>;
};

/** on conflict condition type for table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_On_Conflict = {
  constraint: Kc_User_Exchange_Keys_Constraint;
  update_columns?: Array<Kc_User_Exchange_Keys_Update_Column>;
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.user_exchange_keys". */
export type Kc_User_Exchange_Keys_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  exchange?: InputMaybe<Kc_Exchange_Order_By>;
  exchange_uid?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  keys_encrypted?: InputMaybe<Order_By>;
  keys_hash?: InputMaybe<Order_By>;
  keys_keyring_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Kc_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kc_user_exchange_keys */
export type Kc_User_Exchange_Keys_Pk_Columns_Input = {
  uid: Scalars['uuid'];
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
  KeysEncrypted = 'keys_encrypted',
  /** column name */
  KeysHash = 'keys_hash',
  /** column name */
  KeysKeyringId = 'keys_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  exchange_uid?: InputMaybe<Scalars['uuid']>;
  invalidated_at?: InputMaybe<Scalars['timestamptz']>;
  keys_encrypted?: InputMaybe<Scalars['String']>;
  keys_hash?: InputMaybe<Scalars['String']>;
  keys_keyring_id?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Kc_User_Exchange_Keys_Stddev_Fields = {
  __typename?: 'kc_user_exchange_keys_stddev_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Stddev_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kc_User_Exchange_Keys_Stddev_Pop_Fields = {
  __typename?: 'kc_user_exchange_keys_stddev_pop_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Stddev_Pop_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kc_User_Exchange_Keys_Stddev_Samp_Fields = {
  __typename?: 'kc_user_exchange_keys_stddev_samp_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Stddev_Samp_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kc_User_Exchange_Keys_Sum_Fields = {
  __typename?: 'kc_user_exchange_keys_sum_fields';
  keys_keyring_id?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Sum_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** update columns of table "kc.user_exchange_keys" */
export enum Kc_User_Exchange_Keys_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExchangeUid = 'exchange_uid',
  /** column name */
  InvalidatedAt = 'invalidated_at',
  /** column name */
  KeysEncrypted = 'keys_encrypted',
  /** column name */
  KeysHash = 'keys_hash',
  /** column name */
  KeysKeyringId = 'keys_keyring_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** aggregate var_pop on columns */
export type Kc_User_Exchange_Keys_Var_Pop_Fields = {
  __typename?: 'kc_user_exchange_keys_var_pop_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Var_Pop_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kc_User_Exchange_Keys_Var_Samp_Fields = {
  __typename?: 'kc_user_exchange_keys_var_samp_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Var_Samp_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kc_User_Exchange_Keys_Variance_Fields = {
  __typename?: 'kc_user_exchange_keys_variance_fields';
  keys_keyring_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Variance_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "kc.user" */
export type Kc_User_Inc_Input = {
  email_keyring_id?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "kc.user" */
export type Kc_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Arr_Rel_Insert_Input>;
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>;
  email_encrypted?: InputMaybe<Scalars['String']>;
  email_hash?: InputMaybe<Scalars['String']>;
  email_keyring_id?: InputMaybe<Scalars['smallint']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  orders?: InputMaybe<Kc_Order_Arr_Rel_Insert_Input>;
  password_hash?: InputMaybe<Scalars['String']>;
  trades?: InputMaybe<Kc_Trade_Arr_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user2FA?: InputMaybe<Kc_User_2fa_Obj_Rel_Insert_Input>;
  user_devices?: InputMaybe<Kc_User_Device_Arr_Rel_Insert_Input>;
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Kc_User_Max_Fields = {
  __typename?: 'kc_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email_encrypted?: Maybe<Scalars['String']>;
  email_hash?: Maybe<Scalars['String']>;
  email_keyring_id?: Maybe<Scalars['smallint']>;
  password_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Kc_User_Min_Fields = {
  __typename?: 'kc_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email_encrypted?: Maybe<Scalars['String']>;
  email_hash?: Maybe<Scalars['String']>;
  email_keyring_id?: Maybe<Scalars['smallint']>;
  password_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "kc.user" */
export type Kc_User_Mutation_Response = {
  __typename?: 'kc_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User>;
};

/** input type for inserting object relation for remote table "kc.user" */
export type Kc_User_Obj_Rel_Insert_Input = {
  data: Kc_User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Kc_User_On_Conflict>;
};

/** on conflict condition type for table "kc.user" */
export type Kc_User_On_Conflict = {
  constraint: Kc_User_Constraint;
  update_columns?: Array<Kc_User_Update_Column>;
  where?: InputMaybe<Kc_User_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.user". */
export type Kc_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>;
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>;
  email_encrypted?: InputMaybe<Order_By>;
  email_hash?: InputMaybe<Order_By>;
  email_keyring_id?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Kc_Order_Aggregate_Order_By>;
  password_hash?: InputMaybe<Order_By>;
  trades_aggregate?: InputMaybe<Kc_Trade_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user2FA?: InputMaybe<Kc_User_2fa_Order_By>;
  user_devices_aggregate?: InputMaybe<Kc_User_Device_Aggregate_Order_By>;
  user_exchange_keys_aggregate?: InputMaybe<Kc_User_Exchange_Keys_Aggregate_Order_By>;
};

/** columns and relationships of "kc.user_password_reset" */
export type Kc_User_Password_Reset = {
  __typename?: 'kc_user_password_reset';
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  secret_hash: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_uid: Scalars['uuid'];
};

/** aggregated selection of "kc.user_password_reset" */
export type Kc_User_Password_Reset_Aggregate = {
  __typename?: 'kc_user_password_reset_aggregate';
  aggregate?: Maybe<Kc_User_Password_Reset_Aggregate_Fields>;
  nodes: Array<Kc_User_Password_Reset>;
};

/** aggregate fields of "kc.user_password_reset" */
export type Kc_User_Password_Reset_Aggregate_Fields = {
  __typename?: 'kc_user_password_reset_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kc_User_Password_Reset_Max_Fields>;
  min?: Maybe<Kc_User_Password_Reset_Min_Fields>;
};


/** aggregate fields of "kc.user_password_reset" */
export type Kc_User_Password_Reset_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kc_User_Password_Reset_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kc.user_password_reset". All fields are combined with a logical 'AND'. */
export type Kc_User_Password_Reset_Bool_Exp = {
  _and?: InputMaybe<Array<Kc_User_Password_Reset_Bool_Exp>>;
  _not?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>;
  _or?: InputMaybe<Array<Kc_User_Password_Reset_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  secret_hash?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kc.user_password_reset" */
export enum Kc_User_Password_Reset_Constraint {
  /** unique or primary key constraint */
  UniqueUserPasswordResetSecretHash = 'unique_user_password_reset_secret_hash',
  /** unique or primary key constraint */
  UserPasswordResetPkey = 'user_password_reset_pkey'
}

/** input type for inserting data into table "kc.user_password_reset" */
export type Kc_User_Password_Reset_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kc_User_Password_Reset_Max_Fields = {
  __typename?: 'kc_user_password_reset_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Kc_User_Password_Reset_Min_Fields = {
  __typename?: 'kc_user_password_reset_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  secret_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "kc.user_password_reset" */
export type Kc_User_Password_Reset_Mutation_Response = {
  __typename?: 'kc_user_password_reset_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kc_User_Password_Reset>;
};

/** on conflict condition type for table "kc.user_password_reset" */
export type Kc_User_Password_Reset_On_Conflict = {
  constraint: Kc_User_Password_Reset_Constraint;
  update_columns?: Array<Kc_User_Password_Reset_Update_Column>;
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>;
};

/** Ordering options when selecting data from "kc.user_password_reset". */
export type Kc_User_Password_Reset_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  secret_hash?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kc_user_password_reset */
export type Kc_User_Password_Reset_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "kc.user_password_reset" */
export enum Kc_User_Password_Reset_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** input type for updating data in table "kc.user_password_reset" */
export type Kc_User_Password_Reset_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  secret_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "kc.user_password_reset" */
export enum Kc_User_Password_Reset_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  SecretHash = 'secret_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUid = 'user_uid'
}

/** primary key columns input for table: kc_user */
export type Kc_User_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "kc.user" */
export enum Kc_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailEncrypted = 'email_encrypted',
  /** column name */
  EmailHash = 'email_hash',
  /** column name */
  EmailKeyringId = 'email_keyring_id',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "kc.user" */
export type Kc_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email_encrypted?: InputMaybe<Scalars['String']>;
  email_hash?: InputMaybe<Scalars['String']>;
  email_keyring_id?: InputMaybe<Scalars['smallint']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  password_hash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Kc_User_Stddev_Fields = {
  __typename?: 'kc_user_stddev_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kc_User_Stddev_Pop_Fields = {
  __typename?: 'kc_user_stddev_pop_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kc_User_Stddev_Samp_Fields = {
  __typename?: 'kc_user_stddev_samp_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kc_User_Sum_Fields = {
  __typename?: 'kc_user_sum_fields';
  email_keyring_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "kc.user" */
export enum Kc_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailEncrypted = 'email_encrypted',
  /** column name */
  EmailHash = 'email_hash',
  /** column name */
  EmailKeyringId = 'email_keyring_id',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Kc_User_Var_Pop_Fields = {
  __typename?: 'kc_user_var_pop_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kc_User_Var_Samp_Fields = {
  __typename?: 'kc_user_var_samp_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kc_User_Variance_Fields = {
  __typename?: 'kc_user_variance_fields';
  email_keyring_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  create_auth_token?: Maybe<CreateAuthTokenOutput>;
  create_dca_order?: Maybe<CreateDcaOrderResult>;
  create_user?: Maybe<CreateUserOutput>;
  create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>;
  /** delete data from the table: "kc.currency" */
  delete_kc_currency?: Maybe<Kc_Currency_Mutation_Response>;
  /** delete single row from the table: "kc.currency" */
  delete_kc_currency_by_pk?: Maybe<Kc_Currency>;
  /** delete data from the table: "kc.dca_order" */
  delete_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>;
  /** delete single row from the table: "kc.dca_order" */
  delete_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>;
  /** delete data from the table: "kc.dca_order_history" */
  delete_kc_dca_order_history?: Maybe<Kc_Dca_Order_History_Mutation_Response>;
  /** delete single row from the table: "kc.dca_order_history" */
  delete_kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>;
  /** delete data from the table: "kc.exchange" */
  delete_kc_exchange?: Maybe<Kc_Exchange_Mutation_Response>;
  /** delete single row from the table: "kc.exchange" */
  delete_kc_exchange_by_pk?: Maybe<Kc_Exchange>;
  /** delete data from the table: "kc.exchange_primary_currency" */
  delete_kc_exchange_primary_currency?: Maybe<Kc_Exchange_Primary_Currency_Mutation_Response>;
  /** delete single row from the table: "kc.exchange_primary_currency" */
  delete_kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>;
  /** delete data from the table: "kc.exchange_secondary_currency" */
  delete_kc_exchange_secondary_currency?: Maybe<Kc_Exchange_Secondary_Currency_Mutation_Response>;
  /** delete single row from the table: "kc.exchange_secondary_currency" */
  delete_kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** delete data from the table: "kc.market" */
  delete_kc_market?: Maybe<Kc_Market_Mutation_Response>;
  /** delete single row from the table: "kc.market" */
  delete_kc_market_by_pk?: Maybe<Kc_Market>;
  /** delete data from the table: "kc.market_price" */
  delete_kc_market_price?: Maybe<Kc_Market_Price_Mutation_Response>;
  /** delete single row from the table: "kc.market_price" */
  delete_kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** delete data from the table: "kc.market_trading_pair" */
  delete_kc_market_trading_pair?: Maybe<Kc_Market_Trading_Pair_Mutation_Response>;
  /** delete data from the table: "kc.order" */
  delete_kc_order?: Maybe<Kc_Order_Mutation_Response>;
  /** delete single row from the table: "kc.order" */
  delete_kc_order_by_pk?: Maybe<Kc_Order>;
  /** delete data from the table: "kc.trade" */
  delete_kc_trade?: Maybe<Kc_Trade_Mutation_Response>;
  /** delete single row from the table: "kc.trade" */
  delete_kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** delete data from the table: "kc.user" */
  delete_kc_user?: Maybe<Kc_User_Mutation_Response>;
  /** delete data from the table: "kc.user_2fa" */
  delete_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>;
  /** delete single row from the table: "kc.user_2fa" */
  delete_kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** delete single row from the table: "kc.user" */
  delete_kc_user_by_pk?: Maybe<Kc_User>;
  /** delete data from the table: "kc.user_device" */
  delete_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>;
  /** delete single row from the table: "kc.user_device" */
  delete_kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** delete data from the table: "kc.user_email_verify" */
  delete_kc_user_email_verify?: Maybe<Kc_User_Email_Verify_Mutation_Response>;
  /** delete single row from the table: "kc.user_email_verify" */
  delete_kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>;
  /** delete data from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>;
  /** delete single row from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
  /** delete data from the table: "kc.user_password_reset" */
  delete_kc_user_password_reset?: Maybe<Kc_User_Password_Reset_Mutation_Response>;
  /** delete single row from the table: "kc.user_password_reset" */
  delete_kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>;
  enable_user_2fa?: Maybe<EnableUser2FaOutput>;
  /** insert data into the table: "kc.currency" */
  insert_kc_currency?: Maybe<Kc_Currency_Mutation_Response>;
  /** insert a single row into the table: "kc.currency" */
  insert_kc_currency_one?: Maybe<Kc_Currency>;
  /** insert data into the table: "kc.dca_order" */
  insert_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>;
  /** insert data into the table: "kc.dca_order_history" */
  insert_kc_dca_order_history?: Maybe<Kc_Dca_Order_History_Mutation_Response>;
  /** insert a single row into the table: "kc.dca_order_history" */
  insert_kc_dca_order_history_one?: Maybe<Kc_Dca_Order_History>;
  /** insert a single row into the table: "kc.dca_order" */
  insert_kc_dca_order_one?: Maybe<Kc_Dca_Order>;
  /** insert data into the table: "kc.exchange" */
  insert_kc_exchange?: Maybe<Kc_Exchange_Mutation_Response>;
  /** insert a single row into the table: "kc.exchange" */
  insert_kc_exchange_one?: Maybe<Kc_Exchange>;
  /** insert data into the table: "kc.exchange_primary_currency" */
  insert_kc_exchange_primary_currency?: Maybe<Kc_Exchange_Primary_Currency_Mutation_Response>;
  /** insert a single row into the table: "kc.exchange_primary_currency" */
  insert_kc_exchange_primary_currency_one?: Maybe<Kc_Exchange_Primary_Currency>;
  /** insert data into the table: "kc.exchange_secondary_currency" */
  insert_kc_exchange_secondary_currency?: Maybe<Kc_Exchange_Secondary_Currency_Mutation_Response>;
  /** insert a single row into the table: "kc.exchange_secondary_currency" */
  insert_kc_exchange_secondary_currency_one?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** insert data into the table: "kc.market" */
  insert_kc_market?: Maybe<Kc_Market_Mutation_Response>;
  /** insert a single row into the table: "kc.market" */
  insert_kc_market_one?: Maybe<Kc_Market>;
  /** insert data into the table: "kc.market_price" */
  insert_kc_market_price?: Maybe<Kc_Market_Price_Mutation_Response>;
  /** insert a single row into the table: "kc.market_price" */
  insert_kc_market_price_one?: Maybe<Kc_Market_Price>;
  /** insert data into the table: "kc.market_trading_pair" */
  insert_kc_market_trading_pair?: Maybe<Kc_Market_Trading_Pair_Mutation_Response>;
  /** insert a single row into the table: "kc.market_trading_pair" */
  insert_kc_market_trading_pair_one?: Maybe<Kc_Market_Trading_Pair>;
  /** insert data into the table: "kc.order" */
  insert_kc_order?: Maybe<Kc_Order_Mutation_Response>;
  /** insert a single row into the table: "kc.order" */
  insert_kc_order_one?: Maybe<Kc_Order>;
  /** insert data into the table: "kc.trade" */
  insert_kc_trade?: Maybe<Kc_Trade_Mutation_Response>;
  /** insert a single row into the table: "kc.trade" */
  insert_kc_trade_one?: Maybe<Kc_Trade>;
  /** insert data into the table: "kc.user" */
  insert_kc_user?: Maybe<Kc_User_Mutation_Response>;
  /** insert data into the table: "kc.user_2fa" */
  insert_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>;
  /** insert a single row into the table: "kc.user_2fa" */
  insert_kc_user_2fa_one?: Maybe<Kc_User_2fa>;
  /** insert data into the table: "kc.user_device" */
  insert_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>;
  /** insert a single row into the table: "kc.user_device" */
  insert_kc_user_device_one?: Maybe<Kc_User_Device>;
  /** insert data into the table: "kc.user_email_verify" */
  insert_kc_user_email_verify?: Maybe<Kc_User_Email_Verify_Mutation_Response>;
  /** insert a single row into the table: "kc.user_email_verify" */
  insert_kc_user_email_verify_one?: Maybe<Kc_User_Email_Verify>;
  /** insert data into the table: "kc.user_exchange_keys" */
  insert_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>;
  /** insert a single row into the table: "kc.user_exchange_keys" */
  insert_kc_user_exchange_keys_one?: Maybe<Kc_User_Exchange_Keys>;
  /** insert a single row into the table: "kc.user" */
  insert_kc_user_one?: Maybe<Kc_User>;
  /** insert data into the table: "kc.user_password_reset" */
  insert_kc_user_password_reset?: Maybe<Kc_User_Password_Reset_Mutation_Response>;
  /** insert a single row into the table: "kc.user_password_reset" */
  insert_kc_user_password_reset_one?: Maybe<Kc_User_Password_Reset>;
  refresh_auth_token?: Maybe<RefreshAuthTokenOutput>;
  reset_user_password: ResetUserPasswordOutput;
  send_user_email_verify: SendUserEmailVerifyOutput;
  send_user_password_reset: SendUserPasswordResetOutput;
  sync_exchange_open_order_list?: Maybe<SyncExchangeOpenOrderListOutput>;
  sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>;
  /** update data of the table: "kc.currency" */
  update_kc_currency?: Maybe<Kc_Currency_Mutation_Response>;
  /** update single row of the table: "kc.currency" */
  update_kc_currency_by_pk?: Maybe<Kc_Currency>;
  /** update data of the table: "kc.dca_order" */
  update_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>;
  /** update single row of the table: "kc.dca_order" */
  update_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>;
  /** update data of the table: "kc.dca_order_history" */
  update_kc_dca_order_history?: Maybe<Kc_Dca_Order_History_Mutation_Response>;
  /** update single row of the table: "kc.dca_order_history" */
  update_kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>;
  /** update data of the table: "kc.exchange" */
  update_kc_exchange?: Maybe<Kc_Exchange_Mutation_Response>;
  /** update single row of the table: "kc.exchange" */
  update_kc_exchange_by_pk?: Maybe<Kc_Exchange>;
  /** update data of the table: "kc.exchange_primary_currency" */
  update_kc_exchange_primary_currency?: Maybe<Kc_Exchange_Primary_Currency_Mutation_Response>;
  /** update single row of the table: "kc.exchange_primary_currency" */
  update_kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>;
  /** update data of the table: "kc.exchange_secondary_currency" */
  update_kc_exchange_secondary_currency?: Maybe<Kc_Exchange_Secondary_Currency_Mutation_Response>;
  /** update single row of the table: "kc.exchange_secondary_currency" */
  update_kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** update data of the table: "kc.market" */
  update_kc_market?: Maybe<Kc_Market_Mutation_Response>;
  /** update single row of the table: "kc.market" */
  update_kc_market_by_pk?: Maybe<Kc_Market>;
  /** update data of the table: "kc.market_price" */
  update_kc_market_price?: Maybe<Kc_Market_Price_Mutation_Response>;
  /** update single row of the table: "kc.market_price" */
  update_kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** update data of the table: "kc.market_trading_pair" */
  update_kc_market_trading_pair?: Maybe<Kc_Market_Trading_Pair_Mutation_Response>;
  /** update data of the table: "kc.order" */
  update_kc_order?: Maybe<Kc_Order_Mutation_Response>;
  /** update single row of the table: "kc.order" */
  update_kc_order_by_pk?: Maybe<Kc_Order>;
  /** update data of the table: "kc.trade" */
  update_kc_trade?: Maybe<Kc_Trade_Mutation_Response>;
  /** update single row of the table: "kc.trade" */
  update_kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** update data of the table: "kc.user" */
  update_kc_user?: Maybe<Kc_User_Mutation_Response>;
  /** update data of the table: "kc.user_2fa" */
  update_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>;
  /** update single row of the table: "kc.user_2fa" */
  update_kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** update single row of the table: "kc.user" */
  update_kc_user_by_pk?: Maybe<Kc_User>;
  /** update data of the table: "kc.user_device" */
  update_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>;
  /** update single row of the table: "kc.user_device" */
  update_kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** update data of the table: "kc.user_email_verify" */
  update_kc_user_email_verify?: Maybe<Kc_User_Email_Verify_Mutation_Response>;
  /** update single row of the table: "kc.user_email_verify" */
  update_kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>;
  /** update data of the table: "kc.user_exchange_keys" */
  update_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>;
  /** update single row of the table: "kc.user_exchange_keys" */
  update_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
  /** update data of the table: "kc.user_password_reset" */
  update_kc_user_password_reset?: Maybe<Kc_User_Password_Reset_Mutation_Response>;
  /** update single row of the table: "kc.user_password_reset" */
  update_kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>;
  update_user: UpdateUserOutput;
  update_user_exchange_keys?: Maybe<UpdateUserExchangeKeysOutput>;
  validate_user_exchange_keys?: Maybe<ValidateUserExchangeKeysOutput>;
  validate_user_exchange_keys_live?: Maybe<ValidateUserExchangeKeysLiveOutput>;
  validate_user_password_reset: ValidatUserPasswordResetOutput;
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
export type Mutation_RootDelete_Kc_CurrencyArgs = {
  where: Kc_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Currency_By_PkArgs = {
  symbol: Scalars['String'];
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
export type Mutation_RootDelete_Kc_Dca_Order_HistoryArgs = {
  where: Kc_Dca_Order_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_ExchangeArgs = {
  where: Kc_Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Exchange_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_Exchange_Primary_CurrencyArgs = {
  where: Kc_Exchange_Primary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_Exchange_Secondary_CurrencyArgs = {
  where: Kc_Exchange_Secondary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid'];
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_MarketArgs = {
  where: Kc_Market_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Market_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_Market_PriceArgs = {
  where: Kc_Market_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String'];
  currency: Scalars['String'];
  market_uid: Scalars['uuid'];
  source_currency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_Market_Trading_PairArgs = {
  where: Kc_Market_Trading_Pair_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_OrderArgs = {
  where: Kc_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Order_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_TradeArgs = {
  where: Kc_Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_Trade_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kc_UserArgs = {
  where: Kc_User_Bool_Exp;
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
export type Mutation_RootDelete_Kc_User_By_PkArgs = {
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
export type Mutation_RootDelete_Kc_User_Email_VerifyArgs = {
  where: Kc_User_Email_Verify_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_Email_Verify_By_PkArgs = {
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
export type Mutation_RootDelete_Kc_User_Password_ResetArgs = {
  where: Kc_User_Password_Reset_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kc_User_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootEnable_User_2faArgs = {
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Kc_CurrencyArgs = {
  objects: Array<Kc_Currency_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Currency_OneArgs = {
  object: Kc_Currency_Insert_Input;
  on_conflict?: InputMaybe<Kc_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Dca_OrderArgs = {
  objects: Array<Kc_Dca_Order_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Dca_Order_HistoryArgs = {
  objects: Array<Kc_Dca_Order_History_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Dca_Order_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Dca_Order_History_OneArgs = {
  object: Kc_Dca_Order_History_Insert_Input;
  on_conflict?: InputMaybe<Kc_Dca_Order_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Dca_Order_OneArgs = {
  object: Kc_Dca_Order_Insert_Input;
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_ExchangeArgs = {
  objects: Array<Kc_Exchange_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Exchange_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Exchange_OneArgs = {
  object: Kc_Exchange_Insert_Input;
  on_conflict?: InputMaybe<Kc_Exchange_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Exchange_Primary_CurrencyArgs = {
  objects: Array<Kc_Exchange_Primary_Currency_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Exchange_Primary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Exchange_Primary_Currency_OneArgs = {
  object: Kc_Exchange_Primary_Currency_Insert_Input;
  on_conflict?: InputMaybe<Kc_Exchange_Primary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Exchange_Secondary_CurrencyArgs = {
  objects: Array<Kc_Exchange_Secondary_Currency_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Exchange_Secondary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Exchange_Secondary_Currency_OneArgs = {
  object: Kc_Exchange_Secondary_Currency_Insert_Input;
  on_conflict?: InputMaybe<Kc_Exchange_Secondary_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_MarketArgs = {
  objects: Array<Kc_Market_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Market_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Market_OneArgs = {
  object: Kc_Market_Insert_Input;
  on_conflict?: InputMaybe<Kc_Market_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Market_PriceArgs = {
  objects: Array<Kc_Market_Price_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Market_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Market_Price_OneArgs = {
  object: Kc_Market_Price_Insert_Input;
  on_conflict?: InputMaybe<Kc_Market_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Market_Trading_PairArgs = {
  objects: Array<Kc_Market_Trading_Pair_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Market_Trading_Pair_OneArgs = {
  object: Kc_Market_Trading_Pair_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Kc_OrderArgs = {
  objects: Array<Kc_Order_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Order_OneArgs = {
  object: Kc_Order_Insert_Input;
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_TradeArgs = {
  objects: Array<Kc_Trade_Insert_Input>;
  on_conflict?: InputMaybe<Kc_Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_Trade_OneArgs = {
  object: Kc_Trade_Insert_Input;
  on_conflict?: InputMaybe<Kc_Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_UserArgs = {
  objects: Array<Kc_User_Insert_Input>;
  on_conflict?: InputMaybe<Kc_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_2faArgs = {
  objects: Array<Kc_User_2fa_Insert_Input>;
  on_conflict?: InputMaybe<Kc_User_2fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_2fa_OneArgs = {
  object: Kc_User_2fa_Insert_Input;
  on_conflict?: InputMaybe<Kc_User_2fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_DeviceArgs = {
  objects: Array<Kc_User_Device_Insert_Input>;
  on_conflict?: InputMaybe<Kc_User_Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Device_OneArgs = {
  object: Kc_User_Device_Insert_Input;
  on_conflict?: InputMaybe<Kc_User_Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Email_VerifyArgs = {
  objects: Array<Kc_User_Email_Verify_Insert_Input>;
  on_conflict?: InputMaybe<Kc_User_Email_Verify_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Email_Verify_OneArgs = {
  object: Kc_User_Email_Verify_Insert_Input;
  on_conflict?: InputMaybe<Kc_User_Email_Verify_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Exchange_KeysArgs = {
  objects: Array<Kc_User_Exchange_Keys_Insert_Input>;
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Exchange_Keys_OneArgs = {
  object: Kc_User_Exchange_Keys_Insert_Input;
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_OneArgs = {
  object: Kc_User_Insert_Input;
  on_conflict?: InputMaybe<Kc_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Password_ResetArgs = {
  objects: Array<Kc_User_Password_Reset_Insert_Input>;
  on_conflict?: InputMaybe<Kc_User_Password_Reset_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kc_User_Password_Reset_OneArgs = {
  object: Kc_User_Password_Reset_Insert_Input;
  on_conflict?: InputMaybe<Kc_User_Password_Reset_On_Conflict>;
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
export type Mutation_RootUpdate_Kc_CurrencyArgs = {
  _set?: InputMaybe<Kc_Currency_Set_Input>;
  where: Kc_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Currency_By_PkArgs = {
  _set?: InputMaybe<Kc_Currency_Set_Input>;
  pk_columns: Kc_Currency_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Kc_Dca_Order_HistoryArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_History_Inc_Input>;
  _set?: InputMaybe<Kc_Dca_Order_History_Set_Input>;
  where: Kc_Dca_Order_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_History_By_PkArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_History_Inc_Input>;
  _set?: InputMaybe<Kc_Dca_Order_History_Set_Input>;
  pk_columns: Kc_Dca_Order_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_ExchangeArgs = {
  _set?: InputMaybe<Kc_Exchange_Set_Input>;
  where: Kc_Exchange_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Exchange_By_PkArgs = {
  _set?: InputMaybe<Kc_Exchange_Set_Input>;
  pk_columns: Kc_Exchange_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Primary_CurrencyArgs = {
  _set?: InputMaybe<Kc_Exchange_Primary_Currency_Set_Input>;
  where: Kc_Exchange_Primary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Primary_Currency_By_PkArgs = {
  _set?: InputMaybe<Kc_Exchange_Primary_Currency_Set_Input>;
  pk_columns: Kc_Exchange_Primary_Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Secondary_CurrencyArgs = {
  _set?: InputMaybe<Kc_Exchange_Secondary_Currency_Set_Input>;
  where: Kc_Exchange_Secondary_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Secondary_Currency_By_PkArgs = {
  _set?: InputMaybe<Kc_Exchange_Secondary_Currency_Set_Input>;
  pk_columns: Kc_Exchange_Secondary_Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_MarketArgs = {
  _set?: InputMaybe<Kc_Market_Set_Input>;
  where: Kc_Market_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Market_By_PkArgs = {
  _set?: InputMaybe<Kc_Market_Set_Input>;
  pk_columns: Kc_Market_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Market_PriceArgs = {
  _inc?: InputMaybe<Kc_Market_Price_Inc_Input>;
  _set?: InputMaybe<Kc_Market_Price_Set_Input>;
  where: Kc_Market_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Market_Price_By_PkArgs = {
  _inc?: InputMaybe<Kc_Market_Price_Inc_Input>;
  _set?: InputMaybe<Kc_Market_Price_Set_Input>;
  pk_columns: Kc_Market_Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Market_Trading_PairArgs = {
  _set?: InputMaybe<Kc_Market_Trading_Pair_Set_Input>;
  where: Kc_Market_Trading_Pair_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_OrderArgs = {
  _inc?: InputMaybe<Kc_Order_Inc_Input>;
  _set?: InputMaybe<Kc_Order_Set_Input>;
  where: Kc_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Order_By_PkArgs = {
  _inc?: InputMaybe<Kc_Order_Inc_Input>;
  _set?: InputMaybe<Kc_Order_Set_Input>;
  pk_columns: Kc_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_TradeArgs = {
  _inc?: InputMaybe<Kc_Trade_Inc_Input>;
  _set?: InputMaybe<Kc_Trade_Set_Input>;
  where: Kc_Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_Trade_By_PkArgs = {
  _inc?: InputMaybe<Kc_Trade_Inc_Input>;
  _set?: InputMaybe<Kc_Trade_Set_Input>;
  pk_columns: Kc_Trade_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_UserArgs = {
  _inc?: InputMaybe<Kc_User_Inc_Input>;
  _set?: InputMaybe<Kc_User_Set_Input>;
  where: Kc_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_2faArgs = {
  _inc?: InputMaybe<Kc_User_2fa_Inc_Input>;
  _set?: InputMaybe<Kc_User_2fa_Set_Input>;
  where: Kc_User_2fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_2fa_By_PkArgs = {
  _inc?: InputMaybe<Kc_User_2fa_Inc_Input>;
  _set?: InputMaybe<Kc_User_2fa_Set_Input>;
  pk_columns: Kc_User_2fa_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_By_PkArgs = {
  _inc?: InputMaybe<Kc_User_Inc_Input>;
  _set?: InputMaybe<Kc_User_Set_Input>;
  pk_columns: Kc_User_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Kc_User_Email_VerifyArgs = {
  _set?: InputMaybe<Kc_User_Email_Verify_Set_Input>;
  where: Kc_User_Email_Verify_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Email_Verify_By_PkArgs = {
  _set?: InputMaybe<Kc_User_Email_Verify_Set_Input>;
  pk_columns: Kc_User_Email_Verify_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Exchange_KeysArgs = {
  _inc?: InputMaybe<Kc_User_Exchange_Keys_Inc_Input>;
  _set?: InputMaybe<Kc_User_Exchange_Keys_Set_Input>;
  where: Kc_User_Exchange_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Exchange_Keys_By_PkArgs = {
  _inc?: InputMaybe<Kc_User_Exchange_Keys_Inc_Input>;
  _set?: InputMaybe<Kc_User_Exchange_Keys_Set_Input>;
  pk_columns: Kc_User_Exchange_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Password_ResetArgs = {
  _set?: InputMaybe<Kc_User_Password_Reset_Set_Input>;
  where: Kc_User_Password_Reset_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kc_User_Password_Reset_By_PkArgs = {
  _set?: InputMaybe<Kc_User_Password_Reset_Set_Input>;
  pk_columns: Kc_User_Password_Reset_Pk_Columns_Input;
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
export type Mutation_RootValidate_User_Password_ResetArgs = {
  password_reset_secret: Scalars['String'];
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
  /** fetch aggregated fields from the table: "kc.currency" */
  kc_currency_aggregate: Kc_Currency_Aggregate;
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
  /** fetch aggregated fields from the table: "kc.exchange" */
  kc_exchange_aggregate: Kc_Exchange_Aggregate;
  /** fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>;
  /** fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Array<Kc_Exchange_Primary_Currency>;
  /** fetch aggregated fields from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency_aggregate: Kc_Exchange_Primary_Currency_Aggregate;
  /** fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>;
  /** fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Array<Kc_Exchange_Secondary_Currency>;
  /** fetch aggregated fields from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency_aggregate: Kc_Exchange_Secondary_Currency_Aggregate;
  /** fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** fetch data from the table: "kc.market" */
  kc_market: Array<Kc_Market>;
  /** fetch aggregated fields from the table: "kc.market" */
  kc_market_aggregate: Kc_Market_Aggregate;
  /** fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>;
  /** fetch data from the table: "kc.market_price" */
  kc_market_price: Array<Kc_Market_Price>;
  /** fetch aggregated fields from the table: "kc.market_price" */
  kc_market_price_aggregate: Kc_Market_Price_Aggregate;
  /** fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Array<Kc_Market_Price>;
  /** execute function "kc.market_price_latest" and query aggregates on result of table type "kc.market_price" */
  kc_market_price_latest_aggregate: Kc_Market_Price_Aggregate;
  /** fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Array<Kc_Market_Trading_Pair>;
  /** fetch aggregated fields from the table: "kc.market_trading_pair" */
  kc_market_trading_pair_aggregate: Kc_Market_Trading_Pair_Aggregate;
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
  /** fetch aggregated fields from the table: "kc.trade_avg_price_by_day" */
  kc_trade_avg_price_by_day_aggregate: Kc_Trade_Avg_Price_By_Day_Aggregate;
  /** fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** fetch data from the table: "kc.trade_sum_total_value_by_month" */
  kc_trade_sum_total_value_by_month: Array<Kc_Trade_Sum_Total_Value_By_Month>;
  /** fetch aggregated fields from the table: "kc.trade_sum_total_value_by_month" */
  kc_trade_sum_total_value_by_month_aggregate: Kc_Trade_Sum_Total_Value_By_Month_Aggregate;
  /** fetch data from the table: "kc.trade_sum_total_value_by_week" */
  kc_trade_sum_total_value_by_week: Array<Kc_Trade_Sum_Total_Value_By_Week>;
  /** fetch aggregated fields from the table: "kc.trade_sum_total_value_by_week" */
  kc_trade_sum_total_value_by_week_aggregate: Kc_Trade_Sum_Total_Value_By_Week_Aggregate;
  /** fetch data from the table: "kc.trade_sum_volume_by_month" */
  kc_trade_sum_volume_by_month: Array<Kc_Trade_Sum_Volume_By_Month>;
  /** fetch aggregated fields from the table: "kc.trade_sum_volume_by_month" */
  kc_trade_sum_volume_by_month_aggregate: Kc_Trade_Sum_Volume_By_Month_Aggregate;
  /** fetch data from the table: "kc.trade_sum_volume_by_week" */
  kc_trade_sum_volume_by_week: Array<Kc_Trade_Sum_Volume_By_Week>;
  /** fetch aggregated fields from the table: "kc.trade_sum_volume_by_week" */
  kc_trade_sum_volume_by_week_aggregate: Kc_Trade_Sum_Volume_By_Week_Aggregate;
  /** fetch data from the table: "kc.user" */
  kc_user: Array<Kc_User>;
  /** fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Array<Kc_User_2fa>;
  /** fetch aggregated fields from the table: "kc.user_2fa" */
  kc_user_2fa_aggregate: Kc_User_2fa_Aggregate;
  /** fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** fetch aggregated fields from the table: "kc.user" */
  kc_user_aggregate: Kc_User_Aggregate;
  /** fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>;
  /** fetch data from the table: "kc.user_device" */
  kc_user_device: Array<Kc_User_Device>;
  /** fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate;
  /** fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** fetch data from the table: "kc.user_email_verify" */
  kc_user_email_verify: Array<Kc_User_Email_Verify>;
  /** fetch aggregated fields from the table: "kc.user_email_verify" */
  kc_user_email_verify_aggregate: Kc_User_Email_Verify_Aggregate;
  /** fetch data from the table: "kc.user_email_verify" using primary key columns */
  kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>;
  /** fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
  /** fetch data from the table: "kc.user_password_reset" */
  kc_user_password_reset: Array<Kc_User_Password_Reset>;
  /** fetch aggregated fields from the table: "kc.user_password_reset" */
  kc_user_password_reset_aggregate: Kc_User_Password_Reset_Aggregate;
  /** fetch data from the table: "kc.user_password_reset" using primary key columns */
  kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>;
  query_user_email?: Maybe<QueryUserEmailOutput>;
};


export type Query_RootKc_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Currency_Order_By>>;
  where?: InputMaybe<Kc_Currency_Bool_Exp>;
};


export type Query_RootKc_Currency_AggregateArgs = {
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


export type Query_RootKc_Exchange_AggregateArgs = {
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


export type Query_RootKc_Exchange_Primary_Currency_AggregateArgs = {
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


export type Query_RootKc_Exchange_Secondary_Currency_AggregateArgs = {
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


export type Query_RootKc_Market_AggregateArgs = {
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


export type Query_RootKc_Market_Price_AggregateArgs = {
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


export type Query_RootKc_Market_Price_Latest_AggregateArgs = {
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


export type Query_RootKc_Market_Trading_Pair_AggregateArgs = {
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


export type Query_RootKc_Trade_Avg_Price_By_Day_AggregateArgs = {
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


export type Query_RootKc_Trade_Sum_Total_Value_By_Month_AggregateArgs = {
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


export type Query_RootKc_Trade_Sum_Total_Value_By_Week_AggregateArgs = {
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


export type Query_RootKc_Trade_Sum_Volume_By_Month_AggregateArgs = {
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


export type Query_RootKc_Trade_Sum_Volume_By_Week_AggregateArgs = {
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


export type Query_RootKc_User_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_2fa_Order_By>>;
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>;
};


export type Query_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootKc_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Order_By>>;
  where?: InputMaybe<Kc_User_Bool_Exp>;
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


export type Query_RootKc_User_Email_VerifyArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Email_Verify_Order_By>>;
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>;
};


export type Query_RootKc_User_Email_Verify_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Email_Verify_Order_By>>;
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>;
};


export type Query_RootKc_User_Email_Verify_By_PkArgs = {
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


export type Query_RootKc_User_Password_ResetArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Password_Reset_Order_By>>;
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>;
};


export type Query_RootKc_User_Password_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Password_Reset_Order_By>>;
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>;
};


export type Query_RootKc_User_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootQuery_User_EmailArgs = {
  user_uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "kc.currency" */
  kc_currency: Array<Kc_Currency>;
  /** fetch aggregated fields from the table: "kc.currency" */
  kc_currency_aggregate: Kc_Currency_Aggregate;
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
  /** fetch aggregated fields from the table: "kc.exchange" */
  kc_exchange_aggregate: Kc_Exchange_Aggregate;
  /** fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>;
  /** fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Array<Kc_Exchange_Primary_Currency>;
  /** fetch aggregated fields from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency_aggregate: Kc_Exchange_Primary_Currency_Aggregate;
  /** fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>;
  /** fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Array<Kc_Exchange_Secondary_Currency>;
  /** fetch aggregated fields from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency_aggregate: Kc_Exchange_Secondary_Currency_Aggregate;
  /** fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>;
  /** fetch data from the table: "kc.market" */
  kc_market: Array<Kc_Market>;
  /** fetch aggregated fields from the table: "kc.market" */
  kc_market_aggregate: Kc_Market_Aggregate;
  /** fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>;
  /** fetch data from the table: "kc.market_price" */
  kc_market_price: Array<Kc_Market_Price>;
  /** fetch aggregated fields from the table: "kc.market_price" */
  kc_market_price_aggregate: Kc_Market_Price_Aggregate;
  /** fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>;
  /** execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Array<Kc_Market_Price>;
  /** execute function "kc.market_price_latest" and query aggregates on result of table type "kc.market_price" */
  kc_market_price_latest_aggregate: Kc_Market_Price_Aggregate;
  /** fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Array<Kc_Market_Trading_Pair>;
  /** fetch aggregated fields from the table: "kc.market_trading_pair" */
  kc_market_trading_pair_aggregate: Kc_Market_Trading_Pair_Aggregate;
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
  /** fetch aggregated fields from the table: "kc.trade_avg_price_by_day" */
  kc_trade_avg_price_by_day_aggregate: Kc_Trade_Avg_Price_By_Day_Aggregate;
  /** fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>;
  /** fetch data from the table: "kc.trade_sum_total_value_by_month" */
  kc_trade_sum_total_value_by_month: Array<Kc_Trade_Sum_Total_Value_By_Month>;
  /** fetch aggregated fields from the table: "kc.trade_sum_total_value_by_month" */
  kc_trade_sum_total_value_by_month_aggregate: Kc_Trade_Sum_Total_Value_By_Month_Aggregate;
  /** fetch data from the table: "kc.trade_sum_total_value_by_week" */
  kc_trade_sum_total_value_by_week: Array<Kc_Trade_Sum_Total_Value_By_Week>;
  /** fetch aggregated fields from the table: "kc.trade_sum_total_value_by_week" */
  kc_trade_sum_total_value_by_week_aggregate: Kc_Trade_Sum_Total_Value_By_Week_Aggregate;
  /** fetch data from the table: "kc.trade_sum_volume_by_month" */
  kc_trade_sum_volume_by_month: Array<Kc_Trade_Sum_Volume_By_Month>;
  /** fetch aggregated fields from the table: "kc.trade_sum_volume_by_month" */
  kc_trade_sum_volume_by_month_aggregate: Kc_Trade_Sum_Volume_By_Month_Aggregate;
  /** fetch data from the table: "kc.trade_sum_volume_by_week" */
  kc_trade_sum_volume_by_week: Array<Kc_Trade_Sum_Volume_By_Week>;
  /** fetch aggregated fields from the table: "kc.trade_sum_volume_by_week" */
  kc_trade_sum_volume_by_week_aggregate: Kc_Trade_Sum_Volume_By_Week_Aggregate;
  /** fetch data from the table: "kc.user" */
  kc_user: Array<Kc_User>;
  /** fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Array<Kc_User_2fa>;
  /** fetch aggregated fields from the table: "kc.user_2fa" */
  kc_user_2fa_aggregate: Kc_User_2fa_Aggregate;
  /** fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>;
  /** fetch aggregated fields from the table: "kc.user" */
  kc_user_aggregate: Kc_User_Aggregate;
  /** fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>;
  /** fetch data from the table: "kc.user_device" */
  kc_user_device: Array<Kc_User_Device>;
  /** fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate;
  /** fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>;
  /** fetch data from the table: "kc.user_email_verify" */
  kc_user_email_verify: Array<Kc_User_Email_Verify>;
  /** fetch aggregated fields from the table: "kc.user_email_verify" */
  kc_user_email_verify_aggregate: Kc_User_Email_Verify_Aggregate;
  /** fetch data from the table: "kc.user_email_verify" using primary key columns */
  kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>;
  /** fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Array<Kc_User_Exchange_Keys>;
  /** fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate;
  /** fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>;
  /** fetch data from the table: "kc.user_password_reset" */
  kc_user_password_reset: Array<Kc_User_Password_Reset>;
  /** fetch aggregated fields from the table: "kc.user_password_reset" */
  kc_user_password_reset_aggregate: Kc_User_Password_Reset_Aggregate;
  /** fetch data from the table: "kc.user_password_reset" using primary key columns */
  kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>;
};


export type Subscription_RootKc_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Kc_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_Currency_Order_By>>;
  where?: InputMaybe<Kc_Currency_Bool_Exp>;
};


export type Subscription_RootKc_Currency_AggregateArgs = {
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


export type Subscription_RootKc_Exchange_AggregateArgs = {
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


export type Subscription_RootKc_Exchange_Primary_Currency_AggregateArgs = {
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


export type Subscription_RootKc_Exchange_Secondary_Currency_AggregateArgs = {
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


export type Subscription_RootKc_Market_AggregateArgs = {
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


export type Subscription_RootKc_Market_Price_AggregateArgs = {
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


export type Subscription_RootKc_Market_Price_Latest_AggregateArgs = {
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


export type Subscription_RootKc_Market_Trading_Pair_AggregateArgs = {
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


export type Subscription_RootKc_Trade_Avg_Price_By_Day_AggregateArgs = {
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


export type Subscription_RootKc_Trade_Sum_Total_Value_By_Month_AggregateArgs = {
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


export type Subscription_RootKc_Trade_Sum_Total_Value_By_Week_AggregateArgs = {
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


export type Subscription_RootKc_Trade_Sum_Volume_By_Month_AggregateArgs = {
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


export type Subscription_RootKc_Trade_Sum_Volume_By_Week_AggregateArgs = {
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


export type Subscription_RootKc_User_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_2fa_Order_By>>;
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>;
};


export type Subscription_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootKc_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Order_By>>;
  where?: InputMaybe<Kc_User_Bool_Exp>;
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


export type Subscription_RootKc_User_Email_VerifyArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Email_Verify_Order_By>>;
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>;
};


export type Subscription_RootKc_User_Email_Verify_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Email_Verify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Email_Verify_Order_By>>;
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>;
};


export type Subscription_RootKc_User_Email_Verify_By_PkArgs = {
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


export type Subscription_RootKc_User_Password_ResetArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Password_Reset_Order_By>>;
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>;
};


export type Subscription_RootKc_User_Password_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kc_User_Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kc_User_Password_Reset_Order_By>>;
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>;
};


export type Subscription_RootKc_User_Password_Reset_By_PkArgs = {
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

export type CreateCurrencyMutationVariables = Exact<{
  name: Scalars['String'];
  symbol: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
}>;


export type CreateCurrencyMutation = { __typename?: 'mutation_root', insert_kc_currency_one?: { __typename?: 'kc_currency', symbol: string, name: string } | null | undefined };

export type GetCurrencyListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrencyListQuery = { __typename?: 'query_root', kc_currency: Array<{ __typename?: 'kc_currency', created_at: string, updated_at: string, symbol: string, name: string }> };

export type GetExchangeListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExchangeListQuery = { __typename?: 'query_root', kc_exchange: Array<{ __typename?: 'kc_exchange', created_at: string, updated_at: string, uid: string, id: string, name: string, url: string, primary_currencies: Array<{ __typename?: 'kc_exchange_primary_currency', symbol: string }>, secondary_currencies: Array<{ __typename?: 'kc_exchange_secondary_currency', symbol: string }> }> };

export type CreateExchangePrimaryCurrencyMutationVariables = Exact<{
  exchangeUID: Scalars['uuid'];
  symbol: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
}>;


export type CreateExchangePrimaryCurrencyMutation = { __typename?: 'mutation_root', insert_kc_exchange_primary_currency_one?: { __typename?: 'kc_exchange_primary_currency', exchange_uid: string, symbol: string } | null | undefined };

export type CreateExchangeSecondaryCurrencyMutationVariables = Exact<{
  exchangeUID: Scalars['uuid'];
  symbol: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
}>;


export type CreateExchangeSecondaryCurrencyMutation = { __typename?: 'mutation_root', insert_kc_exchange_secondary_currency_one?: { __typename?: 'kc_exchange_secondary_currency', exchange_uid: string, symbol: string } | null | undefined };

export type GetUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserListQuery = { __typename?: 'query_root', kc_user: Array<{ __typename?: 'kc_user', uid: string, email_hash: string, email_verified: boolean }> };

export type QueryUserEmailQueryVariables = Exact<{
  userUID: Scalars['uuid'];
}>;


export type QueryUserEmailQuery = { __typename?: 'query_root', query_user_email?: { __typename?: 'QueryUserEmailOutput', email: string } | null | undefined };


export const CreateCurrencyDocument = gql`
    mutation createCurrency($name: String!, $symbol: String!, $createdAt: timestamptz!, $updatedAt: timestamptz!) {
  insert_kc_currency_one(
    object: {name: $name, symbol: $symbol, created_at: $createdAt, updated_at: $updatedAt}
  ) {
    symbol
    name
  }
}
    `;
export type CreateCurrencyMutationFn = Apollo.MutationFunction<CreateCurrencyMutation, CreateCurrencyMutationVariables>;
export type CreateCurrencyMutationResult = Apollo.MutationResult<CreateCurrencyMutation>;
export type CreateCurrencyMutationOptions = Apollo.BaseMutationOptions<CreateCurrencyMutation, CreateCurrencyMutationVariables>;
export const GetCurrencyListDocument = gql`
    query getCurrencyList {
  kc_currency {
    created_at
    updated_at
    symbol
    name
  }
}
    `;
export type GetCurrencyListQueryResult = Apollo.QueryResult<GetCurrencyListQuery, GetCurrencyListQueryVariables>;
export const GetExchangeListDocument = gql`
    query getExchangeList {
  kc_exchange {
    created_at
    updated_at
    uid
    id
    name
    url
    primary_currencies {
      symbol
    }
    secondary_currencies {
      symbol
    }
  }
}
    `;
export type GetExchangeListQueryResult = Apollo.QueryResult<GetExchangeListQuery, GetExchangeListQueryVariables>;
export const CreateExchangePrimaryCurrencyDocument = gql`
    mutation createExchangePrimaryCurrency($exchangeUID: uuid!, $symbol: String!, $createdAt: timestamptz!, $updatedAt: timestamptz!) {
  insert_kc_exchange_primary_currency_one(
    object: {exchange_uid: $exchangeUID, symbol: $symbol, created_at: $createdAt, updated_at: $updatedAt}
  ) {
    exchange_uid
    symbol
  }
}
    `;
export type CreateExchangePrimaryCurrencyMutationFn = Apollo.MutationFunction<CreateExchangePrimaryCurrencyMutation, CreateExchangePrimaryCurrencyMutationVariables>;
export type CreateExchangePrimaryCurrencyMutationResult = Apollo.MutationResult<CreateExchangePrimaryCurrencyMutation>;
export type CreateExchangePrimaryCurrencyMutationOptions = Apollo.BaseMutationOptions<CreateExchangePrimaryCurrencyMutation, CreateExchangePrimaryCurrencyMutationVariables>;
export const CreateExchangeSecondaryCurrencyDocument = gql`
    mutation createExchangeSecondaryCurrency($exchangeUID: uuid!, $symbol: String!, $createdAt: timestamptz!, $updatedAt: timestamptz!) {
  insert_kc_exchange_secondary_currency_one(
    object: {exchange_uid: $exchangeUID, symbol: $symbol, created_at: $createdAt, updated_at: $updatedAt}
  ) {
    exchange_uid
    symbol
  }
}
    `;
export type CreateExchangeSecondaryCurrencyMutationFn = Apollo.MutationFunction<CreateExchangeSecondaryCurrencyMutation, CreateExchangeSecondaryCurrencyMutationVariables>;
export type CreateExchangeSecondaryCurrencyMutationResult = Apollo.MutationResult<CreateExchangeSecondaryCurrencyMutation>;
export type CreateExchangeSecondaryCurrencyMutationOptions = Apollo.BaseMutationOptions<CreateExchangeSecondaryCurrencyMutation, CreateExchangeSecondaryCurrencyMutationVariables>;
export const GetUserListDocument = gql`
    query getUserList {
  kc_user {
    uid
    email_hash
    email_verified
  }
}
    `;
export type GetUserListQueryResult = Apollo.QueryResult<GetUserListQuery, GetUserListQueryVariables>;
export const QueryUserEmailDocument = gql`
    query queryUserEmail($userUID: uuid!) {
  query_user_email(user_uid: $userUID) {
    email
  }
}
    `;
export type QueryUserEmailQueryResult = Apollo.QueryResult<QueryUserEmailQuery, QueryUserEmailQueryVariables>;