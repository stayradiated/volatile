import { useState } from 'react'

import { Button } from '../retro-ui'

import { Price } from './price'

import { StripeContainer } from './stripe-container'
import { StripeForm } from './stripe-form'
import type { GetPricesQuery } from '~/graphql/generated'

type Props = {
  query: GetPricesQuery
}

const SubscriptionPriceList = (props: Props) => {
  const { query } = props

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

  return (
    <>
      {(query.query_prices || []).map((price) => {
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
