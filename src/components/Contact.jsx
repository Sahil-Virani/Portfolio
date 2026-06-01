import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          tag="Contact"
          title="Let's connect."
          subtitle="Seeking AI engineering and full-stack roles in fintech or big tech. Based in the New York area."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="panel p-8 sm:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-300/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                  <p className="mt-2 text-sm text-white">{personalInfo.email}</p>
                </div>
                <Mail size={18} className="text-sky-300" />
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-300/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">GitHub</p>
                  <p className="mt-2 text-sm text-white">View my work</p>
                </div>
                <Github size={18} className="text-sky-300" />
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-300/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">LinkedIn</p>
                  <p className="mt-2 text-sm text-white">Connect professionally</p>
                </div>
                <ArrowUpRight size={18} className="text-sky-300" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
