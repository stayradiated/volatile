import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { Spin, Alert } from '../retro-ui'

import type {
  GetStripeConfigQuery as Query,
  GetStripeConfigQueryVariables as QueryVariables,
} from '../../utils/graphql'

const QUERY = gql`
  query getStripeConfig {
    query_stripe_config {
      publishable_key
    }
  }
`

type Props = {
  children?: React.ReactNode
}

const StripeContainer = (props: Props) => {
  const { children } = props
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const stripePromise = useMemo(() => {
    if (!data) {
      return null
    }

    console.log('Loading stripe...', data.query_stripe_config.publishable_key)
    return loadStripe(data.query_stripe_config.publishable_key)
  }, [data])

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return <Elements stripe={stripePromise}>{children}</Elements>
}

export { StripeContainer }

{
  /*  */
}

{
  /* <h1>Subscribe</h1> */
}

{
  /*  */
}

{
  /* <p> */
}

{
  /*   Try the successful test card: <span>4242424242424242</span>. */
}

{
  /* </p> */
}

{
  /*  */
}

{
  /* <p> */
}

{
  /*   Try the test card that requires SCA: <span>4000002500003155</span>. */
}

{
  /* </p> */
}

{
  /*  */
}

{
  /* <p> */
}

{
  /*   Use any <i>future</i> expiry date, CVC,5 digit postal code */
}

{
  /* </p> */
}

{
  /*  */
}

{
  /* <hr /> */
}

{
  /*  */
}

{
  /* <form onSubmit={handleSubmit}> */
}

{
  /*   <label> */
}

{
  /*     Full name */
}

{
  /*     <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /> */
}

{
  /*   </label> */
}

{
  /*  */
}

{
  /*   <CardElement /> */
}

{
  /*  */
}

{
  /*   <button> */
}

{
  /*     Subscribe */
}

{
  /*   </button> */
}

{
  /*  */
}

{
  /*   <div>{messages}</div> */
}

{
  /* </form> */
}
