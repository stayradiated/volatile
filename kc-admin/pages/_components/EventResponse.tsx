import React from 'react'

import type {Invocation } from '../_utils/types.invocation'

import styles from './EventResponse.module.css'

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
    <ul className={styles.container}>
      {message && <li>message: <code>{message}</code></li>}
      {name && <li>name: <code>{name}</code></li>}
      {code && <li>code: <code>{code}</code></li>}
      {info && <li>info: <pre className={styles.stack}><code>{JSON.stringify(info, null, 2)}</code></pre></li>}
      {stack && <li>stack: <pre className={styles.stack}><code>{stack}</code></pre></li>}
      {cause && (
        Array.isArray(cause) ? cause.map((c) => <ErrorDetails error={c} />) : <ErrorDetails error={cause} />
      )}
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

