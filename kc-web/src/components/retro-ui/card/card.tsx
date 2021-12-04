import React from 'react'

import { CardDivider } from './card-divider'

import styles from './card.module.css'

type Props = {
  children?: React.ReactNode
}

const Card = (props: Props) => {
  const { children} = props

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

Card.Divider = CardDivider

export { Card }
