import React from 'react'

const Style: React.FC = () => (
  <style global jsx>
    {`
      /* Reset */

      html {
        position: relative;
        height: 100%;
      }

      body {
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: 100%;
        background: var(--light);
        color: var(--black);
        font-family: var(--font-family);
        font-weight: 300;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Framework-specific configuration */

      #__next {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      #__next > div {
        background-position: center center;
      }
    `}
  </style>
)

export default Style
