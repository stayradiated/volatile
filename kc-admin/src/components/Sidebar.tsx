import useSWR from 'swr'

import { useSessionContext } from '../utils/session-context'

import { fetchMetadata } from '../utils/fetch-metadata'
import type { Metadata } from '../utils/types.metadata'

const Sidebar = () => {
  const session = useSessionContext()

  const { data, error } = useSWR<Metadata>(
    [session],
    (session) => fetchMetadata(session, 'export_metadata', {})
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const cronTriggers = data.cron_triggers

  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        lineHeight: "1.8em",
        borderRight: "2px solid #eee",
      }}
    >
      {cronTriggers.map((cronTrigger) => (
        <a key={cronTrigger.name} href={`/event/?trigger=${cronTrigger.name}`}>{cronTrigger.name}</a>
      ))}

      <a href='/exchange/'>Manage Exchanges</a>
    </div>
  );
}

export { Sidebar }
