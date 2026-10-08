import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { company, services } from '../data'
export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <h3 className="text-lg font-bold text-white">{company.name}</h3>
          <p className="mt-3 text-sm leading-relaxed">Our mission is to give every business software that is simple to use, quick to build and ready to grow.</p>
        </Reveal>
        <Reveal delay={150}>
          <h3 className="font-bold text-white">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            {services.slice(0, 4).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}
          </ul>
        </Reveal>
        <Reveal delay={300}>
          <h3 className="font-bold text-white">Follow us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {company.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">{s.label}</a></li>)}
          </ul>
        </Reveal>
        <Reveal delay={450}>
          <h3 className="font-bold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
            <li>{company.address}</li>
          </ul>
        </Reveal>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
    </footer>
  )
}
