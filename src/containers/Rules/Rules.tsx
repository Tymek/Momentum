import React, { FC } from 'react'
import styled from '@emotion/native'

import Text from 'components/Text'

const title = 'Regulamin Konferencji Momentum 2021'
const rules = [
  'Każdy uczestnik KONFERENCJI MOMENTUM 2021 zobowiązany jest nosić opaskę, otrzymaną podczas rejestracji i stanowiącą jego identyfikator podczas imprezy. ',
  'Każdy uczestnik KONFERENCJI MOMENTUM 2021 zobowiązany jest uczestniczyć w programie KM21.',
  'W trakcie wykładów oraz społeczności obowiązuje zakaz przebywania na terenie szkoły.',
  'W trakcie trwania całego wydarzenia obowiązuje całkowity zakaż zażywania jakichkolwiek środków odurzających, spożywania alkoholu oraz palenia tytoniu.',
  'Za przedmioty, wyposażenie i odzież pozostawione na terenie Hali Milenium, szkół, internatu, kąpieliska i plaży organizator nie ponosi odpowiedzialności.',
  'Każdy uczestnik wydarzenia zobowiązany jest do kąpania się tylko w kąpielisku strzeżonym przez ratowników wodnych oraz zgodnie z obowiązującym regulaminem kąpieliska.',
  'Osoby niepełnoletnie mogą przebywać poza miejscem wydarzenia oraz kąpać się w morzu tylko w wyznaczonym miejscu pod opieką swego opiekuna.',
  'Dla uczestników KONFERENCJI MOMENTUM 2021 kąpielisko i plaża czynna jest w godzinach od 13:45 do 19:30 w dniach 13-16 lipca 2021 roku. Organizator nie ponosi odpowiedzialności za osoby korzystające z kąpieliska poza dniami i godzinami określonymi w regulaminie i niestosującymi się do regulaminu kąpieliska.',
  'W godzinach 00.30 – 6.00 szkoły oraz inne miejsca noclegowe zostają zamknięte. Po godzinie 00.30 nie ma możliwości wejścia do szkoły.',
  'Każdy uczestnik KONFERENCJI MOMENTUM 2021 wyraża zgodę na rozpowszechnianie jego wizerunku w różnego rodzaju materiałach promocyjnych oraz w prasie i mediach.',
]

const Main = styled.View`
  padding: ${({ theme }) => theme.spacing.md};
`

const Line = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`

const Title = styled(Text)`
  font-size: 32px;
  font-family: ${({ theme }) => theme.font.headers};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
`

const List = styled.View`
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.lg};
`
const Number = styled(Text)`
  width: 24px;
  text-align: right;
  padding-right: ${({ theme }) => theme.spacing.sm};
`

const Rule = styled.View`
  flex: 1;
`

const Rules: FC = () => (
  <Main>
    <Title>{title}</Title>
    <List>
      {rules.map((rule, index) => (
        <Line key={rule}>
          <Number>{index + 1}. </Number>
          <Rule>
            <Text>{rule}</Text>
          </Rule>
        </Line>
      ))}
    </List>
  </Main>
)

export default Rules
