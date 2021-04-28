import React, { FC } from 'react'
import styled from '@emotion/native'
import { SafeAreaView, ScrollView } from 'react-native'

import Markdown from 'components/Markdown'

const Main = styled.View`
  padding: ${({ theme }) => theme.spacing.md};
`

type TextPageProps = {
  children?: string
}

const TextPage: FC<TextPageProps> = ({ children = '' }) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: '100%' }}>
      <Main>
        <Markdown>{children}</Markdown>
      </Main>
    </ScrollView>
  </SafeAreaView>
)

export default TextPage
