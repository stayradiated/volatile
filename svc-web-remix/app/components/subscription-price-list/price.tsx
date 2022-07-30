import styled from 'styled-components'

import { GetPricesQuery } from '~/graphql/generated'
import { formatCurrency } from '~/components/format'

const Container = styled.div`
  cursor: pointer;
  padding: 5px 10px;
`

type Price = NonNullable<GetPricesQuery['query_prices']>[0]

type Props = {
  price: Price
}

const Price = (props: Props) => {
  const { price } = props

  return (
    <Container>
      <input id={price.id} type='radio' name='priceId' value={price.id}/>
      <label htmlFor={price.id}>
        {formatCurrency(price.unit_amount / 100)} {price.currency.toUpperCase()}{' '}
        / {price.interval}
      </label>
    </Container>
  )
}

export { Price }
