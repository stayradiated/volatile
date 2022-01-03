import { gql, useMutation } from '@apollo/client'

import type {
  DeleteUser2FaMutation as Mutation,
  DeleteUser2FaMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation deleteUser2FA(
    $token: String!
  ) {
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

const useDeleteUser2FA = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (variables: MutationVariables) => {
    return mutate({ variables })
  }
}

export { useDeleteUser2FA }
