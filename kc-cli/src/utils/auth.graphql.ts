import * as Types from '../types.graphql';

export type GetAuthTokenMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  deviceId: Types.Scalars['String'];
  deviceName: Types.Scalars['String'];
  deviceTrusted: Types.Scalars['Boolean'];
}>;


export type GetAuthTokenMutation = { __typename?: 'mutation_root', create_auth_token?: Types.Maybe<{ __typename?: 'CreateAuthTokenOutput', auth_token: string }> };
