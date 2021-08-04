import { ActionHandlerFn } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'

import { getOrCreateCustomer } from '../../model/customer/index.js'

const PRICE_ID = 'price_1JGejYDbaust07uDDS1lHEus'

type Input = Record<string, unknown>

type Output = {
  session_url: string
}

const customerCheckoutSessionHandler: ActionHandlerFn<Input, Output> = async (
  context,
) => {
  const { pool, session } = context
  const { userUID } = session
  if (!userUID) {
    return new Error('userUID is required')
  }

  const customer = await getOrCreateCustomer(pool, userUID)
  if (customer instanceof Error) {
    return customer
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customer.customerID,
    // Customer_email: userEmail,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    success_url:
      'http://localhost:3001/success.html?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3001/canceled.html',
  })

  console.log(checkoutSession)

  return {
    session_url: checkoutSession.url!,
  }
}

export { customerCheckoutSessionHandler }
