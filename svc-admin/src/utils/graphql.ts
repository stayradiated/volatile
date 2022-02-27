import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

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
  bpchar: string
  jsonb: unknown
  numeric: number
  smallint: number
  timestamp: string
  timestamptz: string
  uuid: string
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

export type CancelSubscriptionOutput = {
  __typename?: 'CancelSubscriptionOutput'
  subscription: Scalars['jsonb']
}

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput'
  auth_token: Scalars['String']
  expires_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['String']
}

export type CreateDcaOrderResult = {
  __typename?: 'CreateDCAOrderResult'
  /** An object relationship */
  dca_order: Kc_Dca_Order
  dca_order_uid: Scalars['uuid']
}

export type CreateSubscription = {
  __typename?: 'CreateSubscription'
  client_secret: Scalars['String']
  subscription_id: Scalars['String']
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

export type DeleteUser2FaOutput = {
  __typename?: 'DeleteUser2FAOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput'
  user_uid: Scalars['uuid']
}

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

export type PriceOutput = {
  __typename?: 'PriceOutput'
  currency: Scalars['String']
  id: Scalars['String']
  interval?: Maybe<Scalars['String']>
  interval_count?: Maybe<Scalars['Int']>
  type: Scalars['String']
  unit_amount: Scalars['Int']
}

export type QueryStripeConfigOutput = {
  __typename?: 'QueryStripeConfigOutput'
  publishable_key: Scalars['String']
}

export type QuerySubscriptionsOutput = {
  __typename?: 'QuerySubscriptionsOutput'
  subscriptions?: Maybe<Array<Maybe<Scalars['jsonb']>>>
}

export type QueryUserEmailOutput = {
  __typename?: 'QueryUserEmailOutput'
  email: Scalars['String']
  user_uid: Scalars['uuid']
}

export type QueryUserLimitOutput = {
  __typename?: 'QueryUserLimitOutput'
  user_limit: Scalars['jsonb']
  user_uid: Scalars['String']
}

export type RefreshAuthTokenOutput = {
  __typename?: 'RefreshAuthTokenOutput'
  auth_token: Scalars['String']
  expires_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['String']
}

export type ResetUserPasswordOutput = {
  __typename?: 'ResetUserPasswordOutput'
  auth_token: Scalars['String']
  expires_at: Scalars['timestamptz']
  user_uid: Scalars['uuid']
}

export type SendUserEmailVerifyOutput = {
  __typename?: 'SendUserEmailVerifyOutput'
  user_uid: Scalars['uuid']
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
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** Does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** Does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
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

export type SyncCurrencyFxOutput = {
  __typename?: 'SyncCurrencyFxOutput'
  insert_count: Scalars['Int']
}

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

export type UpdateDcaOrderOutput = {
  __typename?: 'UpdateDCAOrderOutput'
  /** An object relationship */
  dca_order: Kc_Dca_Order
  dca_order_uid: Scalars['uuid']
}

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput'
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys
  user_exchange_keys_uid: Scalars['uuid']
}

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput'
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

export type ValidatUserPasswordResetOutput = {
  __typename?: 'ValidatUserPasswordResetOutput'
  email?: Maybe<Scalars['String']>
  is_valid: Scalars['Boolean']
}

export type ValidateUserExchangeKeysLiveOutput = {
  __typename?: 'ValidateUserExchangeKeysLiveOutput'
  is_valid: Scalars['Boolean']
  validation_message?: Maybe<Scalars['String']>
}

export type ValidateUserExchangeKeysOutput = {
  __typename?: 'ValidateUserExchangeKeysOutput'
  is_valid: Scalars['Boolean']
  /** An object relationship */
  user_exchange_keys: Kc_User_Exchange_Keys
  user_exchange_keys_uid: Scalars['uuid']
  validation_message?: Maybe<Scalars['String']>
}

export type VerifyUserEmailOutput = {
  __typename?: 'VerifyUserEmailOutput'
  email: Scalars['String']
}

export type Available_Balance_Fx_Kc_Balance_Args = {
  currency?: InputMaybe<Scalars['String']>
}

export type Balance_Kc_User_Exchange_Keys_Args = {
  timestamp_at?: InputMaybe<Scalars['timestamptz']>
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>
  _gt?: InputMaybe<Scalars['bpchar']>
  _gte?: InputMaybe<Scalars['bpchar']>
  /** Does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>
  _in?: InputMaybe<Array<Scalars['bpchar']>>
  /** Does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>
  _is_null?: InputMaybe<Scalars['Boolean']>
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

export type Fee_Fx_Kc_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>
}

/** Columns and relationships of "kc.balance" */
export type Kc_Balance = {
  __typename?: 'kc_balance'
  available_balance: Scalars['numeric']
  /** A computed field, executes function "kc.balance_available_balance_fx" */
  available_balance_fx?: Maybe<Scalars['numeric']>
  created_at: Scalars['timestamptz']
  /** An object relationship */
  currency: Kc_Currency
  currency_symbol: Scalars['String']
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  total_balance: Scalars['numeric']
  /** A computed field, executes function "kc.balance_total_balance_fx" */
  total_balance_fx?: Maybe<Scalars['numeric']>
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  /** An object relationship */
  user_exchange_key: Kc_User_Exchange_Keys
  user_exchange_keys_uid: Scalars['uuid']
  user_uid: Scalars['uuid']
}

/** Columns and relationships of "kc.balance" */
export type Kc_BalanceAvailable_Balance_FxArgs = {
  args: Available_Balance_Fx_Kc_Balance_Args
}

/** Columns and relationships of "kc.balance" */
export type Kc_BalanceTotal_Balance_FxArgs = {
  args: Total_Balance_Fx_Kc_Balance_Args
}

/** Aggregated selection of "kc.balance" */
export type Kc_Balance_Aggregate = {
  __typename?: 'kc_balance_aggregate'
  aggregate?: Maybe<Kc_Balance_Aggregate_Fields>
  nodes: Kc_Balance[]
}

/** Aggregate fields of "kc.balance" */
export type Kc_Balance_Aggregate_Fields = {
  __typename?: 'kc_balance_aggregate_fields'
  avg?: Maybe<Kc_Balance_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Balance_Max_Fields>
  min?: Maybe<Kc_Balance_Min_Fields>
  stddev?: Maybe<Kc_Balance_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Balance_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Balance_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Balance_Sum_Fields>
  var_pop?: Maybe<Kc_Balance_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Balance_Var_Samp_Fields>
  variance?: Maybe<Kc_Balance_Variance_Fields>
}

/** Aggregate fields of "kc.balance" */
export type Kc_Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Balance_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Aggregate avg on columns */
export type Kc_Balance_Avg_Fields = {
  __typename?: 'kc_balance_avg_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "kc.balance". All fields are combined with a logical 'AND'. */
export type Kc_Balance_Bool_Exp = {
  _and?: InputMaybe<Kc_Balance_Bool_Exp[]>
  _not?: InputMaybe<Kc_Balance_Bool_Exp>
  _or?: InputMaybe<Kc_Balance_Bool_Exp[]>
  available_balance?: InputMaybe<Numeric_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  currency?: InputMaybe<Kc_Currency_Bool_Exp>
  currency_symbol?: InputMaybe<String_Comparison_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  total_balance?: InputMaybe<Numeric_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_exchange_key?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.balance" */
export enum Kc_Balance_Constraint {
  /** Unique or primary key constraint */
  BalancePkey = 'balance_pkey',
}

/** Input type for incrementing numeric columns in table "kc.balance" */
export type Kc_Balance_Inc_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>
  total_balance?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.balance" */
export type Kc_Balance_Insert_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  currency_symbol?: InputMaybe<Scalars['String']>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  total_balance?: InputMaybe<Scalars['numeric']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_exchange_key?: InputMaybe<Kc_User_Exchange_Keys_Obj_Rel_Insert_Input>
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_Balance_Max_Fields = {
  __typename?: 'kc_balance_max_fields'
  available_balance?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_symbol?: Maybe<Scalars['String']>
  exchange_uid?: Maybe<Scalars['uuid']>
  total_balance?: Maybe<Scalars['numeric']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Aggregate min on columns */
export type Kc_Balance_Min_Fields = {
  __typename?: 'kc_balance_min_fields'
  available_balance?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  currency_symbol?: Maybe<Scalars['String']>
  exchange_uid?: Maybe<Scalars['uuid']>
  total_balance?: Maybe<Scalars['numeric']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Response of any mutation on the table "kc.balance" */
export type Kc_Balance_Mutation_Response = {
  __typename?: 'kc_balance_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Balance[]
}

/** On conflict condition type for table "kc.balance" */
export type Kc_Balance_On_Conflict = {
  constraint: Kc_Balance_Constraint
  update_columns?: Kc_Balance_Update_Column[]
  where?: InputMaybe<Kc_Balance_Bool_Exp>
}

/** Ordering options when selecting data from "kc.balance". */
export type Kc_Balance_Order_By = {
  available_balance?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  currency?: InputMaybe<Kc_Currency_Order_By>
  currency_symbol?: InputMaybe<Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  total_balance?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_exchange_key?: InputMaybe<Kc_User_Exchange_Keys_Order_By>
  user_exchange_keys_uid?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_balance */
export type Kc_Balance_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.balance" */
export enum Kc_Balance_Select_Column {
  /** Column name */
  AvailableBalance = 'available_balance',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  CurrencySymbol = 'currency_symbol',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  TotalBalance = 'total_balance',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.balance" */
export type Kc_Balance_Set_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  currency_symbol?: InputMaybe<Scalars['String']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  total_balance?: InputMaybe<Scalars['numeric']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate stddev on columns */
export type Kc_Balance_Stddev_Fields = {
  __typename?: 'kc_balance_stddev_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_pop on columns */
export type Kc_Balance_Stddev_Pop_Fields = {
  __typename?: 'kc_balance_stddev_pop_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_samp on columns */
export type Kc_Balance_Stddev_Samp_Fields = {
  __typename?: 'kc_balance_stddev_samp_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Aggregate sum on columns */
export type Kc_Balance_Sum_Fields = {
  __typename?: 'kc_balance_sum_fields'
  available_balance?: Maybe<Scalars['numeric']>
  total_balance?: Maybe<Scalars['numeric']>
}

/** Update columns of table "kc.balance" */
export enum Kc_Balance_Update_Column {
  /** Column name */
  AvailableBalance = 'available_balance',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  CurrencySymbol = 'currency_symbol',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  TotalBalance = 'total_balance',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserExchangeKeysUid = 'user_exchange_keys_uid',
  /** Column name */
  UserUid = 'user_uid',
}

/** Aggregate var_pop on columns */
export type Kc_Balance_Var_Pop_Fields = {
  __typename?: 'kc_balance_var_pop_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Aggregate var_samp on columns */
export type Kc_Balance_Var_Samp_Fields = {
  __typename?: 'kc_balance_var_samp_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Aggregate variance on columns */
export type Kc_Balance_Variance_Fields = {
  __typename?: 'kc_balance_variance_fields'
  available_balance?: Maybe<Scalars['Float']>
  total_balance?: Maybe<Scalars['Float']>
}

/** Columns and relationships of "kc.currency" */
export type Kc_Currency = {
  __typename?: 'kc_currency'
  created_at: Scalars['timestamptz']
  name: Scalars['String']
  symbol: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** Aggregated selection of "kc.currency" */
export type Kc_Currency_Aggregate = {
  __typename?: 'kc_currency_aggregate'
  aggregate?: Maybe<Kc_Currency_Aggregate_Fields>
  nodes: Kc_Currency[]
}

/** Aggregate fields of "kc.currency" */
export type Kc_Currency_Aggregate_Fields = {
  __typename?: 'kc_currency_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_Currency_Max_Fields>
  min?: Maybe<Kc_Currency_Min_Fields>
}

/** Aggregate fields of "kc.currency" */
export type Kc_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Currency_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "kc.currency". All fields are combined with a logical 'AND'. */
export type Kc_Currency_Bool_Exp = {
  _and?: InputMaybe<Kc_Currency_Bool_Exp[]>
  _not?: InputMaybe<Kc_Currency_Bool_Exp>
  _or?: InputMaybe<Kc_Currency_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  symbol?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.currency" */
export enum Kc_Currency_Constraint {
  /** Unique or primary key constraint */
  AssetPkey = 'asset_pkey',
}

/** Input type for inserting data into table "kc.currency" */
export type Kc_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Aggregate max on columns */
export type Kc_Currency_Max_Fields = {
  __typename?: 'kc_currency_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Aggregate min on columns */
export type Kc_Currency_Min_Fields = {
  __typename?: 'kc_currency_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Response of any mutation on the table "kc.currency" */
export type Kc_Currency_Mutation_Response = {
  __typename?: 'kc_currency_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Currency[]
}

/** Input type for inserting object relation for remote table "kc.currency" */
export type Kc_Currency_Obj_Rel_Insert_Input = {
  data: Kc_Currency_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Currency_On_Conflict>
}

/** On conflict condition type for table "kc.currency" */
export type Kc_Currency_On_Conflict = {
  constraint: Kc_Currency_Constraint
  update_columns?: Kc_Currency_Update_Column[]
  where?: InputMaybe<Kc_Currency_Bool_Exp>
}

/** Ordering options when selecting data from "kc.currency". */
export type Kc_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_currency */
export type Kc_Currency_Pk_Columns_Input = {
  symbol: Scalars['String']
}

/** Select columns of table "kc.currency" */
export enum Kc_Currency_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Name = 'name',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Input type for updating data in table "kc.currency" */
export type Kc_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Update columns of table "kc.currency" */
export enum Kc_Currency_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Name = 'name',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_Order = {
  __typename?: 'kc_dca_order'
  created_at: Scalars['timestamptz']
  daily_average: Scalars['numeric']
  /** An array relationship */
  dca_order_histories: Kc_Dca_Order_History[]
  /** An aggregate relationship */
  dca_order_histories_aggregate: Kc_Dca_Order_History_Aggregate
  enabled_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  exchange: Kc_Exchange
  /** A computed field, executes function "kc.dca_order_market_trading_pair" */
  exchange_market_trading_pair?: Maybe<Kc_Market_Trading_Pair[]>
  exchange_uid: Scalars['uuid']
  interval_ms: Scalars['Int']
  last_run_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  market: Kc_Market
  market_offset: Scalars['numeric']
  /** An array relationship */
  market_prices: Kc_Market_Price[]
  /** An aggregate relationship */
  market_prices_aggregate: Kc_Market_Price_Aggregate
  market_uid: Scalars['uuid']
  max_price?: Maybe<Scalars['numeric']>
  max_value?: Maybe<Scalars['numeric']>
  min_price?: Maybe<Scalars['numeric']>
  min_value?: Maybe<Scalars['numeric']>
  next_run_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  primary_currency: Kc_Currency
  primary_currency_symbol: Scalars['String']
  /** An object relationship */
  secondary_currency: Kc_Currency
  secondary_currency_symbol: Scalars['String']
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
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderExchange_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Kc_Market_Trading_Pair_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Trading_Pair_Order_By[]>
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderMarket_PricesArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

/** Columns and relationships of "kc.dca_order" */
export type Kc_Dca_OrderMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
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
  columns?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.dca_order" */
export type Kc_Dca_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Dca_Order_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Dca_Order_Max_Order_By>
  min?: InputMaybe<Kc_Dca_Order_Min_Order_By>
  stddev?: InputMaybe<Kc_Dca_Order_Stddev_Order_By>
  stddev_pop?: InputMaybe<Kc_Dca_Order_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Kc_Dca_Order_Stddev_Samp_Order_By>
  sum?: InputMaybe<Kc_Dca_Order_Sum_Order_By>
  var_pop?: InputMaybe<Kc_Dca_Order_Var_Pop_Order_By>
  var_samp?: InputMaybe<Kc_Dca_Order_Var_Samp_Order_By>
  variance?: InputMaybe<Kc_Dca_Order_Variance_Order_By>
}

/** Input type for inserting array relation for remote table "kc.dca_order" */
export type Kc_Dca_Order_Arr_Rel_Insert_Input = {
  data: Kc_Dca_Order_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>
}

/** Aggregate avg on columns */
export type Kc_Dca_Order_Avg_Fields = {
  __typename?: 'kc_dca_order_avg_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Avg_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.dca_order". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_Bool_Exp = {
  _and?: InputMaybe<Kc_Dca_Order_Bool_Exp[]>
  _not?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  _or?: InputMaybe<Kc_Dca_Order_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  daily_average?: InputMaybe<Numeric_Comparison_Exp>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
  enabled_at?: InputMaybe<Timestamptz_Comparison_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_market_trading_pair?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  interval_ms?: InputMaybe<Int_Comparison_Exp>
  last_run_at?: InputMaybe<Timestamptz_Comparison_Exp>
  market?: InputMaybe<Kc_Market_Bool_Exp>
  market_offset?: InputMaybe<Numeric_Comparison_Exp>
  market_prices?: InputMaybe<Kc_Market_Price_Bool_Exp>
  market_uid?: InputMaybe<Uuid_Comparison_Exp>
  max_price?: InputMaybe<Numeric_Comparison_Exp>
  max_value?: InputMaybe<Numeric_Comparison_Exp>
  min_price?: InputMaybe<Numeric_Comparison_Exp>
  min_value?: InputMaybe<Numeric_Comparison_Exp>
  next_run_at?: InputMaybe<Timestamptz_Comparison_Exp>
  primary_currency?: InputMaybe<Kc_Currency_Bool_Exp>
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>
  secondary_currency?: InputMaybe<Kc_Currency_Bool_Exp>
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
  user_exchange_keys_uid?: InputMaybe<Uuid_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.dca_order" */
export enum Kc_Dca_Order_Constraint {
  /** Unique or primary key constraint */
  DcaOrderPkey = 'dca_order_pkey',
}

/** Columns and relationships of "kc.dca_order_history" */
export type Kc_Dca_Order_History = {
  __typename?: 'kc_dca_order_history'
  available_balance: Scalars['numeric']
  created_at: Scalars['timestamptz']
  created_order: Scalars['Boolean']
  /** An object relationship */
  dca_order: Kc_Dca_Order
  dca_order_uid: Scalars['uuid']
  description: Scalars['String']
  market_offset: Scalars['numeric']
  market_price: Scalars['numeric']
  /** An object relationship */
  order?: Maybe<Kc_Order>
  order_uid?: Maybe<Scalars['uuid']>
  primary_currency: Scalars['String']
  secondary_currency: Scalars['String']
  target_value: Scalars['numeric']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
  value: Scalars['numeric']
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
  columns?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Dca_Order_History_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Dca_Order_History_Max_Order_By>
  min?: InputMaybe<Kc_Dca_Order_History_Min_Order_By>
  stddev?: InputMaybe<Kc_Dca_Order_History_Stddev_Order_By>
  stddev_pop?: InputMaybe<Kc_Dca_Order_History_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Kc_Dca_Order_History_Stddev_Samp_Order_By>
  sum?: InputMaybe<Kc_Dca_Order_History_Sum_Order_By>
  var_pop?: InputMaybe<Kc_Dca_Order_History_Var_Pop_Order_By>
  var_samp?: InputMaybe<Kc_Dca_Order_History_Var_Samp_Order_By>
  variance?: InputMaybe<Kc_Dca_Order_History_Variance_Order_By>
}

/** Input type for inserting array relation for remote table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Arr_Rel_Insert_Input = {
  data: Kc_Dca_Order_History_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Dca_Order_History_On_Conflict>
}

/** Aggregate avg on columns */
export type Kc_Dca_Order_History_Avg_Fields = {
  __typename?: 'kc_dca_order_history_avg_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Avg_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.dca_order_history". All fields are combined with a logical 'AND'. */
export type Kc_Dca_Order_History_Bool_Exp = {
  _and?: InputMaybe<Kc_Dca_Order_History_Bool_Exp[]>
  _not?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
  _or?: InputMaybe<Kc_Dca_Order_History_Bool_Exp[]>
  available_balance?: InputMaybe<Numeric_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  created_order?: InputMaybe<Boolean_Comparison_Exp>
  dca_order?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  dca_order_uid?: InputMaybe<Uuid_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  market_offset?: InputMaybe<Numeric_Comparison_Exp>
  market_price?: InputMaybe<Numeric_Comparison_Exp>
  order?: InputMaybe<Kc_Order_Bool_Exp>
  order_uid?: InputMaybe<Uuid_Comparison_Exp>
  primary_currency?: InputMaybe<String_Comparison_Exp>
  secondary_currency?: InputMaybe<String_Comparison_Exp>
  target_value?: InputMaybe<Numeric_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Constraint {
  /** Unique or primary key constraint */
  DcaOrderHistoryPkey = 'dca_order_history_pkey',
  /** Unique or primary key constraint */
  UniqueDcaOrder = 'unique_dca_order',
}

/** Input type for incrementing numeric columns in table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Inc_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>
  market_offset?: InputMaybe<Scalars['numeric']>
  market_price?: InputMaybe<Scalars['numeric']>
  target_value?: InputMaybe<Scalars['numeric']>
  value?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Insert_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  created_order?: InputMaybe<Scalars['Boolean']>
  dca_order?: InputMaybe<Kc_Dca_Order_Obj_Rel_Insert_Input>
  dca_order_uid?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  market_offset?: InputMaybe<Scalars['numeric']>
  market_price?: InputMaybe<Scalars['numeric']>
  order?: InputMaybe<Kc_Order_Obj_Rel_Insert_Input>
  order_uid?: InputMaybe<Scalars['uuid']>
  primary_currency?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Scalars['String']>
  target_value?: InputMaybe<Scalars['numeric']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type Kc_Dca_Order_History_Max_Fields = {
  __typename?: 'kc_dca_order_history_max_fields'
  available_balance?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  dca_order_uid?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  market_offset?: Maybe<Scalars['numeric']>
  market_price?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  primary_currency?: Maybe<Scalars['String']>
  secondary_currency?: Maybe<Scalars['String']>
  target_value?: Maybe<Scalars['numeric']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
}

/** Order by max() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Max_Order_By = {
  available_balance?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  dca_order_uid?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  order_uid?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Dca_Order_History_Min_Fields = {
  __typename?: 'kc_dca_order_history_min_fields'
  available_balance?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  dca_order_uid?: Maybe<Scalars['uuid']>
  description?: Maybe<Scalars['String']>
  market_offset?: Maybe<Scalars['numeric']>
  market_price?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  primary_currency?: Maybe<Scalars['String']>
  secondary_currency?: Maybe<Scalars['String']>
  target_value?: Maybe<Scalars['numeric']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
}

/** Order by min() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Min_Order_By = {
  available_balance?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  dca_order_uid?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  order_uid?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Mutation_Response = {
  __typename?: 'kc_dca_order_history_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Dca_Order_History[]
}

/** On conflict condition type for table "kc.dca_order_history" */
export type Kc_Dca_Order_History_On_Conflict = {
  constraint: Kc_Dca_Order_History_Constraint
  update_columns?: Kc_Dca_Order_History_Update_Column[]
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Ordering options when selecting data from "kc.dca_order_history". */
export type Kc_Dca_Order_History_Order_By = {
  available_balance?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  created_order?: InputMaybe<Order_By>
  dca_order?: InputMaybe<Kc_Dca_Order_Order_By>
  dca_order_uid?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  order?: InputMaybe<Kc_Order_Order_By>
  order_uid?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_dca_order_history */
export type Kc_Dca_Order_History_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Select_Column {
  /** Column name */
  AvailableBalance = 'available_balance',
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
  MarketPrice = 'market_price',
  /** Column name */
  OrderUid = 'order_uid',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  SecondaryCurrency = 'secondary_currency',
  /** Column name */
  TargetValue = 'target_value',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
  /** Column name */
  Value = 'value',
}

/** Input type for updating data in table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Set_Input = {
  available_balance?: InputMaybe<Scalars['numeric']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  created_order?: InputMaybe<Scalars['Boolean']>
  dca_order_uid?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  market_offset?: InputMaybe<Scalars['numeric']>
  market_price?: InputMaybe<Scalars['numeric']>
  order_uid?: InputMaybe<Scalars['uuid']>
  primary_currency?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Scalars['String']>
  target_value?: InputMaybe<Scalars['numeric']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
}

/** Aggregate stddev on columns */
export type Kc_Dca_Order_History_Stddev_Fields = {
  __typename?: 'kc_dca_order_history_stddev_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Dca_Order_History_Stddev_Pop_Fields = {
  __typename?: 'kc_dca_order_history_stddev_pop_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Pop_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Dca_Order_History_Stddev_Samp_Fields = {
  __typename?: 'kc_dca_order_history_stddev_samp_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Stddev_Samp_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Dca_Order_History_Sum_Fields = {
  __typename?: 'kc_dca_order_history_sum_fields'
  available_balance?: Maybe<Scalars['numeric']>
  market_offset?: Maybe<Scalars['numeric']>
  market_price?: Maybe<Scalars['numeric']>
  target_value?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Sum_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Update columns of table "kc.dca_order_history" */
export enum Kc_Dca_Order_History_Update_Column {
  /** Column name */
  AvailableBalance = 'available_balance',
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
  MarketPrice = 'market_price',
  /** Column name */
  OrderUid = 'order_uid',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  SecondaryCurrency = 'secondary_currency',
  /** Column name */
  TargetValue = 'target_value',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
  /** Column name */
  Value = 'value',
}

/** Aggregate var_pop on columns */
export type Kc_Dca_Order_History_Var_Pop_Fields = {
  __typename?: 'kc_dca_order_history_var_pop_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Var_Pop_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Dca_Order_History_Var_Samp_Fields = {
  __typename?: 'kc_dca_order_history_var_samp_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Var_Samp_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Dca_Order_History_Variance_Fields = {
  __typename?: 'kc_dca_order_history_variance_fields'
  available_balance?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  market_price?: Maybe<Scalars['Float']>
  target_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.dca_order_history" */
export type Kc_Dca_Order_History_Variance_Order_By = {
  available_balance?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_price?: InputMaybe<Order_By>
  target_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Input type for incrementing numeric columns in table "kc.dca_order" */
export type Kc_Dca_Order_Inc_Input = {
  daily_average?: InputMaybe<Scalars['numeric']>
  interval_ms?: InputMaybe<Scalars['Int']>
  market_offset?: InputMaybe<Scalars['numeric']>
  max_price?: InputMaybe<Scalars['numeric']>
  max_value?: InputMaybe<Scalars['numeric']>
  min_price?: InputMaybe<Scalars['numeric']>
  min_value?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.dca_order" */
export type Kc_Dca_Order_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  daily_average?: InputMaybe<Scalars['numeric']>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Arr_Rel_Insert_Input>
  enabled_at?: InputMaybe<Scalars['timestamptz']>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  interval_ms?: InputMaybe<Scalars['Int']>
  last_run_at?: InputMaybe<Scalars['timestamptz']>
  market?: InputMaybe<Kc_Market_Obj_Rel_Insert_Input>
  market_offset?: InputMaybe<Scalars['numeric']>
  market_prices?: InputMaybe<Kc_Market_Price_Arr_Rel_Insert_Input>
  market_uid?: InputMaybe<Scalars['uuid']>
  max_price?: InputMaybe<Scalars['numeric']>
  max_value?: InputMaybe<Scalars['numeric']>
  min_price?: InputMaybe<Scalars['numeric']>
  min_value?: InputMaybe<Scalars['numeric']>
  next_run_at?: InputMaybe<Scalars['timestamptz']>
  primary_currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  primary_currency_symbol?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  secondary_currency_symbol?: InputMaybe<Scalars['String']>
  start_at?: InputMaybe<Scalars['timestamptz']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Obj_Rel_Insert_Input>
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_Dca_Order_Max_Fields = {
  __typename?: 'kc_dca_order_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  daily_average?: Maybe<Scalars['numeric']>
  enabled_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  interval_ms?: Maybe<Scalars['Int']>
  last_run_at?: Maybe<Scalars['timestamptz']>
  market_offset?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  max_price?: Maybe<Scalars['numeric']>
  max_value?: Maybe<Scalars['numeric']>
  min_price?: Maybe<Scalars['numeric']>
  min_value?: Maybe<Scalars['numeric']>
  next_run_at?: Maybe<Scalars['timestamptz']>
  primary_currency_symbol?: Maybe<Scalars['String']>
  secondary_currency_symbol?: Maybe<Scalars['String']>
  start_at?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  daily_average?: InputMaybe<Order_By>
  enabled_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  last_run_at?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_uid?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
  next_run_at?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
  start_at?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_exchange_keys_uid?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Dca_Order_Min_Fields = {
  __typename?: 'kc_dca_order_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  daily_average?: Maybe<Scalars['numeric']>
  enabled_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  interval_ms?: Maybe<Scalars['Int']>
  last_run_at?: Maybe<Scalars['timestamptz']>
  market_offset?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  max_price?: Maybe<Scalars['numeric']>
  max_value?: Maybe<Scalars['numeric']>
  min_price?: Maybe<Scalars['numeric']>
  min_value?: Maybe<Scalars['numeric']>
  next_run_at?: Maybe<Scalars['timestamptz']>
  primary_currency_symbol?: Maybe<Scalars['String']>
  secondary_currency_symbol?: Maybe<Scalars['String']>
  start_at?: Maybe<Scalars['timestamptz']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: Maybe<Scalars['uuid']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  daily_average?: InputMaybe<Order_By>
  enabled_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  last_run_at?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  market_uid?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
  next_run_at?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
  start_at?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_exchange_keys_uid?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.dca_order" */
export type Kc_Dca_Order_Mutation_Response = {
  __typename?: 'kc_dca_order_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Dca_Order[]
}

/** Input type for inserting object relation for remote table "kc.dca_order" */
export type Kc_Dca_Order_Obj_Rel_Insert_Input = {
  data: Kc_Dca_Order_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>
}

/** On conflict condition type for table "kc.dca_order" */
export type Kc_Dca_Order_On_Conflict = {
  constraint: Kc_Dca_Order_Constraint
  update_columns?: Kc_Dca_Order_Update_Column[]
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Ordering options when selecting data from "kc.dca_order". */
export type Kc_Dca_Order_Order_By = {
  created_at?: InputMaybe<Order_By>
  daily_average?: InputMaybe<Order_By>
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>
  enabled_at?: InputMaybe<Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_market_trading_pair_aggregate?: InputMaybe<Kc_Market_Trading_Pair_Aggregate_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  last_run_at?: InputMaybe<Order_By>
  market?: InputMaybe<Kc_Market_Order_By>
  market_offset?: InputMaybe<Order_By>
  market_prices_aggregate?: InputMaybe<Kc_Market_Price_Aggregate_Order_By>
  market_uid?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
  next_run_at?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Kc_Currency_Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Kc_Currency_Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
  start_at?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Order_By>
  user_exchange_keys_uid?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_dca_order */
export type Kc_Dca_Order_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.dca_order" */
export enum Kc_Dca_Order_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  DailyAverage = 'daily_average',
  /** Column name */
  EnabledAt = 'enabled_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  IntervalMs = 'interval_ms',
  /** Column name */
  LastRunAt = 'last_run_at',
  /** Column name */
  MarketOffset = 'market_offset',
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  MaxPrice = 'max_price',
  /** Column name */
  MaxValue = 'max_value',
  /** Column name */
  MinPrice = 'min_price',
  /** Column name */
  MinValue = 'min_value',
  /** Column name */
  NextRunAt = 'next_run_at',
  /** Column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** Column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol',
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
  created_at?: InputMaybe<Scalars['timestamptz']>
  daily_average?: InputMaybe<Scalars['numeric']>
  enabled_at?: InputMaybe<Scalars['timestamptz']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  interval_ms?: InputMaybe<Scalars['Int']>
  last_run_at?: InputMaybe<Scalars['timestamptz']>
  market_offset?: InputMaybe<Scalars['numeric']>
  market_uid?: InputMaybe<Scalars['uuid']>
  max_price?: InputMaybe<Scalars['numeric']>
  max_value?: InputMaybe<Scalars['numeric']>
  min_price?: InputMaybe<Scalars['numeric']>
  min_value?: InputMaybe<Scalars['numeric']>
  next_run_at?: InputMaybe<Scalars['timestamptz']>
  primary_currency_symbol?: InputMaybe<Scalars['String']>
  secondary_currency_symbol?: InputMaybe<Scalars['String']>
  start_at?: InputMaybe<Scalars['timestamptz']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate stddev on columns */
export type Kc_Dca_Order_Stddev_Fields = {
  __typename?: 'kc_dca_order_stddev_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Dca_Order_Stddev_Pop_Fields = {
  __typename?: 'kc_dca_order_stddev_pop_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Pop_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Dca_Order_Stddev_Samp_Fields = {
  __typename?: 'kc_dca_order_stddev_samp_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Stddev_Samp_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Dca_Order_Sum_Fields = {
  __typename?: 'kc_dca_order_sum_fields'
  daily_average?: Maybe<Scalars['numeric']>
  interval_ms?: Maybe<Scalars['Int']>
  market_offset?: Maybe<Scalars['numeric']>
  max_price?: Maybe<Scalars['numeric']>
  max_value?: Maybe<Scalars['numeric']>
  min_price?: Maybe<Scalars['numeric']>
  min_value?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Sum_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Update columns of table "kc.dca_order" */
export enum Kc_Dca_Order_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  DailyAverage = 'daily_average',
  /** Column name */
  EnabledAt = 'enabled_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  IntervalMs = 'interval_ms',
  /** Column name */
  LastRunAt = 'last_run_at',
  /** Column name */
  MarketOffset = 'market_offset',
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  MaxPrice = 'max_price',
  /** Column name */
  MaxValue = 'max_value',
  /** Column name */
  MinPrice = 'min_price',
  /** Column name */
  MinValue = 'min_value',
  /** Column name */
  NextRunAt = 'next_run_at',
  /** Column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** Column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol',
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

/** Aggregate var_pop on columns */
export type Kc_Dca_Order_Var_Pop_Fields = {
  __typename?: 'kc_dca_order_var_pop_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Var_Pop_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Dca_Order_Var_Samp_Fields = {
  __typename?: 'kc_dca_order_var_samp_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Var_Samp_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Dca_Order_Variance_Fields = {
  __typename?: 'kc_dca_order_variance_fields'
  daily_average?: Maybe<Scalars['Float']>
  interval_ms?: Maybe<Scalars['Float']>
  market_offset?: Maybe<Scalars['Float']>
  max_price?: Maybe<Scalars['Float']>
  max_value?: Maybe<Scalars['Float']>
  min_price?: Maybe<Scalars['Float']>
  min_value?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.dca_order" */
export type Kc_Dca_Order_Variance_Order_By = {
  daily_average?: InputMaybe<Order_By>
  interval_ms?: InputMaybe<Order_By>
  market_offset?: InputMaybe<Order_By>
  max_price?: InputMaybe<Order_By>
  max_value?: InputMaybe<Order_By>
  min_price?: InputMaybe<Order_By>
  min_value?: InputMaybe<Order_By>
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
  market_uid?: Maybe<Scalars['uuid']>
  name: Scalars['String']
  /** An array relationship */
  orders: Kc_Order[]
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate
  /** An array relationship */
  primary_currencies: Kc_Exchange_Primary_Currency[]
  /** An aggregate relationship */
  primary_currencies_aggregate: Kc_Exchange_Primary_Currency_Aggregate
  /** An array relationship */
  secondary_currencies: Kc_Exchange_Secondary_Currency[]
  /** An aggregate relationship */
  secondary_currencies_aggregate: Kc_Exchange_Secondary_Currency_Aggregate
  /** An array relationship */
  trades: Kc_Trade[]
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  url: Scalars['String']
  /** An array relationship */
  user_exchange_keys: Kc_User_Exchange_Keys[]
  /** An aggregate relationship */
  user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_OrdersArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrdersArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangePrimary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Primary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangePrimary_Currencies_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Primary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeSecondary_CurrenciesArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Secondary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeSecondary_Currencies_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Secondary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeTradesArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.exchange" */
export type Kc_ExchangeUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Aggregated selection of "kc.exchange" */
export type Kc_Exchange_Aggregate = {
  __typename?: 'kc_exchange_aggregate'
  aggregate?: Maybe<Kc_Exchange_Aggregate_Fields>
  nodes: Kc_Exchange[]
}

/** Aggregate fields of "kc.exchange" */
export type Kc_Exchange_Aggregate_Fields = {
  __typename?: 'kc_exchange_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_Exchange_Max_Fields>
  min?: Maybe<Kc_Exchange_Min_Fields>
}

/** Aggregate fields of "kc.exchange" */
export type Kc_Exchange_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Exchange_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "kc.exchange". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Bool_Exp = {
  _and?: InputMaybe<Kc_Exchange_Bool_Exp[]>
  _not?: InputMaybe<Kc_Exchange_Bool_Exp>
  _or?: InputMaybe<Kc_Exchange_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  market_uid?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  orders?: InputMaybe<Kc_Order_Bool_Exp>
  primary_currencies?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
  secondary_currencies?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
  trades?: InputMaybe<Kc_Trade_Bool_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  url?: InputMaybe<String_Comparison_Exp>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Unique or primary key constraints on table "kc.exchange" */
export enum Kc_Exchange_Constraint {
  /** Unique or primary key constraint */
  ExchangePkey = 'exchange_pkey',
  /** Unique or primary key constraint */
  UniqueExchangeId = 'unique_exchange_id',
}

/** Input type for inserting data into table "kc.exchange" */
export type Kc_Exchange_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['String']>
  market_uid?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  orders?: InputMaybe<Kc_Order_Arr_Rel_Insert_Input>
  primary_currencies?: InputMaybe<Kc_Exchange_Primary_Currency_Arr_Rel_Insert_Input>
  secondary_currencies?: InputMaybe<Kc_Exchange_Secondary_Currency_Arr_Rel_Insert_Input>
  trades?: InputMaybe<Kc_Trade_Arr_Rel_Insert_Input>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  url?: InputMaybe<Scalars['String']>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Arr_Rel_Insert_Input>
}

/** Aggregate max on columns */
export type Kc_Exchange_Max_Fields = {
  __typename?: 'kc_exchange_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  market_uid?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** Aggregate min on columns */
export type Kc_Exchange_Min_Fields = {
  __typename?: 'kc_exchange_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  market_uid?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** Response of any mutation on the table "kc.exchange" */
export type Kc_Exchange_Mutation_Response = {
  __typename?: 'kc_exchange_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Exchange[]
}

/** Input type for inserting object relation for remote table "kc.exchange" */
export type Kc_Exchange_Obj_Rel_Insert_Input = {
  data: Kc_Exchange_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Exchange_On_Conflict>
}

/** On conflict condition type for table "kc.exchange" */
export type Kc_Exchange_On_Conflict = {
  constraint: Kc_Exchange_Constraint
  update_columns?: Kc_Exchange_Update_Column[]
  where?: InputMaybe<Kc_Exchange_Bool_Exp>
}

/** Ordering options when selecting data from "kc.exchange". */
export type Kc_Exchange_Order_By = {
  created_at?: InputMaybe<Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  market_uid?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Kc_Order_Aggregate_Order_By>
  primary_currencies_aggregate?: InputMaybe<Kc_Exchange_Primary_Currency_Aggregate_Order_By>
  secondary_currencies_aggregate?: InputMaybe<Kc_Exchange_Secondary_Currency_Aggregate_Order_By>
  trades_aggregate?: InputMaybe<Kc_Trade_Aggregate_Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  url?: InputMaybe<Order_By>
  user_exchange_keys_aggregate?: InputMaybe<Kc_User_Exchange_Keys_Aggregate_Order_By>
}

/** Primary key columns input for table: kc_exchange */
export type Kc_Exchange_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Columns and relationships of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency = {
  __typename?: 'kc_exchange_primary_currency'
  created_at: Scalars['timestamptz']
  /** An object relationship */
  currency: Kc_Currency
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** Aggregated selection of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate = {
  __typename?: 'kc_exchange_primary_currency_aggregate'
  aggregate?: Maybe<Kc_Exchange_Primary_Currency_Aggregate_Fields>
  nodes: Kc_Exchange_Primary_Currency[]
}

/** Aggregate fields of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_Fields = {
  __typename?: 'kc_exchange_primary_currency_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_Exchange_Primary_Currency_Max_Fields>
  min?: Maybe<Kc_Exchange_Primary_Currency_Min_Fields>
}

/** Aggregate fields of "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Exchange_Primary_Currency_Max_Order_By>
  min?: InputMaybe<Kc_Exchange_Primary_Currency_Min_Order_By>
}

/** Input type for inserting array relation for remote table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Arr_Rel_Insert_Input = {
  data: Kc_Exchange_Primary_Currency_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Exchange_Primary_Currency_On_Conflict>
}

/** Boolean expression to filter rows from the table "kc.exchange_primary_currency". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Primary_Currency_Bool_Exp = {
  _and?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp[]>
  _not?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
  _or?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  currency?: InputMaybe<Kc_Currency_Bool_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  symbol?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.exchange_primary_currency" */
export enum Kc_Exchange_Primary_Currency_Constraint {
  /** Unique or primary key constraint */
  ExchangeAssetPkey = 'exchange_asset_pkey',
}

/** Input type for inserting data into table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  symbol?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Aggregate max on columns */
export type Kc_Exchange_Primary_Currency_Max_Fields = {
  __typename?: 'kc_exchange_primary_currency_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Order by max() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Exchange_Primary_Currency_Min_Fields = {
  __typename?: 'kc_exchange_primary_currency_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Order by min() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Mutation_Response = {
  __typename?: 'kc_exchange_primary_currency_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Exchange_Primary_Currency[]
}

/** On conflict condition type for table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_On_Conflict = {
  constraint: Kc_Exchange_Primary_Currency_Constraint
  update_columns?: Kc_Exchange_Primary_Currency_Update_Column[]
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

/** Ordering options when selecting data from "kc.exchange_primary_currency". */
export type Kc_Exchange_Primary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>
  currency?: InputMaybe<Kc_Currency_Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_exchange_primary_currency */
export type Kc_Exchange_Primary_Currency_Pk_Columns_Input = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

/** Select columns of table "kc.exchange_primary_currency" */
export enum Kc_Exchange_Primary_Currency_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Input type for updating data in table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  symbol?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Update columns of table "kc.exchange_primary_currency" */
export enum Kc_Exchange_Primary_Currency_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Columns and relationships of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency = {
  __typename?: 'kc_exchange_secondary_currency'
  created_at: Scalars['timestamptz']
  /** An object relationship */
  currency: Kc_Currency
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** Aggregated selection of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate = {
  __typename?: 'kc_exchange_secondary_currency_aggregate'
  aggregate?: Maybe<Kc_Exchange_Secondary_Currency_Aggregate_Fields>
  nodes: Kc_Exchange_Secondary_Currency[]
}

/** Aggregate fields of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_Fields = {
  __typename?: 'kc_exchange_secondary_currency_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_Exchange_Secondary_Currency_Max_Fields>
  min?: Maybe<Kc_Exchange_Secondary_Currency_Min_Fields>
}

/** Aggregate fields of "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Exchange_Secondary_Currency_Max_Order_By>
  min?: InputMaybe<Kc_Exchange_Secondary_Currency_Min_Order_By>
}

/** Input type for inserting array relation for remote table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Arr_Rel_Insert_Input = {
  data: Kc_Exchange_Secondary_Currency_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Exchange_Secondary_Currency_On_Conflict>
}

/** Boolean expression to filter rows from the table "kc.exchange_secondary_currency". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Secondary_Currency_Bool_Exp = {
  _and?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp[]>
  _not?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
  _or?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  currency?: InputMaybe<Kc_Currency_Bool_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  symbol?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.exchange_secondary_currency" */
export enum Kc_Exchange_Secondary_Currency_Constraint {
  /** Unique or primary key constraint */
  ExchangeSecondaryCurrencyPkey = 'exchange_secondary_currency_pkey',
}

/** Input type for inserting data into table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  symbol?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Aggregate max on columns */
export type Kc_Exchange_Secondary_Currency_Max_Fields = {
  __typename?: 'kc_exchange_secondary_currency_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Order by max() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Exchange_Secondary_Currency_Min_Fields = {
  __typename?: 'kc_exchange_secondary_currency_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Order by min() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Mutation_Response = {
  __typename?: 'kc_exchange_secondary_currency_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Exchange_Secondary_Currency[]
}

/** On conflict condition type for table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_On_Conflict = {
  constraint: Kc_Exchange_Secondary_Currency_Constraint
  update_columns?: Kc_Exchange_Secondary_Currency_Update_Column[]
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

/** Ordering options when selecting data from "kc.exchange_secondary_currency". */
export type Kc_Exchange_Secondary_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>
  currency?: InputMaybe<Kc_Currency_Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_exchange_secondary_currency */
export type Kc_Exchange_Secondary_Currency_Pk_Columns_Input = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

/** Select columns of table "kc.exchange_secondary_currency" */
export enum Kc_Exchange_Secondary_Currency_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Input type for updating data in table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  symbol?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Update columns of table "kc.exchange_secondary_currency" */
export enum Kc_Exchange_Secondary_Currency_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  Symbol = 'symbol',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Select columns of table "kc.exchange" */
export enum Kc_Exchange_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Id = 'id',
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  Url = 'url',
}

/** Input type for updating data in table "kc.exchange" */
export type Kc_Exchange_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['String']>
  market_uid?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  url?: InputMaybe<Scalars['String']>
}

/** Update columns of table "kc.exchange" */
export enum Kc_Exchange_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Id = 'id',
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  Name = 'name',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  Url = 'url',
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
  /** An aggregate relationship */
  market_prices_aggregate: Kc_Market_Price_Aggregate
  name: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketDca_OrdersArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketMarket_PricesArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

/** Columns and relationships of "kc.market" */
export type Kc_MarketMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

/** Aggregated selection of "kc.market" */
export type Kc_Market_Aggregate = {
  __typename?: 'kc_market_aggregate'
  aggregate?: Maybe<Kc_Market_Aggregate_Fields>
  nodes: Kc_Market[]
}

/** Aggregate fields of "kc.market" */
export type Kc_Market_Aggregate_Fields = {
  __typename?: 'kc_market_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_Market_Max_Fields>
  min?: Maybe<Kc_Market_Min_Fields>
}

/** Aggregate fields of "kc.market" */
export type Kc_Market_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Market_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "kc.market". All fields are combined with a logical 'AND'. */
export type Kc_Market_Bool_Exp = {
  _and?: InputMaybe<Kc_Market_Bool_Exp[]>
  _not?: InputMaybe<Kc_Market_Bool_Exp>
  _or?: InputMaybe<Kc_Market_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  market_prices?: InputMaybe<Kc_Market_Price_Bool_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.market" */
export enum Kc_Market_Constraint {
  /** Unique or primary key constraint */
  MarketPkey = 'market_pkey',
  /** Unique or primary key constraint */
  UniqueMarketId = 'unique_market_id',
}

/** Input type for inserting data into table "kc.market" */
export type Kc_Market_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['String']>
  market_prices?: InputMaybe<Kc_Market_Price_Arr_Rel_Insert_Input>
  name?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Aggregate max on columns */
export type Kc_Market_Max_Fields = {
  __typename?: 'kc_market_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Aggregate min on columns */
export type Kc_Market_Min_Fields = {
  __typename?: 'kc_market_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Response of any mutation on the table "kc.market" */
export type Kc_Market_Mutation_Response = {
  __typename?: 'kc_market_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Market[]
}

/** Input type for inserting object relation for remote table "kc.market" */
export type Kc_Market_Obj_Rel_Insert_Input = {
  data: Kc_Market_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Market_On_Conflict>
}

/** On conflict condition type for table "kc.market" */
export type Kc_Market_On_Conflict = {
  constraint: Kc_Market_Constraint
  update_columns?: Kc_Market_Update_Column[]
  where?: InputMaybe<Kc_Market_Bool_Exp>
}

/** Ordering options when selecting data from "kc.market". */
export type Kc_Market_Order_By = {
  created_at?: InputMaybe<Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  market_prices_aggregate?: InputMaybe<Kc_Market_Price_Aggregate_Order_By>
  name?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_market */
export type Kc_Market_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Columns and relationships of "kc.market_price" */
export type Kc_Market_Price = {
  __typename?: 'kc_market_price'
  asset_symbol: Scalars['String']
  currency: Scalars['String']
  fx_rate: Scalars['numeric']
  /** An object relationship */
  market: Kc_Market
  market_uid: Scalars['uuid']
  price: Scalars['numeric']
  source_currency: Scalars['bpchar']
  source_price: Scalars['numeric']
  timestamp: Scalars['timestamptz']
}

/** Aggregated selection of "kc.market_price" */
export type Kc_Market_Price_Aggregate = {
  __typename?: 'kc_market_price_aggregate'
  aggregate?: Maybe<Kc_Market_Price_Aggregate_Fields>
  nodes: Kc_Market_Price[]
}

/** Aggregate fields of "kc.market_price" */
export type Kc_Market_Price_Aggregate_Fields = {
  __typename?: 'kc_market_price_aggregate_fields'
  avg?: Maybe<Kc_Market_Price_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Market_Price_Max_Fields>
  min?: Maybe<Kc_Market_Price_Min_Fields>
  stddev?: Maybe<Kc_Market_Price_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Market_Price_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Market_Price_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Market_Price_Sum_Fields>
  var_pop?: Maybe<Kc_Market_Price_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Market_Price_Var_Samp_Fields>
  variance?: Maybe<Kc_Market_Price_Variance_Fields>
}

/** Aggregate fields of "kc.market_price" */
export type Kc_Market_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Market_Price_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.market_price" */
export type Kc_Market_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Market_Price_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Market_Price_Max_Order_By>
  min?: InputMaybe<Kc_Market_Price_Min_Order_By>
  stddev?: InputMaybe<Kc_Market_Price_Stddev_Order_By>
  stddev_pop?: InputMaybe<Kc_Market_Price_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Kc_Market_Price_Stddev_Samp_Order_By>
  sum?: InputMaybe<Kc_Market_Price_Sum_Order_By>
  var_pop?: InputMaybe<Kc_Market_Price_Var_Pop_Order_By>
  var_samp?: InputMaybe<Kc_Market_Price_Var_Samp_Order_By>
  variance?: InputMaybe<Kc_Market_Price_Variance_Order_By>
}

/** Input type for inserting array relation for remote table "kc.market_price" */
export type Kc_Market_Price_Arr_Rel_Insert_Input = {
  data: Kc_Market_Price_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Market_Price_On_Conflict>
}

/** Aggregate avg on columns */
export type Kc_Market_Price_Avg_Fields = {
  __typename?: 'kc_market_price_avg_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.market_price" */
export type Kc_Market_Price_Avg_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.market_price". All fields are combined with a logical 'AND'. */
export type Kc_Market_Price_Bool_Exp = {
  _and?: InputMaybe<Kc_Market_Price_Bool_Exp[]>
  _not?: InputMaybe<Kc_Market_Price_Bool_Exp>
  _or?: InputMaybe<Kc_Market_Price_Bool_Exp[]>
  asset_symbol?: InputMaybe<String_Comparison_Exp>
  currency?: InputMaybe<String_Comparison_Exp>
  fx_rate?: InputMaybe<Numeric_Comparison_Exp>
  market?: InputMaybe<Kc_Market_Bool_Exp>
  market_uid?: InputMaybe<Uuid_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  source_currency?: InputMaybe<Bpchar_Comparison_Exp>
  source_price?: InputMaybe<Numeric_Comparison_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.market_price" */
export enum Kc_Market_Price_Constraint {
  /** Unique or primary key constraint */
  MarketPricePkey = 'market_price_pkey',
}

/** Input type for incrementing numeric columns in table "kc.market_price" */
export type Kc_Market_Price_Inc_Input = {
  fx_rate?: InputMaybe<Scalars['numeric']>
  price?: InputMaybe<Scalars['numeric']>
  source_price?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.market_price" */
export type Kc_Market_Price_Insert_Input = {
  asset_symbol?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  fx_rate?: InputMaybe<Scalars['numeric']>
  market?: InputMaybe<Kc_Market_Obj_Rel_Insert_Input>
  market_uid?: InputMaybe<Scalars['uuid']>
  price?: InputMaybe<Scalars['numeric']>
  source_currency?: InputMaybe<Scalars['bpchar']>
  source_price?: InputMaybe<Scalars['numeric']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
}

export type Kc_Market_Price_Latest_Args = {
  asset_symbol?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  market_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_Market_Price_Max_Fields = {
  __typename?: 'kc_market_price_max_fields'
  asset_symbol?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  fx_rate?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  price?: Maybe<Scalars['numeric']>
  source_currency?: Maybe<Scalars['bpchar']>
  source_price?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamptz']>
}

/** Order by max() on columns of table "kc.market_price" */
export type Kc_Market_Price_Max_Order_By = {
  asset_symbol?: InputMaybe<Order_By>
  currency?: InputMaybe<Order_By>
  fx_rate?: InputMaybe<Order_By>
  market_uid?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_currency?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Market_Price_Min_Fields = {
  __typename?: 'kc_market_price_min_fields'
  asset_symbol?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  fx_rate?: Maybe<Scalars['numeric']>
  market_uid?: Maybe<Scalars['uuid']>
  price?: Maybe<Scalars['numeric']>
  source_currency?: Maybe<Scalars['bpchar']>
  source_price?: Maybe<Scalars['numeric']>
  timestamp?: Maybe<Scalars['timestamptz']>
}

/** Order by min() on columns of table "kc.market_price" */
export type Kc_Market_Price_Min_Order_By = {
  asset_symbol?: InputMaybe<Order_By>
  currency?: InputMaybe<Order_By>
  fx_rate?: InputMaybe<Order_By>
  market_uid?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_currency?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.market_price" */
export type Kc_Market_Price_Mutation_Response = {
  __typename?: 'kc_market_price_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Market_Price[]
}

/** On conflict condition type for table "kc.market_price" */
export type Kc_Market_Price_On_Conflict = {
  constraint: Kc_Market_Price_Constraint
  update_columns?: Kc_Market_Price_Update_Column[]
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

/** Ordering options when selecting data from "kc.market_price". */
export type Kc_Market_Price_Order_By = {
  asset_symbol?: InputMaybe<Order_By>
  currency?: InputMaybe<Order_By>
  fx_rate?: InputMaybe<Order_By>
  market?: InputMaybe<Kc_Market_Order_By>
  market_uid?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_currency?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_market_price */
export type Kc_Market_Price_Pk_Columns_Input = {
  asset_symbol: Scalars['String']
  currency: Scalars['String']
  market_uid: Scalars['uuid']
  source_currency: Scalars['bpchar']
  timestamp: Scalars['timestamptz']
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
  SourceCurrency = 'source_currency',
  /** Column name */
  SourcePrice = 'source_price',
  /** Column name */
  Timestamp = 'timestamp',
}

/** Input type for updating data in table "kc.market_price" */
export type Kc_Market_Price_Set_Input = {
  asset_symbol?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  fx_rate?: InputMaybe<Scalars['numeric']>
  market_uid?: InputMaybe<Scalars['uuid']>
  price?: InputMaybe<Scalars['numeric']>
  source_currency?: InputMaybe<Scalars['bpchar']>
  source_price?: InputMaybe<Scalars['numeric']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
}

/** Aggregate stddev on columns */
export type Kc_Market_Price_Stddev_Fields = {
  __typename?: 'kc_market_price_stddev_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Market_Price_Stddev_Pop_Fields = {
  __typename?: 'kc_market_price_stddev_pop_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Market_Price_Stddev_Samp_Fields = {
  __typename?: 'kc_market_price_stddev_samp_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Market_Price_Sum_Fields = {
  __typename?: 'kc_market_price_sum_fields'
  fx_rate?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  source_price?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.market_price" */
export type Kc_Market_Price_Sum_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Update columns of table "kc.market_price" */
export enum Kc_Market_Price_Update_Column {
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
  SourceCurrency = 'source_currency',
  /** Column name */
  SourcePrice = 'source_price',
  /** Column name */
  Timestamp = 'timestamp',
}

/** Aggregate var_pop on columns */
export type Kc_Market_Price_Var_Pop_Fields = {
  __typename?: 'kc_market_price_var_pop_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Market_Price_Var_Samp_Fields = {
  __typename?: 'kc_market_price_var_samp_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Market_Price_Variance_Fields = {
  __typename?: 'kc_market_price_variance_fields'
  fx_rate?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  source_price?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.market_price" */
export type Kc_Market_Price_Variance_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
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

/** Input type for updating data in table "kc.market" */
export type Kc_Market_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Columns and relationships of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair = {
  __typename?: 'kc_market_trading_pair'
  /** An object relationship */
  currency: Kc_Currency
  /** An object relationship */
  currencyBySecondaryCurrencySymbol: Kc_Currency
  /** An object relationship */
  market: Kc_Market
  /** An array relationship */
  market_prices: Kc_Market_Price[]
  /** An aggregate relationship */
  market_prices_aggregate: Kc_Market_Price_Aggregate
  market_uid: Scalars['uuid']
  primary_currency_symbol: Scalars['String']
  secondary_currency_symbol: Scalars['String']
}

/** Columns and relationships of "kc.market_trading_pair" */
export type Kc_Market_Trading_PairMarket_PricesArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

/** Columns and relationships of "kc.market_trading_pair" */
export type Kc_Market_Trading_PairMarket_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

/** Aggregated selection of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate = {
  __typename?: 'kc_market_trading_pair_aggregate'
  aggregate?: Maybe<Kc_Market_Trading_Pair_Aggregate_Fields>
  nodes: Kc_Market_Trading_Pair[]
}

/** Aggregate fields of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate_Fields = {
  __typename?: 'kc_market_trading_pair_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_Market_Trading_Pair_Max_Fields>
  min?: Maybe<Kc_Market_Trading_Pair_Min_Fields>
}

/** Aggregate fields of "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Market_Trading_Pair_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Market_Trading_Pair_Max_Order_By>
  min?: InputMaybe<Kc_Market_Trading_Pair_Min_Order_By>
}

/** Boolean expression to filter rows from the table "kc.market_trading_pair". All fields are combined with a logical 'AND'. */
export type Kc_Market_Trading_Pair_Bool_Exp = {
  _and?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp[]>
  _not?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
  _or?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp[]>
  currency?: InputMaybe<Kc_Currency_Bool_Exp>
  currencyBySecondaryCurrencySymbol?: InputMaybe<Kc_Currency_Bool_Exp>
  market?: InputMaybe<Kc_Market_Bool_Exp>
  market_prices?: InputMaybe<Kc_Market_Price_Bool_Exp>
  market_uid?: InputMaybe<Uuid_Comparison_Exp>
  primary_currency_symbol?: InputMaybe<String_Comparison_Exp>
  secondary_currency_symbol?: InputMaybe<String_Comparison_Exp>
}

/** Input type for inserting data into table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Insert_Input = {
  currency?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  currencyBySecondaryCurrencySymbol?: InputMaybe<Kc_Currency_Obj_Rel_Insert_Input>
  market?: InputMaybe<Kc_Market_Obj_Rel_Insert_Input>
  market_prices?: InputMaybe<Kc_Market_Price_Arr_Rel_Insert_Input>
  market_uid?: InputMaybe<Scalars['uuid']>
  primary_currency_symbol?: InputMaybe<Scalars['String']>
  secondary_currency_symbol?: InputMaybe<Scalars['String']>
}

/** Aggregate max on columns */
export type Kc_Market_Trading_Pair_Max_Fields = {
  __typename?: 'kc_market_trading_pair_max_fields'
  market_uid?: Maybe<Scalars['uuid']>
  primary_currency_symbol?: Maybe<Scalars['String']>
  secondary_currency_symbol?: Maybe<Scalars['String']>
}

/** Order by max() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Max_Order_By = {
  market_uid?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Market_Trading_Pair_Min_Fields = {
  __typename?: 'kc_market_trading_pair_min_fields'
  market_uid?: Maybe<Scalars['uuid']>
  primary_currency_symbol?: Maybe<Scalars['String']>
  secondary_currency_symbol?: Maybe<Scalars['String']>
}

/** Order by min() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Min_Order_By = {
  market_uid?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Mutation_Response = {
  __typename?: 'kc_market_trading_pair_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Market_Trading_Pair[]
}

/** Ordering options when selecting data from "kc.market_trading_pair". */
export type Kc_Market_Trading_Pair_Order_By = {
  currency?: InputMaybe<Kc_Currency_Order_By>
  currencyBySecondaryCurrencySymbol?: InputMaybe<Kc_Currency_Order_By>
  market?: InputMaybe<Kc_Market_Order_By>
  market_prices_aggregate?: InputMaybe<Kc_Market_Price_Aggregate_Order_By>
  market_uid?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
}

/** Select columns of table "kc.market_trading_pair" */
export enum Kc_Market_Trading_Pair_Select_Column {
  /** Column name */
  MarketUid = 'market_uid',
  /** Column name */
  PrimaryCurrencySymbol = 'primary_currency_symbol',
  /** Column name */
  SecondaryCurrencySymbol = 'secondary_currency_symbol',
}

/** Input type for updating data in table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Set_Input = {
  market_uid?: InputMaybe<Scalars['uuid']>
  primary_currency_symbol?: InputMaybe<Scalars['String']>
  secondary_currency_symbol?: InputMaybe<Scalars['String']>
}

/** Update columns of table "kc.market" */
export enum Kc_Market_Update_Column {
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
  price: Scalars['numeric']
  primary_currency: Scalars['String']
  secondary_currency: Scalars['String']
  type: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
  value: Scalars['numeric']
  volume: Scalars['numeric']
}

/** Columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_HistoriesArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.order" */
export type Kc_OrderDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
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
  columns?: InputMaybe<Kc_Order_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.order" */
export type Kc_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Order_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Order_Max_Order_By>
  min?: InputMaybe<Kc_Order_Min_Order_By>
  stddev?: InputMaybe<Kc_Order_Stddev_Order_By>
  stddev_pop?: InputMaybe<Kc_Order_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Kc_Order_Stddev_Samp_Order_By>
  sum?: InputMaybe<Kc_Order_Sum_Order_By>
  var_pop?: InputMaybe<Kc_Order_Var_Pop_Order_By>
  var_samp?: InputMaybe<Kc_Order_Var_Samp_Order_By>
  variance?: InputMaybe<Kc_Order_Variance_Order_By>
}

/** Input type for inserting array relation for remote table "kc.order" */
export type Kc_Order_Arr_Rel_Insert_Input = {
  data: Kc_Order_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>
}

/** Aggregate avg on columns */
export type Kc_Order_Avg_Fields = {
  __typename?: 'kc_order_avg_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.order" */
export type Kc_Order_Avg_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.order". All fields are combined with a logical 'AND'. */
export type Kc_Order_Bool_Exp = {
  _and?: InputMaybe<Kc_Order_Bool_Exp[]>
  _not?: InputMaybe<Kc_Order_Bool_Exp>
  _or?: InputMaybe<Kc_Order_Bool_Exp[]>
  closed_at?: InputMaybe<Timestamptz_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  opened_at?: InputMaybe<Timestamptz_Comparison_Exp>
  order_id?: InputMaybe<String_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  primary_currency?: InputMaybe<String_Comparison_Exp>
  secondary_currency?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
  volume?: InputMaybe<Numeric_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.order" */
export enum Kc_Order_Constraint {
  /** Unique or primary key constraint */
  OrderPkey = 'order_pkey',
  /** Unique or primary key constraint */
  UniqueExchangeOrderId = 'unique_exchange_order_id',
}

/** Input type for incrementing numeric columns in table "kc.order" */
export type Kc_Order_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.order" */
export type Kc_Order_Insert_Input = {
  closed_at?: InputMaybe<Scalars['timestamptz']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Arr_Rel_Insert_Input>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  opened_at?: InputMaybe<Scalars['timestamptz']>
  order_id?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
  primary_currency?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type Kc_Order_Max_Fields = {
  __typename?: 'kc_order_max_fields'
  closed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  opened_at?: Maybe<Scalars['timestamptz']>
  order_id?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  secondary_currency?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by max() on columns of table "kc.order" */
export type Kc_Order_Max_Order_By = {
  closed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  opened_at?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Order_Min_Fields = {
  __typename?: 'kc_order_min_fields'
  closed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  opened_at?: Maybe<Scalars['timestamptz']>
  order_id?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  secondary_currency?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by min() on columns of table "kc.order" */
export type Kc_Order_Min_Order_By = {
  closed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  opened_at?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.order" */
export type Kc_Order_Mutation_Response = {
  __typename?: 'kc_order_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Order[]
}

/** Input type for inserting object relation for remote table "kc.order" */
export type Kc_Order_Obj_Rel_Insert_Input = {
  data: Kc_Order_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>
}

/** On conflict condition type for table "kc.order" */
export type Kc_Order_On_Conflict = {
  constraint: Kc_Order_Constraint
  update_columns?: Kc_Order_Update_Column[]
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

/** Ordering options when selecting data from "kc.order". */
export type Kc_Order_Order_By = {
  closed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  opened_at?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_order */
export type Kc_Order_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.order" */
export enum Kc_Order_Select_Column {
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
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  SecondaryCurrency = 'secondary_currency',
  /** Column name */
  Type = 'type',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Input type for updating data in table "kc.order" */
export type Kc_Order_Set_Input = {
  closed_at?: InputMaybe<Scalars['timestamptz']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  opened_at?: InputMaybe<Scalars['timestamptz']>
  order_id?: InputMaybe<Scalars['String']>
  price?: InputMaybe<Scalars['numeric']>
  primary_currency?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate stddev on columns */
export type Kc_Order_Stddev_Fields = {
  __typename?: 'kc_order_stddev_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.order" */
export type Kc_Order_Stddev_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Order_Stddev_Pop_Fields = {
  __typename?: 'kc_order_stddev_pop_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.order" */
export type Kc_Order_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Order_Stddev_Samp_Fields = {
  __typename?: 'kc_order_stddev_samp_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.order" */
export type Kc_Order_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_Order_Sum_Fields = {
  __typename?: 'kc_order_sum_fields'
  price?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.order" */
export type Kc_Order_Sum_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Update columns of table "kc.order" */
export enum Kc_Order_Update_Column {
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
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  SecondaryCurrency = 'secondary_currency',
  /** Column name */
  Type = 'type',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Aggregate var_pop on columns */
export type Kc_Order_Var_Pop_Fields = {
  __typename?: 'kc_order_var_pop_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.order" */
export type Kc_Order_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Order_Var_Samp_Fields = {
  __typename?: 'kc_order_var_samp_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.order" */
export type Kc_Order_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Order_Variance_Fields = {
  __typename?: 'kc_order_variance_fields'
  price?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.order" */
export type Kc_Order_Variance_Order_By = {
  price?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Columns and relationships of "kc.trade" */
export type Kc_Trade = {
  __typename?: 'kc_trade'
  created_at: Scalars['timestamptz']
  /** An object relationship */
  exchange: Kc_Exchange
  exchange_uid: Scalars['uuid']
  fee: Scalars['numeric']
  /** A computed field, executes function "kc.trade_fee_fx" */
  fee_fx?: Maybe<Scalars['numeric']>
  /** An object relationship */
  order?: Maybe<Kc_Order>
  order_uid?: Maybe<Scalars['uuid']>
  price: Scalars['numeric']
  /** A computed field, executes function "kc.trade_price_fx" */
  price_fx?: Maybe<Scalars['numeric']>
  primary_currency: Scalars['String']
  secondary_currency: Scalars['String']
  timestamp: Scalars['timestamptz']
  total_value: Scalars['numeric']
  /** A computed field, executes function "kc.trade_total_value_fx" */
  total_value_fx?: Maybe<Scalars['numeric']>
  trade_id: Scalars['String']
  type: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
  value: Scalars['numeric']
  /** A computed field, executes function "kc.trade_value_fx" */
  value_fx?: Maybe<Scalars['numeric']>
  volume: Scalars['numeric']
}

/** Columns and relationships of "kc.trade" */
export type Kc_TradeFee_FxArgs = {
  args: Fee_Fx_Kc_Trade_Args
}

/** Columns and relationships of "kc.trade" */
export type Kc_TradePrice_FxArgs = {
  args: Price_Fx_Kc_Trade_Args
}

/** Columns and relationships of "kc.trade" */
export type Kc_TradeTotal_Value_FxArgs = {
  args: Total_Value_Fx_Kc_Trade_Args
}

/** Columns and relationships of "kc.trade" */
export type Kc_TradeValue_FxArgs = {
  args: Value_Fx_Kc_Trade_Args
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
  columns?: InputMaybe<Kc_Trade_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.trade" */
export type Kc_Trade_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_Trade_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Trade_Max_Order_By>
  min?: InputMaybe<Kc_Trade_Min_Order_By>
  stddev?: InputMaybe<Kc_Trade_Stddev_Order_By>
  stddev_pop?: InputMaybe<Kc_Trade_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Kc_Trade_Stddev_Samp_Order_By>
  sum?: InputMaybe<Kc_Trade_Sum_Order_By>
  var_pop?: InputMaybe<Kc_Trade_Var_Pop_Order_By>
  var_samp?: InputMaybe<Kc_Trade_Var_Samp_Order_By>
  variance?: InputMaybe<Kc_Trade_Variance_Order_By>
}

/** Input type for inserting array relation for remote table "kc.trade" */
export type Kc_Trade_Arr_Rel_Insert_Input = {
  data: Kc_Trade_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_Trade_On_Conflict>
}

/** Aggregate avg on columns */
export type Kc_Trade_Avg_Fields = {
  __typename?: 'kc_trade_avg_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.trade" */
export type Kc_Trade_Avg_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

export type Kc_Trade_Avg_Price_By_Window_Args = {
  currency?: InputMaybe<Scalars['String']>
  group_by?: InputMaybe<Scalars['String']>
}

/** Boolean expression to filter rows from the table "kc.trade". All fields are combined with a logical 'AND'. */
export type Kc_Trade_Bool_Exp = {
  _and?: InputMaybe<Kc_Trade_Bool_Exp[]>
  _not?: InputMaybe<Kc_Trade_Bool_Exp>
  _or?: InputMaybe<Kc_Trade_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  fee?: InputMaybe<Numeric_Comparison_Exp>
  order?: InputMaybe<Kc_Order_Bool_Exp>
  order_uid?: InputMaybe<Uuid_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  primary_currency?: InputMaybe<String_Comparison_Exp>
  secondary_currency?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
  total_value?: InputMaybe<Numeric_Comparison_Exp>
  trade_id?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
  volume?: InputMaybe<Numeric_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.trade" */
export enum Kc_Trade_Constraint {
  /** Unique or primary key constraint */
  TradePkey = 'trade_pkey',
  /** Unique or primary key constraint */
  UniqueTradeExchangeTradeId = 'unique_trade_exchange_trade_id',
}

/** Input type for incrementing numeric columns in table "kc.trade" */
export type Kc_Trade_Inc_Input = {
  fee?: InputMaybe<Scalars['numeric']>
  price?: InputMaybe<Scalars['numeric']>
  total_value?: InputMaybe<Scalars['numeric']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.trade" */
export type Kc_Trade_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  fee?: InputMaybe<Scalars['numeric']>
  order?: InputMaybe<Kc_Order_Obj_Rel_Insert_Input>
  order_uid?: InputMaybe<Scalars['uuid']>
  price?: InputMaybe<Scalars['numeric']>
  primary_currency?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
  total_value?: InputMaybe<Scalars['numeric']>
  trade_id?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type Kc_Trade_Max_Fields = {
  __typename?: 'kc_trade_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  fee?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  secondary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  trade_id?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by max() on columns of table "kc.trade" */
export type Kc_Trade_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  fee?: InputMaybe<Order_By>
  order_uid?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  trade_id?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_Trade_Min_Fields = {
  __typename?: 'kc_trade_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  exchange_uid?: Maybe<Scalars['uuid']>
  fee?: Maybe<Scalars['numeric']>
  order_uid?: Maybe<Scalars['uuid']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  secondary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  trade_id?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by min() on columns of table "kc.trade" */
export type Kc_Trade_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  fee?: InputMaybe<Order_By>
  order_uid?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  trade_id?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.trade" */
export type Kc_Trade_Mutation_Response = {
  __typename?: 'kc_trade_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Trade[]
}

/** On conflict condition type for table "kc.trade" */
export type Kc_Trade_On_Conflict = {
  constraint: Kc_Trade_Constraint
  update_columns?: Kc_Trade_Update_Column[]
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

/** Ordering options when selecting data from "kc.trade". */
export type Kc_Trade_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  fee?: InputMaybe<Order_By>
  order?: InputMaybe<Kc_Order_Order_By>
  order_uid?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  secondary_currency?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  trade_id?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_trade */
export type Kc_Trade_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.trade" */
export enum Kc_Trade_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  Fee = 'fee',
  /** Column name */
  OrderUid = 'order_uid',
  /** Column name */
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  SecondaryCurrency = 'secondary_currency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'total_value',
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
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Input type for updating data in table "kc.trade" */
export type Kc_Trade_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  fee?: InputMaybe<Scalars['numeric']>
  order_uid?: InputMaybe<Scalars['uuid']>
  price?: InputMaybe<Scalars['numeric']>
  primary_currency?: InputMaybe<Scalars['String']>
  secondary_currency?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
  total_value?: InputMaybe<Scalars['numeric']>
  trade_id?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate stddev on columns */
export type Kc_Trade_Stddev_Fields = {
  __typename?: 'kc_trade_stddev_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_Trade_Stddev_Pop_Fields = {
  __typename?: 'kc_trade_stddev_pop_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Pop_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_Trade_Stddev_Samp_Fields = {
  __typename?: 'kc_trade_stddev_samp_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.trade" */
export type Kc_Trade_Stddev_Samp_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

export type Kc_Trade_Sum_By_Window_Args = {
  currency?: InputMaybe<Scalars['String']>
  group_by?: InputMaybe<Scalars['String']>
}

/** Aggregate sum on columns */
export type Kc_Trade_Sum_Fields = {
  __typename?: 'kc_trade_sum_fields'
  fee?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  total_value?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Order by sum() on columns of table "kc.trade" */
export type Kc_Trade_Sum_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Update columns of table "kc.trade" */
export enum Kc_Trade_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  Fee = 'fee',
  /** Column name */
  OrderUid = 'order_uid',
  /** Column name */
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  SecondaryCurrency = 'secondary_currency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'total_value',
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
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Aggregate var_pop on columns */
export type Kc_Trade_Var_Pop_Fields = {
  __typename?: 'kc_trade_var_pop_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.trade" */
export type Kc_Trade_Var_Pop_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_Trade_Var_Samp_Fields = {
  __typename?: 'kc_trade_var_samp_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.trade" */
export type Kc_Trade_Var_Samp_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_Trade_Variance_Fields = {
  __typename?: 'kc_trade_variance_fields'
  fee?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.trade" */
export type Kc_Trade_Variance_Order_By = {
  fee?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Columns and relationships of "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window = {
  __typename?: 'kc_type_trade_avg_price_by_window'
  avg_price?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  user_uid?: Maybe<Scalars['uuid']>
  volume?: Maybe<Scalars['numeric']>
}

/** Aggregated selection of "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Aggregate = {
  __typename?: 'kc_type_trade_avg_price_by_window_aggregate'
  aggregate?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Aggregate_Fields>
  nodes: Kc_Type_Trade_Avg_Price_By_Window[]
}

/** Aggregate fields of "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Aggregate_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_aggregate_fields'
  avg?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Max_Fields>
  min?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Min_Fields>
  stddev?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Sum_Fields>
  var_pop?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Var_Samp_Fields>
  variance?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Variance_Fields>
}

/** Aggregate fields of "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Aggregate avg on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Avg_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_avg_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "kc.type_trade_avg_price_by_window". All fields are combined with a logical 'AND'. */
export type Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp = {
  _and?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp[]>
  _not?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
  _or?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp[]>
  avg_price?: InputMaybe<Numeric_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  primary_currency?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
  total_value?: InputMaybe<Numeric_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
  volume?: InputMaybe<Numeric_Comparison_Exp>
}

/** Input type for incrementing numeric columns in table "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Inc_Input = {
  avg_price?: InputMaybe<Scalars['numeric']>
  price?: InputMaybe<Scalars['numeric']>
  total_value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Insert_Input = {
  avg_price?: InputMaybe<Scalars['numeric']>
  price?: InputMaybe<Scalars['numeric']>
  primary_currency?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
  total_value?: InputMaybe<Scalars['numeric']>
  user_uid?: InputMaybe<Scalars['uuid']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Max_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_max_fields'
  avg_price?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  user_uid?: Maybe<Scalars['uuid']>
  volume?: Maybe<Scalars['numeric']>
}

/** Aggregate min on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Min_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_min_fields'
  avg_price?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  primary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  user_uid?: Maybe<Scalars['uuid']>
  volume?: Maybe<Scalars['numeric']>
}

/** Response of any mutation on the table "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Mutation_Response = {
  __typename?: 'kc_type_trade_avg_price_by_window_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Type_Trade_Avg_Price_By_Window[]
}

/** Ordering options when selecting data from "kc.type_trade_avg_price_by_window". */
export type Kc_Type_Trade_Avg_Price_By_Window_Order_By = {
  avg_price?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  primary_currency?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Select columns of table "kc.type_trade_avg_price_by_window" */
export enum Kc_Type_Trade_Avg_Price_By_Window_Select_Column {
  /** Column name */
  AvgPrice = 'avg_price',
  /** Column name */
  Price = 'price',
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'total_value',
  /** Column name */
  UserUid = 'user_uid',
  /** Column name */
  Volume = 'volume',
}

/** Input type for updating data in table "kc.type_trade_avg_price_by_window" */
export type Kc_Type_Trade_Avg_Price_By_Window_Set_Input = {
  avg_price?: InputMaybe<Scalars['numeric']>
  price?: InputMaybe<Scalars['numeric']>
  primary_currency?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
  total_value?: InputMaybe<Scalars['numeric']>
  user_uid?: InputMaybe<Scalars['uuid']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate stddev on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Stddev_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_stddev_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_pop on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Stddev_Pop_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_stddev_pop_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_samp on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Stddev_Samp_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_stddev_samp_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate sum on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Sum_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_sum_fields'
  avg_price?: Maybe<Scalars['numeric']>
  price?: Maybe<Scalars['numeric']>
  total_value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Aggregate var_pop on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Var_Pop_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_var_pop_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate var_samp on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Var_Samp_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_var_samp_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate variance on columns */
export type Kc_Type_Trade_Avg_Price_By_Window_Variance_Fields = {
  __typename?: 'kc_type_trade_avg_price_by_window_variance_fields'
  avg_price?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  total_value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Columns and relationships of "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window = {
  __typename?: 'kc_type_trade_sum_by_window'
  primary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Aggregated selection of "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Aggregate = {
  __typename?: 'kc_type_trade_sum_by_window_aggregate'
  aggregate?: Maybe<Kc_Type_Trade_Sum_By_Window_Aggregate_Fields>
  nodes: Kc_Type_Trade_Sum_By_Window[]
}

/** Aggregate fields of "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Aggregate_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_aggregate_fields'
  avg?: Maybe<Kc_Type_Trade_Sum_By_Window_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_Type_Trade_Sum_By_Window_Max_Fields>
  min?: Maybe<Kc_Type_Trade_Sum_By_Window_Min_Fields>
  stddev?: Maybe<Kc_Type_Trade_Sum_By_Window_Stddev_Fields>
  stddev_pop?: Maybe<Kc_Type_Trade_Sum_By_Window_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_Type_Trade_Sum_By_Window_Stddev_Samp_Fields>
  sum?: Maybe<Kc_Type_Trade_Sum_By_Window_Sum_Fields>
  var_pop?: Maybe<Kc_Type_Trade_Sum_By_Window_Var_Pop_Fields>
  var_samp?: Maybe<Kc_Type_Trade_Sum_By_Window_Var_Samp_Fields>
  variance?: Maybe<Kc_Type_Trade_Sum_By_Window_Variance_Fields>
}

/** Aggregate fields of "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Aggregate avg on columns */
export type Kc_Type_Trade_Sum_By_Window_Avg_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_avg_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "kc.type_trade_sum_by_window". All fields are combined with a logical 'AND'. */
export type Kc_Type_Trade_Sum_By_Window_Bool_Exp = {
  _and?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp[]>
  _not?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
  _or?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp[]>
  primary_currency?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
  total_value?: InputMaybe<Numeric_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
  volume?: InputMaybe<Numeric_Comparison_Exp>
}

/** Input type for incrementing numeric columns in table "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Inc_Input = {
  total_value?: InputMaybe<Scalars['numeric']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Input type for inserting data into table "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Insert_Input = {
  primary_currency?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
  total_value?: InputMaybe<Scalars['numeric']>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate max on columns */
export type Kc_Type_Trade_Sum_By_Window_Max_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_max_fields'
  primary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Aggregate min on columns */
export type Kc_Type_Trade_Sum_By_Window_Min_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_min_fields'
  primary_currency?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['timestamptz']>
  total_value?: Maybe<Scalars['numeric']>
  user_uid?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Response of any mutation on the table "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Mutation_Response = {
  __typename?: 'kc_type_trade_sum_by_window_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_Type_Trade_Sum_By_Window[]
}

/** Ordering options when selecting data from "kc.type_trade_sum_by_window". */
export type Kc_Type_Trade_Sum_By_Window_Order_By = {
  primary_currency?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_value?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
  volume?: InputMaybe<Order_By>
}

/** Select columns of table "kc.type_trade_sum_by_window" */
export enum Kc_Type_Trade_Sum_By_Window_Select_Column {
  /** Column name */
  PrimaryCurrency = 'primary_currency',
  /** Column name */
  Timestamp = 'timestamp',
  /** Column name */
  TotalValue = 'total_value',
  /** Column name */
  UserUid = 'user_uid',
  /** Column name */
  Value = 'value',
  /** Column name */
  Volume = 'volume',
}

/** Input type for updating data in table "kc.type_trade_sum_by_window" */
export type Kc_Type_Trade_Sum_By_Window_Set_Input = {
  primary_currency?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['timestamptz']>
  total_value?: InputMaybe<Scalars['numeric']>
  user_uid?: InputMaybe<Scalars['uuid']>
  value?: InputMaybe<Scalars['numeric']>
  volume?: InputMaybe<Scalars['numeric']>
}

/** Aggregate stddev on columns */
export type Kc_Type_Trade_Sum_By_Window_Stddev_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_stddev_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_pop on columns */
export type Kc_Type_Trade_Sum_By_Window_Stddev_Pop_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_stddev_pop_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_samp on columns */
export type Kc_Type_Trade_Sum_By_Window_Stddev_Samp_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_stddev_samp_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate sum on columns */
export type Kc_Type_Trade_Sum_By_Window_Sum_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_sum_fields'
  total_value?: Maybe<Scalars['numeric']>
  value?: Maybe<Scalars['numeric']>
  volume?: Maybe<Scalars['numeric']>
}

/** Aggregate var_pop on columns */
export type Kc_Type_Trade_Sum_By_Window_Var_Pop_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_var_pop_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate var_samp on columns */
export type Kc_Type_Trade_Sum_By_Window_Var_Samp_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_var_samp_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
}

/** Aggregate variance on columns */
export type Kc_Type_Trade_Sum_By_Window_Variance_Fields = {
  __typename?: 'kc_type_trade_sum_by_window_variance_fields'
  total_value?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
  volume?: Maybe<Scalars['Float']>
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
  email_encrypted: Scalars['String']
  email_hash: Scalars['String']
  email_keyring_id: Scalars['smallint']
  email_verified: Scalars['Boolean']
  /** An array relationship */
  orders: Kc_Order[]
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate
  password_hash: Scalars['String']
  /** An array relationship */
  trades: Kc_Trade[]
  /** An aggregate relationship */
  trades_aggregate: Kc_Trade_Aggregate
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user_2fa?: Maybe<Kc_User_2fa>
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
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_Order_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_OrdersArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserOrdersArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserTradesArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_DevicesArgs = {
  distinct_on?: InputMaybe<Kc_User_Device_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Device_Order_By[]>
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Device_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Device_Order_By[]>
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.user" */
export type Kc_UserUser_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Columns and relationships of "kc.user_2fa" */
export type Kc_User_2fa = {
  __typename?: 'kc_user_2fa'
  created_at: Scalars['timestamptz']
  name: Scalars['String']
  secret_encrypted: Scalars['String']
  secret_keyring_id: Scalars['smallint']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Aggregated selection of "kc.user_2fa" */
export type Kc_User_2fa_Aggregate = {
  __typename?: 'kc_user_2fa_aggregate'
  aggregate?: Maybe<Kc_User_2fa_Aggregate_Fields>
  nodes: Kc_User_2fa[]
}

/** Aggregate fields of "kc.user_2fa" */
export type Kc_User_2fa_Aggregate_Fields = {
  __typename?: 'kc_user_2fa_aggregate_fields'
  avg?: Maybe<Kc_User_2fa_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_User_2fa_Max_Fields>
  min?: Maybe<Kc_User_2fa_Min_Fields>
  stddev?: Maybe<Kc_User_2fa_Stddev_Fields>
  stddev_pop?: Maybe<Kc_User_2fa_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_User_2fa_Stddev_Samp_Fields>
  sum?: Maybe<Kc_User_2fa_Sum_Fields>
  var_pop?: Maybe<Kc_User_2fa_Var_Pop_Fields>
  var_samp?: Maybe<Kc_User_2fa_Var_Samp_Fields>
  variance?: Maybe<Kc_User_2fa_Variance_Fields>
}

/** Aggregate fields of "kc.user_2fa" */
export type Kc_User_2fa_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_User_2fa_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Aggregate avg on columns */
export type Kc_User_2fa_Avg_Fields = {
  __typename?: 'kc_user_2fa_avg_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "kc.user_2fa". All fields are combined with a logical 'AND'. */
export type Kc_User_2fa_Bool_Exp = {
  _and?: InputMaybe<Kc_User_2fa_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_2fa_Bool_Exp>
  _or?: InputMaybe<Kc_User_2fa_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  secret_encrypted?: InputMaybe<String_Comparison_Exp>
  secret_keyring_id?: InputMaybe<Smallint_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.user_2fa" */
export enum Kc_User_2fa_Constraint {
  /** Unique or primary key constraint */
  UniqueUser_2faUserUid = 'unique_user_2fa_user_uid',
  /** Unique or primary key constraint */
  User_2faPkey = 'user_2fa_pkey',
}

/** Input type for incrementing numeric columns in table "kc.user_2fa" */
export type Kc_User_2fa_Inc_Input = {
  secret_keyring_id?: InputMaybe<Scalars['smallint']>
}

/** Input type for inserting data into table "kc.user_2fa" */
export type Kc_User_2fa_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  secret_encrypted?: InputMaybe<Scalars['String']>
  secret_keyring_id?: InputMaybe<Scalars['smallint']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_User_2fa_Max_Fields = {
  __typename?: 'kc_user_2fa_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  secret_encrypted?: Maybe<Scalars['String']>
  secret_keyring_id?: Maybe<Scalars['smallint']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Aggregate min on columns */
export type Kc_User_2fa_Min_Fields = {
  __typename?: 'kc_user_2fa_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  secret_encrypted?: Maybe<Scalars['String']>
  secret_keyring_id?: Maybe<Scalars['smallint']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Response of any mutation on the table "kc.user_2fa" */
export type Kc_User_2fa_Mutation_Response = {
  __typename?: 'kc_user_2fa_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_2fa[]
}

/** Input type for inserting object relation for remote table "kc.user_2fa" */
export type Kc_User_2fa_Obj_Rel_Insert_Input = {
  data: Kc_User_2fa_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_User_2fa_On_Conflict>
}

/** On conflict condition type for table "kc.user_2fa" */
export type Kc_User_2fa_On_Conflict = {
  constraint: Kc_User_2fa_Constraint
  update_columns?: Kc_User_2fa_Update_Column[]
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>
}

/** Ordering options when selecting data from "kc.user_2fa". */
export type Kc_User_2fa_Order_By = {
  created_at?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  secret_encrypted?: InputMaybe<Order_By>
  secret_keyring_id?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_user_2fa */
export type Kc_User_2fa_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.user_2fa" */
export enum Kc_User_2fa_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Name = 'name',
  /** Column name */
  SecretEncrypted = 'secret_encrypted',
  /** Column name */
  SecretKeyringId = 'secret_keyring_id',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.user_2fa" */
export type Kc_User_2fa_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  secret_encrypted?: InputMaybe<Scalars['String']>
  secret_keyring_id?: InputMaybe<Scalars['smallint']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate stddev on columns */
export type Kc_User_2fa_Stddev_Fields = {
  __typename?: 'kc_user_2fa_stddev_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_pop on columns */
export type Kc_User_2fa_Stddev_Pop_Fields = {
  __typename?: 'kc_user_2fa_stddev_pop_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_samp on columns */
export type Kc_User_2fa_Stddev_Samp_Fields = {
  __typename?: 'kc_user_2fa_stddev_samp_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate sum on columns */
export type Kc_User_2fa_Sum_Fields = {
  __typename?: 'kc_user_2fa_sum_fields'
  secret_keyring_id?: Maybe<Scalars['smallint']>
}

/** Update columns of table "kc.user_2fa" */
export enum Kc_User_2fa_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Name = 'name',
  /** Column name */
  SecretEncrypted = 'secret_encrypted',
  /** Column name */
  SecretKeyringId = 'secret_keyring_id',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Aggregate var_pop on columns */
export type Kc_User_2fa_Var_Pop_Fields = {
  __typename?: 'kc_user_2fa_var_pop_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate var_samp on columns */
export type Kc_User_2fa_Var_Samp_Fields = {
  __typename?: 'kc_user_2fa_var_samp_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate variance on columns */
export type Kc_User_2fa_Variance_Fields = {
  __typename?: 'kc_user_2fa_variance_fields'
  secret_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregated selection of "kc.user" */
export type Kc_User_Aggregate = {
  __typename?: 'kc_user_aggregate'
  aggregate?: Maybe<Kc_User_Aggregate_Fields>
  nodes: Kc_User[]
}

/** Aggregate fields of "kc.user" */
export type Kc_User_Aggregate_Fields = {
  __typename?: 'kc_user_aggregate_fields'
  avg?: Maybe<Kc_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_User_Max_Fields>
  min?: Maybe<Kc_User_Min_Fields>
  stddev?: Maybe<Kc_User_Stddev_Fields>
  stddev_pop?: Maybe<Kc_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_User_Stddev_Samp_Fields>
  sum?: Maybe<Kc_User_Sum_Fields>
  var_pop?: Maybe<Kc_User_Var_Pop_Fields>
  var_samp?: Maybe<Kc_User_Var_Samp_Fields>
  variance?: Maybe<Kc_User_Variance_Fields>
}

/** Aggregate fields of "kc.user" */
export type Kc_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_User_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Aggregate avg on columns */
export type Kc_User_Avg_Fields = {
  __typename?: 'kc_user_avg_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "kc.user". All fields are combined with a logical 'AND'. */
export type Kc_User_Bool_Exp = {
  _and?: InputMaybe<Kc_User_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Bool_Exp>
  _or?: InputMaybe<Kc_User_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  email_encrypted?: InputMaybe<String_Comparison_Exp>
  email_hash?: InputMaybe<String_Comparison_Exp>
  email_keyring_id?: InputMaybe<Smallint_Comparison_Exp>
  email_verified?: InputMaybe<Boolean_Comparison_Exp>
  orders?: InputMaybe<Kc_Order_Bool_Exp>
  password_hash?: InputMaybe<String_Comparison_Exp>
  trades?: InputMaybe<Kc_Trade_Bool_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_2fa?: InputMaybe<Kc_User_2fa_Bool_Exp>
  user_devices?: InputMaybe<Kc_User_Device_Bool_Exp>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Unique or primary key constraints on table "kc.user" */
export enum Kc_User_Constraint {
  /** Unique or primary key constraint */
  UniqueUserEmailHash = 'unique_user_email_hash',
  /** Unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** Columns and relationships of "kc.user_device" */
export type Kc_User_Device = {
  __typename?: 'kc_user_device'
  accessed_at: Scalars['timestamptz']
  created_at: Scalars['timestamptz']
  device_id_hash: Scalars['String']
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
  columns?: InputMaybe<Kc_User_Device_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.user_device" */
export type Kc_User_Device_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_User_Device_Max_Order_By>
  min?: InputMaybe<Kc_User_Device_Min_Order_By>
}

/** Input type for inserting array relation for remote table "kc.user_device" */
export type Kc_User_Device_Arr_Rel_Insert_Input = {
  data: Kc_User_Device_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_User_Device_On_Conflict>
}

/** Boolean expression to filter rows from the table "kc.user_device". All fields are combined with a logical 'AND'. */
export type Kc_User_Device_Bool_Exp = {
  _and?: InputMaybe<Kc_User_Device_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Device_Bool_Exp>
  _or?: InputMaybe<Kc_User_Device_Bool_Exp[]>
  accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  device_id_hash?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  trusted?: InputMaybe<Boolean_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.user_device" */
export enum Kc_User_Device_Constraint {
  /** Unique or primary key constraint */
  UniqueUserDeviceUserUidDeviceIdHash = 'unique_user_device_user_uid_device_id_hash',
  /** Unique or primary key constraint */
  UserDevicePkey = 'user_device_pkey',
}

/** Input type for inserting data into table "kc.user_device" */
export type Kc_User_Device_Insert_Input = {
  accessed_at?: InputMaybe<Scalars['timestamptz']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  device_id_hash?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  trusted?: InputMaybe<Scalars['Boolean']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_User_Device_Max_Fields = {
  __typename?: 'kc_user_device_max_fields'
  accessed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  device_id_hash?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.user_device" */
export type Kc_User_Device_Max_Order_By = {
  accessed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  device_id_hash?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_User_Device_Min_Fields = {
  __typename?: 'kc_user_device_min_fields'
  accessed_at?: Maybe<Scalars['timestamptz']>
  created_at?: Maybe<Scalars['timestamptz']>
  device_id_hash?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.user_device" */
export type Kc_User_Device_Min_Order_By = {
  accessed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  device_id_hash?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.user_device" */
export type Kc_User_Device_Mutation_Response = {
  __typename?: 'kc_user_device_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_Device[]
}

/** On conflict condition type for table "kc.user_device" */
export type Kc_User_Device_On_Conflict = {
  constraint: Kc_User_Device_Constraint
  update_columns?: Kc_User_Device_Update_Column[]
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

/** Ordering options when selecting data from "kc.user_device". */
export type Kc_User_Device_Order_By = {
  accessed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  device_id_hash?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  trusted?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
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
  DeviceIdHash = 'device_id_hash',
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
  accessed_at?: InputMaybe<Scalars['timestamptz']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  device_id_hash?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  trusted?: InputMaybe<Scalars['Boolean']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Update columns of table "kc.user_device" */
export enum Kc_User_Device_Update_Column {
  /** Column name */
  AccessedAt = 'accessed_at',
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  DeviceIdHash = 'device_id_hash',
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

/** Columns and relationships of "kc.user_email_verify" */
export type Kc_User_Email_Verify = {
  __typename?: 'kc_user_email_verify'
  created_at: Scalars['timestamptz']
  secret_hash: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  user_uid: Scalars['uuid']
}

/** Aggregated selection of "kc.user_email_verify" */
export type Kc_User_Email_Verify_Aggregate = {
  __typename?: 'kc_user_email_verify_aggregate'
  aggregate?: Maybe<Kc_User_Email_Verify_Aggregate_Fields>
  nodes: Kc_User_Email_Verify[]
}

/** Aggregate fields of "kc.user_email_verify" */
export type Kc_User_Email_Verify_Aggregate_Fields = {
  __typename?: 'kc_user_email_verify_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_User_Email_Verify_Max_Fields>
  min?: Maybe<Kc_User_Email_Verify_Min_Fields>
}

/** Aggregate fields of "kc.user_email_verify" */
export type Kc_User_Email_Verify_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_User_Email_Verify_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "kc.user_email_verify". All fields are combined with a logical 'AND'. */
export type Kc_User_Email_Verify_Bool_Exp = {
  _and?: InputMaybe<Kc_User_Email_Verify_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>
  _or?: InputMaybe<Kc_User_Email_Verify_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  secret_hash?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.user_email_verify" */
export enum Kc_User_Email_Verify_Constraint {
  /** Unique or primary key constraint */
  UniqueUserEmailVerifySecretHash = 'unique_user_email_verify_secret_hash',
  /** Unique or primary key constraint */
  UniqueUserEmailVerifyUserUid = 'unique_user_email_verify_user_uid',
  /** Unique or primary key constraint */
  UserEmailVerifyPkey = 'user_email_verify_pkey',
}

/** Input type for inserting data into table "kc.user_email_verify" */
export type Kc_User_Email_Verify_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  secret_hash?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_User_Email_Verify_Max_Fields = {
  __typename?: 'kc_user_email_verify_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  secret_hash?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Aggregate min on columns */
export type Kc_User_Email_Verify_Min_Fields = {
  __typename?: 'kc_user_email_verify_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  secret_hash?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Response of any mutation on the table "kc.user_email_verify" */
export type Kc_User_Email_Verify_Mutation_Response = {
  __typename?: 'kc_user_email_verify_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_Email_Verify[]
}

/** On conflict condition type for table "kc.user_email_verify" */
export type Kc_User_Email_Verify_On_Conflict = {
  constraint: Kc_User_Email_Verify_Constraint
  update_columns?: Kc_User_Email_Verify_Update_Column[]
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>
}

/** Ordering options when selecting data from "kc.user_email_verify". */
export type Kc_User_Email_Verify_Order_By = {
  created_at?: InputMaybe<Order_By>
  secret_hash?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_user_email_verify */
export type Kc_User_Email_Verify_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.user_email_verify" */
export enum Kc_User_Email_Verify_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  SecretHash = 'secret_hash',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.user_email_verify" */
export type Kc_User_Email_Verify_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  secret_hash?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Update columns of table "kc.user_email_verify" */
export enum Kc_User_Email_Verify_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  SecretHash = 'secret_hash',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys = {
  __typename?: 'kc_user_exchange_keys'
  /** A computed field, executes function "kc.user_exchange_keys_balance" */
  balance?: Maybe<Kc_Balance[]>
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
  keys_encrypted: Scalars['String']
  keys_hash: Scalars['String']
  keys_keyring_id: Scalars['smallint']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysBalanceArgs = {
  args: Balance_Kc_User_Exchange_Keys_Args
  distinct_on?: InputMaybe<Kc_Balance_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Balance_Order_By[]>
  where?: InputMaybe<Kc_Balance_Bool_Exp>
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_OrdersArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

/** Columns and relationships of "kc.user_exchange_keys" */
export type Kc_User_Exchange_KeysDca_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
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
  avg?: Maybe<Kc_User_Exchange_Keys_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Kc_User_Exchange_Keys_Max_Fields>
  min?: Maybe<Kc_User_Exchange_Keys_Min_Fields>
  stddev?: Maybe<Kc_User_Exchange_Keys_Stddev_Fields>
  stddev_pop?: Maybe<Kc_User_Exchange_Keys_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Kc_User_Exchange_Keys_Stddev_Samp_Fields>
  sum?: Maybe<Kc_User_Exchange_Keys_Sum_Fields>
  var_pop?: Maybe<Kc_User_Exchange_Keys_Var_Pop_Fields>
  var_samp?: Maybe<Kc_User_Exchange_Keys_Var_Samp_Fields>
  variance?: Maybe<Kc_User_Exchange_Keys_Variance_Fields>
}

/** Aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Order_By = {
  avg?: InputMaybe<Kc_User_Exchange_Keys_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_User_Exchange_Keys_Max_Order_By>
  min?: InputMaybe<Kc_User_Exchange_Keys_Min_Order_By>
  stddev?: InputMaybe<Kc_User_Exchange_Keys_Stddev_Order_By>
  stddev_pop?: InputMaybe<Kc_User_Exchange_Keys_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Kc_User_Exchange_Keys_Stddev_Samp_Order_By>
  sum?: InputMaybe<Kc_User_Exchange_Keys_Sum_Order_By>
  var_pop?: InputMaybe<Kc_User_Exchange_Keys_Var_Pop_Order_By>
  var_samp?: InputMaybe<Kc_User_Exchange_Keys_Var_Samp_Order_By>
  variance?: InputMaybe<Kc_User_Exchange_Keys_Variance_Order_By>
}

/** Input type for inserting array relation for remote table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Arr_Rel_Insert_Input = {
  data: Kc_User_Exchange_Keys_Insert_Input[]
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>
}

/** Aggregate avg on columns */
export type Kc_User_Exchange_Keys_Avg_Fields = {
  __typename?: 'kc_user_exchange_keys_avg_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by avg() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Avg_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "kc.user_exchange_keys". All fields are combined with a logical 'AND'. */
export type Kc_User_Exchange_Keys_Bool_Exp = {
  _and?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
  _or?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  exchange?: InputMaybe<Kc_Exchange_Bool_Exp>
  exchange_uid?: InputMaybe<Uuid_Comparison_Exp>
  invalidated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  keys_encrypted?: InputMaybe<String_Comparison_Exp>
  keys_hash?: InputMaybe<String_Comparison_Exp>
  keys_keyring_id?: InputMaybe<Smallint_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.user_exchange_keys" */
export enum Kc_User_Exchange_Keys_Constraint {
  /** Unique or primary key constraint */
  UserExchangeKeysPkey = 'user_exchange_keys_pkey',
}

/** Input type for incrementing numeric columns in table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Inc_Input = {
  keys_keyring_id?: InputMaybe<Scalars['smallint']>
}

/** Input type for inserting data into table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>
  description?: InputMaybe<Scalars['String']>
  exchange?: InputMaybe<Kc_Exchange_Obj_Rel_Insert_Input>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  invalidated_at?: InputMaybe<Scalars['timestamptz']>
  keys_encrypted?: InputMaybe<Scalars['String']>
  keys_hash?: InputMaybe<Scalars['String']>
  keys_keyring_id?: InputMaybe<Scalars['smallint']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<Kc_User_Obj_Rel_Insert_Input>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_User_Exchange_Keys_Max_Fields = {
  __typename?: 'kc_user_exchange_keys_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  exchange_uid?: Maybe<Scalars['uuid']>
  invalidated_at?: Maybe<Scalars['timestamptz']>
  keys_encrypted?: Maybe<Scalars['String']>
  keys_hash?: Maybe<Scalars['String']>
  keys_keyring_id?: Maybe<Scalars['smallint']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by max() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  invalidated_at?: InputMaybe<Order_By>
  keys_encrypted?: InputMaybe<Order_By>
  keys_hash?: InputMaybe<Order_By>
  keys_keyring_id?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Aggregate min on columns */
export type Kc_User_Exchange_Keys_Min_Fields = {
  __typename?: 'kc_user_exchange_keys_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  exchange_uid?: Maybe<Scalars['uuid']>
  invalidated_at?: Maybe<Scalars['timestamptz']>
  keys_encrypted?: Maybe<Scalars['String']>
  keys_hash?: Maybe<Scalars['String']>
  keys_keyring_id?: Maybe<Scalars['smallint']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  invalidated_at?: InputMaybe<Order_By>
  keys_encrypted?: InputMaybe<Order_By>
  keys_hash?: InputMaybe<Order_By>
  keys_keyring_id?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Response of any mutation on the table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Mutation_Response = {
  __typename?: 'kc_user_exchange_keys_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_Exchange_Keys[]
}

/** Input type for inserting object relation for remote table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Obj_Rel_Insert_Input = {
  data: Kc_User_Exchange_Keys_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>
}

/** On conflict condition type for table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_On_Conflict = {
  constraint: Kc_User_Exchange_Keys_Constraint
  update_columns?: Kc_User_Exchange_Keys_Update_Column[]
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

/** Ordering options when selecting data from "kc.user_exchange_keys". */
export type Kc_User_Exchange_Keys_Order_By = {
  created_at?: InputMaybe<Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  description?: InputMaybe<Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  invalidated_at?: InputMaybe<Order_By>
  keys_encrypted?: InputMaybe<Order_By>
  keys_hash?: InputMaybe<Order_By>
  keys_keyring_id?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_user_exchange_keys */
export type Kc_User_Exchange_Keys_Pk_Columns_Input = {
  uid: Scalars['uuid']
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
  KeysEncrypted = 'keys_encrypted',
  /** Column name */
  KeysHash = 'keys_hash',
  /** Column name */
  KeysKeyringId = 'keys_keyring_id',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  exchange_uid?: InputMaybe<Scalars['uuid']>
  invalidated_at?: InputMaybe<Scalars['timestamptz']>
  keys_encrypted?: InputMaybe<Scalars['String']>
  keys_hash?: InputMaybe<Scalars['String']>
  keys_keyring_id?: InputMaybe<Scalars['smallint']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate stddev on columns */
export type Kc_User_Exchange_Keys_Stddev_Fields = {
  __typename?: 'kc_user_exchange_keys_stddev_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by stddev() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Stddev_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Aggregate stddev_pop on columns */
export type Kc_User_Exchange_Keys_Stddev_Pop_Fields = {
  __typename?: 'kc_user_exchange_keys_stddev_pop_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by stddev_pop() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Stddev_Pop_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Aggregate stddev_samp on columns */
export type Kc_User_Exchange_Keys_Stddev_Samp_Fields = {
  __typename?: 'kc_user_exchange_keys_stddev_samp_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by stddev_samp() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Stddev_Samp_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Aggregate sum on columns */
export type Kc_User_Exchange_Keys_Sum_Fields = {
  __typename?: 'kc_user_exchange_keys_sum_fields'
  keys_keyring_id?: Maybe<Scalars['smallint']>
}

/** Order by sum() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Sum_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Update columns of table "kc.user_exchange_keys" */
export enum Kc_User_Exchange_Keys_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  Description = 'description',
  /** Column name */
  ExchangeUid = 'exchange_uid',
  /** Column name */
  InvalidatedAt = 'invalidated_at',
  /** Column name */
  KeysEncrypted = 'keys_encrypted',
  /** Column name */
  KeysHash = 'keys_hash',
  /** Column name */
  KeysKeyringId = 'keys_keyring_id',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Aggregate var_pop on columns */
export type Kc_User_Exchange_Keys_Var_Pop_Fields = {
  __typename?: 'kc_user_exchange_keys_var_pop_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by var_pop() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Var_Pop_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Aggregate var_samp on columns */
export type Kc_User_Exchange_Keys_Var_Samp_Fields = {
  __typename?: 'kc_user_exchange_keys_var_samp_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by var_samp() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Var_Samp_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Aggregate variance on columns */
export type Kc_User_Exchange_Keys_Variance_Fields = {
  __typename?: 'kc_user_exchange_keys_variance_fields'
  keys_keyring_id?: Maybe<Scalars['Float']>
}

/** Order by variance() on columns of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Variance_Order_By = {
  keys_keyring_id?: InputMaybe<Order_By>
}

/** Input type for incrementing numeric columns in table "kc.user" */
export type Kc_User_Inc_Input = {
  email_keyring_id?: InputMaybe<Scalars['smallint']>
}

/** Input type for inserting data into table "kc.user" */
export type Kc_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Arr_Rel_Insert_Input>
  dca_orders?: InputMaybe<Kc_Dca_Order_Arr_Rel_Insert_Input>
  email_encrypted?: InputMaybe<Scalars['String']>
  email_hash?: InputMaybe<Scalars['String']>
  email_keyring_id?: InputMaybe<Scalars['smallint']>
  email_verified?: InputMaybe<Scalars['Boolean']>
  orders?: InputMaybe<Kc_Order_Arr_Rel_Insert_Input>
  password_hash?: InputMaybe<Scalars['String']>
  trades?: InputMaybe<Kc_Trade_Arr_Rel_Insert_Input>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_2fa?: InputMaybe<Kc_User_2fa_Obj_Rel_Insert_Input>
  user_devices?: InputMaybe<Kc_User_Device_Arr_Rel_Insert_Input>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Arr_Rel_Insert_Input>
}

/** Aggregate max on columns */
export type Kc_User_Max_Fields = {
  __typename?: 'kc_user_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  email_encrypted?: Maybe<Scalars['String']>
  email_hash?: Maybe<Scalars['String']>
  email_keyring_id?: Maybe<Scalars['smallint']>
  password_hash?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Aggregate min on columns */
export type Kc_User_Min_Fields = {
  __typename?: 'kc_user_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  email_encrypted?: Maybe<Scalars['String']>
  email_hash?: Maybe<Scalars['String']>
  email_keyring_id?: Maybe<Scalars['smallint']>
  password_hash?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** Response of any mutation on the table "kc.user" */
export type Kc_User_Mutation_Response = {
  __typename?: 'kc_user_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User[]
}

/** Input type for inserting object relation for remote table "kc.user" */
export type Kc_User_Obj_Rel_Insert_Input = {
  data: Kc_User_Insert_Input
  /** On conflict condition */
  on_conflict?: InputMaybe<Kc_User_On_Conflict>
}

/** On conflict condition type for table "kc.user" */
export type Kc_User_On_Conflict = {
  constraint: Kc_User_Constraint
  update_columns?: Kc_User_Update_Column[]
  where?: InputMaybe<Kc_User_Bool_Exp>
}

/** Ordering options when selecting data from "kc.user". */
export type Kc_User_Order_By = {
  created_at?: InputMaybe<Order_By>
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  email_encrypted?: InputMaybe<Order_By>
  email_hash?: InputMaybe<Order_By>
  email_keyring_id?: InputMaybe<Order_By>
  email_verified?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Kc_Order_Aggregate_Order_By>
  password_hash?: InputMaybe<Order_By>
  trades_aggregate?: InputMaybe<Kc_Trade_Aggregate_Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_2fa?: InputMaybe<Kc_User_2fa_Order_By>
  user_devices_aggregate?: InputMaybe<Kc_User_Device_Aggregate_Order_By>
  user_exchange_keys_aggregate?: InputMaybe<Kc_User_Exchange_Keys_Aggregate_Order_By>
}

/** Columns and relationships of "kc.user_password_reset" */
export type Kc_User_Password_Reset = {
  __typename?: 'kc_user_password_reset'
  created_at: Scalars['timestamptz']
  expires_at: Scalars['timestamptz']
  secret_hash: Scalars['String']
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  user_uid: Scalars['uuid']
}

/** Aggregated selection of "kc.user_password_reset" */
export type Kc_User_Password_Reset_Aggregate = {
  __typename?: 'kc_user_password_reset_aggregate'
  aggregate?: Maybe<Kc_User_Password_Reset_Aggregate_Fields>
  nodes: Kc_User_Password_Reset[]
}

/** Aggregate fields of "kc.user_password_reset" */
export type Kc_User_Password_Reset_Aggregate_Fields = {
  __typename?: 'kc_user_password_reset_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Kc_User_Password_Reset_Max_Fields>
  min?: Maybe<Kc_User_Password_Reset_Min_Fields>
}

/** Aggregate fields of "kc.user_password_reset" */
export type Kc_User_Password_Reset_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_User_Password_Reset_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "kc.user_password_reset". All fields are combined with a logical 'AND'. */
export type Kc_User_Password_Reset_Bool_Exp = {
  _and?: InputMaybe<Kc_User_Password_Reset_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>
  _or?: InputMaybe<Kc_User_Password_Reset_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>
  secret_hash?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Unique or primary key constraints on table "kc.user_password_reset" */
export enum Kc_User_Password_Reset_Constraint {
  /** Unique or primary key constraint */
  UniqueUserPasswordResetSecretHash = 'unique_user_password_reset_secret_hash',
  /** Unique or primary key constraint */
  UserPasswordResetPkey = 'user_password_reset_pkey',
}

/** Input type for inserting data into table "kc.user_password_reset" */
export type Kc_User_Password_Reset_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  expires_at?: InputMaybe<Scalars['timestamptz']>
  secret_hash?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Aggregate max on columns */
export type Kc_User_Password_Reset_Max_Fields = {
  __typename?: 'kc_user_password_reset_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamptz']>
  secret_hash?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Aggregate min on columns */
export type Kc_User_Password_Reset_Min_Fields = {
  __typename?: 'kc_user_password_reset_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  expires_at?: Maybe<Scalars['timestamptz']>
  secret_hash?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Response of any mutation on the table "kc.user_password_reset" */
export type Kc_User_Password_Reset_Mutation_Response = {
  __typename?: 'kc_user_password_reset_mutation_response'
  /** Number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** Data from the rows affected by the mutation */
  returning: Kc_User_Password_Reset[]
}

/** On conflict condition type for table "kc.user_password_reset" */
export type Kc_User_Password_Reset_On_Conflict = {
  constraint: Kc_User_Password_Reset_Constraint
  update_columns?: Kc_User_Password_Reset_Update_Column[]
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>
}

/** Ordering options when selecting data from "kc.user_password_reset". */
export type Kc_User_Password_Reset_Order_By = {
  created_at?: InputMaybe<Order_By>
  expires_at?: InputMaybe<Order_By>
  secret_hash?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_uid?: InputMaybe<Order_By>
}

/** Primary key columns input for table: kc_user_password_reset */
export type Kc_User_Password_Reset_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.user_password_reset" */
export enum Kc_User_Password_Reset_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExpiresAt = 'expires_at',
  /** Column name */
  SecretHash = 'secret_hash',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Input type for updating data in table "kc.user_password_reset" */
export type Kc_User_Password_Reset_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  expires_at?: InputMaybe<Scalars['timestamptz']>
  secret_hash?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_uid?: InputMaybe<Scalars['uuid']>
}

/** Update columns of table "kc.user_password_reset" */
export enum Kc_User_Password_Reset_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  ExpiresAt = 'expires_at',
  /** Column name */
  SecretHash = 'secret_hash',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
  /** Column name */
  UserUid = 'user_uid',
}

/** Primary key columns input for table: kc_user */
export type Kc_User_Pk_Columns_Input = {
  uid: Scalars['uuid']
}

/** Select columns of table "kc.user" */
export enum Kc_User_Select_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  EmailEncrypted = 'email_encrypted',
  /** Column name */
  EmailHash = 'email_hash',
  /** Column name */
  EmailKeyringId = 'email_keyring_id',
  /** Column name */
  EmailVerified = 'email_verified',
  /** Column name */
  PasswordHash = 'password_hash',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Input type for updating data in table "kc.user" */
export type Kc_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  email_encrypted?: InputMaybe<Scalars['String']>
  email_hash?: InputMaybe<Scalars['String']>
  email_keyring_id?: InputMaybe<Scalars['smallint']>
  email_verified?: InputMaybe<Scalars['Boolean']>
  password_hash?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['uuid']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Aggregate stddev on columns */
export type Kc_User_Stddev_Fields = {
  __typename?: 'kc_user_stddev_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_pop on columns */
export type Kc_User_Stddev_Pop_Fields = {
  __typename?: 'kc_user_stddev_pop_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate stddev_samp on columns */
export type Kc_User_Stddev_Samp_Fields = {
  __typename?: 'kc_user_stddev_samp_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate sum on columns */
export type Kc_User_Sum_Fields = {
  __typename?: 'kc_user_sum_fields'
  email_keyring_id?: Maybe<Scalars['smallint']>
}

/** Update columns of table "kc.user" */
export enum Kc_User_Update_Column {
  /** Column name */
  CreatedAt = 'created_at',
  /** Column name */
  EmailEncrypted = 'email_encrypted',
  /** Column name */
  EmailHash = 'email_hash',
  /** Column name */
  EmailKeyringId = 'email_keyring_id',
  /** Column name */
  EmailVerified = 'email_verified',
  /** Column name */
  PasswordHash = 'password_hash',
  /** Column name */
  Uid = 'uid',
  /** Column name */
  UpdatedAt = 'updated_at',
}

/** Aggregate var_pop on columns */
export type Kc_User_Var_Pop_Fields = {
  __typename?: 'kc_user_var_pop_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate var_samp on columns */
export type Kc_User_Var_Samp_Fields = {
  __typename?: 'kc_user_var_samp_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Aggregate variance on columns */
export type Kc_User_Variance_Fields = {
  __typename?: 'kc_user_variance_fields'
  email_keyring_id?: Maybe<Scalars['Float']>
}

/** Mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  cancel_subscription?: Maybe<CancelSubscriptionOutput>
  create_auth_token?: Maybe<CreateAuthTokenOutput>
  create_dca_order?: Maybe<CreateDcaOrderResult>
  create_subscription?: Maybe<CreateSubscription>
  create_user?: Maybe<CreateUserOutput>
  create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>
  /** Delete data from the table: "kc.balance" */
  delete_kc_balance?: Maybe<Kc_Balance_Mutation_Response>
  /** Delete single row from the table: "kc.balance" */
  delete_kc_balance_by_pk?: Maybe<Kc_Balance>
  /** Delete data from the table: "kc.currency" */
  delete_kc_currency?: Maybe<Kc_Currency_Mutation_Response>
  /** Delete single row from the table: "kc.currency" */
  delete_kc_currency_by_pk?: Maybe<Kc_Currency>
  /** Delete data from the table: "kc.dca_order" */
  delete_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>
  /** Delete single row from the table: "kc.dca_order" */
  delete_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Delete data from the table: "kc.dca_order_history" */
  delete_kc_dca_order_history?: Maybe<Kc_Dca_Order_History_Mutation_Response>
  /** Delete single row from the table: "kc.dca_order_history" */
  delete_kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>
  /** Delete data from the table: "kc.exchange" */
  delete_kc_exchange?: Maybe<Kc_Exchange_Mutation_Response>
  /** Delete single row from the table: "kc.exchange" */
  delete_kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Delete data from the table: "kc.exchange_primary_currency" */
  delete_kc_exchange_primary_currency?: Maybe<Kc_Exchange_Primary_Currency_Mutation_Response>
  /** Delete single row from the table: "kc.exchange_primary_currency" */
  delete_kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>
  /** Delete data from the table: "kc.exchange_secondary_currency" */
  delete_kc_exchange_secondary_currency?: Maybe<Kc_Exchange_Secondary_Currency_Mutation_Response>
  /** Delete single row from the table: "kc.exchange_secondary_currency" */
  delete_kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Delete data from the table: "kc.market" */
  delete_kc_market?: Maybe<Kc_Market_Mutation_Response>
  /** Delete single row from the table: "kc.market" */
  delete_kc_market_by_pk?: Maybe<Kc_Market>
  /** Delete data from the table: "kc.market_price" */
  delete_kc_market_price?: Maybe<Kc_Market_Price_Mutation_Response>
  /** Delete single row from the table: "kc.market_price" */
  delete_kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Delete data from the table: "kc.market_trading_pair" */
  delete_kc_market_trading_pair?: Maybe<Kc_Market_Trading_Pair_Mutation_Response>
  /** Delete data from the table: "kc.order" */
  delete_kc_order?: Maybe<Kc_Order_Mutation_Response>
  /** Delete single row from the table: "kc.order" */
  delete_kc_order_by_pk?: Maybe<Kc_Order>
  /** Delete data from the table: "kc.trade" */
  delete_kc_trade?: Maybe<Kc_Trade_Mutation_Response>
  /** Delete single row from the table: "kc.trade" */
  delete_kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Delete data from the table: "kc.type_trade_avg_price_by_window" */
  delete_kc_type_trade_avg_price_by_window?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Mutation_Response>
  /** Delete data from the table: "kc.type_trade_sum_by_window" */
  delete_kc_type_trade_sum_by_window?: Maybe<Kc_Type_Trade_Sum_By_Window_Mutation_Response>
  /** Delete data from the table: "kc.user" */
  delete_kc_user?: Maybe<Kc_User_Mutation_Response>
  /** Delete data from the table: "kc.user_2fa" */
  delete_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>
  /** Delete single row from the table: "kc.user_2fa" */
  delete_kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Delete single row from the table: "kc.user" */
  delete_kc_user_by_pk?: Maybe<Kc_User>
  /** Delete data from the table: "kc.user_device" */
  delete_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>
  /** Delete single row from the table: "kc.user_device" */
  delete_kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Delete data from the table: "kc.user_email_verify" */
  delete_kc_user_email_verify?: Maybe<Kc_User_Email_Verify_Mutation_Response>
  /** Delete single row from the table: "kc.user_email_verify" */
  delete_kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>
  /** Delete data from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>
  /** Delete single row from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
  /** Delete data from the table: "kc.user_password_reset" */
  delete_kc_user_password_reset?: Maybe<Kc_User_Password_Reset_Mutation_Response>
  /** Delete single row from the table: "kc.user_password_reset" */
  delete_kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>
  delete_user?: Maybe<DeleteUserOutput>
  delete_user_2fa?: Maybe<DeleteUser2FaOutput>
  enable_user_2fa?: Maybe<EnableUser2FaOutput>
  /** Insert data into the table: "kc.balance" */
  insert_kc_balance?: Maybe<Kc_Balance_Mutation_Response>
  /** Insert a single row into the table: "kc.balance" */
  insert_kc_balance_one?: Maybe<Kc_Balance>
  /** Insert data into the table: "kc.currency" */
  insert_kc_currency?: Maybe<Kc_Currency_Mutation_Response>
  /** Insert a single row into the table: "kc.currency" */
  insert_kc_currency_one?: Maybe<Kc_Currency>
  /** Insert data into the table: "kc.dca_order" */
  insert_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>
  /** Insert data into the table: "kc.dca_order_history" */
  insert_kc_dca_order_history?: Maybe<Kc_Dca_Order_History_Mutation_Response>
  /** Insert a single row into the table: "kc.dca_order_history" */
  insert_kc_dca_order_history_one?: Maybe<Kc_Dca_Order_History>
  /** Insert a single row into the table: "kc.dca_order" */
  insert_kc_dca_order_one?: Maybe<Kc_Dca_Order>
  /** Insert data into the table: "kc.exchange" */
  insert_kc_exchange?: Maybe<Kc_Exchange_Mutation_Response>
  /** Insert a single row into the table: "kc.exchange" */
  insert_kc_exchange_one?: Maybe<Kc_Exchange>
  /** Insert data into the table: "kc.exchange_primary_currency" */
  insert_kc_exchange_primary_currency?: Maybe<Kc_Exchange_Primary_Currency_Mutation_Response>
  /** Insert a single row into the table: "kc.exchange_primary_currency" */
  insert_kc_exchange_primary_currency_one?: Maybe<Kc_Exchange_Primary_Currency>
  /** Insert data into the table: "kc.exchange_secondary_currency" */
  insert_kc_exchange_secondary_currency?: Maybe<Kc_Exchange_Secondary_Currency_Mutation_Response>
  /** Insert a single row into the table: "kc.exchange_secondary_currency" */
  insert_kc_exchange_secondary_currency_one?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Insert data into the table: "kc.market" */
  insert_kc_market?: Maybe<Kc_Market_Mutation_Response>
  /** Insert a single row into the table: "kc.market" */
  insert_kc_market_one?: Maybe<Kc_Market>
  /** Insert data into the table: "kc.market_price" */
  insert_kc_market_price?: Maybe<Kc_Market_Price_Mutation_Response>
  /** Insert a single row into the table: "kc.market_price" */
  insert_kc_market_price_one?: Maybe<Kc_Market_Price>
  /** Insert data into the table: "kc.market_trading_pair" */
  insert_kc_market_trading_pair?: Maybe<Kc_Market_Trading_Pair_Mutation_Response>
  /** Insert a single row into the table: "kc.market_trading_pair" */
  insert_kc_market_trading_pair_one?: Maybe<Kc_Market_Trading_Pair>
  /** Insert data into the table: "kc.order" */
  insert_kc_order?: Maybe<Kc_Order_Mutation_Response>
  /** Insert a single row into the table: "kc.order" */
  insert_kc_order_one?: Maybe<Kc_Order>
  /** Insert data into the table: "kc.trade" */
  insert_kc_trade?: Maybe<Kc_Trade_Mutation_Response>
  /** Insert a single row into the table: "kc.trade" */
  insert_kc_trade_one?: Maybe<Kc_Trade>
  /** Insert data into the table: "kc.type_trade_avg_price_by_window" */
  insert_kc_type_trade_avg_price_by_window?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Mutation_Response>
  /** Insert a single row into the table: "kc.type_trade_avg_price_by_window" */
  insert_kc_type_trade_avg_price_by_window_one?: Maybe<Kc_Type_Trade_Avg_Price_By_Window>
  /** Insert data into the table: "kc.type_trade_sum_by_window" */
  insert_kc_type_trade_sum_by_window?: Maybe<Kc_Type_Trade_Sum_By_Window_Mutation_Response>
  /** Insert a single row into the table: "kc.type_trade_sum_by_window" */
  insert_kc_type_trade_sum_by_window_one?: Maybe<Kc_Type_Trade_Sum_By_Window>
  /** Insert data into the table: "kc.user" */
  insert_kc_user?: Maybe<Kc_User_Mutation_Response>
  /** Insert data into the table: "kc.user_2fa" */
  insert_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>
  /** Insert a single row into the table: "kc.user_2fa" */
  insert_kc_user_2fa_one?: Maybe<Kc_User_2fa>
  /** Insert data into the table: "kc.user_device" */
  insert_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>
  /** Insert a single row into the table: "kc.user_device" */
  insert_kc_user_device_one?: Maybe<Kc_User_Device>
  /** Insert data into the table: "kc.user_email_verify" */
  insert_kc_user_email_verify?: Maybe<Kc_User_Email_Verify_Mutation_Response>
  /** Insert a single row into the table: "kc.user_email_verify" */
  insert_kc_user_email_verify_one?: Maybe<Kc_User_Email_Verify>
  /** Insert data into the table: "kc.user_exchange_keys" */
  insert_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>
  /** Insert a single row into the table: "kc.user_exchange_keys" */
  insert_kc_user_exchange_keys_one?: Maybe<Kc_User_Exchange_Keys>
  /** Insert a single row into the table: "kc.user" */
  insert_kc_user_one?: Maybe<Kc_User>
  /** Insert data into the table: "kc.user_password_reset" */
  insert_kc_user_password_reset?: Maybe<Kc_User_Password_Reset_Mutation_Response>
  /** Insert a single row into the table: "kc.user_password_reset" */
  insert_kc_user_password_reset_one?: Maybe<Kc_User_Password_Reset>
  refresh_auth_token?: Maybe<RefreshAuthTokenOutput>
  reset_user_password: ResetUserPasswordOutput
  send_user_email_verify: SendUserEmailVerifyOutput
  send_user_password_reset: SendUserPasswordResetOutput
  sync_currency_fx?: Maybe<SyncCurrencyFxOutput>
  sync_exchange_open_order_list?: Maybe<SyncExchangeOpenOrderListOutput>
  sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>
  update_dca_order: UpdateDcaOrderOutput
  /** Update data of the table: "kc.balance" */
  update_kc_balance?: Maybe<Kc_Balance_Mutation_Response>
  /** Update single row of the table: "kc.balance" */
  update_kc_balance_by_pk?: Maybe<Kc_Balance>
  /** Update data of the table: "kc.currency" */
  update_kc_currency?: Maybe<Kc_Currency_Mutation_Response>
  /** Update single row of the table: "kc.currency" */
  update_kc_currency_by_pk?: Maybe<Kc_Currency>
  /** Update data of the table: "kc.dca_order" */
  update_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>
  /** Update single row of the table: "kc.dca_order" */
  update_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Update data of the table: "kc.dca_order_history" */
  update_kc_dca_order_history?: Maybe<Kc_Dca_Order_History_Mutation_Response>
  /** Update single row of the table: "kc.dca_order_history" */
  update_kc_dca_order_history_by_pk?: Maybe<Kc_Dca_Order_History>
  /** Update data of the table: "kc.exchange" */
  update_kc_exchange?: Maybe<Kc_Exchange_Mutation_Response>
  /** Update single row of the table: "kc.exchange" */
  update_kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Update data of the table: "kc.exchange_primary_currency" */
  update_kc_exchange_primary_currency?: Maybe<Kc_Exchange_Primary_Currency_Mutation_Response>
  /** Update single row of the table: "kc.exchange_primary_currency" */
  update_kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>
  /** Update data of the table: "kc.exchange_secondary_currency" */
  update_kc_exchange_secondary_currency?: Maybe<Kc_Exchange_Secondary_Currency_Mutation_Response>
  /** Update single row of the table: "kc.exchange_secondary_currency" */
  update_kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Update data of the table: "kc.market" */
  update_kc_market?: Maybe<Kc_Market_Mutation_Response>
  /** Update single row of the table: "kc.market" */
  update_kc_market_by_pk?: Maybe<Kc_Market>
  /** Update data of the table: "kc.market_price" */
  update_kc_market_price?: Maybe<Kc_Market_Price_Mutation_Response>
  /** Update single row of the table: "kc.market_price" */
  update_kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Update data of the table: "kc.market_trading_pair" */
  update_kc_market_trading_pair?: Maybe<Kc_Market_Trading_Pair_Mutation_Response>
  /** Update data of the table: "kc.order" */
  update_kc_order?: Maybe<Kc_Order_Mutation_Response>
  /** Update single row of the table: "kc.order" */
  update_kc_order_by_pk?: Maybe<Kc_Order>
  /** Update data of the table: "kc.trade" */
  update_kc_trade?: Maybe<Kc_Trade_Mutation_Response>
  /** Update single row of the table: "kc.trade" */
  update_kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Update data of the table: "kc.type_trade_avg_price_by_window" */
  update_kc_type_trade_avg_price_by_window?: Maybe<Kc_Type_Trade_Avg_Price_By_Window_Mutation_Response>
  /** Update data of the table: "kc.type_trade_sum_by_window" */
  update_kc_type_trade_sum_by_window?: Maybe<Kc_Type_Trade_Sum_By_Window_Mutation_Response>
  /** Update data of the table: "kc.user" */
  update_kc_user?: Maybe<Kc_User_Mutation_Response>
  /** Update data of the table: "kc.user_2fa" */
  update_kc_user_2fa?: Maybe<Kc_User_2fa_Mutation_Response>
  /** Update single row of the table: "kc.user_2fa" */
  update_kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Update single row of the table: "kc.user" */
  update_kc_user_by_pk?: Maybe<Kc_User>
  /** Update data of the table: "kc.user_device" */
  update_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>
  /** Update single row of the table: "kc.user_device" */
  update_kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Update data of the table: "kc.user_email_verify" */
  update_kc_user_email_verify?: Maybe<Kc_User_Email_Verify_Mutation_Response>
  /** Update single row of the table: "kc.user_email_verify" */
  update_kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>
  /** Update data of the table: "kc.user_exchange_keys" */
  update_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>
  /** Update single row of the table: "kc.user_exchange_keys" */
  update_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
  /** Update data of the table: "kc.user_password_reset" */
  update_kc_user_password_reset?: Maybe<Kc_User_Password_Reset_Mutation_Response>
  /** Update single row of the table: "kc.user_password_reset" */
  update_kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>
  update_user: UpdateUserOutput
  update_user_exchange_keys?: Maybe<UpdateUserExchangeKeysOutput>
  validate_user_exchange_keys?: Maybe<ValidateUserExchangeKeysOutput>
  validate_user_exchange_keys_live?: Maybe<ValidateUserExchangeKeysLiveOutput>
  validate_user_password_reset: ValidatUserPasswordResetOutput
  verify_user_email: VerifyUserEmailOutput
}

/** Mutation root */
export type Mutation_RootCancel_SubscriptionArgs = {
  subscription_id: Scalars['String']
}

/** Mutation root */
export type Mutation_RootCreate_Auth_TokenArgs = {
  device_id: Scalars['String']
  device_name: Scalars['String']
  device_trusted: Scalars['Boolean']
  email: Scalars['String']
  password: Scalars['String']
  token_2fa?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootCreate_Dca_OrderArgs = {
  daily_average: Scalars['Float']
  interval_ms: Scalars['Int']
  market_offset: Scalars['Float']
  market_uid: Scalars['uuid']
  max_price?: InputMaybe<Scalars['Float']>
  max_value?: InputMaybe<Scalars['Float']>
  min_price?: InputMaybe<Scalars['Float']>
  min_value?: InputMaybe<Scalars['Float']>
  primary_currency: Scalars['String']
  secondary_currency: Scalars['String']
  start_at: Scalars['timestamp']
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootCreate_SubscriptionArgs = {
  price_id?: InputMaybe<Scalars['String']>
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
export type Mutation_RootDelete_Kc_BalanceArgs = {
  where: Kc_Balance_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Balance_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_CurrencyArgs = {
  where: Kc_Currency_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Currency_By_PkArgs = {
  symbol: Scalars['String']
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
export type Mutation_RootDelete_Kc_Dca_Order_HistoryArgs = {
  where: Kc_Dca_Order_History_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_ExchangeArgs = {
  where: Kc_Exchange_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Exchange_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Exchange_Primary_CurrencyArgs = {
  where: Kc_Exchange_Primary_Currency_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Exchange_Secondary_CurrencyArgs = {
  where: Kc_Exchange_Secondary_Currency_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_MarketArgs = {
  where: Kc_Market_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Market_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Market_PriceArgs = {
  where: Kc_Market_Price_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String']
  currency: Scalars['String']
  market_uid: Scalars['uuid']
  source_currency: Scalars['bpchar']
  timestamp: Scalars['timestamptz']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Market_Trading_PairArgs = {
  where: Kc_Market_Trading_Pair_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_OrderArgs = {
  where: Kc_Order_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_TradeArgs = {
  where: Kc_Trade_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Trade_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Type_Trade_Avg_Price_By_WindowArgs = {
  where: Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Type_Trade_Sum_By_WindowArgs = {
  where: Kc_Type_Trade_Sum_By_Window_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_UserArgs = {
  where: Kc_User_Bool_Exp
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
export type Mutation_RootDelete_Kc_User_By_PkArgs = {
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
export type Mutation_RootDelete_Kc_User_Email_VerifyArgs = {
  where: Kc_User_Email_Verify_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_Email_Verify_By_PkArgs = {
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
export type Mutation_RootDelete_Kc_User_Password_ResetArgs = {
  where: Kc_User_Password_Reset_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_User_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootDelete_User_2faArgs = {
  token: Scalars['String']
}

/** Mutation root */
export type Mutation_RootEnable_User_2faArgs = {
  name: Scalars['String']
  secret: Scalars['String']
  token: Scalars['String']
}

/** Mutation root */
export type Mutation_RootInsert_Kc_BalanceArgs = {
  objects: Kc_Balance_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Balance_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Balance_OneArgs = {
  object: Kc_Balance_Insert_Input
  on_conflict?: InputMaybe<Kc_Balance_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_CurrencyArgs = {
  objects: Kc_Currency_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Currency_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Currency_OneArgs = {
  object: Kc_Currency_Insert_Input
  on_conflict?: InputMaybe<Kc_Currency_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Dca_OrderArgs = {
  objects: Kc_Dca_Order_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Dca_Order_HistoryArgs = {
  objects: Kc_Dca_Order_History_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Dca_Order_History_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Dca_Order_History_OneArgs = {
  object: Kc_Dca_Order_History_Insert_Input
  on_conflict?: InputMaybe<Kc_Dca_Order_History_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Dca_Order_OneArgs = {
  object: Kc_Dca_Order_Insert_Input
  on_conflict?: InputMaybe<Kc_Dca_Order_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_ExchangeArgs = {
  objects: Kc_Exchange_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Exchange_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Exchange_OneArgs = {
  object: Kc_Exchange_Insert_Input
  on_conflict?: InputMaybe<Kc_Exchange_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Exchange_Primary_CurrencyArgs = {
  objects: Kc_Exchange_Primary_Currency_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Exchange_Primary_Currency_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Exchange_Primary_Currency_OneArgs = {
  object: Kc_Exchange_Primary_Currency_Insert_Input
  on_conflict?: InputMaybe<Kc_Exchange_Primary_Currency_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Exchange_Secondary_CurrencyArgs = {
  objects: Kc_Exchange_Secondary_Currency_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Exchange_Secondary_Currency_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Exchange_Secondary_Currency_OneArgs = {
  object: Kc_Exchange_Secondary_Currency_Insert_Input
  on_conflict?: InputMaybe<Kc_Exchange_Secondary_Currency_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_MarketArgs = {
  objects: Kc_Market_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Market_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Market_OneArgs = {
  object: Kc_Market_Insert_Input
  on_conflict?: InputMaybe<Kc_Market_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Market_PriceArgs = {
  objects: Kc_Market_Price_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Market_Price_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Market_Price_OneArgs = {
  object: Kc_Market_Price_Insert_Input
  on_conflict?: InputMaybe<Kc_Market_Price_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Market_Trading_PairArgs = {
  objects: Kc_Market_Trading_Pair_Insert_Input[]
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Market_Trading_Pair_OneArgs = {
  object: Kc_Market_Trading_Pair_Insert_Input
}

/** Mutation root */
export type Mutation_RootInsert_Kc_OrderArgs = {
  objects: Kc_Order_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Order_OneArgs = {
  object: Kc_Order_Insert_Input
  on_conflict?: InputMaybe<Kc_Order_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_TradeArgs = {
  objects: Kc_Trade_Insert_Input[]
  on_conflict?: InputMaybe<Kc_Trade_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Trade_OneArgs = {
  object: Kc_Trade_Insert_Input
  on_conflict?: InputMaybe<Kc_Trade_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Type_Trade_Avg_Price_By_WindowArgs = {
  objects: Kc_Type_Trade_Avg_Price_By_Window_Insert_Input[]
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Type_Trade_Avg_Price_By_Window_OneArgs = {
  object: Kc_Type_Trade_Avg_Price_By_Window_Insert_Input
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Type_Trade_Sum_By_WindowArgs = {
  objects: Kc_Type_Trade_Sum_By_Window_Insert_Input[]
}

/** Mutation root */
export type Mutation_RootInsert_Kc_Type_Trade_Sum_By_Window_OneArgs = {
  object: Kc_Type_Trade_Sum_By_Window_Insert_Input
}

/** Mutation root */
export type Mutation_RootInsert_Kc_UserArgs = {
  objects: Kc_User_Insert_Input[]
  on_conflict?: InputMaybe<Kc_User_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_2faArgs = {
  objects: Kc_User_2fa_Insert_Input[]
  on_conflict?: InputMaybe<Kc_User_2fa_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_2fa_OneArgs = {
  object: Kc_User_2fa_Insert_Input
  on_conflict?: InputMaybe<Kc_User_2fa_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_DeviceArgs = {
  objects: Kc_User_Device_Insert_Input[]
  on_conflict?: InputMaybe<Kc_User_Device_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Device_OneArgs = {
  object: Kc_User_Device_Insert_Input
  on_conflict?: InputMaybe<Kc_User_Device_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Email_VerifyArgs = {
  objects: Kc_User_Email_Verify_Insert_Input[]
  on_conflict?: InputMaybe<Kc_User_Email_Verify_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Email_Verify_OneArgs = {
  object: Kc_User_Email_Verify_Insert_Input
  on_conflict?: InputMaybe<Kc_User_Email_Verify_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Exchange_KeysArgs = {
  objects: Kc_User_Exchange_Keys_Insert_Input[]
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Exchange_Keys_OneArgs = {
  object: Kc_User_Exchange_Keys_Insert_Input
  on_conflict?: InputMaybe<Kc_User_Exchange_Keys_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_OneArgs = {
  object: Kc_User_Insert_Input
  on_conflict?: InputMaybe<Kc_User_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Password_ResetArgs = {
  objects: Kc_User_Password_Reset_Insert_Input[]
  on_conflict?: InputMaybe<Kc_User_Password_Reset_On_Conflict>
}

/** Mutation root */
export type Mutation_RootInsert_Kc_User_Password_Reset_OneArgs = {
  object: Kc_User_Password_Reset_Insert_Input
  on_conflict?: InputMaybe<Kc_User_Password_Reset_On_Conflict>
}

/** Mutation root */
export type Mutation_RootReset_User_PasswordArgs = {
  device_id: Scalars['String']
  device_name: Scalars['String']
  device_trusted: Scalars['Boolean']
  new_password: Scalars['String']
  password_reset_secret: Scalars['String']
  token_2fa?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootSend_User_Password_ResetArgs = {
  email: Scalars['String']
}

/** Mutation root */
export type Mutation_RootSync_Currency_FxArgs = {
  end_date: Scalars['timestamptz']
  from_symbol: Scalars['String']
  start_date: Scalars['timestamptz']
  to_symbol: Scalars['String']
}

/** Mutation root */
export type Mutation_RootSync_Exchange_Open_Order_ListArgs = {
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootSync_Exchange_Trade_ListArgs = {
  force_sync?: InputMaybe<Scalars['Boolean']>
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootUpdate_Dca_OrderArgs = {
  dca_order_uid: Scalars['uuid']
  enabled: Scalars['Boolean']
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_BalanceArgs = {
  _inc?: InputMaybe<Kc_Balance_Inc_Input>
  _set?: InputMaybe<Kc_Balance_Set_Input>
  where: Kc_Balance_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Balance_By_PkArgs = {
  _inc?: InputMaybe<Kc_Balance_Inc_Input>
  _set?: InputMaybe<Kc_Balance_Set_Input>
  pk_columns: Kc_Balance_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_CurrencyArgs = {
  _set?: InputMaybe<Kc_Currency_Set_Input>
  where: Kc_Currency_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Currency_By_PkArgs = {
  _set?: InputMaybe<Kc_Currency_Set_Input>
  pk_columns: Kc_Currency_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Dca_OrderArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_Inc_Input>
  _set?: InputMaybe<Kc_Dca_Order_Set_Input>
  where: Kc_Dca_Order_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_By_PkArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_Inc_Input>
  _set?: InputMaybe<Kc_Dca_Order_Set_Input>
  pk_columns: Kc_Dca_Order_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_HistoryArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_History_Inc_Input>
  _set?: InputMaybe<Kc_Dca_Order_History_Set_Input>
  where: Kc_Dca_Order_History_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Dca_Order_History_By_PkArgs = {
  _inc?: InputMaybe<Kc_Dca_Order_History_Inc_Input>
  _set?: InputMaybe<Kc_Dca_Order_History_Set_Input>
  pk_columns: Kc_Dca_Order_History_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_ExchangeArgs = {
  _set?: InputMaybe<Kc_Exchange_Set_Input>
  where: Kc_Exchange_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Exchange_By_PkArgs = {
  _set?: InputMaybe<Kc_Exchange_Set_Input>
  pk_columns: Kc_Exchange_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Primary_CurrencyArgs = {
  _set?: InputMaybe<Kc_Exchange_Primary_Currency_Set_Input>
  where: Kc_Exchange_Primary_Currency_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Primary_Currency_By_PkArgs = {
  _set?: InputMaybe<Kc_Exchange_Primary_Currency_Set_Input>
  pk_columns: Kc_Exchange_Primary_Currency_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Secondary_CurrencyArgs = {
  _set?: InputMaybe<Kc_Exchange_Secondary_Currency_Set_Input>
  where: Kc_Exchange_Secondary_Currency_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Exchange_Secondary_Currency_By_PkArgs = {
  _set?: InputMaybe<Kc_Exchange_Secondary_Currency_Set_Input>
  pk_columns: Kc_Exchange_Secondary_Currency_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_MarketArgs = {
  _set?: InputMaybe<Kc_Market_Set_Input>
  where: Kc_Market_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Market_By_PkArgs = {
  _set?: InputMaybe<Kc_Market_Set_Input>
  pk_columns: Kc_Market_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Market_PriceArgs = {
  _inc?: InputMaybe<Kc_Market_Price_Inc_Input>
  _set?: InputMaybe<Kc_Market_Price_Set_Input>
  where: Kc_Market_Price_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Market_Price_By_PkArgs = {
  _inc?: InputMaybe<Kc_Market_Price_Inc_Input>
  _set?: InputMaybe<Kc_Market_Price_Set_Input>
  pk_columns: Kc_Market_Price_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Market_Trading_PairArgs = {
  _set?: InputMaybe<Kc_Market_Trading_Pair_Set_Input>
  where: Kc_Market_Trading_Pair_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_OrderArgs = {
  _inc?: InputMaybe<Kc_Order_Inc_Input>
  _set?: InputMaybe<Kc_Order_Set_Input>
  where: Kc_Order_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Order_By_PkArgs = {
  _inc?: InputMaybe<Kc_Order_Inc_Input>
  _set?: InputMaybe<Kc_Order_Set_Input>
  pk_columns: Kc_Order_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_TradeArgs = {
  _inc?: InputMaybe<Kc_Trade_Inc_Input>
  _set?: InputMaybe<Kc_Trade_Set_Input>
  where: Kc_Trade_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Trade_By_PkArgs = {
  _inc?: InputMaybe<Kc_Trade_Inc_Input>
  _set?: InputMaybe<Kc_Trade_Set_Input>
  pk_columns: Kc_Trade_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Type_Trade_Avg_Price_By_WindowArgs = {
  _inc?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Inc_Input>
  _set?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Set_Input>
  where: Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_Type_Trade_Sum_By_WindowArgs = {
  _inc?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Inc_Input>
  _set?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Set_Input>
  where: Kc_Type_Trade_Sum_By_Window_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_UserArgs = {
  _inc?: InputMaybe<Kc_User_Inc_Input>
  _set?: InputMaybe<Kc_User_Set_Input>
  where: Kc_User_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_2faArgs = {
  _inc?: InputMaybe<Kc_User_2fa_Inc_Input>
  _set?: InputMaybe<Kc_User_2fa_Set_Input>
  where: Kc_User_2fa_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_2fa_By_PkArgs = {
  _inc?: InputMaybe<Kc_User_2fa_Inc_Input>
  _set?: InputMaybe<Kc_User_2fa_Set_Input>
  pk_columns: Kc_User_2fa_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_By_PkArgs = {
  _inc?: InputMaybe<Kc_User_Inc_Input>
  _set?: InputMaybe<Kc_User_Set_Input>
  pk_columns: Kc_User_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_DeviceArgs = {
  _set?: InputMaybe<Kc_User_Device_Set_Input>
  where: Kc_User_Device_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Device_By_PkArgs = {
  _set?: InputMaybe<Kc_User_Device_Set_Input>
  pk_columns: Kc_User_Device_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Email_VerifyArgs = {
  _set?: InputMaybe<Kc_User_Email_Verify_Set_Input>
  where: Kc_User_Email_Verify_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Email_Verify_By_PkArgs = {
  _set?: InputMaybe<Kc_User_Email_Verify_Set_Input>
  pk_columns: Kc_User_Email_Verify_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Exchange_KeysArgs = {
  _inc?: InputMaybe<Kc_User_Exchange_Keys_Inc_Input>
  _set?: InputMaybe<Kc_User_Exchange_Keys_Set_Input>
  where: Kc_User_Exchange_Keys_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Exchange_Keys_By_PkArgs = {
  _inc?: InputMaybe<Kc_User_Exchange_Keys_Inc_Input>
  _set?: InputMaybe<Kc_User_Exchange_Keys_Set_Input>
  pk_columns: Kc_User_Exchange_Keys_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Password_ResetArgs = {
  _set?: InputMaybe<Kc_User_Password_Reset_Set_Input>
  where: Kc_User_Password_Reset_Bool_Exp
}

/** Mutation root */
export type Mutation_RootUpdate_Kc_User_Password_Reset_By_PkArgs = {
  _set?: InputMaybe<Kc_User_Password_Reset_Set_Input>
  pk_columns: Kc_User_Password_Reset_Pk_Columns_Input
}

/** Mutation root */
export type Mutation_RootUpdate_UserArgs = {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

/** Mutation root */
export type Mutation_RootUpdate_User_Exchange_KeysArgs = {
  description?: InputMaybe<Scalars['String']>
  keys?: InputMaybe<Scalars['jsonb']>
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootValidate_User_Exchange_KeysArgs = {
  user_exchange_keys_uid: Scalars['uuid']
}

/** Mutation root */
export type Mutation_RootValidate_User_Exchange_Keys_LiveArgs = {
  exchange_uid: Scalars['uuid']
  keys: Scalars['jsonb']
}

/** Mutation root */
export type Mutation_RootValidate_User_Password_ResetArgs = {
  password_reset_secret: Scalars['String']
}

/** Mutation root */
export type Mutation_RootVerify_User_EmailArgs = {
  email_verify_secret: Scalars['String']
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
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

export type Price_Fx_Kc_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** Fetch data from the table: "kc.balance" */
  kc_balance: Kc_Balance[]
  /** Fetch aggregated fields from the table: "kc.balance" */
  kc_balance_aggregate: Kc_Balance_Aggregate
  /** Fetch data from the table: "kc.balance" using primary key columns */
  kc_balance_by_pk?: Maybe<Kc_Balance>
  /** Fetch data from the table: "kc.currency" */
  kc_currency: Kc_Currency[]
  /** Fetch aggregated fields from the table: "kc.currency" */
  kc_currency_aggregate: Kc_Currency_Aggregate
  /** Fetch data from the table: "kc.currency" using primary key columns */
  kc_currency_by_pk?: Maybe<Kc_Currency>
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
  /** Fetch aggregated fields from the table: "kc.exchange" */
  kc_exchange_aggregate: Kc_Exchange_Aggregate
  /** Fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Kc_Exchange_Primary_Currency[]
  /** Fetch aggregated fields from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency_aggregate: Kc_Exchange_Primary_Currency_Aggregate
  /** Fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>
  /** Fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Kc_Exchange_Secondary_Currency[]
  /** Fetch aggregated fields from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency_aggregate: Kc_Exchange_Secondary_Currency_Aggregate
  /** Fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Fetch data from the table: "kc.market" */
  kc_market: Kc_Market[]
  /** Fetch aggregated fields from the table: "kc.market" */
  kc_market_aggregate: Kc_Market_Aggregate
  /** Fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>
  /** Fetch data from the table: "kc.market_price" */
  kc_market_price: Kc_Market_Price[]
  /** Fetch aggregated fields from the table: "kc.market_price" */
  kc_market_price_aggregate: Kc_Market_Price_Aggregate
  /** Fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Kc_Market_Price[]
  /** Execute function "kc.market_price_latest" and query aggregates on result of table type "kc.market_price" */
  kc_market_price_latest_aggregate: Kc_Market_Price_Aggregate
  /** Fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Kc_Market_Trading_Pair[]
  /** Fetch aggregated fields from the table: "kc.market_trading_pair" */
  kc_market_trading_pair_aggregate: Kc_Market_Trading_Pair_Aggregate
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
  /** Execute function "kc.trade_avg_price_by_window" which returns "kc.type_trade_avg_price_by_window" */
  kc_trade_avg_price_by_window: Kc_Type_Trade_Avg_Price_By_Window[]
  /** Execute function "kc.trade_avg_price_by_window" and query aggregates on result of table type "kc.type_trade_avg_price_by_window" */
  kc_trade_avg_price_by_window_aggregate: Kc_Type_Trade_Avg_Price_By_Window_Aggregate
  /** Fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Execute function "kc.trade_sum_by_window" which returns "kc.type_trade_sum_by_window" */
  kc_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
  /** Execute function "kc.trade_sum_by_window" and query aggregates on result of table type "kc.type_trade_sum_by_window" */
  kc_trade_sum_by_window_aggregate: Kc_Type_Trade_Sum_By_Window_Aggregate
  /** Fetch data from the table: "kc.type_trade_avg_price_by_window" */
  kc_type_trade_avg_price_by_window: Kc_Type_Trade_Avg_Price_By_Window[]
  /** Fetch aggregated fields from the table: "kc.type_trade_avg_price_by_window" */
  kc_type_trade_avg_price_by_window_aggregate: Kc_Type_Trade_Avg_Price_By_Window_Aggregate
  /** Fetch data from the table: "kc.type_trade_sum_by_window" */
  kc_type_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
  /** Fetch aggregated fields from the table: "kc.type_trade_sum_by_window" */
  kc_type_trade_sum_by_window_aggregate: Kc_Type_Trade_Sum_By_Window_Aggregate
  /** Fetch data from the table: "kc.user" */
  kc_user: Kc_User[]
  /** Fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Kc_User_2fa[]
  /** Fetch aggregated fields from the table: "kc.user_2fa" */
  kc_user_2fa_aggregate: Kc_User_2fa_Aggregate
  /** Fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Fetch aggregated fields from the table: "kc.user" */
  kc_user_aggregate: Kc_User_Aggregate
  /** Fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>
  /** Fetch data from the table: "kc.user_device" */
  kc_user_device: Kc_User_Device[]
  /** Fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate
  /** Fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Fetch data from the table: "kc.user_email_verify" */
  kc_user_email_verify: Kc_User_Email_Verify[]
  /** Fetch aggregated fields from the table: "kc.user_email_verify" */
  kc_user_email_verify_aggregate: Kc_User_Email_Verify_Aggregate
  /** Fetch data from the table: "kc.user_email_verify" using primary key columns */
  kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>
  /** Fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Kc_User_Exchange_Keys[]
  /** Fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
  /** Fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
  /** Fetch data from the table: "kc.user_password_reset" */
  kc_user_password_reset: Kc_User_Password_Reset[]
  /** Fetch aggregated fields from the table: "kc.user_password_reset" */
  kc_user_password_reset_aggregate: Kc_User_Password_Reset_Aggregate
  /** Fetch data from the table: "kc.user_password_reset" using primary key columns */
  kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>
  query_prices: PriceOutput[]
  query_stripe_config: QueryStripeConfigOutput
  query_subscriptions?: Maybe<QuerySubscriptionsOutput>
  query_user_email?: Maybe<QueryUserEmailOutput>
  query_user_limit?: Maybe<QueryUserLimitOutput>
  setup_user_2fa?: Maybe<SetupUser2FaOutput>
}

export type Query_RootKc_BalanceArgs = {
  distinct_on?: InputMaybe<Kc_Balance_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Balance_Order_By[]>
  where?: InputMaybe<Kc_Balance_Bool_Exp>
}

export type Query_RootKc_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Balance_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Balance_Order_By[]>
  where?: InputMaybe<Kc_Balance_Bool_Exp>
}

export type Query_RootKc_Balance_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_CurrencyArgs = {
  distinct_on?: InputMaybe<Kc_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Currency_Order_By[]>
  where?: InputMaybe<Kc_Currency_Bool_Exp>
}

export type Query_RootKc_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Currency_Order_By[]>
  where?: InputMaybe<Kc_Currency_Bool_Exp>
}

export type Query_RootKc_Currency_By_PkArgs = {
  symbol: Scalars['String']
}

export type Query_RootKc_Dca_OrderArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

export type Query_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

export type Query_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Query_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Query_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_ExchangeArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Bool_Exp>
}

export type Query_RootKc_Exchange_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Bool_Exp>
}

export type Query_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_Exchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Primary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

export type Query_RootKc_Exchange_Primary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Primary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

export type Query_RootKc_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Query_RootKc_Exchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Secondary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

export type Query_RootKc_Exchange_Secondary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Secondary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

export type Query_RootKc_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Query_RootKc_MarketArgs = {
  distinct_on?: InputMaybe<Kc_Market_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Order_By[]>
  where?: InputMaybe<Kc_Market_Bool_Exp>
}

export type Query_RootKc_Market_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Order_By[]>
  where?: InputMaybe<Kc_Market_Bool_Exp>
}

export type Query_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_Market_PriceArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Query_RootKc_Market_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Query_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String']
  currency: Scalars['String']
  market_uid: Scalars['uuid']
  source_currency: Scalars['bpchar']
  timestamp: Scalars['timestamptz']
}

export type Query_RootKc_Market_Price_LatestArgs = {
  args: Kc_Market_Price_Latest_Args
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Query_RootKc_Market_Price_Latest_AggregateArgs = {
  args: Kc_Market_Price_Latest_Args
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Query_RootKc_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Kc_Market_Trading_Pair_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Trading_Pair_Order_By[]>
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
}

export type Query_RootKc_Market_Trading_Pair_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Trading_Pair_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Trading_Pair_Order_By[]>
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
}

export type Query_RootKc_OrderArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

export type Query_RootKc_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

export type Query_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_TradeArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

export type Query_RootKc_Trade_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

export type Query_RootKc_Trade_Avg_Price_By_WindowArgs = {
  args: Kc_Trade_Avg_Price_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Query_RootKc_Trade_Avg_Price_By_Window_AggregateArgs = {
  args: Kc_Trade_Avg_Price_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Query_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_Trade_Sum_By_WindowArgs = {
  args: Kc_Trade_Sum_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Query_RootKc_Trade_Sum_By_Window_AggregateArgs = {
  args: Kc_Trade_Sum_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Query_RootKc_Type_Trade_Avg_Price_By_WindowArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Query_RootKc_Type_Trade_Avg_Price_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Query_RootKc_Type_Trade_Sum_By_WindowArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Query_RootKc_Type_Trade_Sum_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Query_RootKc_UserArgs = {
  distinct_on?: InputMaybe<Kc_User_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Order_By[]>
  where?: InputMaybe<Kc_User_Bool_Exp>
}

export type Query_RootKc_User_2faArgs = {
  distinct_on?: InputMaybe<Kc_User_2fa_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_2fa_Order_By[]>
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>
}

export type Query_RootKc_User_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_2fa_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_2fa_Order_By[]>
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>
}

export type Query_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Order_By[]>
  where?: InputMaybe<Kc_User_Bool_Exp>
}

export type Query_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_DeviceArgs = {
  distinct_on?: InputMaybe<Kc_User_Device_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Device_Order_By[]>
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

export type Query_RootKc_User_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Device_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Device_Order_By[]>
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

export type Query_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_Email_VerifyArgs = {
  distinct_on?: InputMaybe<Kc_User_Email_Verify_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Email_Verify_Order_By[]>
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>
}

export type Query_RootKc_User_Email_Verify_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Email_Verify_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Email_Verify_Order_By[]>
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>
}

export type Query_RootKc_User_Email_Verify_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Query_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Query_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootKc_User_Password_ResetArgs = {
  distinct_on?: InputMaybe<Kc_User_Password_Reset_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Password_Reset_Order_By[]>
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>
}

export type Query_RootKc_User_Password_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Password_Reset_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Password_Reset_Order_By[]>
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>
}

export type Query_RootKc_User_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Query_RootQuery_User_EmailArgs = {
  user_uid: Scalars['uuid']
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>
  _gt?: InputMaybe<Scalars['smallint']>
  _gte?: InputMaybe<Scalars['smallint']>
  _in?: InputMaybe<Array<Scalars['smallint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['smallint']>
  _lte?: InputMaybe<Scalars['smallint']>
  _neq?: InputMaybe<Scalars['smallint']>
  _nin?: InputMaybe<Array<Scalars['smallint']>>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** Fetch data from the table: "kc.balance" */
  kc_balance: Kc_Balance[]
  /** Fetch aggregated fields from the table: "kc.balance" */
  kc_balance_aggregate: Kc_Balance_Aggregate
  /** Fetch data from the table: "kc.balance" using primary key columns */
  kc_balance_by_pk?: Maybe<Kc_Balance>
  /** Fetch data from the table: "kc.currency" */
  kc_currency: Kc_Currency[]
  /** Fetch aggregated fields from the table: "kc.currency" */
  kc_currency_aggregate: Kc_Currency_Aggregate
  /** Fetch data from the table: "kc.currency" using primary key columns */
  kc_currency_by_pk?: Maybe<Kc_Currency>
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
  /** Fetch aggregated fields from the table: "kc.exchange" */
  kc_exchange_aggregate: Kc_Exchange_Aggregate
  /** Fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Kc_Exchange_Primary_Currency[]
  /** Fetch aggregated fields from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency_aggregate: Kc_Exchange_Primary_Currency_Aggregate
  /** Fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>
  /** Fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Kc_Exchange_Secondary_Currency[]
  /** Fetch aggregated fields from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency_aggregate: Kc_Exchange_Secondary_Currency_Aggregate
  /** Fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Fetch data from the table: "kc.market" */
  kc_market: Kc_Market[]
  /** Fetch aggregated fields from the table: "kc.market" */
  kc_market_aggregate: Kc_Market_Aggregate
  /** Fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>
  /** Fetch data from the table: "kc.market_price" */
  kc_market_price: Kc_Market_Price[]
  /** Fetch aggregated fields from the table: "kc.market_price" */
  kc_market_price_aggregate: Kc_Market_Price_Aggregate
  /** Fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Kc_Market_Price[]
  /** Execute function "kc.market_price_latest" and query aggregates on result of table type "kc.market_price" */
  kc_market_price_latest_aggregate: Kc_Market_Price_Aggregate
  /** Fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Kc_Market_Trading_Pair[]
  /** Fetch aggregated fields from the table: "kc.market_trading_pair" */
  kc_market_trading_pair_aggregate: Kc_Market_Trading_Pair_Aggregate
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
  /** Execute function "kc.trade_avg_price_by_window" which returns "kc.type_trade_avg_price_by_window" */
  kc_trade_avg_price_by_window: Kc_Type_Trade_Avg_Price_By_Window[]
  /** Execute function "kc.trade_avg_price_by_window" and query aggregates on result of table type "kc.type_trade_avg_price_by_window" */
  kc_trade_avg_price_by_window_aggregate: Kc_Type_Trade_Avg_Price_By_Window_Aggregate
  /** Fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Execute function "kc.trade_sum_by_window" which returns "kc.type_trade_sum_by_window" */
  kc_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
  /** Execute function "kc.trade_sum_by_window" and query aggregates on result of table type "kc.type_trade_sum_by_window" */
  kc_trade_sum_by_window_aggregate: Kc_Type_Trade_Sum_By_Window_Aggregate
  /** Fetch data from the table: "kc.type_trade_avg_price_by_window" */
  kc_type_trade_avg_price_by_window: Kc_Type_Trade_Avg_Price_By_Window[]
  /** Fetch aggregated fields from the table: "kc.type_trade_avg_price_by_window" */
  kc_type_trade_avg_price_by_window_aggregate: Kc_Type_Trade_Avg_Price_By_Window_Aggregate
  /** Fetch data from the table: "kc.type_trade_sum_by_window" */
  kc_type_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
  /** Fetch aggregated fields from the table: "kc.type_trade_sum_by_window" */
  kc_type_trade_sum_by_window_aggregate: Kc_Type_Trade_Sum_By_Window_Aggregate
  /** Fetch data from the table: "kc.user" */
  kc_user: Kc_User[]
  /** Fetch data from the table: "kc.user_2fa" */
  kc_user_2fa: Kc_User_2fa[]
  /** Fetch aggregated fields from the table: "kc.user_2fa" */
  kc_user_2fa_aggregate: Kc_User_2fa_Aggregate
  /** Fetch data from the table: "kc.user_2fa" using primary key columns */
  kc_user_2fa_by_pk?: Maybe<Kc_User_2fa>
  /** Fetch aggregated fields from the table: "kc.user" */
  kc_user_aggregate: Kc_User_Aggregate
  /** Fetch data from the table: "kc.user" using primary key columns */
  kc_user_by_pk?: Maybe<Kc_User>
  /** Fetch data from the table: "kc.user_device" */
  kc_user_device: Kc_User_Device[]
  /** Fetch aggregated fields from the table: "kc.user_device" */
  kc_user_device_aggregate: Kc_User_Device_Aggregate
  /** Fetch data from the table: "kc.user_device" using primary key columns */
  kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Fetch data from the table: "kc.user_email_verify" */
  kc_user_email_verify: Kc_User_Email_Verify[]
  /** Fetch aggregated fields from the table: "kc.user_email_verify" */
  kc_user_email_verify_aggregate: Kc_User_Email_Verify_Aggregate
  /** Fetch data from the table: "kc.user_email_verify" using primary key columns */
  kc_user_email_verify_by_pk?: Maybe<Kc_User_Email_Verify>
  /** Fetch data from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys: Kc_User_Exchange_Keys[]
  /** Fetch aggregated fields from the table: "kc.user_exchange_keys" */
  kc_user_exchange_keys_aggregate: Kc_User_Exchange_Keys_Aggregate
  /** Fetch data from the table: "kc.user_exchange_keys" using primary key columns */
  kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
  /** Fetch data from the table: "kc.user_password_reset" */
  kc_user_password_reset: Kc_User_Password_Reset[]
  /** Fetch aggregated fields from the table: "kc.user_password_reset" */
  kc_user_password_reset_aggregate: Kc_User_Password_Reset_Aggregate
  /** Fetch data from the table: "kc.user_password_reset" using primary key columns */
  kc_user_password_reset_by_pk?: Maybe<Kc_User_Password_Reset>
}

export type Subscription_RootKc_BalanceArgs = {
  distinct_on?: InputMaybe<Kc_Balance_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Balance_Order_By[]>
  where?: InputMaybe<Kc_Balance_Bool_Exp>
}

export type Subscription_RootKc_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Balance_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Balance_Order_By[]>
  where?: InputMaybe<Kc_Balance_Bool_Exp>
}

export type Subscription_RootKc_Balance_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_CurrencyArgs = {
  distinct_on?: InputMaybe<Kc_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Currency_Order_By[]>
  where?: InputMaybe<Kc_Currency_Bool_Exp>
}

export type Subscription_RootKc_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Currency_Order_By[]>
  where?: InputMaybe<Kc_Currency_Bool_Exp>
}

export type Subscription_RootKc_Currency_By_PkArgs = {
  symbol: Scalars['String']
}

export type Subscription_RootKc_Dca_OrderArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_Dca_Order_HistoryArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_History_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Dca_Order_History_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Dca_Order_History_Order_By[]>
  where?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
}

export type Subscription_RootKc_Dca_Order_History_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_ExchangeArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Bool_Exp>
}

export type Subscription_RootKc_Exchange_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Bool_Exp>
}

export type Subscription_RootKc_Exchange_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_Exchange_Primary_CurrencyArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Primary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

export type Subscription_RootKc_Exchange_Primary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Primary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Primary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Primary_Currency_Bool_Exp>
}

export type Subscription_RootKc_Exchange_Primary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Subscription_RootKc_Exchange_Secondary_CurrencyArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Secondary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

export type Subscription_RootKc_Exchange_Secondary_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Exchange_Secondary_Currency_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Exchange_Secondary_Currency_Order_By[]>
  where?: InputMaybe<Kc_Exchange_Secondary_Currency_Bool_Exp>
}

export type Subscription_RootKc_Exchange_Secondary_Currency_By_PkArgs = {
  exchange_uid: Scalars['uuid']
  symbol: Scalars['String']
}

export type Subscription_RootKc_MarketArgs = {
  distinct_on?: InputMaybe<Kc_Market_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Order_By[]>
  where?: InputMaybe<Kc_Market_Bool_Exp>
}

export type Subscription_RootKc_Market_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Order_By[]>
  where?: InputMaybe<Kc_Market_Bool_Exp>
}

export type Subscription_RootKc_Market_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_Market_PriceArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Subscription_RootKc_Market_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Subscription_RootKc_Market_Price_By_PkArgs = {
  asset_symbol: Scalars['String']
  currency: Scalars['String']
  market_uid: Scalars['uuid']
  source_currency: Scalars['bpchar']
  timestamp: Scalars['timestamptz']
}

export type Subscription_RootKc_Market_Price_LatestArgs = {
  args: Kc_Market_Price_Latest_Args
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Subscription_RootKc_Market_Price_Latest_AggregateArgs = {
  args: Kc_Market_Price_Latest_Args
  distinct_on?: InputMaybe<Kc_Market_Price_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Price_Order_By[]>
  where?: InputMaybe<Kc_Market_Price_Bool_Exp>
}

export type Subscription_RootKc_Market_Trading_PairArgs = {
  distinct_on?: InputMaybe<Kc_Market_Trading_Pair_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Trading_Pair_Order_By[]>
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
}

export type Subscription_RootKc_Market_Trading_Pair_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Market_Trading_Pair_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Market_Trading_Pair_Order_By[]>
  where?: InputMaybe<Kc_Market_Trading_Pair_Bool_Exp>
}

export type Subscription_RootKc_OrderArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

export type Subscription_RootKc_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Order_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Order_Order_By[]>
  where?: InputMaybe<Kc_Order_Bool_Exp>
}

export type Subscription_RootKc_Order_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_TradeArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

export type Subscription_RootKc_Trade_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Trade_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Trade_Order_By[]>
  where?: InputMaybe<Kc_Trade_Bool_Exp>
}

export type Subscription_RootKc_Trade_Avg_Price_By_WindowArgs = {
  args: Kc_Trade_Avg_Price_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Trade_Avg_Price_By_Window_AggregateArgs = {
  args: Kc_Trade_Avg_Price_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Trade_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_Trade_Sum_By_WindowArgs = {
  args: Kc_Trade_Sum_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Trade_Sum_By_Window_AggregateArgs = {
  args: Kc_Trade_Sum_By_Window_Args
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Type_Trade_Avg_Price_By_WindowArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Type_Trade_Avg_Price_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Avg_Price_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Type_Trade_Sum_By_WindowArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Subscription_RootKc_Type_Trade_Sum_By_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Order_By[]>
  where?: InputMaybe<Kc_Type_Trade_Sum_By_Window_Bool_Exp>
}

export type Subscription_RootKc_UserArgs = {
  distinct_on?: InputMaybe<Kc_User_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Order_By[]>
  where?: InputMaybe<Kc_User_Bool_Exp>
}

export type Subscription_RootKc_User_2faArgs = {
  distinct_on?: InputMaybe<Kc_User_2fa_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_2fa_Order_By[]>
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>
}

export type Subscription_RootKc_User_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_2fa_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_2fa_Order_By[]>
  where?: InputMaybe<Kc_User_2fa_Bool_Exp>
}

export type Subscription_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Order_By[]>
  where?: InputMaybe<Kc_User_Bool_Exp>
}

export type Subscription_RootKc_User_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_DeviceArgs = {
  distinct_on?: InputMaybe<Kc_User_Device_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Device_Order_By[]>
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

export type Subscription_RootKc_User_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Device_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Device_Order_By[]>
  where?: InputMaybe<Kc_User_Device_Bool_Exp>
}

export type Subscription_RootKc_User_Device_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_Email_VerifyArgs = {
  distinct_on?: InputMaybe<Kc_User_Email_Verify_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Email_Verify_Order_By[]>
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>
}

export type Subscription_RootKc_User_Email_Verify_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Email_Verify_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Email_Verify_Order_By[]>
  where?: InputMaybe<Kc_User_Email_Verify_Bool_Exp>
}

export type Subscription_RootKc_User_Email_Verify_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_Exchange_KeysArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Subscription_RootKc_User_Exchange_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Exchange_Keys_Order_By[]>
  where?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
}

export type Subscription_RootKc_User_Exchange_Keys_By_PkArgs = {
  uid: Scalars['uuid']
}

export type Subscription_RootKc_User_Password_ResetArgs = {
  distinct_on?: InputMaybe<Kc_User_Password_Reset_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Password_Reset_Order_By[]>
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>
}

export type Subscription_RootKc_User_Password_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Kc_User_Password_Reset_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Kc_User_Password_Reset_Order_By[]>
  where?: InputMaybe<Kc_User_Password_Reset_Bool_Exp>
}

export type Subscription_RootKc_User_Password_Reset_By_PkArgs = {
  uid: Scalars['uuid']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

export type Total_Balance_Fx_Kc_Balance_Args = {
  currency?: InputMaybe<Scalars['String']>
}

export type Total_Value_Fx_Kc_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type Value_Fx_Kc_Trade_Args = {
  currency?: InputMaybe<Scalars['String']>
}

export type CreateCurrencyMutationVariables = Exact<{
  name: Scalars['String']
  symbol: Scalars['String']
  createdAt: Scalars['timestamptz']
  updatedAt: Scalars['timestamptz']
}>

export type CreateCurrencyMutation = {
  __typename?: 'mutation_root'
  insert_kc_currency_one?:
    | {
        __typename?: 'kc_currency'
        symbol: string
        name: string
      }
    | undefined
}

export type GetCurrencyListQueryVariables = Exact<Record<string, never>>

export type GetCurrencyListQuery = {
  __typename?: 'query_root'
  kc_currency: Array<{
    __typename?: 'kc_currency'
    created_at: string
    updated_at: string
    symbol: string
    name: string
  }>
}

export type GetExchangeListQueryVariables = Exact<Record<string, never>>

export type GetExchangeListQuery = {
  __typename?: 'query_root'
  kc_exchange: Array<{
    __typename?: 'kc_exchange'
    created_at: string
    updated_at: string
    uid: string
    id: string
    name: string
    url: string
    primary_currencies: Array<{
      __typename?: 'kc_exchange_primary_currency'
      symbol: string
    }>
    secondary_currencies: Array<{
      __typename?: 'kc_exchange_secondary_currency'
      symbol: string
    }>
  }>
}

export type CreateExchangePrimaryCurrencyMutationVariables = Exact<{
  exchangeUID: Scalars['uuid']
  symbol: Scalars['String']
  createdAt: Scalars['timestamptz']
  updatedAt: Scalars['timestamptz']
}>

export type CreateExchangePrimaryCurrencyMutation = {
  __typename?: 'mutation_root'
  insert_kc_exchange_primary_currency_one?:
    | {
        __typename?: 'kc_exchange_primary_currency'
        exchange_uid: string
        symbol: string
      }
    | undefined
}

export type CreateExchangeSecondaryCurrencyMutationVariables = Exact<{
  exchangeUID: Scalars['uuid']
  symbol: Scalars['String']
  createdAt: Scalars['timestamptz']
  updatedAt: Scalars['timestamptz']
}>

export type CreateExchangeSecondaryCurrencyMutation = {
  __typename?: 'mutation_root'
  insert_kc_exchange_secondary_currency_one?:
    | {
        __typename?: 'kc_exchange_secondary_currency'
        exchange_uid: string
        symbol: string
      }
    | undefined
}

export type GetUserListQueryVariables = Exact<Record<string, never>>

export type GetUserListQuery = {
  __typename?: 'query_root'
  kc_user: Array<{
    __typename?: 'kc_user'
    uid: string
    email_verified: boolean
  }>
}

export type QueryUserEmailQueryVariables = Exact<{
  userUID: Scalars['uuid']
}>

export type QueryUserEmailQuery = {
  __typename?: 'query_root'
  query_user_email?:
    | {
        __typename?: 'QueryUserEmailOutput'
        email: string
      }
    | undefined
}

export const CreateCurrencyDocument = gql`
  mutation createCurrency(
    $name: String!
    $symbol: String!
    $createdAt: timestamptz!
    $updatedAt: timestamptz!
  ) {
    insert_kc_currency_one(
      object: {
        name: $name
        symbol: $symbol
        created_at: $createdAt
        updated_at: $updatedAt
      }
    ) {
      symbol
      name
    }
  }
`
export type CreateCurrencyMutationFn = Apollo.MutationFunction<
  CreateCurrencyMutation,
  CreateCurrencyMutationVariables
>
export type CreateCurrencyMutationResult =
  Apollo.MutationResult<CreateCurrencyMutation>
export type CreateCurrencyMutationOptions = Apollo.BaseMutationOptions<
  CreateCurrencyMutation,
  CreateCurrencyMutationVariables
>
export const GetCurrencyListDocument = gql`
  query getCurrencyList {
    kc_currency {
      created_at
      updated_at
      symbol
      name
    }
  }
`
export type GetCurrencyListQueryResult = Apollo.QueryResult<
  GetCurrencyListQuery,
  GetCurrencyListQueryVariables
>
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
`
export type GetExchangeListQueryResult = Apollo.QueryResult<
  GetExchangeListQuery,
  GetExchangeListQueryVariables
>
export const CreateExchangePrimaryCurrencyDocument = gql`
  mutation createExchangePrimaryCurrency(
    $exchangeUID: uuid!
    $symbol: String!
    $createdAt: timestamptz!
    $updatedAt: timestamptz!
  ) {
    insert_kc_exchange_primary_currency_one(
      object: {
        exchange_uid: $exchangeUID
        symbol: $symbol
        created_at: $createdAt
        updated_at: $updatedAt
      }
    ) {
      exchange_uid
      symbol
    }
  }
`
export type CreateExchangePrimaryCurrencyMutationFn = Apollo.MutationFunction<
  CreateExchangePrimaryCurrencyMutation,
  CreateExchangePrimaryCurrencyMutationVariables
>
export type CreateExchangePrimaryCurrencyMutationResult =
  Apollo.MutationResult<CreateExchangePrimaryCurrencyMutation>
export type CreateExchangePrimaryCurrencyMutationOptions =
  Apollo.BaseMutationOptions<
    CreateExchangePrimaryCurrencyMutation,
    CreateExchangePrimaryCurrencyMutationVariables
  >
export const CreateExchangeSecondaryCurrencyDocument = gql`
  mutation createExchangeSecondaryCurrency(
    $exchangeUID: uuid!
    $symbol: String!
    $createdAt: timestamptz!
    $updatedAt: timestamptz!
  ) {
    insert_kc_exchange_secondary_currency_one(
      object: {
        exchange_uid: $exchangeUID
        symbol: $symbol
        created_at: $createdAt
        updated_at: $updatedAt
      }
    ) {
      exchange_uid
      symbol
    }
  }
`
export type CreateExchangeSecondaryCurrencyMutationFn = Apollo.MutationFunction<
  CreateExchangeSecondaryCurrencyMutation,
  CreateExchangeSecondaryCurrencyMutationVariables
>
export type CreateExchangeSecondaryCurrencyMutationResult =
  Apollo.MutationResult<CreateExchangeSecondaryCurrencyMutation>
export type CreateExchangeSecondaryCurrencyMutationOptions =
  Apollo.BaseMutationOptions<
    CreateExchangeSecondaryCurrencyMutation,
    CreateExchangeSecondaryCurrencyMutationVariables
  >
export const GetUserListDocument = gql`
  query getUserList {
    kc_user {
      uid
      email_verified
    }
  }
`
export type GetUserListQueryResult = Apollo.QueryResult<
  GetUserListQuery,
  GetUserListQueryVariables
>
export const QueryUserEmailDocument = gql`
  query queryUserEmail($userUID: uuid!) {
    query_user_email(user_uid: $userUID) {
      email
    }
  }
`
export type QueryUserEmailQueryResult = Apollo.QueryResult<
  QueryUserEmailQuery,
  QueryUserEmailQueryVariables
>
