import { gql, useMutation } from '@apollo/client'

import {
  CreateSubscriptionMutation as Mutation,
  CreateSubscriptionMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation createSubscription($priceId: String!) {
    create_subscription(price_id: $priceId) {
      client_secret
      subscription_id
    }
  }
`

const useCreateSubscription = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (variables: MutationVariables) => {
    return mutate({
      variables,
    })
  }
}

export { useCreateSubscription }
