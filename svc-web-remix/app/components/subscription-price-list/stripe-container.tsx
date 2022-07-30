import { useMemo } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import type { GetStripeConfigQuery } from '~/graphql/generated'

type Props = {
  children?: React.ReactNode
  query: GetStripeConfigQuery
}

const StripeContainer = (props: Props) => {
  const { children, query } = props

  const stripePromise = useMemo(() => {
    return loadStripe(query.query_stripe_config.publishable_key)
  }, [query])

  return <Elements stripe={stripePromise}>{children}</Elements>
}

export { StripeContainer }
