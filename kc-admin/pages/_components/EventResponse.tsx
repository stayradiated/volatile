import React from 'react'

import type {Invocation } from '../_utils/types.invocation'

type EventResponseProps = {
  event: Invocation
}

type ErrorDetailsProps = {
  error: Record<string, any>
}

const ErrorDetails = (props: ErrorDetailsProps) => {
  const { error } = props
  const { name, code, info, message, stack, cause } = error
  return (
    <ul>
      <li>name: <code>{name}</code></li>
      <li>code: <code>{code}</code></li>
      <li>info: <code>{JSON.stringify(info, null, 2)}</code></li>
      <li>message: <code>{message}</code></li>
      <li>stack: <pre><code>{stack}</code></pre></li>
      <li>{cause && <ErrorDetails error={cause} />}</li>
    </ul>
  )
}

const EventResponse = (props: EventResponseProps) => {
  const { event } = props
  const error = JSON.parse(event.response.data.body)

  return (
    <>
      <ErrorDetails error={error} />
    </>
  )
}

export { EventResponse }

