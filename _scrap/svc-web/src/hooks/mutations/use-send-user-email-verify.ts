import { gql, useMutation } from '@apollo/client'

import type {
  UseSendUserEmailVerifyMutation as Mutation,
  UseSendUserEmailVerifyMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation useSendUserEmailVerify {
    send_user_email_verify {
      user_uid
    }
  }
`

type SendUserEmailVerifyFn = () => Promise<void>

const useSendUserEmailVerify = (): SendUserEmailVerifyFn => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async () => {
    await mutation()
    return undefined
  }
}

export { useSendUserEmailVerify }
