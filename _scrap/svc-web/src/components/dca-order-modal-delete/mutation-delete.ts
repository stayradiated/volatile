import { gql, useMutation } from '@apollo/client'

import type {
  GetDcaOrderListByUidQuery as Fragment,
  DeleteDcaOrderMutation as Mutation,
  DeleteDcaOrderMutationVariables as MutationVariables,
} from '../../utils/graphql'

type DCAOrder = Fragment['kc_dca_order'][0]

const MUTATION = gql`
  mutation deleteDCAOrder($dcaOrderUID: uuid!) {
    delete_kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
    }
  }
`

const QUERY_FRAGMENT = gql`
  query getDCAOrderListByUID {
    kc_dca_order(order_by: { enabled_at: desc_nulls_last }) {
      uid
    }
  }
`

const useDeleteDCAOrder = () => {
  const [mutate] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (dcaOrderUID: string) => {
    return mutate({
      variables: { dcaOrderUID },
      update(cache) {
        const list = cache.readQuery<Fragment>({
          query: QUERY_FRAGMENT,
        })
        const listNext = list?.kc_dca_order.filter(
          (item: DCAOrder) => item.uid !== dcaOrderUID,
        )

        cache.writeQuery({
          query: QUERY_FRAGMENT,
          data: { kc_dca_order: listNext },
        })
      },
    })
  }
}

export { useDeleteDCAOrder }
