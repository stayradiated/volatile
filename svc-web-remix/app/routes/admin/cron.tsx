import { useMemo } from 'react'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useSearchParams, useLoaderData, Link, Outlet } from '@remix-run/react'
import { promiseHash } from 'remix-utils'
import styled from 'styled-components'
import type { ColumnDef } from '@tanstack/react-table'
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
} from '@tanstack/react-table'
import * as dateFns from 'date-fns'

import { getSessionData } from '~/utils/auth.server'
import { sdk } from '~/utils/api.server'
import { safeRedirect } from '~/utils/redirect.server'
import { useSearchParamsLink } from '~/hooks/use-search-params-link'
import { Table } from '~/components/ui/index'

type CronHistoryItem = {
  uid: string
  taskId: string
  createdAt: string
  state: string
  output?: unknown
}

type LoaderData = {
  taskIds: string[]
  cronHistoryList: CronHistoryItem[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return safeRedirect(request, '/admin/login')
  }

  const { searchParams } = new URL(request.url)
  const filterByTaskId = searchParams.get('task')
  const filterByState = searchParams.get('state')

  const query = await promiseHash({
    getCronHistoryTaskIds: sdk.getCronHistoryTaskIds(
      {},
      {
        'x-hasura-role': 'admin',
        authorization: `Bearer ${session.authToken}`,
      },
    ),
    getCronHistoryList: sdk.getCronHistoryList(
      {
        where: {
          taskId: filterByTaskId ? { _eq: filterByTaskId } : undefined,
          state: filterByState ? { _eq: filterByState } : undefined,
        },
      },
      {
        'x-hasura-role': 'admin',
        authorization: `Bearer ${session.authToken}`,
      },
    ),
  })

  const taskIds = query.getCronHistoryTaskIds.cronHistoryAggregate.nodes.map(
    (node) => {
      return node.taskId
    },
  )

  const cronHistoryList = query.getCronHistoryList.cronHistory

  return json<LoaderData>({
    taskIds,
    cronHistoryList,
  })
}

const NavLink = styled(Link)<{ active: boolean }>`
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }

  ${(props) =>
    props.active &&
    `
    font-weight: bold;
    text-decoration: underline;
  `}
`

const CronRoute = () => {
  const { taskIds, cronHistoryList } = useLoaderData<LoaderData>()

  const [searchParameters] = useSearchParams()
  const searchParametersLink = useSearchParamsLink(searchParameters)

  const activeTaskId = searchParameters.get('task')
  const activeState = searchParameters.get('state')

  const columns: Array<ColumnDef<CronHistoryItem, string>> = useMemo(() => {
    const columnHelper = createColumnHelper<CronHistoryItem>()

    return [
      columnHelper.accessor('createdAt', {
        header: 'Created At',
        cell(info) {
          const date = dateFns.parseISO(info.getValue())
          return dateFns.format(date, 'PP pp')
        },
      }),
      columnHelper.accessor('taskId', {
        header: 'Task',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('state', {
        header: 'State',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('output', {
        header: 'Message',
        cell: (info) => JSON.stringify(info.getValue()).slice(0, 50) + '…',
      }),
    ]
  }, [])

  const table = useReactTable({
    data: cronHistoryList,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <ul>
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
        <li>
          Filter By Task Id: (
          <NavLink
            active={!activeTaskId}
            replace
            to={searchParametersLink({ delete: ['task'] })}
          >
            Show All
          </NavLink>
          )
          <ul>
            {taskIds.map((taskId) => (
              <li>
                <NavLink
                  active={taskId === activeTaskId}
                  replace
                  to={searchParametersLink({ set: { task: taskId } })}
                >
                  {taskId}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          Filter By State: (
          <NavLink
            active={!activeState}
            replace
            to={searchParametersLink({ delete: ['state'] })}
          >
            Show All
          </NavLink>
          )
          <ul>
            <li>
              <NavLink
                active={activeState === 'PENDING'}
                replace
                to={searchParametersLink({ set: { state: 'PENDING' } })}
              >
                Pending
              </NavLink>
            </li>
            <li>
              <NavLink
                active={activeState === 'SUCCESS'}
                replace
                to={searchParametersLink({ set: { state: 'SUCCESS' } })}
              >
                Success
              </NavLink>
            </li>
            <li>
              <NavLink
                active={activeState === 'ERROR'}
                replace
                to={searchParametersLink({ set: { state: 'ERROR' } })}
              >
                Error
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>

      <Table table={table} />

      <Outlet />
    </>
  )
}

export default CronRoute
