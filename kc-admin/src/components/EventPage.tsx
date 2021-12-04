import { useState } from 'react'

import type { Invocation } from '../utils/types.invocation'
import { EventList } from './EventList'
import { EventDetails } from './EventDetails'

import styles from './EventPage.module.css'

type EventPageProps = {
  triggerName: string
}

const EventPage = (props: EventPageProps) => {
  const { triggerName } = props

  const [selectedEvent, setSelectedEvent] = useState<Invocation | undefined>(
    undefined,
  )

  return (
    <div className={styles.container}>
      <header>
        <h1>Event: {triggerName}</h1>
      </header>
      <main className={styles.main}>
        <EventList triggerName={triggerName} onClick={setSelectedEvent} />
        <EventDetails event={selectedEvent} />
      </main>
    </div>
  )
}

export { EventPage }
