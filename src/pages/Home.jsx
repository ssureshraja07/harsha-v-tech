import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Careers from '../components/Careers'
import Contact from '../components/Contact'

export default function Home() {
  const { state, pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state?.scrollTo) return
    const id = state.scrollTo
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      // clear the state so a refresh does not scroll again
      navigate(pathname, { replace: true, state: null })
    }, 100)
    return () => clearTimeout(t)
  }, [state, pathname, navigate])

  return <><Hero /><About /><Services /><Contact /></>
}