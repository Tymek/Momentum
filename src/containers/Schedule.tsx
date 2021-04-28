import React, { FC } from 'react'
import TextPage from 'components/TextPage'

const schedule = `
## Poniedziałek

12.00 - REJESTRACJA
20.00 - SESJA WIECZORNA
22.30 - FUN NIGHT

## Wtorek

8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od strachu i oceny. Wolność od pułapki oczekiwań.
  Maria Marszałek- Łuczniczka
- Wolność do bycia człowiekiem, który wnosi błogosławieństwo, a nie hejt.
  Kuba Kuzynin - Staff Room
- Wolność w relacjach. Czyste źródło.
  Jak budować zdrowy związek, relację, małżeństwo?
  Kasia i Ryszard Augustyniak - Sala Główna

13.30 - STREFA CHILL & BE ACTIVE
17.00 - MOMENTUM W AKCJI
20.00 - SESJA WIECZORNA
22.30 - FUN NIGHT

## Środa

8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od depresji, smutku.
  Gosia Bieniaszewska - Sala Główna
- Wolność do bycia tam, gdzie Kościół boi się wyjść.
  Ania Greenwood - Staff Room
- Wolność w relacjach. Wolne Serce.
  Jak być wolnym i przebaczać duże i małe sprawy?
  Gosia i Dominik Tomaszewscy - Łuczniczka

13.30 - STREFA CHILL & BE ACTIVE
17.00 - MOMENTUM W AKCJI
20.00 - SESJA WIECZORNA
22.30 - FUN NIGHT

## Czwartek

8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od zniewoleń.
  Zbyszek Zarożny - Sala Główna
- Wolność do wykorzystania 100 % swojego potencjału.
  Gosia Bieniaszewska - Staff Room
- Wolność w relacjach. Język niosący życie.
  Jak rozmawiać, komunikować w relacjach z rodzicami, przyjaciółmi, ludźmi z Kościoła i w związku??
  Daria i Kuba Marciniak - Łuczniczka

13.30 - STREFA CHILL & BE ACTIVE
17.00 - MOMENTUM W AKCJI
20.00 - SESJA WIECZORNA/WIECZÓR PRZEŁOMÓW

## Piątek

8.00 - MODLITWA
10.00 - SESJA PORANNA
12.00 - EQUIP

- Wolność od wstydu, życia przeszłością, naznaczenia.
  Gosia Bieniaszewska- Łuczniczka
- Wolność do zrozumienia siebie i odkrycia swojego powołania.
  Marysia i Marcin Lindner - Staff Room
- Wolność w relacjach. Zrozumieć i pokochać Kościół.
  Dlaczego czasami, jest tak trudno w relacjach w Kościele? Jaką
  przyjmować postawę, aby zrozumieć i pokochać Kościół?
  bp Marek Kamiński - Sala Główna

13.30 - STREFA CHILL & BE ACTIVE
16.00 - MOMENTUM W AKCJI
19.00 - SESJA WIECZORNA
22.00 - KONCERT NA PLAŻY

## Sobota

8.00 - MODLITWA
10.00 - SESJA PORANNA
`

const Schedule: FC = () => <TextPage>{schedule}</TextPage>

export default Schedule
