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
          title="Let’s build something meaningful"
          subtitle="Whether it is a technical full-time role, internship, collaboration, or just a conversation, I’m always open to connecting."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="panel p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold text-white">Reach out directly</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                I’m interested in software engineering opportunities, AI product work,
                and technical roles that sit close to analytics, platforms, or finance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="button-primary"
                >
                  <Mail size={16} className="mr-2" />
                  Email Me
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-300/30"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                <p className="mt-2 text-sm text-white">{personalInfo.email}</p>
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
                    <p className="mt-2 text-sm text-white">View code and projects</p>
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}