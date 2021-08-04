import { errorBoundary } from '@stayradiated/error-boundary'

import { ActionHandlerFn } from '../../util/action-handler.js'
import { stripe } from '../../util/stripe.js'
import { STRIPE_WEBHOOK_SECRET } from '../../env.js'

type Input = {
  api_version: string
  created: number
  data: unknown
  id: string
  livemode: boolean
  object: string
  pending_webhooks: number
  request: unknown
  type: string
}
type Output = {
  success: boolean
}

const webhookHandler: ActionHandlerFn<Input, Output> = async (context) => {
  const { input, headers } = context

  const signature = headers['stripe-signature'] as string

  const originalInput = JSON.stringify(
    {
      created: input.created,
      livemode: input.livemode,
      id: input.id,
      type: input.type,
      object: input.object,
      request: input.request,
      pending_webhooks: input.pending_webhooks,
      api_version: input.api_version,
      data: input.data,
    },
    null,
    2,
  )

  console.log(originalInput)

  const event = errorBoundary(() =>
    stripe.webhooks.constructEvent(
      originalInput,
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

export { webhookHandler }
