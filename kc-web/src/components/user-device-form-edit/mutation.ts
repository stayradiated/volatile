import { gql, useMutation } from '@apollo/client'

import type {
  UpdateUserDeviceMutation,
  UpdateUserDeviceMutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation updateUserDevice(
    $userDeviceUID: uuid!
    $name: String
  ) {
    update_kc_user_device_by_pk(
      pk_columns: {uid: $userDeviceUID},
      _set: {name: $name}
    ) {
      uid
      name
    }
  }
`

const useUpdateUserDevice = () => {
  const [mutate] = useMutation<
    UpdateUserDeviceMutation,
    UpdateUserDeviceMutationVariables
  >(MUTATION)

  return async (variables: UpdateUserDeviceMutationVariables) => {
    return mutate({ variables })
  }
}

export { useUpdateUserDevice }
