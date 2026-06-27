import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'sahaltech-language'

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && translations[stored]) return stored
  return 'fr'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => {
    const copy = translations[language]

    function t(key) {
      return copy[key] ?? key
    }

    function exploreCard(id) {
      return copy.exploreCards[id] ?? { title: id, linkLabel: '' }
    }

    function executiveTitle(slug, fallback) {
      return copy.executiveTitles[slug] ?? fallback
    }

    return { language, setLanguage, t, exploreCard, executiveTitle }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
