import { Card, LinkButton, PrimaryButton } from '../retro-ui'

import type { GetDcaOrderDeleteQuery } from '~/graphql/generated'

type Props = {
  query: GetDcaOrderDeleteQuery
}

const DCAOrderDelete = (props: Props) => {
  const { query } = props

  const order = query.kc_dca_order_by_pk!

  return (
    <Card>
      <div>Are you sure you want to delete DCA Order {order.uid}?</div>
      <LinkButton href="/dca-orders">Cancel</LinkButton>
      <PrimaryButton>Delete</PrimaryButton>
    </Card>
  )
}

export { DCAOrderDelete }
