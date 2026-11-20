import { ArrowUpRight, Github, Play } from 'lucide-react'
import { projects } from '../data/portfolioData'
import { lineByProject, slugify } from '../data/systemMap'
import SectionHeading from './SectionHeading'
import RouteBullet from './RouteBullet'
import Dotted from './Dotted'
import StackRoute from './StackRoute'

function Links({ project }) {
  if (!project.github && !project.live) return null
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-line !py-2 text-[0.9rem]">
          <Github size={16} strokeWidth={2.5} aria-hidden="true" />
          Code
          <span className="sr-only"> for {project.title}</span>
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" className="btn-line !py-2 text-[0.9rem]">
          <Play size={16} strokeWidth={2.5} aria-hidden="true" />
          Demo
          <span className="sr-only"> of {project.title}</span>
        </a>
      )}
    </div>
  )
}

function LineStrip({ project, line }) {
  return (
    <article id={slugify(project.title)} className="grid gap-5 border-t-2 border-ink py-10 sm:grid-cols-[88px_1fr] sm:gap-8 sm:py-14">
      <RouteBullet line={line} size={64} />
      <div className="min-w-0">
        <h3 className="font-sign text-[2rem] font-black leading-[1.05] tracking-[-0.02em] sm:text-[2.5rem]">
          {project.title}
          {project.role && <span className="font-extrabold text-muted"> | {project.role}</span>}
        </h3>
        <p className="mt-2 font-bold text-muted">{project.highlight}</p>
        <p className="mt-4 max-w-[72ch] text-[1.05rem] leading-[1.7] text-ink/85">{project.description}</p>
        <StackRoute tech={project.tech} color={line.color} />
        <Links project={project} />
      </div>
    </article>
  )
}

export default function Projects() {
  const mapped = projects.filter((p) => lineByProject[p.title])
  const local = projects.filter((p) => !lineByProject[p.title])

  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-24 sm:pt-32">
      <div className="page">
        <SectionHeading
          id="projects-title"
          word="Projects"
          meta={`${mapped.length} on the map · ${local.length} more below`}
        />

        <div className="border-b-2 border-ink">
          {mapped.map((p) => (
            <LineStrip key={p.title} project={p} line={lineByProject[p.title]} />
          ))}
        </div>

        <h3 className="mt-16 font-sign text-[1.6rem] font-black tracking-[-0.01em]">More projects</h3>
        <p className="mt-1 text-muted">Course projects, notebooks, systems work and research.</p>
        <div className="mt-8 grid gap-x-12 md:grid-cols-2">
          {local.map((p) => (
            <article key={p.title} id={slugify(p.title)} className="border-t-2 border-ink py-7">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-sign text-[1.3rem] font-extrabold leading-tight">{p.title}</h4>
                {(p.github || p.live) && (
                  <a
                    href={p.github || p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 font-bold underline decoration-rule decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    {p.github ? 'Code' : 'Demo'}
                    <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span className="sr-only"> for {p.title}</span>
                  </a>
                )}
              </div>
              <p className="tracked mt-1">{p.highlight}</p>
              <p className="mt-3 text-[0.98rem] leading-[1.65] text-ink/85">{p.description}</p>
              <p className="mt-3 font-sign text-[0.85rem] font-bold leading-relaxed text-muted">
                <Dotted parts={p.tech} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
