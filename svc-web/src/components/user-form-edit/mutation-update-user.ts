import { gql, useMutation } from '@apollo/client'

import type {
  UpdateUserMutation as Mutation,
  UpdateUserMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation updateUser($email: String, $password: String) {
    update_user(email: $email, password: $password) {
      user_uid
    }
  }
`

type EditableFields = {
  email?: string
  password?: string
}

const useUpdateUser = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (fields: EditableFields) => {
    const variables: MutationVariables = {}

    if (typeof fields.email === 'string') {
      variables.email = fields.email
    }

    if (typeof fields.password === 'string') {
      variables.password = fields.password
    }

    return mutate({ variables })
  }
}

export { useUpdateUser }
