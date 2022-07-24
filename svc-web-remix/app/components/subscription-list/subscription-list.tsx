import { Card } from '../retro-ui'

import { SubscriptionCard } from './subscription-card'
import type { GetSubscriptionsQuery } from '~/graphql/generated'

type Subscription = NonNullable<
  NonNullable<GetSubscriptionsQuery['query_subscriptions']>['subscriptions']
>[0]

type Props = {
  query: GetSubscriptionsQuery
}

const SubscriptionList = (props: Props) => {
  const { query } = props

  const groups = (query.query_subscriptions?.subscriptions ?? []).reduce(
    (groups, item) => {
      if (item.status === 'active') {
        groups.active.push(item)
      } else {
        groups.expired.push(item)
      }

      return groups
    },
    {
      active: [] as Subscription[],
      expired: [] as Subscription[],
    },
  )

  return (
    <>
      <Card>
        <h4>Active</h4>
        {groups.active.map((subscription) => {
          return (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
            />
          )
        })}
      </Card>
      <Card>
        <h4>Expired</h4>
        {groups.expired.map((subscription) => {
          return (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
            />
          )
        })}
      </Card>
    </>
  )
}

export { SubscriptionList }
