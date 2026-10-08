import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import CareersPage from './pages/CareersPage'
import SupportPage from './pages/SupportPage'

// stop the browser from restoring the old scroll position on refresh
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<Home />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </>
  )
}