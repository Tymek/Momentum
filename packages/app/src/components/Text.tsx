import styled from '@emotion/native'

const CustomText = styled.Text`
  font-size: ${({ theme }) => `${theme.fontSize.m}px`};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.default};
`

export default CustomText
