import { resolve } from 'path'
import { RuleTester } from 'eslint'
import rule from '../lib/rules/styled-no-partial-interpolation'

const ruleTester = new RuleTester({
  parser: resolve(__dirname, '..', 'node_modules', '@typescript-eslint', 'parser'),
})

ruleTester.run('styled-no-partial-interpolation', rule, {
  valid: [
    {
      code:
        'const Wrapper = styled.View`\n' +
        '  background: ${({ theme }) => theme.color.gray};\n' +
        '  padding: ${({ theme }) => `${theme.spacing.m}px`};\n' +
        '  margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};\n' +
        '`;',
    },
  ],
  invalid: [
    {
      code:
        'const Wrapper = styled.View`\n' +
        '  background: ${({ theme }) => theme.color.gray};\n' +
        '  padding: ${({ theme }) => theme.spacing.m}px;\n' +
        '  margin-bottom: ${({ theme }) => `${theme.spacing.m}px`};\n' +
        '`;',
      errors: [
        {
          message: 'Do not use CSS units in this way. See `packages/eslint/docs`',
        },
      ],
    },
  ],
})
