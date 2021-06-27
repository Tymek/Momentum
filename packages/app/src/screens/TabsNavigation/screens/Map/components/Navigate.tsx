import React, { FC } from 'react'
import styled from '@emotion/native'
import { MotiView, AnimatePresence } from 'moti'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@emotion/react'
import Text from 'components/Text'

type ButtonProps = {
  onPress: () => void
  visible?: boolean
}

const Button: FC<ButtonProps> = ({ onPress, visible = false }) => {
  const theme = useTheme()

  return (
    <ButtonWrapper onPress={onPress}>
      <AnimatePresence>
        {visible && (
          <MotiView
            from={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 30 }}
          >
            <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Content>
                <Ionicons name="navigate" size={32} color={theme.color.primary} />
                <NavigationText>Wyznacz trasę</NavigationText>
              </Content>
            </MotiView>
          </MotiView>
        )}
      </AnimatePresence>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: ${({ theme }) => `${theme.spacing.xl}px`};
  right: ${({ theme }) => `${theme.spacing.l}px`};
  left: ${({ theme }) => `${theme.spacing.l}px`};
`

const Content = styled.View`
  flex-direction: row;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.map.buttonBackground};
  border-radius: ${({ theme }) => `${theme.borderRadius.l}px`};
  padding: ${({ theme }) => `0 ${theme.spacing.m}px`};
`

const NavigationText = styled(Text)`
  margin-left: ${({ theme }) => `${theme.spacing.xs}px`};
`

export default Button
