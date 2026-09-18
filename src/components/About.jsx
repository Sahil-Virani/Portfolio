import { motion } from 'framer-motion'
import { about } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const expertise = [
  'Agentic AI Systems & Multi-Agent Orchestration',
  'Production LLM Integration',
  'Full-Stack Engineering & Scalable API Architectures',
  'Quantitative Finance & Risk-Aware Analytics',
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          tag="About"
          title="AI engineer. Full-stack builder. Finance domain."
        />

        <div className="panel p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-4 content-start"
            >
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Core Focus Areas</p>
              {expertise.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 flex items-center justify-center min-h-[64px]">
                  <p className="text-sm font-medium text-slate-200">{item}</p>
                </div>
              ))}

              {[
                { label: 'Certifications', items: about.certifications },
                { label: 'Awards', items: about.awards },
              ].map((group) => (
                <div key={group.label} className="mt-4">
                  <p className="text-sm uppercase tracking-[0.15em] text-slate-400">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
