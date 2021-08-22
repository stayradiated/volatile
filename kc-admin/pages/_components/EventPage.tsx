import React from 'react'

import { EventList } from './EventList'

import styles from './EventPage.module.css'

type EventPageProps = {
  triggerName: string
}

const EventPage = (props: EventPageProps) => {
  const { triggerName } = props

  return (
    <div className={styles.container}>
      <h1>Event: {triggerName}</h1>
      <EventList triggerName={triggerName} />
    </div>
  )
}

export { EventPage }
