import React, { useState } from 'react'

import { EventList } from './EventList'
import { EventDetails } from './EventDetails'

import styles from './EventPage.module.css'

import type { Invocation } from '../_utils/types.invocation'

type EventPageProps = {
  triggerName: string
}

const EventPage = (props: EventPageProps) => {
  const { triggerName } = props

  const [selectedEvent, setSelectedEvent] = useState<Invocation|undefined>(undefined)

  return (
    <div className={styles.container}>
      <h1>Event: {triggerName}</h1>
      <EventList triggerName={triggerName} onClick={setSelectedEvent} />
      <EventDetails event={selectedEvent} />
    </div>
  )
}

export { EventPage }
