import React, { useState, useEffect } from 'react'
import { useFloating, shift, offset } from '@floating-ui/react-dom'
import styled from 'styled-components'

import { Button } from '../button'
import { DropdownItem } from './dropdown-item'

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 150px;

  margin: 0;
  padding: 0;

  background: var(--card-background);
  box-shadow: -2px 2px 0 0 var(--card-border);
  border: 1px solid var(--card-border);

  z-index: 1;
`

type Props = {
  children: React.ReactNode
}

const Dropdown = (props: Props) => {
  const { children } = props

  const [isOpen, setIsOpen] = useState(false)

  const { x, y, reference, floating, strategy } = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), offset({ mainAxis: -41 })],
  })

  const handleTargetClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      window.document.addEventListener('click', handleDocumentClick)
    }

    return () => {
      if (isOpen) {
        window.document.removeEventListener('click', handleDocumentClick)
      }
    }
  }, [isOpen])

  return (
    <>
      <div ref={reference}>
        <Button onClick={handleTargetClick}>...</Button>
      </div>
      <Container
        ref={floating}
        style={{
          display: isOpen ? 'block' : 'none',
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
      >
        {children}
      </Container>
    </>
  )
}

Dropdown.Item = DropdownItem

export { Dropdown }
