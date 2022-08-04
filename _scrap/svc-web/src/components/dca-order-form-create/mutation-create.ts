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
    $intervalMs: Int!
    $primaryCurrency: String!
    $secondaryCurrency: String!
    $minValue: Float
    $maxValue: Float
  ) {
    create_dca_order(
      user_exchange_keys_uid: $userExchangeKeysUID
      market_uid: $marketUID
      start_at: $startAt
      market_offset: $marketOffset
      daily_average: $dailyAverage
      interval_ms: $intervalMs
      primary_currency: $primaryCurrency
      secondary_currency: $secondaryCurrency
      min_value: $minValue
      max_value: $maxValue
    ) {
      dca_order {
        uid
        exchange {
          uid
          id
          name
        }
        user_exchange_keys_uid
        enabled_at
        market_uid
        start_at
        market_offset
        daily_average
        interval_ms
        primary_currency {
          symbol
        }
        secondary_currency {
          symbol
        }
        min_value
        max_value
      }
    }
  }
`

const FRAGMENT = gql`
  fragment NewDCAOrder on kc_dca_order {
    uid
    exchange {
      uid
      id
      name
    }
    enabled_at
    daily_average
    start_at
    market_offset
    primary_currency {
      symbol
    }
    secondary_currency {
      symbol
    }
    min_value
    max_value
  }
`

const useCreateDCAOrder = () => {
  const [mutate] = useMutation<
    CreateDcaOrderMutation,
    CreateDcaOrderMutationVariables
  >(MUTATION)

  return async (variables: CreateDcaOrderMutationVariables) => {
    return mutate({
      variables,
      update(cache, response) {
        const { data } = response
        cache.modify({
          fields: {
            kc_dca_order(list) {
              const newItem = cache.writeFragment({
                fragment: FRAGMENT,
                data: data?.create_dca_order?.dca_order,
              })
              return [...list, newItem]
            },
          },
        })
      },
    })
  }
}

export { useCreateDCAOrder }
