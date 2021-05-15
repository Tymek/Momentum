import React, { ComponentPropsWithRef, FC } from 'react'
import { useTheme } from '@emotion/react'
import ContentLoader, { Rect } from 'react-content-loader/native'

const height = 100

const NotificationLoader: FC<ComponentPropsWithRef<typeof ContentLoader>> = (props) => {
  const theme = useTheme()

  return (
    <ContentLoader
      speed={1}
      width={420}
      height={height}
      viewBox={`0 0 420 ${height}`}
      backgroundColor={theme.contentSkelton.backgroundColor}
      foregroundColor={theme.contentSkelton.foregroundColor}
      {...props}
    >
      <Rect {...theme.contentSkelton.rect} y="8" width="200" height={theme.fontSize.l} />
      <Rect {...theme.contentSkelton.rect} y="58" width="360" height={theme.fontSize.xs} />
      <Rect {...theme.contentSkelton.rect} y="78" width="180" height={theme.fontSize.xs} />
    </ContentLoader>
  )
}

export default NotificationLoader
