export interface InvocationResponse {
  count: number
  invocations: Invocation[]
}

export interface Invocation {
  status: number
  response: Response
  created_at: string
  id: string
  event_id: string
  request: Request
}

export interface Request {
  payload: RequestPayload
  headers: RequestHeader[]
  version: string
}

export interface RequestHeader {
  value?: Value
  name: PurpleName
  value_from_env?: ValueFromEnv
}

export enum PurpleName {
  ContentType = 'Content-Type',
  UserAgent = 'User-Agent',
  XHasuraActionsSecret = 'x-hasura-actions-secret',
}

export enum Value {
  AppJSON = 'application/json',
  HasuraGraphqlEngineV204 = 'hasura-graphql-engine/v2.0.4',
}

export enum ValueFromEnv {
  HasuraActionsSecret = 'HASURA_ACTIONS_SECRET',
}

export interface RequestPayload {
  scheduled_time: string
  payload: PayloadPayload
  name: PayloadName
  id: string
}

export enum PayloadName {
  AutoBuy = 'Auto Buy',
}

export interface PayloadPayload {}

export interface Response {
  data: Data
  version: string
  type: Type
}

export interface Data {
  status: number
  body: Body
  headers: DataHeader[]
}

export enum Body {
  MessageSuccessfullyExecuted2DCAOrderS = '{"message":"Successfully executed 2 DCA order(s)."}',
}

export interface DataHeader {
  value: string
  name: FluffyName
}

export enum FluffyName {
  Connection = 'Connection',
  ContentLength = 'content-length',
  ContentType = 'content-type',
  Date = 'Date',
  KeepAlive = 'Keep-Alive',
}

export enum Type {
  WebhookResponse = 'webhook_response',
}
