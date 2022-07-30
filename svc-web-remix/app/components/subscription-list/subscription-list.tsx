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

  const groups = (query.query_subscriptions?.subscriptions ?? []).reduce<Record<string, Subscription[]>>(
    (groups, item) => {
      const group = groups[item.status] ?? []
      group.push(item)
      groups[item.status] = group
      return groups
    },
    {},
  )

  console.log(groups)

  return (
    <>
      {Object.entries(groups).map(([name, group]) => (
        <Card key={name}>
          <h4>{name}</h4>
          {group.map((subscription) => (
            <SubscriptionCard key={subscription.id} subscription={subscription} />
          ))}
        </Card>
    ))}
    </>
  )
}

export { SubscriptionList }
