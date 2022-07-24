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
    if (!query) {
      return null
    }

    console.log('Loading stripe...', query.stripe_config.publishable_key)
    return loadStripe(query.stripe_config.publishable_key)
  }, [query])

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
