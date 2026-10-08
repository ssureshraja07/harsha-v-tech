import { Link, Navigate, useParams, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { services } from '../data'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const s = services.find((x) => x.slug === slug)
  if (!s) return <Navigate to="/" replace />
  const others = services.filter((x) => x.slug !== slug)

  return (
    <main>
      {/* hero */}
      <section className="relative flex min-h-[60vh] items-end">
        <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32">
          <Reveal delay={100}><h1 className="text-4xl font-extrabold text-white sm:text-5xl">{s.title}</h1></Reveal>
          <Reveal delay={300}><p className="mt-4 max-w-xl text-lg text-white/80">{s.short}</p></Reveal>
        </div>
      </section>

      {/* intro */}
      <section className="mx-auto max-w-4xl px-5 pt-20 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">How we help</h2>
          <p className="mt-4 leading-relaxed text-steel">{s.long}</p>
        </Reveal>
      </section>

      {/* offering cards */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal><h2 className="text-2xl font-bold sm:text-3xl">What we offer</h2></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.offerings.map((o, i) => (
            <Reveal key={o.title} delay={(i % 3) * 120}>
              <article className="h-full rounded-xl border border-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-signal hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mist text-2xl">{o.icon}</div>
                <h3 className="mt-5 text-lg font-bold">{o.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{o.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA + other services */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to start your {s.title.toLowerCase()} project?</h2>
            <button onClick={() => navigate('/', { state: { scrollTo: 'contact' } })} className="mt-6 rounded-md bg-signal px-8 py-3 font-semibold text-white transition hover:bg-blue-500">Get a free quote</button>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-12 font-semibold">Other services</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {others.map((o) => (
                <li key={o.slug}><Link to={`/services/${o.slug}`} className="inline-block rounded-full bg-white px-5 py-2 text-sm text-steel shadow-sm transition hover:bg-signal hover:text-white">{o.title}</Link></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  )
}