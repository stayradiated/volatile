import { gql, useMutation } from '@apollo/client'

import {
  CreateDcaOrderMutation,
  CreateDcaOrderMutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation createDCAOrder(
    $userExchangeKeysUID: uuid!
    $marketUID: uuid!
    $startAt: timestamp!
    $marketOffset: Float!
    $dailyAverage: Float!
    $primaryCurrency: String!
    $secondaryCurrency: String!
  ) {
    create_dca_order(
      user_exchange_keys_uid: $userExchangeKeysUID
      market_uid: $marketUID
      start_at: $startAt
      market_offset: $marketOffset
      daily_average: $dailyAverage
      primary_currency: $primaryCurrency
      secondary_currency: $secondaryCurrency
    ) {
      dca_order_uid
    }
  }
`

const useCreateDCAOrder = () => {
  const [mutate] = useMutation<
    CreateDcaOrderMutation,
    CreateDcaOrderMutationVariables
  >(MUTATION)

  return async (variables: CreateDcaOrderMutationVariables) => {
    return mutate({ variables })
  }
}

export { useCreateDCAOrder }
