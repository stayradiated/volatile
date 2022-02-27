import useSWR from 'swr'

import { useSessionContext } from '../utils/session-context'
import { removeSession } from '../utils/session-store'

import { fetchMetadata } from '../utils/fetch-metadata'
import type { Metadata } from '../utils/types.metadata'

const Sidebar = () => {
  const session = useSessionContext()

  const { data, error } = useSWR<Metadata>([session], async (session) =>
    fetchMetadata(session, 'export_metadata', {}),
  )

  const handleLogout = () => {
    removeSession()
    window.location.reload()
  }

  if (error) {
    return (
      <div>
        <pre>
          <code>Error: {error.message}</code>
        </pre>
        <button onClick={handleLogout}>Log out</button>
      </div>
    )
  }

  if (!data) return <div>loading...</div>

  const cronTriggers = data.cron_triggers

  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8em',
        borderRight: '2px solid #eee',
      }}
    >
      {cronTriggers.map((cronTrigger) => (
        <a
          key={cronTrigger.name}
          href={`/admin/event/?trigger=${cronTrigger.name}`}
        >
          {cronTrigger.name}
        </a>
      ))}

      <a href="/admin/exchange/">Manage Exchanges</a>
      <a href="/admin/user/">Manage Users</a>
    </div>
  )
}

export { Sidebar }
