import React, { FC } from 'react'

import TextPage from 'components/TextPage'
import ErrorBoundary from 'containers/error/Boundary'
import NotificationsList from './components/NotificationsList'

const Notifications: FC = () => {
  return (
    <TextPage>
      <ErrorBoundary>
        <NotificationsList />
      </ErrorBoundary>
    </TextPage>
  )
}

export default Notifications
