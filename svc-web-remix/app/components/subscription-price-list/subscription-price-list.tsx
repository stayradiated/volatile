import { Form } from '@remix-run/react'

import { PrimaryButton } from '../retro-ui'

import { Price } from './price'

import type { GetPricesQuery } from '~/graphql/generated'

type Props = {
  query: GetPricesQuery
}

const SubscriptionPriceList = (props: Props) => {
  const { query } = props

  const products = query.kc_stripe_product

  return (
    <>
      <Form method="post">
        {products.map((product) => {
          return (
            <>
              <strong>{product.name}</strong>
              {product.stripe_prices.map((price) => {
                return <Price key={price.id} price={price} />
              })}
            </>
          )
        })}

        <PrimaryButton type="submit" name="_action" value="createSubscription">
          Create Subscription
        </PrimaryButton>
      </Form>
    </>
  )
}

export { SubscriptionPriceList }
