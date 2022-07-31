import styled from 'styled-components'

import { GetPricesQuery } from '~/graphql/generated'
import { formatCurrency } from '~/components/format'

const Container = styled.div`
  cursor: pointer;
  padding: 5px 10px;
`

type Price = NonNullable<
  GetPricesQuery['kc_stripe_product'][number]['stripe_prices']
>[number]

type Props = {
  price: Price
}

const Price = (props: Props) => {
  const { price } = props

  return (
    <Container>
      <input id={price.id} type="radio" name="priceId" value={price.id} />
      <label htmlFor={price.id}>
        {formatCurrency((price.unit_amount ?? 0) / 100)}{' '}
        {price.currency.toUpperCase()} / {price.recurring_interval_count}{' '}
        {price.recurring_interval}
      </label>
    </Container>
  )
}

export { Price }
