import React, { FC } from 'react'
import styled from '@emotion/native'
import { format, parseISO } from 'date-fns'
import { useGetSpeakerSessionsQuery } from '@-local/db/lib/api'
import Text from 'components/Text'
import Markdown from 'components/Markdown'
import { pl } from 'date-fns/locale'

type SpeakerSessionsProps = {
  id: string
}

const formatDate = (date?: string) =>
  date ? format(parseISO(date), 'EEEE, HH:mm', { locale: pl }) : ''

const SpeakerSessions: FC<SpeakerSessionsProps> = ({ id }) => {
  const { data } = useGetSpeakerSessionsQuery({ variables: { speaker_id: id } })
  const hasItems = data && (data?.session.length > 0 || data?.topic.length > 0)
  console.log(data)

  return hasItems ? (
    <>
      <SessionsHeader>Sesje</SessionsHeader>
      {data?.session?.map((session) => (
        <Markdown key={session.id}>{`- **${session.name}**\n${formatDate(session.begins_at)}${
          session.location ? `, ${session.location}` : ''
        }`}</Markdown>
      ))}
      {data?.topic?.map((topic) => (
        <Markdown key={topic.id}>{`- **EQUIP:** ${topic.subject}\n${formatDate(
          topic.session.begins_at,
        )}${topic.location ? `, ${topic.location}` : ''}`}</Markdown>
      ))}
    </>
  ) : null
}

const SessionsHeader = styled(Text)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.xl}px`};
  margin-top: ${({ theme }) => `${theme.spacing.l}px`};
  margin-bottom: ${({ theme }) => `${theme.spacing.s}px`};
`

export default SpeakerSessions
