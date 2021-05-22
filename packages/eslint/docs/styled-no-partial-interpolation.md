# Correct `@emotion/native` template literals (styled-no-partial-interpolation)

Theme interpolation without unit is problematic in `@emotion/native` and can lead to bizzare style
errors and glitches that are hard to track.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const Element = styled.View`
  padding: ${({ theme }) => theme.something}px;
`
```

Examples of **correct** code for this rule:

```js
const Element = styled.View`
  padding: ${({ theme }) => `${theme.something}px`};
`
```
