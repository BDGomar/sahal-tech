import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import ProfileCard from './ProfileCard'
import ExploreSection from './ExploreSection'

export default function PortfolioLayout({ executive }) {
  return (
    <div className="portfolio-page">
      <SiteHeader />
      <main className="portfolio-page__main">
        <ProfileCard executive={executive} />
        <ExploreSection />
      </main>
      <SiteFooter />
    </div>
  )
}
