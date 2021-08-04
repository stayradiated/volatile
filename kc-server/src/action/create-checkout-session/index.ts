import { ActionHandlerFn } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'

const PRICE_ID = 'price_1JGejYDbaust07uDDS1lHEus'

type Input = {
  eventType: string
  data: Record<string, unknown>
}

type Output = {
  session_url: string
}

const createCheckoutSessionHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { input } = context
  console.log(input)

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url:
      'http://localhost:3001/success.html?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3001/canceled.html',
  })

  console.log(session)

  return {
    session_url: session.url!,
  }
}

export { createCheckoutSessionHandler }
