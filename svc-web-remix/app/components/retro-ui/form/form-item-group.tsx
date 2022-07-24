import React from 'react'

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
          const { name } = child.props
          if (typeof name === 'string') {
            return React.cloneElement(child, { formName })
          }

          return child
        }

        return child
      })}
    </>
  )
}

export { FormItemGroup }
