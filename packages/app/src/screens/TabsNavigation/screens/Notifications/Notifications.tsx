import React, { FC } from 'react'

import TextPage from 'components/TextPage'
import Header from 'components/Header'
import ErrorBoundary from 'containers/error/Boundary'
import NotificationsList from './components/NotificationsList'

const Notifications: FC = () => {
  return (
    <ErrorBoundary>
      <Header />
      <TextPage>
        <NotificationsList />
      </TextPage>
    </ErrorBoundary>
  )
}

export default Notifications
