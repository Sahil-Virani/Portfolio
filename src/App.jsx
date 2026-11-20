import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = [
  ['home', Hero],
  ['about', About],
  ['experience', Experience],
  ['projects', Projects],
  ['skills', Skills],
  ['contact', Contact]
]

// Dev only: `?from=skills` renders the page from that section down, so a full-page
// capture of the lower sections stays under the browser's screenshot height limit.
const from = import.meta.env.DEV ? new URLSearchParams(window.location.search).get('from') : null
const start = Math.max(0, sections.findIndex(([key]) => key === from))

export default function App() {
  // Deep links (e.g. /Portfolio/#projects): the browser tries the hash before React renders, so scroll once mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-ground text-ink">
      <Navbar />

      <main>
        {sections.slice(start).map(([key, Section]) => (
          <Section key={key} />
        ))}
      </main>

      <Footer />
    </div>
  )
}