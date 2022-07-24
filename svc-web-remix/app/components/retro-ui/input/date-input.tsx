import { useEffect } from 'react'
import { DayPicker, useInput } from 'react-day-picker'

type Props = {
  value?: Date
  onChange?: (date: Date) => void
}

const DateInput = (props: Props) => {
  const { value, onChange } = props

  const { inputProps, dayPickerProps, setSelected } = useInput({
    defaultSelected: value,
    format: 'PP',
  })

  useEffect(() => {
    setSelected(value)
  }, [value])

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(dayPickerProps.selected!)
    }
  }, [dayPickerProps.selected])

  return (
    <>
      <input {...inputProps} />
      <DayPicker {...dayPickerProps} />
    </>
  )
}

export { DateInput }
