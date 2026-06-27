import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import HomePage from './pages/HomePage'
import ExecutivePage from './pages/ExecutivePage'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<ExecutivePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
