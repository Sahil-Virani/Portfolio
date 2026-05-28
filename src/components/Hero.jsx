import { motion } from 'framer-motion'
import { ArrowRight, Expand, Github, Linkedin, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid grid-pattern opacity-20" />
      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag">Open to Opportunities</span>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              {personalInfo.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-sky-300 sm:text-xl">
              {personalInfo.title[0]}
              <span className="block text-base font-normal text-sky-300/70 mt-1">{personalInfo.title[1]}</span>
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">
                View Projects <ArrowRight size={16} className="ml-2" />
              </a>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                View Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-sky-300" />
                <span>{personalInfo.location}</span>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Github size={16} className="text-sky-300" />
                GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Linkedin size={16} className="text-sky-300" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="panel relative overflow-hidden p-4 sm:p-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-white/5" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Resume Preview
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Quick look at my experience and background
                  </p>
                </div>

                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
                >
                  <Expand size={14} className="text-sky-300" />
                  Expand
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                <iframe
                  src={personalInfo.resume}
                  title="Resume Preview"
                  className="h-[420px] w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}