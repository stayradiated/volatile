import type {
  GetUserExchangeKeysModalDeleteQuery as Query,
  GetUserExchangeKeysModalDeleteQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Card, Button, Spin, Alert } from '../retro-ui'

type Props = {
  isOpen?: boolean
  userExchangeKeysUID: string
  onCancel?: () => void
  onFinish?: () => void
}

const UserExchangeKeysModalDelete = (props: Props) => {
  const { isOpen, userExchangeKeysUID, onCancel, onFinish } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    skip: !isOpen,
    variables: {
      userExchangeKeysUID,
    },
  })

  const deleteUserExchangeKeys = useDeleteUserExchangeKeys()

  if (loading) {
    return (
      <Card>
        <Spin />
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <Alert message={error.message} type="error" />
      </Card>
    )
  }

  if (!isOpen) {
    return null
  }

  const userExchangeKeys = data?.kc_user_exchange_keys_by_pk!

  const handleDelete = async () => {
    await deleteUserExchangeKeys(userExchangeKeys.uid)
    if (typeof onFinish === 'function') {
      onFinish()
    }
  }

  return (
    <Card>
      <div>
        Are you sure you want to delete User Exchange Keys "
        {userExchangeKeys.description}"?
      </div>
      <Button type="link" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="primary" onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  )
}

export { UserExchangeKeysModalDelete }
