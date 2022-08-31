import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { getSessionData, commitSession } from '~/utils/auth.server'
import { LandingPage } from '~/components/landing-page'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role !== 'guest') {
    return redirect('/trades', {
      headers: {
        'set-cookie': await commitSession(session.cookie),
      },
    })
  }

  return null
}

const IndexRoute = () => {
  return <LandingPage />
}

export default IndexRoute
