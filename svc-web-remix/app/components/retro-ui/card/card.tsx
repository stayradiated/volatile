import React from 'react'
import styled from 'styled-components'

import { CardDivider } from './card-divider'

type Props = {
  children?: React.ReactNode
  width?: number
}

const Container = styled.div`
  background: var(--card-background);
  box-shadow: -4px 4px 0 0 var(--card-border);
  border: 1px solid var(--card-border);
  margin: 80px;
  padding: 20px;
  width: 400px;
`

const Card = (props: Props) => {
  const { children, width } = props

  return <Container style={{ width }}>{children}</Container>
}

Card.Divider = CardDivider

export { Card }
