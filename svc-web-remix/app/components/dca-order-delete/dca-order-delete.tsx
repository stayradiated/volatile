import { Form, Card, LinkButton, PrimaryButton } from '../retro-ui'

import type { GetDcaOrderDeleteQuery } from '~/graphql/generated'

type Props = {
  query: GetDcaOrderDeleteQuery
}

const DCAOrderDelete = (props: Props) => {
  const { query } = props

  const dcaOrder = query.kc_dca_order_by_pk!

  return (
    <Card>
      <Form
        name="DCAOrderDelete"
        method="post"
        action={`/dca-orders/${dcaOrder.uid}/delete`}
      >
        <Form.Item>
          <div>Are you sure you want to delete DCA Order {dcaOrder.uid}?</div>
        </Form.Item>
        <Form.Item>
          <LinkButton href="/dca-orders">Cancel</LinkButton>
          <PrimaryButton>Delete</PrimaryButton>
        </Form.Item>
      </Form>
    </Card>
  )
}

export { DCAOrderDelete }
