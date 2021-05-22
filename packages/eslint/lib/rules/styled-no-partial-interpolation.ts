/* eslint-disable node/no-unpublished-import */
import type { Rule } from 'eslint'
import type { Identifier, TemplateElement, SourceLocation } from 'estree'

const expr = /^[a-z]+;/ // Starts with CSS unit (px, em, rem, etc);
const message = 'Do not use CSS units in this way. See `packages/eslint/docs`'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Be careful with template literals in @emotion/native.' +
        'See packages/eslint/docs/styled-no-partial-interpolation.md',
    },
  },
  create: (context: Rule.RuleContext) => ({
    TaggedTemplateExpression(node) {
      if (
        node.tag.type === 'MemberExpression' &&
        (node?.tag?.object as Identifier)?.name === 'styled'
      ) {
        node?.quasi?.quasis?.map((templateElement: TemplateElement) => {
          const code = templateElement?.value?.raw
          if (expr.test(code)) {
            const { start } = templateElement.loc as SourceLocation
            const length = code.split(';')[0].length
            const loc = {
              start,
              end: { line: start.line, column: start.column + length + 2 },
            }
            console.log(loc)
            context.report({ node: templateElement, message, loc })
          }
        })
      }
    },
  }),
}

export default rule
