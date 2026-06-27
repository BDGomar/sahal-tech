import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import CompanyLogo from './CompanyLogo'
import LanguageSelector from './LanguageSelector'
import './Portfolio.css'

export default function SiteHeader({ showHero = true }) {
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <div className="site-header__top">
        <Link to="/" className="brand">
          <CompanyLogo variant="header" />
        </Link>

        <LanguageSelector />
      </div>

      {showHero && (
        <div className="site-header__hero">
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      )}
    </header>
  )
}
