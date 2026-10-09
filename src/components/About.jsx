import Reveal from './Reveal'

const stats = [['50+', 'Projects delivered'], ['30+', 'Happy clients'], ['5', 'Core services']]

const expertise = [
  { icon: '🌐', title: 'Web Applications', text: 'React, Spring Boot and MySQL apps that are fast and secure.' },
  { icon: '📱', title: 'Mobile Apps', text: 'Android and iOS apps from one Flutter codebase.' },
  { icon: '☁️', title: 'Cloud & DevOps', text: 'AWS, Docker and CI/CD for safe, quick releases.' },
  { icon: '📊', title: 'ERP & CRM', text: 'Sales, stock, billing and customers in one system.' },
  { icon: '📈', title: 'Digital Marketing', text: 'SEO, ads and social media that bring real enquiries.' },
]

const reasons = [
  'Clear plans and honest timelines',
  'One team for design, code, cloud and marketing',
  'Clean code that is easy to maintain',
  'Support that continues after launch',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1.1fr_1fr]">
        {/* image stays in view while the content scrolls */}
        <Reveal from="left" className="lg:sticky lg:top-24">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Harsha V Technologies team working together"
            className="h-80 w-full rounded-2xl object-cover shadow-2xl sm:h-[420px] lg:h-[600px]"
          />
        </Reveal>

        <div>
          <Reveal from="right" delay={100}>
            <h2 className="text-3xl font-bold sm:text-4xl">About Harsha V Technologies</h2>
          </Reveal>
          <Reveal from="right" delay={200}>
            <p className="mt-5 leading-relaxed text-steel">
              Harsha V Technologies is a software company that turns business problems into working products. Our team of developers, designers and marketers works with you from the first idea to launch and beyond.
            </p>
          </Reveal>
          <Reveal from="right" delay={300}>
            <p className="mt-4 leading-relaxed text-steel">
              We work with startups, shops and growing companies. Whether you need a website, a mobile app or a full business system, we keep things simple: clear plans, honest timelines and code that is easy to maintain.
            </p>
          </Reveal>

          {/* mission and vision */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <div className="text-2xl">🎯</div>
                <h3 className="mt-3 text-lg font-bold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  To give every business software that is simple to use, quick to build and ready to grow, at a fair price.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="h-full rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <div className="text-2xl">🔭</div>
                <h3 className="mt-3 text-lg font-bold">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  To become a trusted technology partner for businesses across India, known for quality work and long term relationships.
                </p>
              </div>
            </Reveal>
          </div>

          {/* core expertise */}
          <Reveal>
            <h3 className="mt-10 text-xl font-bold">Core Expertise</h3>
          </Reveal>
          <ul className="mt-4 space-y-3">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <li className="flex items-start gap-4 rounded-lg border border-ink/10 p-4 transition hover:border-signal hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mist text-xl">{e.icon}</span>
                  <div>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-sm text-steel">{e.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* why choose us */}
          <Reveal>
            <h3 className="mt-10 text-xl font-bold">Why Choose Us</h3>
          </Reveal>
          <ul className="mt-4 space-y-2">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={i * 80}>
                <li className="flex gap-3 text-steel"><span className="font-bold text-signal">✓</span>{r}</li>
              </Reveal>
            ))}
          </ul>

         
        </div>
      </div>
    </section>
  )
}