import React, { FC } from 'react'
import TextPage from 'components/TextPage'

const rules = `
1. Każdy uczestnik KONFERENCJI MOMENTUM 2021 zobowiązany jest nosić opaskę, otrzymaną podczas rejestracji i stanowiącą jego identyfikator podczas imprezy. 
2. Każdy uczestnik KONFERENCJI MOMENTUM 2021 zobowiązany jest uczestniczyć w programie KM21.
3. W trakcie wykładów oraz społeczności obowiązuje zakaz przebywania na terenie szkoły.
4. W trakcie trwania całego wydarzenia obowiązuje całkowity zakaż zażywania jakichkolwiek środków odurzających, spożywania alkoholu oraz palenia tytoniu.
5. Za przedmioty, wyposażenie i odzież pozostawione na terenie Hali Milenium, szkół, internatu, kąpieliska i plaży organizator nie ponosi odpowiedzialności.
6. Każdy uczestnik wydarzenia zobowiązany jest do kąpania się tylko w kąpielisku strzeżonym przez ratowników wodnych oraz zgodnie z obowiązującym regulaminem kąpieliska.
7. Osoby niepełnoletnie mogą przebywać poza miejscem wydarzenia oraz kąpać się w morzu tylko w wyznaczonym miejscu pod opieką swego opiekuna.
8. Dla uczestników KONFERENCJI MOMENTUM 2021 kąpielisko i plaża czynna jest w godzinach od 13:45 do 19:30 w dniach 13-16 lipca 2021 roku. Organizator nie ponosi odpowiedzialności za osoby korzystające z kąpieliska poza dniami i godzinami określonymi w regulaminie i niestosującymi się do regulaminu kąpieliska.
9. W godzinach 00.30 – 6.00 szkoły oraz inne miejsca noclegowe zostają zamknięte. Po godzinie 00.30 nie ma możliwości wejścia do szkoły.
10. Każdy uczestnik KONFERENCJI MOMENTUM 2021 wyraża zgodę na rozpowszechnianie jego wizerunku w różnego rodzaju materiałach promocyjnych oraz w prasie i mediach.
`

const Rules: FC = () => <TextPage>{rules}</TextPage>

export default Rules
