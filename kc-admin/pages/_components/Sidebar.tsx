import React from 'react'
import useSWR from 'swr'

import { fetchMetadata } from '../_utils/fetch-metadata'
import { Link } from "../_default/Link";
import type { Metadata } from '../_utils/types.metadata'

const Sidebar = () => {
  const { data, error } = useSWR<Metadata>('export_metadata', () => fetchMetadata('export_metadata', {}))

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
        <Link key={cronTrigger.name} href={`/event/${cronTrigger.name}`}>{cronTrigger.name}</Link>
      ))}
    </div>
  );
}

export { Sidebar }
