import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json, redirect } from '@remix-run/node'
import { makeDomainFunction, inputFromForm } from 'remix-domains'
import * as z from 'zod'

import { Navigation } from '~/components/navigation'
import { Card } from '~/components/retro-ui'
import { GetPricesQuery } from '~/graphql/generated'
import { SubscriptionPriceList } from '~/components/subscription-price-list'
import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { loginRedirect } from '~/utils/redirect.server'

const createSubscription = makeDomainFunction(
  z.object({
    priceId: z.string(),
  }),
  z.object({
    authToken: z.string(),
  }),
)(async (input, environment) => {
  const { priceId } = input
  const { authToken } = environment

  return sdk.createStripeSubscription(
    {
      priceId,
    },
    {
      authorization: `Bearer ${authToken}`,
    },
  )
})

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { authToken } = session

  const result = await createSubscription(await inputFromForm(request), {
    authToken,
  })

  if (!result.success) {
    console.error(result)
    return json({ error: 'Could not create subscription.' })
  }

  const { subscription_id: id } = result.data.action_create_stripe_subscription

  return redirect(`/subscription/checkout?id=${id}`)
}

interface LoaderData {
  email: string,
  query: GetPricesQuery
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  const { email, authToken } = session

  const query = await sdk.getPrices(
    {},
    {
      authorization: `Bearer ${authToken}`,
      'x-hasura-role': 'user',
    },
  )

  return json<LoaderData>({
    email,
    query,
  })
}

const SubscriptionRoute = () => {
  const { email, query } = useLoaderData<LoaderData>()

  return (
    <>
      <Navigation isAuthenticatedUser email={email} />
      <Card>
        <SubscriptionPriceList query={query} />
      </Card>
    </>
  )
}

export default SubscriptionRoute
