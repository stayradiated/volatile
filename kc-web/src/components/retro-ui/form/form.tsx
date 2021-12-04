import React, { useState } from 'react'

import { FormItem } from './form-item'

type Props<State> = {
  children?: React.ReactNode
  name: string,
  initialValues: State
  onFinish: (state: State) => void,
}

const Form = <State extends Record<string, unknown>>(props: Props<State>) => {
  const { children, name: formName, initialValues, onFinish } = props

  const [state, setState] = useState(initialValues)

  const handleChange = (key: string) => (value: unknown) => {
    setState({ ...state, [key]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onFinish(state)
  }

  return (
    <form id={formName} onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === FormItem ) {
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
    </form>
  )
}

Form.Item = FormItem

export { Form }
