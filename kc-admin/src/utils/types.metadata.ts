export interface Metadata {
  version: number
  sources: Source[]
  query_collections: QueryCollection[]
  allowlist: Allowlist[]
  actions: Action[]
  custom_types: CustomTypes
  cron_triggers: CronTrigger[]
}

export interface Action {
  name: string
  definition: ActionDefinition
  permissions: PermissionElement[]
}

export interface ActionDefinition {
  handler: string
  output_type: string
  headers: Header[]
  arguments?: Argument[]
  type: Type
  kind?: Kind
}

export interface Argument {
  name: string
  type: string
}

export interface Header {
  name: Name
  value_from_env: ValueFromEnv
}

export enum Name {
  XHasuraActionsSecret = 'x-hasura-actions-secret',
}

export enum ValueFromEnv {
  HasuraActionsSecret = 'HASURA_ACTIONS_SECRET',
}

export enum Kind {
  Synchronous = 'synchronous',
}

export enum Type {
  Mutation = 'mutation',
  Query = 'query',
}

export interface PermissionElement {
  role: Role
}

export enum Role {
  Guest = 'guest',
  User = 'user',
}

export interface Allowlist {
  collection: string
}

export interface CronTrigger {
  name: string
  webhook: string
  schedule: string
  include_in_metadata: boolean
  payload: Payload
  headers: Header[]
}

export interface Payload {}

export interface CustomTypes {
  input_objects: InputObject[]
  objects: Array<Record<string, unknown>>
}

export interface InputObject {
  name: string
  fields: Argument[]
}

export interface Object {
  name: string
  fields: Argument[]
  relationships?: Relationship[]
}

export interface Relationship {
  remote_table: RemoteTableClass
  name: string
  source: string
  type: string
  field_mapping: FieldMapping
}

export interface FieldMapping {
  user_uid?: string
  user_exchange_keys_uid?: string
}

export interface RemoteTableClass {
  schema: Schema
  name: string
}

export enum Schema {
  Kc = 'kc',
}

export interface QueryCollection {
  name: string
  definition: QueryCollectionDefinition
}

export interface QueryCollectionDefinition {
  queries: Query[]
}

export interface Query {
  name: string
  query: string
}

export interface Source {
  name: string
  kind: string
  tables: TableElement[]
  configuration: Configuration
}

export interface Configuration {
  connection_info: ConnectionInfo
}

export interface ConnectionInfo {
  use_prepared_statements: boolean
  database_url: DatabaseURL
  isolation_level: string
  pool_settings: PoolSettings
}

export interface DatabaseURL {
  from_env: string
}

export interface PoolSettings {
  connection_lifetime: number
  retries: number
  idle_timeout: number
  max_connections: number
}

export interface TableElement {
  table: RemoteTableClass
  object_relationships?: ObjectRelationship[]
  array_relationships?: ArrayRelationship[]
  select_permissions?: SelectPermission[]
  update_permissions?: UpdatePermission[]
  delete_permissions?: DeletePermission[]
}

export interface ArrayRelationship {
  name: string
  using: ArrayRelationshipUsing
}

export interface ArrayRelationshipUsing {
  foreign_key_constraint_on: ForeignKeyConstraintOnClass
}

export interface ForeignKeyConstraintOnClass {
  column: string
  table: RemoteTableClass
}

export interface DeletePermission {
  role: Role
  permission: DeletePermissionPermission
}

export interface DeletePermissionPermission {
  filter: CheckClass
}

export interface CheckClass {
  user_uid: Uid
}

export interface Uid {
  _eq: Eq
}

export enum Eq {
  XHasuraUserID = 'X-Hasura-User-Id',
}

export interface ObjectRelationship {
  name: string
  using: ObjectRelationshipUsing
}

export interface ObjectRelationshipUsing {
  foreign_key_constraint_on: ForeignKeyConstraintOnClass | string
}

export interface SelectPermission {
  role: Role
  permission: SelectPermissionPermission
}

export interface SelectPermissionPermission {
  columns: string[]
  filter: PurpleFilter
  limit?: number
  allow_aggregations?: boolean
}

export interface PurpleFilter {
  user_uid?: Uid
  uid?: Uid
}

export interface UpdatePermission {
  role: Role
  permission: UpdatePermissionPermission
}

export interface UpdatePermissionPermission {
  columns: string[]
  filter: CheckClass
  check: CheckClass
}
