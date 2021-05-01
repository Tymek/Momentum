import React from 'react'
import theme from 'utils/theme.json'

const StyleVariables: React.FC = () => (
  <style global jsx>
    {`
      :root {
        --white: ${theme.white};
        --light: ${theme.light};
        --black: ${theme.black};
        --dark: ${theme.dark};
        --primary: ${theme.primary};
        --secondary: ${theme.secondary};
        --tertiary: ${theme.tertiary};
        --muted: ${theme.muted};
        --gray: ${theme.gray};
        --primary-darken: ${theme.primaryDarken};
        --primary-lighten: ${theme.primaryLighten};
        --warning: ${theme.warning};
        --spacing: ${theme.spacing};
        --border-weight: ${theme.borderWeight};

        --font-family: ${theme.fontFamily};
        --font-family-light: ${theme.fontFamilyLight};
        --font-family-medium: ${theme.fontFamilyMedium};
        --font-family-mono: ${theme.fontFamilyMono};
        --font-weight-thin: ${theme.fontWeightThin};
        --font-weight-light: ${theme.fontWeightLight};
        --font-weight-medium: ${theme.fontWeightBold};
        --font-size-small: ${theme.fontSizeSmall};

        --border-radius: ${theme.borderRadius};

        --box-shadow: ${theme.boxShadow};
      }
    `}
  </style>
)

export default StyleVariables
