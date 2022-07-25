import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { parseISO, formatISO, subHours } from 'date-fns'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DCAOrderHistoryList }  from '~/components/dca-order-history-list'
import { sdk } from '~/utils/api.server'
import { GetDcaOrderHistoryListQuery } from '~/graphql/generated'
import { getSessionData } from '~/utils/auth.server'

type LoaderData = {
  dcaOrderUID: string
  dateRange: {
    gt: string,
    lte: string,
  }
  query: {
    getDCAOrderHistoryList: GetDcaOrderHistoryListQuery
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const { authToken } = await getSessionData(request)
  invariant(authToken, 'Must be logged in.')

  const { uid: dcaOrderUID } = params
  invariant(typeof dcaOrderUID === 'string', 'Must have params.uid')

  const dateRange = {
    gt : formatISO(subHours(new Date(), 3)),
    lte : formatISO(new Date())
  }

  const getDCAOrderHistoryList = await errorBoundary(() => sdk.getDCAOrderHistoryList({
    dcaOrderUID,
    gt: dateRange.gt,
    lte: dateRange.lte,
  }, {
    authorization: `Bearer ${authToken}`
  }))

  console.log({ getDCAOrderHistoryList })
  if (getDCAOrderHistoryList instanceof Error) {
    throw getDCAOrderHistoryList
  }

  const query = {
    getDCAOrderHistoryList
  }

  console.log({ dcaOrderUID, query, dateRange })

  return json<LoaderData>({ dcaOrderUID, query, dateRange })
}

const DCAOrderHistoryRoute = () => {
  const loaderData = useLoaderData<LoaderData>()
  console.log({ loaderData })
  const { dcaOrderUID, query, dateRange: dateRangeISO } = loaderData

  const dateRange = {
    gt: parseISO(dateRangeISO.gt),
    lte: parseISO(dateRangeISO.lte),
  }

  return (
    <DCAOrderHistoryList dcaOrderUID={dcaOrderUID} query={query.getDCAOrderHistoryList} dateRange={dateRange} />
  )
}

export default DCAOrderHistoryRoute
