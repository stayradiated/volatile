import React, { useCallback } from 'react'
import useSWRInfinite from 'swr/infinite'
import { FixedSizeList, FixedSizeListProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'

import styles from './EventList.module.css'

import { useSessionContext } from '../_utils/session-context'
import type { InvocationResponse, Invocation } from '../_utils/types.invocation'
import { fetchMetadata } from '../_utils/fetch-metadata'

import { EventListItem } from './EventListItem'

const getKey = (pageIndex: number, previousPageData: null) => {
  return [pageIndex * 100]
}

type EventListProps = {
  triggerName: string,
  onClick?: (event: Invocation) => void,
}

const EventList = (props: EventListProps) => {
  const { triggerName, onClick } = props

  const session = useSessionContext()

  const { data, error, isValidating, setSize, size } = useSWRInfinite<InvocationResponse>(getKey, (offset: number) => {
    return fetchMetadata(session, 'get_event_invocations', {
      type: "cron",
      trigger_name: triggerName,
      limit: 100,
      offset,
    })
  })

  const Row: FixedSizeListProps['children'] = (props) =>  {
    const { style, index } = props
    const bucket = Math.floor(index / 100)
    const bucketIndex = index % 100
    const invocation = data && data[bucket] && data[bucket].invocations[bucketIndex]
    if (!invocation) {
      return (
        <div style={style}>Loading…</div>
      )
    }


    return (
      <div style={style}>
        <EventListItem invocation={invocation} onClick={onClick} />
      </div>
    )
  }

  const itemCount = data?.length > 0 ? data[0].count : 0

  const isItemLoaded = (index: number): boolean => {
    const bucket = Math.floor(index/100)
    return data ? data.length > bucket : false
  }

  const loadMoreItems = useCallback((start: number, end: number): void => {
    if (size * 100 < end) {
      setSize(size + 1)
    }
  }, [setSize, size])

  return (
    <div className={styles.container}>
      <AutoSizer>
        {({height, width}) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={1000}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={itemCount}
                itemSize={40}
                className={styles.list}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                  {Row}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
}

export { EventList }
