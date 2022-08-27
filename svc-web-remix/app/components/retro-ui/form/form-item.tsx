import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 0;
`

const Label = styled.label`
  text-transform: uppercase;
  font-weight: 600;
`

type FormItemProps = {
  className?: string
  children?: React.ReactNode
  label?: string
  name?: string

  // Injected by Form
  formName?: string
}

const FormItem = (props: FormItemProps) => {
  const { className, children, label, name, formName = '' } = props

  const labelKey = `${formName}_${name}`

  return (
    <Container>
      {typeof label === 'string' && <Label htmlFor={labelKey}>{label}</Label>}
      <div className={className}>
        {React.Children.map(children, (child) => {
          if (typeof name === 'string' && React.isValidElement(child)) {
            const input = child as React.ReactElement<{
              id: string
              name: string
            }>
            return React.cloneElement(input, { id: labelKey, name })
          }

          return child
        })}
      </div>
    </Container>
  )
}

export { FormItem }
export type { FormItemProps }
