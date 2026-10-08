import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
          <p className="mt-3 max-w-xl text-steel">Pick a service to see how we work and what you get.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative block h-full min-h-72 overflow-hidden rounded-xl shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* card background image + dark overlay */}
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50 transition group-hover:from-ink/95" />

                <div className="relative flex h-full flex-col p-7">
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-white/80">{s.short}</p>
                  <span className="mt-auto inline-block pt-5 font-semibold text-blue-300">View details</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}