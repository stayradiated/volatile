import type * as Types from '../types.graphql'

export type GetAuthTokenMutationVariables = Types.Exact<{
  email: Types.Scalars['String']
  password: Types.Scalars['String']
  deviceId: Types.Scalars['String']
  deviceName: Types.Scalars['String']
  deviceTrusted: Types.Scalars['Boolean']
  token2Fa?: Types.InputMaybe<Types.Scalars['String']>
  role: Types.Scalars['String']
}>

export type GetAuthTokenMutation = {
  __typename?: 'mutation_root'
  actionCreateAuthToken?:
    | {
        __typename?: 'CreateAuthTokenOutput'
        authToken: string
      }
    | undefined
}
