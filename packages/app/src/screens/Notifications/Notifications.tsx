import React, { FC } from 'react'
import styled from '@emotion/native'

import TextPage from 'components/TextPage'
import ErrorBoundary from 'containers/error/Boundary'
import NotificationsList from './components/NotificationsList'

const Header = styled.View`
  height: ${({ theme }) => `${theme.spacing.s}px`};
`

const Notifications: FC = () => {
  return (
    <TextPage>
      <ErrorBoundary>
        <Header />
        <NotificationsList />
      </ErrorBoundary>
    </TextPage>
  )
}

export default Notifications
