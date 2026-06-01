import { motion } from 'framer-motion'
import { experience, leadership } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function TimelineItem({ item, index, nameKey }) {
  return (
    <motion.div
      key={`${item.role}-${item[nameKey]}`}
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative mb-10"
    >
      <span className="absolute -left-[42px] top-2 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]" />
      <div className="panel p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.role}</h3>
            <p className="text-sm text-sky-300">{item[nameKey]}</p>
          </div>
          <span className="text-sm text-slate-400">{item.period}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          tag="Experience"
          title="Where I've shipped real work."
        />

        <div className="relative ml-4 border-l border-white/10 pl-8">
          {experience.map((item, index) => (
            <TimelineItem key={item.role} item={item} index={index} nameKey="company" />
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-8 text-sm uppercase tracking-[0.15em] text-slate-400">Leadership</p>
          <div className="relative ml-4 border-l border-white/10 pl-8">
            {leadership.map((item, index) => (
              <TimelineItem key={item.role} item={item} index={index} nameKey="organization" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
