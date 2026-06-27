import { exploreCards } from '../data/executives'
import { useLanguage } from '../context/LanguageContext'
import { ArrowRightIcon, BuildingIcon, ExploreCardIcon } from './Icons'

export default function ExploreSection() {
  const { t, exploreCard } = useLanguage()

  return (
    <section className="explore-section">
      <div className="explore-section__divider">
        <BuildingIcon className="explore-section__divider-icon" />
        <span>{t('exploreCompany')}</span>
      </div>

      <div className="explore-grid">
        {exploreCards.map((card) => {
          const labels = exploreCard(card.id)
          return (
            <a
              key={card.id}
              href={card.url}
              className={`explore-card explore-card--${card.color}`}
            >
              <ExploreCardIcon name={card.icon} className="explore-card__icon" />
              <h3>{labels.title}</h3>
              <span className="explore-card__link">
                {labels.linkLabel}
                <ArrowRightIcon className="explore-card__arrow" />
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
