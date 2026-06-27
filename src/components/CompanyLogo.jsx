import { organization } from '../data/executives'
import './CompanyLogo.css'

export default function CompanyLogo({ variant = 'default', className = '' }) {
  return (
    <span
      className={`company-logo-wrap company-logo-wrap--${variant}${className ? ` ${className}` : ''}`}
    >
      <img src={organization.logo} alt={organization.name} className="company-logo" />
    </span>
  )
}
