import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { jobs } from '../data'

const WHATSAPP_NUMBER = '918072904297' // country code 91 + number

const field = 'w-full rounded-md border border-blue-200 bg-white px-4 py-3 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/30'

const perks = [
  { icon: '📚', title: 'Learn every day', text: 'Work with React, Spring Boot, Flutter and cloud tools on real projects, with senior developers to guide you.' },
  { icon: '🤝', title: 'Friendly team', text: 'A small team where your ideas are heard and questions are welcome. No fear of asking.' },
  { icon: '🚀', title: 'Fast growth', text: 'Take ownership early. Good work gets bigger projects and better roles quickly.' },
]

export default function CareersPage() {
  const { state, pathname } = useLocation()
  const navigate = useNavigate()
  const [job, setJob] = useState('')
  const [sent, setSent] = useState(false)

  const applyFor = (title) => {
    setJob(title)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  // coming from the home page "Apply now" button
  useEffect(() => {
    if (!state?.job) return
    const t = setTimeout(() => {
      applyFor(state.job)
      navigate(pathname, { replace: true, state: null }) // clear so refresh does not scroll again
    }, 150)
    return () => clearTimeout(t)
  }, [state, pathname, navigate])

  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const text = [
      'New job application from HV Technologies website',
      `Position: ${d.position}`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      `Qualification: ${d.qualification}`,
      `Experience: ${d.experience}`,
      `Current location: ${d.location}`,
      `Resume link: ${d.resume || 'Not shared'}`,
      `About: ${d.about || '-'}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true); setJob(''); e.target.reset()
  }

  return (
    <main className="bg-white">
      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white pb-20 pt-36">
        <div aria-hidden className="absolute -right-24 bottom-0 hidden h-full w-[40%] bg-signal/10 md:block" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Build your career with HV Technologies</h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-xl text-lg text-steel">We hire freshers and experienced people who like to learn, build and ship. See the open roles and apply in two minutes.</p>
          </Reveal>
          <Reveal delay={500}>
            <button onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 rounded-md bg-signal px-7 py-3 font-semibold text-white transition hover:bg-blue-700">View open roles</button>
          </Reveal>
        </div>
      </section>

      {/* why join */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal><h2 className="text-2xl font-bold sm:text-3xl">Why join us</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full rounded-xl border border-blue-100 bg-blue-50/60 p-7">
                <div className="text-3xl">{p.icon}</div>
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

     

      {/* application form */}
      <section id="apply" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Apply for a role</h2>
            <p className="mt-3 text-steel">Fill in your details. Your application goes to our hiring team on WhatsApp.</p>
          </Reveal>
          <Reveal delay={200}>
            <form onSubmit={submit} className="mt-8 space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg sm:p-8">
              <select name="position" required value={job} onChange={(e) => setJob(e.target.value)} className={field}>
                <option value="" disabled>Position you are applying for</option>
                {jobs.map((j) => <option key={j.title}>{j.title}</option>)}
              </select>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full name" className={field} />
                <input name="email" type="email" required placeholder="Email address" className={field} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="phone" type="tel" required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} title="Enter a 10 digit mobile number" placeholder="Mobile number (10 digits)" className={field} />
                <input name="location" required placeholder="Current location" className={field} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="qualification" required placeholder="Qualification (e.g. B.E CSE, 2026)" className={field} />
                <select name="experience" required defaultValue="" className={field}>
                  <option value="" disabled>Experience</option>
                  <option>Fresher</option><option>Less than 1 year</option>
                  <option>1 to 3 years</option><option>3+ years</option>
                </select>
              </div>
              <input name="resume" type="url" placeholder="Resume link (Google Drive or LinkedIn)" className={field} />
              <textarea name="about" rows="4" placeholder="Tell us about yourself and your skills" className={field} />
              <button className="w-full rounded-md bg-signal py-3 font-semibold text-white transition hover:bg-blue-700">Send application on WhatsApp</button>
              {sent && <p role="status" className="text-center font-medium text-green-700">WhatsApp opened with your application. Press send there to submit it.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}