import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect } from '~/utils/redirect.server'
import { CronHistoryDetails } from '~/components/cron-history-details'
import type { CronHistoryFragment } from '~/graphql/generated'

type LoaderData = {
  cronHistory: undefined | CronHistoryFragment
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return safeRedirect(request, '/admin/login')
  }

  const { uid: cronHistoryUid } = params
  invariant(typeof cronHistoryUid === 'string', 'Must have params.uid')

  const query = await sdk.getCronHistory(
    {
      cronHistoryUid,
    },
    {
      'x-hasura-role': 'admin',
      authorization: `Bearer ${session.authToken}`,
    },
  )

  return json<LoaderData>({
    cronHistory: query.cronHistoryByPk ?? undefined,
  })
}

const CronRoute = () => {
  const { cronHistory } = useLoaderData<LoaderData>()

  if (!cronHistory) {
    return 'Could not find item.'
  }

  return <CronHistoryDetails item={cronHistory} />
}

export default CronRoute
