import { gql, useMutation } from '@apollo/client'

import type {
  CancelSubscriptionMutation as Mutation,
  CancelSubscriptionMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation CancelSubscription($subscriptionID: String!) {
    cancel_subscription(subscription_id: $subscriptionID) {
      subscription {
        id
        status
      }
    }
  }
`

const useCancelSubscription = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (subscriptionID: string) => {
    return mutate({
      variables: {
        subscriptionID
      },
    })
  }
}

export { useCancelSubscription }
