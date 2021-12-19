import { parseISO, format } from 'date-fns'

import type { Invocation } from '../utils/types.invocation'
import styles from './EventListItem.module.css'

type EventListItemProps = {
  invocation: Invocation
  onClick?: (event: Invocation) => void
}

const EventListItem = (props: EventListItemProps) => {
  const { invocation, onClick } = props
  const { status } = invocation
  const createdAt = format(parseISO(invocation.created_at), 'PPp')

  const statusClassName =
    status >= 200 && status <= 200 ? styles.statusSuccess : styles.statusError

  let message = invocation.response.data.body
  try {
    message = JSON.parse(invocation.response.data.body).message
  } catch (error) {
    console.error(error)
  }

  const handleClick = () => {
    onClick && onClick(invocation)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={statusClassName}>{status}</div>
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.message}>{message}</div>
    </div>
  )
}

export { EventListItem }
