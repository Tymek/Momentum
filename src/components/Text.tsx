import styled from '@emotion/native'
import React, { ComponentPropsWithoutRef, FC } from 'react'
import { Text } from 'react-native'

const fontFamily = {
  regular: 'Proxima',
  light: 'Proxima-Light',
  bold: 'Proxima-Black',
}

type TextProps = {
  fontWeight?: keyof typeof fontFamily
}

const StyledText = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ fontWeight }) => fontFamily[fontWeight || 'regular']};
`

type CustomTextProps = ComponentPropsWithoutRef<typeof Text> & Partial<TextProps>

const CustomText: FC<CustomTextProps> = ({ fontWeight = 'regular', ...props }) => (
  <StyledText {...props} fontWeight={fontWeight} />
)

export default CustomText
