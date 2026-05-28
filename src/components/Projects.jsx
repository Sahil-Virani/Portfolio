import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Play } from 'lucide-react'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          tag="Projects"
          title="Selected work"
          subtitle="A few projects that reflect my interests across AI, full-stack development, systems, and finance-oriented product design."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel card-hover flex h-full flex-col p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  {project.highlight}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className="mt-6 flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white"
                    >
                      <Github size={16} className="text-sky-300" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white"
                    >
                      <Play size={16} className="text-sky-300" />
                      Watch Demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
