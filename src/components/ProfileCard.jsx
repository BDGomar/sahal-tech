import { organization } from '../data/executives'
import { useLanguage } from '../context/LanguageContext'
import { downloadVCard } from '../utils/vcard'
import {
  ContactIcon,
  EmailIcon,
  ExternalLinkIcon,
  GlobeIcon,
  LinkedInIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './Icons'
import CompanyLogo from './CompanyLogo'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function ProfileCard({ executive }) {
  const { t, executiveTitle } = useLanguage()
  const whatsappUrl = executive.whatsapp
    ? `https://wa.me/${executive.whatsapp.replace(/\D/g, '')}`
    : null

  return (
    <section className="profile-card">
      <div className="profile-card__avatar">
        {executive.photo ? (
          <img src={executive.photo} alt={executive.name} />
        ) : (
          <span className="profile-card__initials">{getInitials(executive.name)}</span>
        )}
      </div>

      <h2 className="profile-card__name">{executive.name}</h2>
      <p className="profile-card__title">
        {executiveTitle(executive.slug, executive.title)}
      </p>

      <div className="profile-card__org">
        <CompanyLogo variant="card" />
      </div>

      <div className="contact-list">
        <a href={`tel:${executive.phone.replace(/\s/g, '')}`} className="contact-row">
          <PhoneIcon className="contact-row__icon" />
          <span>{executive.phone}</span>
          <PhoneIcon className="contact-row__action" />
        </a>

        <a href={`mailto:${executive.email}`} className="contact-row">
          <EmailIcon className="contact-row__icon" />
          <span>{executive.email}</span>
          <EmailIcon className="contact-row__action" />
        </a>

        <a
          href={executive.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-row"
        >
          <GlobeIcon className="contact-row__icon" />
          <span>{executive.website}</span>
          <ExternalLinkIcon className="contact-row__action" />
        </a>
      </div>

      <div className="action-grid">
        <button
          type="button"
          className="action-btn"
          onClick={() => downloadVCard(executive, organization)}
        >
          <ContactIcon className="action-btn__icon action-btn__icon--green" />
          <span>{t('saveContact')}</span>
        </button>

        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            <WhatsAppIcon className="action-btn__icon action-btn__icon--whatsapp" />
            <span>{t('chatWhatsApp')}</span>
          </a>
        ) : (
          <button type="button" className="action-btn action-btn--disabled" disabled>
            <WhatsAppIcon className="action-btn__icon action-btn__icon--whatsapp" />
            <span>{t('chatWhatsApp')}</span>
          </button>
        )}

        {executive.linkedin ? (
          <a
            href={executive.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            <LinkedInIcon className="action-btn__icon action-btn__icon--linkedin" />
            <span>{t('connectLinkedIn')}</span>
          </a>
        ) : (
          <button type="button" className="action-btn action-btn--disabled" disabled>
            <LinkedInIcon className="action-btn__icon action-btn__icon--linkedin" />
            <span>{t('connectLinkedIn')}</span>
          </button>
        )}

        <a href={`mailto:${executive.email}`} className="action-btn">
          <EmailIcon className="action-btn__icon action-btn__icon--blue" />
          <span>{t('sendEmail')}</span>
        </a>
      </div>
    </section>
  )
}
