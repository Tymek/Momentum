import polishMessages from 'ra-language-polish'
import { TranslationMessages } from 'ra-core'
import polyglotI18nProvider from 'ra-i18n-polyglot'

const fields = {
  name: 'nazwa',
  subject: 'temat',
  begins_at: 'od',
  ends_at: 'do',
  speaker: 'mówca',
  session: 'sesja',
  description: 'opis',
  updated_at: 'zaktualizowano',
  created_at: 'utworzono',
  location: 'lokalizacja',
  title: 'tytuł',
  content: 'treść',
  published_at: 'data publikacji',
}

const messages = {
  pl: {
    ...polishMessages,
    ra: {
      ...polishMessages.ra,
      action: {
        ...polishMessages.ra.action,
        create: 'Dodaj',
      },
      page: {
        ...polishMessages.ra.page,
        dashboard: 'Statystyki',
      },
    },
    resources: {
      session: {
        name: 'Sesja |||| Plan',
        fields,
      },
      topic: {
        name: 'Temat Equip |||| Equip',
        // name: 'Temat |||| Tematy',
        fields,
      },
      notification: {
        name: 'Powiadomienie |||| Powiadomienia',
        fields,
        empty: 'Brak powiadomień na liście',
        invite: 'Czy chcesz dodać nową wiadomość?',
      },
      speaker: {
        name: 'Mówca |||| Mówcy',
        fields: {
          ...fields,
          name: 'imię',
          image: 'zdjęcie',
        },
        empty: 'Brak osób na liście',
        invite: 'Dodać?',
      },
    },
  },
}

export default polyglotI18nProvider(
  (locale) => (locale === 'pl' ? messages[locale] : ({} as TranslationMessages)),
  'pl',
)
