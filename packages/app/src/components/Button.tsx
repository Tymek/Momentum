import React, { ComponentPropsWithoutRef, FC } from 'react'
import { Button } from 'react-native'
import { useTheme } from '@emotion/react'

const CustomButton: FC<ComponentPropsWithoutRef<typeof Button>> = ({ ...props }) => {
  const theme = useTheme()

  return <Button {...props} color={theme.color.primary} />
}

export default CustomButton
