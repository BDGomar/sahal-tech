import { useEffect, useRef, useState } from 'react'
import { languages } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'
import { ChevronDownIcon, GlobeIcon } from './Icons'
import './LanguageSelector.css'

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0]

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  function selectLanguage(code) {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div className="lang-selector-wrap" ref={containerRef}>
      <button
        type="button"
        className={`lang-selector${open ? ' lang-selector--open' : ''}`}
        aria-label={t('changeLanguage')}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <GlobeIcon className="lang-selector__icon" />
        <span>{currentLanguage.label}</span>
        <ChevronDownIcon className="lang-selector__chevron" />
      </button>

      {open && (
        <ul className="lang-selector__menu" role="listbox" aria-label={t('changeLanguage')}>
          {languages.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                role="option"
                aria-selected={language === item.code}
                className={`lang-selector__option${language === item.code ? ' is-active' : ''}`}
                onClick={() => selectLanguage(item.code)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
