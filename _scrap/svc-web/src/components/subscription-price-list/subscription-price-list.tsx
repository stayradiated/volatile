import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import { Spin, Alert, Button } from '../retro-ui'

import type {
  GetPricesQuery as Query,
  GetPricesQueryVariables as QueryVariables,
} from '../../utils/graphql'
import { Price } from './price'
import { useCreateSubscription } from './mutation-create'

import { StripeContainer } from './stripe-container'
import { StripeForm } from './stripe-form'

const QUERY = gql`
  query getPrices {
    query_prices {
      id
      type
      interval
      interval_count
      currency
      unit_amount
    }
  }
`

const SubscriptionPriceList = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const createSubscription = useCreateSubscription()

  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const [clientSecret, setClientSecret] = useState<string | undefined>(
    undefined,
  )

  const handleCreateSubscription = async () => {
    if (!selectedId) {
      throw new Error('No selected ID')
    }

    const subscription = await createSubscription({ priceId: selectedId })
    setClientSecret(subscription.data?.create_subscription?.client_secret)
  }

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return (
    <>
      {(data?.query_prices || []).map((price) => {
        const isSelected = selectedId === price.id

        const handleSelect = () => {
          setSelectedId(price.id)
        }

        return (
          <Price
            key={price.id}
            price={price}
            isSelected={isSelected}
            onSelect={handleSelect}
          />
        )
      })}

      <Button disabled={!selectedId} onClick={handleCreateSubscription}>
        Create Subscription
      </Button>

      {typeof clientSecret === 'string' && (
        <StripeContainer>
          <StripeForm clientSecret={clientSecret} />
        </StripeContainer>
      )}
    </>
  )
}

export { SubscriptionPriceList }
