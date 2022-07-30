import { Buffer } from 'buffer'
import { errorBoundary } from '@stayradiated/error-boundary'
import { fromUnixTime } from 'date-fns'

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

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Record<string, any>
      const error = await upsertStripeSubscription(pool, {
        ID: subscription['id'],
        createdAt: fromUnixTime(subscription['created']),
        updatedAt: new Date(),
        customerID: String(subscription['customer']),
        priceID: subscription['items']['data'][0]!['price']['id'],
        quantity: subscription['items']['data'][0]!['quantity' ]?? 0,
        cancelAt: subscription['cancel_at']
          ? fromUnixTime(subscription['cancel_at'])
          : undefined,
        canceledAt: subscription['canceled_at']
          ? fromUnixTime(subscription['canceled_at'])
          : undefined,
        cancelAtPeriodEnd: subscription['cancel_at_period_end'],
        currentPeriodEnd: fromUnixTime(subscription['current_period_end']),
        currentPeriodStart: fromUnixTime(subscription['current_period_start']),
        description: subscription['description' ]?? undefined,
        status: subscription['status'],
      })
      if (error instanceof Error) {
        return error
      }

      break
    }

    case 'price.created':
    case 'price.updated': {
      const price = event.data.object as Record<string, any>
      const error = await upsertStripePrice(pool, {
        ID: price['id'],
        createdAt: new Date(),
        updatedAt: new Date(),
        productID: price['product'],
        active: price['active'],
        billingScheme: price['billing_scheme'],
        unitAmount: price['unit_amount'],
        currency: price['currency'],
        nickname: price['nickname'],
        type: price['type'],
        recurring: {
          aggregateUsage: price['recurring']?.aggregate_usage,
          interval: price['recurring']?.interval,
          intervalCount: price['recurring']?.interval_count,
          usageType: price['recurring']?.usage_type,
        },
      })
      if (error instanceof Error) {
        return error
      }

      break
    }

    case 'price.deleted': {
      const price = event.data.object as Record<string, any>
      const error = await deleteStripePrice(pool, {
        ID: price['id'],
      })
      if (error instanceof Error) {
        return error
      }

      break
    }

    case 'product.created':
    case 'product.updated': {
      const product = event.data.object as Record<string, any>
      const error = await upsertStripeProduct(pool, {
        ID: product['id'],
        createdAt: new Date(),
        updatedAt: new Date(),
        active: product['active'],
        name: product['name'],
        description: product['description'],
      })
      if (error instanceof Error) {
        return error
      }

      break
    }

    default:
      console.warn(`Received stripe webhook event: ${event.type}`)
      break
  }

  return {
    success: true,
  }
}

export { stripeHandler }
