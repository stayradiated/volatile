import { DayPicker, useInput } from 'react-day-picker'
import { formatISO } from 'date-fns'

type Props = {
  name?: string,
}

const DateInput = (props: Props) => {
  const { name } = props

  const { inputProps, dayPickerProps } = useInput({
    format: 'PP',
  })

  return (
    <>
      {dayPickerProps.selected && <input name={name} type="hidden" value={formatISO(dayPickerProps.selected)} />}
      <input name="" {...inputProps} />
      <DayPicker {...dayPickerProps} />
    </>
  )
}

export { DateInput }
