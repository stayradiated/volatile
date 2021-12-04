import React from 'react'
import cx from 'classnames'

import styles from './button.module.css'

type Props = {
  type?: 'primary' | 'link'
  htmlType?: 'submit'
  loading?: boolean
  children?: React.ReactNode
  href?: string
  tabIndex?: number
  onClick?: () => void
}

const Button = (props: Props) => {
  const {
    href,
    type = 'primary',
    htmlType,
    loading,
    children,
    tabIndex,
    onClick,
  } = props

  const className = cx(styles.base, styles[type])

  const component = typeof href === 'string' ? 'a' : 'button'

  return React.createElement(
    component,
    {
      type: htmlType,
      disabled: loading,
      className,
      tabIndex,
      href,
      onClick,
    },
    loading ? '...' : children,
  )
}

export { Button }
