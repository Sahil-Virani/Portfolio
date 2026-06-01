import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          tag="Skills"
          title="What I build with."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}