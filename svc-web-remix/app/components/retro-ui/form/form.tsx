import React from 'react'
import { Form as RemixForm, FormMethod } from '@remix-run/react'

import { FormItem } from './form-item'
import { FormItemGroup } from './form-item-group'

type Props = {
  children?: React.ReactNode
  name: string
  action?: string
  method?: FormMethod
}

const Form = (props: Props) => {
  const { children, name: formName, action, method } = props

  return (
    <RemixForm id={formName} action={action} method={method}>
      <FormItemGroup formName={formName}>{children}</FormItemGroup>
    </RemixForm>
  )
}

Form.Item = FormItem
Form.ItemGroup = FormItemGroup

export { Form }
