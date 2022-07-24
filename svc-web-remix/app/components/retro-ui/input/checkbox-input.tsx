type Props = React.HTMLProps<HTMLInputElement> & {
  value?: boolean
  onChange?: (value: boolean) => void
}

const CheckboxInput = (props: Props) => {
  const { value, onChange, ...restProps } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    if (typeof onChange === 'function') {
      onChange(checked)
    }
  }

  return (
    <input
      {...restProps}
      type="checkbox"
      checked={value}
      onChange={handleChange}
    />
  )
}

export { CheckboxInput }
