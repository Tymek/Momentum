import React, { FC, useState } from 'react'
import { format, parseISO } from 'date-fns'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/generated/api'
import Text from 'components/Text'
import styled from '@emotion/native'
import useShadow from 'hooks/useShadow'
import Speaker from './Speaker'
import Location from './Location'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native'

type SessionProps = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  begins_at?: Maybe<Scalars['timestamptz']>
  ends_at?: Maybe<Scalars['timestamptz']>
  speaker?: Maybe<SpeakerFragment>
  muted?: boolean
  isTopic?: boolean
}

const Block: FC<SessionProps> = ({
  title,
  description,
  begins_at,
  /*ends_at,*/
  children,
  speaker,
  location,
  muted,
  isTopic, // TODO: refactor into separate components
}) => {
  const shadow = useShadow(2)
  const [isOpen, setIsOpen] = useState<boolean>()
  const theme = useTheme()

  return (
    <Wrapper style={!muted ? shadow : {}} muted={muted}>
      {isTopic ? (
        <TouchableInfo
          // style={styles.iconContainer}
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text>{title}</Text>
          <MaterialIcons
            name={isOpen ? 'unfold-less' : 'unfold-more'}
            size={24}
            color={theme.colors.text}
          />
        </TouchableInfo>
      ) : (
        <Info>
          <SessionName>{title}</SessionName>
          {begins_at && <SessionTime>{format(parseISO(begins_at), 'HH:mm')}</SessionTime>}
          {/* {ends_at && <Text>{format(parseISO(ends_at), 'HH:mm')}</Text>} */}
        </Info>
      )}

      {!isTopic || isOpen ? (
        <>
          {description && (
            <DescriptionSection>
              <DescriptionText>{description}</DescriptionText>
            </DescriptionSection>
          )}
          {location || speaker ? (
            <SpeakerAndLocation>
              {location && <Location>{location}</Location>}
              {speaker && <Speaker {...speaker} />}
            </SpeakerAndLocation>
          ) : null}
          {children}
        </>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.View<{ withTopics?: boolean; muted?: boolean }>`
  background: ${({ theme, muted, withTopics }) =>
    withTopics || muted ? 'transparent' : theme.color.background};
  margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
`

const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.m}px`};
`

const TouchableInfo = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.m}px`};
`

const SessionName = styled(Text)`
  font-family: ${({ theme }) => theme.font.headers};
  text-transform: uppercase;
  font-size: ${({ theme }) => `${theme.fontSize.l}px`};
  margin-right: auto;
`

const SessionTime = styled(Text)`
  font-family: ${({ theme }) => theme.font.accent};
`

const DescriptionSection = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.m}px ${theme.spacing.l}px`};
`

const DescriptionText = styled(Text)`
  font-family: ${({ theme }) => theme.font.accent};
`

const SpeakerAndLocation = styled.View`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: space-between; */
`

export default Block
