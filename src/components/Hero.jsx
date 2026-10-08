import Reveal from './Reveal'
import herImage from "../images/hv-home.jpg";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img src={herImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
        <Reveal delay={100}>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">Software that moves your business forward.</h1>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            HV Technologies builds web apps, mobile apps, cloud systems and ERP/CRM tools for growing companies in India and beyond.
          </p>
        </Reveal>
        <Reveal delay={600}>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => go('services')} className="rounded-md bg-signal px-7 py-3 font-semibold text-white transition hover:bg-blue-500">See our services</button>
            <button onClick={() => go('contact')} className="rounded-md border border-white/60 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-ink">Talk to us</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}