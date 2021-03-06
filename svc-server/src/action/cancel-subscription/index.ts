import { errorBoundary } from '@stayradiated/error-boundary'

import { stripe } from '../../util/stripe.js'
import { MissingRequiredArgumentError } from '../../util/error.js'

import { ActionHandlerFn } from '../../util/action-handler.js'

import { getOrCreateCustomer } from '../../model/customer/index.js'

type Input = {
  subscription_id: string
}

type Output = {
  subscription: unknown
}

const cancelSubscription: ActionHandlerFn<Input, Output> = async (context) => {
  const { pool, input, session } = context
  const { userUID } = session
  if (!userUID) {
    return new MissingRequiredArgumentError({
      message: 'userUID is required',
      context: { userUID },
    })
  }

  const { subscription_id: subscriptionID } = input

  const customer = await getOrCreateCustomer(pool, userUID)
  if (customer instanceof Error) {
    return customer
  }

  const deletedSubscription = await errorBoundary(async () => {
    return stripe.subscriptions.del(subscriptionID)
  })

  if (deletedSubscription instanceof Error) {
    return deletedSubscription
  }

  return { subscription: deletedSubscription }
}

export { cancelSubscription }
