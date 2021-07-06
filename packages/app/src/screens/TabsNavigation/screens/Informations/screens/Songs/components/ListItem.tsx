import styled from '@emotion/native'
import Text from 'components/Text'
import React, { FC } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from '@emotion/react'
const TouchableRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: space-between;
  padding: ${({ theme }) => `${theme.spacing.s}px`};
  margin: ${({ theme }) => `${theme.spacing.xs}px`};
  background: ${({ theme }) => theme.color.dark};
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
`

const Title = styled(Text)`
  font-family: ${({ theme }) => theme.font.headers};
  font-size: ${({ theme }) => `${theme.fontSize.m}px`};
  margin-right: auto;
`

const ListItem: FC<TouchableOpacityProps> = ({ children, onPress }) => {
  const theme = useTheme()

  return (
    <TouchableRow onPress={onPress}>
      <Title>{children}</Title>
      <MaterialIcons name="chevron-right" color={theme.color.light} size={24} />
    </TouchableRow>
  )
}

export default ListItem
