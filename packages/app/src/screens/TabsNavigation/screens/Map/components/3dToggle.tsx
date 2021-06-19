import React, { FC } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@emotion/react'
import styled from '@emotion/native'
import ActionButton from './ActionButton'

type ToggleProps = {
  onPress?: () => void
  active?: boolean
}

const Toggle: FC<ToggleProps> = ({ active, onPress }) => {
  const theme = useTheme()

  return (
    <ToggleWrapper onPress={onPress}>
      <ActionButton>
        {active ? (
          <MaterialCommunityIcons name="video-3d-off" size={48} color={theme.color.text} />
        ) : (
          <MaterialCommunityIcons name="video-3d" size={48} color={theme.color.text} />
        )}
      </ActionButton>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => `${theme.spacing.s}px`};
  top: ${({ theme }) => `${theme.spacing.s}px`};
`

export default Toggle
