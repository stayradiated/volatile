import cx from 'classnames'

import styles from './alert.module.css'

type Props = {
  message: React.ReactNode
  type: 'error'
}

const Alert = (props: Props) => {
  const { message, type } = props

  return <div className={cx(styles.container, styles[type])}>{message}</div>
}

export { Alert }
