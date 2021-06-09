import { GetScheduleQuery } from '@-local/db/lib/generated/api'
import { format, parseISO } from 'date-fns'
import { pl } from 'date-fns/locale'

export type Day = {
  id: string
  name: string
  shortName: string
  value: Date
  sessions: GetScheduleQuery['session']
}

const getDays = (sessions: GetScheduleQuery['session']): Day[] => {
  const days: Day[] = []

  for (const session of sessions) {
    const day = parseISO(session.begins_at)
    const hour = Number.parseInt(format(day, 'H'), 10)
    const isAfterMidnight = hour < 4
    const dayId = `${Number.parseInt(format(day, 'DDD')) - (isAfterMidnight ? 1 : 0)}`
    const shortName = format(day, 'E', { locale: pl }).replace('.', '')
    const dayName = format(day, 'EEEE', { locale: pl })
    const index = days.findIndex(({ id }) => id === dayId) // NOTE: Very crude!

    if (index === -1) {
      days.push({
        id: dayId,
        name: dayName,
        shortName,
        value: day,
        sessions: [session],
      })
    } else {
      days[index].sessions.push(session)
    }
  }

  return days
}

export default getDays
