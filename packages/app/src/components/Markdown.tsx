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
          fontSize: theme.fontSize.m,
        },
        heading1: {
          fontFamily: theme.font.headers,
          textTransform: 'uppercase',
          paddingTop: theme.spacing.xs,
          paddingBottom: theme.spacing.xs,
          fontSize: theme.fontSize.xl,
        },
        heading2: {
          fontFamily: theme.font.headers,
          textTransform: 'uppercase',
          paddingTop: theme.spacing.xs,
          fontSize: theme.fontSize.l,
        },
        list_item: {
          marginBottom: theme.spacing.xs,
        },
        strong: {
          fontWeight: 'normal',
          fontFamily: theme.font.headers,
        },
        em: {
          fontStyle: 'normal',
          fontFamily: theme.font.accent,
        },
      }}
      {...props}
    />
  )
}

export default StyledMarkdown
