import React from 'react'

import { EventResponse } from './EventResponse'

import type {Invocation } from '../_utils/types.invocation'

type EventDetailsProps = {
  event: Invocation | undefined,
}

const EventDetails = (props: EventDetailsProps) => {
  const { event } = props

  return (
    <div>
      <h1>Event Details</h1>
      <p>{event?.id}</p>
      {event && <EventResponse event={event} />}
    </div>
  )
}

export { EventDetails }
