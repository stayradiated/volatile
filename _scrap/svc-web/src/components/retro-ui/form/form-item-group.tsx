import React from 'react'

import { FormItem } from './form-item'

type Props<State> = {
  children?: React.ReactNode
  formName: string
  state: State
  onChange?: (state: State) => void
}

const FormItemGroup = <State extends Record<string, unknown>>(
  props: Props<State>,
) => {
  const { children, formName, state, onChange } = props

  const handleChange = (key: string) => (value: unknown) => {
    if (typeof onChange === 'function') {
      onChange({ ...state, [key]: value })
    }
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === FormItem) {
          const { name } = child.props
          if (typeof name === 'string') {
            const value = state?.[name]
            const onChange = handleChange(name)
            return React.cloneElement(child, { formName, value, onChange })
          }

          return child
        }

        return child
      })}
    </>
  )
}

export { FormItemGroup }
