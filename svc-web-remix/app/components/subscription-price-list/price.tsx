import styled from 'styled-components'

import { GetPricesQuery } from '~/graphql/generated'
import { formatCurrency } from '~/components/format'

const Container = styled.div<{
  isSelected: boolean
}>`
  cursor: pointer;
  padding: 5px 10px;

  ${(props) =>
    props.isSelected &&
    `
    background: #ccc;
  `}
`

type Price = NonNullable<GetPricesQuery['query_prices']>[0]

type Props = {
  price: Price
  isSelected?: boolean
  onSelect: () => void
}

const Price = (props: Props) => {
  const { price, isSelected = false, onSelect } = props

  return (
    <Container isSelected={isSelected} onClick={onSelect}>
      <h3>
        {formatCurrency(price.unit_amount / 100)} {price.currency.toUpperCase()}{' '}
        / {price.interval}
      </h3>
    </Container>
  )
}

export { Price }
