import React from 'react'
import cx from 'classnames'

import styles from './form-item.module.css'

type Props = {
  className?: string
  children?: React.ReactNode
  label?: string
  name?: string

  // Injected by Form
  formName?: string
  value?: unknown
  onChange?: (value: unknown) => void
}

const FormItem = (props: Props) => {
  const {
    className,
    children,
    label,
    name,
    formName = '',
    value = '',
    onChange,
  } = props

  return (
    <div className={styles.container}>
      {typeof label === 'string' && (
        <label htmlFor={`${formName}_${name}`} className={styles.label}>
          {label}
        </label>
      )}
      <div className={cx(className, styles.input)}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              value,
              onChange,
            })
          }

          return child
        })}
      </div>
    </div>
  )
}

export { FormItem }
