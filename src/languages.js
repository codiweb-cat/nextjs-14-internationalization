import 'server-only'
import { Locale } from './i18n-config'

const languages = {
  es: () => import('./languages/es.json').then((module) => module.default),
  en: () => import('./languages/en.json').then((module) => module.default),
}

export const getLanguages = async (Locale) => (await languages[Locale]?.()) ?? await languages.es()