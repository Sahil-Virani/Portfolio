import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolioData'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ground transition-[border-color] duration-200 ${
        scrolled ? 'border-b-2 border-ink' : 'border-b-2 border-transparent'
      }`}
    >
      <div className="page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-sign font-black">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-ink pt-[2px] text-[0.8rem] text-ground">
            SV
          </span>
          <span className="text-[1.05rem]">Sahil Virani</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`font-sign text-[0.95rem] font-bold underline-offset-[0.4em] ${
                  isActive ? 'underline decoration-[3px]' : 'no-underline hover:underline'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn-ink !px-4 !py-2">
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="border-t-2 border-ink bg-ground md:hidden">
          <div className="page flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-sign text-lg font-extrabold"
              >
                {item.label}
              </a>
            ))}
            <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn-ink mt-3 self-start">
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
