import React, { FC } from 'react'
import styled from '@emotion/native'
import { SafeAreaView, ScrollView } from 'react-native'

const Main = styled.View`
  padding: ${({ theme }) => `${theme.spacing.m}px`};
`

const TextPage: FC = ({ children = '' }) => (
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    <SafeAreaView>
      <Main>{children}</Main>
    </SafeAreaView>
  </ScrollView>
)

export default TextPage
