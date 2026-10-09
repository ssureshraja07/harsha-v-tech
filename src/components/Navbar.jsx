import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { services } from '../data'
import hvLogo from '../images/hv-logo.jpg'

const links = [
  { label: 'Home', id: 'home' }, { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services', menu: true },
  { label: 'Careers', id: 'careers' },{ label: 'Support', id: 'support' }, { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)      // mobile menu
  const [mobSvc, setMobSvc] = useState(false)  // mobile services list
  const [dd, setDd] = useState(false)          // desktop dropdown
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const onHome = pathname === '/'
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => { setOpen(false); setMobSvc(false); setDd(false) }

  const go = (id) => {
    closeAll()
    if (id === 'careers') { navigate('/careers'); return }
    if (onHome) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (id === 'careers' || id === 'support') { navigate('/' + id); return }
    else navigate('/', { state: { scrollTo: id } })
  }

  const words = ['Ideas', 'Code', 'Growth']

  function RotatingTag() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 1800)
    return () => clearInterval(t)
  }, [])
  return (
    <span key={i} className="tag-in block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
      {words[i]}
    </span>
  )
}

  const dark = solid || !onHome || open

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${dark ? 'bg-ink/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
        <button onClick={() => go('home')} className="flex items-center gap-3 text-left text-white" aria-label="Harsha V Technologies home">
  <img src={hvLogo} alt="" className="h-10 w-10 shrink-0 rounded-md bg-white object-cover" />
  <span className="flex flex-col leading-tight">
    <span className="font-display text-base font-bold md:text-lg">
      <span className="block md:inline">Harsha V</span>
      <span className="block md:ml-1.5 md:inline">Technologies</span>
    </span>

    {/* desktop: all three together, static */}
    <span className="hidden gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold md:flex">
      {words.map((w, i) => (
        <span key={w}>{w}{i < words.length - 1 && <span className="ml-2">·</span>}</span>
      ))}
    </span>

    {/* mobile: one by one */}
    <span className="mt-0.5 md:hidden"><RotatingTag /></span>
  </span>
</button>

        {/* desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => l.menu ? (
            <li key={l.id} className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
              <button onClick={() => go(l.id)} onFocus={() => setDd(true)} aria-haspopup="true" aria-expanded={dd}
                className="flex items-center gap-1 py-6 text-sm font-medium text-white/80 transition hover:text-white">
                {l.label} <span className={`text-[10px] transition-transform ${dd ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`absolute left-1/2 top-full w-72 -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-200 ${dd ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
                <p className="bg-mist px-5 py-3 font-display text-sm font-bold">Our Services</p>
                <ul>
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} onClick={closeAll} className="flex items-center gap-3 px-5 py-3 text-sm text-ink transition hover:bg-signal hover:text-white">
                        <span>{s.icon}</span>{s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className="text-sm font-medium text-white/80 transition hover:text-white">{l.label}</button>
            </li>
          ))}
        </ul>

        <button className="text-2xl text-white md:hidden" onClick={() => { setOpen(!open); setMobSvc(false) }} aria-label="Toggle menu" aria-expanded={open}>{open ? '✕' : '☰'}</button>
      </nav>

      {/* mobile: everything centered */}
      <div className={`grid overflow-hidden transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className="flex min-h-0 flex-col items-center gap-1 overflow-hidden bg-ink text-center">
          {links.map((l) => l.menu ? (
            <li key={l.id} className="flex w-full flex-col items-center">
              <button onClick={() => setMobSvc(!mobSvc)} aria-expanded={mobSvc} className="flex items-center gap-2 py-3 text-lg font-medium text-white/90">
                {l.label} <span className={`text-[10px] transition-transform ${mobSvc ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`grid w-full transition-all duration-300 ${mobSvc ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="min-h-0 overflow-hidden bg-white/5">
                  <p className="pt-3 font-display text-sm font-bold text-signal">Our Services</p>
                  <ul className="pb-3">
                    {services.map((s) => (
                      <li key={s.slug}><Link to={`/services/${s.slug}`} onClick={closeAll} className="block py-2 text-white/80 hover:text-white">{s.title}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ) : (
            <li key={l.id} className="w-full"><button onClick={() => go(l.id)} className="w-full py-3 text-lg font-medium text-white/90">{l.label}</button></li>
          ))}
          <li className="pb-4" />
        </ul>
      </div>
    </header>
  )
}
