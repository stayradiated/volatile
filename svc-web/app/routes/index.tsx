import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { getSessionData, commitSession } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role === 'guest') {
    return redirect('/login', {
      headers: {
        'set-cookie': await commitSession(session.cookie),
      },
    })
  }

  return redirect('/trades', {
    headers: {
      'set-cookie': await commitSession(session.cookie),
    },
  })
}
