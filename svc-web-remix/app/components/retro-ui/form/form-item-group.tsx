import React from 'react'

import type { FormItemProps } from './form-item'
import { FormItem } from './form-item'

type Props = {
  children?: React.ReactNode
  formName: string
}

const FormItemGroup = (props: Props) => {
  const { children, formName } = props

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === FormItem) {
          const formItem = child as React.ReactElement<FormItemProps>
          const { name } = formItem.props
          if (typeof name === 'string') {
            return React.cloneElement(formItem, { formName })
          }

          return child
        }

        return child
      })}
    </>
  )
}

export { FormItemGroup }
