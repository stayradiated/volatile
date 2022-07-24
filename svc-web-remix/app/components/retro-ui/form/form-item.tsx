import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 0;
`

const Label = styled.label`
  text-transform: uppercase;
  font-weight: 600;
`

type Props = {
  className?: string
  children?: React.ReactNode
  label?: string
  name?: string

  // Injected by Form
  formName?: string
}

const FormItem = (props: Props) => {
  const { className, children, label, name, formName = '' } = props

  const labelKey = `${formName}_${name}`

  return (
    <Container>
      {typeof label === 'string' && <Label htmlFor={labelKey}>{label}</Label>}
      <div className={className}>
        {React.Children.map(children, (child) => {
          if (typeof name === 'string' && React.isValidElement(child)) {
            return React.cloneElement(child, { id: labelKey, name })
          }

          return child
        })}
      </div>
    </Container>
  )
}

export { FormItem }
