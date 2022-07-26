import { Form, Card, LinkButton, PrimaryButton } from '../retro-ui'
import type { GetUserExchangeKeysByUidQuery } from '~/graphql/generated'

type Props = {
  query: GetUserExchangeKeysByUidQuery
}

const UserExchangeKeysDelete = (props: Props) => {
  const { query } = props

  const userExchangeKeys = query.kc_user_exchange_keys_by_pk!

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
        <LinkButton href="/settings">Cancel</LinkButton>
        <PrimaryButton type="submit">Delete</PrimaryButton>
      </Form>
    </Card>
  )
}

export { UserExchangeKeysDelete }
