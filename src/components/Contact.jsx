import { useState } from 'react'
import Reveal from './Reveal'
import contactImg from '../images/contact.jpg'

const WHATSAPP_NUMBER = '918072904297' // country code 91 + number

const field = 'w-full rounded-md border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/30'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const text = [
      'New enquiry from HV Technologies website',
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      `Service: ${d.service || 'Not selected'}`,
      `Message: ${d.message}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true)
    e.target.reset()
  }

  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal from="left">
          <img src={contactImg} alt="Send us a message" className="mx-auto w-full max-w-md lg:max-w-none" />
        </Reveal>

        <div>
          <Reveal from="right">
            <h2 className="text-3xl font-bold sm:text-4xl"> Harsha V Technologies</h2>
            <p className="mt-3 text-steel">Tell us what you need. We reply within one working day.</p>
          </Reveal>
          <Reveal from="right" delay={200}>
            <form onSubmit={submit} className="mt-8 space-y-4 rounded-xl bg-white p-6 shadow-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={field} />
                <input name="email" type="email" required placeholder="Email address" className={field} />
              </div>
              <input
                name="phone" type="tel" required inputMode="numeric"
                pattern="[0-9]{10}" maxLength={10}
                title="Enter a 10 digit mobile number"
                placeholder="Mobile number (10 digits)" className={field}
              />
              <select name="service" className={field} defaultValue="">
                <option value="" disabled>Service you need</option>
                <option>Web Application Development</option>
                <option>Mobile App Development</option>
                <option>Cloud Solutions</option>
                <option>ERP & CRM Solutions</option>
                <option>Digital Marketing</option>
              </select>
              <textarea name="message" required rows="4" placeholder="Tell us about your project" className={field} />
              <button className="w-full rounded-md bg-signal py-3 font-semibold text-white transition hover:bg-blue-500">Send on WhatsApp</button>
              {sent && (
                <p role="status" className="text-center font-medium text-green-700">
                  WhatsApp opened with your message. Press send there to reach us.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}