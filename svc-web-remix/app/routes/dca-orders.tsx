import { Outlet } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'

import { Page } from '~/components/ui'
import { getSessionData } from '~/utils/auth.server'
import { loginRedirect } from '~/utils/redirect.server'

interface LoaderData {}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return loginRedirect(request, session)
  }

  return json<LoaderData>({})
}

const DcaOrdersRoute = () => {
  return (
    <Page title="Dca Orders">
      <Outlet />
    </Page>
  )
}

export default DcaOrdersRoute
