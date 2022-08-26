import * as z from 'zod'
import type { ActionHandler } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'

const PRICE_ID = 'price_1JGejYDbaust07uDDS1lHEus'

const schema = {
  input: {
    eventType: z.string(),
    data: z.record(z.unknown()),
  },
  output: {
    sessionUrl: z.string(),
  },
}

const createCheckoutSessionHandler: ActionHandler<typeof schema> = {
  schema,
  async handler(context) {
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
      sessionUrl: session.url!,
    }
  },
}

export { createCheckoutSessionHandler }
