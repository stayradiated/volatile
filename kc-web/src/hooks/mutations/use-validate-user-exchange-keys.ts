import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import type {
  ValidateUserExchangeKeysMutation,
  ValidateUserExchangeKeysMutationVariables,
} from '../../utils/graphql'

type Result = {
  isValid: boolean
  validationMessage: string | undefined | null
}

const MUTATION_CREATE_USER_EXCHANGE_KEYS = gql`
  mutation validateUserExchangeKeys($userExchangeKeysUID: uuid!) {
    validate_user_exchange_keys(user_exchange_keys_uid: $userExchangeKeysUID) {
      is_valid
      validation_message
    }
  }
`

const useValidateUserExchangeKeys = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | undefined>(undefined)

  const [mutate] = useMutation<
    ValidateUserExchangeKeysMutation,
    ValidateUserExchangeKeysMutationVariables
  >(MUTATION_CREATE_USER_EXCHANGE_KEYS)

  const reset = () => {
    setLoading(false)
    setResult(undefined)
  }

  const validateUserExchangeKeys = async (
    variables: ValidateUserExchangeKeysMutationVariables,
  ) => {
    setLoading(true)

    try {
      const result = await mutate({ variables })
      const { is_valid: isValid, validation_message: validationMessage } =
        result.data?.validate_user_exchange_keys ?? {
          is_valid: false,
          validation_message: 'Could not validate keys.',
        }
      setResult({ isValid, validationMessage })
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return {
    validateUserExchangeKeys,
    loading,
    result,
    reset,
  }
}

export { useValidateUserExchangeKeys }
