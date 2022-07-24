import React from 'react'
import { FormMethod } from '@remix-run/react'

import { FormItem } from './form-item'
import { FormItemGroup } from './form-item-group'

type Props = {
  children?: React.ReactNode
  name: string
  action: string
  method: FormMethod
}

const Form = (props: Props) => {
  const { children, name: formName, action, method } = props

  return (
    <form id={formName} action={action} method={method}>
      <FormItemGroup formName={formName}>{children}</FormItemGroup>
    </form>
  )
}

Form.Item = FormItem
Form.ItemGroup = FormItemGroup

export { Form }
