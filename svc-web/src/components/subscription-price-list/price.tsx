import cx from 'classnames'

import { GetPricesQuery } from '../../utils/graphql'
import { formatCurrency } from '../../utils/format'

import styles from './price.module.css'

type Price = NonNullable<GetPricesQuery['query_prices']>[0]

type Props = {
  price: Price
  isSelected?: boolean
  onSelect: () => void
}

const Price = (props: Props) => {
  const { price, isSelected, onSelect } = props

  return (
    <div
      onClick={onSelect}
      className={cx(styles.container, { [styles.isSelected]: isSelected })}
    >
      <h3>
        {formatCurrency(price.unit_amount / 100)} {price.currency.toUpperCase()}{' '}
        / {price.interval}
      </h3>
    </div>
  )
}

export { Price }
