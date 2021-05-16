import React, { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderAPI } from '@testing-library/react-native' // eslint-disable-line node/no-unpublished-import
import '@testing-library/jest-native/extend-expect' // eslint-disable-line node/no-unpublished-import

import { ThemeProvider } from '@emotion/react'
import theme from 'config/theme'

const CustomThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderAPI =>
  render(ui, { wrapper: CustomThemeProvider, ...options })

export default customRender
