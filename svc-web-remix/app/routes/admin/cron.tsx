import { LoaderFunction, json } from '@remix-run/node'
import { useLoaderData, Link, Outlet } from '@remix-run/react'
import { promiseHash } from 'remix-utils'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect } from '~/utils/redirect.server'
import { Card } from '~/components/retro-ui'

type LoaderData = {
  taskIDs: string[]
  cronHistoryList: Array<{
    uid: string
    task_id: string
    created_at: string
    state: string
  }>
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return safeRedirect(request, '/admin/login')
  }

  const { searchParams } = new URL(request.url)
  const filterByTaskID = searchParams.get('taskID')

  const query = await promiseHash({
    getCronHistoryTaskIDs: sdk.getCronHistoryTaskIDs(
      {},
      {
        'x-hasura-role': 'admin',
        authorization: `Bearer ${session.authToken}`,
      },
    ),
    getCronHistoryList: sdk.getCronHistoryList(
      {
        where: filterByTaskID
          ? {
              task_id: { _eq: filterByTaskID },
            }
          : undefined,
      },
      {
        'x-hasura-role': 'admin',
        authorization: `Bearer ${session.authToken}`,
      },
    ),
  })

  const taskIDs = query.getCronHistoryTaskIDs.cron_history_aggregate.nodes.map(
    (node) => {
      return node.task_id
    },
  )

  const cronHistoryList = query.getCronHistoryList.cron_history

  return json<LoaderData>({
    taskIDs,
    cronHistoryList,
  })
}

const CronRoute = () => {
  const { taskIDs, cronHistoryList } = useLoaderData<LoaderData>()

  return (
    <>
      {' '}
      <Card width={1200}>
        <ul>
          <li>
            <Link to=".">Show All</Link>
          </li>
          {taskIDs.map((taskID) => (
            <li>
              <Link to={`.?taskID=${taskID}`}>{taskID}</Link>
            </li>
          ))}
        </ul>
        {cronHistoryList.map((item) => (
          <h2>
            <Link to={`./${item.uid}`}>
              {item.created_at} {item.task_id} {item.state}
            </Link>
          </h2>
        ))}
      </Card>
      <Outlet />
    </>
  )
}

export default CronRoute
