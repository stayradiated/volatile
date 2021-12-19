import { gql, useMutation } from '@apollo/client'

import type {
  UseSendUserPasswordResetMutation as Mutation,
  UseSendUserPasswordResetMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation useSendUserPasswordReset($email: String!) {
    send_user_password_reset(email: $email) {
      email
    }
  }
`

type SendUserPasswordResetOptions = {
  email: string
}

type SendUserPasswordResetFn = (
  options: SendUserPasswordResetOptions,
) => Promise<{
  email: string
}>

const useSendUserPasswordReset = (): SendUserPasswordResetFn => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (options: SendUserPasswordResetOptions) => {
    const { email } = options

    await mutation({
      variables: {
        email,
      },
    })

    return { email }
  }
}

export { useSendUserPasswordReset }
