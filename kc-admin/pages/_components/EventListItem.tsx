import React from 'react'
import { DateTime } from 'luxon'

import styles from './EventListItem.module.css'

import type {Invocation } from '../_utils/types.invocation'

type EventListItemProps = {
  invocation: Invocation
  onClick?: (event: Invocation) => void,
}

const EventListItem = (props: EventListItemProps) => {
  const { invocation, onClick } = props
  const { status } = invocation
  const createdAt = DateTime.fromISO(invocation.created_at)
  
  const statusClassName = status >= 200 && status <= 200
    ? styles.statusSuccess
    : styles.statusError

  const body = JSON.parse(invocation.response.data.body)

  const handleClick = () => onClick && onClick(invocation)

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={statusClassName}>{status}</div>
      <div className={styles.createdAt}>{createdAt.toFormat('ff')}</div>
      <div className={styles.message}>{body.message}</div>
    </div>
  )
}

export { EventListItem }
