import React from 'react'
import cx from 'classnames'

import styles from './input.module.css'

type Props = React.HTMLProps<HTMLInputElement> & {
  onChange?: (value: string) => void
}

const Input = (props: Props) => {
  const { className, onChange = () => undefined, ...restProps } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <input
      {...restProps}
      onChange={handleChange}
      className={cx(className, styles.input)}
    />
  )
}

export { Input }
