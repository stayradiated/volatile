import React from 'react'

import styles from './background.module.css'

type Props = {
  children?: React.ReactNode
}

const Background = (props: Props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export { Background }
