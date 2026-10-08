import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { jobs } from '../data'

export default function Careers() {
  return (
    <section id="careers" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Join our team</h2>
          <p className="mt-3 text-steel">We hire freshers and experienced developers who like to learn and ship.</p>
        </Reveal>
        <div className="mt-10 space-y-4">
          {jobs.map((j, i) => (
            <Reveal key={j.title} delay={i * 80}>
              <div className="flex flex-col justify-between gap-4 rounded-xl border border-ink/10 p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-bold">{j.title}</h3>
                  <p className="text-sm text-steel">{j.type}, {j.place}</p>
                  <p className="mt-2 text-steel">{j.note}</p>
                </div>
                <Link to="/careers" state={{ job: j.title }} className="shrink-0 rounded-md bg-ink px-5 py-2.5 text-center font-semibold text-white transition hover:bg-signal">Apply now</Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link to="/careers" className="mt-8 inline-block font-semibold text-signal hover:underline">See all openings</Link>
        </Reveal>
      </div>
    </section>
  )
}