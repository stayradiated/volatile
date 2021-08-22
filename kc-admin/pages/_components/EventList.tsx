import React from 'react'
import useSWR from 'swr'
import { FixedSizeList, FixedSizeListProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import styles from './EventList.module.css'

import type { InvocationResponse } from '../_utils/types.invocation'
import { fetchMetadata } from '../_utils/fetch-metadata'

import { EventListItem } from './EventListItem'

type EventListProps = {
  triggerName: string,
}

const EventList = (props: EventListProps) => {
  const { triggerName } = props

  const { data, error } = useSWR<InvocationResponse>(triggerName, (triggerName: string) => fetchMetadata('get_event_invocations', {
    type: "cron",
    trigger_name: triggerName,
    limit: 100,
    offset: 0,
  }))

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const Row: FixedSizeListProps['children'] = (props) =>  {
    const { style, index } = props
    const invocation = data.invocations[index]
    return (
      <div style={style}>
        <EventListItem invocation={invocation} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <AutoSizer>
        {({height, width}) => (
          <FixedSizeList
            height={height}
            width={width}
            itemCount={100 /* data.count */}
            itemSize={40}
            className={styles.list}
          >
              {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}

export { EventList }
