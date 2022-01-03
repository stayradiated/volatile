import { gql, useMutation } from '@apollo/client'

import type {
  EnableUser2FaMutation as Mutation,
  EnableUser2FaMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation enableUser2FA(
    $name: String!,
    $secret: String!
    $token: String!
  ) {
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

const useEnableUser2FA = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (variables: MutationVariables) => {
    return mutate({ variables })
  }
}

export { useEnableUser2FA }
