import styled from '@emotion/native'

export const TileGrid = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.m}px 0`};
`

export const TileRow = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding-bottom: ${({ theme }) => `${theme.spacing.m}px`};
`

type ColumnProps = { right?: boolean; left?: boolean }

export const TileColumn = styled.View<ColumnProps>`
  width: 100%;
`
export const TileColumnLeft = styled.View<ColumnProps>`
  width: 50%;
  padding-right: ${({ theme }) => `${theme.spacing.m / 2}px`};
`

export const TileColumnRight = styled.View<ColumnProps>`
  width: 50%;
  padding-left: ${({ theme }) => `${theme.spacing.m / 2}px`};
`
