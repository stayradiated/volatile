import { gql, useMutation } from '@apollo/client'

import type {
  UpdateDcaOrderEnabledAtMutation as Mutation,
  UpdateDcaOrderEnabledAtMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation updateDCAOrderEnabledAt(
    $dcaOrderUID: uuid!
    $enabledAt: timestamptz
  ) {
    update_kc_dca_order_by_pk(
      pk_columns: { uid: $dcaOrderUID }
      _set: { enabled_at: $enabledAt }
    ) {
      uid
      enabled_at
    }
  }
`

const useUpdateDCAOrderEnabledAt = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (dcaOrderUID: string, enabledAt: null | string) => {
    return mutate({
      variables: {
        dcaOrderUID,
        enabledAt,
      },
    })
  }
}

export { useUpdateDCAOrderEnabledAt }
