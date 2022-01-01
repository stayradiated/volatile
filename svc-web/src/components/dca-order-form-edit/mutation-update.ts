import { gql, useMutation } from '@apollo/client'

import type {
  UpdateDcaOrderMutation as Mutation,
  UpdateDcaOrderMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation updateDCAOrder(
    $dcaOrderUID: uuid!
    $values: kc_dca_order_set_input!
  ) {
    update_kc_dca_order_by_pk(
      pk_columns: { uid: $dcaOrderUID }
      _set: $values
    ) {
      uid
      daily_average
      enabled_at
      interval_ms
      market_offset
      market_uid
      max_value
      min_value
      start_at
      updated_at
      user_exchange_keys_uid
    }
  }
`

type EditableFields = {
  userExchangeKeysUID?: string
  marketUID?: string
  startAt?: string
  marketOffset?: number
  dailyAverage?: number
  intervalMs?: number
  minValue?: number
  maxValue?: number
}

const useUpdateDCAOrder = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (dcaOrderUID: string, fields: EditableFields) => {
    const variables: MutationVariables = {
      dcaOrderUID,
      values: {
        updated_at: new Date().toISOString(),
      },
    }

    if (typeof fields.userExchangeKeysUID === 'string') {
      variables.values.user_exchange_keys_uid = fields.userExchangeKeysUID
    }

    if (typeof fields.marketUID === 'string') {
      variables.values.market_uid = fields.marketUID
    }

    if (typeof fields.startAt === 'string') {
      variables.values.start_at = fields.startAt
    }

    if (typeof fields.marketOffset === 'number') {
      variables.values.market_offset = fields.marketOffset
    }

    if (typeof fields.dailyAverage === 'number') {
      variables.values.daily_average = fields.dailyAverage
    }

    if (typeof fields.intervalMs === 'number') {
      variables.values.interval_ms = fields.intervalMs
    }

    if (typeof fields.minValue === 'number') {
      variables.values.min_value = fields.minValue
    }

    if (typeof fields.maxValue === 'number') {
      variables.values.max_value = fields.maxValue
    }

    return mutate({ variables })
  }
}

export { useUpdateDCAOrder }
