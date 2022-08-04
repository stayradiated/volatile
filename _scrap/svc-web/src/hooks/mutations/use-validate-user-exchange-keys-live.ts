import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import type {
  ValidateUserExchangeKeysLiveMutation,
  ValidateUserExchangeKeysLiveMutationVariables,
} from '../../utils/graphql'

type Result = {
  isValid: boolean
  validationMessage?: string
}

const MUTATION_CREATE_USER_EXCHANGE_KEYS = gql`
  mutation validateUserExchangeKeysLive($exchangeUID: uuid!, $keys: jsonb!) {
    validate_user_exchange_keys_live(exchange_uid: $exchangeUID, keys: $keys) {
      is_valid
      validation_message
    }
  }
`

const useValidateUserExchangeKeysLive = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | undefined>(undefined)

  const [mutate] = useMutation<
    ValidateUserExchangeKeysLiveMutation,
    ValidateUserExchangeKeysLiveMutationVariables
  >(MUTATION_CREATE_USER_EXCHANGE_KEYS)

  const reset = () => {
    setLoading(false)
    setResult(undefined)
  }

  const validateUserExchangeKeysLive = async (
    variables: ValidateUserExchangeKeysLiveMutationVariables,
  ) => {
    setLoading(true)

    try {
      const result = await mutate({ variables })
      const { is_valid: isValid, validation_message: validationMessage } =
        result.data?.validate_user_exchange_keys_live ?? {
          is_valid: false,
          validation_message: 'Could not validate keys.',
        }
      setResult({ isValid, validationMessage: validationMessage ?? undefined })
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return {
    validateUserExchangeKeysLive,
    loading,
    result,
    reset,
  }
}

export { useValidateUserExchangeKeysLive }
