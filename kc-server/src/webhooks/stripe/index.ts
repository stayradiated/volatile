import { errorBoundary } from '@stayradiated/error-boundary'

import { HandlerFn } from '../../utils/handler.js'
import { stripe } from '../../utils/stripe.js'
import { STRIPE_WEBHOOK_SECRET } from '../../env.js'

type Input = {
  raw: Buffer
}

type Output = {
  success: boolean
}

const stripeHandler: HandlerFn<Input, Output> = async (context) => {
  const { request } = context

  const signature = request.headers['stripe-signature'] as string

  const event = errorBoundary(() =>
    stripe.webhooks.constructEvent(
      request.body.raw,
      signature,
      STRIPE_WEBHOOK_SECRET,
    ),
  )

  if (event instanceof Error) {
    return event
  }

  console.log(event)

  return {
    success: true,
  }
}

export { stripeHandler }
