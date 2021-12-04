import React from 'react'
import cx from 'classnames'

import styles from './button.module.css'

type BaseProps = {
  type?: 'primary' | 'link'
  htmlType?: 'submit'
  loading?: boolean
  children?: React.ReactNode
  tabIndex?: number
  disabled?: boolean
}

type AnchorProps = BaseProps & {
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

type ButtonProps = BaseProps & {
  href?: never
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type Props = AnchorProps | ButtonProps

const Button = (props: Props) => {
  const {
    href,
    type = 'primary',
    htmlType,
    loading,
    children,
    tabIndex,
    onClick,
    disabled,
  } = props

  const className = cx(styles.base, styles[type], {
    [styles.disabled]: disabled,
    [styles.loading]: loading,
  })

  const component = typeof href === 'string' ? 'a' : 'button'

  return React.createElement(
    component,
    {
      type: htmlType,
      disabled: disabled || loading,
      className,
      tabIndex,
      href,
      onClick,
    },
    loading ? '...' : children,
  )
}

export { Button }
