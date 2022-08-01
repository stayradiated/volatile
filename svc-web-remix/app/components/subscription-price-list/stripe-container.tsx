import { useMemo } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

type Props = {
  children?: React.ReactNode
  publishableKey: string
}

const StripeContainer = (props: Props) => {
  const { children, publishableKey } = props

  const stripePromise = useMemo(async () => {
    return loadStripe(publishableKey)
  }, [publishableKey])

  return <Elements stripe={stripePromise}>{children}</Elements>
}

export { StripeContainer }
