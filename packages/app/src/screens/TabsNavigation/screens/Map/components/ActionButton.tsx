import styled from '@emotion/native'

const Button = styled.View`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.map.buttonBackground};
  border-radius: ${({ theme }) => `${theme.borderRadius.l}px`};
`

export default Button
