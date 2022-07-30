import { format, fromUnixTime } from 'date-fns'

import type { GetSubscriptionsQuery } from '~/graphql/generated'

import { Button } from '../retro-ui'

type Subscription = NonNullable<
  NonNullable<GetSubscriptionsQuery['query_subscriptions']>['subscriptions']
>[0]

type Status = {
  name: string
  isActive: boolean
}

const STATUS: Record<string, Status> = {
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
      <h4>
        <a
          href={`https://dashboard.stripe.com/test/subscriptions/${subscription.id}`}
        >
          {subscription.id}
        </a>
      </h4>

      <h4>Volatile Pro</h4>

      <p>Status: {status.name}</p>

      {status.isActive && (
        <>
          <p>
            Next invoice on{' '}
            {format(
              fromUnixTime(subscription.current_period_end),
              'MMM dd, yyyy',
            )}{' '}
            for {subscription.plan.currency.toUpperCase()} $
            {(subscription.plan.amount / 100).toFixed(2)}
          </p>
          <Button>Cancel</Button>
        </>
      )}
    </section>
  )
}

export { SubscriptionCard }
