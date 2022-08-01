import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentIntent } from '@stripe/stripe-js'

type Props = {
  clientSecret: string
}

const StripeForm = (props: Props) => {
  const { clientSecret } = props

  const [messages, _setMessages] = useState<string>('')
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent>()

  // Helper for displaying status messages.
  const setMessage = (message: string) => {
    _setMessages(`${messages}\n\n${message}`)
  }

  // Initialize an instance of stripe.
  const stripe = useStripe()
  const elements = useElements()

  if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return <p>Loading...</p>
  }

  // When the subscribe-form is submitted we do a few things:
  //
  //   1. Tokenize the payment method
  //   2. Create the subscription
  //   3. Handle any next actions like 3D Secure that are required for SCA.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      setMessage('No card element found.')
      return null
    }

    // Use card Element to tokenize payment details
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      },
    )

    if (error) {
      // Show error and collect new card details.
      setMessage(error.message ?? 'Unknown error occurred.')
      return null
    }

    if (!paymentIntent) {
      setMessage('What?')
      return null
    }

    setPaymentIntent(paymentIntent)
  }

  if (paymentIntent && paymentIntent.status === 'succeeded') {
    console.log('SUCCESS')
    return null
  }

  return (
    <>
      <h1>Subscribe</h1>

      <p>
        Try the successful test card: <span>4242424242424242</span>.
      </p>

      <p>
        Try the test card that requires SCA: <span>4000002500003155</span>.
      </p>

      <p>
        Use any <i>future</i> expiry date, CVC,5 digit postal code
      </p>

      <hr />

      <form onSubmit={handleSubmit}>
        <CardElement />

        <button>Subscribe</button>

        <div>{messages}</div>
      </form>
    </>
  )
}

export { StripeForm }
