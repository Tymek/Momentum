import moment from 'utils/moment'

export const formatSession = (record: string): string =>
  `${moment(record['begins_at']).format('dddd, HH:mm')}${
    record['ends_at'] ? `-${moment(record['ends_at']).format('HH:mm')}` : ''
  }${record['name'] ? ` – ${record['name']}` : ''}`
