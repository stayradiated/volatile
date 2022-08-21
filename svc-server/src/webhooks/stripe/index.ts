import { Buffer } from 'node:buffer'
import { errorBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'
import { Stripe } from 'stripe'
import { Pool } from '../../types.js'

import { upsertStripeProduct } from '../../model/stripe-product/index.js'
import {
  upsertStripePrice,
  deleteStripePrice,
} from '../../model/stripe-price/index.js'
import { upsertStripeSubscription } from '../../model/stripe-subscription/index.js'

import { HandlerFn } from '../../util/handler.js'
import { stripe } from '../../util/stripe.js'
import { config } from '../../env.js'

type Input = {
  raw: Buffer
}

type Output = {
  success: boolean
}

type StripeHandlerFn = (
  pool: Pool,
  event: Stripe.Event,
) => Promise<void | Error>

const upsertSubscription: StripeHandlerFn = async (pool, event) => {
  const subscription = event.data.object as Stripe.Subscription
  const error = await upsertStripeSubscription(pool, {
    ID: subscription.id,
    createdAt: fromUnixTime(subscription.created),
    updatedAt: new Date(),
    customerID: String(subscription.customer),
    priceID: subscription.items.data[0]!.price.id,
    quantity: subscription.items.data[0]!.quantity ?? 0,
    cancelAt: subscription.cancel_at
      ? fromUnixTime(subscription.cancel_at)
      : undefined,
    canceledAt: subscription.canceled_at
      ? fromUnixTime(subscription.canceled_at)
      : undefined,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
    currentPeriodEnd: fromUnixTime(subscription.current_period_end),
    currentPeriodStart: fromUnixTime(subscription.current_period_start),
    description: subscription.description ?? undefined,
    status: subscription.status,
  })
  if (error instanceof Error) {
    return error
  }

  return undefined
}

const upsertPrice: StripeHandlerFn = async (pool, event) => {
  const price = event.data.object as Stripe.Price
  const error = await upsertStripePrice(pool, {
    ID: price.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    productID: price.product as string,
    active: price.active,
    billingScheme: price.billing_scheme,
    unitAmount: price.unit_amount ?? undefined,
    currency: price.currency,
    nickname: price.nickname ?? undefined,
    type: price.type,
    recurring: price.recurring
      ? {
          aggregateUsage: price.recurring.aggregate_usage ?? undefined,
          interval: price.recurring.interval,
          intervalCount: price.recurring.interval_count,
          usageType: price.recurring.usage_type,
        }
      : undefined,
  })
  if (error instanceof Error) {
    return error
  }

  return undefined
}

const deletePrice: StripeHandlerFn = async (pool, event) => {
  const price = event.data.object as Stripe.Price
  const error = await deleteStripePrice(pool, {
    ID: price.id,
  })
  if (error instanceof Error) {
    return error
  }

  return undefined
}

const upsertProduct: StripeHandlerFn = async (pool, event) => {
  const product = event.data.object as Stripe.Product
  const error = await upsertStripeProduct(pool, {
    ID: product.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    active: product.active,
    name: product.name,
    description: product.description ?? undefined,
  })
  if (error instanceof Error) {
    return error
  }

  return undefined
}

const stripeWebhookMap: Partial<
  Record<Stripe.WebhookEndpointCreateParams.EnabledEvent, StripeHandlerFn>
> = {
  'customer.subscription.created': upsertSubscription,
  'customer.subscription.updated': upsertSubscription,
  'price.created': upsertPrice,
  'price.updated': upsertPrice,
  'price.deleted': deletePrice,
  'product.created': upsertProduct,
  'product.updated': upsertProduct,
}

const stripeHandler: HandlerFn<Input, Output> = async (context) => {
  const { pool, request } = context

  const signature = request.headers['stripe-signature'] as string

  const event = errorBoundary(() =>
    stripe.webhooks.constructEvent(
      request.body.raw,
      signature,
      config.STRIPE_WEBHOOK_SECRET,
    ),
  )

  if (event instanceof Error) {
    return event
  }

  const handler =
    stripeWebhookMap[
      event.type as Stripe.WebhookEndpointCreateParams.EnabledEvent
    ]

  if (handler) {
    const error = await handler(pool, event)
    if (error instanceof Error) {
      return error
    }
  } else {
    console.warn(`Received stripe webhook event: ${event.type}`)
  }

  return {
    success: true,
  }
}

export { stripeHandler }
