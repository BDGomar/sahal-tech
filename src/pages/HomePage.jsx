import { Link } from 'react-router-dom'
import { executives } from '../data/executives'
import { useLanguage } from '../context/LanguageContext'
import SiteFooter from '../components/SiteFooter'
import CompanyLogo from '../components/CompanyLogo'
import LanguageSelector from '../components/LanguageSelector'
import './HomePage.css'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function HomePage() {
  const { t, executiveTitle } = useLanguage()

  return (
    <div className="home-page">
      <header className="home-page__header">
        <div className="home-page__header-top">
          <Link to="/" className="brand">
            <CompanyLogo variant="header" />
          </Link>
          <LanguageSelector />
        </div>
        <h1>{t('homeTitle')}</h1>
        <p>{t('homeSubtitle')}</p>
      </header>

      <main className="home-page__grid">
        {executives.map((executive) => (
          <Link key={executive.id} to={`/${executive.slug}`} className="executive-preview">
            <div className="executive-preview__avatar">
              {executive.photo ? (
                <img src={executive.photo} alt={executive.name} />
              ) : (
                <span>{getInitials(executive.name)}</span>
              )}
            </div>
            <h2>{executive.name}</h2>
            <p>{executiveTitle(executive.slug, executive.title)}</p>
            <span className="executive-preview__link">{t('viewPortfolio')}</span>
          </Link>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}
