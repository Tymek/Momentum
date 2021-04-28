import React, { FC } from 'react'
import { useTheme } from '@emotion/react'

import Markdown, { MarkdownProps } from 'react-native-markdown-display'

const StyledMarkdown: FC<MarkdownProps> = ({ ...props }) => {
  const theme = useTheme()

  return (
    <Markdown
      style={{
        body: {
          color: theme.color.text,
          fontFamily: theme.font.default,
        },
        heading1: {
          fontFamily: theme.font.headers,
          textTransform: 'uppercase',
        },
        heading2: {
          fontFamily: theme.font.headers,
          textTransform: 'uppercase',
        },
      }}
      {...props}
    />
  )
}

export default StyledMarkdown
