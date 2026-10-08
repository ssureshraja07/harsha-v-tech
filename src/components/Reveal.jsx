import { useEffect, useRef, useState } from 'react'

// Wrap anything in <Reveal> to fade and slide it in when it scrolls into view.
// delay (ms) lets you stagger items one after another.
export default function Reveal({ children, delay = 0, from = 'up', className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setShow(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect() }
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const hidden = { up: 'translate-y-10', left: '-translate-x-10', right: 'translate-x-10' }[from]
  return (
    <div ref={ref} style={{ transitionDelay: show ? `${delay}ms` : '0ms' }}
      className={`reveal transition-all duration-700 ease-out ${show ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hidden}`} ${className}`}>
      {children}
    </div>
  )
}
