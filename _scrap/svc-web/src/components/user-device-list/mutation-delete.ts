import { useCallback } from 'react'
import { gql, useMutation } from '@apollo/client'

import {
  GetUserDeviceListByUidQuery,
  DeleteUserDeviceMutation,
  DeleteUserDeviceMutationVariables,
} from '../../utils/graphql'

type UserDevice = GetUserDeviceListByUidQuery['kc_user_device'][0]

const MUTATION = gql`
  mutation deleteUserDevice($userDeviceUID: uuid!) {
    delete_kc_user_device_by_pk(uid: $userDeviceUID) {
      uid
    }
  }
`

const QUERY_FRAGMENT = gql`
  query getUserDeviceListByUID {
    kc_user_device(order_by: { accessed_at: desc }) {
      uid
    }
  }
`

const useDeleteUserDevice = () => {
  const [mutate] = useMutation<
    DeleteUserDeviceMutation,
    DeleteUserDeviceMutationVariables
  >(MUTATION)

  const deleteUserDevice = useCallback(
    (userDeviceUID: string) => {
      mutate({
        variables: {
          userDeviceUID,
        },
        update(cache) {
          const list = cache.readQuery<GetUserDeviceListByUidQuery>({
            query: QUERY_FRAGMENT,
          })
          const listNext = list?.kc_user_device?.filter(
            (item: UserDevice) => item.uid !== userDeviceUID,
          )

          cache.writeQuery({
            query: QUERY_FRAGMENT,
            data: { kc_user_device: listNext },
          })
        },
      })
    },
    [mutate],
  )

  return deleteUserDevice
}

export { useDeleteUserDevice }
