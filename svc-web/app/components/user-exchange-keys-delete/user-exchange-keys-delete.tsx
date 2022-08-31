import { Link } from '@remix-run/react'
import { Form, Card, PrimaryButton } from '../retro-ui'
import type { GetUserExchangeKeysByUidQuery } from '~/graphql/generated'

type Props = {
  query: GetUserExchangeKeysByUidQuery
}

const UserExchangeKeysDelete = (props: Props) => {
  const { query } = props

  const userExchangeKeys = query.userExchangeKeysByPk!

  return (
    <Card>
      <Form
        name="UserExchangeKeysDelete"
        method="post"
        action={`/settings/${userExchangeKeys.uid}/delete`}
      >
        <p>
          Are you sure you want to delete User Exchange Keys "
          {userExchangeKeys.description}"?
        </p>
        <Form.Item></Form.Item>
        <Link to="/settings">Cancel</Link>
        <PrimaryButton type="submit">Delete</PrimaryButton>
      </Form>
    </Card>
  )
}

export { UserExchangeKeysDelete }
