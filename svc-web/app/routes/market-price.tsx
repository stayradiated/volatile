import { Link, useLoaderData, Outlet } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { Page } from '~/components/ui'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

type LoaderData = Record<string, unknown>

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  return json<LoaderData>({})
}

const MarketPriceRoute = () => {
  return (
    <Page title="Market Price">
      <ul>
        <li>
          <Link to="BTC-NZD">BTC-NZD</Link>
        </li>
        <li>
          <Link to="ETH-NZD">ETH-NZD</Link>
        </li>
      </ul>
      <Outlet />
    </Page>
  )
}

export default MarketPriceRoute
