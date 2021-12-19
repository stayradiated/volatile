import { gql, useMutation } from '@apollo/client'

import type {
  UseVerifyUserEmailMutation as Mutation,
  UseVerifyUserEmailMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation useVerifyUserEmail($emailVerifySecret: String!) {
    verify_user_email(email_verify_secret: $emailVerifySecret) {
      email
    }
  }
`

type VerifyUserEmailOptions = {
  emailVerifySecret: string
}

type VerifyUserEmailResult = {
  email: string
}

type VerifyUserEmailFn = (
  options: VerifyUserEmailOptions,
) => Promise<VerifyUserEmailResult>

const useVerifyUserEmail = (): VerifyUserEmailFn => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (options: VerifyUserEmailOptions) => {
    const { emailVerifySecret } = options

    const result = await mutation({
      variables: {
        emailVerifySecret,
      },
    })

    const { email } = result.data!.verify_user_email

    return { email }
  }
}

export { useVerifyUserEmail }
