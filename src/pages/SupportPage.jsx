import { useState } from 'react'
import Reveal from '../components/Reveal'
import supportImg from '../images/support.jpg'

const WHATSAPP_NUMBER = '918072904297' // country code 91 + number

const field = 'w-full rounded-md border border-blue-200 bg-white px-4 py-3 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/30'

const steps = [
  { icon: '📝', title: 'Raise a request', text: 'Fill the support form below, call us or message us on WhatsApp. Tell us what is wrong and how urgent it is.' },
  { icon: '🔎', title: 'We review it', text: 'Our team checks your request, confirms it with you and assigns it to the right engineer.' },
  { icon: '🛠️', title: 'We fix it', text: 'We find the root cause and fix it on a test copy first, so your live system stays safe.' },
  { icon: '✅', title: 'Delivered and checked', text: 'The fix goes live, we confirm with you that everything works, and we share a short summary.' },
]

const covers = [
  { icon: '🐞', title: 'Bug fixes', text: 'Something broken or not working as expected? We find it and fix it quickly.' },
  { icon: '🔄', title: 'Updates & upgrades', text: 'We keep your libraries, servers and apps up to date so nothing becomes outdated or unsafe.' },
  { icon: '🔐', title: 'Security & backups', text: 'Regular security patches and tested backups, so your data stays protected.' },
  { icon: '⚡', title: 'Speed & performance', text: 'Slow pages or heavy servers get checked and tuned for a faster experience.' },
  { icon: '✨', title: 'Small changes & new features', text: 'Need a new button, report or page? We add it without breaking what already works.' },
  { icon: '🎓', title: 'Training & guidance', text: 'We train your team to use the system confidently and answer questions any time.' },
]

const plans = [
  { name: 'Basic Care', note: 'For small websites and simple apps',
    items: ['Bug fixes', 'Email and WhatsApp support', 'Monthly health check', 'Working hours support'] },
  { name: 'Standard Care', note: 'For growing businesses', popular: true,
    items: ['Everything in Basic', 'Priority response', 'Security updates and backups', 'Small changes every month', 'Monthly report'] },
  { name: 'Premium Care', note: 'For business critical systems',
    items: ['Everything in Standard', 'Fastest response', 'Server and uptime monitoring', 'Dedicated support engineer', 'Phone support'] },
]

const reasons = [
  { icon: '⚡', title: 'Fast response', text: 'Urgent issues are picked up first. You always hear from a real person who knows your project.' },
  { icon: '👨‍💻', title: 'The team that built it', text: 'The developers who built your system support it, so there is no time lost explaining everything again.' },
  { icon: '💬', title: 'Simple, clear updates', text: 'No technical jargon. We tell you what went wrong, what we did and what happens next.' },
  { icon: '🛡️', title: 'Prevention first', text: 'We watch your system and fix small problems before they become big ones.' },
  { icon: '🤝', title: 'Long term partner', text: 'We stay with you after launch. As your business grows, your support grows with it.' },
  { icon: '💎', title: 'Support you can trust', text: 'Honest advice, fair pricing and work done properly. Our aim is to give you the best support you have ever had.' },
]

const faqs = [
  ['How do I raise a support request?', 'Use the form on this page, message us on WhatsApp or call us. The form sends all details to our support team on WhatsApp, so nothing is missed.'],
  ['How quickly will you reply?', 'We acknowledge every request quickly, and urgent issues are handled first. The exact response time depends on your support plan.'],
  ['Do you support projects built by other companies?', 'Yes. We first review the code and setup, then tell you honestly what we can support and how.'],
  ['What if the problem is urgent?', 'Choose "Urgent" in the form, then call us. Urgent issues jump to the front of the queue.'],
  ['Is support included after launch?', 'Every project includes a free support period after launch. After that you can pick any of our care plans.'],
]

export default function SupportPage() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const text = [
      'New support request from HV Technologies website',
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      `Company / Project: ${d.project || '-'}`,
      `Issue type: ${d.type}`,
      `Priority: ${d.priority}`,
      `Details: ${d.details}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true); e.target.reset()
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="bg-white">
      {/* hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white pb-16 pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <Reveal delay={100}>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Support that keeps your business running</h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 max-w-lg text-lg text-steel">Launch is only the start. Our team stays with you after delivery to fix problems fast, keep your systems safe and help your software grow.</p>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => scrollTo('request')} className="rounded-md bg-signal px-7 py-3 font-semibold text-white transition hover:bg-blue-700">Raise a support request</button>
                <button onClick={() => scrollTo('plans')} className="rounded-md border border-signal px-7 py-3 font-semibold text-signal transition hover:bg-signal hover:text-white">View care plans</button>
              </div>
            </Reveal>
          </div>
          <Reveal from="right" delay={200}>
            <img src={supportImg} alt="HV Technologies support team" className="mx-auto w-full max-w-lg rounded-2xl object-cover shadow-xl lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      {/* how support works */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">How our support works</h2>
          <p className="mx-auto mt-3 max-w-xl text-steel">After your project goes live, this is what happens every time you need us.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-xl border border-blue-100 bg-blue-50/60 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">{s.icon}</div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* what we cover */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal><h2 className="text-2xl font-bold sm:text-3xl">What our support covers</h2></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {covers.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 120}>
                <article className="h-full rounded-xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-signal hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">{c.icon}</div>
                  <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* plans */}
      <section id="plans" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Support care plans</h2>
          <p className="mx-auto mt-3 max-w-xl text-steel">Pick the plan that fits your business. Talk to us and we will set it up for you.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className={`relative flex h-full flex-col rounded-xl border p-7 ${p.popular ? 'border-signal bg-signal text-white shadow-2xl' : 'border-blue-100 bg-white shadow-sm'}`}>
                {p.popular && <span className="absolute -top-3 left-7 rounded-full bg-white px-3 py-1 text-xs font-bold text-signal shadow">Most popular</span>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.popular ? 'text-white/80' : 'text-steel'}`}>{p.note}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.items.map((it) => <li key={it} className="flex gap-3 text-sm"><span className="font-bold">✓</span>{it}</li>)}
                </ul>
                <button onClick={() => scrollTo('request')} className={`mt-8 rounded-md py-3 font-semibold transition ${p.popular ? 'bg-white text-signal hover:bg-blue-50' : 'bg-signal text-white hover:bg-blue-700'}`}>Get this plan</button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* why choose our support */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Why choose our support</h2>
            <p className="mx-auto mt-3 max-w-xl text-steel">We treat your software like our own. That is why our clients stay with us for years.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 120}>
                <div className="flex h-full gap-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl">{r.icon}</span>
                  <div>
                    <h3 className="font-bold">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal><h2 className="text-center text-2xl font-bold sm:text-3xl">Frequently asked questions</h2></Reveal>
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 80}>
              <details className="group rounded-lg border border-blue-100 bg-white p-5 open:border-signal open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}<span className="text-signal transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-steel">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* request form */}
      <section id="request" className="bg-blue-50 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Raise a support request</h2>
            <p className="mt-3 text-steel">Tell us what is wrong. Your request goes to our support team on WhatsApp.</p>
          </Reveal>
          <Reveal delay={200}>
            <form onSubmit={submit} className="mt-8 space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={field} />
                <input name="email" type="email" required placeholder="Email address" className={field} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="phone" type="tel" required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} title="Enter a 10 digit mobile number" placeholder="Mobile number (10 digits)" className={field} />
                <input name="project" placeholder="Company or project name" className={field} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select name="type" required defaultValue="" className={field}>
                  <option value="" disabled>Issue type</option>
                  <option>Bug or error</option><option>Website or app is down</option>
                  <option>Slow performance</option><option>Update or new feature</option>
                  <option>Security concern</option><option>Other</option>
                </select>
                <select name="priority" required defaultValue="" className={field}>
                  <option value="" disabled>Priority</option>
                  <option>Low</option><option>Medium</option><option>High</option><option>Urgent</option>
                </select>
              </div>
              <textarea name="details" required rows="5" placeholder="Describe the problem. What happened, and when did it start?" className={field} />
              <button className="w-full rounded-md bg-signal py-3 font-semibold text-white transition hover:bg-blue-700">Send request on WhatsApp</button>
              {sent && <p role="status" className="text-center font-medium text-green-700">WhatsApp opened with your request. Press send there to submit it.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}