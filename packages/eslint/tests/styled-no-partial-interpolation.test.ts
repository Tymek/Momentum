import rule from '../lib/rules/styled-no-partial-interpolation'
import { RuleTester } from 'eslint'

const ruleTester = new RuleTester()
ruleTester.run('styled-no-partial-interpolation', rule, {
  valid: [
    {
      code:
        'const Wrapper = styled.View`' +
        'background: ${({ theme }) => theme.color.gray};' +
        'padding: ${({ theme }) => `${theme.spacing.m}px`};' +
        'margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};' +
        '`;',
    },
  ],

  invalid: [
    {
      code:
        'const Wrapper = styled.View`' +
        'background: ${({ theme }) => theme.color.gray};' +
        'padding: ${({ theme }) => theme.spacing.m}px;' +
        'margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};' +
        '`;',
      errors: [
        {
          message: 'Should fail on interpolating padding',
        },
      ],
    },
  ],
})
