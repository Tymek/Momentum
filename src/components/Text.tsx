import styled from '@emotion/native'

const CustomText = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.default};
`

export default CustomText
