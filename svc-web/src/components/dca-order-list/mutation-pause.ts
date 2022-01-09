import { gql, useMutation } from '@apollo/client'

import type {
  UpdateDcaOrderEnabledMutation as Mutation,
  UpdateDcaOrderEnabledMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation updateDCAOrderEnabled(
    $dcaOrderUID: uuid!
    $enabled: Boolean!
  ) {
    update_dca_order(
      dca_order_uid: $dcaOrderUID
      enabled: $enabled
    ) {
      dca_order {
        uid
        enabled_at
      }
    }
  }
`

const useUpdateDCAOrderEnabled = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (dcaOrderUID: string, enabled: boolean) => {
    return mutate({
      variables: {
        dcaOrderUID,
        enabled,
      },
    })
  }
}

export { useUpdateDCAOrderEnabled }
