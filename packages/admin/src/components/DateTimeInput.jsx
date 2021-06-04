import moment from 'utils/moment'
import { KeyboardDateTimePicker } from '@material-ui/pickers'
import { useInput, useTranslate, FieldTitle } from 'ra-core'
import { InputHelperText } from 'ra-ui-materialui'

const eventStartDate = moment('2021-07-12 12:00').toDate()

const DateTimeInput = ({ ...props }) => {
  const { label, resource, source, helperText } = props

  const translate = useTranslate()
  const {
    id,
    input,
    isRequired,
    meta: { error, touched },
  } = useInput(props)
  const onChange = (value) => {
    if (Date.parse(value)) {
      const parsed = moment(value).toISOString()
      input.onChange(parsed)
    } else {
      input.onChange(null)
    }
  }

  return (
    <KeyboardDateTimePicker
      clearable
      id={id}
      style={{ width: '256px' }}
      inputVariant="filled"
      margin="dense"
      format="YYYY-MM-DD HH:mm"
      initialFocusedDate={eventStartDate}
      ampm={false}
      openTo={input.value ? 'hours' : 'date'}
      onChange={onChange}
      value={
        input.value === null || input.value === undefined || input.value === '' ? null : input.value
      }
      label={
        <FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />
      }
      error={!!(touched && error)}
      helperText={<InputHelperText touched={touched} error={error} helperText={helperText} />}
      clearLabel={translate('ra.action.clear_input_value')}
      cancelLabel={translate('ra.action.cancel')}
      // required={isRequired}
    />
  )
}

export default DateTimeInput
