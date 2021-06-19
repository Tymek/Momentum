import React, { FC } from 'react'
import styled from '@emotion/native'
import { MotiView, AnimatePresence } from 'moti'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@emotion/react'
import ActionButton from './ActionButton'

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
              <ActionButton>
                <Ionicons name="navigate" size={32} color={theme.color.primary} />
              </ActionButton>
            </MotiView>
          </MotiView>
        )}
      </AnimatePresence>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => `${theme.spacing.s}px`};
  top: ${`${11 + 48 + 11}px`};
`

export default Button
