import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

    const observers = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id)
            }
          },
          { threshold: 0.45 }
        )
        observer.observe(section)
        return observer
      })

    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)

    return () => {
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <a href="#home" className="text-sm font-semibold tracking-[0.28em] text-white uppercase">
          SV
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${active === id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="button-secondary">
            Let’s Connect
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="container-shell flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}