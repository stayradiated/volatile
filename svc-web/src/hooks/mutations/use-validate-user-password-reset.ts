import { gql, useMutation } from '@apollo/client'

import type {
  UseValidateUserPasswordResetMutation as Mutation,
  UseValidateUserPasswordResetMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation useValidateUserPasswordReset($passwordResetSecret: String!) {
    validate_user_password_reset(password_reset_secret: $passwordResetSecret) {
      is_valid
      email
    }
  }
`

type ValidateUserPasswordResetOptions = {
  passwordResetSecret: string
}

type ValidateUserPasswordResetResult = {
  isValid: boolean
  email?: string
}

type ValidateUserPasswordResetFn = (
  options: ValidateUserPasswordResetOptions,
) => Promise<ValidateUserPasswordResetResult>

const useValidateUserPasswordReset = (): ValidateUserPasswordResetFn => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (options: ValidateUserPasswordResetOptions) => {
    const { passwordResetSecret } = options

    const result = await mutation({
      variables: {
        passwordResetSecret,
      },
    })

    const { is_valid: isValid, email } =
      result.data!.validate_user_password_reset

    return { isValid, email: email ?? undefined }
  }
}

export { useValidateUserPasswordReset }
