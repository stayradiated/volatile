import { gql, useQuery } from '@apollo/client'

import { Spin, Alert, Card } from '../retro-ui'

import type {
  GetSubscriptionsQuery as Query,
  GetSubscriptionsQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { SubscriptionCard } from './subscription-card'

type Subscription = NonNullable<NonNullable<Query['query_subscriptions']>['subscriptions']>[0]

const QUERY = gql`
  query getSubscriptions {
    query_subscriptions {
      subscriptions {
        id
        status
        created
        current_period_end
        plan {
          interval
          interval_count
          amount
          currency
        }
      }
    }
  }
`

const SubscriptionList = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const groups = (data?.query_subscriptions?.subscriptions ?? []).reduce((groups, item) => {
    if (item.status === 'active') {
      groups.active.push(item)
    } else {
      groups.expired.push(item)
    }
    return groups
  }, {
    active: [] as Subscription[],
    expired: [] as Subscription[]
  })

  return (
    <>
      <Card>
      <h4>Active</h4>
      {groups.active.map((subscription) => {
        return (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        )
      })}
    </Card>
      <Card>
      <h4>Expired</h4>
      {groups.expired.map((subscription) => {
        return (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        )
      })}
      </Card>
    </>
  )
}

export { SubscriptionList }
