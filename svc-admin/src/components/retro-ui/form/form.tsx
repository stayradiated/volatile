import React from 'react'

import { FormItem } from './form-item'
import { FormItemGroup } from './form-item-group'

type Props<State> = {
  children?: React.ReactNode
  name: string
  state: State
  onChange: (state: State) => void
  onFinish: () => void
}

const Form = <State extends Record<string, unknown>>(props: Props<State>) => {
  const { children, name: formName, state, onChange, onFinish } = props

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onFinish()
  }

  return (
    <form id={formName} onSubmit={handleSubmit}>
      <FormItemGroup formName={formName} state={state} onChange={onChange}>
        {children}
      </FormItemGroup>
    </form>
  )
}

Form.Item = FormItem
Form.ItemGroup = FormItemGroup

export { Form }
