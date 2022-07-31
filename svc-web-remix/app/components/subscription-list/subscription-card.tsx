import { format, parseISO } from 'date-fns'
import { Link, Form } from '@remix-run/react'

import type { GetSubscriptionsQuery } from '~/graphql/generated'

import { PrimaryButton } from '~/components/retro-ui'

type Subscription = NonNullable<
  GetSubscriptionsQuery['kc_stripe_subscription'][number]
>

type Status = {
  name: string
  isActive: boolean
}

const STATUS: Record<string, Status> = {
  incomplete: { name: 'Incomplete', isActive: false },
  active: { name: 'Active', isActive: true },
  past_due: { name: 'Past due', isActive: true },
  canceled: { name: 'Cancelled', isActive: false },
  incomplete_expired: { name: 'Expired', isActive: false },
}

type Props = {
  subscription: Subscription
}

const SubscriptionCard = (props: Props) => {
  const { subscription } = props

  const status = STATUS[subscription.status] ?? {
    name: subscription.status,
    isActive: false,
  }

  return (
    <section>
      <hr />

      <h4>{subscription.stripe_price.stripe_product.name}</h4>
      <ul>
        <li>Status: {status.name}</li>
        <li>
          Interval: {subscription.stripe_price.recurring_interval_count}{' '}
          {subscription.stripe_price.recurring_interval}
        </li>
        <li>
          Price: $
          {((subscription.stripe_price.unit_amount ?? 0) / 100).toFixed(2)}{' '}
          {subscription.stripe_price.currency.toUpperCase()}
        </li>
        <li>
          {' '}
          Period Start:{' '}
          {format(
            parseISO(subscription.current_period_start),
            'MMM dd, yyyy',
          )}{' '}
        </li>
        <li>
          {' '}
          Period End:{' '}
          {format(
            parseISO(subscription.current_period_end),
            'MMM dd, yyyy',
          )}{' '}
        </li>
        <li>
          ID: <code>{subscription.id}</code>{' '}
        </li>
      </ul>

      {subscription.cancel_at && (
        <>
          <strong>
            Your subscription will end on{' '}
            {format(parseISO(subscription.cancel_at), 'MMM dd, yyyy')}.
          </strong>{' '}
          <em>
            You chose to cancel your subscription on{' '}
            {format(parseISO(subscription.canceled_at), 'MMM dd, yyyy')}.
          </em>
          <Form method="post">
            <input
              type="hidden"
              name="subscriptionID"
              value={subscription.id}
            />
            <PrimaryButton name="_action" value="resumeStripeSubscription">
              Uncancel
            </PrimaryButton>
          </Form>
        </>
      )}

      {!subscription.canceled_at && status.isActive && (
        <>
          <Form method="post">
            <input
              type="hidden"
              name="subscriptionID"
              value={subscription.id}
            />
            <PrimaryButton name="_action" value="cancelStripeSubscription">
              Cancel
            </PrimaryButton>
          </Form>
        </>
      )}
    </section>
  )
}

export { SubscriptionCard }
