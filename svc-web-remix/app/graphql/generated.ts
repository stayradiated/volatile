import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

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
  subscription: StripeSubscription[]
}

export type CreateAuthTokenOutput = {
  __typename?: 'CreateAuthTokenOutput'
  auth_token: Scalars['String']
  expires_at: Scalars['timestamptz']
  user?: Maybe<Kc_User>
  user_uid: Scalars['String']
}

export type CreateDcaOrderResult = {
  __typename?: 'CreateDCAOrderResult'
  dca_order?: Maybe<Kc_Dca_Order>
  dca_order_uid: Scalars['uuid']
}

export type CreateSubscription = {
  __typename?: 'CreateSubscription'
  client_secret: Scalars['String']
  subscription_id: Scalars['String']
}

export type CreateUserExchangeKeysOutput = {
  __typename?: 'CreateUserExchangeKeysOutput'
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys>
  user_exchange_keys_uid: Scalars['uuid']
}

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput'
  user_uid: Scalars['String']
}

export type DeleteUser2FaOutput = {
  __typename?: 'DeleteUser2FAOutput'
  user?: Maybe<Kc_User>
  user_uid: Scalars['uuid']
}

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput'
  user_uid: Scalars['uuid']
}

export type EnableUser2FaOutput = {
  __typename?: 'EnableUser2FAOutput'
  user?: Maybe<Kc_User>
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
  subscriptions: StripeSubscription[]
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
  user?: Maybe<Kc_User>
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

export type StripeSubscription = {
  __typename?: 'StripeSubscription'
  application_fee_percent?: Maybe<Scalars['String']>
  automatic_tax?: Maybe<StripeSubscriptionAutomaticTax>
  billing_cycle_anchor?: Maybe<Scalars['Int']>
  billing_thresholds?: Maybe<Scalars['String']>
  cancel_at?: Maybe<Scalars['String']>
  cancel_at_period_end?: Maybe<Scalars['Boolean']>
  canceled_at?: Maybe<Scalars['String']>
  collection_method?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['Int']>
  current_period_end: Scalars['Int']
  current_period_start?: Maybe<Scalars['Int']>
  customer?: Maybe<Scalars['String']>
  days_until_due?: Maybe<Scalars['String']>
  default_payment_method?: Maybe<Scalars['String']>
  default_source?: Maybe<Scalars['String']>
  default_tax_rates?: Maybe<Array<Maybe<Scalars['String']>>>
  discount?: Maybe<Scalars['String']>
  ended_at?: Maybe<Scalars['String']>
  id: Scalars['String']
  items?: Maybe<StripeSubscriptionItem>
  latest_invoice?: Maybe<Scalars['String']>
  livemode?: Maybe<Scalars['Boolean']>
  next_pending_invoice_item_invoice?: Maybe<Scalars['String']>
  object?: Maybe<Scalars['String']>
  pause_collection?: Maybe<Scalars['String']>
  payment_settings?: Maybe<StripeSubscriptionPaymentSettings>
  pending_invoice_item_interval?: Maybe<Scalars['String']>
  pending_setup_intent?: Maybe<Scalars['String']>
  pending_update?: Maybe<Scalars['String']>
  plan: StripeSubscriptionPlan
  quantity?: Maybe<Scalars['Int']>
  schedule?: Maybe<Scalars['String']>
  start_date?: Maybe<Scalars['Int']>
  status: Scalars['String']
  transfer_data?: Maybe<Scalars['String']>
  trial_end?: Maybe<Scalars['String']>
  trial_start?: Maybe<Scalars['String']>
}

export type StripeSubscriptionAutomaticTax = {
  __typename?: 'StripeSubscriptionAutomaticTax'
  enabled?: Maybe<Scalars['Boolean']>
}

export type StripeSubscriptionItem = {
  __typename?: 'StripeSubscriptionItem'
  data?: Maybe<Array<Maybe<StripeSubscriptionItemData>>>
  has_more?: Maybe<Scalars['Boolean']>
  object?: Maybe<Scalars['String']>
  total_count?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
}

export type StripeSubscriptionItemData = {
  __typename?: 'StripeSubscriptionItemData'
  billing_thresholds?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  object?: Maybe<Scalars['String']>
  plan?: Maybe<StripeSubscriptionPlan>
  price?: Maybe<StripeSubscriptionPrice>
  quantity?: Maybe<Scalars['Int']>
  subscription?: Maybe<Scalars['String']>
  tax_rates?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type StripeSubscriptionMetadata = {
  __typename?: 'StripeSubscriptionMetadata'
  lookup_key?: Maybe<Scalars['String']>
}

export type StripeSubscriptionPaymentSettings = {
  __typename?: 'StripeSubscriptionPaymentSettings'
  payment_method_options?: Maybe<Scalars['String']>
  payment_method_types?: Maybe<Scalars['String']>
}

export type StripeSubscriptionPlan = {
  __typename?: 'StripeSubscriptionPlan'
  active?: Maybe<Scalars['Boolean']>
  aggregate_usage?: Maybe<Scalars['String']>
  amount: Scalars['Int']
  amount_decimal: Scalars['String']
  billing_scheme?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['Int']>
  currency: Scalars['String']
  id?: Maybe<Scalars['String']>
  interval?: Maybe<Scalars['String']>
  interval_count?: Maybe<Scalars['Int']>
  livemode?: Maybe<Scalars['Boolean']>
  metadata?: Maybe<StripeSubscriptionMetadata>
  nickname?: Maybe<Scalars['String']>
  object?: Maybe<Scalars['String']>
  product?: Maybe<Scalars['String']>
  tiers_mode?: Maybe<Scalars['String']>
  transform_usage?: Maybe<Scalars['String']>
  trial_period_days?: Maybe<Scalars['String']>
  usage_type?: Maybe<Scalars['String']>
}

export type StripeSubscriptionPrice = {
  __typename?: 'StripeSubscriptionPrice'
  active?: Maybe<Scalars['Boolean']>
  billing_scheme?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['Int']>
  currency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  livemode?: Maybe<Scalars['Boolean']>
  lookup_key?: Maybe<Scalars['String']>
  metadata?: Maybe<StripeSubscriptionMetadata>
  nickname?: Maybe<Scalars['String']>
  object?: Maybe<Scalars['String']>
  product?: Maybe<Scalars['String']>
  recurring?: Maybe<StripeSubscriptionRecurring>
  tax_behavior?: Maybe<Scalars['String']>
  tiers_mode?: Maybe<Scalars['String']>
  transform_quantity?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  unit_amount?: Maybe<Scalars['Int']>
  unit_amount_decimal?: Maybe<Scalars['String']>
}

export type StripeSubscriptionRecurring = {
  __typename?: 'StripeSubscriptionRecurring'
  aggregate_usage?: Maybe<Scalars['String']>
  interval?: Maybe<Scalars['String']>
  interval_count?: Maybe<Scalars['Int']>
  trial_period_days?: Maybe<Scalars['String']>
  usage_type?: Maybe<Scalars['String']>
}

export type SyncExchangeOpenOrderListOutput = {
  __typename?: 'SyncExchangeOpenOrderListOutput'
  user?: Maybe<Kc_User>
  user_uid: Scalars['uuid']
}

export type SyncExchangeTradeListOutput = {
  __typename?: 'SyncExchangeTradeListOutput'
  user?: Maybe<Kc_User>
  user_uid: Scalars['uuid']
}

export type UpdateDcaOrderOutput = {
  __typename?: 'UpdateDCAOrderOutput'
  dca_order?: Maybe<Kc_Dca_Order>
  dca_order_uid: Scalars['uuid']
}

export type UpdateUserExchangeKeysOutput = {
  __typename?: 'UpdateUserExchangeKeysOutput'
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys>
  user_exchange_keys_uid: Scalars['uuid']
}

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput'
  user?: Maybe<Kc_User>
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
  user_exchange_keys?: Maybe<Kc_User_Exchange_Keys>
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

/** Columns and relationships of "kc.currency" */
export type Kc_Currency = {
  __typename?: 'kc_currency'
  created_at: Scalars['timestamptz']
  name: Scalars['String']
  symbol: Scalars['String']
  updated_at: Scalars['timestamptz']
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

/** Ordering options when selecting data from "kc.currency". */
export type Kc_Currency_Order_By = {
  created_at?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
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
  exchange_market_trading_pair?: Maybe<Kc_Market_Trading_Pair[]>
  exchange_uid: Scalars['uuid']
  interval_ms: Scalars['Int']
  last_run_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  market: Kc_Market
  market_offset: Scalars['numeric']
  /** An array relationship */
  market_prices: Kc_Market_Price[]
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
  daily_average?: InputMaybe<Scalars['numeric']>
  interval_ms?: InputMaybe<Scalars['Int']>
  market_offset?: InputMaybe<Scalars['numeric']>
  market_uid?: InputMaybe<Scalars['uuid']>
  max_price?: InputMaybe<Scalars['numeric']>
  max_value?: InputMaybe<Scalars['numeric']>
  min_price?: InputMaybe<Scalars['numeric']>
  min_value?: InputMaybe<Scalars['numeric']>
  start_at?: InputMaybe<Scalars['timestamptz']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  user_exchange_keys_uid?: InputMaybe<Scalars['uuid']>
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
  name: Scalars['String']
  /** An array relationship */
  orders: Kc_Order[]
  /** An aggregate relationship */
  orders_aggregate: Kc_Order_Aggregate
  /** An array relationship */
  primary_currencies: Kc_Exchange_Primary_Currency[]
  /** An array relationship */
  secondary_currencies: Kc_Exchange_Secondary_Currency[]
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
export type Kc_ExchangeSecondary_CurrenciesArgs = {
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

/** Boolean expression to filter rows from the table "kc.exchange". All fields are combined with a logical 'AND'. */
export type Kc_Exchange_Bool_Exp = {
  _and?: InputMaybe<Kc_Exchange_Bool_Exp[]>
  _not?: InputMaybe<Kc_Exchange_Bool_Exp>
  _or?: InputMaybe<Kc_Exchange_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  id?: InputMaybe<String_Comparison_Exp>
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

/** Ordering options when selecting data from "kc.exchange". */
export type Kc_Exchange_Order_By = {
  created_at?: InputMaybe<Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
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

/** Order by aggregate values of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Exchange_Primary_Currency_Max_Order_By>
  min?: InputMaybe<Kc_Exchange_Primary_Currency_Min_Order_By>
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

/** Order by max() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Order by min() on columns of table "kc.exchange_primary_currency" */
export type Kc_Exchange_Primary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
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

/** Order by aggregate values of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_Exchange_Secondary_Currency_Max_Order_By>
  min?: InputMaybe<Kc_Exchange_Secondary_Currency_Min_Order_By>
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

/** Order by max() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Order by min() on columns of table "kc.exchange_secondary_currency" */
export type Kc_Exchange_Secondary_Currency_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
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

export type Kc_Market_Price_Latest_Args = {
  asset_symbol?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  market_uid?: InputMaybe<Scalars['uuid']>
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

/** Order by stddev() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Order by stddev_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Order by stddev_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Stddev_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Order by sum() on columns of table "kc.market_price" */
export type Kc_Market_Price_Sum_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Order by var_pop() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Pop_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
}

/** Order by var_samp() on columns of table "kc.market_price" */
export type Kc_Market_Price_Var_Samp_Order_By = {
  fx_rate?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  source_price?: InputMaybe<Order_By>
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

/** Order by max() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Max_Order_By = {
  market_uid?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
}

/** Order by min() on columns of table "kc.market_trading_pair" */
export type Kc_Market_Trading_Pair_Min_Order_By = {
  market_uid?: InputMaybe<Order_By>
  primary_currency_symbol?: InputMaybe<Order_By>
  secondary_currency_symbol?: InputMaybe<Order_By>
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
  uid: Scalars['uuid']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: Kc_User
  user_uid: Scalars['uuid']
}

/** Boolean expression to filter rows from the table "kc.user_2fa". All fields are combined with a logical 'AND'. */
export type Kc_User_2fa_Bool_Exp = {
  _and?: InputMaybe<Kc_User_2fa_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_2fa_Bool_Exp>
  _or?: InputMaybe<Kc_User_2fa_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
}

/** Ordering options when selecting data from "kc.user_2fa". */
export type Kc_User_2fa_Order_By = {
  created_at?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
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
  _and?: InputMaybe<Kc_User_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Bool_Exp>
  _or?: InputMaybe<Kc_User_Bool_Exp[]>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dca_order_histories?: InputMaybe<Kc_Dca_Order_History_Bool_Exp>
  dca_orders?: InputMaybe<Kc_Dca_Order_Bool_Exp>
  email_verified?: InputMaybe<Boolean_Comparison_Exp>
  orders?: InputMaybe<Kc_Order_Bool_Exp>
  trades?: InputMaybe<Kc_Trade_Bool_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_2fa?: InputMaybe<Kc_User_2fa_Bool_Exp>
  user_devices?: InputMaybe<Kc_User_Device_Bool_Exp>
  user_exchange_keys?: InputMaybe<Kc_User_Exchange_Keys_Bool_Exp>
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
  columns?: InputMaybe<Kc_User_Device_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.user_device" */
export type Kc_User_Device_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_User_Device_Max_Order_By>
  min?: InputMaybe<Kc_User_Device_Min_Order_By>
}

/** Boolean expression to filter rows from the table "kc.user_device". All fields are combined with a logical 'AND'. */
export type Kc_User_Device_Bool_Exp = {
  _and?: InputMaybe<Kc_User_Device_Bool_Exp[]>
  _not?: InputMaybe<Kc_User_Device_Bool_Exp>
  _or?: InputMaybe<Kc_User_Device_Bool_Exp[]>
  accessed_at?: InputMaybe<Timestamptz_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  trusted?: InputMaybe<Boolean_Comparison_Exp>
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
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
  accessed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
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
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['uuid']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_uid?: Maybe<Scalars['uuid']>
}

/** Order by min() on columns of table "kc.user_device" */
export type Kc_User_Device_Min_Order_By = {
  accessed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
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

/** Ordering options when selecting data from "kc.user_device". */
export type Kc_User_Device_Order_By = {
  accessed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
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
  name?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
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
  count: Scalars['Int']
  max?: Maybe<Kc_User_Exchange_Keys_Max_Fields>
  min?: Maybe<Kc_User_Exchange_Keys_Min_Fields>
}

/** Aggregate fields of "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Kc_User_Exchange_Keys_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Order by aggregate values of table "kc.user_exchange_keys" */
export type Kc_User_Exchange_Keys_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Kc_User_Exchange_Keys_Max_Order_By>
  min?: InputMaybe<Kc_User_Exchange_Keys_Min_Order_By>
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
  uid?: InputMaybe<Uuid_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Kc_User_Bool_Exp>
  user_uid?: InputMaybe<Uuid_Comparison_Exp>
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
  created_at?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  exchange_uid?: InputMaybe<Order_By>
  invalidated_at?: InputMaybe<Order_By>
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

/** Ordering options when selecting data from "kc.user_exchange_keys". */
export type Kc_User_Exchange_Keys_Order_By = {
  created_at?: InputMaybe<Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  description?: InputMaybe<Order_By>
  exchange?: InputMaybe<Kc_Exchange_Order_By>
  exchange_uid?: InputMaybe<Order_By>
  invalidated_at?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user?: InputMaybe<Kc_User_Order_By>
  user_uid?: InputMaybe<Order_By>
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
  created_at?: InputMaybe<Order_By>
  dca_order_histories_aggregate?: InputMaybe<Kc_Dca_Order_History_Aggregate_Order_By>
  dca_orders_aggregate?: InputMaybe<Kc_Dca_Order_Aggregate_Order_By>
  email_verified?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Kc_Order_Aggregate_Order_By>
  trades_aggregate?: InputMaybe<Kc_Trade_Aggregate_Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_2fa?: InputMaybe<Kc_User_2fa_Order_By>
  user_devices_aggregate?: InputMaybe<Kc_User_Device_Aggregate_Order_By>
  user_exchange_keys_aggregate?: InputMaybe<Kc_User_Exchange_Keys_Aggregate_Order_By>
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
  cancel_subscription?: Maybe<CancelSubscriptionOutput>
  create_auth_token?: Maybe<CreateAuthTokenOutput>
  create_dca_order?: Maybe<CreateDcaOrderResult>
  create_subscription?: Maybe<CreateSubscription>
  create_user?: Maybe<CreateUserOutput>
  create_user_exchange_keys?: Maybe<CreateUserExchangeKeysOutput>
  /** Delete data from the table: "kc.dca_order" */
  delete_kc_dca_order?: Maybe<Kc_Dca_Order_Mutation_Response>
  /** Delete single row from the table: "kc.dca_order" */
  delete_kc_dca_order_by_pk?: Maybe<Kc_Dca_Order>
  /** Delete data from the table: "kc.user_device" */
  delete_kc_user_device?: Maybe<Kc_User_Device_Mutation_Response>
  /** Delete single row from the table: "kc.user_device" */
  delete_kc_user_device_by_pk?: Maybe<Kc_User_Device>
  /** Delete data from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys?: Maybe<Kc_User_Exchange_Keys_Mutation_Response>
  /** Delete single row from the table: "kc.user_exchange_keys" */
  delete_kc_user_exchange_keys_by_pk?: Maybe<Kc_User_Exchange_Keys>
  delete_user?: Maybe<DeleteUserOutput>
  delete_user_2fa?: Maybe<DeleteUser2FaOutput>
  enable_user_2fa?: Maybe<EnableUser2FaOutput>
  refresh_auth_token?: Maybe<RefreshAuthTokenOutput>
  reset_user_password: ResetUserPasswordOutput
  send_user_email_verify: SendUserEmailVerifyOutput
  send_user_password_reset: SendUserPasswordResetOutput
  sync_exchange_open_order_list?: Maybe<SyncExchangeOpenOrderListOutput>
  sync_exchange_trade_list?: Maybe<SyncExchangeTradeListOutput>
  update_dca_order: UpdateDcaOrderOutput
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
export type Mutation_RootDelete_Kc_Dca_OrderArgs = {
  where: Kc_Dca_Order_Bool_Exp
}

/** Mutation root */
export type Mutation_RootDelete_Kc_Dca_Order_By_PkArgs = {
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
  /** Fetch data from the table: "kc.balance" using primary key columns */
  kc_balance_by_pk?: Maybe<Kc_Balance>
  /** Fetch data from the table: "kc.currency" */
  kc_currency: Kc_Currency[]
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
  /** Fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Kc_Exchange_Primary_Currency[]
  /** Fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>
  /** Fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Kc_Exchange_Secondary_Currency[]
  /** Fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Fetch data from the table: "kc.market" */
  kc_market: Kc_Market[]
  /** Fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>
  /** Fetch data from the table: "kc.market_price" */
  kc_market_price: Kc_Market_Price[]
  /** Fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Kc_Market_Price[]
  /** Fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Kc_Market_Trading_Pair[]
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
  /** Fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Execute function "kc.trade_sum_by_window" which returns "kc.type_trade_sum_by_window" */
  kc_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
  /** Fetch data from the table: "kc.type_trade_avg_price_by_window" */
  kc_type_trade_avg_price_by_window: Kc_Type_Trade_Avg_Price_By_Window[]
  /** Fetch data from the table: "kc.type_trade_sum_by_window" */
  kc_type_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
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
  query_prices: PriceOutput[]
  query_stripe_config: QueryStripeConfigOutput
  query_subscriptions?: Maybe<QuerySubscriptionsOutput>
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

export type Query_RootKc_Market_Trading_PairArgs = {
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

export type Query_RootKc_Type_Trade_Avg_Price_By_WindowArgs = {
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

export type Query_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
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

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** Fetch data from the table: "kc.balance" */
  kc_balance: Kc_Balance[]
  /** Fetch data from the table: "kc.balance" using primary key columns */
  kc_balance_by_pk?: Maybe<Kc_Balance>
  /** Fetch data from the table: "kc.currency" */
  kc_currency: Kc_Currency[]
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
  /** Fetch data from the table: "kc.exchange" using primary key columns */
  kc_exchange_by_pk?: Maybe<Kc_Exchange>
  /** Fetch data from the table: "kc.exchange_primary_currency" */
  kc_exchange_primary_currency: Kc_Exchange_Primary_Currency[]
  /** Fetch data from the table: "kc.exchange_primary_currency" using primary key columns */
  kc_exchange_primary_currency_by_pk?: Maybe<Kc_Exchange_Primary_Currency>
  /** Fetch data from the table: "kc.exchange_secondary_currency" */
  kc_exchange_secondary_currency: Kc_Exchange_Secondary_Currency[]
  /** Fetch data from the table: "kc.exchange_secondary_currency" using primary key columns */
  kc_exchange_secondary_currency_by_pk?: Maybe<Kc_Exchange_Secondary_Currency>
  /** Fetch data from the table: "kc.market" */
  kc_market: Kc_Market[]
  /** Fetch data from the table: "kc.market" using primary key columns */
  kc_market_by_pk?: Maybe<Kc_Market>
  /** Fetch data from the table: "kc.market_price" */
  kc_market_price: Kc_Market_Price[]
  /** Fetch data from the table: "kc.market_price" using primary key columns */
  kc_market_price_by_pk?: Maybe<Kc_Market_Price>
  /** Execute function "kc.market_price_latest" which returns "kc.market_price" */
  kc_market_price_latest: Kc_Market_Price[]
  /** Fetch data from the table: "kc.market_trading_pair" */
  kc_market_trading_pair: Kc_Market_Trading_Pair[]
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
  /** Fetch data from the table: "kc.trade" using primary key columns */
  kc_trade_by_pk?: Maybe<Kc_Trade>
  /** Execute function "kc.trade_sum_by_window" which returns "kc.type_trade_sum_by_window" */
  kc_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
  /** Fetch data from the table: "kc.type_trade_avg_price_by_window" */
  kc_type_trade_avg_price_by_window: Kc_Type_Trade_Avg_Price_By_Window[]
  /** Fetch data from the table: "kc.type_trade_sum_by_window" */
  kc_type_trade_sum_by_window: Kc_Type_Trade_Sum_By_Window[]
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

export type Subscription_RootKc_BalanceArgs = {
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

export type Subscription_RootKc_Market_Trading_PairArgs = {
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

export type Subscription_RootKc_Type_Trade_Avg_Price_By_WindowArgs = {
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

export type Subscription_RootKc_User_2fa_By_PkArgs = {
  uid: Scalars['uuid']
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

export type DcaOrderHistoryPriceChart_Kc_Dca_Order_HistoryFragment = {
  __typename?: 'kc_dca_order_history'
  created_at: any
  created_order: boolean
  market_price: any
  market_offset: any
  value: any
  available_balance: any
}

export type CancelSubscriptionMutationVariables = Exact<{
  subscriptionID: Scalars['String']
}>

export type CancelSubscriptionMutation = {
  __typename?: 'mutation_root'
  cancel_subscription?:
    | {
        __typename?: 'CancelSubscriptionOutput'
        subscription: Array<{
          __typename?: 'StripeSubscription'
          id: string
          status: string
        }>
      }
    | undefined
}

export type CreateAuthTokenMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
  deviceID: Scalars['String']
  deviceName: Scalars['String']
  deviceTrusted: Scalars['Boolean']
  token2FA?: InputMaybe<Scalars['String']>
}>

export type CreateAuthTokenMutation = {
  __typename?: 'mutation_root'
  create_auth_token?:
    | {
        __typename?: 'CreateAuthTokenOutput'
        user_uid: string
        auth_token: string
        expires_at: any
      }
    | undefined
}

export type CreateSubscriptionMutationVariables = Exact<{
  priceId: Scalars['String']
}>

export type CreateSubscriptionMutation = {
  __typename?: 'mutation_root'
  create_subscription?:
    | {
        __typename?: 'CreateSubscription'
        client_secret: string
        subscription_id: string
      }
    | undefined
}

export type CreateUserExchangeKeysMutationVariables = Exact<{
  description: Scalars['String']
  exchangeUID: Scalars['uuid']
  keys: Scalars['jsonb']
}>

export type CreateUserExchangeKeysMutation = {
  __typename?: 'mutation_root'
  create_user_exchange_keys?:
    | {
        __typename?: 'CreateUserExchangeKeysOutput'
        user_exchange_keys?:
          | {
              __typename?: 'kc_user_exchange_keys'
              uid: any
              description: string
              invalidated_at?: any | undefined
              exchange: { __typename?: 'kc_exchange'; uid: any }
              dca_orders_aggregate: {
                __typename?: 'kc_dca_order_aggregate'
                aggregate?:
                  | {
                      __typename?: 'kc_dca_order_aggregate_fields'
                      count: number
                    }
                  | undefined
              }
            }
          | undefined
      }
    | undefined
}

export type DeleteDcaOrderMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
}>

export type DeleteDcaOrderMutation = {
  __typename?: 'mutation_root'
  delete_kc_dca_order_by_pk?:
    | { __typename?: 'kc_dca_order'; uid: any }
    | undefined
}

export type DeleteUserMutationVariables = Exact<Record<string, never>>

export type DeleteUserMutation = {
  __typename?: 'mutation_root'
  delete_user?: { __typename?: 'DeleteUserOutput'; user_uid: any } | undefined
}

export type DeleteUser2FaMutationVariables = Exact<{
  token: Scalars['String']
}>

export type DeleteUser2FaMutation = {
  __typename?: 'mutation_root'
  delete_user_2fa?:
    | {
        __typename?: 'DeleteUser2FAOutput'
        user?:
          | {
              __typename?: 'kc_user'
              uid: any
              user_2fa?:
                | {
                    __typename?: 'kc_user_2fa'
                    created_at: any
                    name: string
                    uid: any
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}

export type DeleteUserDeviceMutationVariables = Exact<{
  userDeviceUID: Scalars['uuid']
}>

export type DeleteUserDeviceMutation = {
  __typename?: 'mutation_root'
  delete_kc_user_device_by_pk?:
    | {
        __typename?: 'kc_user_device'
        uid: any
      }
    | undefined
}

export type DeleteUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid']
}>

export type DeleteUserExchangeKeysMutation = {
  __typename?: 'mutation_root'
  delete_kc_user_exchange_keys_by_pk?:
    | {
        __typename?: 'kc_user_exchange_keys'
        uid: any
      }
    | undefined
}

export type EnableUser2FaMutationVariables = Exact<{
  name: Scalars['String']
  secret: Scalars['String']
  token: Scalars['String']
}>

export type EnableUser2FaMutation = {
  __typename?: 'mutation_root'
  enable_user_2fa?:
    | {
        __typename?: 'EnableUser2FAOutput'
        user?:
          | {
              __typename?: 'kc_user'
              uid: any
              user_2fa?:
                | {
                    __typename?: 'kc_user_2fa'
                    created_at: any
                    name: string
                    uid: any
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}

export type UseResetUserPasswordMutationVariables = Exact<{
  passwordResetSecret: Scalars['String']
  newPassword: Scalars['String']
  deviceID: Scalars['String']
  deviceName: Scalars['String']
  deviceTrusted: Scalars['Boolean']
  token2FA?: InputMaybe<Scalars['String']>
}>

export type UseResetUserPasswordMutation = {
  __typename?: 'mutation_root'
  reset_user_password: {
    __typename?: 'ResetUserPasswordOutput'
    user_uid: any
    auth_token: string
    expires_at: any
  }
}

export type SendUserEmailVerifyMutationVariables = Exact<Record<string, never>>

export type SendUserEmailVerifyMutation = {
  __typename?: 'mutation_root'
  send_user_email_verify: {
    __typename?: 'SendUserEmailVerifyOutput'
    user_uid: any
  }
}

export type SendUserPasswordResetMutationVariables = Exact<{
  email: Scalars['String']
}>

export type SendUserPasswordResetMutation = {
  __typename?: 'mutation_root'
  send_user_password_reset: {
    __typename?: 'SendUserPasswordResetOutput'
    email: string
  }
}

export type UpdateDcaOrderMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
  values: Kc_Dca_Order_Set_Input
}>

export type UpdateDcaOrderMutation = {
  __typename?: 'mutation_root'
  update_kc_dca_order_by_pk?:
    | {
        __typename?: 'kc_dca_order'
        uid: any
        daily_average: any
        enabled_at?: any | undefined
        interval_ms: number
        market_offset: any
        market_uid: any
        max_value?: any | undefined
        min_value?: any | undefined
        start_at: any
        updated_at: any
        user_exchange_keys_uid: any
      }
    | undefined
}

export type UpdateDcaOrderEnabledMutationVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
  enabled: Scalars['Boolean']
}>

export type UpdateDcaOrderEnabledMutation = {
  __typename?: 'mutation_root'
  update_dca_order: {
    __typename?: 'UpdateDCAOrderOutput'
    dca_order?:
      | {
          __typename?: 'kc_dca_order'
          uid: any
          enabled_at?: any | undefined
        }
      | undefined
  }
}

export type UpdateUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}>

export type UpdateUserMutation = {
  __typename?: 'mutation_root'
  update_user: { __typename?: 'UpdateUserOutput'; user_uid: any }
}

export type UpdateUserDeviceMutationVariables = Exact<{
  userDeviceUID: Scalars['uuid']
  name?: InputMaybe<Scalars['String']>
}>

export type UpdateUserDeviceMutation = {
  __typename?: 'mutation_root'
  update_kc_user_device_by_pk?:
    | {
        __typename?: 'kc_user_device'
        uid: any
        name: string
      }
    | undefined
}

export type UpdateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid']
  description?: InputMaybe<Scalars['String']>
  keys?: InputMaybe<Scalars['jsonb']>
}>

export type UpdateUserExchangeKeysMutation = {
  __typename?: 'mutation_root'
  update_user_exchange_keys?:
    | {
        __typename?: 'UpdateUserExchangeKeysOutput'
        user_exchange_keys?:
          | {
              __typename?: 'kc_user_exchange_keys'
              uid: any
              description: string
              invalidated_at?: any | undefined
              exchange: { __typename?: 'kc_exchange'; uid: any }
              dca_orders_aggregate: {
                __typename?: 'kc_dca_order_aggregate'
                aggregate?:
                  | {
                      __typename?: 'kc_dca_order_aggregate_fields'
                      count: number
                    }
                  | undefined
              }
            }
          | undefined
      }
    | undefined
}

export type ValidateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid']
}>

export type ValidateUserExchangeKeysMutation = {
  __typename?: 'mutation_root'
  validate_user_exchange_keys?:
    | {
        __typename?: 'ValidateUserExchangeKeysOutput'
        is_valid: boolean
        validation_message?: string | undefined
      }
    | undefined
}

export type ValidateUserExchangeKeysLiveMutationVariables = Exact<{
  exchangeUID: Scalars['uuid']
  keys: Scalars['jsonb']
}>

export type ValidateUserExchangeKeysLiveMutation = {
  __typename?: 'mutation_root'
  validate_user_exchange_keys_live?:
    | {
        __typename?: 'ValidateUserExchangeKeysLiveOutput'
        is_valid: boolean
        validation_message?: string | undefined
      }
    | undefined
}

export type ValidateUserPasswordResetMutationVariables = Exact<{
  passwordResetSecret: Scalars['String']
}>

export type ValidateUserPasswordResetMutation = {
  __typename?: 'mutation_root'
  validate_user_password_reset: {
    __typename?: 'ValidatUserPasswordResetOutput'
    is_valid: boolean
    email?: string | undefined
  }
}

export type VerifyUserEmailMutationVariables = Exact<{
  emailVerifySecret: Scalars['String']
}>

export type VerifyUserEmailMutation = {
  __typename?: 'mutation_root'
  verify_user_email: { __typename?: 'VerifyUserEmailOutput'; email: string }
}

export type GetDcaOrderFormCreateQueryVariables = Exact<Record<string, never>>

export type GetDcaOrderFormCreateQuery = {
  __typename?: 'query_root'
  kc_market: Array<{
    __typename?: 'kc_market'
    uid: any
    name: string
    market_prices: Array<{
      __typename?: 'kc_market_price'
      asset_symbol: string
      currency: string
    }>
  }>
  kc_user_exchange_keys: Array<{
    __typename?: 'kc_user_exchange_keys'
    uid: any
    description: string
    exchange_uid: any
  }>
  kc_exchange: Array<{
    __typename?: 'kc_exchange'
    uid: any
    name: string
    primary_currencies: Array<{
      __typename?: 'kc_exchange_primary_currency'
      symbol: string
      currency: { __typename?: 'kc_currency'; name: string }
    }>
    secondary_currencies: Array<{
      __typename?: 'kc_exchange_secondary_currency'
      symbol: string
      currency: { __typename?: 'kc_currency'; name: string }
    }>
  }>
}

export type GetDcaOrderFormEditQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
}>

export type GetDcaOrderFormEditQuery = {
  __typename?: 'query_root'
  kc_market: Array<{
    __typename?: 'kc_market'
    uid: any
    name: string
    market_prices: Array<{
      __typename?: 'kc_market_price'
      asset_symbol: string
      currency: string
    }>
  }>
  kc_user_exchange_keys: Array<{
    __typename?: 'kc_user_exchange_keys'
    uid: any
    exchange_uid: any
    description: string
  }>
  kc_dca_order_by_pk?:
    | {
        __typename?: 'kc_dca_order'
        uid: any
        user_exchange_keys_uid: any
        exchange_uid: any
        market_uid: any
        start_at: any
        market_offset: any
        daily_average: any
        interval_ms: number
        min_value?: any | undefined
        max_value?: any | undefined
        primary_currency: {
          __typename?: 'kc_currency'
          symbol: string
          name: string
        }
        secondary_currency: {
          __typename?: 'kc_currency'
          symbol: string
          name: string
        }
        exchange: { __typename?: 'kc_exchange'; uid: any; name: string }
      }
    | undefined
}

export type GetDcaOrderHistoryListQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
  gt: Scalars['timestamptz']
  lte: Scalars['timestamptz']
}>

export type GetDcaOrderHistoryListQuery = {
  __typename?: 'query_root'
  kc_dca_order_by_pk?:
    | {
        __typename?: 'kc_dca_order'
        uid: any
        exchange: { __typename?: 'kc_exchange'; uid: any; name: string }
        primary_currency: { __typename?: 'kc_currency'; symbol: string }
        secondary_currency: { __typename?: 'kc_currency'; symbol: string }
      }
    | undefined
  kc_dca_order_history: Array<{
    __typename?: 'kc_dca_order_history'
    uid: any
    created_at: any
    market_price: any
    market_offset: any
    target_value: any
    available_balance: any
    created_order: boolean
    description: string
    value: any
  }>
}

export type GetDcaOrderHistoryPriceChartQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
  gt: Scalars['timestamptz']
  lte: Scalars['timestamptz']
}>

export type GetDcaOrderHistoryPriceChartQuery = {
  __typename?: 'query_root'
  kc_dca_order_by_pk?:
    | {
        __typename?: 'kc_dca_order'
        uid: any
        exchange_market_trading_pair?:
          | Array<{
              __typename?: 'kc_market_trading_pair'
              market_uid: any
              primary_currency_symbol: string
              secondary_currency_symbol: string
              market_prices: Array<{
                __typename?: 'kc_market_price'
                price: any
                timestamp: any
              }>
            }>
          | undefined
        market_prices: Array<{
          __typename?: 'kc_market_price'
          price: any
          timestamp: any
        }>
      }
    | undefined
}

export type GetDcaOrderListQueryVariables = Exact<Record<string, never>>

export type GetDcaOrderListQuery = {
  __typename?: 'query_root'
  kc_dca_order: Array<{
    __typename?: 'kc_dca_order'
    uid: any
    enabled_at?: any | undefined
    daily_average: any
    start_at: any
    market_offset: any
    interval_ms: number
    min_value?: any | undefined
    max_value?: any | undefined
    exchange: { __typename?: 'kc_exchange'; uid: any; id: string; name: string }
    primary_currency: { __typename?: 'kc_currency'; symbol: string }
    secondary_currency: { __typename?: 'kc_currency'; symbol: string }
  }>
}

export type GetDcaOrderDeleteQueryVariables = Exact<{
  dcaOrderUID: Scalars['uuid']
}>

export type GetDcaOrderDeleteQuery = {
  __typename?: 'query_root'
  kc_dca_order_by_pk?:
    | {
        __typename?: 'kc_dca_order'
        uid: any
        enabled_at?: any | undefined
        daily_average: any
        start_at: any
        market_offset: any
        min_value?: any | undefined
        max_value?: any | undefined
        exchange: { __typename?: 'kc_exchange'; uid: any; name: string }
        primary_currency: { __typename?: 'kc_currency'; symbol: string }
        secondary_currency: { __typename?: 'kc_currency'; symbol: string }
      }
    | undefined
}

export type GetEmailVerifiedQueryVariables = Exact<Record<string, never>>

export type GetEmailVerifiedQuery = {
  __typename?: 'query_root'
  kc_user: Array<{ __typename?: 'kc_user'; uid: any; email_verified: boolean }>
}

export type GetExchangeKeysFormCreateQueryVariables = Exact<
  Record<string, never>
>

export type GetExchangeKeysFormCreateQuery = {
  __typename?: 'query_root'
  kc_exchange: Array<{
    __typename?: 'kc_exchange'
    uid: any
    id: string
    name: string
  }>
}

export type GetExchangeListQueryVariables = Exact<{
  currentTimestamp?: InputMaybe<Scalars['timestamptz']>
  historicTimestamp?: InputMaybe<Scalars['timestamptz']>
}>

export type GetExchangeListQuery = {
  __typename?: 'query_root'
  kc_user_exchange_keys: Array<{
    __typename?: 'kc_user_exchange_keys'
    uid: any
    exchange: {
      __typename?: 'kc_exchange'
      uid: any
      name: string
      url: string
    }
    balance_latest?:
      | Array<{
          __typename?: 'kc_balance'
          available_balance: any
          total_balance: any
          currency_symbol: string
          total_balance_nzd?: any | undefined
        }>
      | undefined
    balance_historic?:
      | Array<{
          __typename?: 'kc_balance'
          currency_symbol: string
          total_balance_nzd?: any | undefined
        }>
      | undefined
  }>
}

export type GetMarketPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String']
  secondaryCurrency: Scalars['String']
}>

export type GetMarketPriceQuery = {
  __typename?: 'query_root'
  binance_us: Array<{
    __typename?: 'kc_market'
    market_prices: Array<{
      __typename?: 'kc_market_price'
      price: any
      timestamp: any
    }>
  }>
  kiwi_coin: Array<{
    __typename?: 'kc_market'
    market_prices: Array<{
      __typename?: 'kc_market_price'
      price: any
      timestamp: any
    }>
  }>
  dasset: Array<{
    __typename?: 'kc_market'
    market_prices: Array<{
      __typename?: 'kc_market_price'
      price: any
      timestamp: any
    }>
  }>
  kraken: Array<{
    __typename?: 'kc_market'
    market_prices: Array<{
      __typename?: 'kc_market_price'
      price: any
      timestamp: any
    }>
  }>
  independent_reserve_aud: Array<{
    __typename?: 'kc_market'
    market_prices: Array<{
      __typename?: 'kc_market_price'
      price: any
      timestamp: any
    }>
  }>
  independent_reserve_nzd: Array<{
    __typename?: 'kc_market'
    market_prices: Array<{
      __typename?: 'kc_market_price'
      price: any
      timestamp: any
    }>
  }>
}

export type GetOpenOrderListQueryVariables = Exact<Record<string, never>>

export type GetOpenOrderListQuery = {
  __typename?: 'query_root'
  kc_order: Array<{
    __typename?: 'kc_order'
    uid: any
    opened_at: any
    value: any
    volume: any
    price: any
    primary_currency: string
    secondary_currency: string
    type: string
    exchange: { __typename?: 'kc_exchange'; uid: any; name: string }
    dca_order_histories: Array<{
      __typename?: 'kc_dca_order_history'
      uid: any
      dca_order_uid: any
    }>
  }>
}

export type GetPricesQueryVariables = Exact<Record<string, never>>

export type GetPricesQuery = {
  __typename?: 'query_root'
  query_prices: Array<{
    __typename?: 'PriceOutput'
    id: string
    type: string
    interval?: string | undefined
    interval_count?: number | undefined
    currency: string
    unit_amount: number
  }>
}

export type GetStripeConfigQueryVariables = Exact<Record<string, never>>

export type GetStripeConfigQuery = {
  __typename?: 'query_root'
  query_stripe_config: {
    __typename?: 'QueryStripeConfigOutput'
    publishable_key: string
  }
}

export type GetSubscriptionsQueryVariables = Exact<Record<string, never>>

export type GetSubscriptionsQuery = {
  __typename?: 'query_root'
  query_subscriptions?:
    | {
        __typename?: 'QuerySubscriptionsOutput'
        subscriptions: Array<{
          __typename?: 'StripeSubscription'
          id: string
          status: string
          created?: number | undefined
          current_period_end: number
          plan: {
            __typename?: 'StripeSubscriptionPlan'
            interval?: string | undefined
            interval_count?: number | undefined
            amount: number
            currency: string
          }
        }>
      }
    | undefined
}

export type GetTradeAvgPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String']
}>

export type GetTradeAvgPriceQuery = {
  __typename?: 'query_root'
  kc_trade_avg_price_by_window: Array<{
    __typename?: 'kc_type_trade_avg_price_by_window'
    timestamp?: any | undefined
    price?: any | undefined
    avg_price?: any | undefined
  }>
}

export type GetTradeCumulativeSumByDayQueryVariables = Exact<
  Record<string, never>
>

export type GetTradeCumulativeSumByDayQuery = {
  __typename?: 'query_root'
  kc_trade_avg_price_by_window: Array<{
    __typename?: 'kc_type_trade_avg_price_by_window'
    timestamp?: any | undefined
    primary_currency?: string | undefined
    total_value?: any | undefined
  }>
}

export type GetTradeCumulativeVolumeByDayQueryVariables = Exact<
  Record<string, never>
>

export type GetTradeCumulativeVolumeByDayQuery = {
  __typename?: 'query_root'
  kc_trade_avg_price_by_window: Array<{
    __typename?: 'kc_type_trade_avg_price_by_window'
    timestamp?: any | undefined
    primary_currency?: string | undefined
    volume?: any | undefined
  }>
}

export type GetTradeListQueryVariables = Exact<{
  filters: Kc_Trade_Bool_Exp
  offset: Scalars['Int']
  limit: Scalars['Int']
}>

export type GetTradeListQuery = {
  __typename?: 'query_root'
  kc_trade_aggregate: {
    __typename?: 'kc_trade_aggregate'
    aggregate?:
      | {
          __typename?: 'kc_trade_aggregate_fields'
          count: number
          sum?:
            | {
                __typename?: 'kc_trade_sum_fields'
                value?: any | undefined
                volume?: any | undefined
                fee?: any | undefined
              }
            | undefined
          min?:
            | {
                __typename?: 'kc_trade_min_fields'
                timestamp?: any | undefined
              }
            | undefined
          max?:
            | {
                __typename?: 'kc_trade_max_fields'
                timestamp?: any | undefined
              }
            | undefined
        }
      | undefined
  }
  kc_trade: Array<{
    __typename?: 'kc_trade'
    uid: any
    timestamp: any
    value: any
    volume: any
    primary_currency: string
    secondary_currency: string
    type: string
    price?: any | undefined
    total_value?: any | undefined
    fee?: any | undefined
    exchange: { __typename?: 'kc_exchange'; uid: any; id: string }
  }>
}

export type GetTradeSumValueByWeekQueryVariables = Exact<Record<string, never>>

export type GetTradeSumValueByWeekQuery = {
  __typename?: 'query_root'
  kc_trade_sum_by_window: Array<{
    __typename?: 'kc_type_trade_sum_by_window'
    timestamp?: any | undefined
    primary_currency?: string | undefined
    total_value?: any | undefined
  }>
}

export type GetUser2FaQueryVariables = Exact<Record<string, never>>

export type GetUser2FaQuery = {
  __typename?: 'query_root'
  kc_user: Array<{
    __typename?: 'kc_user'
    uid: any
    user_2fa?:
      | {
          __typename?: 'kc_user_2fa'
          created_at: any
          name: string
          uid: any
        }
      | undefined
  }>
}

export type GetUserDeviceByUidQueryVariables = Exact<{
  userDeviceUID: Scalars['uuid']
}>

export type GetUserDeviceByUidQuery = {
  __typename?: 'query_root'
  kc_user_device_by_pk?:
    | {
        __typename?: 'kc_user_device'
        uid: any
        name: string
      }
    | undefined
}

export type GetUserDeviceListQueryVariables = Exact<Record<string, never>>

export type GetUserDeviceListQuery = {
  __typename?: 'query_root'
  kc_user_device: Array<{
    __typename?: 'kc_user_device'
    uid: any
    name: string
    created_at: any
    accessed_at: any
  }>
}

export type GetUserExchangeKeysByUidQueryVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid']
}>

export type GetUserExchangeKeysByUidQuery = {
  __typename?: 'query_root'
  kc_user_exchange_keys_by_pk?:
    | {
        __typename?: 'kc_user_exchange_keys'
        uid: any
        description: string
      }
    | undefined
}

export type GetUserExchangeKeysFormEditQueryVariables = Exact<{
  userExchangeKeysUID: Scalars['uuid']
}>

export type GetUserExchangeKeysFormEditQuery = {
  __typename?: 'query_root'
  kc_user_exchange_keys_by_pk?:
    | {
        __typename?: 'kc_user_exchange_keys'
        uid: any
        description: string
        exchange: {
          __typename?: 'kc_exchange'
          uid: any
          id: string
          name: string
        }
      }
    | undefined
}

export type GetUserExchangeKeysListQueryVariables = Exact<Record<string, never>>

export type GetUserExchangeKeysListQuery = {
  __typename?: 'query_root'
  kc_user_exchange_keys: Array<{
    __typename?: 'kc_user_exchange_keys'
    uid: any
    description: string
    updated_at: any
    exchange: { __typename?: 'kc_exchange'; uid: any; name: string }
    dca_orders_aggregate: {
      __typename?: 'kc_dca_order_aggregate'
      aggregate?:
        | {
            __typename?: 'kc_dca_order_aggregate_fields'
            count: number
          }
        | undefined
    }
  }>
}

export type SetupUser2FaQueryVariables = Exact<Record<string, never>>

export type SetupUser2FaQuery = {
  __typename?: 'query_root'
  setup_user_2fa?:
    | {
        __typename?: 'SetupUser2FAOutput'
        qrcode: string
        secret: string
      }
    | undefined
}

export const DcaOrderHistoryPriceChart_Kc_Dca_Order_HistoryFragmentDoc = gql`
  fragment DCAOrderHistoryPriceChart_kc_dca_order_history on kc_dca_order_history {
    created_at
    created_order
    market_price
    market_offset
    value
    available_balance
  }
`
export const CancelSubscriptionDocument = gql`
  mutation CancelSubscription($subscriptionID: String!) {
    cancel_subscription(subscription_id: $subscriptionID) {
      subscription {
        id
        status
      }
    }
  }
`
export const CreateAuthTokenDocument = gql`
  mutation createAuthToken(
    $email: String!
    $password: String!
    $deviceID: String!
    $deviceName: String!
    $deviceTrusted: Boolean!
    $token2FA: String
  ) {
    create_auth_token(
      email: $email
      password: $password
      device_id: $deviceID
      device_name: $deviceName
      device_trusted: $deviceTrusted
      token_2fa: $token2FA
    ) {
      user_uid
      auth_token
      expires_at
    }
  }
`
export const CreateSubscriptionDocument = gql`
  mutation createSubscription($priceId: String!) {
    create_subscription(price_id: $priceId) {
      client_secret
      subscription_id
    }
  }
`
export const CreateUserExchangeKeysDocument = gql`
  mutation createUserExchangeKeys(
    $description: String!
    $exchangeUID: uuid!
    $keys: jsonb!
  ) {
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
`
export const DeleteDcaOrderDocument = gql`
  mutation deleteDCAOrder($dcaOrderUID: uuid!) {
    delete_kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
    }
  }
`
export const DeleteUserDocument = gql`
  mutation deleteUser {
    delete_user {
      user_uid
    }
  }
`
export const DeleteUser2FaDocument = gql`
  mutation deleteUser2FA($token: String!) {
    delete_user_2fa(token: $token) {
      user {
        uid
        user_2fa {
          created_at
          name
          uid
        }
      }
    }
  }
`
export const DeleteUserDeviceDocument = gql`
  mutation deleteUserDevice($userDeviceUID: uuid!) {
    delete_kc_user_device_by_pk(uid: $userDeviceUID) {
      uid
    }
  }
`
export const DeleteUserExchangeKeysDocument = gql`
  mutation deleteUserExchangeKeys($userExchangeKeysUID: uuid!) {
    delete_kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
      uid
    }
  }
`
export const EnableUser2FaDocument = gql`
  mutation enableUser2FA($name: String!, $secret: String!, $token: String!) {
    enable_user_2fa(name: $name, secret: $secret, token: $token) {
      user {
        uid
        user_2fa {
          created_at
          name
          uid
        }
      }
    }
  }
`
export const UseResetUserPasswordDocument = gql`
  mutation useResetUserPassword(
    $passwordResetSecret: String!
    $newPassword: String!
    $deviceID: String!
    $deviceName: String!
    $deviceTrusted: Boolean!
    $token2FA: String
  ) {
    reset_user_password(
      password_reset_secret: $passwordResetSecret
      new_password: $newPassword
      device_id: $deviceID
      device_name: $deviceName
      device_trusted: $deviceTrusted
      token_2fa: $token2FA
    ) {
      user_uid
      auth_token
      expires_at
    }
  }
`
export const SendUserEmailVerifyDocument = gql`
  mutation sendUserEmailVerify {
    send_user_email_verify {
      user_uid
    }
  }
`
export const SendUserPasswordResetDocument = gql`
  mutation sendUserPasswordReset($email: String!) {
    send_user_password_reset(email: $email) {
      email
    }
  }
`
export const UpdateDcaOrderDocument = gql`
  mutation updateDCAOrder(
    $dcaOrderUID: uuid!
    $values: kc_dca_order_set_input!
  ) {
    update_kc_dca_order_by_pk(
      pk_columns: { uid: $dcaOrderUID }
      _set: $values
    ) {
      uid
      daily_average
      enabled_at
      interval_ms
      market_offset
      market_uid
      max_value
      min_value
      start_at
      updated_at
      user_exchange_keys_uid
    }
  }
`
export const UpdateDcaOrderEnabledDocument = gql`
  mutation updateDCAOrderEnabled($dcaOrderUID: uuid!, $enabled: Boolean!) {
    update_dca_order(dca_order_uid: $dcaOrderUID, enabled: $enabled) {
      dca_order {
        uid
        enabled_at
      }
    }
  }
`
export const UpdateUserDocument = gql`
  mutation updateUser($email: String, $password: String) {
    update_user(email: $email, password: $password) {
      user_uid
    }
  }
`
export const UpdateUserDeviceDocument = gql`
  mutation updateUserDevice($userDeviceUID: uuid!, $name: String) {
    update_kc_user_device_by_pk(
      pk_columns: { uid: $userDeviceUID }
      _set: { name: $name }
    ) {
      uid
      name
    }
  }
`
export const UpdateUserExchangeKeysDocument = gql`
  mutation updateUserExchangeKeys(
    $userExchangeKeysUID: uuid!
    $description: String
    $keys: jsonb
  ) {
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
`
export const ValidateUserExchangeKeysDocument = gql`
  mutation validateUserExchangeKeys($userExchangeKeysUID: uuid!) {
    validate_user_exchange_keys(user_exchange_keys_uid: $userExchangeKeysUID) {
      is_valid
      validation_message
    }
  }
`
export const ValidateUserExchangeKeysLiveDocument = gql`
  mutation validateUserExchangeKeysLive($exchangeUID: uuid!, $keys: jsonb!) {
    validate_user_exchange_keys_live(exchange_uid: $exchangeUID, keys: $keys) {
      is_valid
      validation_message
    }
  }
`
export const ValidateUserPasswordResetDocument = gql`
  mutation validateUserPasswordReset($passwordResetSecret: String!) {
    validate_user_password_reset(password_reset_secret: $passwordResetSecret) {
      is_valid
      email
    }
  }
`
export const VerifyUserEmailDocument = gql`
  mutation verifyUserEmail($emailVerifySecret: String!) {
    verify_user_email(email_verify_secret: $emailVerifySecret) {
      email
    }
  }
`
export const GetDcaOrderFormCreateDocument = gql`
  query getDCAOrderFormCreate {
    kc_market {
      uid
      name
      market_prices(
        distinct_on: [asset_symbol, currency]
        where: { timestamp: { _gt: "2021-12-09T12:00:00" } }
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
`
export const GetDcaOrderFormEditDocument = gql`
  query getDCAOrderFormEdit($dcaOrderUID: uuid!) {
    kc_market {
      uid
      name
      market_prices(
        distinct_on: [asset_symbol, currency]
        where: { timestamp: { _gt: "2022-07-01T12:00:00" } }
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
      interval_ms
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
`
export const GetDcaOrderHistoryListDocument = gql`
  query getDCAOrderHistoryList(
    $dcaOrderUID: uuid!
    $gt: timestamptz!
    $lte: timestamptz!
  ) {
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
      where: {
        dca_order_uid: { _eq: $dcaOrderUID }
        created_at: { _lte: $lte, _gt: $gt }
      }
      order_by: { created_at: desc }
    ) {
      ...DCAOrderHistoryPriceChart_kc_dca_order_history
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
  ${DcaOrderHistoryPriceChart_Kc_Dca_Order_HistoryFragmentDoc}
`
export const GetDcaOrderHistoryPriceChartDocument = gql`
  query getDCAOrderHistoryPriceChart(
    $dcaOrderUID: uuid!
    $gt: timestamptz!
    $lte: timestamptz!
  ) {
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      exchange_market_trading_pair {
        market_uid
        primary_currency_symbol
        secondary_currency_symbol
        market_prices(
          where: { timestamp: { _lte: $lte, _gt: $gt } }
          order_by: { timestamp: desc }
        ) {
          price
          timestamp
        }
      }
      market_prices(
        where: { timestamp: { _lte: $lte, _gt: $gt } }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
  }
`
export const GetDcaOrderListDocument = gql`
  query getDCAOrderList {
    kc_dca_order(order_by: { enabled_at: desc_nulls_last }) {
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
      interval_ms
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
`
export const GetDcaOrderDeleteDocument = gql`
  query getDCAOrderDelete($dcaOrderUID: uuid!) {
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
`
export const GetEmailVerifiedDocument = gql`
  query getEmailVerified {
    kc_user {
      uid
      email_verified
    }
  }
`
export const GetExchangeKeysFormCreateDocument = gql`
  query getExchangeKeysFormCreate {
    kc_exchange {
      uid
      id
      name
    }
  }
`
export const GetExchangeListDocument = gql`
  query getExchangeList(
    $currentTimestamp: timestamptz
    $historicTimestamp: timestamptz
  ) {
    kc_user_exchange_keys(order_by: { created_at: asc }) {
      uid
      exchange {
        uid
        name
        url
      }
      balance_latest: balance(
        args: { timestamp_at: $currentTimestamp }
        order_by: { currency_symbol: asc }
      ) {
        available_balance
        total_balance
        total_balance_nzd: total_balance_fx(args: { currency: "NZD" })
        currency_symbol
      }
      balance_historic: balance(
        args: { timestamp_at: $historicTimestamp }
        order_by: { currency_symbol: asc }
      ) {
        total_balance_nzd: total_balance_fx(args: { currency: "NZD" })
        currency_symbol
      }
    }
  }
`
export const GetMarketPriceDocument = gql`
  query getMarketPrice($primaryCurrency: String!, $secondaryCurrency: String!) {
    binance_us: kc_market(where: { id: { _eq: "binance.us" } }) {
      market_prices(
        where: {
          asset_symbol: { _eq: $primaryCurrency }
          currency: { _eq: $secondaryCurrency }
        }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
    kiwi_coin: kc_market(where: { id: { _eq: "kiwi-coin.com" } }) {
      market_prices(
        where: {
          asset_symbol: { _eq: $primaryCurrency }
          currency: { _eq: $secondaryCurrency }
        }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
    dasset: kc_market(where: { id: { _eq: "dassetx.com" } }) {
      market_prices(
        where: {
          asset_symbol: { _eq: $primaryCurrency }
          currency: { _eq: $secondaryCurrency }
        }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
    kraken: kc_market(where: { id: { _eq: "kraken.com" } }) {
      market_prices(
        where: {
          asset_symbol: { _eq: $primaryCurrency }
          currency: { _eq: $secondaryCurrency }
        }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
    independent_reserve_aud: kc_market(
      where: { id: { _eq: "independentreserve.com" } }
    ) {
      market_prices(
        where: {
          source_currency: { _eq: "AUD" }
          asset_symbol: { _eq: $primaryCurrency }
          currency: { _eq: $secondaryCurrency }
        }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
    independent_reserve_nzd: kc_market(
      where: { id: { _eq: "independentreserve.com" } }
    ) {
      market_prices(
        where: {
          source_currency: { _eq: "NZD" }
          asset_symbol: { _eq: $primaryCurrency }
          currency: { _eq: $secondaryCurrency }
        }
        order_by: { timestamp: desc }
      ) {
        price
        timestamp
      }
    }
  }
`
export const GetOpenOrderListDocument = gql`
  query getOpenOrderList {
    kc_order(where: { closed_at: { _is_null: true } }) {
      uid
      exchange {
        uid
        name
      }
      opened_at
      value
      volume
      price
      primary_currency
      secondary_currency
      type
      dca_order_histories {
        uid
        dca_order_uid
      }
    }
  }
`
export const GetPricesDocument = gql`
  query getPrices {
    query_prices {
      id
      type
      interval
      interval_count
      currency
      unit_amount
    }
  }
`
export const GetStripeConfigDocument = gql`
  query getStripeConfig {
    query_stripe_config {
      publishable_key
    }
  }
`
export const GetSubscriptionsDocument = gql`
  query getSubscriptions {
    query_subscriptions {
      subscriptions {
        id
        status
        created
        current_period_end
        plan {
          interval
          interval_count
          amount
          currency
        }
      }
    }
  }
`
export const GetTradeAvgPriceDocument = gql`
  query getTradeAvgPrice($primaryCurrency: String!) {
    kc_trade_avg_price_by_window(
      args: { group_by: "hour", currency: "NZD" }
      where: { primary_currency: { _eq: $primaryCurrency } }
      order_by: { timestamp: desc }
    ) {
      timestamp
      price
      avg_price
    }
  }
`
export const GetTradeCumulativeSumByDayDocument = gql`
  query getTradeCumulativeSumByDay {
    kc_trade_avg_price_by_window(
      args: { group_by: "day", currency: "NZD" }
      order_by: { timestamp: desc }
    ) {
      timestamp
      primary_currency
      total_value
    }
  }
`
export const GetTradeCumulativeVolumeByDayDocument = gql`
  query getTradeCumulativeVolumeByDay {
    kc_trade_avg_price_by_window(
      args: { group_by: "day", currency: "NZD" }
      order_by: { timestamp: desc }
    ) {
      timestamp
      primary_currency
      volume
    }
  }
`
export const GetTradeListDocument = gql`
  query getTradeList(
    $filters: kc_trade_bool_exp!
    $offset: Int!
    $limit: Int!
  ) {
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
      order_by: { timestamp: desc }
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
      price: price_fx(args: { currency: "NZD" })
      total_value: total_value_fx(args: { currency: "NZD" })
      fee: fee_fx(args: { currency: "NZD" })
    }
  }
`
export const GetTradeSumValueByWeekDocument = gql`
  query getTradeSumValueByWeek {
    kc_trade_sum_by_window(
      args: { group_by: "week", currency: "NZD" }
      order_by: { timestamp: desc }
    ) {
      timestamp
      primary_currency
      total_value
    }
  }
`
export const GetUser2FaDocument = gql`
  query getUser2FA {
    kc_user {
      uid
      user_2fa {
        created_at
        name
        uid
      }
    }
  }
`
export const GetUserDeviceByUidDocument = gql`
  query getUserDeviceByUID($userDeviceUID: uuid!) {
    kc_user_device_by_pk(uid: $userDeviceUID) {
      uid
      name
    }
  }
`
export const GetUserDeviceListDocument = gql`
  query getUserDeviceList {
    kc_user_device(order_by: { accessed_at: desc }) {
      uid
      name
      created_at
      accessed_at
    }
  }
`
export const GetUserExchangeKeysByUidDocument = gql`
  query getUserExchangeKeysByUID($userExchangeKeysUID: uuid!) {
    kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
      uid
      description
    }
  }
`
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
`
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
`
export const SetupUser2FaDocument = gql`
  query setupUser2FA {
    setup_user_2fa {
      qrcode
      secret
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = async (
  action,
  _operationName,
  _operationType,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    async CancelSubscription(
      variables: CancelSubscriptionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CancelSubscriptionMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<CancelSubscriptionMutation>(
            CancelSubscriptionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'CancelSubscription',
        'mutation',
      )
    },
    async createAuthToken(
      variables: CreateAuthTokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateAuthTokenMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<CreateAuthTokenMutation>(
            CreateAuthTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createAuthToken',
        'mutation',
      )
    },
    async createSubscription(
      variables: CreateSubscriptionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateSubscriptionMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<CreateSubscriptionMutation>(
            CreateSubscriptionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createSubscription',
        'mutation',
      )
    },
    async createUserExchangeKeys(
      variables: CreateUserExchangeKeysMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateUserExchangeKeysMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<CreateUserExchangeKeysMutation>(
            CreateUserExchangeKeysDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createUserExchangeKeys',
        'mutation',
      )
    },
    async deleteDCAOrder(
      variables: DeleteDcaOrderMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteDcaOrderMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<DeleteDcaOrderMutation>(
            DeleteDcaOrderDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteDCAOrder',
        'mutation',
      )
    },
    async deleteUser(
      variables?: DeleteUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteUserMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<DeleteUserMutation>(DeleteUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'deleteUser',
        'mutation',
      )
    },
    async deleteUser2FA(
      variables: DeleteUser2FaMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteUser2FaMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<DeleteUser2FaMutation>(
            DeleteUser2FaDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUser2FA',
        'mutation',
      )
    },
    async deleteUserDevice(
      variables: DeleteUserDeviceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteUserDeviceMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<DeleteUserDeviceMutation>(
            DeleteUserDeviceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUserDevice',
        'mutation',
      )
    },
    async deleteUserExchangeKeys(
      variables: DeleteUserExchangeKeysMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<DeleteUserExchangeKeysMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<DeleteUserExchangeKeysMutation>(
            DeleteUserExchangeKeysDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUserExchangeKeys',
        'mutation',
      )
    },
    async enableUser2FA(
      variables: EnableUser2FaMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<EnableUser2FaMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<EnableUser2FaMutation>(
            EnableUser2FaDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'enableUser2FA',
        'mutation',
      )
    },
    async useResetUserPassword(
      variables: UseResetUserPasswordMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UseResetUserPasswordMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<UseResetUserPasswordMutation>(
            UseResetUserPasswordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'useResetUserPassword',
        'mutation',
      )
    },
    async sendUserEmailVerify(
      variables?: SendUserEmailVerifyMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SendUserEmailVerifyMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<SendUserEmailVerifyMutation>(
            SendUserEmailVerifyDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'sendUserEmailVerify',
        'mutation',
      )
    },
    async sendUserPasswordReset(
      variables: SendUserPasswordResetMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SendUserPasswordResetMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<SendUserPasswordResetMutation>(
            SendUserPasswordResetDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'sendUserPasswordReset',
        'mutation',
      )
    },
    async updateDCAOrder(
      variables: UpdateDcaOrderMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateDcaOrderMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<UpdateDcaOrderMutation>(
            UpdateDcaOrderDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateDCAOrder',
        'mutation',
      )
    },
    async updateDCAOrderEnabled(
      variables: UpdateDcaOrderEnabledMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateDcaOrderEnabledMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<UpdateDcaOrderEnabledMutation>(
            UpdateDcaOrderEnabledDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateDCAOrderEnabled',
        'mutation',
      )
    },
    async updateUser(
      variables?: UpdateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateUserMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<UpdateUserMutation>(UpdateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateUser',
        'mutation',
      )
    },
    async updateUserDevice(
      variables: UpdateUserDeviceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateUserDeviceMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<UpdateUserDeviceMutation>(
            UpdateUserDeviceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateUserDevice',
        'mutation',
      )
    },
    async updateUserExchangeKeys(
      variables: UpdateUserExchangeKeysMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateUserExchangeKeysMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<UpdateUserExchangeKeysMutation>(
            UpdateUserExchangeKeysDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateUserExchangeKeys',
        'mutation',
      )
    },
    async validateUserExchangeKeys(
      variables: ValidateUserExchangeKeysMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<ValidateUserExchangeKeysMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<ValidateUserExchangeKeysMutation>(
            ValidateUserExchangeKeysDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'validateUserExchangeKeys',
        'mutation',
      )
    },
    async validateUserExchangeKeysLive(
      variables: ValidateUserExchangeKeysLiveMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<ValidateUserExchangeKeysLiveMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<ValidateUserExchangeKeysLiveMutation>(
            ValidateUserExchangeKeysLiveDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'validateUserExchangeKeysLive',
        'mutation',
      )
    },
    async validateUserPasswordReset(
      variables: ValidateUserPasswordResetMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<ValidateUserPasswordResetMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<ValidateUserPasswordResetMutation>(
            ValidateUserPasswordResetDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'validateUserPasswordReset',
        'mutation',
      )
    },
    async verifyUserEmail(
      variables: VerifyUserEmailMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<VerifyUserEmailMutation> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<VerifyUserEmailMutation>(
            VerifyUserEmailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'verifyUserEmail',
        'mutation',
      )
    },
    async getDCAOrderFormCreate(
      variables?: GetDcaOrderFormCreateQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetDcaOrderFormCreateQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetDcaOrderFormCreateQuery>(
            GetDcaOrderFormCreateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getDCAOrderFormCreate',
        'query',
      )
    },
    async getDCAOrderFormEdit(
      variables: GetDcaOrderFormEditQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetDcaOrderFormEditQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetDcaOrderFormEditQuery>(
            GetDcaOrderFormEditDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getDCAOrderFormEdit',
        'query',
      )
    },
    async getDCAOrderHistoryList(
      variables: GetDcaOrderHistoryListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetDcaOrderHistoryListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetDcaOrderHistoryListQuery>(
            GetDcaOrderHistoryListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getDCAOrderHistoryList',
        'query',
      )
    },
    async getDCAOrderHistoryPriceChart(
      variables: GetDcaOrderHistoryPriceChartQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetDcaOrderHistoryPriceChartQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetDcaOrderHistoryPriceChartQuery>(
            GetDcaOrderHistoryPriceChartDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getDCAOrderHistoryPriceChart',
        'query',
      )
    },
    async getDCAOrderList(
      variables?: GetDcaOrderListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetDcaOrderListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetDcaOrderListQuery>(
            GetDcaOrderListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getDCAOrderList',
        'query',
      )
    },
    async getDCAOrderDelete(
      variables: GetDcaOrderDeleteQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetDcaOrderDeleteQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetDcaOrderDeleteQuery>(
            GetDcaOrderDeleteDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getDCAOrderDelete',
        'query',
      )
    },
    async getEmailVerified(
      variables?: GetEmailVerifiedQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetEmailVerifiedQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetEmailVerifiedQuery>(
            GetEmailVerifiedDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getEmailVerified',
        'query',
      )
    },
    async getExchangeKeysFormCreate(
      variables?: GetExchangeKeysFormCreateQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetExchangeKeysFormCreateQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetExchangeKeysFormCreateQuery>(
            GetExchangeKeysFormCreateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getExchangeKeysFormCreate',
        'query',
      )
    },
    async getExchangeList(
      variables?: GetExchangeListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetExchangeListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetExchangeListQuery>(
            GetExchangeListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getExchangeList',
        'query',
      )
    },
    async getMarketPrice(
      variables: GetMarketPriceQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetMarketPriceQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetMarketPriceQuery>(
            GetMarketPriceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getMarketPrice',
        'query',
      )
    },
    async getOpenOrderList(
      variables?: GetOpenOrderListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetOpenOrderListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetOpenOrderListQuery>(
            GetOpenOrderListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getOpenOrderList',
        'query',
      )
    },
    async getPrices(
      variables?: GetPricesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetPricesQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetPricesQuery>(GetPricesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPrices',
        'query',
      )
    },
    async getStripeConfig(
      variables?: GetStripeConfigQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetStripeConfigQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetStripeConfigQuery>(
            GetStripeConfigDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getStripeConfig',
        'query',
      )
    },
    async getSubscriptions(
      variables?: GetSubscriptionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetSubscriptionsQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetSubscriptionsQuery>(
            GetSubscriptionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getSubscriptions',
        'query',
      )
    },
    async getTradeAvgPrice(
      variables: GetTradeAvgPriceQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTradeAvgPriceQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetTradeAvgPriceQuery>(
            GetTradeAvgPriceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getTradeAvgPrice',
        'query',
      )
    },
    async getTradeCumulativeSumByDay(
      variables?: GetTradeCumulativeSumByDayQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTradeCumulativeSumByDayQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetTradeCumulativeSumByDayQuery>(
            GetTradeCumulativeSumByDayDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getTradeCumulativeSumByDay',
        'query',
      )
    },
    async getTradeCumulativeVolumeByDay(
      variables?: GetTradeCumulativeVolumeByDayQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTradeCumulativeVolumeByDayQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetTradeCumulativeVolumeByDayQuery>(
            GetTradeCumulativeVolumeByDayDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getTradeCumulativeVolumeByDay',
        'query',
      )
    },
    async getTradeList(
      variables: GetTradeListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTradeListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetTradeListQuery>(GetTradeListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getTradeList',
        'query',
      )
    },
    async getTradeSumValueByWeek(
      variables?: GetTradeSumValueByWeekQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTradeSumValueByWeekQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetTradeSumValueByWeekQuery>(
            GetTradeSumValueByWeekDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getTradeSumValueByWeek',
        'query',
      )
    },
    async getUser2FA(
      variables?: GetUser2FaQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUser2FaQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetUser2FaQuery>(GetUser2FaDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getUser2FA',
        'query',
      )
    },
    async getUserDeviceByUID(
      variables: GetUserDeviceByUidQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserDeviceByUidQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetUserDeviceByUidQuery>(
            GetUserDeviceByUidDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserDeviceByUID',
        'query',
      )
    },
    async getUserDeviceList(
      variables?: GetUserDeviceListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserDeviceListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetUserDeviceListQuery>(
            GetUserDeviceListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserDeviceList',
        'query',
      )
    },
    async getUserExchangeKeysByUID(
      variables: GetUserExchangeKeysByUidQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserExchangeKeysByUidQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetUserExchangeKeysByUidQuery>(
            GetUserExchangeKeysByUidDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserExchangeKeysByUID',
        'query',
      )
    },
    async getUserExchangeKeysFormEdit(
      variables: GetUserExchangeKeysFormEditQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserExchangeKeysFormEditQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetUserExchangeKeysFormEditQuery>(
            GetUserExchangeKeysFormEditDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserExchangeKeysFormEdit',
        'query',
      )
    },
    async getUserExchangeKeysList(
      variables?: GetUserExchangeKeysListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetUserExchangeKeysListQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<GetUserExchangeKeysListQuery>(
            GetUserExchangeKeysListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getUserExchangeKeysList',
        'query',
      )
    },
    async setupUser2FA(
      variables?: SetupUser2FaQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SetupUser2FaQuery> {
      return withWrapper(
        async (wrappedRequestHeaders) =>
          client.request<SetupUser2FaQuery>(SetupUser2FaDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'setupUser2FA',
        'query',
      )
    },
  }
}

export type Sdk = ReturnType<typeof getSdk>
