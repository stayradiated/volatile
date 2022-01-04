import { gql, useMutation } from '@apollo/client'

import type {
  DeleteUserMutation as Mutation,
  DeleteUserMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation deleteUser {
    delete_user {
      user_uid
    }
  }
`

const useDeleteUser = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (variables: MutationVariables) => {
    return mutate({ variables })
  }
}

export { useDeleteUser }
