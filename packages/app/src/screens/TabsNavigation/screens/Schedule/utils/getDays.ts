import { GetScheduleQuery } from '@-local/db/lib/generated/api'
import { format, parseISO } from 'date-fns'
import { pl } from 'date-fns/locale'

export type Day = {
  id: string
  name: string
  value: Date
  sessions: GetScheduleQuery['session']
}

const getDays = (sessions: GetScheduleQuery['session']): Day[] => {
  const days: Day[] = []

  for (const session of sessions) {
    const day = parseISO(session.begins_at)
    const dayId = format(day, 'E', { locale: pl }).replace('.', '')
    const dayName = format(day, 'EEEE', { locale: pl })
    const index = days.findIndex(({ id }) => id === dayId) // NOTE: Very crude!

    if (index === -1) {
      days.push({
        id: dayId,
        name: dayName,
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
