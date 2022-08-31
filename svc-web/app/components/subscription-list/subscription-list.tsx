import { Card } from '../retro-ui'

import { SubscriptionCard } from './subscription-card'
import type { GetSubscriptionsQuery } from '~/graphql/generated'

type Subscription = GetSubscriptionsQuery['stripeSubscription'][number]

type Props = {
  query: GetSubscriptionsQuery
}

const SubscriptionList = (props: Props) => {
  const { query } = props

  const groups = query.stripeSubscription.reduce<
    Record<string, Subscription[]>
  >((groups, item) => {
    const group = groups[item.status] ?? []
    group.push(item)
    groups[item.status] = group
    return groups
  }, {})

  return (
    <>
      {Object.entries(groups).map(([name, group]) => (
        <Card key={name}>
          <h4>status:{name}</h4>
          {group.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
            />
          ))}
        </Card>
      ))}
    </>
  )
}

export { SubscriptionList }
