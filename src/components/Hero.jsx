import { useState } from 'react'
import { ArrowDown, ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { experience, personalInfo, projects } from '../data/portfolioData'
import { lines, lineById, lineLabel, slugify } from '../data/systemMap'
import SystemMap, { litLines } from './SystemMap'
import RouteBullet from './RouteBullet'

const goTo = (line) => {
  const id = line.project ? slugify(line.project) : line.experience ? slugify(line.experience) : 'skills'
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Inspector({ focus }) {
  const lit = litLines(focus)
  if (!lit) {
    return (
      <p className="text-[0.95rem] text-muted">
        Hover a line to trace the stack behind a project or role, or a station to see where that technology is shared. Click a line to open it.
      </p>
    )
  }
  const ids = [...lit]
  if (ids.length === 1) {
    const l = lineById[ids[0]]
    const p = projects.find((pr) => pr.title === l.project)
    const job = experience.find((e) => e.role === l.experience)
    const note = p ? p.highlight : job ? `${job.role}, ${job.company}` : 'Statistics, stochastic calculus, machine learning, computational methods'
    return (
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem]">
        <RouteBullet line={l} size={26} />
        <span className="font-extrabold">{lineLabel(l)}</span>
        <span className="text-muted">{note}</span>
      </p>
    )
  }
  return (
    <p className="flex flex-wrap items-center gap-2 text-[0.95rem]">
      <span className="font-extrabold">Interchange:</span>
      {ids.map((id) => (
        <span key={id} className="inline-flex items-center gap-1.5">
          <RouteBullet line={lineById[id]} size={22} />
          <span className="text-muted">{lineLabel(lineById[id])}</span>
        </span>
      ))}
    </p>
  )
}

export default function Hero() {
  const [focus, setFocus] = useState(null)

  return (
    <section id="home" aria-labelledby="hero-name" className="pt-24 sm:pt-28 xl:pt-24">
      <div className="page grid gap-10 xl:grid-cols-[minmax(340px,0.38fr)_1fr] xl:grid-rows-[auto_1fr] xl:gap-x-8 xl:gap-y-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:col-start-1 xl:row-start-1 xl:block">
          <div>
          <h1 id="hero-name" className="font-sign font-black leading-[0.84] tracking-[-0.04em]" style={{ fontSize: 'clamp(4rem, 8.4vw, 6rem)' }}>
            Sahil
            <br />
            Virani
          </h1>
          <p className="mt-5 font-sign text-[1.45rem] font-extrabold leading-tight sm:text-[1.6rem]">
            {personalInfo.title[0]}
          </p>
          </div>
          <div className="lg:pt-3 xl:pt-0">
          <div className="title-bar mt-6 lg:mt-0 xl:mt-5" />
          <p className="mt-5 max-w-[34ch] text-[1.08rem] leading-relaxed text-ink/85 lg:max-w-[44ch] xl:max-w-[34ch]">
            {personalInfo.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn-ink">
              <Download size={18} strokeWidth={2.5} aria-hidden="true" />
              Resume
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-line">
              <Github size={18} strokeWidth={2.5} aria-hidden="true" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-line" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
          </div>
        </div>

        <nav aria-label="Map legend" className="order-last xl:order-none xl:col-start-1 xl:row-start-2 xl:self-start xl:pt-7">
            <p className="tracked mb-3">Lines</p>
            <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1">
              {lines.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setFocus({ line: l.id })}
                    onMouseLeave={() => setFocus(null)}
                    onFocus={() => setFocus({ line: l.id })}
                    onBlur={() => setFocus(null)}
                    onClick={() => goTo(l)}
                    className="group flex w-full items-center gap-3 py-[3px] text-left"
                  >
                    <RouteBullet line={l} size={24} />
                    <span className="font-bold group-hover:underline group-focus-visible:underline">
                      {lineLabel(l)}
                    </span>
                    <ArrowRight size={15} strokeWidth={2.5} className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
        </nav>

        <div className="flex min-w-0 flex-col xl:col-start-2 xl:row-span-2 xl:row-start-1">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
            <SystemMap focus={focus} setFocus={setFocus} onSelect={goTo} />
          </div>
          <div className="mt-2 flex min-h-[3.5rem] items-center border-t-2 border-ink pt-3">
            <Inspector focus={focus} />
          </div>
          <p className="mt-1 text-sm text-muted md:hidden">Swipe the map sideways to see every line.</p>
        </div>
      </div>

      <div className="page mt-12 flex justify-center sm:mt-16">
        <a href="#about" className="tracked inline-flex items-center gap-2 hover:text-ink">
          <ArrowDown size={16} strokeWidth={2.5} aria-hidden="true" />
          Continue
        </a>
      </div>
    </section>
  )
}
