import { LoaderFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect } from '~/utils/redirect.server'
import { CronHistoryDetails } from '~/components/cron-history-details'
import { GetCronHistoryQuery } from '~/graphql/generated'

type LoaderData = {
  query: GetCronHistoryQuery
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return safeRedirect(request, '/admin/login')
  }

  const { uid: cronHistoryUID } = params
  invariant(typeof cronHistoryUID === 'string', 'Must have params.uid')

  const query = await sdk.getCronHistory(
    {
      cronHistoryUID,
    },
    {
      'x-hasura-role': 'admin',
      authorization: `Bearer ${session.authToken}`,
    },
  )

  return json<LoaderData>({
    query,
  })
}

const CronRoute = () => {
  const { query } = useLoaderData<LoaderData>()

  const item = query.cron_history_by_pk
  if (!item) {
    return 'Could not find item.'
  }

  return <CronHistoryDetails item={item} />
}

export default CronRoute
