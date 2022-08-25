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
    taskId: string
    createdAt: string
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
              taskId: { _eq: filterByTaskID },
            }
          : undefined,
      },
      {
        'x-hasura-role': 'admin',
        authorization: `Bearer ${session.authToken}`,
      },
    ),
  })

  const taskIDs = query.getCronHistoryTaskIDs.cronHistoryAggregate.nodes.map(
    (node) => {
      return node.taskId
    },
  )

  const cronHistoryList = query.getCronHistoryList.cronHistory

  return json<LoaderData>({
    taskIDs,
    cronHistoryList,
  })
}

const CronRoute = () => {
  const { taskIDs, cronHistoryList } = useLoaderData<LoaderData>()

  return (
    <>
      <Card width={1200}>
        <ul>
          <li>
            <Link to="/admin">Admin Panel</Link>
          </li>
          <li>
            Filter By Task ID: (<Link to=".">Show All</Link>)
            <ul>
              {taskIDs.map((taskID) => (
                <li>
                  <Link to={`.?taskID=${taskID}`}>{taskID}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {cronHistoryList.map((item) => (
          <h2>
            <Link to={`./${item.uid}`}>
              {item.createdAt} {item.taskId} {item.state}
            </Link>
          </h2>
        ))}
      </Card>
      <Outlet />
    </>
  )
}

export default CronRoute
