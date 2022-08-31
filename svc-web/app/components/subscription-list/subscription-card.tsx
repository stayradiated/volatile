import { format, parseISO } from 'date-fns'

import { UpdateSubscriptionButton } from './update-subscription-button'
import type { StripeSubscriptionFragment } from '~/graphql/generated'

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
  subscription: StripeSubscriptionFragment
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

      <h4>{subscription.stripePrice.stripeProduct.name}</h4>

      {status.isActive && <p>You have an active subscription :)</p>}

      <ul>
        <li>Status: {status.name}</li>
        <li>
          Interval: {subscription.stripePrice.recurringIntervalCount}{' '}
          {subscription.stripePrice.recurringInterval}
        </li>
        <li>
          Price: $
          {((subscription.stripePrice.unitAmount ?? 0) / 100).toFixed(2)}{' '}
          {subscription.stripePrice.currency.toUpperCase()}
        </li>
        <li>
          {' '}
          Period Start:{' '}
          {format(
            parseISO(subscription.currentPeriodStart),
            'MMM dd, yyyy',
          )}{' '}
        </li>
        <li>
          {' '}
          Period End:{' '}
          {format(parseISO(subscription.currentPeriodEnd), 'MMM dd, yyyy')}{' '}
        </li>
        <li>
          ID: <code>{subscription.id}</code>{' '}
        </li>
      </ul>

      {subscription.cancelAtPeriodEnd && subscription.cancelAt && (
        <>
          <strong>
            Your subscription will end on{' '}
            {format(parseISO(subscription.cancelAt), 'MMM dd, yyyy')}.
          </strong>{' '}
          {subscription.canceledAt && (
            <em>
              You chose to cancel your subscription on{' '}
              {format(parseISO(subscription.canceledAt), 'MMM dd, yyyy')}.
            </em>
          )}
          <UpdateSubscriptionButton
            subscriptionID={subscription.id}
            cancelAtPeriodEnd={false}
          />
        </>
      )}

      {!subscription.cancelAt && status.isActive && (
        <UpdateSubscriptionButton
          subscriptionID={subscription.id}
          cancelAtPeriodEnd={true}
        />
      )}
    </section>
  )
}

export { SubscriptionCard }
