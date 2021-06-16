import React, { FC } from 'react'
import styled from '@emotion/native'

import Text from 'components/Text'

const Speaker: FC<{ children: string }> = ({ children }) => (
  <Wrapper>
    <ContentText>{children}</ContentText>
  </Wrapper>
)

const Wrapper = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.m}px ${theme.spacing.m}px`};
`

const ContentText = styled(Text)`
  font-family: ${({ theme }) => theme.font.light};
  text-align: right;
`

export default Speaker
