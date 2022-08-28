import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  jsonb: Record<string, unknown>;
  numeric: number;
  smallint: number;
  timestamp: string;
  timestamptz: string;
  uuid: string;
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

/** aggregated selection of "balance" */
export type BalanceAggregate = {
  __typename?: 'BalanceAggregate';
  aggregate?: Maybe<BalanceAggregateFields>;
  nodes: Array<Balance>;
};

/** aggregate fields of "balance" */
export type BalanceAggregateFields = {
  __typename?: 'BalanceAggregateFields';
  avg?: Maybe<BalanceAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BalanceMaxFields>;
  min?: Maybe<BalanceMinFields>;
  stddev?: Maybe<BalanceStddevFields>;
  stddevPop?: Maybe<BalanceStddevPopFields>;
  stddevSamp?: Maybe<BalanceStddevSampFields>;
  sum?: Maybe<BalanceSumFields>;
  varPop?: Maybe<BalanceVarPopFields>;
  varSamp?: Maybe<BalanceVarSampFields>;
  variance?: Maybe<BalanceVarianceFields>;
};


/** aggregate fields of "balance" */
export type BalanceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BalanceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BalanceAvgFields = {
  __typename?: 'BalanceAvgFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
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

/** unique or primary key constraints on table "balance" */
export enum BalanceConstraint {
  /** unique or primary key constraint on columns "uid" */
  BalancePkey = 'balance_pkey'
}

/** input type for incrementing numeric columns in table "balance" */
export type BalanceIncInput = {
  availableBalance?: InputMaybe<Scalars['numeric']>;
  totalBalance?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "balance" */
export type BalanceInsertInput = {
  availableBalance?: InputMaybe<Scalars['numeric']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<CurrencyObjRelInsertInput>;
  currencySymbol?: InputMaybe<Scalars['String']>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  totalBalance?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userExchangeKey?: InputMaybe<UserExchangeKeysObjRelInsertInput>;
  userExchangeKeysUid?: InputMaybe<Scalars['uuid']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type BalanceMaxFields = {
  __typename?: 'BalanceMaxFields';
  availableBalance?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currencySymbol?: Maybe<Scalars['String']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  totalBalance?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: Maybe<Scalars['uuid']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type BalanceMinFields = {
  __typename?: 'BalanceMinFields';
  availableBalance?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currencySymbol?: Maybe<Scalars['String']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  totalBalance?: Maybe<Scalars['numeric']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: Maybe<Scalars['uuid']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "balance" */
export type BalanceMutationResponse = {
  __typename?: 'BalanceMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Balance>;
};

/** on_conflict condition type for table "balance" */
export type BalanceOnConflict = {
  constraint: BalanceConstraint;
  update_columns?: Array<BalanceUpdateColumn>;
  where?: InputMaybe<BalanceBoolExp>;
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

/** primary key columns input for table: balance */
export type BalancePkColumnsInput = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "balance" */
export type BalanceSetInput = {
  availableBalance?: InputMaybe<Scalars['numeric']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencySymbol?: InputMaybe<Scalars['String']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  totalBalance?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: InputMaybe<Scalars['uuid']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type BalanceStddevFields = {
  __typename?: 'BalanceStddevFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BalanceStddevPopFields = {
  __typename?: 'BalanceStddevPopFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BalanceStddevSampFields = {
  __typename?: 'BalanceStddevSampFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type BalanceSumFields = {
  __typename?: 'BalanceSumFields';
  availableBalance?: Maybe<Scalars['numeric']>;
  totalBalance?: Maybe<Scalars['numeric']>;
};

/** update columns of table "balance" */
export enum BalanceUpdateColumn {
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

export type BalanceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BalanceIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BalanceSetInput>;
  where: BalanceBoolExp;
};

export type BalanceUserExchangeKeysArgs = {
  timestamp_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate var_pop on columns */
export type BalanceVarPopFields = {
  __typename?: 'BalanceVarPopFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BalanceVarSampFields = {
  __typename?: 'BalanceVarSampFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BalanceVarianceFields = {
  __typename?: 'BalanceVarianceFields';
  availableBalance?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
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

export type CreateAdminAuthTokenOutput = {
  __typename?: 'CreateAdminAuthTokenOutput';
  authToken: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
  userUid: Scalars['String'];
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

/** columns and relationships of "cron_history" */
export type CronHistory = {
  __typename?: 'CronHistory';
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  input: Scalars['jsonb'];
  output?: Maybe<Scalars['jsonb']>;
  state: Scalars['String'];
  taskId: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "cron_history" */
export type CronHistoryInputArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "cron_history" */
export type CronHistoryOutputArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "cron_history" */
export type CronHistoryAggregate = {
  __typename?: 'CronHistoryAggregate';
  aggregate?: Maybe<CronHistoryAggregateFields>;
  nodes: Array<CronHistory>;
};

/** aggregate fields of "cron_history" */
export type CronHistoryAggregateFields = {
  __typename?: 'CronHistoryAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<CronHistoryMaxFields>;
  min?: Maybe<CronHistoryMinFields>;
};


/** aggregate fields of "cron_history" */
export type CronHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CronHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type CronHistoryAppendInput = {
  input?: InputMaybe<Scalars['jsonb']>;
  output?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "cron_history". All fields are combined with a logical 'AND'. */
export type CronHistoryBoolExp = {
  _and?: InputMaybe<Array<CronHistoryBoolExp>>;
  _not?: InputMaybe<CronHistoryBoolExp>;
  _or?: InputMaybe<Array<CronHistoryBoolExp>>;
  completedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  input?: InputMaybe<JsonbComparisonExp>;
  output?: InputMaybe<JsonbComparisonExp>;
  state?: InputMaybe<StringComparisonExp>;
  taskId?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "cron_history" */
export enum CronHistoryConstraint {
  /** unique or primary key constraint on columns "uid" */
  CronHistoryPkey = 'cron_history_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type CronHistoryDeleteAtPathInput = {
  input?: InputMaybe<Array<Scalars['String']>>;
  output?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type CronHistoryDeleteElemInput = {
  input?: InputMaybe<Scalars['Int']>;
  output?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type CronHistoryDeleteKeyInput = {
  input?: InputMaybe<Scalars['String']>;
  output?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "cron_history" */
export type CronHistoryInsertInput = {
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  input?: InputMaybe<Scalars['jsonb']>;
  output?: InputMaybe<Scalars['jsonb']>;
  state?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CronHistoryMaxFields = {
  __typename?: 'CronHistoryMaxFields';
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type CronHistoryMinFields = {
  __typename?: 'CronHistoryMinFields';
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "cron_history" */
export type CronHistoryMutationResponse = {
  __typename?: 'CronHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CronHistory>;
};

/** on_conflict condition type for table "cron_history" */
export type CronHistoryOnConflict = {
  constraint: CronHistoryConstraint;
  update_columns?: Array<CronHistoryUpdateColumn>;
  where?: InputMaybe<CronHistoryBoolExp>;
};

/** Ordering options when selecting data from "cron_history". */
export type CronHistoryOrderBy = {
  completedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  input?: InputMaybe<OrderBy>;
  output?: InputMaybe<OrderBy>;
  state?: InputMaybe<OrderBy>;
  taskId?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: cron_history */
export type CronHistoryPkColumnsInput = {
  uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type CronHistoryPrependInput = {
  input?: InputMaybe<Scalars['jsonb']>;
  output?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "cron_history" */
export enum CronHistorySelectColumn {
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Input = 'input',
  /** column name */
  Output = 'output',
  /** column name */
  State = 'state',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "cron_history" */
export type CronHistorySetInput = {
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  input?: InputMaybe<Scalars['jsonb']>;
  output?: InputMaybe<Scalars['jsonb']>;
  state?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "cron_history" */
export enum CronHistoryUpdateColumn {
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Input = 'input',
  /** column name */
  Output = 'output',
  /** column name */
  State = 'state',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type CronHistoryUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<CronHistoryAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<CronHistoryDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<CronHistoryDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<CronHistoryDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<CronHistoryPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CronHistorySetInput>;
  where: CronHistoryBoolExp;
};

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'Currency';
  createdAt: Scalars['timestamptz'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "currency" */
export type CurrencyAggregate = {
  __typename?: 'CurrencyAggregate';
  aggregate?: Maybe<CurrencyAggregateFields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "currency" */
export type CurrencyAggregateFields = {
  __typename?: 'CurrencyAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<CurrencyMaxFields>;
  min?: Maybe<CurrencyMinFields>;
};


/** aggregate fields of "currency" */
export type CurrencyAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CurrencySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** unique or primary key constraints on table "currency" */
export enum CurrencyConstraint {
  /** unique or primary key constraint on columns "symbol" */
  AssetPkey = 'asset_pkey'
}

/** input type for inserting data into table "currency" */
export type CurrencyInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CurrencyMaxFields = {
  __typename?: 'CurrencyMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type CurrencyMinFields = {
  __typename?: 'CurrencyMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "currency" */
export type CurrencyMutationResponse = {
  __typename?: 'CurrencyMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Currency>;
};

/** input type for inserting object relation for remote table "currency" */
export type CurrencyObjRelInsertInput = {
  data: CurrencyInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CurrencyOnConflict>;
};

/** on_conflict condition type for table "currency" */
export type CurrencyOnConflict = {
  constraint: CurrencyConstraint;
  update_columns?: Array<CurrencyUpdateColumn>;
  where?: InputMaybe<CurrencyBoolExp>;
};

/** Ordering options when selecting data from "currency". */
export type CurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: currency */
export type CurrencyPkColumnsInput = {
  symbol: Scalars['String'];
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

/** input type for updating data in table "currency" */
export type CurrencySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "currency" */
export enum CurrencyUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type CurrencyUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CurrencySetInput>;
  where: CurrencyBoolExp;
};

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
  /** An aggregate relationship */
  marketPricesAggregate: MarketPriceAggregate;
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


/** columns and relationships of "dca_order" */
export type DcaOrderMarketPricesAggregateArgs = {
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

/** input type for inserting array relation for remote table "dca_order" */
export type DcaOrderArrRelInsertInput = {
  data: Array<DcaOrderInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DcaOrderOnConflict>;
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

/** unique or primary key constraints on table "dca_order" */
export enum DcaOrderConstraint {
  /** unique or primary key constraint on columns "uid" */
  DcaOrderPkey = 'dca_order_pkey'
}

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

/** input type for inserting array relation for remote table "dca_order_history" */
export type DcaOrderHistoryArrRelInsertInput = {
  data: Array<DcaOrderHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DcaOrderHistoryOnConflict>;
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

/** unique or primary key constraints on table "dca_order_history" */
export enum DcaOrderHistoryConstraint {
  /** unique or primary key constraint on columns "uid" */
  DcaOrderHistoryPkey = 'dca_order_history_pkey',
  /** unique or primary key constraint on columns "dca_order_uid", "order_uid" */
  UniqueDcaOrder = 'unique_dca_order'
}

/** input type for incrementing numeric columns in table "dca_order_history" */
export type DcaOrderHistoryIncInput = {
  availableBalance?: InputMaybe<Scalars['numeric']>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  marketPrice?: InputMaybe<Scalars['numeric']>;
  targetValue?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "dca_order_history" */
export type DcaOrderHistoryInsertInput = {
  availableBalance?: InputMaybe<Scalars['numeric']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdOrder?: InputMaybe<Scalars['Boolean']>;
  dcaOrder?: InputMaybe<DcaOrderObjRelInsertInput>;
  dcaOrderUid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  marketPrice?: InputMaybe<Scalars['numeric']>;
  order?: InputMaybe<OrderObjRelInsertInput>;
  orderUid?: InputMaybe<Scalars['uuid']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<Scalars['String']>;
  targetValue?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
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

/** response of any mutation on the table "dca_order_history" */
export type DcaOrderHistoryMutationResponse = {
  __typename?: 'DcaOrderHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DcaOrderHistory>;
};

/** on_conflict condition type for table "dca_order_history" */
export type DcaOrderHistoryOnConflict = {
  constraint: DcaOrderHistoryConstraint;
  update_columns?: Array<DcaOrderHistoryUpdateColumn>;
  where?: InputMaybe<DcaOrderHistoryBoolExp>;
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

/** primary key columns input for table: dca_order_history */
export type DcaOrderHistoryPkColumnsInput = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "dca_order_history" */
export type DcaOrderHistorySetInput = {
  availableBalance?: InputMaybe<Scalars['numeric']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdOrder?: InputMaybe<Scalars['Boolean']>;
  dcaOrderUid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  marketPrice?: InputMaybe<Scalars['numeric']>;
  orderUid?: InputMaybe<Scalars['uuid']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<Scalars['String']>;
  targetValue?: InputMaybe<Scalars['numeric']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
};

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

/** update columns of table "dca_order_history" */
export enum DcaOrderHistoryUpdateColumn {
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

export type DcaOrderHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DcaOrderHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DcaOrderHistorySetInput>;
  where: DcaOrderHistoryBoolExp;
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

/** input type for inserting data into table "dca_order" */
export type DcaOrderInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dailyAverage?: InputMaybe<Scalars['numeric']>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryArrRelInsertInput>;
  enabledAt?: InputMaybe<Scalars['timestamptz']>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  intervalMs?: InputMaybe<Scalars['Int']>;
  lastRunAt?: InputMaybe<Scalars['timestamptz']>;
  market?: InputMaybe<MarketObjRelInsertInput>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  marketPrices?: InputMaybe<MarketPriceArrRelInsertInput>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  maxPrice?: InputMaybe<Scalars['numeric']>;
  maxValue?: InputMaybe<Scalars['numeric']>;
  minPrice?: InputMaybe<Scalars['numeric']>;
  minValue?: InputMaybe<Scalars['numeric']>;
  nextRunAt?: InputMaybe<Scalars['timestamptz']>;
  primaryCurrency?: InputMaybe<CurrencyObjRelInsertInput>;
  primaryCurrencySymbol?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<CurrencyObjRelInsertInput>;
  secondaryCurrencySymbol?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['timestamptz']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysObjRelInsertInput>;
  userExchangeKeysUid?: InputMaybe<Scalars['uuid']>;
  userUid?: InputMaybe<Scalars['uuid']>;
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

/** input type for inserting object relation for remote table "dca_order" */
export type DcaOrderObjRelInsertInput = {
  data: DcaOrderInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DcaOrderOnConflict>;
};

/** on_conflict condition type for table "dca_order" */
export type DcaOrderOnConflict = {
  constraint: DcaOrderConstraint;
  update_columns?: Array<DcaOrderUpdateColumn>;
  where?: InputMaybe<DcaOrderBoolExp>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dailyAverage?: InputMaybe<Scalars['numeric']>;
  enabledAt?: InputMaybe<Scalars['timestamptz']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  intervalMs?: InputMaybe<Scalars['Int']>;
  lastRunAt?: InputMaybe<Scalars['timestamptz']>;
  marketOffset?: InputMaybe<Scalars['numeric']>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  maxPrice?: InputMaybe<Scalars['numeric']>;
  maxValue?: InputMaybe<Scalars['numeric']>;
  minPrice?: InputMaybe<Scalars['numeric']>;
  minValue?: InputMaybe<Scalars['numeric']>;
  nextRunAt?: InputMaybe<Scalars['timestamptz']>;
  primaryCurrencySymbol?: InputMaybe<Scalars['String']>;
  secondaryCurrencySymbol?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['timestamptz']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userExchangeKeysUid?: InputMaybe<Scalars['uuid']>;
  userUid?: InputMaybe<Scalars['uuid']>;
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

/** update columns of table "dca_order" */
export enum DcaOrderUpdateColumn {
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

export type DeleteUser2FaOutput = {
  __typename?: 'DeleteUser2FAOutput';
  user?: Maybe<User>;
  userUid: Scalars['uuid'];
};

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  userUid: Scalars['uuid'];
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
  marketUid?: Maybe<Scalars['uuid']>;
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  ordersAggregate: OrderAggregate;
  /** An array relationship */
  primaryCurrencies: Array<ExchangePrimaryCurrency>;
  /** An aggregate relationship */
  primaryCurrenciesAggregate: ExchangePrimaryCurrencyAggregate;
  /** An array relationship */
  secondaryCurrencies: Array<ExchangeSecondaryCurrency>;
  /** An aggregate relationship */
  secondaryCurrenciesAggregate: ExchangeSecondaryCurrencyAggregate;
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
export type ExchangePrimaryCurrenciesAggregateArgs = {
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
export type ExchangeSecondaryCurrenciesAggregateArgs = {
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

/** aggregated selection of "exchange" */
export type ExchangeAggregate = {
  __typename?: 'ExchangeAggregate';
  aggregate?: Maybe<ExchangeAggregateFields>;
  nodes: Array<Exchange>;
};

/** aggregate fields of "exchange" */
export type ExchangeAggregateFields = {
  __typename?: 'ExchangeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ExchangeMaxFields>;
  min?: Maybe<ExchangeMinFields>;
};


/** aggregate fields of "exchange" */
export type ExchangeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExchangeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "exchange". All fields are combined with a logical 'AND'. */
export type ExchangeBoolExp = {
  _and?: InputMaybe<Array<ExchangeBoolExp>>;
  _not?: InputMaybe<ExchangeBoolExp>;
  _or?: InputMaybe<Array<ExchangeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrders?: InputMaybe<DcaOrderBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  marketUid?: InputMaybe<UuidComparisonExp>;
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

/** unique or primary key constraints on table "exchange" */
export enum ExchangeConstraint {
  /** unique or primary key constraint on columns "uid" */
  ExchangePkey = 'exchange_pkey',
  /** unique or primary key constraint on columns "id" */
  UniqueExchangeId = 'unique_exchange_id'
}

/** input type for inserting data into table "exchange" */
export type ExchangeInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dcaOrders?: InputMaybe<DcaOrderArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<OrderArrRelInsertInput>;
  primaryCurrencies?: InputMaybe<ExchangePrimaryCurrencyArrRelInsertInput>;
  secondaryCurrencies?: InputMaybe<ExchangeSecondaryCurrencyArrRelInsertInput>;
  trades?: InputMaybe<TradeArrRelInsertInput>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysArrRelInsertInput>;
};

/** aggregate max on columns */
export type ExchangeMaxFields = {
  __typename?: 'ExchangeMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  marketUid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ExchangeMinFields = {
  __typename?: 'ExchangeMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  marketUid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "exchange" */
export type ExchangeMutationResponse = {
  __typename?: 'ExchangeMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Exchange>;
};

/** input type for inserting object relation for remote table "exchange" */
export type ExchangeObjRelInsertInput = {
  data: ExchangeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ExchangeOnConflict>;
};

/** on_conflict condition type for table "exchange" */
export type ExchangeOnConflict = {
  constraint: ExchangeConstraint;
  update_columns?: Array<ExchangeUpdateColumn>;
  where?: InputMaybe<ExchangeBoolExp>;
};

/** Ordering options when selecting data from "exchange". */
export type ExchangeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  marketUid?: InputMaybe<OrderBy>;
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

/** primary key columns input for table: exchange */
export type ExchangePkColumnsInput = {
  uid: Scalars['uuid'];
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

/** aggregated selection of "exchange_primary_currency" */
export type ExchangePrimaryCurrencyAggregate = {
  __typename?: 'ExchangePrimaryCurrencyAggregate';
  aggregate?: Maybe<ExchangePrimaryCurrencyAggregateFields>;
  nodes: Array<ExchangePrimaryCurrency>;
};

/** aggregate fields of "exchange_primary_currency" */
export type ExchangePrimaryCurrencyAggregateFields = {
  __typename?: 'ExchangePrimaryCurrencyAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ExchangePrimaryCurrencyMaxFields>;
  min?: Maybe<ExchangePrimaryCurrencyMinFields>;
};


/** aggregate fields of "exchange_primary_currency" */
export type ExchangePrimaryCurrencyAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExchangePrimaryCurrencySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExchangePrimaryCurrencyMaxOrderBy>;
  min?: InputMaybe<ExchangePrimaryCurrencyMinOrderBy>;
};

/** input type for inserting array relation for remote table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyArrRelInsertInput = {
  data: Array<ExchangePrimaryCurrencyInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ExchangePrimaryCurrencyOnConflict>;
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

/** unique or primary key constraints on table "exchange_primary_currency" */
export enum ExchangePrimaryCurrencyConstraint {
  /** unique or primary key constraint on columns "symbol", "exchange_uid" */
  ExchangeAssetPkey = 'exchange_asset_pkey'
}

/** input type for inserting data into table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<CurrencyObjRelInsertInput>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ExchangePrimaryCurrencyMaxFields = {
  __typename?: 'ExchangePrimaryCurrencyMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ExchangePrimaryCurrencyMinFields = {
  __typename?: 'ExchangePrimaryCurrencyMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyMutationResponse = {
  __typename?: 'ExchangePrimaryCurrencyMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ExchangePrimaryCurrency>;
};

/** on_conflict condition type for table "exchange_primary_currency" */
export type ExchangePrimaryCurrencyOnConflict = {
  constraint: ExchangePrimaryCurrencyConstraint;
  update_columns?: Array<ExchangePrimaryCurrencyUpdateColumn>;
  where?: InputMaybe<ExchangePrimaryCurrencyBoolExp>;
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

/** primary key columns input for table: exchange_primary_currency */
export type ExchangePrimaryCurrencyPkColumnsInput = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
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

/** input type for updating data in table "exchange_primary_currency" */
export type ExchangePrimaryCurrencySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "exchange_primary_currency" */
export enum ExchangePrimaryCurrencyUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ExchangePrimaryCurrencyUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExchangePrimaryCurrencySetInput>;
  where: ExchangePrimaryCurrencyBoolExp;
};

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

/** aggregated selection of "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyAggregate = {
  __typename?: 'ExchangeSecondaryCurrencyAggregate';
  aggregate?: Maybe<ExchangeSecondaryCurrencyAggregateFields>;
  nodes: Array<ExchangeSecondaryCurrency>;
};

/** aggregate fields of "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyAggregateFields = {
  __typename?: 'ExchangeSecondaryCurrencyAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ExchangeSecondaryCurrencyMaxFields>;
  min?: Maybe<ExchangeSecondaryCurrencyMinFields>;
};


/** aggregate fields of "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExchangeSecondaryCurrencySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExchangeSecondaryCurrencyMaxOrderBy>;
  min?: InputMaybe<ExchangeSecondaryCurrencyMinOrderBy>;
};

/** input type for inserting array relation for remote table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyArrRelInsertInput = {
  data: Array<ExchangeSecondaryCurrencyInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ExchangeSecondaryCurrencyOnConflict>;
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

/** unique or primary key constraints on table "exchange_secondary_currency" */
export enum ExchangeSecondaryCurrencyConstraint {
  /** unique or primary key constraint on columns "symbol", "exchange_uid" */
  ExchangeSecondaryCurrencyPkey = 'exchange_secondary_currency_pkey'
}

/** input type for inserting data into table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<CurrencyObjRelInsertInput>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ExchangeSecondaryCurrencyMaxFields = {
  __typename?: 'ExchangeSecondaryCurrencyMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ExchangeSecondaryCurrencyMinFields = {
  __typename?: 'ExchangeSecondaryCurrencyMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyMutationResponse = {
  __typename?: 'ExchangeSecondaryCurrencyMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ExchangeSecondaryCurrency>;
};

/** on_conflict condition type for table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencyOnConflict = {
  constraint: ExchangeSecondaryCurrencyConstraint;
  update_columns?: Array<ExchangeSecondaryCurrencyUpdateColumn>;
  where?: InputMaybe<ExchangeSecondaryCurrencyBoolExp>;
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

/** primary key columns input for table: exchange_secondary_currency */
export type ExchangeSecondaryCurrencyPkColumnsInput = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
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

/** input type for updating data in table "exchange_secondary_currency" */
export type ExchangeSecondaryCurrencySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "exchange_secondary_currency" */
export enum ExchangeSecondaryCurrencyUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ExchangeSecondaryCurrencyUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExchangeSecondaryCurrencySetInput>;
  where: ExchangeSecondaryCurrencyBoolExp;
};

/** select columns of table "exchange" */
export enum ExchangeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MarketUid = 'marketUid',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "exchange" */
export type ExchangeSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "exchange" */
export enum ExchangeUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MarketUid = 'marketUid',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

export type ExchangeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExchangeSetInput>;
  where: ExchangeBoolExp;
};

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

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
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
  /** An aggregate relationship */
  marketPricesAggregate: MarketPriceAggregate;
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


/** columns and relationships of "market" */
export type MarketMarketPricesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};

/** aggregated selection of "market" */
export type MarketAggregate = {
  __typename?: 'MarketAggregate';
  aggregate?: Maybe<MarketAggregateFields>;
  nodes: Array<Market>;
};

/** aggregate fields of "market" */
export type MarketAggregateFields = {
  __typename?: 'MarketAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<MarketMaxFields>;
  min?: Maybe<MarketMinFields>;
};


/** aggregate fields of "market" */
export type MarketAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MarketSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** unique or primary key constraints on table "market" */
export enum MarketConstraint {
  /** unique or primary key constraint on columns "uid" */
  MarketPkey = 'market_pkey',
  /** unique or primary key constraint on columns "id" */
  UniqueMarketId = 'unique_market_id'
}

/** input type for inserting data into table "market" */
export type MarketInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dcaOrders?: InputMaybe<DcaOrderArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  marketPrices?: InputMaybe<MarketPriceArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type MarketMaxFields = {
  __typename?: 'MarketMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MarketMinFields = {
  __typename?: 'MarketMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "market" */
export type MarketMutationResponse = {
  __typename?: 'MarketMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Market>;
};

/** input type for inserting object relation for remote table "market" */
export type MarketObjRelInsertInput = {
  data: MarketInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<MarketOnConflict>;
};

/** on_conflict condition type for table "market" */
export type MarketOnConflict = {
  constraint: MarketConstraint;
  update_columns?: Array<MarketUpdateColumn>;
  where?: InputMaybe<MarketBoolExp>;
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

/** primary key columns input for table: market */
export type MarketPkColumnsInput = {
  uid: Scalars['uuid'];
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

/** aggregated selection of "market_price" */
export type MarketPriceAggregate = {
  __typename?: 'MarketPriceAggregate';
  aggregate?: Maybe<MarketPriceAggregateFields>;
  nodes: Array<MarketPrice>;
};

/** aggregate fields of "market_price" */
export type MarketPriceAggregateFields = {
  __typename?: 'MarketPriceAggregateFields';
  avg?: Maybe<MarketPriceAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<MarketPriceMaxFields>;
  min?: Maybe<MarketPriceMinFields>;
  stddev?: Maybe<MarketPriceStddevFields>;
  stddevPop?: Maybe<MarketPriceStddevPopFields>;
  stddevSamp?: Maybe<MarketPriceStddevSampFields>;
  sum?: Maybe<MarketPriceSumFields>;
  varPop?: Maybe<MarketPriceVarPopFields>;
  varSamp?: Maybe<MarketPriceVarSampFields>;
  variance?: Maybe<MarketPriceVarianceFields>;
};


/** aggregate fields of "market_price" */
export type MarketPriceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MarketPriceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting array relation for remote table "market_price" */
export type MarketPriceArrRelInsertInput = {
  data: Array<MarketPriceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<MarketPriceOnConflict>;
};

/** aggregate avg on columns */
export type MarketPriceAvgFields = {
  __typename?: 'MarketPriceAvgFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
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

/** unique or primary key constraints on table "market_price" */
export enum MarketPriceConstraint {
  /** unique or primary key constraint on columns "source_currency", "timestamp", "asset_symbol", "currency", "market_uid" */
  MarketPricePkey = 'market_price_pkey'
}

/** input type for incrementing numeric columns in table "market_price" */
export type MarketPriceIncInput = {
  fxRate?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  sourcePrice?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "market_price" */
export type MarketPriceInsertInput = {
  assetSymbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fxRate?: InputMaybe<Scalars['numeric']>;
  market?: InputMaybe<MarketObjRelInsertInput>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  sourceCurrency?: InputMaybe<Scalars['bpchar']>;
  sourcePrice?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

export type MarketPriceLatestArgs = {
  asset_symbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  market_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type MarketPriceMaxFields = {
  __typename?: 'MarketPriceMaxFields';
  assetSymbol?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fxRate?: Maybe<Scalars['numeric']>;
  marketUid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  sourceCurrency?: Maybe<Scalars['bpchar']>;
  sourcePrice?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
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

/** aggregate min on columns */
export type MarketPriceMinFields = {
  __typename?: 'MarketPriceMinFields';
  assetSymbol?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fxRate?: Maybe<Scalars['numeric']>;
  marketUid?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  sourceCurrency?: Maybe<Scalars['bpchar']>;
  sourcePrice?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
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

/** response of any mutation on the table "market_price" */
export type MarketPriceMutationResponse = {
  __typename?: 'MarketPriceMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MarketPrice>;
};

/** on_conflict condition type for table "market_price" */
export type MarketPriceOnConflict = {
  constraint: MarketPriceConstraint;
  update_columns?: Array<MarketPriceUpdateColumn>;
  where?: InputMaybe<MarketPriceBoolExp>;
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

/** primary key columns input for table: market_price */
export type MarketPricePkColumnsInput = {
  assetSymbol: Scalars['String'];
  currency: Scalars['String'];
  marketUid: Scalars['uuid'];
  sourceCurrency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
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

/** input type for updating data in table "market_price" */
export type MarketPriceSetInput = {
  assetSymbol?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fxRate?: InputMaybe<Scalars['numeric']>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  sourceCurrency?: InputMaybe<Scalars['bpchar']>;
  sourcePrice?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type MarketPriceStddevFields = {
  __typename?: 'MarketPriceStddevFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "market_price" */
export type MarketPriceStddevOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type MarketPriceStddevPopFields = {
  __typename?: 'MarketPriceStddevPopFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "market_price" */
export type MarketPriceStddevPopOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type MarketPriceStddevSampFields = {
  __typename?: 'MarketPriceStddevSampFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "market_price" */
export type MarketPriceStddevSampOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type MarketPriceSumFields = {
  __typename?: 'MarketPriceSumFields';
  fxRate?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  sourcePrice?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "market_price" */
export type MarketPriceSumOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** update columns of table "market_price" */
export enum MarketPriceUpdateColumn {
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

export type MarketPriceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MarketPriceIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MarketPriceSetInput>;
  where: MarketPriceBoolExp;
};

/** aggregate var_pop on columns */
export type MarketPriceVarPopFields = {
  __typename?: 'MarketPriceVarPopFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "market_price" */
export type MarketPriceVarPopOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type MarketPriceVarSampFields = {
  __typename?: 'MarketPriceVarSampFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "market_price" */
export type MarketPriceVarSampOrderBy = {
  fxRate?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sourcePrice?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type MarketPriceVarianceFields = {
  __typename?: 'MarketPriceVarianceFields';
  fxRate?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sourcePrice?: Maybe<Scalars['Float']>;
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

/** input type for updating data in table "market" */
export type MarketSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

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
  /** An aggregate relationship */
  marketPricesAggregate: MarketPriceAggregate;
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


/** columns and relationships of "market_trading_pair" */
export type MarketTradingPairMarketPricesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MarketPriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketPriceOrderBy>>;
  where?: InputMaybe<MarketPriceBoolExp>;
};

/** aggregated selection of "market_trading_pair" */
export type MarketTradingPairAggregate = {
  __typename?: 'MarketTradingPairAggregate';
  aggregate?: Maybe<MarketTradingPairAggregateFields>;
  nodes: Array<MarketTradingPair>;
};

/** aggregate fields of "market_trading_pair" */
export type MarketTradingPairAggregateFields = {
  __typename?: 'MarketTradingPairAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<MarketTradingPairMaxFields>;
  min?: Maybe<MarketTradingPairMinFields>;
};


/** aggregate fields of "market_trading_pair" */
export type MarketTradingPairAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MarketTradingPairSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting data into table "market_trading_pair" */
export type MarketTradingPairInsertInput = {
  currency?: InputMaybe<CurrencyObjRelInsertInput>;
  currencyBySecondaryCurrencySymbol?: InputMaybe<CurrencyObjRelInsertInput>;
  market?: InputMaybe<MarketObjRelInsertInput>;
  marketPrices?: InputMaybe<MarketPriceArrRelInsertInput>;
  marketUid?: InputMaybe<Scalars['uuid']>;
  primaryCurrencySymbol?: InputMaybe<Scalars['String']>;
  secondaryCurrencySymbol?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type MarketTradingPairMaxFields = {
  __typename?: 'MarketTradingPairMaxFields';
  marketUid?: Maybe<Scalars['uuid']>;
  primaryCurrencySymbol?: Maybe<Scalars['String']>;
  secondaryCurrencySymbol?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "market_trading_pair" */
export type MarketTradingPairMaxOrderBy = {
  marketUid?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type MarketTradingPairMinFields = {
  __typename?: 'MarketTradingPairMinFields';
  marketUid?: Maybe<Scalars['uuid']>;
  primaryCurrencySymbol?: Maybe<Scalars['String']>;
  secondaryCurrencySymbol?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "market_trading_pair" */
export type MarketTradingPairMinOrderBy = {
  marketUid?: InputMaybe<OrderBy>;
  primaryCurrencySymbol?: InputMaybe<OrderBy>;
  secondaryCurrencySymbol?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "market_trading_pair" */
export type MarketTradingPairMutationResponse = {
  __typename?: 'MarketTradingPairMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MarketTradingPair>;
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

/** input type for updating data in table "market_trading_pair" */
export type MarketTradingPairSetInput = {
  marketUid?: InputMaybe<Scalars['uuid']>;
  primaryCurrencySymbol?: InputMaybe<Scalars['String']>;
  secondaryCurrencySymbol?: InputMaybe<Scalars['String']>;
};

export type MarketTradingPairUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MarketTradingPairSetInput>;
  where: MarketTradingPairBoolExp;
};

/** update columns of table "market" */
export enum MarketUpdateColumn {
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

export type MarketUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MarketSetInput>;
  where: MarketBoolExp;
};

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

/** input type for inserting array relation for remote table "order" */
export type OrderArrRelInsertInput = {
  data: Array<OrderInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OrderOnConflict>;
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

/** unique or primary key constraints on table "order" */
export enum OrderConstraint {
  /** unique or primary key constraint on columns "uid" */
  OrderPkey = 'order_pkey',
  /** unique or primary key constraint on columns "order_id", "exchange_uid" */
  UniqueExchangeOrderId = 'unique_exchange_order_id'
}

/** input type for incrementing numeric columns in table "order" */
export type OrderIncInput = {
  price?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order" */
export type OrderInsertInput = {
  closedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryArrRelInsertInput>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  openedAt?: InputMaybe<Scalars['timestamptz']>;
  orderId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

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

/** response of any mutation on the table "order" */
export type OrderMutationResponse = {
  __typename?: 'OrderMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "order" */
export type OrderObjRelInsertInput = {
  data: OrderInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OrderOnConflict>;
};

/** on_conflict condition type for table "order" */
export type OrderOnConflict = {
  constraint: OrderConstraint;
  update_columns?: Array<OrderUpdateColumn>;
  where?: InputMaybe<OrderBoolExp>;
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

/** primary key columns input for table: order */
export type OrderPkColumnsInput = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "order" */
export type OrderSetInput = {
  closedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  openedAt?: InputMaybe<Scalars['timestamptz']>;
  orderId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

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

/** update columns of table "order" */
export enum OrderUpdateColumn {
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

export type OrderUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrderIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrderSetInput>;
  where: OrderBoolExp;
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

export type QueryUserEmailOutput = {
  __typename?: 'QueryUserEmailOutput';
  email: Scalars['String'];
  userUid: Scalars['uuid'];
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

export type SeedTestAccountOutput = {
  __typename?: 'SeedTestAccountOutput';
  email: Scalars['String'];
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

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
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

/** columns and relationships of "stripe_customer" */
export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  customerId: Scalars['String'];
  /** An array relationship */
  stripeSubscriptions: Array<StripeSubscription>;
  /** An aggregate relationship */
  stripeSubscriptionsAggregate: StripeSubscriptionAggregate;
  userUid: Scalars['uuid'];
};


/** columns and relationships of "stripe_customer" */
export type StripeCustomerStripeSubscriptionsArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};


/** columns and relationships of "stripe_customer" */
export type StripeCustomerStripeSubscriptionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeSubscriptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeSubscriptionOrderBy>>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};

/** aggregated selection of "stripe_customer" */
export type StripeCustomerAggregate = {
  __typename?: 'StripeCustomerAggregate';
  aggregate?: Maybe<StripeCustomerAggregateFields>;
  nodes: Array<StripeCustomer>;
};

/** aggregate fields of "stripe_customer" */
export type StripeCustomerAggregateFields = {
  __typename?: 'StripeCustomerAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<StripeCustomerMaxFields>;
  min?: Maybe<StripeCustomerMinFields>;
};


/** aggregate fields of "stripe_customer" */
export type StripeCustomerAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StripeCustomerSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_customer". All fields are combined with a logical 'AND'. */
export type StripeCustomerBoolExp = {
  _and?: InputMaybe<Array<StripeCustomerBoolExp>>;
  _not?: InputMaybe<StripeCustomerBoolExp>;
  _or?: InputMaybe<Array<StripeCustomerBoolExp>>;
  customerId?: InputMaybe<StringComparisonExp>;
  stripeSubscriptions?: InputMaybe<StripeSubscriptionBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "stripe_customer" */
export enum StripeCustomerConstraint {
  /** unique or primary key constraint on columns "user_uid" */
  CustomerPkey = 'customer_pkey',
  /** unique or primary key constraint on columns "customer_id" */
  UniqueCustomerId = 'unique_customer_id'
}

/** input type for inserting data into table "stripe_customer" */
export type StripeCustomerInsertInput = {
  customerId?: InputMaybe<Scalars['String']>;
  stripeSubscriptions?: InputMaybe<StripeSubscriptionArrRelInsertInput>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type StripeCustomerMaxFields = {
  __typename?: 'StripeCustomerMaxFields';
  customerId?: Maybe<Scalars['String']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type StripeCustomerMinFields = {
  __typename?: 'StripeCustomerMinFields';
  customerId?: Maybe<Scalars['String']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "stripe_customer" */
export type StripeCustomerMutationResponse = {
  __typename?: 'StripeCustomerMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeCustomer>;
};

/** input type for inserting object relation for remote table "stripe_customer" */
export type StripeCustomerObjRelInsertInput = {
  data: StripeCustomerInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<StripeCustomerOnConflict>;
};

/** on_conflict condition type for table "stripe_customer" */
export type StripeCustomerOnConflict = {
  constraint: StripeCustomerConstraint;
  update_columns?: Array<StripeCustomerUpdateColumn>;
  where?: InputMaybe<StripeCustomerBoolExp>;
};

/** Ordering options when selecting data from "stripe_customer". */
export type StripeCustomerOrderBy = {
  customerId?: InputMaybe<OrderBy>;
  stripeSubscriptionsAggregate?: InputMaybe<StripeSubscriptionAggregateOrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: stripe_customer */
export type StripeCustomerPkColumnsInput = {
  userUid: Scalars['uuid'];
};

/** select columns of table "stripe_customer" */
export enum StripeCustomerSelectColumn {
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "stripe_customer" */
export type StripeCustomerSetInput = {
  customerId?: InputMaybe<Scalars['String']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "stripe_customer" */
export enum StripeCustomerUpdateColumn {
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  UserUid = 'userUid'
}

export type StripeCustomerUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeCustomerSetInput>;
  where: StripeCustomerBoolExp;
};

/** columns and relationships of "stripe_price" */
export type StripePrice = {
  __typename?: 'StripePrice';
  active: Scalars['Boolean'];
  billingScheme: Scalars['String'];
  createdAt: Scalars['timestamptz'];
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
  updatedAt: Scalars['timestamptz'];
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

/** aggregated selection of "stripe_price" */
export type StripePriceAggregate = {
  __typename?: 'StripePriceAggregate';
  aggregate?: Maybe<StripePriceAggregateFields>;
  nodes: Array<StripePrice>;
};

/** aggregate fields of "stripe_price" */
export type StripePriceAggregateFields = {
  __typename?: 'StripePriceAggregateFields';
  avg?: Maybe<StripePriceAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<StripePriceMaxFields>;
  min?: Maybe<StripePriceMinFields>;
  stddev?: Maybe<StripePriceStddevFields>;
  stddevPop?: Maybe<StripePriceStddevPopFields>;
  stddevSamp?: Maybe<StripePriceStddevSampFields>;
  sum?: Maybe<StripePriceSumFields>;
  varPop?: Maybe<StripePriceVarPopFields>;
  varSamp?: Maybe<StripePriceVarSampFields>;
  variance?: Maybe<StripePriceVarianceFields>;
};


/** aggregate fields of "stripe_price" */
export type StripePriceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StripePriceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting array relation for remote table "stripe_price" */
export type StripePriceArrRelInsertInput = {
  data: Array<StripePriceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<StripePriceOnConflict>;
};

/** aggregate avg on columns */
export type StripePriceAvgFields = {
  __typename?: 'StripePriceAvgFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
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
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
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
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "stripe_price" */
export enum StripePriceConstraint {
  /** unique or primary key constraint on columns "id" */
  StripePricePkey = 'stripe_price_pkey'
}

/** input type for incrementing numeric columns in table "stripe_price" */
export type StripePriceIncInput = {
  recurringIntervalCount?: InputMaybe<Scalars['Int']>;
  unitAmount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stripe_price" */
export type StripePriceInsertInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  billingScheme?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['bpchar']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  recurringAggregateUsage?: InputMaybe<Scalars['String']>;
  recurringInterval?: InputMaybe<Scalars['String']>;
  recurringIntervalCount?: InputMaybe<Scalars['Int']>;
  recurringUsageType?: InputMaybe<Scalars['String']>;
  stripeProduct?: InputMaybe<StripeProductObjRelInsertInput>;
  stripeSubscriptions?: InputMaybe<StripeSubscriptionArrRelInsertInput>;
  type?: InputMaybe<Scalars['String']>;
  unitAmount?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type StripePriceMaxFields = {
  __typename?: 'StripePriceMaxFields';
  billingScheme?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  recurringAggregateUsage?: Maybe<Scalars['String']>;
  recurringInterval?: Maybe<Scalars['String']>;
  recurringIntervalCount?: Maybe<Scalars['Int']>;
  recurringUsageType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unitAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "stripe_price" */
export type StripePriceMaxOrderBy = {
  billingScheme?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
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
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type StripePriceMinFields = {
  __typename?: 'StripePriceMinFields';
  billingScheme?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  recurringAggregateUsage?: Maybe<Scalars['String']>;
  recurringInterval?: Maybe<Scalars['String']>;
  recurringIntervalCount?: Maybe<Scalars['Int']>;
  recurringUsageType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unitAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "stripe_price" */
export type StripePriceMinOrderBy = {
  billingScheme?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
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
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "stripe_price" */
export type StripePriceMutationResponse = {
  __typename?: 'StripePriceMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripePrice>;
};

/** input type for inserting object relation for remote table "stripe_price" */
export type StripePriceObjRelInsertInput = {
  data: StripePriceInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<StripePriceOnConflict>;
};

/** on_conflict condition type for table "stripe_price" */
export type StripePriceOnConflict = {
  constraint: StripePriceConstraint;
  update_columns?: Array<StripePriceUpdateColumn>;
  where?: InputMaybe<StripePriceBoolExp>;
};

/** Ordering options when selecting data from "stripe_price". */
export type StripePriceOrderBy = {
  active?: InputMaybe<OrderBy>;
  billingScheme?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
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
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: stripe_price */
export type StripePricePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "stripe_price" */
export enum StripePriceSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  BillingScheme = 'billingScheme',
  /** column name */
  CreatedAt = 'createdAt',
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
  UnitAmount = 'unitAmount',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "stripe_price" */
export type StripePriceSetInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  billingScheme?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['bpchar']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  recurringAggregateUsage?: InputMaybe<Scalars['String']>;
  recurringInterval?: InputMaybe<Scalars['String']>;
  recurringIntervalCount?: InputMaybe<Scalars['Int']>;
  recurringUsageType?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unitAmount?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type StripePriceStddevFields = {
  __typename?: 'StripePriceStddevFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stripe_price" */
export type StripePriceStddevOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type StripePriceStddevPopFields = {
  __typename?: 'StripePriceStddevPopFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stripe_price" */
export type StripePriceStddevPopOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type StripePriceStddevSampFields = {
  __typename?: 'StripePriceStddevSampFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stripe_price" */
export type StripePriceStddevSampOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type StripePriceSumFields = {
  __typename?: 'StripePriceSumFields';
  recurringIntervalCount?: Maybe<Scalars['Int']>;
  unitAmount?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stripe_price" */
export type StripePriceSumOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** update columns of table "stripe_price" */
export enum StripePriceUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  BillingScheme = 'billingScheme',
  /** column name */
  CreatedAt = 'createdAt',
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
  UnitAmount = 'unitAmount',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type StripePriceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<StripePriceIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripePriceSetInput>;
  where: StripePriceBoolExp;
};

/** aggregate var_pop on columns */
export type StripePriceVarPopFields = {
  __typename?: 'StripePriceVarPopFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stripe_price" */
export type StripePriceVarPopOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type StripePriceVarSampFields = {
  __typename?: 'StripePriceVarSampFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stripe_price" */
export type StripePriceVarSampOrderBy = {
  recurringIntervalCount?: InputMaybe<OrderBy>;
  unitAmount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type StripePriceVarianceFields = {
  __typename?: 'StripePriceVarianceFields';
  recurringIntervalCount?: Maybe<Scalars['Float']>;
  unitAmount?: Maybe<Scalars['Float']>;
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
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  stripePrices: Array<StripePrice>;
  /** An aggregate relationship */
  stripePricesAggregate: StripePriceAggregate;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "stripe_product" */
export type StripeProductStripePricesArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};


/** columns and relationships of "stripe_product" */
export type StripeProductStripePricesAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};

/** aggregated selection of "stripe_product" */
export type StripeProductAggregate = {
  __typename?: 'StripeProductAggregate';
  aggregate?: Maybe<StripeProductAggregateFields>;
  nodes: Array<StripeProduct>;
};

/** aggregate fields of "stripe_product" */
export type StripeProductAggregateFields = {
  __typename?: 'StripeProductAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<StripeProductMaxFields>;
  min?: Maybe<StripeProductMinFields>;
};


/** aggregate fields of "stripe_product" */
export type StripeProductAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StripeProductSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_product". All fields are combined with a logical 'AND'. */
export type StripeProductBoolExp = {
  _and?: InputMaybe<Array<StripeProductBoolExp>>;
  _not?: InputMaybe<StripeProductBoolExp>;
  _or?: InputMaybe<Array<StripeProductBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  stripePrices?: InputMaybe<StripePriceBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "stripe_product" */
export enum StripeProductConstraint {
  /** unique or primary key constraint on columns "id" */
  StripeProductPkey = 'stripe_product_pkey'
}

/** input type for inserting data into table "stripe_product" */
export type StripeProductInsertInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stripePrices?: InputMaybe<StripePriceArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type StripeProductMaxFields = {
  __typename?: 'StripeProductMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type StripeProductMinFields = {
  __typename?: 'StripeProductMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "stripe_product" */
export type StripeProductMutationResponse = {
  __typename?: 'StripeProductMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeProduct>;
};

/** input type for inserting object relation for remote table "stripe_product" */
export type StripeProductObjRelInsertInput = {
  data: StripeProductInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<StripeProductOnConflict>;
};

/** on_conflict condition type for table "stripe_product" */
export type StripeProductOnConflict = {
  constraint: StripeProductConstraint;
  update_columns?: Array<StripeProductUpdateColumn>;
  where?: InputMaybe<StripeProductBoolExp>;
};

/** Ordering options when selecting data from "stripe_product". */
export type StripeProductOrderBy = {
  active?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  stripePricesAggregate?: InputMaybe<StripePriceAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: stripe_product */
export type StripeProductPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "stripe_product" */
export enum StripeProductSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "stripe_product" */
export type StripeProductSetInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "stripe_product" */
export enum StripeProductUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type StripeProductUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeProductSetInput>;
  where: StripeProductBoolExp;
};

/** columns and relationships of "stripe_subscription" */
export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  cancelAt?: Maybe<Scalars['timestamptz']>;
  cancelAtPeriodEnd: Scalars['Boolean'];
  canceledAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  currentPeriodEnd: Scalars['timestamptz'];
  currentPeriodStart: Scalars['timestamptz'];
  customerId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  priceId: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
  /** An object relationship */
  stripeCustomer: StripeCustomer;
  /** An object relationship */
  stripePrice: StripePrice;
  updatedAt: Scalars['timestamptz'];
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

/** input type for inserting array relation for remote table "stripe_subscription" */
export type StripeSubscriptionArrRelInsertInput = {
  data: Array<StripeSubscriptionInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<StripeSubscriptionOnConflict>;
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
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currentPeriodEnd?: InputMaybe<TimestamptzComparisonExp>;
  currentPeriodStart?: InputMaybe<TimestamptzComparisonExp>;
  customerId?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  priceId?: InputMaybe<StringComparisonExp>;
  quantity?: InputMaybe<IntComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  stripeCustomer?: InputMaybe<StripeCustomerBoolExp>;
  stripePrice?: InputMaybe<StripePriceBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "stripe_subscription" */
export enum StripeSubscriptionConstraint {
  /** unique or primary key constraint on columns "id" */
  StripeSubscriptionPkey = 'stripe_subscription_pkey'
}

/** input type for incrementing numeric columns in table "stripe_subscription" */
export type StripeSubscriptionIncInput = {
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stripe_subscription" */
export type StripeSubscriptionInsertInput = {
  cancelAt?: InputMaybe<Scalars['timestamptz']>;
  cancelAtPeriodEnd?: InputMaybe<Scalars['Boolean']>;
  canceledAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentPeriodEnd?: InputMaybe<Scalars['timestamptz']>;
  currentPeriodStart?: InputMaybe<Scalars['timestamptz']>;
  customerId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  priceId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  stripeCustomer?: InputMaybe<StripeCustomerObjRelInsertInput>;
  stripePrice?: InputMaybe<StripePriceObjRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type StripeSubscriptionMaxFields = {
  __typename?: 'StripeSubscriptionMaxFields';
  cancelAt?: Maybe<Scalars['timestamptz']>;
  canceledAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentPeriodEnd?: Maybe<Scalars['timestamptz']>;
  currentPeriodStart?: Maybe<Scalars['timestamptz']>;
  customerId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "stripe_subscription" */
export type StripeSubscriptionMaxOrderBy = {
  cancelAt?: InputMaybe<OrderBy>;
  canceledAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentPeriodEnd?: InputMaybe<OrderBy>;
  currentPeriodStart?: InputMaybe<OrderBy>;
  customerId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  priceId?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type StripeSubscriptionMinFields = {
  __typename?: 'StripeSubscriptionMinFields';
  cancelAt?: Maybe<Scalars['timestamptz']>;
  canceledAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentPeriodEnd?: Maybe<Scalars['timestamptz']>;
  currentPeriodStart?: Maybe<Scalars['timestamptz']>;
  customerId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "stripe_subscription" */
export type StripeSubscriptionMinOrderBy = {
  cancelAt?: InputMaybe<OrderBy>;
  canceledAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentPeriodEnd?: InputMaybe<OrderBy>;
  currentPeriodStart?: InputMaybe<OrderBy>;
  customerId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  priceId?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "stripe_subscription" */
export type StripeSubscriptionMutationResponse = {
  __typename?: 'StripeSubscriptionMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeSubscription>;
};

/** on_conflict condition type for table "stripe_subscription" */
export type StripeSubscriptionOnConflict = {
  constraint: StripeSubscriptionConstraint;
  update_columns?: Array<StripeSubscriptionUpdateColumn>;
  where?: InputMaybe<StripeSubscriptionBoolExp>;
};

/** Ordering options when selecting data from "stripe_subscription". */
export type StripeSubscriptionOrderBy = {
  cancelAt?: InputMaybe<OrderBy>;
  cancelAtPeriodEnd?: InputMaybe<OrderBy>;
  canceledAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentPeriodEnd?: InputMaybe<OrderBy>;
  currentPeriodStart?: InputMaybe<OrderBy>;
  customerId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  priceId?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  stripeCustomer?: InputMaybe<StripeCustomerOrderBy>;
  stripePrice?: InputMaybe<StripePriceOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: stripe_subscription */
export type StripeSubscriptionPkColumnsInput = {
  id: Scalars['String'];
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
  CreatedAt = 'createdAt',
  /** column name */
  CurrentPeriodEnd = 'currentPeriodEnd',
  /** column name */
  CurrentPeriodStart = 'currentPeriodStart',
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PriceId = 'priceId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "stripe_subscription" */
export type StripeSubscriptionSetInput = {
  cancelAt?: InputMaybe<Scalars['timestamptz']>;
  cancelAtPeriodEnd?: InputMaybe<Scalars['Boolean']>;
  canceledAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentPeriodEnd?: InputMaybe<Scalars['timestamptz']>;
  currentPeriodStart?: InputMaybe<Scalars['timestamptz']>;
  customerId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  priceId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

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

/** update columns of table "stripe_subscription" */
export enum StripeSubscriptionUpdateColumn {
  /** column name */
  CancelAt = 'cancelAt',
  /** column name */
  CancelAtPeriodEnd = 'cancelAtPeriodEnd',
  /** column name */
  CanceledAt = 'canceledAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentPeriodEnd = 'currentPeriodEnd',
  /** column name */
  CurrentPeriodStart = 'currentPeriodStart',
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PriceId = 'priceId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type StripeSubscriptionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<StripeSubscriptionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeSubscriptionSetInput>;
  where: StripeSubscriptionBoolExp;
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

export type SyncCurrencyFxOutput = {
  __typename?: 'SyncCurrencyFxOutput';
  insertCount: Scalars['Int'];
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

/** input type for inserting array relation for remote table "trade" */
export type TradeArrRelInsertInput = {
  data: Array<TradeInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TradeOnConflict>;
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

/** unique or primary key constraints on table "trade" */
export enum TradeConstraint {
  /** unique or primary key constraint on columns "uid" */
  TradePkey = 'trade_pkey',
  /** unique or primary key constraint on columns "user_uid", "trade_id", "exchange_uid" */
  UniqueTradeExchangeTradeIdUserUid = 'unique_trade_exchange_trade_id_user_uid'
}

/** input type for incrementing numeric columns in table "trade" */
export type TradeIncInput = {
  fee?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "trade" */
export type TradeInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  fee?: InputMaybe<Scalars['numeric']>;
  order?: InputMaybe<OrderObjRelInsertInput>;
  orderUid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  tradeId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
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

/** response of any mutation on the table "trade" */
export type TradeMutationResponse = {
  __typename?: 'TradeMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trade>;
};

/** on_conflict condition type for table "trade" */
export type TradeOnConflict = {
  constraint: TradeConstraint;
  update_columns?: Array<TradeUpdateColumn>;
  where?: InputMaybe<TradeBoolExp>;
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

/** primary key columns input for table: trade */
export type TradePkColumnsInput = {
  uid: Scalars['uuid'];
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

/** input type for updating data in table "trade" */
export type TradeSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  fee?: InputMaybe<Scalars['numeric']>;
  orderUid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  secondaryCurrency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  tradeId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

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

/** update columns of table "trade" */
export enum TradeUpdateColumn {
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

export type TradeUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TradeIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TradeSetInput>;
  where: TradeBoolExp;
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

export type TypeTradeAvgPriceByWindowAggregate = {
  __typename?: 'TypeTradeAvgPriceByWindowAggregate';
  aggregate?: Maybe<TypeTradeAvgPriceByWindowAggregateFields>;
  nodes: Array<TypeTradeAvgPriceByWindow>;
};

/** aggregate fields of "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindowAggregateFields = {
  __typename?: 'TypeTradeAvgPriceByWindowAggregateFields';
  avg?: Maybe<TypeTradeAvgPriceByWindowAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TypeTradeAvgPriceByWindowMaxFields>;
  min?: Maybe<TypeTradeAvgPriceByWindowMinFields>;
  stddev?: Maybe<TypeTradeAvgPriceByWindowStddevFields>;
  stddevPop?: Maybe<TypeTradeAvgPriceByWindowStddevPopFields>;
  stddevSamp?: Maybe<TypeTradeAvgPriceByWindowStddevSampFields>;
  sum?: Maybe<TypeTradeAvgPriceByWindowSumFields>;
  varPop?: Maybe<TypeTradeAvgPriceByWindowVarPopFields>;
  varSamp?: Maybe<TypeTradeAvgPriceByWindowVarSampFields>;
  variance?: Maybe<TypeTradeAvgPriceByWindowVarianceFields>;
};


/** aggregate fields of "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindowAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TypeTradeAvgPriceByWindowSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TypeTradeAvgPriceByWindowAvgFields = {
  __typename?: 'TypeTradeAvgPriceByWindowAvgFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
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

/** input type for incrementing numeric columns in table "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindowIncInput = {
  avgPrice?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindowInsertInput = {
  avgPrice?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type TypeTradeAvgPriceByWindowMaxFields = {
  __typename?: 'TypeTradeAvgPriceByWindowMaxFields';
  avgPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  userUid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type TypeTradeAvgPriceByWindowMinFields = {
  __typename?: 'TypeTradeAvgPriceByWindowMinFields';
  avgPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  primaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  userUid?: Maybe<Scalars['uuid']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindowMutationResponse = {
  __typename?: 'TypeTradeAvgPriceByWindowMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TypeTradeAvgPriceByWindow>;
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

/** input type for updating data in table "type_trade_avg_price_by_window" */
export type TypeTradeAvgPriceByWindowSetInput = {
  avgPrice?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  primaryCurrency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type TypeTradeAvgPriceByWindowStddevFields = {
  __typename?: 'TypeTradeAvgPriceByWindowStddevFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TypeTradeAvgPriceByWindowStddevPopFields = {
  __typename?: 'TypeTradeAvgPriceByWindowStddevPopFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TypeTradeAvgPriceByWindowStddevSampFields = {
  __typename?: 'TypeTradeAvgPriceByWindowStddevSampFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TypeTradeAvgPriceByWindowSumFields = {
  __typename?: 'TypeTradeAvgPriceByWindowSumFields';
  avgPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  totalValue?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

export type TypeTradeAvgPriceByWindowUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TypeTradeAvgPriceByWindowIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TypeTradeAvgPriceByWindowSetInput>;
  where: TypeTradeAvgPriceByWindowBoolExp;
};

/** aggregate var_pop on columns */
export type TypeTradeAvgPriceByWindowVarPopFields = {
  __typename?: 'TypeTradeAvgPriceByWindowVarPopFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TypeTradeAvgPriceByWindowVarSampFields = {
  __typename?: 'TypeTradeAvgPriceByWindowVarSampFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TypeTradeAvgPriceByWindowVarianceFields = {
  __typename?: 'TypeTradeAvgPriceByWindowVarianceFields';
  avgPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

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

export type TypeTradeSumByWindowAggregate = {
  __typename?: 'TypeTradeSumByWindowAggregate';
  aggregate?: Maybe<TypeTradeSumByWindowAggregateFields>;
  nodes: Array<TypeTradeSumByWindow>;
};

/** aggregate fields of "type_trade_sum_by_window" */
export type TypeTradeSumByWindowAggregateFields = {
  __typename?: 'TypeTradeSumByWindowAggregateFields';
  avg?: Maybe<TypeTradeSumByWindowAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TypeTradeSumByWindowMaxFields>;
  min?: Maybe<TypeTradeSumByWindowMinFields>;
  stddev?: Maybe<TypeTradeSumByWindowStddevFields>;
  stddevPop?: Maybe<TypeTradeSumByWindowStddevPopFields>;
  stddevSamp?: Maybe<TypeTradeSumByWindowStddevSampFields>;
  sum?: Maybe<TypeTradeSumByWindowSumFields>;
  varPop?: Maybe<TypeTradeSumByWindowVarPopFields>;
  varSamp?: Maybe<TypeTradeSumByWindowVarSampFields>;
  variance?: Maybe<TypeTradeSumByWindowVarianceFields>;
};


/** aggregate fields of "type_trade_sum_by_window" */
export type TypeTradeSumByWindowAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TypeTradeSumByWindowSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TypeTradeSumByWindowAvgFields = {
  __typename?: 'TypeTradeSumByWindowAvgFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
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

/** input type for incrementing numeric columns in table "type_trade_sum_by_window" */
export type TypeTradeSumByWindowIncInput = {
  totalValue?: InputMaybe<Scalars['numeric']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "type_trade_sum_by_window" */
export type TypeTradeSumByWindowInsertInput = {
  primaryCurrency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type TypeTradeSumByWindowMaxFields = {
  __typename?: 'TypeTradeSumByWindowMaxFields';
  primaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type TypeTradeSumByWindowMinFields = {
  __typename?: 'TypeTradeSumByWindowMinFields';
  primaryCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  totalValue?: Maybe<Scalars['numeric']>;
  userUid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "type_trade_sum_by_window" */
export type TypeTradeSumByWindowMutationResponse = {
  __typename?: 'TypeTradeSumByWindowMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TypeTradeSumByWindow>;
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

/** input type for updating data in table "type_trade_sum_by_window" */
export type TypeTradeSumByWindowSetInput = {
  primaryCurrency?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  totalValue?: InputMaybe<Scalars['numeric']>;
  userUid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['numeric']>;
  volume?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type TypeTradeSumByWindowStddevFields = {
  __typename?: 'TypeTradeSumByWindowStddevFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TypeTradeSumByWindowStddevPopFields = {
  __typename?: 'TypeTradeSumByWindowStddevPopFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TypeTradeSumByWindowStddevSampFields = {
  __typename?: 'TypeTradeSumByWindowStddevSampFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TypeTradeSumByWindowSumFields = {
  __typename?: 'TypeTradeSumByWindowSumFields';
  totalValue?: Maybe<Scalars['numeric']>;
  value?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['numeric']>;
};

export type TypeTradeSumByWindowUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TypeTradeSumByWindowIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TypeTradeSumByWindowSetInput>;
  where: TypeTradeSumByWindowBoolExp;
};

/** aggregate var_pop on columns */
export type TypeTradeSumByWindowVarPopFields = {
  __typename?: 'TypeTradeSumByWindowVarPopFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TypeTradeSumByWindowVarSampFields = {
  __typename?: 'TypeTradeSumByWindowVarSampFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TypeTradeSumByWindowVarianceFields = {
  __typename?: 'TypeTradeSumByWindowVarianceFields';
  totalValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

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
  emailEncrypted: Scalars['String'];
  emailHash: Scalars['String'];
  emailKeyringId: Scalars['smallint'];
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  ordersAggregate: OrderAggregate;
  passwordHash: Scalars['String'];
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
  secretEncrypted: Scalars['String'];
  secretKeyringId: Scalars['smallint'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userUid: Scalars['uuid'];
};

/** aggregated selection of "user_2fa" */
export type User2faAggregate = {
  __typename?: 'User2faAggregate';
  aggregate?: Maybe<User2faAggregateFields>;
  nodes: Array<User2fa>;
};

/** aggregate fields of "user_2fa" */
export type User2faAggregateFields = {
  __typename?: 'User2faAggregateFields';
  avg?: Maybe<User2faAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<User2faMaxFields>;
  min?: Maybe<User2faMinFields>;
  stddev?: Maybe<User2faStddevFields>;
  stddevPop?: Maybe<User2faStddevPopFields>;
  stddevSamp?: Maybe<User2faStddevSampFields>;
  sum?: Maybe<User2faSumFields>;
  varPop?: Maybe<User2faVarPopFields>;
  varSamp?: Maybe<User2faVarSampFields>;
  variance?: Maybe<User2faVarianceFields>;
};


/** aggregate fields of "user_2fa" */
export type User2faAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<User2faSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User2faAvgFields = {
  __typename?: 'User2faAvgFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_2fa". All fields are combined with a logical 'AND'. */
export type User2faBoolExp = {
  _and?: InputMaybe<Array<User2faBoolExp>>;
  _not?: InputMaybe<User2faBoolExp>;
  _or?: InputMaybe<Array<User2faBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  secretEncrypted?: InputMaybe<StringComparisonExp>;
  secretKeyringId?: InputMaybe<SmallintComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_2fa" */
export enum User2faConstraint {
  /** unique or primary key constraint on columns "user_uid" */
  UniqueUser_2faUserUid = 'unique_user_2fa_user_uid',
  /** unique or primary key constraint on columns "uid" */
  User_2faPkey = 'user_2fa_pkey'
}

/** input type for incrementing numeric columns in table "user_2fa" */
export type User2faIncInput = {
  secretKeyringId?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "user_2fa" */
export type User2faInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  secretEncrypted?: InputMaybe<Scalars['String']>;
  secretKeyringId?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User2faMaxFields = {
  __typename?: 'User2faMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  secretEncrypted?: Maybe<Scalars['String']>;
  secretKeyringId?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User2faMinFields = {
  __typename?: 'User2faMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  secretEncrypted?: Maybe<Scalars['String']>;
  secretKeyringId?: Maybe<Scalars['smallint']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_2fa" */
export type User2faMutationResponse = {
  __typename?: 'User2faMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User2fa>;
};

/** input type for inserting object relation for remote table "user_2fa" */
export type User2faObjRelInsertInput = {
  data: User2faInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<User2faOnConflict>;
};

/** on_conflict condition type for table "user_2fa" */
export type User2faOnConflict = {
  constraint: User2faConstraint;
  update_columns?: Array<User2faUpdateColumn>;
  where?: InputMaybe<User2faBoolExp>;
};

/** Ordering options when selecting data from "user_2fa". */
export type User2faOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  secretEncrypted?: InputMaybe<OrderBy>;
  secretKeyringId?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_2fa */
export type User2faPkColumnsInput = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_2fa" */
export enum User2faSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  SecretEncrypted = 'secretEncrypted',
  /** column name */
  SecretKeyringId = 'secretKeyringId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "user_2fa" */
export type User2faSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  secretEncrypted?: InputMaybe<Scalars['String']>;
  secretKeyringId?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User2faStddevFields = {
  __typename?: 'User2faStddevFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User2faStddevPopFields = {
  __typename?: 'User2faStddevPopFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User2faStddevSampFields = {
  __typename?: 'User2faStddevSampFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User2faSumFields = {
  __typename?: 'User2faSumFields';
  secretKeyringId?: Maybe<Scalars['smallint']>;
};

/** update columns of table "user_2fa" */
export enum User2faUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  SecretEncrypted = 'secretEncrypted',
  /** column name */
  SecretKeyringId = 'secretKeyringId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

export type User2faUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User2faIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User2faSetInput>;
  where: User2faBoolExp;
};

/** aggregate var_pop on columns */
export type User2faVarPopFields = {
  __typename?: 'User2faVarPopFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User2faVarSampFields = {
  __typename?: 'User2faVarSampFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User2faVarianceFields = {
  __typename?: 'User2faVarianceFields';
  secretKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields';
  avg?: Maybe<UserAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
  stddev?: Maybe<UserStddevFields>;
  stddevPop?: Maybe<UserStddevPopFields>;
  stddevSamp?: Maybe<UserStddevSampFields>;
  sum?: Maybe<UserSumFields>;
  varPop?: Maybe<UserVarPopFields>;
  varSamp?: Maybe<UserVarSampFields>;
  variance?: Maybe<UserVarianceFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type UserAvgFields = {
  __typename?: 'UserAvgFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryBoolExp>;
  dcaOrders?: InputMaybe<DcaOrderBoolExp>;
  emailEncrypted?: InputMaybe<StringComparisonExp>;
  emailHash?: InputMaybe<StringComparisonExp>;
  emailKeyringId?: InputMaybe<SmallintComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  orders?: InputMaybe<OrderBoolExp>;
  passwordHash?: InputMaybe<StringComparisonExp>;
  timezone?: InputMaybe<StringComparisonExp>;
  trades?: InputMaybe<TradeBoolExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user2fa?: InputMaybe<User2faBoolExp>;
  userDevices?: InputMaybe<UserDeviceBoolExp>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysBoolExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email_hash" */
  UniqueUserEmailHash = 'unique_user_email_hash',
  /** unique or primary key constraint on columns "uid" */
  UserPkey = 'user_pkey'
}

/** columns and relationships of "user_device" */
export type UserDevice = {
  __typename?: 'UserDevice';
  accessedAt: Scalars['timestamptz'];
  createdAt: Scalars['timestamptz'];
  deviceIdHash: Scalars['String'];
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

/** input type for inserting array relation for remote table "user_device" */
export type UserDeviceArrRelInsertInput = {
  data: Array<UserDeviceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserDeviceOnConflict>;
};

/** Boolean expression to filter rows from the table "user_device". All fields are combined with a logical 'AND'. */
export type UserDeviceBoolExp = {
  _and?: InputMaybe<Array<UserDeviceBoolExp>>;
  _not?: InputMaybe<UserDeviceBoolExp>;
  _or?: InputMaybe<Array<UserDeviceBoolExp>>;
  accessedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  deviceIdHash?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  trusted?: InputMaybe<BooleanComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_device" */
export enum UserDeviceConstraint {
  /** unique or primary key constraint on columns "user_uid", "device_id_hash" */
  UniqueUserDeviceUserUidDeviceIdHash = 'unique_user_device_user_uid_device_id_hash',
  /** unique or primary key constraint on columns "uid" */
  UserDevicePkey = 'user_device_pkey'
}

/** input type for inserting data into table "user_device" */
export type UserDeviceInsertInput = {
  accessedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deviceIdHash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserDeviceMaxFields = {
  __typename?: 'UserDeviceMaxFields';
  accessedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deviceIdHash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_device" */
export type UserDeviceMaxOrderBy = {
  accessedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  deviceIdHash?: InputMaybe<OrderBy>;
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
  deviceIdHash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_device" */
export type UserDeviceMinOrderBy = {
  accessedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  deviceIdHash?: InputMaybe<OrderBy>;
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

/** on_conflict condition type for table "user_device" */
export type UserDeviceOnConflict = {
  constraint: UserDeviceConstraint;
  update_columns?: Array<UserDeviceUpdateColumn>;
  where?: InputMaybe<UserDeviceBoolExp>;
};

/** Ordering options when selecting data from "user_device". */
export type UserDeviceOrderBy = {
  accessedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  deviceIdHash?: InputMaybe<OrderBy>;
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
  DeviceIdHash = 'deviceIdHash',
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
  accessedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deviceIdHash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_device" */
export enum UserDeviceUpdateColumn {
  /** column name */
  AccessedAt = 'accessedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeviceIdHash = 'deviceIdHash',
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

export type UserDeviceUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserDeviceSetInput>;
  where: UserDeviceBoolExp;
};

/** columns and relationships of "user_email_verify" */
export type UserEmailVerify = {
  __typename?: 'UserEmailVerify';
  createdAt: Scalars['timestamptz'];
  secretHash: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  userUid: Scalars['uuid'];
};

/** aggregated selection of "user_email_verify" */
export type UserEmailVerifyAggregate = {
  __typename?: 'UserEmailVerifyAggregate';
  aggregate?: Maybe<UserEmailVerifyAggregateFields>;
  nodes: Array<UserEmailVerify>;
};

/** aggregate fields of "user_email_verify" */
export type UserEmailVerifyAggregateFields = {
  __typename?: 'UserEmailVerifyAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserEmailVerifyMaxFields>;
  min?: Maybe<UserEmailVerifyMinFields>;
};


/** aggregate fields of "user_email_verify" */
export type UserEmailVerifyAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserEmailVerifySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_email_verify". All fields are combined with a logical 'AND'. */
export type UserEmailVerifyBoolExp = {
  _and?: InputMaybe<Array<UserEmailVerifyBoolExp>>;
  _not?: InputMaybe<UserEmailVerifyBoolExp>;
  _or?: InputMaybe<Array<UserEmailVerifyBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  secretHash?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_email_verify" */
export enum UserEmailVerifyConstraint {
  /** unique or primary key constraint on columns "secret_hash" */
  UniqueUserEmailVerifySecretHash = 'unique_user_email_verify_secret_hash',
  /** unique or primary key constraint on columns "user_uid" */
  UniqueUserEmailVerifyUserUid = 'unique_user_email_verify_user_uid',
  /** unique or primary key constraint on columns "uid" */
  UserEmailVerifyPkey = 'user_email_verify_pkey'
}

/** input type for inserting data into table "user_email_verify" */
export type UserEmailVerifyInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  secretHash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserEmailVerifyMaxFields = {
  __typename?: 'UserEmailVerifyMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  secretHash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserEmailVerifyMinFields = {
  __typename?: 'UserEmailVerifyMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  secretHash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_email_verify" */
export type UserEmailVerifyMutationResponse = {
  __typename?: 'UserEmailVerifyMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserEmailVerify>;
};

/** on_conflict condition type for table "user_email_verify" */
export type UserEmailVerifyOnConflict = {
  constraint: UserEmailVerifyConstraint;
  update_columns?: Array<UserEmailVerifyUpdateColumn>;
  where?: InputMaybe<UserEmailVerifyBoolExp>;
};

/** Ordering options when selecting data from "user_email_verify". */
export type UserEmailVerifyOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  secretHash?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_email_verify */
export type UserEmailVerifyPkColumnsInput = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_email_verify" */
export enum UserEmailVerifySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  SecretHash = 'secretHash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "user_email_verify" */
export type UserEmailVerifySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  secretHash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_email_verify" */
export enum UserEmailVerifyUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  SecretHash = 'secretHash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

export type UserEmailVerifyUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserEmailVerifySetInput>;
  where: UserEmailVerifyBoolExp;
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
  keysEncrypted: Scalars['String'];
  keysHash: Scalars['String'];
  keysKeyringId: Scalars['smallint'];
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
  avg?: Maybe<UserExchangeKeysAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UserExchangeKeysMaxFields>;
  min?: Maybe<UserExchangeKeysMinFields>;
  stddev?: Maybe<UserExchangeKeysStddevFields>;
  stddevPop?: Maybe<UserExchangeKeysStddevPopFields>;
  stddevSamp?: Maybe<UserExchangeKeysStddevSampFields>;
  sum?: Maybe<UserExchangeKeysSumFields>;
  varPop?: Maybe<UserExchangeKeysVarPopFields>;
  varSamp?: Maybe<UserExchangeKeysVarSampFields>;
  variance?: Maybe<UserExchangeKeysVarianceFields>;
};


/** aggregate fields of "user_exchange_keys" */
export type UserExchangeKeysAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserExchangeKeysSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_exchange_keys" */
export type UserExchangeKeysAggregateOrderBy = {
  avg?: InputMaybe<UserExchangeKeysAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserExchangeKeysMaxOrderBy>;
  min?: InputMaybe<UserExchangeKeysMinOrderBy>;
  stddev?: InputMaybe<UserExchangeKeysStddevOrderBy>;
  stddev_pop?: InputMaybe<UserExchangeKeysStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UserExchangeKeysStddevSampOrderBy>;
  sum?: InputMaybe<UserExchangeKeysSumOrderBy>;
  var_pop?: InputMaybe<UserExchangeKeysVarPopOrderBy>;
  var_samp?: InputMaybe<UserExchangeKeysVarSampOrderBy>;
  variance?: InputMaybe<UserExchangeKeysVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_exchange_keys" */
export type UserExchangeKeysArrRelInsertInput = {
  data: Array<UserExchangeKeysInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserExchangeKeysOnConflict>;
};

/** aggregate avg on columns */
export type UserExchangeKeysAvgFields = {
  __typename?: 'UserExchangeKeysAvgFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_exchange_keys" */
export type UserExchangeKeysAvgOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
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
  keysEncrypted?: InputMaybe<StringComparisonExp>;
  keysHash?: InputMaybe<StringComparisonExp>;
  keysKeyringId?: InputMaybe<SmallintComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_exchange_keys" */
export enum UserExchangeKeysConstraint {
  /** unique or primary key constraint on columns "uid" */
  UserExchangeKeysPkey = 'user_exchange_keys_pkey'
}

/** input type for incrementing numeric columns in table "user_exchange_keys" */
export type UserExchangeKeysIncInput = {
  keysKeyringId?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "user_exchange_keys" */
export type UserExchangeKeysInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dcaOrders?: InputMaybe<DcaOrderArrRelInsertInput>;
  description?: InputMaybe<Scalars['String']>;
  exchange?: InputMaybe<ExchangeObjRelInsertInput>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  invalidatedAt?: InputMaybe<Scalars['timestamptz']>;
  keysEncrypted?: InputMaybe<Scalars['String']>;
  keysHash?: InputMaybe<Scalars['String']>;
  keysKeyringId?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserExchangeKeysMaxFields = {
  __typename?: 'UserExchangeKeysMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  exchangeUid?: Maybe<Scalars['uuid']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']>;
  keysEncrypted?: Maybe<Scalars['String']>;
  keysHash?: Maybe<Scalars['String']>;
  keysKeyringId?: Maybe<Scalars['smallint']>;
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
  keysEncrypted?: InputMaybe<OrderBy>;
  keysHash?: InputMaybe<OrderBy>;
  keysKeyringId?: InputMaybe<OrderBy>;
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
  keysEncrypted?: Maybe<Scalars['String']>;
  keysHash?: Maybe<Scalars['String']>;
  keysKeyringId?: Maybe<Scalars['smallint']>;
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
  keysEncrypted?: InputMaybe<OrderBy>;
  keysHash?: InputMaybe<OrderBy>;
  keysKeyringId?: InputMaybe<OrderBy>;
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

/** input type for inserting object relation for remote table "user_exchange_keys" */
export type UserExchangeKeysObjRelInsertInput = {
  data: UserExchangeKeysInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserExchangeKeysOnConflict>;
};

/** on_conflict condition type for table "user_exchange_keys" */
export type UserExchangeKeysOnConflict = {
  constraint: UserExchangeKeysConstraint;
  update_columns?: Array<UserExchangeKeysUpdateColumn>;
  where?: InputMaybe<UserExchangeKeysBoolExp>;
};

/** Ordering options when selecting data from "user_exchange_keys". */
export type UserExchangeKeysOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  description?: InputMaybe<OrderBy>;
  exchange?: InputMaybe<ExchangeOrderBy>;
  exchangeUid?: InputMaybe<OrderBy>;
  invalidatedAt?: InputMaybe<OrderBy>;
  keysEncrypted?: InputMaybe<OrderBy>;
  keysHash?: InputMaybe<OrderBy>;
  keysKeyringId?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_exchange_keys */
export type UserExchangeKeysPkColumnsInput = {
  uid: Scalars['uuid'];
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
  KeysEncrypted = 'keysEncrypted',
  /** column name */
  KeysHash = 'keysHash',
  /** column name */
  KeysKeyringId = 'keysKeyringId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "user_exchange_keys" */
export type UserExchangeKeysSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  exchangeUid?: InputMaybe<Scalars['uuid']>;
  invalidatedAt?: InputMaybe<Scalars['timestamptz']>;
  keysEncrypted?: InputMaybe<Scalars['String']>;
  keysHash?: InputMaybe<Scalars['String']>;
  keysKeyringId?: InputMaybe<Scalars['smallint']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type UserExchangeKeysStddevFields = {
  __typename?: 'UserExchangeKeysStddevFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_exchange_keys" */
export type UserExchangeKeysStddevOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserExchangeKeysStddevPopFields = {
  __typename?: 'UserExchangeKeysStddevPopFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_exchange_keys" */
export type UserExchangeKeysStddevPopOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserExchangeKeysStddevSampFields = {
  __typename?: 'UserExchangeKeysStddevSampFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_exchange_keys" */
export type UserExchangeKeysStddevSampOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type UserExchangeKeysSumFields = {
  __typename?: 'UserExchangeKeysSumFields';
  keysKeyringId?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "user_exchange_keys" */
export type UserExchangeKeysSumOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** update columns of table "user_exchange_keys" */
export enum UserExchangeKeysUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ExchangeUid = 'exchangeUid',
  /** column name */
  InvalidatedAt = 'invalidatedAt',
  /** column name */
  KeysEncrypted = 'keysEncrypted',
  /** column name */
  KeysHash = 'keysHash',
  /** column name */
  KeysKeyringId = 'keysKeyringId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

export type UserExchangeKeysUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserExchangeKeysIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserExchangeKeysSetInput>;
  where: UserExchangeKeysBoolExp;
};

/** aggregate var_pop on columns */
export type UserExchangeKeysVarPopFields = {
  __typename?: 'UserExchangeKeysVarPopFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_exchange_keys" */
export type UserExchangeKeysVarPopOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserExchangeKeysVarSampFields = {
  __typename?: 'UserExchangeKeysVarSampFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_exchange_keys" */
export type UserExchangeKeysVarSampOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserExchangeKeysVarianceFields = {
  __typename?: 'UserExchangeKeysVarianceFields';
  keysKeyringId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_exchange_keys" */
export type UserExchangeKeysVarianceOrderBy = {
  keysKeyringId?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "user" */
export type UserIncInput = {
  emailKeyringId?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dcaOrderHistories?: InputMaybe<DcaOrderHistoryArrRelInsertInput>;
  dcaOrders?: InputMaybe<DcaOrderArrRelInsertInput>;
  emailEncrypted?: InputMaybe<Scalars['String']>;
  emailHash?: InputMaybe<Scalars['String']>;
  emailKeyringId?: InputMaybe<Scalars['smallint']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  orders?: InputMaybe<OrderArrRelInsertInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  trades?: InputMaybe<TradeArrRelInsertInput>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user2fa?: InputMaybe<User2faObjRelInsertInput>;
  userDevices?: InputMaybe<UserDeviceArrRelInsertInput>;
  userExchangeKeys?: InputMaybe<UserExchangeKeysArrRelInsertInput>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  emailEncrypted?: Maybe<Scalars['String']>;
  emailHash?: Maybe<Scalars['String']>;
  emailKeyringId?: Maybe<Scalars['smallint']>;
  passwordHash?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  emailEncrypted?: Maybe<Scalars['String']>;
  emailHash?: Maybe<Scalars['String']>;
  emailKeyringId?: Maybe<Scalars['smallint']>;
  passwordHash?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dcaOrderHistoriesAggregate?: InputMaybe<DcaOrderHistoryAggregateOrderBy>;
  dcaOrdersAggregate?: InputMaybe<DcaOrderAggregateOrderBy>;
  emailEncrypted?: InputMaybe<OrderBy>;
  emailHash?: InputMaybe<OrderBy>;
  emailKeyringId?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  ordersAggregate?: InputMaybe<OrderAggregateOrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  timezone?: InputMaybe<OrderBy>;
  tradesAggregate?: InputMaybe<TradeAggregateOrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user2fa?: InputMaybe<User2faOrderBy>;
  userDevicesAggregate?: InputMaybe<UserDeviceAggregateOrderBy>;
  userExchangeKeysAggregate?: InputMaybe<UserExchangeKeysAggregateOrderBy>;
};

/** columns and relationships of "user_password_reset" */
export type UserPasswordReset = {
  __typename?: 'UserPasswordReset';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  secretHash: Scalars['String'];
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  userUid: Scalars['uuid'];
};

/** aggregated selection of "user_password_reset" */
export type UserPasswordResetAggregate = {
  __typename?: 'UserPasswordResetAggregate';
  aggregate?: Maybe<UserPasswordResetAggregateFields>;
  nodes: Array<UserPasswordReset>;
};

/** aggregate fields of "user_password_reset" */
export type UserPasswordResetAggregateFields = {
  __typename?: 'UserPasswordResetAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserPasswordResetMaxFields>;
  min?: Maybe<UserPasswordResetMinFields>;
};


/** aggregate fields of "user_password_reset" */
export type UserPasswordResetAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserPasswordResetSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_password_reset". All fields are combined with a logical 'AND'. */
export type UserPasswordResetBoolExp = {
  _and?: InputMaybe<Array<UserPasswordResetBoolExp>>;
  _not?: InputMaybe<UserPasswordResetBoolExp>;
  _or?: InputMaybe<Array<UserPasswordResetBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  secretHash?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userUid?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_password_reset" */
export enum UserPasswordResetConstraint {
  /** unique or primary key constraint on columns "secret_hash" */
  UniqueUserPasswordResetSecretHash = 'unique_user_password_reset_secret_hash',
  /** unique or primary key constraint on columns "uid" */
  UserPasswordResetPkey = 'user_password_reset_pkey'
}

/** input type for inserting data into table "user_password_reset" */
export type UserPasswordResetInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  secretHash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserPasswordResetMaxFields = {
  __typename?: 'UserPasswordResetMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  secretHash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserPasswordResetMinFields = {
  __typename?: 'UserPasswordResetMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  secretHash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userUid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_password_reset" */
export type UserPasswordResetMutationResponse = {
  __typename?: 'UserPasswordResetMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserPasswordReset>;
};

/** on_conflict condition type for table "user_password_reset" */
export type UserPasswordResetOnConflict = {
  constraint: UserPasswordResetConstraint;
  update_columns?: Array<UserPasswordResetUpdateColumn>;
  where?: InputMaybe<UserPasswordResetBoolExp>;
};

/** Ordering options when selecting data from "user_password_reset". */
export type UserPasswordResetOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  secretHash?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_password_reset */
export type UserPasswordResetPkColumnsInput = {
  uid: Scalars['uuid'];
};

/** select columns of table "user_password_reset" */
export enum UserPasswordResetSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  SecretHash = 'secretHash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

/** input type for updating data in table "user_password_reset" */
export type UserPasswordResetSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  secretHash?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userUid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_password_reset" */
export enum UserPasswordResetUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  SecretHash = 'secretHash',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUid = 'userUid'
}

export type UserPasswordResetUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserPasswordResetSetInput>;
  where: UserPasswordResetBoolExp;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  uid: Scalars['uuid'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailEncrypted = 'emailEncrypted',
  /** column name */
  EmailHash = 'emailHash',
  /** column name */
  EmailKeyringId = 'emailKeyringId',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  emailEncrypted?: InputMaybe<Scalars['String']>;
  emailHash?: InputMaybe<Scalars['String']>;
  emailKeyringId?: InputMaybe<Scalars['smallint']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type UserStddevFields = {
  __typename?: 'UserStddevFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type UserStddevPopFields = {
  __typename?: 'UserStddevPopFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type UserStddevSampFields = {
  __typename?: 'UserStddevSampFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type UserSumFields = {
  __typename?: 'UserSumFields';
  emailKeyringId?: Maybe<Scalars['smallint']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailEncrypted = 'emailEncrypted',
  /** column name */
  EmailHash = 'emailHash',
  /** column name */
  EmailKeyringId = 'emailKeyringId',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UserUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};

/** aggregate var_pop on columns */
export type UserVarPopFields = {
  __typename?: 'UserVarPopFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type UserVarSampFields = {
  __typename?: 'UserVarSampFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type UserVarianceFields = {
  __typename?: 'UserVarianceFields';
  emailKeyringId?: Maybe<Scalars['Float']>;
};

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
  actionCreateAdminAuthToken?: Maybe<CreateAdminAuthTokenOutput>;
  actionCreateAuthToken?: Maybe<CreateAuthTokenOutput>;
  actionCreateDcaOrder?: Maybe<CreateDcaOrderResult>;
  actionCreateStripeSubscription: CreateStripeSubscription;
  actionCreateUser?: Maybe<CreateUserOutput>;
  actionCreateUserExchangeKeys?: Maybe<CreateUserExchangeKeysOutput>;
  actionDeleteUser?: Maybe<DeleteUserOutput>;
  actionDeleteUser2fa?: Maybe<DeleteUser2FaOutput>;
  actionEnableUser2fa?: Maybe<EnableUser2FaOutput>;
  actionRefreshAuthToken?: Maybe<RefreshAuthTokenOutput>;
  actionResetUserPassword: ResetUserPasswordOutput;
  actionSeedTestAccount: SeedTestAccountOutput;
  actionSendUserEmailVerify: SendUserEmailVerifyOutput;
  actionSendUserPasswordReset: SendUserPasswordResetOutput;
  actionSyncCurrencyFx?: Maybe<SyncCurrencyFxOutput>;
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
  /** delete data from the table: "balance" */
  deleteBalance?: Maybe<BalanceMutationResponse>;
  /** delete single row from the table: "balance" */
  deleteBalanceByPk?: Maybe<Balance>;
  /** delete data from the table: "cron_history" */
  deleteCronHistory?: Maybe<CronHistoryMutationResponse>;
  /** delete single row from the table: "cron_history" */
  deleteCronHistoryByPk?: Maybe<CronHistory>;
  /** delete data from the table: "currency" */
  deleteCurrency?: Maybe<CurrencyMutationResponse>;
  /** delete single row from the table: "currency" */
  deleteCurrencyByPk?: Maybe<Currency>;
  /** delete data from the table: "dca_order" */
  deleteDcaOrder?: Maybe<DcaOrderMutationResponse>;
  /** delete single row from the table: "dca_order" */
  deleteDcaOrderByPk?: Maybe<DcaOrder>;
  /** delete data from the table: "dca_order_history" */
  deleteDcaOrderHistory?: Maybe<DcaOrderHistoryMutationResponse>;
  /** delete single row from the table: "dca_order_history" */
  deleteDcaOrderHistoryByPk?: Maybe<DcaOrderHistory>;
  /** delete data from the table: "exchange" */
  deleteExchange?: Maybe<ExchangeMutationResponse>;
  /** delete single row from the table: "exchange" */
  deleteExchangeByPk?: Maybe<Exchange>;
  /** delete data from the table: "exchange_primary_currency" */
  deleteExchangePrimaryCurrency?: Maybe<ExchangePrimaryCurrencyMutationResponse>;
  /** delete single row from the table: "exchange_primary_currency" */
  deleteExchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>;
  /** delete data from the table: "exchange_secondary_currency" */
  deleteExchangeSecondaryCurrency?: Maybe<ExchangeSecondaryCurrencyMutationResponse>;
  /** delete single row from the table: "exchange_secondary_currency" */
  deleteExchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>;
  /** delete data from the table: "market" */
  deleteMarket?: Maybe<MarketMutationResponse>;
  /** delete single row from the table: "market" */
  deleteMarketByPk?: Maybe<Market>;
  /** delete data from the table: "market_price" */
  deleteMarketPrice?: Maybe<MarketPriceMutationResponse>;
  /** delete single row from the table: "market_price" */
  deleteMarketPriceByPk?: Maybe<MarketPrice>;
  /** delete data from the table: "market_trading_pair" */
  deleteMarketTradingPair?: Maybe<MarketTradingPairMutationResponse>;
  /** delete data from the table: "order" */
  deleteOrder?: Maybe<OrderMutationResponse>;
  /** delete single row from the table: "order" */
  deleteOrderByPk?: Maybe<Order>;
  /** delete data from the table: "stripe_customer" */
  deleteStripeCustomer?: Maybe<StripeCustomerMutationResponse>;
  /** delete single row from the table: "stripe_customer" */
  deleteStripeCustomerByPk?: Maybe<StripeCustomer>;
  /** delete data from the table: "stripe_price" */
  deleteStripePrice?: Maybe<StripePriceMutationResponse>;
  /** delete single row from the table: "stripe_price" */
  deleteStripePriceByPk?: Maybe<StripePrice>;
  /** delete data from the table: "stripe_product" */
  deleteStripeProduct?: Maybe<StripeProductMutationResponse>;
  /** delete single row from the table: "stripe_product" */
  deleteStripeProductByPk?: Maybe<StripeProduct>;
  /** delete data from the table: "stripe_subscription" */
  deleteStripeSubscription?: Maybe<StripeSubscriptionMutationResponse>;
  /** delete single row from the table: "stripe_subscription" */
  deleteStripeSubscriptionByPk?: Maybe<StripeSubscription>;
  /** delete data from the table: "trade" */
  deleteTrade?: Maybe<TradeMutationResponse>;
  /** delete single row from the table: "trade" */
  deleteTradeByPk?: Maybe<Trade>;
  /** delete data from the table: "type_trade_avg_price_by_window" */
  deleteTypeTradeAvgPriceByWindow?: Maybe<TypeTradeAvgPriceByWindowMutationResponse>;
  /** delete data from the table: "type_trade_sum_by_window" */
  deleteTypeTradeSumByWindow?: Maybe<TypeTradeSumByWindowMutationResponse>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete data from the table: "user_2fa" */
  deleteUser2fa?: Maybe<User2faMutationResponse>;
  /** delete single row from the table: "user_2fa" */
  deleteUser2faByPk?: Maybe<User2fa>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "user_device" */
  deleteUserDevice?: Maybe<UserDeviceMutationResponse>;
  /** delete single row from the table: "user_device" */
  deleteUserDeviceByPk?: Maybe<UserDevice>;
  /** delete data from the table: "user_email_verify" */
  deleteUserEmailVerify?: Maybe<UserEmailVerifyMutationResponse>;
  /** delete single row from the table: "user_email_verify" */
  deleteUserEmailVerifyByPk?: Maybe<UserEmailVerify>;
  /** delete data from the table: "user_exchange_keys" */
  deleteUserExchangeKeys?: Maybe<UserExchangeKeysMutationResponse>;
  /** delete single row from the table: "user_exchange_keys" */
  deleteUserExchangeKeysByPk?: Maybe<UserExchangeKeys>;
  /** delete data from the table: "user_password_reset" */
  deleteUserPasswordReset?: Maybe<UserPasswordResetMutationResponse>;
  /** delete single row from the table: "user_password_reset" */
  deleteUserPasswordResetByPk?: Maybe<UserPasswordReset>;
  /** insert data into the table: "balance" */
  insertBalance?: Maybe<BalanceMutationResponse>;
  /** insert a single row into the table: "balance" */
  insertBalanceOne?: Maybe<Balance>;
  /** insert data into the table: "cron_history" */
  insertCronHistory?: Maybe<CronHistoryMutationResponse>;
  /** insert a single row into the table: "cron_history" */
  insertCronHistoryOne?: Maybe<CronHistory>;
  /** insert data into the table: "currency" */
  insertCurrency?: Maybe<CurrencyMutationResponse>;
  /** insert a single row into the table: "currency" */
  insertCurrencyOne?: Maybe<Currency>;
  /** insert data into the table: "dca_order" */
  insertDcaOrder?: Maybe<DcaOrderMutationResponse>;
  /** insert data into the table: "dca_order_history" */
  insertDcaOrderHistory?: Maybe<DcaOrderHistoryMutationResponse>;
  /** insert a single row into the table: "dca_order_history" */
  insertDcaOrderHistoryOne?: Maybe<DcaOrderHistory>;
  /** insert a single row into the table: "dca_order" */
  insertDcaOrderOne?: Maybe<DcaOrder>;
  /** insert data into the table: "exchange" */
  insertExchange?: Maybe<ExchangeMutationResponse>;
  /** insert a single row into the table: "exchange" */
  insertExchangeOne?: Maybe<Exchange>;
  /** insert data into the table: "exchange_primary_currency" */
  insertExchangePrimaryCurrency?: Maybe<ExchangePrimaryCurrencyMutationResponse>;
  /** insert a single row into the table: "exchange_primary_currency" */
  insertExchangePrimaryCurrencyOne?: Maybe<ExchangePrimaryCurrency>;
  /** insert data into the table: "exchange_secondary_currency" */
  insertExchangeSecondaryCurrency?: Maybe<ExchangeSecondaryCurrencyMutationResponse>;
  /** insert a single row into the table: "exchange_secondary_currency" */
  insertExchangeSecondaryCurrencyOne?: Maybe<ExchangeSecondaryCurrency>;
  /** insert data into the table: "market" */
  insertMarket?: Maybe<MarketMutationResponse>;
  /** insert a single row into the table: "market" */
  insertMarketOne?: Maybe<Market>;
  /** insert data into the table: "market_price" */
  insertMarketPrice?: Maybe<MarketPriceMutationResponse>;
  /** insert a single row into the table: "market_price" */
  insertMarketPriceOne?: Maybe<MarketPrice>;
  /** insert data into the table: "market_trading_pair" */
  insertMarketTradingPair?: Maybe<MarketTradingPairMutationResponse>;
  /** insert a single row into the table: "market_trading_pair" */
  insertMarketTradingPairOne?: Maybe<MarketTradingPair>;
  /** insert data into the table: "order" */
  insertOrder?: Maybe<OrderMutationResponse>;
  /** insert a single row into the table: "order" */
  insertOrderOne?: Maybe<Order>;
  /** insert data into the table: "stripe_customer" */
  insertStripeCustomer?: Maybe<StripeCustomerMutationResponse>;
  /** insert a single row into the table: "stripe_customer" */
  insertStripeCustomerOne?: Maybe<StripeCustomer>;
  /** insert data into the table: "stripe_price" */
  insertStripePrice?: Maybe<StripePriceMutationResponse>;
  /** insert a single row into the table: "stripe_price" */
  insertStripePriceOne?: Maybe<StripePrice>;
  /** insert data into the table: "stripe_product" */
  insertStripeProduct?: Maybe<StripeProductMutationResponse>;
  /** insert a single row into the table: "stripe_product" */
  insertStripeProductOne?: Maybe<StripeProduct>;
  /** insert data into the table: "stripe_subscription" */
  insertStripeSubscription?: Maybe<StripeSubscriptionMutationResponse>;
  /** insert a single row into the table: "stripe_subscription" */
  insertStripeSubscriptionOne?: Maybe<StripeSubscription>;
  /** insert data into the table: "trade" */
  insertTrade?: Maybe<TradeMutationResponse>;
  /** insert a single row into the table: "trade" */
  insertTradeOne?: Maybe<Trade>;
  /** insert data into the table: "type_trade_avg_price_by_window" */
  insertTypeTradeAvgPriceByWindow?: Maybe<TypeTradeAvgPriceByWindowMutationResponse>;
  /** insert a single row into the table: "type_trade_avg_price_by_window" */
  insertTypeTradeAvgPriceByWindowOne?: Maybe<TypeTradeAvgPriceByWindow>;
  /** insert data into the table: "type_trade_sum_by_window" */
  insertTypeTradeSumByWindow?: Maybe<TypeTradeSumByWindowMutationResponse>;
  /** insert a single row into the table: "type_trade_sum_by_window" */
  insertTypeTradeSumByWindowOne?: Maybe<TypeTradeSumByWindow>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert data into the table: "user_2fa" */
  insertUser2fa?: Maybe<User2faMutationResponse>;
  /** insert a single row into the table: "user_2fa" */
  insertUser2faOne?: Maybe<User2fa>;
  /** insert data into the table: "user_device" */
  insertUserDevice?: Maybe<UserDeviceMutationResponse>;
  /** insert a single row into the table: "user_device" */
  insertUserDeviceOne?: Maybe<UserDevice>;
  /** insert data into the table: "user_email_verify" */
  insertUserEmailVerify?: Maybe<UserEmailVerifyMutationResponse>;
  /** insert a single row into the table: "user_email_verify" */
  insertUserEmailVerifyOne?: Maybe<UserEmailVerify>;
  /** insert data into the table: "user_exchange_keys" */
  insertUserExchangeKeys?: Maybe<UserExchangeKeysMutationResponse>;
  /** insert a single row into the table: "user_exchange_keys" */
  insertUserExchangeKeysOne?: Maybe<UserExchangeKeys>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "user_password_reset" */
  insertUserPasswordReset?: Maybe<UserPasswordResetMutationResponse>;
  /** insert a single row into the table: "user_password_reset" */
  insertUserPasswordResetOne?: Maybe<UserPasswordReset>;
  /** update data of the table: "balance" */
  updateBalance?: Maybe<BalanceMutationResponse>;
  /** update single row of the table: "balance" */
  updateBalanceByPk?: Maybe<Balance>;
  /** update multiples rows of table: "balance" */
  updateBalanceMany?: Maybe<Array<Maybe<BalanceMutationResponse>>>;
  /** update data of the table: "cron_history" */
  updateCronHistory?: Maybe<CronHistoryMutationResponse>;
  /** update single row of the table: "cron_history" */
  updateCronHistoryByPk?: Maybe<CronHistory>;
  /** update multiples rows of table: "cron_history" */
  updateCronHistoryMany?: Maybe<Array<Maybe<CronHistoryMutationResponse>>>;
  /** update data of the table: "currency" */
  updateCurrency?: Maybe<CurrencyMutationResponse>;
  /** update single row of the table: "currency" */
  updateCurrencyByPk?: Maybe<Currency>;
  /** update multiples rows of table: "currency" */
  updateCurrencyMany?: Maybe<Array<Maybe<CurrencyMutationResponse>>>;
  /** update data of the table: "dca_order" */
  updateDcaOrder?: Maybe<DcaOrderMutationResponse>;
  /** update single row of the table: "dca_order" */
  updateDcaOrderByPk?: Maybe<DcaOrder>;
  /** update data of the table: "dca_order_history" */
  updateDcaOrderHistory?: Maybe<DcaOrderHistoryMutationResponse>;
  /** update single row of the table: "dca_order_history" */
  updateDcaOrderHistoryByPk?: Maybe<DcaOrderHistory>;
  /** update multiples rows of table: "dca_order_history" */
  updateDcaOrderHistoryMany?: Maybe<Array<Maybe<DcaOrderHistoryMutationResponse>>>;
  /** update multiples rows of table: "dca_order" */
  updateDcaOrderMany?: Maybe<Array<Maybe<DcaOrderMutationResponse>>>;
  /** update data of the table: "exchange" */
  updateExchange?: Maybe<ExchangeMutationResponse>;
  /** update single row of the table: "exchange" */
  updateExchangeByPk?: Maybe<Exchange>;
  /** update multiples rows of table: "exchange" */
  updateExchangeMany?: Maybe<Array<Maybe<ExchangeMutationResponse>>>;
  /** update data of the table: "exchange_primary_currency" */
  updateExchangePrimaryCurrency?: Maybe<ExchangePrimaryCurrencyMutationResponse>;
  /** update single row of the table: "exchange_primary_currency" */
  updateExchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>;
  /** update multiples rows of table: "exchange_primary_currency" */
  updateExchangePrimaryCurrencyMany?: Maybe<Array<Maybe<ExchangePrimaryCurrencyMutationResponse>>>;
  /** update data of the table: "exchange_secondary_currency" */
  updateExchangeSecondaryCurrency?: Maybe<ExchangeSecondaryCurrencyMutationResponse>;
  /** update single row of the table: "exchange_secondary_currency" */
  updateExchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>;
  /** update multiples rows of table: "exchange_secondary_currency" */
  updateExchangeSecondaryCurrencyMany?: Maybe<Array<Maybe<ExchangeSecondaryCurrencyMutationResponse>>>;
  /** update data of the table: "market" */
  updateMarket?: Maybe<MarketMutationResponse>;
  /** update single row of the table: "market" */
  updateMarketByPk?: Maybe<Market>;
  /** update multiples rows of table: "market" */
  updateMarketMany?: Maybe<Array<Maybe<MarketMutationResponse>>>;
  /** update data of the table: "market_price" */
  updateMarketPrice?: Maybe<MarketPriceMutationResponse>;
  /** update single row of the table: "market_price" */
  updateMarketPriceByPk?: Maybe<MarketPrice>;
  /** update multiples rows of table: "market_price" */
  updateMarketPriceMany?: Maybe<Array<Maybe<MarketPriceMutationResponse>>>;
  /** update data of the table: "market_trading_pair" */
  updateMarketTradingPair?: Maybe<MarketTradingPairMutationResponse>;
  /** update multiples rows of table: "market_trading_pair" */
  updateMarketTradingPairMany?: Maybe<Array<Maybe<MarketTradingPairMutationResponse>>>;
  /** update data of the table: "order" */
  updateOrder?: Maybe<OrderMutationResponse>;
  /** update single row of the table: "order" */
  updateOrderByPk?: Maybe<Order>;
  /** update multiples rows of table: "order" */
  updateOrderMany?: Maybe<Array<Maybe<OrderMutationResponse>>>;
  /** update data of the table: "stripe_customer" */
  updateStripeCustomer?: Maybe<StripeCustomerMutationResponse>;
  /** update single row of the table: "stripe_customer" */
  updateStripeCustomerByPk?: Maybe<StripeCustomer>;
  /** update multiples rows of table: "stripe_customer" */
  updateStripeCustomerMany?: Maybe<Array<Maybe<StripeCustomerMutationResponse>>>;
  /** update data of the table: "stripe_price" */
  updateStripePrice?: Maybe<StripePriceMutationResponse>;
  /** update single row of the table: "stripe_price" */
  updateStripePriceByPk?: Maybe<StripePrice>;
  /** update multiples rows of table: "stripe_price" */
  updateStripePriceMany?: Maybe<Array<Maybe<StripePriceMutationResponse>>>;
  /** update data of the table: "stripe_product" */
  updateStripeProduct?: Maybe<StripeProductMutationResponse>;
  /** update single row of the table: "stripe_product" */
  updateStripeProductByPk?: Maybe<StripeProduct>;
  /** update multiples rows of table: "stripe_product" */
  updateStripeProductMany?: Maybe<Array<Maybe<StripeProductMutationResponse>>>;
  /** update data of the table: "stripe_subscription" */
  updateStripeSubscription?: Maybe<StripeSubscriptionMutationResponse>;
  /** update single row of the table: "stripe_subscription" */
  updateStripeSubscriptionByPk?: Maybe<StripeSubscription>;
  /** update multiples rows of table: "stripe_subscription" */
  updateStripeSubscriptionMany?: Maybe<Array<Maybe<StripeSubscriptionMutationResponse>>>;
  /** update data of the table: "trade" */
  updateTrade?: Maybe<TradeMutationResponse>;
  /** update single row of the table: "trade" */
  updateTradeByPk?: Maybe<Trade>;
  /** update multiples rows of table: "trade" */
  updateTradeMany?: Maybe<Array<Maybe<TradeMutationResponse>>>;
  /** update data of the table: "type_trade_avg_price_by_window" */
  updateTypeTradeAvgPriceByWindow?: Maybe<TypeTradeAvgPriceByWindowMutationResponse>;
  /** update multiples rows of table: "type_trade_avg_price_by_window" */
  updateTypeTradeAvgPriceByWindowMany?: Maybe<Array<Maybe<TypeTradeAvgPriceByWindowMutationResponse>>>;
  /** update data of the table: "type_trade_sum_by_window" */
  updateTypeTradeSumByWindow?: Maybe<TypeTradeSumByWindowMutationResponse>;
  /** update multiples rows of table: "type_trade_sum_by_window" */
  updateTypeTradeSumByWindowMany?: Maybe<Array<Maybe<TypeTradeSumByWindowMutationResponse>>>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update data of the table: "user_2fa" */
  updateUser2fa?: Maybe<User2faMutationResponse>;
  /** update single row of the table: "user_2fa" */
  updateUser2faByPk?: Maybe<User2fa>;
  /** update multiples rows of table: "user_2fa" */
  updateUser2faMany?: Maybe<Array<Maybe<User2faMutationResponse>>>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "user_device" */
  updateUserDevice?: Maybe<UserDeviceMutationResponse>;
  /** update single row of the table: "user_device" */
  updateUserDeviceByPk?: Maybe<UserDevice>;
  /** update multiples rows of table: "user_device" */
  updateUserDeviceMany?: Maybe<Array<Maybe<UserDeviceMutationResponse>>>;
  /** update data of the table: "user_email_verify" */
  updateUserEmailVerify?: Maybe<UserEmailVerifyMutationResponse>;
  /** update single row of the table: "user_email_verify" */
  updateUserEmailVerifyByPk?: Maybe<UserEmailVerify>;
  /** update multiples rows of table: "user_email_verify" */
  updateUserEmailVerifyMany?: Maybe<Array<Maybe<UserEmailVerifyMutationResponse>>>;
  /** update data of the table: "user_exchange_keys" */
  updateUserExchangeKeys?: Maybe<UserExchangeKeysMutationResponse>;
  /** update single row of the table: "user_exchange_keys" */
  updateUserExchangeKeysByPk?: Maybe<UserExchangeKeys>;
  /** update multiples rows of table: "user_exchange_keys" */
  updateUserExchangeKeysMany?: Maybe<Array<Maybe<UserExchangeKeysMutationResponse>>>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
  /** update data of the table: "user_password_reset" */
  updateUserPasswordReset?: Maybe<UserPasswordResetMutationResponse>;
  /** update single row of the table: "user_password_reset" */
  updateUserPasswordResetByPk?: Maybe<UserPasswordReset>;
  /** update multiples rows of table: "user_password_reset" */
  updateUserPasswordResetMany?: Maybe<Array<Maybe<UserPasswordResetMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootActionCreateAdminAuthTokenArgs = {
  userUid: Scalars['uuid'];
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
export type Mutation_RootActionDeleteUser2faArgs = {
  token: Scalars['String'];
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
export type Mutation_RootActionSeedTestAccountArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionSendUserPasswordResetArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootActionSyncCurrencyFxArgs = {
  endDate: Scalars['timestamptz'];
  fromSymbol: Scalars['String'];
  startDate: Scalars['timestamptz'];
  toSymbol: Scalars['String'];
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
export type Mutation_RootDeleteBalanceArgs = {
  where: BalanceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteBalanceByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCronHistoryArgs = {
  where: CronHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCronHistoryByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCurrencyArgs = {
  where: CurrencyBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCurrencyByPkArgs = {
  symbol: Scalars['String'];
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
export type Mutation_RootDeleteDcaOrderHistoryArgs = {
  where: DcaOrderHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteDcaOrderHistoryByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteExchangeArgs = {
  where: ExchangeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteExchangeByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteExchangePrimaryCurrencyArgs = {
  where: ExchangePrimaryCurrencyBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteExchangePrimaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteExchangeSecondaryCurrencyArgs = {
  where: ExchangeSecondaryCurrencyBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteExchangeSecondaryCurrencyByPkArgs = {
  exchangeUid: Scalars['uuid'];
  symbol: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteMarketArgs = {
  where: MarketBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteMarketByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteMarketPriceArgs = {
  where: MarketPriceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteMarketPriceByPkArgs = {
  assetSymbol: Scalars['String'];
  currency: Scalars['String'];
  marketUid: Scalars['uuid'];
  sourceCurrency: Scalars['bpchar'];
  timestamp: Scalars['timestamptz'];
};


/** mutation root */
export type Mutation_RootDeleteMarketTradingPairArgs = {
  where: MarketTradingPairBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrderArgs = {
  where: OrderBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrderByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteStripeCustomerArgs = {
  where: StripeCustomerBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteStripeCustomerByPkArgs = {
  userUid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteStripePriceArgs = {
  where: StripePriceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteStripePriceByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteStripeProductArgs = {
  where: StripeProductBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteStripeProductByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteStripeSubscriptionArgs = {
  where: StripeSubscriptionBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteStripeSubscriptionByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteTradeArgs = {
  where: TradeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTradeByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTypeTradeAvgPriceByWindowArgs = {
  where: TypeTradeAvgPriceByWindowBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTypeTradeSumByWindowArgs = {
  where: TypeTradeSumByWindowBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUser2faArgs = {
  where: User2faBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUser2faByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
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
export type Mutation_RootDeleteUserEmailVerifyArgs = {
  where: UserEmailVerifyBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserEmailVerifyByPkArgs = {
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
export type Mutation_RootDeleteUserPasswordResetArgs = {
  where: UserPasswordResetBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserPasswordResetByPkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertBalanceArgs = {
  objects: Array<BalanceInsertInput>;
  onConflict?: InputMaybe<BalanceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertBalanceOneArgs = {
  object: BalanceInsertInput;
  onConflict?: InputMaybe<BalanceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCronHistoryArgs = {
  objects: Array<CronHistoryInsertInput>;
  onConflict?: InputMaybe<CronHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCronHistoryOneArgs = {
  object: CronHistoryInsertInput;
  onConflict?: InputMaybe<CronHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCurrencyArgs = {
  objects: Array<CurrencyInsertInput>;
  onConflict?: InputMaybe<CurrencyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCurrencyOneArgs = {
  object: CurrencyInsertInput;
  onConflict?: InputMaybe<CurrencyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDcaOrderArgs = {
  objects: Array<DcaOrderInsertInput>;
  onConflict?: InputMaybe<DcaOrderOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDcaOrderHistoryArgs = {
  objects: Array<DcaOrderHistoryInsertInput>;
  onConflict?: InputMaybe<DcaOrderHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDcaOrderHistoryOneArgs = {
  object: DcaOrderHistoryInsertInput;
  onConflict?: InputMaybe<DcaOrderHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDcaOrderOneArgs = {
  object: DcaOrderInsertInput;
  onConflict?: InputMaybe<DcaOrderOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertExchangeArgs = {
  objects: Array<ExchangeInsertInput>;
  onConflict?: InputMaybe<ExchangeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertExchangeOneArgs = {
  object: ExchangeInsertInput;
  onConflict?: InputMaybe<ExchangeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertExchangePrimaryCurrencyArgs = {
  objects: Array<ExchangePrimaryCurrencyInsertInput>;
  onConflict?: InputMaybe<ExchangePrimaryCurrencyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertExchangePrimaryCurrencyOneArgs = {
  object: ExchangePrimaryCurrencyInsertInput;
  onConflict?: InputMaybe<ExchangePrimaryCurrencyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertExchangeSecondaryCurrencyArgs = {
  objects: Array<ExchangeSecondaryCurrencyInsertInput>;
  onConflict?: InputMaybe<ExchangeSecondaryCurrencyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertExchangeSecondaryCurrencyOneArgs = {
  object: ExchangeSecondaryCurrencyInsertInput;
  onConflict?: InputMaybe<ExchangeSecondaryCurrencyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMarketArgs = {
  objects: Array<MarketInsertInput>;
  onConflict?: InputMaybe<MarketOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMarketOneArgs = {
  object: MarketInsertInput;
  onConflict?: InputMaybe<MarketOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMarketPriceArgs = {
  objects: Array<MarketPriceInsertInput>;
  onConflict?: InputMaybe<MarketPriceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMarketPriceOneArgs = {
  object: MarketPriceInsertInput;
  onConflict?: InputMaybe<MarketPriceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMarketTradingPairArgs = {
  objects: Array<MarketTradingPairInsertInput>;
};


/** mutation root */
export type Mutation_RootInsertMarketTradingPairOneArgs = {
  object: MarketTradingPairInsertInput;
};


/** mutation root */
export type Mutation_RootInsertOrderArgs = {
  objects: Array<OrderInsertInput>;
  onConflict?: InputMaybe<OrderOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderOneArgs = {
  object: OrderInsertInput;
  onConflict?: InputMaybe<OrderOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripeCustomerArgs = {
  objects: Array<StripeCustomerInsertInput>;
  onConflict?: InputMaybe<StripeCustomerOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripeCustomerOneArgs = {
  object: StripeCustomerInsertInput;
  onConflict?: InputMaybe<StripeCustomerOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripePriceArgs = {
  objects: Array<StripePriceInsertInput>;
  onConflict?: InputMaybe<StripePriceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripePriceOneArgs = {
  object: StripePriceInsertInput;
  onConflict?: InputMaybe<StripePriceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripeProductArgs = {
  objects: Array<StripeProductInsertInput>;
  onConflict?: InputMaybe<StripeProductOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripeProductOneArgs = {
  object: StripeProductInsertInput;
  onConflict?: InputMaybe<StripeProductOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripeSubscriptionArgs = {
  objects: Array<StripeSubscriptionInsertInput>;
  onConflict?: InputMaybe<StripeSubscriptionOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertStripeSubscriptionOneArgs = {
  object: StripeSubscriptionInsertInput;
  onConflict?: InputMaybe<StripeSubscriptionOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTradeArgs = {
  objects: Array<TradeInsertInput>;
  onConflict?: InputMaybe<TradeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTradeOneArgs = {
  object: TradeInsertInput;
  onConflict?: InputMaybe<TradeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTypeTradeAvgPriceByWindowArgs = {
  objects: Array<TypeTradeAvgPriceByWindowInsertInput>;
};


/** mutation root */
export type Mutation_RootInsertTypeTradeAvgPriceByWindowOneArgs = {
  object: TypeTradeAvgPriceByWindowInsertInput;
};


/** mutation root */
export type Mutation_RootInsertTypeTradeSumByWindowArgs = {
  objects: Array<TypeTradeSumByWindowInsertInput>;
};


/** mutation root */
export type Mutation_RootInsertTypeTradeSumByWindowOneArgs = {
  object: TypeTradeSumByWindowInsertInput;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUser2faArgs = {
  objects: Array<User2faInsertInput>;
  onConflict?: InputMaybe<User2faOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUser2faOneArgs = {
  object: User2faInsertInput;
  onConflict?: InputMaybe<User2faOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserDeviceArgs = {
  objects: Array<UserDeviceInsertInput>;
  onConflict?: InputMaybe<UserDeviceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserDeviceOneArgs = {
  object: UserDeviceInsertInput;
  onConflict?: InputMaybe<UserDeviceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserEmailVerifyArgs = {
  objects: Array<UserEmailVerifyInsertInput>;
  onConflict?: InputMaybe<UserEmailVerifyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserEmailVerifyOneArgs = {
  object: UserEmailVerifyInsertInput;
  onConflict?: InputMaybe<UserEmailVerifyOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserExchangeKeysArgs = {
  objects: Array<UserExchangeKeysInsertInput>;
  onConflict?: InputMaybe<UserExchangeKeysOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserExchangeKeysOneArgs = {
  object: UserExchangeKeysInsertInput;
  onConflict?: InputMaybe<UserExchangeKeysOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserPasswordResetArgs = {
  objects: Array<UserPasswordResetInsertInput>;
  onConflict?: InputMaybe<UserPasswordResetOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserPasswordResetOneArgs = {
  object: UserPasswordResetInsertInput;
  onConflict?: InputMaybe<UserPasswordResetOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateBalanceArgs = {
  _inc?: InputMaybe<BalanceIncInput>;
  _set?: InputMaybe<BalanceSetInput>;
  where: BalanceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateBalanceByPkArgs = {
  _inc?: InputMaybe<BalanceIncInput>;
  _set?: InputMaybe<BalanceSetInput>;
  pk_columns: BalancePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateBalanceManyArgs = {
  updates: Array<BalanceUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCronHistoryArgs = {
  _append?: InputMaybe<CronHistoryAppendInput>;
  _delete_at_path?: InputMaybe<CronHistoryDeleteAtPathInput>;
  _delete_elem?: InputMaybe<CronHistoryDeleteElemInput>;
  _delete_key?: InputMaybe<CronHistoryDeleteKeyInput>;
  _prepend?: InputMaybe<CronHistoryPrependInput>;
  _set?: InputMaybe<CronHistorySetInput>;
  where: CronHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCronHistoryByPkArgs = {
  _append?: InputMaybe<CronHistoryAppendInput>;
  _delete_at_path?: InputMaybe<CronHistoryDeleteAtPathInput>;
  _delete_elem?: InputMaybe<CronHistoryDeleteElemInput>;
  _delete_key?: InputMaybe<CronHistoryDeleteKeyInput>;
  _prepend?: InputMaybe<CronHistoryPrependInput>;
  _set?: InputMaybe<CronHistorySetInput>;
  pk_columns: CronHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCronHistoryManyArgs = {
  updates: Array<CronHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCurrencyArgs = {
  _set?: InputMaybe<CurrencySetInput>;
  where: CurrencyBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCurrencyByPkArgs = {
  _set?: InputMaybe<CurrencySetInput>;
  pk_columns: CurrencyPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCurrencyManyArgs = {
  updates: Array<CurrencyUpdates>;
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
export type Mutation_RootUpdateDcaOrderHistoryArgs = {
  _inc?: InputMaybe<DcaOrderHistoryIncInput>;
  _set?: InputMaybe<DcaOrderHistorySetInput>;
  where: DcaOrderHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateDcaOrderHistoryByPkArgs = {
  _inc?: InputMaybe<DcaOrderHistoryIncInput>;
  _set?: InputMaybe<DcaOrderHistorySetInput>;
  pk_columns: DcaOrderHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateDcaOrderHistoryManyArgs = {
  updates: Array<DcaOrderHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateDcaOrderManyArgs = {
  updates: Array<DcaOrderUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateExchangeArgs = {
  _set?: InputMaybe<ExchangeSetInput>;
  where: ExchangeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateExchangeByPkArgs = {
  _set?: InputMaybe<ExchangeSetInput>;
  pk_columns: ExchangePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateExchangeManyArgs = {
  updates: Array<ExchangeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateExchangePrimaryCurrencyArgs = {
  _set?: InputMaybe<ExchangePrimaryCurrencySetInput>;
  where: ExchangePrimaryCurrencyBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateExchangePrimaryCurrencyByPkArgs = {
  _set?: InputMaybe<ExchangePrimaryCurrencySetInput>;
  pk_columns: ExchangePrimaryCurrencyPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateExchangePrimaryCurrencyManyArgs = {
  updates: Array<ExchangePrimaryCurrencyUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateExchangeSecondaryCurrencyArgs = {
  _set?: InputMaybe<ExchangeSecondaryCurrencySetInput>;
  where: ExchangeSecondaryCurrencyBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateExchangeSecondaryCurrencyByPkArgs = {
  _set?: InputMaybe<ExchangeSecondaryCurrencySetInput>;
  pk_columns: ExchangeSecondaryCurrencyPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateExchangeSecondaryCurrencyManyArgs = {
  updates: Array<ExchangeSecondaryCurrencyUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateMarketArgs = {
  _set?: InputMaybe<MarketSetInput>;
  where: MarketBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateMarketByPkArgs = {
  _set?: InputMaybe<MarketSetInput>;
  pk_columns: MarketPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateMarketManyArgs = {
  updates: Array<MarketUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateMarketPriceArgs = {
  _inc?: InputMaybe<MarketPriceIncInput>;
  _set?: InputMaybe<MarketPriceSetInput>;
  where: MarketPriceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateMarketPriceByPkArgs = {
  _inc?: InputMaybe<MarketPriceIncInput>;
  _set?: InputMaybe<MarketPriceSetInput>;
  pk_columns: MarketPricePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateMarketPriceManyArgs = {
  updates: Array<MarketPriceUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateMarketTradingPairArgs = {
  _set?: InputMaybe<MarketTradingPairSetInput>;
  where: MarketTradingPairBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateMarketTradingPairManyArgs = {
  updates: Array<MarketTradingPairUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrderArgs = {
  _inc?: InputMaybe<OrderIncInput>;
  _set?: InputMaybe<OrderSetInput>;
  where: OrderBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrderByPkArgs = {
  _inc?: InputMaybe<OrderIncInput>;
  _set?: InputMaybe<OrderSetInput>;
  pk_columns: OrderPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrderManyArgs = {
  updates: Array<OrderUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateStripeCustomerArgs = {
  _set?: InputMaybe<StripeCustomerSetInput>;
  where: StripeCustomerBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateStripeCustomerByPkArgs = {
  _set?: InputMaybe<StripeCustomerSetInput>;
  pk_columns: StripeCustomerPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateStripeCustomerManyArgs = {
  updates: Array<StripeCustomerUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateStripePriceArgs = {
  _inc?: InputMaybe<StripePriceIncInput>;
  _set?: InputMaybe<StripePriceSetInput>;
  where: StripePriceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateStripePriceByPkArgs = {
  _inc?: InputMaybe<StripePriceIncInput>;
  _set?: InputMaybe<StripePriceSetInput>;
  pk_columns: StripePricePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateStripePriceManyArgs = {
  updates: Array<StripePriceUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateStripeProductArgs = {
  _set?: InputMaybe<StripeProductSetInput>;
  where: StripeProductBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateStripeProductByPkArgs = {
  _set?: InputMaybe<StripeProductSetInput>;
  pk_columns: StripeProductPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateStripeProductManyArgs = {
  updates: Array<StripeProductUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateStripeSubscriptionArgs = {
  _inc?: InputMaybe<StripeSubscriptionIncInput>;
  _set?: InputMaybe<StripeSubscriptionSetInput>;
  where: StripeSubscriptionBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateStripeSubscriptionByPkArgs = {
  _inc?: InputMaybe<StripeSubscriptionIncInput>;
  _set?: InputMaybe<StripeSubscriptionSetInput>;
  pk_columns: StripeSubscriptionPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateStripeSubscriptionManyArgs = {
  updates: Array<StripeSubscriptionUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTradeArgs = {
  _inc?: InputMaybe<TradeIncInput>;
  _set?: InputMaybe<TradeSetInput>;
  where: TradeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTradeByPkArgs = {
  _inc?: InputMaybe<TradeIncInput>;
  _set?: InputMaybe<TradeSetInput>;
  pk_columns: TradePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTradeManyArgs = {
  updates: Array<TradeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTypeTradeAvgPriceByWindowArgs = {
  _inc?: InputMaybe<TypeTradeAvgPriceByWindowIncInput>;
  _set?: InputMaybe<TypeTradeAvgPriceByWindowSetInput>;
  where: TypeTradeAvgPriceByWindowBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTypeTradeAvgPriceByWindowManyArgs = {
  updates: Array<TypeTradeAvgPriceByWindowUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTypeTradeSumByWindowArgs = {
  _inc?: InputMaybe<TypeTradeSumByWindowIncInput>;
  _set?: InputMaybe<TypeTradeSumByWindowSetInput>;
  where: TypeTradeSumByWindowBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTypeTradeSumByWindowManyArgs = {
  updates: Array<TypeTradeSumByWindowUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUser2faArgs = {
  _inc?: InputMaybe<User2faIncInput>;
  _set?: InputMaybe<User2faSetInput>;
  where: User2faBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUser2faByPkArgs = {
  _inc?: InputMaybe<User2faIncInput>;
  _set?: InputMaybe<User2faSetInput>;
  pk_columns: User2faPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUser2faManyArgs = {
  updates: Array<User2faUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
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


/** mutation root */
export type Mutation_RootUpdateUserEmailVerifyArgs = {
  _set?: InputMaybe<UserEmailVerifySetInput>;
  where: UserEmailVerifyBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserEmailVerifyByPkArgs = {
  _set?: InputMaybe<UserEmailVerifySetInput>;
  pk_columns: UserEmailVerifyPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserEmailVerifyManyArgs = {
  updates: Array<UserEmailVerifyUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserExchangeKeysArgs = {
  _inc?: InputMaybe<UserExchangeKeysIncInput>;
  _set?: InputMaybe<UserExchangeKeysSetInput>;
  where: UserExchangeKeysBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserExchangeKeysByPkArgs = {
  _inc?: InputMaybe<UserExchangeKeysIncInput>;
  _set?: InputMaybe<UserExchangeKeysSetInput>;
  pk_columns: UserExchangeKeysPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserExchangeKeysManyArgs = {
  updates: Array<UserExchangeKeysUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserPasswordResetArgs = {
  _set?: InputMaybe<UserPasswordResetSetInput>;
  where: UserPasswordResetBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserPasswordResetByPkArgs = {
  _set?: InputMaybe<UserPasswordResetSetInput>;
  pk_columns: UserPasswordResetPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserPasswordResetManyArgs = {
  updates: Array<UserPasswordResetUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** Query information about a Stripe Subscription (direct from Stripe) */
  actionQueryLiveStripeSubscription: QueryLiveStripeSubscriptionOutput;
  actionQueryStripeConfig: QueryStripeConfigOutput;
  actionQueryUserEmail?: Maybe<QueryUserEmailOutput>;
  actionQueryUserLimit?: Maybe<QueryUserLimitOutput>;
  actionSetupUser2fa?: Maybe<SetupUser2FaOutput>;
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch aggregated fields from the table: "balance" */
  balanceAggregate: BalanceAggregate;
  /** fetch data from the table: "balance" using primary key columns */
  balanceByPk?: Maybe<Balance>;
  /** fetch data from the table: "cron_history" */
  cronHistory: Array<CronHistory>;
  /** fetch aggregated fields from the table: "cron_history" */
  cronHistoryAggregate: CronHistoryAggregate;
  /** fetch data from the table: "cron_history" using primary key columns */
  cronHistoryByPk?: Maybe<CronHistory>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currencyAggregate: CurrencyAggregate;
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
  /** fetch aggregated fields from the table: "exchange" */
  exchangeAggregate: ExchangeAggregate;
  /** fetch data from the table: "exchange" using primary key columns */
  exchangeByPk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchangePrimaryCurrency: Array<ExchangePrimaryCurrency>;
  /** fetch aggregated fields from the table: "exchange_primary_currency" */
  exchangePrimaryCurrencyAggregate: ExchangePrimaryCurrencyAggregate;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrency: Array<ExchangeSecondaryCurrency>;
  /** fetch aggregated fields from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrencyAggregate: ExchangeSecondaryCurrencyAggregate;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch aggregated fields from the table: "market" */
  marketAggregate: MarketAggregate;
  /** fetch data from the table: "market" using primary key columns */
  marketByPk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  marketPrice: Array<MarketPrice>;
  /** fetch aggregated fields from the table: "market_price" */
  marketPriceAggregate: MarketPriceAggregate;
  /** fetch data from the table: "market_price" using primary key columns */
  marketPriceByPk?: Maybe<MarketPrice>;
  /** execute function "market_price_latest" which returns "market_price" */
  marketPriceLatest: Array<MarketPrice>;
  /** execute function "market_price_latest" and query aggregates on result of table type "market_price" */
  marketPriceLatestAggregate: MarketPriceAggregate;
  /** fetch data from the table: "market_trading_pair" */
  marketTradingPair: Array<MarketTradingPair>;
  /** fetch aggregated fields from the table: "market_trading_pair" */
  marketTradingPairAggregate: MarketTradingPairAggregate;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  orderAggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  orderByPk?: Maybe<Order>;
  /** fetch data from the table: "stripe_customer" */
  stripeCustomer: Array<StripeCustomer>;
  /** fetch aggregated fields from the table: "stripe_customer" */
  stripeCustomerAggregate: StripeCustomerAggregate;
  /** fetch data from the table: "stripe_customer" using primary key columns */
  stripeCustomerByPk?: Maybe<StripeCustomer>;
  /** fetch data from the table: "stripe_price" */
  stripePrice: Array<StripePrice>;
  /** fetch aggregated fields from the table: "stripe_price" */
  stripePriceAggregate: StripePriceAggregate;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripePriceByPk?: Maybe<StripePrice>;
  /** fetch data from the table: "stripe_product" */
  stripeProduct: Array<StripeProduct>;
  /** fetch aggregated fields from the table: "stripe_product" */
  stripeProductAggregate: StripeProductAggregate;
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
  /** execute function "trade_avg_price_by_window" and query aggregates on result of table type "type_trade_avg_price_by_window" */
  tradeAvgPriceByWindowAggregate: TypeTradeAvgPriceByWindowAggregate;
  /** fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  tradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** execute function "trade_sum_by_window" and query aggregates on result of table type "type_trade_sum_by_window" */
  tradeSumByWindowAggregate: TypeTradeSumByWindowAggregate;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindow: Array<TypeTradeAvgPriceByWindow>;
  /** fetch aggregated fields from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindowAggregate: TypeTradeAvgPriceByWindowAggregate;
  /** fetch data from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** fetch aggregated fields from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindowAggregate: TypeTradeSumByWindowAggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user2fa: Array<User2fa>;
  /** fetch aggregated fields from the table: "user_2fa" */
  user2faAggregate: User2faAggregate;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user2faByPk?: Maybe<User2fa>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  userDevice: Array<UserDevice>;
  /** fetch aggregated fields from the table: "user_device" */
  userDeviceAggregate: UserDeviceAggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  userDeviceByPk?: Maybe<UserDevice>;
  /** fetch data from the table: "user_email_verify" */
  userEmailVerify: Array<UserEmailVerify>;
  /** fetch aggregated fields from the table: "user_email_verify" */
  userEmailVerifyAggregate: UserEmailVerifyAggregate;
  /** fetch data from the table: "user_email_verify" using primary key columns */
  userEmailVerifyByPk?: Maybe<UserEmailVerify>;
  /** An array relationship */
  userExchangeKeys: Array<UserExchangeKeys>;
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  userExchangeKeysByPk?: Maybe<UserExchangeKeys>;
  /** fetch data from the table: "user_password_reset" */
  userPasswordReset: Array<UserPasswordReset>;
  /** fetch aggregated fields from the table: "user_password_reset" */
  userPasswordResetAggregate: UserPasswordResetAggregate;
  /** fetch data from the table: "user_password_reset" using primary key columns */
  userPasswordResetByPk?: Maybe<UserPasswordReset>;
};


export type Query_RootActionQueryLiveStripeSubscriptionArgs = {
  subscriptionId: Scalars['String'];
};


export type Query_RootActionQueryUserEmailArgs = {
  userUid: Scalars['uuid'];
};


export type Query_RootBalanceArgs = {
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


export type Query_RootBalanceAggregateArgs = {
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


export type Query_RootBalanceByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootCronHistoryArgs = {
  distinctOn?: InputMaybe<Array<CronHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CronHistoryOrderBy>>;
  where?: InputMaybe<CronHistoryBoolExp>;
};


export type Query_RootCronHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CronHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CronHistoryOrderBy>>;
  where?: InputMaybe<CronHistoryBoolExp>;
};


export type Query_RootCronHistoryByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootCurrencyArgs = {
  distinctOn?: InputMaybe<Array<CurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrencyOrderBy>>;
  where?: InputMaybe<CurrencyBoolExp>;
};


export type Query_RootCurrencyAggregateArgs = {
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


export type Query_RootExchangeAggregateArgs = {
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


export type Query_RootExchangePrimaryCurrencyAggregateArgs = {
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


export type Query_RootExchangeSecondaryCurrencyAggregateArgs = {
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


export type Query_RootMarketAggregateArgs = {
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


export type Query_RootMarketPriceAggregateArgs = {
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


export type Query_RootMarketPriceLatestAggregateArgs = {
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


export type Query_RootMarketTradingPairAggregateArgs = {
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


export type Query_RootStripeCustomerArgs = {
  distinctOn?: InputMaybe<Array<StripeCustomerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeCustomerOrderBy>>;
  where?: InputMaybe<StripeCustomerBoolExp>;
};


export type Query_RootStripeCustomerAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeCustomerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeCustomerOrderBy>>;
  where?: InputMaybe<StripeCustomerBoolExp>;
};


export type Query_RootStripeCustomerByPkArgs = {
  userUid: Scalars['uuid'];
};


export type Query_RootStripePriceArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};


export type Query_RootStripePriceAggregateArgs = {
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


export type Query_RootStripeProductAggregateArgs = {
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


export type Query_RootTradeAvgPriceByWindowAggregateArgs = {
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


export type Query_RootTradeSumByWindowAggregateArgs = {
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


export type Query_RootTypeTradeAvgPriceByWindowAggregateArgs = {
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


export type Query_RootTypeTradeSumByWindowAggregateArgs = {
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


export type Query_RootUser2faAggregateArgs = {
  distinctOn?: InputMaybe<Array<User2faSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<User2faOrderBy>>;
  where?: InputMaybe<User2faBoolExp>;
};


export type Query_RootUser2faByPkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
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


export type Query_RootUserEmailVerifyArgs = {
  distinctOn?: InputMaybe<Array<UserEmailVerifySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserEmailVerifyOrderBy>>;
  where?: InputMaybe<UserEmailVerifyBoolExp>;
};


export type Query_RootUserEmailVerifyAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserEmailVerifySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserEmailVerifyOrderBy>>;
  where?: InputMaybe<UserEmailVerifyBoolExp>;
};


export type Query_RootUserEmailVerifyByPkArgs = {
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


export type Query_RootUserPasswordResetArgs = {
  distinctOn?: InputMaybe<Array<UserPasswordResetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserPasswordResetOrderBy>>;
  where?: InputMaybe<UserPasswordResetBoolExp>;
};


export type Query_RootUserPasswordResetAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserPasswordResetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserPasswordResetOrderBy>>;
  where?: InputMaybe<UserPasswordResetBoolExp>;
};


export type Query_RootUserPasswordResetByPkArgs = {
  uid: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch aggregated fields from the table: "balance" */
  balanceAggregate: BalanceAggregate;
  /** fetch data from the table: "balance" using primary key columns */
  balanceByPk?: Maybe<Balance>;
  /** fetch data from the table: "cron_history" */
  cronHistory: Array<CronHistory>;
  /** fetch aggregated fields from the table: "cron_history" */
  cronHistoryAggregate: CronHistoryAggregate;
  /** fetch data from the table: "cron_history" using primary key columns */
  cronHistoryByPk?: Maybe<CronHistory>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currencyAggregate: CurrencyAggregate;
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
  /** fetch aggregated fields from the table: "exchange" */
  exchangeAggregate: ExchangeAggregate;
  /** fetch data from the table: "exchange" using primary key columns */
  exchangeByPk?: Maybe<Exchange>;
  /** fetch data from the table: "exchange_primary_currency" */
  exchangePrimaryCurrency: Array<ExchangePrimaryCurrency>;
  /** fetch aggregated fields from the table: "exchange_primary_currency" */
  exchangePrimaryCurrencyAggregate: ExchangePrimaryCurrencyAggregate;
  /** fetch data from the table: "exchange_primary_currency" using primary key columns */
  exchangePrimaryCurrencyByPk?: Maybe<ExchangePrimaryCurrency>;
  /** fetch data from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrency: Array<ExchangeSecondaryCurrency>;
  /** fetch aggregated fields from the table: "exchange_secondary_currency" */
  exchangeSecondaryCurrencyAggregate: ExchangeSecondaryCurrencyAggregate;
  /** fetch data from the table: "exchange_secondary_currency" using primary key columns */
  exchangeSecondaryCurrencyByPk?: Maybe<ExchangeSecondaryCurrency>;
  /** fetch data from the table: "market" */
  market: Array<Market>;
  /** fetch aggregated fields from the table: "market" */
  marketAggregate: MarketAggregate;
  /** fetch data from the table: "market" using primary key columns */
  marketByPk?: Maybe<Market>;
  /** fetch data from the table: "market_price" */
  marketPrice: Array<MarketPrice>;
  /** fetch aggregated fields from the table: "market_price" */
  marketPriceAggregate: MarketPriceAggregate;
  /** fetch data from the table: "market_price" using primary key columns */
  marketPriceByPk?: Maybe<MarketPrice>;
  /** execute function "market_price_latest" which returns "market_price" */
  marketPriceLatest: Array<MarketPrice>;
  /** execute function "market_price_latest" and query aggregates on result of table type "market_price" */
  marketPriceLatestAggregate: MarketPriceAggregate;
  /** fetch data from the table: "market_trading_pair" */
  marketTradingPair: Array<MarketTradingPair>;
  /** fetch aggregated fields from the table: "market_trading_pair" */
  marketTradingPairAggregate: MarketTradingPairAggregate;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  orderAggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  orderByPk?: Maybe<Order>;
  /** fetch data from the table: "stripe_customer" */
  stripeCustomer: Array<StripeCustomer>;
  /** fetch aggregated fields from the table: "stripe_customer" */
  stripeCustomerAggregate: StripeCustomerAggregate;
  /** fetch data from the table: "stripe_customer" using primary key columns */
  stripeCustomerByPk?: Maybe<StripeCustomer>;
  /** fetch data from the table: "stripe_price" */
  stripePrice: Array<StripePrice>;
  /** fetch aggregated fields from the table: "stripe_price" */
  stripePriceAggregate: StripePriceAggregate;
  /** fetch data from the table: "stripe_price" using primary key columns */
  stripePriceByPk?: Maybe<StripePrice>;
  /** fetch data from the table: "stripe_product" */
  stripeProduct: Array<StripeProduct>;
  /** fetch aggregated fields from the table: "stripe_product" */
  stripeProductAggregate: StripeProductAggregate;
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
  /** execute function "trade_avg_price_by_window" and query aggregates on result of table type "type_trade_avg_price_by_window" */
  tradeAvgPriceByWindowAggregate: TypeTradeAvgPriceByWindowAggregate;
  /** fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>;
  /** execute function "trade_sum_by_window" which returns "type_trade_sum_by_window" */
  tradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** execute function "trade_sum_by_window" and query aggregates on result of table type "type_trade_sum_by_window" */
  tradeSumByWindowAggregate: TypeTradeSumByWindowAggregate;
  /** fetch data from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindow: Array<TypeTradeAvgPriceByWindow>;
  /** fetch aggregated fields from the table: "type_trade_avg_price_by_window" */
  typeTradeAvgPriceByWindowAggregate: TypeTradeAvgPriceByWindowAggregate;
  /** fetch data from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindow: Array<TypeTradeSumByWindow>;
  /** fetch aggregated fields from the table: "type_trade_sum_by_window" */
  typeTradeSumByWindowAggregate: TypeTradeSumByWindowAggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_2fa" */
  user2fa: Array<User2fa>;
  /** fetch aggregated fields from the table: "user_2fa" */
  user2faAggregate: User2faAggregate;
  /** fetch data from the table: "user_2fa" using primary key columns */
  user2faByPk?: Maybe<User2fa>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  userDevice: Array<UserDevice>;
  /** fetch aggregated fields from the table: "user_device" */
  userDeviceAggregate: UserDeviceAggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  userDeviceByPk?: Maybe<UserDevice>;
  /** fetch data from the table: "user_email_verify" */
  userEmailVerify: Array<UserEmailVerify>;
  /** fetch aggregated fields from the table: "user_email_verify" */
  userEmailVerifyAggregate: UserEmailVerifyAggregate;
  /** fetch data from the table: "user_email_verify" using primary key columns */
  userEmailVerifyByPk?: Maybe<UserEmailVerify>;
  /** An array relationship */
  userExchangeKeys: Array<UserExchangeKeys>;
  /** An aggregate relationship */
  userExchangeKeysAggregate: UserExchangeKeysAggregate;
  /** fetch data from the table: "user_exchange_keys" using primary key columns */
  userExchangeKeysByPk?: Maybe<UserExchangeKeys>;
  /** fetch data from the table: "user_password_reset" */
  userPasswordReset: Array<UserPasswordReset>;
  /** fetch aggregated fields from the table: "user_password_reset" */
  userPasswordResetAggregate: UserPasswordResetAggregate;
  /** fetch data from the table: "user_password_reset" using primary key columns */
  userPasswordResetByPk?: Maybe<UserPasswordReset>;
};


export type Subscription_RootBalanceArgs = {
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


export type Subscription_RootBalanceAggregateArgs = {
  distinctOn?: InputMaybe<Array<BalanceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BalanceOrderBy>>;
  where?: InputMaybe<BalanceBoolExp>;
};


export type Subscription_RootBalanceByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootCronHistoryArgs = {
  distinctOn?: InputMaybe<Array<CronHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CronHistoryOrderBy>>;
  where?: InputMaybe<CronHistoryBoolExp>;
};


export type Subscription_RootCronHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CronHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CronHistoryOrderBy>>;
  where?: InputMaybe<CronHistoryBoolExp>;
};


export type Subscription_RootCronHistoryByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootCurrencyArgs = {
  distinctOn?: InputMaybe<Array<CurrencySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CurrencyOrderBy>>;
  where?: InputMaybe<CurrencyBoolExp>;
};


export type Subscription_RootCurrencyAggregateArgs = {
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


export type Subscription_RootExchangeAggregateArgs = {
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


export type Subscription_RootExchangePrimaryCurrencyAggregateArgs = {
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


export type Subscription_RootExchangeSecondaryCurrencyAggregateArgs = {
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


export type Subscription_RootMarketAggregateArgs = {
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


export type Subscription_RootMarketPriceAggregateArgs = {
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


export type Subscription_RootMarketPriceLatestAggregateArgs = {
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


export type Subscription_RootMarketTradingPairAggregateArgs = {
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


export type Subscription_RootStripeCustomerArgs = {
  distinctOn?: InputMaybe<Array<StripeCustomerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeCustomerOrderBy>>;
  where?: InputMaybe<StripeCustomerBoolExp>;
};


export type Subscription_RootStripeCustomerAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeCustomerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripeCustomerOrderBy>>;
  where?: InputMaybe<StripeCustomerBoolExp>;
};


export type Subscription_RootStripeCustomerByPkArgs = {
  userUid: Scalars['uuid'];
};


export type Subscription_RootStripePriceArgs = {
  distinctOn?: InputMaybe<Array<StripePriceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StripePriceOrderBy>>;
  where?: InputMaybe<StripePriceBoolExp>;
};


export type Subscription_RootStripePriceAggregateArgs = {
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


export type Subscription_RootStripeProductAggregateArgs = {
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


export type Subscription_RootTradeAvgPriceByWindowAggregateArgs = {
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


export type Subscription_RootTradeSumByWindowAggregateArgs = {
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


export type Subscription_RootTypeTradeAvgPriceByWindowAggregateArgs = {
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


export type Subscription_RootTypeTradeSumByWindowAggregateArgs = {
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


export type Subscription_RootUser2faAggregateArgs = {
  distinctOn?: InputMaybe<Array<User2faSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<User2faOrderBy>>;
  where?: InputMaybe<User2faBoolExp>;
};


export type Subscription_RootUser2faByPkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
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


export type Subscription_RootUserEmailVerifyArgs = {
  distinctOn?: InputMaybe<Array<UserEmailVerifySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserEmailVerifyOrderBy>>;
  where?: InputMaybe<UserEmailVerifyBoolExp>;
};


export type Subscription_RootUserEmailVerifyAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserEmailVerifySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserEmailVerifyOrderBy>>;
  where?: InputMaybe<UserEmailVerifyBoolExp>;
};


export type Subscription_RootUserEmailVerifyByPkArgs = {
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


export type Subscription_RootUserPasswordResetArgs = {
  distinctOn?: InputMaybe<Array<UserPasswordResetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserPasswordResetOrderBy>>;
  where?: InputMaybe<UserPasswordResetBoolExp>;
};


export type Subscription_RootUserPasswordResetAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserPasswordResetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserPasswordResetOrderBy>>;
  where?: InputMaybe<UserPasswordResetBoolExp>;
};


export type Subscription_RootUserPasswordResetByPkArgs = {
  uid: Scalars['uuid'];
};

export type CronHistoryFragment = { __typename?: 'CronHistory', uid: string, taskId: string, createdAt: string, updatedAt: string, completedAt?: string | null, state: string, input: Record<string, unknown>, output?: Record<string, unknown> | null };

export type DcaOrderHistoryFragment = { __typename?: 'DcaOrderHistory', createdAt: string, createdOrder: boolean, marketPrice: number, marketOffset: number, value: number, availableBalance: number };

export type StripeSubscriptionFragment = { __typename?: 'StripeSubscription', id: string, status: string, cancelAt?: string | null, canceledAt?: string | null, cancelAtPeriodEnd: boolean, currentPeriodStart: string, currentPeriodEnd: string, stripePrice: { __typename?: 'StripePrice', unitAmount?: number | null, currency: string, recurringInterval?: string | null, recurringIntervalCount?: number | null, stripeProduct: { __typename?: 'StripeProduct', name: string } } };

export type CreateAdminAuthTokenMutationVariables = Exact<{
  userUid: Scalars['uuid'];
}>;


export type CreateAdminAuthTokenMutation = { __typename?: 'mutation_root', actionCreateAdminAuthToken?: { __typename?: 'CreateAdminAuthTokenOutput', userUid: string, authToken: string, expiresAt: string } | null };

export type CreateAuthTokenMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  deviceID: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
  token2FA?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
}>;


export type CreateAuthTokenMutation = { __typename?: 'mutation_root', actionCreateAuthToken?: { __typename?: 'CreateAuthTokenOutput', userUid: string, authToken: string, expiresAt: string } | null };

export type CreateDcaOrderMutationVariables = Exact<{
  userExchangeKeysUid: Scalars['uuid'];
  marketUid: Scalars['uuid'];
  startAt: Scalars['timestamp'];
  marketOffset: Scalars['Float'];
  dailyAverage: Scalars['Float'];
  intervalMs: Scalars['Int'];
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
  minValue?: InputMaybe<Scalars['Float']>;
  maxValue?: InputMaybe<Scalars['Float']>;
}>;


export type CreateDcaOrderMutation = { __typename?: 'mutation_root', actionCreateDcaOrder?: { __typename?: 'CreateDcaOrderResult', dcaOrder?: { __typename?: 'DcaOrder', uid: string, userExchangeKeysUid: string, enabledAt?: string | null, marketUid: string, startAt: string, marketOffset: number, dailyAverage: number, intervalMs: number, minValue?: number | null, maxValue?: number | null, exchange: { __typename?: 'Exchange', uid: string, id: string, name: string }, primaryCurrency: { __typename?: 'Currency', symbol: string }, secondaryCurrency: { __typename?: 'Currency', symbol: string } } | null } | null };

export type CreateStripeSubscriptionMutationVariables = Exact<{
  priceId: Scalars['String'];
}>;


export type CreateStripeSubscriptionMutation = { __typename?: 'mutation_root', actionCreateStripeSubscription: { __typename?: 'CreateStripeSubscription', subscriptionId: string } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', actionCreateUser?: { __typename?: 'CreateUserOutput', userUid: string } | null };

export type CreateUserExchangeKeysMutationVariables = Exact<{
  description: Scalars['String'];
  exchangeUid: Scalars['uuid'];
  keys: Scalars['jsonb'];
}>;


export type CreateUserExchangeKeysMutation = { __typename?: 'mutation_root', actionCreateUserExchangeKeys?: { __typename?: 'CreateUserExchangeKeysOutput', userExchangeKeys?: { __typename?: 'UserExchangeKeys', uid: string, description: string, invalidatedAt?: string | null, exchange: { __typename?: 'Exchange', uid: string }, dcaOrdersAggregate: { __typename?: 'DcaOrderAggregate', aggregate?: { __typename?: 'DcaOrderAggregateFields', count: number } | null } } | null } | null };

export type DeleteUserDeviceMutationVariables = Exact<{
  userDeviceUid: Scalars['uuid'];
}>;


export type DeleteUserDeviceMutation = { __typename?: 'mutation_root', deleteUserDeviceByPk?: { __typename?: 'UserDevice', uid: string } | null };

export type DeleteDcaOrderMutationVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
}>;


export type DeleteDcaOrderMutation = { __typename?: 'mutation_root', deleteDcaOrderByPk?: { __typename?: 'DcaOrder', uid: string } | null };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'mutation_root', actionDeleteUser?: { __typename?: 'DeleteUserOutput', userUid: string } | null };

export type DeleteUser2FaMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type DeleteUser2FaMutation = { __typename?: 'mutation_root', actionDeleteUser2fa?: { __typename?: 'DeleteUser2FAOutput', user?: { __typename?: 'User', uid: string, user2fa?: { __typename?: 'User2fa', createdAt: string, name: string, uid: string } | null } | null } | null };

export type DeleteUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUid: Scalars['uuid'];
}>;


export type DeleteUserExchangeKeysMutation = { __typename?: 'mutation_root', deleteUserExchangeKeysByPk?: { __typename?: 'UserExchangeKeys', uid: string } | null };

export type EnableUser2FaMutationVariables = Exact<{
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
}>;


export type EnableUser2FaMutation = { __typename?: 'mutation_root', actionEnableUser2fa?: { __typename?: 'EnableUser2FAOutput', user?: { __typename?: 'User', uid: string, user2fa?: { __typename?: 'User2fa', createdAt: string, name: string, uid: string } | null } | null } | null };

export type UseResetUserPasswordMutationVariables = Exact<{
  passwordResetSecret: Scalars['String'];
  newPassword: Scalars['String'];
  deviceID: Scalars['String'];
  deviceName: Scalars['String'];
  deviceTrusted: Scalars['Boolean'];
  token2FA?: InputMaybe<Scalars['String']>;
}>;


export type UseResetUserPasswordMutation = { __typename?: 'mutation_root', actionResetUserPassword: { __typename?: 'ResetUserPasswordOutput', userUid: string, authToken: string, expiresAt: string } };

export type SendUserEmailVerifyMutationVariables = Exact<{ [key: string]: never; }>;


export type SendUserEmailVerifyMutation = { __typename?: 'mutation_root', actionSendUserEmailVerify: { __typename?: 'SendUserEmailVerifyOutput', userUid: string } };

export type SendUserPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendUserPasswordResetMutation = { __typename?: 'mutation_root', actionSendUserPasswordReset: { __typename?: 'SendUserPasswordResetOutput', email: string } };

export type UpdateDcaOrderMutationVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
  values: DcaOrderSetInput;
}>;


export type UpdateDcaOrderMutation = { __typename?: 'mutation_root', updateDcaOrderByPk?: { __typename?: 'DcaOrder', uid: string, enabledAt?: string | null, dailyAverage: number, intervalMs: number, marketOffset: number, marketUid: string, maxValue?: number | null, minValue?: number | null, startAt: string, updatedAt: string, userExchangeKeysUid: string } | null };

export type UpdateDcaOrderEnabledMutationVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
  enabled: Scalars['Boolean'];
}>;


export type UpdateDcaOrderEnabledMutation = { __typename?: 'mutation_root', actionUpdateDcaOrder: { __typename?: 'UpdateDcaOrderOutput', dcaOrder?: { __typename?: 'DcaOrder', uid: string, enabledAt?: string | null } | null } };

export type UpdateStripeSubscriptionMutationVariables = Exact<{
  subscriptionID: Scalars['String'];
  cancelAtPeriodEnd: Scalars['Boolean'];
}>;


export type UpdateStripeSubscriptionMutation = { __typename?: 'mutation_root', actionUpdateStripeSubscription: { __typename?: 'UpdateSubscriptionOutput', stripeSubscription?: { __typename?: 'StripeSubscription', id: string, status: string, cancelAt?: string | null, canceledAt?: string | null, cancelAtPeriodEnd: boolean } | null } };

export type UpdateUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', actionUpdateUser: { __typename?: 'UpdateUserOutput', userUid: string } };

export type UpdateUserDeviceMutationVariables = Exact<{
  userDeviceUid: Scalars['uuid'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserDeviceMutation = { __typename?: 'mutation_root', updateUserDeviceByPk?: { __typename?: 'UserDevice', uid: string, name: string } | null };

export type UpdateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUid: Scalars['uuid'];
  description?: InputMaybe<Scalars['String']>;
  keys?: InputMaybe<Scalars['jsonb']>;
}>;


export type UpdateUserExchangeKeysMutation = { __typename?: 'mutation_root', actionUpdateUserExchangeKeys?: { __typename?: 'UpdateUserExchangeKeysOutput', userExchangeKeys?: { __typename?: 'UserExchangeKeys', uid: string, description: string, invalidatedAt?: string | null, exchange: { __typename?: 'Exchange', uid: string }, dcaOrdersAggregate: { __typename?: 'DcaOrderAggregate', aggregate?: { __typename?: 'DcaOrderAggregateFields', count: number } | null } } | null } | null };

export type ValidateUserExchangeKeysMutationVariables = Exact<{
  userExchangeKeysUid: Scalars['uuid'];
}>;


export type ValidateUserExchangeKeysMutation = { __typename?: 'mutation_root', actionValidateUserExchangeKeys?: { __typename?: 'ValidateUserExchangeKeysOutput', isValid: boolean, validationMessage?: string | null } | null };

export type ValidateUserExchangeKeysLiveMutationVariables = Exact<{
  exchangeUid: Scalars['uuid'];
  keys: Scalars['jsonb'];
}>;


export type ValidateUserExchangeKeysLiveMutation = { __typename?: 'mutation_root', actionValidateUserExchangeKeysLive?: { __typename?: 'ValidateUserExchangeKeysLiveOutput', isValid: boolean, validationMessage?: string | null } | null };

export type ValidateUserPasswordResetMutationVariables = Exact<{
  passwordResetSecret: Scalars['String'];
}>;


export type ValidateUserPasswordResetMutation = { __typename?: 'mutation_root', actionValidateUserPasswordReset: { __typename?: 'ValidatUserPasswordResetOutput', isValid: boolean, email?: string | null } };

export type VerifyUserEmailMutationVariables = Exact<{
  emailVerifySecret: Scalars['String'];
}>;


export type VerifyUserEmailMutation = { __typename?: 'mutation_root', actionVerifyUserEmail: { __typename?: 'VerifyUserEmailOutput', email: string } };

export type GetCronHistoryListQueryVariables = Exact<{
  where?: InputMaybe<CronHistoryBoolExp>;
}>;


export type GetCronHistoryListQuery = { __typename?: 'query_root', cronHistory: Array<{ __typename?: 'CronHistory', uid: string, taskId: string, createdAt: string, state: string, output?: Record<string, unknown> | null }> };

export type GetCronHistoryTaskIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCronHistoryTaskIdsQuery = { __typename?: 'query_root', cronHistoryAggregate: { __typename?: 'CronHistoryAggregate', nodes: Array<{ __typename?: 'CronHistory', taskId: string }> } };

export type GetAdminExchangeListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminExchangeListQuery = { __typename?: 'query_root', exchange: Array<{ __typename?: 'Exchange', createdAt: string, updatedAt: string, uid: string, id: string, name: string, url: string, primaryCurrencies: Array<{ __typename?: 'ExchangePrimaryCurrency', symbol: string }>, secondaryCurrencies: Array<{ __typename?: 'ExchangeSecondaryCurrency', symbol: string }> }> };

export type GetCheckoutPageQueryVariables = Exact<{
  subscriptionID: Scalars['String'];
}>;


export type GetCheckoutPageQuery = { __typename?: 'query_root', actionQueryStripeConfig: { __typename?: 'QueryStripeConfigOutput', publishableKey: string }, actionQueryLiveStripeSubscription: { __typename?: 'QueryLiveStripeSubscriptionOutput', id: string, clientSecret: string }, stripeSubscriptionByPk?: { __typename?: 'StripeSubscription', id: string, status: string, cancelAt?: string | null, canceledAt?: string | null, cancelAtPeriodEnd: boolean, currentPeriodStart: string, currentPeriodEnd: string, stripePrice: { __typename?: 'StripePrice', unitAmount?: number | null, currency: string, recurringInterval?: string | null, recurringIntervalCount?: number | null, stripeProduct: { __typename?: 'StripeProduct', name: string } } } | null };

export type GetCronHistoryQueryVariables = Exact<{
  cronHistoryUid: Scalars['uuid'];
}>;


export type GetCronHistoryQuery = { __typename?: 'query_root', cronHistoryByPk?: { __typename?: 'CronHistory', uid: string, taskId: string, createdAt: string, updatedAt: string, completedAt?: string | null, state: string, input: Record<string, unknown>, output?: Record<string, unknown> | null } | null };

export type GetDcaOrderFormCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderFormCreateQuery = { __typename?: 'query_root', market: Array<{ __typename?: 'Market', uid: string, name: string, marketPrices: Array<{ __typename?: 'MarketPrice', assetSymbol: string, currency: string }> }>, userExchangeKeys: Array<{ __typename?: 'UserExchangeKeys', uid: string, description: string, exchangeUid: string }>, exchange: Array<{ __typename?: 'Exchange', uid: string, name: string, primaryCurrencies: Array<{ __typename?: 'ExchangePrimaryCurrency', symbol: string, currency: { __typename?: 'Currency', name: string } }>, secondaryCurrencies: Array<{ __typename?: 'ExchangeSecondaryCurrency', symbol: string, currency: { __typename?: 'Currency', name: string } }> }> };

export type GetDcaOrderFormEditQueryVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
}>;


export type GetDcaOrderFormEditQuery = { __typename?: 'query_root', market: Array<{ __typename?: 'Market', uid: string, name: string, marketPrices: Array<{ __typename?: 'MarketPrice', assetSymbol: string, currency: string }> }>, userExchangeKeys: Array<{ __typename?: 'UserExchangeKeys', uid: string, exchangeUid: string, description: string }>, dcaOrderByPk?: { __typename?: 'DcaOrder', uid: string, userExchangeKeysUid: string, exchangeUid: string, marketUid: string, startAt: string, marketOffset: number, dailyAverage: number, intervalMs: number, minValue?: number | null, maxValue?: number | null, primaryCurrency: { __typename?: 'Currency', symbol: string, name: string }, secondaryCurrency: { __typename?: 'Currency', symbol: string, name: string }, exchange: { __typename?: 'Exchange', uid: string, name: string } } | null };

export type GetDcaOrderHistoryListQueryVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
  gt: Scalars['timestamptz'];
  lte: Scalars['timestamptz'];
}>;


export type GetDcaOrderHistoryListQuery = { __typename?: 'query_root', dcaOrderByPk?: { __typename?: 'DcaOrder', uid: string, exchange: { __typename?: 'Exchange', uid: string, name: string }, primaryCurrency: { __typename?: 'Currency', symbol: string }, secondaryCurrency: { __typename?: 'Currency', symbol: string } } | null, dcaOrderHistory: Array<{ __typename?: 'DcaOrderHistory', uid: string, createdAt: string, marketPrice: number, marketOffset: number, targetValue: number, availableBalance: number, createdOrder: boolean, description: string, value: number }> };

export type GetDcaOrderHistoryPriceChartQueryVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
  gt: Scalars['timestamptz'];
  lte: Scalars['timestamptz'];
}>;


export type GetDcaOrderHistoryPriceChartQuery = { __typename?: 'query_root', dcaOrderByPk?: { __typename?: 'DcaOrder', uid: string, exchangeMarketTradingPair?: Array<{ __typename?: 'MarketTradingPair', marketUid: string, primaryCurrencySymbol: string, secondaryCurrencySymbol: string, marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }> | null, marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> } | null };

export type GetDcaOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDcaOrderListQuery = { __typename?: 'query_root', dcaOrder: Array<{ __typename?: 'DcaOrder', uid: string, enabledAt?: string | null, dailyAverage: number, startAt: string, marketOffset: number, intervalMs: number, minValue?: number | null, maxValue?: number | null, exchange: { __typename?: 'Exchange', uid: string, id: string, name: string }, primaryCurrency: { __typename?: 'Currency', symbol: string }, secondaryCurrency: { __typename?: 'Currency', symbol: string } }> };

export type GetDcaOrderDeleteQueryVariables = Exact<{
  dcaOrderUid: Scalars['uuid'];
}>;


export type GetDcaOrderDeleteQuery = { __typename?: 'query_root', dcaOrderByPk?: { __typename?: 'DcaOrder', uid: string, enabledAt?: string | null, dailyAverage: number, startAt: string, marketOffset: number, minValue?: number | null, maxValue?: number | null, exchange: { __typename?: 'Exchange', uid: string, name: string }, primaryCurrency: { __typename?: 'Currency', symbol: string }, secondaryCurrency: { __typename?: 'Currency', symbol: string } } | null };

export type GetEmailVerifiedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmailVerifiedQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', uid: string, emailVerified: boolean }> };

export type GetExchangeKeysFormCreateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExchangeKeysFormCreateQuery = { __typename?: 'query_root', exchange: Array<{ __typename?: 'Exchange', uid: string, id: string, name: string }> };

export type GetExchangeListQueryVariables = Exact<{
  currentTimestamp?: InputMaybe<Scalars['timestamptz']>;
  historicTimestamp?: InputMaybe<Scalars['timestamptz']>;
}>;


export type GetExchangeListQuery = { __typename?: 'query_root', userExchangeKeys: Array<{ __typename?: 'UserExchangeKeys', uid: string, exchange: { __typename?: 'Exchange', uid: string, name: string, url: string }, balanceLatest?: Array<{ __typename?: 'Balance', availableBalance: number, totalBalance: number, currencySymbol: string, totalBalanceNzd?: number | null }> | null, balanceHistoric?: Array<{ __typename?: 'Balance', currencySymbol: string, totalBalanceNzd?: number | null }> | null }> };

export type GetMarketPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String'];
  secondaryCurrency: Scalars['String'];
}>;


export type GetMarketPriceQuery = { __typename?: 'query_root', binanceUs: Array<{ __typename?: 'Market', marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }>, kiwiCoin: Array<{ __typename?: 'Market', marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }>, dasset: Array<{ __typename?: 'Market', marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }>, kraken: Array<{ __typename?: 'Market', marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }>, independentReserveAud: Array<{ __typename?: 'Market', marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }>, independentReserveNzd: Array<{ __typename?: 'Market', marketPrices: Array<{ __typename?: 'MarketPrice', price: number, timestamp: string }> }> };

export type GetOpenOrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenOrderListQuery = { __typename?: 'query_root', order: Array<{ __typename?: 'Order', uid: string, openedAt: string, value: number, volume: number, price: number, primaryCurrency: string, secondaryCurrency: string, type: string, exchange: { __typename?: 'Exchange', uid: string, name: string }, dcaOrderHistories: Array<{ __typename?: 'DcaOrderHistory', uid: string, dcaOrderUid: string }> }> };

export type GetPricesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPricesQuery = { __typename?: 'query_root', stripeProduct: Array<{ __typename?: 'StripeProduct', id: string, active: boolean, name: string, stripePrices: Array<{ __typename?: 'StripePrice', id: string, type: string, recurringInterval?: string | null, recurringIntervalCount?: number | null, unitAmount?: number | null, currency: string }> }> };

export type GetSubscriptionStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionStatusQuery = { __typename?: 'query_root', activeStripeSubscription: Array<{ __typename?: 'StripeSubscription', id: string, status: string, cancelAt?: string | null, canceledAt?: string | null, cancelAtPeriodEnd: boolean, currentPeriodStart: string, currentPeriodEnd: string, stripePrice: { __typename?: 'StripePrice', unitAmount?: number | null, currency: string, recurringInterval?: string | null, recurringIntervalCount?: number | null, stripeProduct: { __typename?: 'StripeProduct', name: string } } }>, incompleteStripeSubscription: Array<{ __typename?: 'StripeSubscription', id: string, status: string, cancelAt?: string | null, canceledAt?: string | null, cancelAtPeriodEnd: boolean, currentPeriodStart: string, currentPeriodEnd: string, stripePrice: { __typename?: 'StripePrice', unitAmount?: number | null, currency: string, recurringInterval?: string | null, recurringIntervalCount?: number | null, stripeProduct: { __typename?: 'StripeProduct', name: string } } }>, stripeSubscriptionAggregate: { __typename?: 'StripeSubscriptionAggregate', aggregate?: { __typename?: 'StripeSubscriptionAggregateFields', count: number } | null } };

export type GetSubscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionsQuery = { __typename?: 'query_root', stripeSubscription: Array<{ __typename?: 'StripeSubscription', id: string, status: string, currentPeriodStart: string, currentPeriodEnd: string, cancelAt?: string | null, canceledAt?: string | null, cancelAtPeriodEnd: boolean, stripePrice: { __typename?: 'StripePrice', recurringInterval?: string | null, recurringIntervalCount?: number | null, unitAmount?: number | null, currency: string, stripeProduct: { __typename?: 'StripeProduct', name: string } } }> };

export type GetTradeAvgPriceQueryVariables = Exact<{
  primaryCurrency: Scalars['String'];
}>;


export type GetTradeAvgPriceQuery = { __typename?: 'query_root', tradeAvgPriceByWindow: Array<{ __typename?: 'TypeTradeAvgPriceByWindow', timestamp?: string | null, price?: number | null, avgPrice?: number | null }> };

export type GetTradeCumulativeSumByDayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeCumulativeSumByDayQuery = { __typename?: 'query_root', tradeAvgPriceByWindow: Array<{ __typename?: 'TypeTradeAvgPriceByWindow', timestamp?: string | null, primaryCurrency?: string | null, totalValue?: number | null }> };

export type GetTradeCumulativeVolumeByDayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeCumulativeVolumeByDayQuery = { __typename?: 'query_root', tradeAvgPriceByWindow: Array<{ __typename?: 'TypeTradeAvgPriceByWindow', timestamp?: string | null, primaryCurrency?: string | null, volume?: number | null }> };

export type GetTradeListQueryVariables = Exact<{
  filters: TradeBoolExp;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetTradeListQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', uid: string, timezone: string }>, tradeAggregate: { __typename?: 'TradeAggregate', aggregate?: { __typename?: 'TradeAggregateFields', count: number, sum?: { __typename?: 'TradeSumFields', value?: number | null, volume?: number | null, fee?: number | null } | null, min?: { __typename?: 'TradeMinFields', timestamp?: string | null } | null, max?: { __typename?: 'TradeMaxFields', timestamp?: string | null } | null } | null }, trade: Array<{ __typename?: 'Trade', uid: string, timestamp: string, value: number, volume: number, primaryCurrency: string, secondaryCurrency: string, type: string, price?: number | null, totalValue?: number | null, fee?: number | null, exchange: { __typename?: 'Exchange', uid: string, id: string } }> };

export type GetTradeSumValueByWeekQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTradeSumValueByWeekQuery = { __typename?: 'query_root', tradeSumByWindow: Array<{ __typename?: 'TypeTradeSumByWindow', timestamp?: string | null, primaryCurrency?: string | null, totalValue?: number | null }> };

export type GetUser2FaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUser2FaQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', uid: string, user2fa?: { __typename?: 'User2fa', createdAt: string, name: string, uid: string } | null }> };

export type GetUserDeviceByUidQueryVariables = Exact<{
  userDeviceUid: Scalars['uuid'];
}>;


export type GetUserDeviceByUidQuery = { __typename?: 'query_root', userDeviceByPk?: { __typename?: 'UserDevice', uid: string, name: string } | null };

export type GetUserDeviceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDeviceListQuery = { __typename?: 'query_root', userDevice: Array<{ __typename?: 'UserDevice', uid: string, name: string, createdAt: string, accessedAt: string }> };

export type GetUserExchangeKeysByUidQueryVariables = Exact<{
  userExchangeKeysUid: Scalars['uuid'];
}>;


export type GetUserExchangeKeysByUidQuery = { __typename?: 'query_root', userExchangeKeysByPk?: { __typename?: 'UserExchangeKeys', uid: string, description: string } | null };

export type GetUserExchangeKeysFormEditQueryVariables = Exact<{
  userExchangeKeysUid: Scalars['uuid'];
}>;


export type GetUserExchangeKeysFormEditQuery = { __typename?: 'query_root', userExchangeKeysByPk?: { __typename?: 'UserExchangeKeys', uid: string, description: string, exchange: { __typename?: 'Exchange', uid: string, id: string, name: string } } | null };

export type GetUserExchangeKeysListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserExchangeKeysListQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', timezone: string }>, userExchangeKeys: Array<{ __typename?: 'UserExchangeKeys', uid: string, description: string, updatedAt: string, exchange: { __typename?: 'Exchange', uid: string, name: string }, dcaOrdersAggregate: { __typename?: 'DcaOrderAggregate', aggregate?: { __typename?: 'DcaOrderAggregateFields', count: number } | null } }> };

export type GetUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserListQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', uid: string, emailVerified: boolean, createdAt: string }> };

export type SetupUser2FaQueryVariables = Exact<{ [key: string]: never; }>;


export type SetupUser2FaQuery = { __typename?: 'query_root', actionSetupUser2fa?: { __typename?: 'SetupUser2FAOutput', qrcode: string, secret: string } | null };

export const CronHistoryFragmentDoc = gql`
    fragment CronHistory on CronHistory {
  uid
  taskId
  createdAt
  updatedAt
  completedAt
  state
  input
  output
}
    `;
export const DcaOrderHistoryFragmentDoc = gql`
    fragment DcaOrderHistory on DcaOrderHistory {
  createdAt
  createdOrder
  marketPrice
  marketOffset
  value
  availableBalance
}
    `;
export const StripeSubscriptionFragmentDoc = gql`
    fragment StripeSubscription on StripeSubscription {
  id
  status
  cancelAt
  canceledAt
  cancelAtPeriodEnd
  currentPeriodStart
  currentPeriodEnd
  stripePrice {
    unitAmount
    currency
    recurringInterval
    recurringIntervalCount
    stripeProduct {
      name
    }
  }
}
    `;
export const CreateAdminAuthTokenDocument = gql`
    mutation createAdminAuthToken($userUid: uuid!) {
  actionCreateAdminAuthToken(userUid: $userUid) {
    userUid
    authToken
    expiresAt
  }
}
    `;
export const CreateAuthTokenDocument = gql`
    mutation createAuthToken($email: String!, $password: String!, $deviceID: String!, $deviceName: String!, $deviceTrusted: Boolean!, $token2FA: String, $role: String!) {
  actionCreateAuthToken(
    email: $email
    password: $password
    deviceId: $deviceID
    deviceName: $deviceName
    deviceTrusted: $deviceTrusted
    token2fa: $token2FA
    role: $role
  ) {
    userUid
    authToken
    expiresAt
  }
}
    `;
export const CreateDcaOrderDocument = gql`
    mutation createDcaOrder($userExchangeKeysUid: uuid!, $marketUid: uuid!, $startAt: timestamp!, $marketOffset: Float!, $dailyAverage: Float!, $intervalMs: Int!, $primaryCurrency: String!, $secondaryCurrency: String!, $minValue: Float, $maxValue: Float) {
  actionCreateDcaOrder(
    userExchangeKeysUid: $userExchangeKeysUid
    marketUid: $marketUid
    startAt: $startAt
    marketOffset: $marketOffset
    dailyAverage: $dailyAverage
    intervalMs: $intervalMs
    primaryCurrency: $primaryCurrency
    secondaryCurrency: $secondaryCurrency
    minValue: $minValue
    maxValue: $maxValue
  ) {
    dcaOrder {
      uid
      exchange {
        uid
        id
        name
      }
      userExchangeKeysUid
      enabledAt
      marketUid
      startAt
      marketOffset
      dailyAverage
      intervalMs
      primaryCurrency {
        symbol
      }
      secondaryCurrency {
        symbol
      }
      minValue
      maxValue
    }
  }
}
    `;
export const CreateStripeSubscriptionDocument = gql`
    mutation createStripeSubscription($priceId: String!) {
  actionCreateStripeSubscription(priceId: $priceId) {
    subscriptionId
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($email: String!, $password: String!) {
  actionCreateUser(email: $email, password: $password) {
    userUid
  }
}
    `;
export const CreateUserExchangeKeysDocument = gql`
    mutation createUserExchangeKeys($description: String!, $exchangeUid: uuid!, $keys: jsonb!) {
  actionCreateUserExchangeKeys(
    description: $description
    exchangeUid: $exchangeUid
    keys: $keys
  ) {
    userExchangeKeys {
      uid
      description
      exchange {
        uid
      }
      invalidatedAt
      dcaOrdersAggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export const DeleteUserDeviceDocument = gql`
    mutation deleteUserDevice($userDeviceUid: uuid!) {
  deleteUserDeviceByPk(uid: $userDeviceUid) {
    uid
  }
}
    `;
export const DeleteDcaOrderDocument = gql`
    mutation deleteDcaOrder($dcaOrderUid: uuid!) {
  deleteDcaOrderByPk(uid: $dcaOrderUid) {
    uid
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation deleteUser {
  actionDeleteUser {
    userUid
  }
}
    `;
export const DeleteUser2FaDocument = gql`
    mutation deleteUser2FA($token: String!) {
  actionDeleteUser2fa(token: $token) {
    user {
      uid
      user2fa {
        createdAt
        name
        uid
      }
    }
  }
}
    `;
export const DeleteUserExchangeKeysDocument = gql`
    mutation deleteUserExchangeKeys($userExchangeKeysUid: uuid!) {
  deleteUserExchangeKeysByPk(uid: $userExchangeKeysUid) {
    uid
  }
}
    `;
export const EnableUser2FaDocument = gql`
    mutation enableUser2FA($name: String!, $secret: String!, $token: String!) {
  actionEnableUser2fa(name: $name, secret: $secret, token: $token) {
    user {
      uid
      user2fa {
        createdAt
        name
        uid
      }
    }
  }
}
    `;
export const UseResetUserPasswordDocument = gql`
    mutation useResetUserPassword($passwordResetSecret: String!, $newPassword: String!, $deviceID: String!, $deviceName: String!, $deviceTrusted: Boolean!, $token2FA: String) {
  actionResetUserPassword(
    passwordResetSecret: $passwordResetSecret
    newPassword: $newPassword
    deviceId: $deviceID
    deviceName: $deviceName
    deviceTrusted: $deviceTrusted
    token2fa: $token2FA
  ) {
    userUid
    authToken
    expiresAt
  }
}
    `;
export const SendUserEmailVerifyDocument = gql`
    mutation sendUserEmailVerify {
  actionSendUserEmailVerify {
    userUid
  }
}
    `;
export const SendUserPasswordResetDocument = gql`
    mutation sendUserPasswordReset($email: String!) {
  actionSendUserPasswordReset(email: $email) {
    email
  }
}
    `;
export const UpdateDcaOrderDocument = gql`
    mutation updateDcaOrder($dcaOrderUid: uuid!, $values: DcaOrderSetInput!) {
  updateDcaOrderByPk(pk_columns: {uid: $dcaOrderUid}, _set: $values) {
    uid
    enabledAt
    dailyAverage
    enabledAt
    intervalMs
    marketOffset
    marketUid
    maxValue
    minValue
    startAt
    updatedAt
    userExchangeKeysUid
  }
}
    `;
export const UpdateDcaOrderEnabledDocument = gql`
    mutation updateDcaOrderEnabled($dcaOrderUid: uuid!, $enabled: Boolean!) {
  actionUpdateDcaOrder(dcaOrderUid: $dcaOrderUid, enabled: $enabled) {
    dcaOrder {
      uid
      enabledAt
    }
  }
}
    `;
export const UpdateStripeSubscriptionDocument = gql`
    mutation updateStripeSubscription($subscriptionID: String!, $cancelAtPeriodEnd: Boolean!) {
  actionUpdateStripeSubscription(
    subscriptionId: $subscriptionID
    cancelAtPeriodEnd: $cancelAtPeriodEnd
  ) {
    stripeSubscription {
      id
      status
      cancelAt
      canceledAt
      cancelAtPeriodEnd
    }
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($email: String, $password: String) {
  actionUpdateUser(email: $email, password: $password) {
    userUid
  }
}
    `;
export const UpdateUserDeviceDocument = gql`
    mutation updateUserDevice($userDeviceUid: uuid!, $name: String) {
  updateUserDeviceByPk(pk_columns: {uid: $userDeviceUid}, _set: {name: $name}) {
    uid
    name
  }
}
    `;
export const UpdateUserExchangeKeysDocument = gql`
    mutation updateUserExchangeKeys($userExchangeKeysUid: uuid!, $description: String, $keys: jsonb) {
  actionUpdateUserExchangeKeys(
    userExchangeKeysUid: $userExchangeKeysUid
    description: $description
    keys: $keys
  ) {
    userExchangeKeys {
      uid
      description
      exchange {
        uid
      }
      invalidatedAt
      dcaOrdersAggregate {
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export const ValidateUserExchangeKeysDocument = gql`
    mutation validateUserExchangeKeys($userExchangeKeysUid: uuid!) {
  actionValidateUserExchangeKeys(userExchangeKeysUid: $userExchangeKeysUid) {
    isValid
    validationMessage
  }
}
    `;
export const ValidateUserExchangeKeysLiveDocument = gql`
    mutation validateUserExchangeKeysLive($exchangeUid: uuid!, $keys: jsonb!) {
  actionValidateUserExchangeKeysLive(exchangeUid: $exchangeUid, keys: $keys) {
    isValid
    validationMessage
  }
}
    `;
export const ValidateUserPasswordResetDocument = gql`
    mutation validateUserPasswordReset($passwordResetSecret: String!) {
  actionValidateUserPasswordReset(passwordResetSecret: $passwordResetSecret) {
    isValid
    email
  }
}
    `;
export const VerifyUserEmailDocument = gql`
    mutation verifyUserEmail($emailVerifySecret: String!) {
  actionVerifyUserEmail(emailVerifySecret: $emailVerifySecret) {
    email
  }
}
    `;
export const GetCronHistoryListDocument = gql`
    query getCronHistoryList($where: CronHistoryBoolExp) {
  cronHistory(limit: 10, orderBy: {createdAt: DESC}, where: $where) {
    uid
    taskId
    createdAt
    state
    output
  }
}
    `;
export const GetCronHistoryTaskIdsDocument = gql`
    query getCronHistoryTaskIds {
  cronHistoryAggregate(distinctOn: taskId) {
    nodes {
      taskId
    }
  }
}
    `;
export const GetAdminExchangeListDocument = gql`
    query getAdminExchangeList {
  exchange {
    createdAt
    updatedAt
    uid
    id
    name
    url
    primaryCurrencies {
      symbol
    }
    secondaryCurrencies {
      symbol
    }
  }
}
    `;
export const GetCheckoutPageDocument = gql`
    query getCheckoutPage($subscriptionID: String!) {
  actionQueryStripeConfig {
    publishableKey
  }
  actionQueryLiveStripeSubscription(subscriptionId: $subscriptionID) {
    id
    clientSecret
  }
  stripeSubscriptionByPk(id: $subscriptionID) {
    ...StripeSubscription
  }
}
    ${StripeSubscriptionFragmentDoc}`;
export const GetCronHistoryDocument = gql`
    query getCronHistory($cronHistoryUid: uuid!) {
  cronHistoryByPk(uid: $cronHistoryUid) {
    ...CronHistory
  }
}
    ${CronHistoryFragmentDoc}`;
export const GetDcaOrderFormCreateDocument = gql`
    query getDcaOrderFormCreate {
  market {
    uid
    name
    marketPrices(
      distinctOn: [assetSymbol, currency]
      where: {timestamp: {_gt: "2021-12-09T12:00:00"}}
    ) {
      assetSymbol
      currency
    }
  }
  userExchangeKeys {
    uid
    description
    exchangeUid
  }
  exchange {
    uid
    name
    primaryCurrencies {
      symbol
      currency {
        name
      }
    }
    secondaryCurrencies {
      symbol
      currency {
        name
      }
    }
  }
}
    `;
export const GetDcaOrderFormEditDocument = gql`
    query getDcaOrderFormEdit($dcaOrderUid: uuid!) {
  market {
    uid
    name
    marketPrices(
      distinctOn: [assetSymbol, currency]
      where: {timestamp: {_gt: "2022-07-01T12:00:00"}}
    ) {
      assetSymbol
      currency
    }
  }
  userExchangeKeys {
    uid
    exchangeUid
    description
  }
  dcaOrderByPk(uid: $dcaOrderUid) {
    uid
    userExchangeKeysUid
    exchangeUid
    marketUid
    startAt
    marketOffset
    dailyAverage
    intervalMs
    primaryCurrency {
      symbol
      name
    }
    secondaryCurrency {
      symbol
      name
    }
    minValue
    maxValue
    exchange {
      uid
      name
    }
  }
}
    `;
export const GetDcaOrderHistoryListDocument = gql`
    query getDcaOrderHistoryList($dcaOrderUid: uuid!, $gt: timestamptz!, $lte: timestamptz!) {
  dcaOrderByPk(uid: $dcaOrderUid) {
    uid
    exchange {
      uid
      name
    }
    primaryCurrency {
      symbol
    }
    secondaryCurrency {
      symbol
    }
  }
  dcaOrderHistory(
    where: {dcaOrderUid: {_eq: $dcaOrderUid}, createdAt: {_lte: $lte, _gt: $gt}}
    orderBy: {createdAt: DESC}
  ) {
    ...DcaOrderHistory
    uid
    createdAt
    marketPrice
    marketOffset
    targetValue
    availableBalance
    createdOrder
    description
    value
  }
}
    ${DcaOrderHistoryFragmentDoc}`;
export const GetDcaOrderHistoryPriceChartDocument = gql`
    query getDcaOrderHistoryPriceChart($dcaOrderUid: uuid!, $gt: timestamptz!, $lte: timestamptz!) {
  dcaOrderByPk(uid: $dcaOrderUid) {
    uid
    exchangeMarketTradingPair {
      marketUid
      primaryCurrencySymbol
      secondaryCurrencySymbol
      marketPrices(
        where: {timestamp: {_lte: $lte, _gt: $gt}}
        orderBy: {timestamp: DESC}
      ) {
        price
        timestamp
      }
    }
    marketPrices(
      where: {timestamp: {_lte: $lte, _gt: $gt}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
}
    `;
export const GetDcaOrderListDocument = gql`
    query getDcaOrderList {
  dcaOrder(orderBy: [{exchange: {name: ASC}}, {createdAt: ASC}]) {
    uid
    exchange {
      uid
      id
      name
    }
    enabledAt
    dailyAverage
    startAt
    marketOffset
    intervalMs
    primaryCurrency {
      symbol
    }
    secondaryCurrency {
      symbol
    }
    minValue
    maxValue
  }
}
    `;
export const GetDcaOrderDeleteDocument = gql`
    query getDcaOrderDelete($dcaOrderUid: uuid!) {
  dcaOrderByPk(uid: $dcaOrderUid) {
    uid
    exchange {
      uid
      name
    }
    enabledAt
    dailyAverage
    startAt
    marketOffset
    primaryCurrency {
      symbol
    }
    secondaryCurrency {
      symbol
    }
    minValue
    maxValue
  }
}
    `;
export const GetEmailVerifiedDocument = gql`
    query getEmailVerified {
  user {
    uid
    emailVerified
  }
}
    `;
export const GetExchangeKeysFormCreateDocument = gql`
    query getExchangeKeysFormCreate {
  exchange {
    uid
    id
    name
  }
}
    `;
export const GetExchangeListDocument = gql`
    query getExchangeList($currentTimestamp: timestamptz, $historicTimestamp: timestamptz) {
  userExchangeKeys(orderBy: {createdAt: ASC}) {
    uid
    exchange {
      uid
      name
      url
    }
    balanceLatest: balance(
      args: {timestamp_at: $currentTimestamp}
      orderBy: {currencySymbol: ASC}
    ) {
      availableBalance
      totalBalance
      totalBalanceNzd: totalBalanceFx(args: {currency: "NZD"})
      currencySymbol
    }
    balanceHistoric: balance(
      args: {timestamp_at: $historicTimestamp}
      orderBy: {currencySymbol: ASC}
    ) {
      totalBalanceNzd: totalBalanceFx(args: {currency: "NZD"})
      currencySymbol
    }
  }
}
    `;
export const GetMarketPriceDocument = gql`
    query getMarketPrice($primaryCurrency: String!, $secondaryCurrency: String!) {
  binanceUs: market(where: {id: {_eq: "binance.us"}}) {
    marketPrices(
      where: {assetSymbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
  kiwiCoin: market(where: {id: {_eq: "kiwi-coin.com"}}) {
    marketPrices(
      where: {assetSymbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
  dasset: market(where: {id: {_eq: "dassetx.com"}}) {
    marketPrices(
      where: {assetSymbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
  kraken: market(where: {id: {_eq: "kraken.com"}}) {
    marketPrices(
      where: {assetSymbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
  independentReserveAud: market(where: {id: {_eq: "independentreserve.com"}}) {
    marketPrices(
      where: {sourceCurrency: {_eq: "AUD"}, assetSymbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
  independentReserveNzd: market(where: {id: {_eq: "independentreserve.com"}}) {
    marketPrices(
      where: {sourceCurrency: {_eq: "NZD"}, assetSymbol: {_eq: $primaryCurrency}, currency: {_eq: $secondaryCurrency}}
      orderBy: {timestamp: DESC}
    ) {
      price
      timestamp
    }
  }
}
    `;
export const GetOpenOrderListDocument = gql`
    query getOpenOrderList {
  order(where: {closedAt: {_isNull: true}}) {
    uid
    exchange {
      uid
      name
    }
    openedAt
    value
    volume
    price
    primaryCurrency
    secondaryCurrency
    type
    dcaOrderHistories {
      uid
      dcaOrderUid
    }
  }
}
    `;
export const GetPricesDocument = gql`
    query getPrices {
  stripeProduct(where: {active: {_eq: true}}) {
    id
    active
    name
    stripePrices(where: {active: {_eq: true}}) {
      id
      type
      recurringInterval
      recurringIntervalCount
      unitAmount
      currency
    }
  }
}
    `;
export const GetSubscriptionStatusDocument = gql`
    query getSubscriptionStatus {
  activeStripeSubscription: stripeSubscription(
    where: {status: {_eq: "active"}}
    limit: 1
    orderBy: {currentPeriodStart: DESC}
  ) {
    ...StripeSubscription
  }
  incompleteStripeSubscription: stripeSubscription(
    where: {status: {_eq: "incomplete"}}
    limit: 1
    orderBy: {currentPeriodStart: DESC}
  ) {
    ...StripeSubscription
  }
  stripeSubscriptionAggregate {
    aggregate {
      count
    }
  }
}
    ${StripeSubscriptionFragmentDoc}`;
export const GetSubscriptionsDocument = gql`
    query getSubscriptions {
  stripeSubscription(orderBy: {currentPeriodStart: DESC}) {
    id
    status
    currentPeriodStart
    currentPeriodEnd
    cancelAt
    canceledAt
    cancelAtPeriodEnd
    stripePrice {
      recurringInterval
      recurringIntervalCount
      unitAmount
      currency
      stripeProduct {
        name
      }
    }
  }
}
    `;
export const GetTradeAvgPriceDocument = gql`
    query getTradeAvgPrice($primaryCurrency: String!) {
  tradeAvgPriceByWindow(
    args: {group_by: "hour", currency: "NZD"}
    where: {primaryCurrency: {_eq: $primaryCurrency}}
    orderBy: {timestamp: DESC}
  ) {
    timestamp
    price
    avgPrice
  }
}
    `;
export const GetTradeCumulativeSumByDayDocument = gql`
    query getTradeCumulativeSumByDay {
  tradeAvgPriceByWindow(
    args: {group_by: "day", currency: "NZD"}
    orderBy: {timestamp: DESC}
  ) {
    timestamp
    primaryCurrency
    totalValue
  }
}
    `;
export const GetTradeCumulativeVolumeByDayDocument = gql`
    query getTradeCumulativeVolumeByDay {
  tradeAvgPriceByWindow(
    args: {group_by: "day", currency: "NZD"}
    orderBy: {timestamp: DESC}
  ) {
    timestamp
    primaryCurrency
    volume
  }
}
    `;
export const GetTradeListDocument = gql`
    query getTradeList($filters: TradeBoolExp!, $offset: Int!, $limit: Int!) {
  user {
    uid
    timezone
  }
  tradeAggregate(where: $filters) {
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
  trade(
    where: $filters
    orderBy: {timestamp: DESC}
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
    primaryCurrency
    secondaryCurrency
    type
    price: priceFx(args: {currency: "NZD"})
    totalValue: totalValueFx(args: {currency: "NZD"})
    fee: feeFx(args: {currency: "NZD"})
  }
}
    `;
export const GetTradeSumValueByWeekDocument = gql`
    query getTradeSumValueByWeek {
  tradeSumByWindow(
    args: {group_by: "week", currency: "NZD"}
    orderBy: {timestamp: DESC}
  ) {
    timestamp
    primaryCurrency
    totalValue
  }
}
    `;
export const GetUser2FaDocument = gql`
    query getUser2FA {
  user {
    uid
    user2fa {
      createdAt
      name
      uid
    }
  }
}
    `;
export const GetUserDeviceByUidDocument = gql`
    query getUserDeviceByUid($userDeviceUid: uuid!) {
  userDeviceByPk(uid: $userDeviceUid) {
    uid
    name
  }
}
    `;
export const GetUserDeviceListDocument = gql`
    query getUserDeviceList {
  userDevice(orderBy: {accessedAt: DESC}) {
    uid
    name
    createdAt
    accessedAt
  }
}
    `;
export const GetUserExchangeKeysByUidDocument = gql`
    query getUserExchangeKeysByUid($userExchangeKeysUid: uuid!) {
  userExchangeKeysByPk(uid: $userExchangeKeysUid) {
    uid
    description
  }
}
    `;
export const GetUserExchangeKeysFormEditDocument = gql`
    query getUserExchangeKeysFormEdit($userExchangeKeysUid: uuid!) {
  userExchangeKeysByPk(uid: $userExchangeKeysUid) {
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
export const GetUserExchangeKeysListDocument = gql`
    query getUserExchangeKeysList {
  user {
    timezone
  }
  userExchangeKeys {
    uid
    description
    updatedAt
    exchange {
      uid
      name
    }
    dcaOrdersAggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const GetUserListDocument = gql`
    query getUserList {
  user {
    uid
    emailVerified
    createdAt
  }
}
    `;
export const SetupUser2FaDocument = gql`
    query setupUser2FA {
  actionSetupUser2fa {
    qrcode
    secret
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createAdminAuthToken(variables: CreateAdminAuthTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAdminAuthTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAdminAuthTokenMutation>(CreateAdminAuthTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAdminAuthToken', 'mutation');
    },
    createAuthToken(variables: CreateAuthTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAuthTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAuthTokenMutation>(CreateAuthTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAuthToken', 'mutation');
    },
    createDcaOrder(variables: CreateDcaOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDcaOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDcaOrderMutation>(CreateDcaOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDcaOrder', 'mutation');
    },
    createStripeSubscription(variables: CreateStripeSubscriptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateStripeSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStripeSubscriptionMutation>(CreateStripeSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createStripeSubscription', 'mutation');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    createUserExchangeKeys(variables: CreateUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserExchangeKeysMutation>(CreateUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserExchangeKeys', 'mutation');
    },
    deleteUserDevice(variables: DeleteUserDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserDeviceMutation>(DeleteUserDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserDevice', 'mutation');
    },
    deleteDcaOrder(variables: DeleteDcaOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteDcaOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteDcaOrderMutation>(DeleteDcaOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteDcaOrder', 'mutation');
    },
    deleteUser(variables?: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    deleteUser2FA(variables: DeleteUser2FaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUser2FaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUser2FaMutation>(DeleteUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser2FA', 'mutation');
    },
    deleteUserExchangeKeys(variables: DeleteUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserExchangeKeysMutation>(DeleteUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserExchangeKeys', 'mutation');
    },
    enableUser2FA(variables: EnableUser2FaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EnableUser2FaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableUser2FaMutation>(EnableUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableUser2FA', 'mutation');
    },
    useResetUserPassword(variables: UseResetUserPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UseResetUserPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UseResetUserPasswordMutation>(UseResetUserPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'useResetUserPassword', 'mutation');
    },
    sendUserEmailVerify(variables?: SendUserEmailVerifyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendUserEmailVerifyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendUserEmailVerifyMutation>(SendUserEmailVerifyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendUserEmailVerify', 'mutation');
    },
    sendUserPasswordReset(variables: SendUserPasswordResetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendUserPasswordResetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendUserPasswordResetMutation>(SendUserPasswordResetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendUserPasswordReset', 'mutation');
    },
    updateDcaOrder(variables: UpdateDcaOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDcaOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDcaOrderMutation>(UpdateDcaOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDcaOrder', 'mutation');
    },
    updateDcaOrderEnabled(variables: UpdateDcaOrderEnabledMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDcaOrderEnabledMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDcaOrderEnabledMutation>(UpdateDcaOrderEnabledDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDcaOrderEnabled', 'mutation');
    },
    updateStripeSubscription(variables: UpdateStripeSubscriptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateStripeSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateStripeSubscriptionMutation>(UpdateStripeSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateStripeSubscription', 'mutation');
    },
    updateUser(variables?: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserDevice(variables: UpdateUserDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserDeviceMutation>(UpdateUserDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserDevice', 'mutation');
    },
    updateUserExchangeKeys(variables: UpdateUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserExchangeKeysMutation>(UpdateUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserExchangeKeys', 'mutation');
    },
    validateUserExchangeKeys(variables: ValidateUserExchangeKeysMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUserExchangeKeysMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUserExchangeKeysMutation>(ValidateUserExchangeKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateUserExchangeKeys', 'mutation');
    },
    validateUserExchangeKeysLive(variables: ValidateUserExchangeKeysLiveMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUserExchangeKeysLiveMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUserExchangeKeysLiveMutation>(ValidateUserExchangeKeysLiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateUserExchangeKeysLive', 'mutation');
    },
    validateUserPasswordReset(variables: ValidateUserPasswordResetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUserPasswordResetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUserPasswordResetMutation>(ValidateUserPasswordResetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateUserPasswordReset', 'mutation');
    },
    verifyUserEmail(variables: VerifyUserEmailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VerifyUserEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyUserEmailMutation>(VerifyUserEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyUserEmail', 'mutation');
    },
    getCronHistoryList(variables?: GetCronHistoryListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCronHistoryListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCronHistoryListQuery>(GetCronHistoryListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCronHistoryList', 'query');
    },
    getCronHistoryTaskIds(variables?: GetCronHistoryTaskIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCronHistoryTaskIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCronHistoryTaskIdsQuery>(GetCronHistoryTaskIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCronHistoryTaskIds', 'query');
    },
    getAdminExchangeList(variables?: GetAdminExchangeListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminExchangeListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminExchangeListQuery>(GetAdminExchangeListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAdminExchangeList', 'query');
    },
    getCheckoutPage(variables: GetCheckoutPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCheckoutPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCheckoutPageQuery>(GetCheckoutPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCheckoutPage', 'query');
    },
    getCronHistory(variables: GetCronHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCronHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCronHistoryQuery>(GetCronHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCronHistory', 'query');
    },
    getDcaOrderFormCreate(variables?: GetDcaOrderFormCreateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderFormCreateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderFormCreateQuery>(GetDcaOrderFormCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDcaOrderFormCreate', 'query');
    },
    getDcaOrderFormEdit(variables: GetDcaOrderFormEditQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderFormEditQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderFormEditQuery>(GetDcaOrderFormEditDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDcaOrderFormEdit', 'query');
    },
    getDcaOrderHistoryList(variables: GetDcaOrderHistoryListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderHistoryListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderHistoryListQuery>(GetDcaOrderHistoryListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDcaOrderHistoryList', 'query');
    },
    getDcaOrderHistoryPriceChart(variables: GetDcaOrderHistoryPriceChartQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderHistoryPriceChartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderHistoryPriceChartQuery>(GetDcaOrderHistoryPriceChartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDcaOrderHistoryPriceChart', 'query');
    },
    getDcaOrderList(variables?: GetDcaOrderListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderListQuery>(GetDcaOrderListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDcaOrderList', 'query');
    },
    getDcaOrderDelete(variables: GetDcaOrderDeleteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDcaOrderDeleteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDcaOrderDeleteQuery>(GetDcaOrderDeleteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDcaOrderDelete', 'query');
    },
    getEmailVerified(variables?: GetEmailVerifiedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEmailVerifiedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEmailVerifiedQuery>(GetEmailVerifiedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEmailVerified', 'query');
    },
    getExchangeKeysFormCreate(variables?: GetExchangeKeysFormCreateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExchangeKeysFormCreateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExchangeKeysFormCreateQuery>(GetExchangeKeysFormCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExchangeKeysFormCreate', 'query');
    },
    getExchangeList(variables?: GetExchangeListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExchangeListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExchangeListQuery>(GetExchangeListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExchangeList', 'query');
    },
    getMarketPrice(variables: GetMarketPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMarketPriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarketPriceQuery>(GetMarketPriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMarketPrice', 'query');
    },
    getOpenOrderList(variables?: GetOpenOrderListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOpenOrderListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOpenOrderListQuery>(GetOpenOrderListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOpenOrderList', 'query');
    },
    getPrices(variables?: GetPricesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPricesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPricesQuery>(GetPricesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPrices', 'query');
    },
    getSubscriptionStatus(variables?: GetSubscriptionStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSubscriptionStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubscriptionStatusQuery>(GetSubscriptionStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSubscriptionStatus', 'query');
    },
    getSubscriptions(variables?: GetSubscriptionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSubscriptionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubscriptionsQuery>(GetSubscriptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSubscriptions', 'query');
    },
    getTradeAvgPrice(variables: GetTradeAvgPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeAvgPriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeAvgPriceQuery>(GetTradeAvgPriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeAvgPrice', 'query');
    },
    getTradeCumulativeSumByDay(variables?: GetTradeCumulativeSumByDayQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeCumulativeSumByDayQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeCumulativeSumByDayQuery>(GetTradeCumulativeSumByDayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeCumulativeSumByDay', 'query');
    },
    getTradeCumulativeVolumeByDay(variables?: GetTradeCumulativeVolumeByDayQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeCumulativeVolumeByDayQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeCumulativeVolumeByDayQuery>(GetTradeCumulativeVolumeByDayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeCumulativeVolumeByDay', 'query');
    },
    getTradeList(variables: GetTradeListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeListQuery>(GetTradeListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeList', 'query');
    },
    getTradeSumValueByWeek(variables?: GetTradeSumValueByWeekQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTradeSumValueByWeekQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTradeSumValueByWeekQuery>(GetTradeSumValueByWeekDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTradeSumValueByWeek', 'query');
    },
    getUser2FA(variables?: GetUser2FaQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUser2FaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUser2FaQuery>(GetUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser2FA', 'query');
    },
    getUserDeviceByUid(variables: GetUserDeviceByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserDeviceByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserDeviceByUidQuery>(GetUserDeviceByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserDeviceByUid', 'query');
    },
    getUserDeviceList(variables?: GetUserDeviceListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserDeviceListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserDeviceListQuery>(GetUserDeviceListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserDeviceList', 'query');
    },
    getUserExchangeKeysByUid(variables: GetUserExchangeKeysByUidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserExchangeKeysByUidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserExchangeKeysByUidQuery>(GetUserExchangeKeysByUidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserExchangeKeysByUid', 'query');
    },
    getUserExchangeKeysFormEdit(variables: GetUserExchangeKeysFormEditQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserExchangeKeysFormEditQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserExchangeKeysFormEditQuery>(GetUserExchangeKeysFormEditDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserExchangeKeysFormEdit', 'query');
    },
    getUserExchangeKeysList(variables?: GetUserExchangeKeysListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserExchangeKeysListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserExchangeKeysListQuery>(GetUserExchangeKeysListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserExchangeKeysList', 'query');
    },
    getUserList(variables?: GetUserListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserListQuery>(GetUserListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserList', 'query');
    },
    setupUser2FA(variables?: SetupUser2FaQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetupUser2FaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetupUser2FaQuery>(SetupUser2FaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setupUser2FA', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;