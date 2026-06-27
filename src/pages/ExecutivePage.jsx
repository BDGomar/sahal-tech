import { Navigate, useParams } from 'react-router-dom'
import { getExecutiveBySlug } from '../data/executives'
import PortfolioLayout from '../components/PortfolioLayout'

export default function ExecutivePage() {
  const { slug } = useParams()
  const executive = getExecutiveBySlug(slug)

  if (!executive) {
    return <Navigate to="/" replace />
  }

  return <PortfolioLayout executive={executive} />
}
