import moment from 'utils/moment'
import { useTranslate } from 'ra-core'
import { Typography, Tooltip } from '@material-ui/core'
import PinIcon from 'assets/icons/pin.svg'

export const RelativeTimeField = ({ record, source, emptyText = '' }) => (
  <span>{record[source] ? moment(record[source]).fromNow() : emptyText}</span>
)

export const DateTimeField = ({ record, source, emptyText = '', format, withRelative }) => {
  const time = record[source] && moment(record[source]).format(format || 'dddd, HH:mm')

  return (
    <span>
      {record[source] ? time : emptyText}
      {record[source] && withRelative ? (
        <>
          {' '}
          (<RelativeTimeField record={record} source={source} />)
        </>
      ) : null}
    </span>
  )
}

export const TimeField = ({ record, source, emptyText = '' }) => (
  <span>{record[source] ? moment(record[source]).format('HH:mm') : emptyText}</span>
)

export const IsPinnedField = ({ record, source }) => {
  const translate = useTranslate()

  return (
    <Typography component="span" variant="body2">
      {record && record[source] ? (
        <Tooltip title={translate('ra.boolean.true')}>
          <PinIcon
            width="1.25rem"
            height="1.25rem"
            style={{ display: 'inline-block', marginBottom: '-3px' }}
          />
        </Tooltip>
      ) : null}
    </Typography>
  )
}
