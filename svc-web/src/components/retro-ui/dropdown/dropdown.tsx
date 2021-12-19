import React, { useState, useEffect } from 'react'
import { useFloating, shift, offset } from '@floating-ui/react-dom'

import { Button } from '../button'
import { DropdownItem } from './dropdown-item'

import styles from './dropdown.module.css'

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

  const wrapMouseDown =
    (onMouseDown: React.MouseEventHandler<HTMLButtonElement> | undefined) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()

      if (onMouseDown) {
        onMouseDown(event)
      }
    }

  const wrapClick =
    (onClick: React.MouseEventHandler<HTMLButtonElement> | undefined) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()

      setIsOpen(false)
      if (onClick) {
        onClick(event)
      }
    }

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      window.document.addEventListener('mousedown', handleDocumentClick)
    }

    return () => {
      if (isOpen) {
        window.document.removeEventListener('mousedown', handleDocumentClick)
      }
    }
  }, [isOpen])

  return (
    <>
      <div ref={reference} className={styles.target}>
        <Button onClick={handleTargetClick}>...</Button>
      </div>
      <ul
        ref={floating}
        className={styles.container}
        style={{
          display: isOpen ? 'block' : 'none',
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === DropdownItem) {
            return React.cloneElement(child, {
              onMouseDown: wrapMouseDown(child.props.onMouseDown),
              onClick: wrapClick(child.props.onClick),
            })
          }

          return child
        })}
      </ul>
    </>
  )
}

Dropdown.Item = DropdownItem

export { Dropdown }
