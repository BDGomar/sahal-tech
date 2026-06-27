import { organization } from '../data/executives'
import { useLanguage } from '../context/LanguageContext'
import CompanyLogo from './CompanyLogo'
import { FacebookIcon, LinkedInIcon, YouTubeIcon } from './Icons'

export default function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <CompanyLogo variant="footer" />
        </div>

        <p className="site-footer__tagline">{t('orgTagline')}</p>

        <div className="site-footer__social">
          <span>{t('followUs')}</span>
          <div className="social-links">
            <a href={organization.social.linkedin} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={organization.social.facebook} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={organization.social.youtube} aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>{t('orgCopyright')}</span>
        <div className="site-footer__legal">
          <a href={organization.privacyUrl}>{t('privacy')}</a>
          <a href={organization.termsUrl}>{t('terms')}</a>
        </div>
      </div>
    </footer>
  )
}
