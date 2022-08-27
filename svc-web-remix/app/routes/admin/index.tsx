import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet, Link } from '@remix-run/react'

import { getSessionData } from '~/utils/auth.server'
import { Card } from '~/components/retro-ui'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionData(request)

  if (session.role !== 'admin') {
    return redirect('/admin/login')
  }

  return null
}

const Index = () => {
  return (
    <>
      <Card>
        <h2>Admin</h2>
        <ul>
          <li>
            <Link to="./cron">View Cron History</Link>
          </li>
          <li>
            <Link to="./exchange">Manage Exchanges</Link>
          </li>
          <li>
            <Link to="./user">Manage Users</Link>
          </li>
        </ul>
      </Card>
      <Outlet />
    </>
  )
}

export default Index
