import React from 'react'

import { CardDivider } from './card-divider'

import styles from './card.module.css'

type Props = {
  children?: React.ReactNode
  width?: number
}

const Card = (props: Props) => {
  const { children, width } = props

  return (
    <div className={styles.container} style={{ width }}>
      {children}
    </div>
  )
}

Card.Divider = CardDivider

export { Card }
