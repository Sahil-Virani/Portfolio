import { motion } from 'framer-motion'
import { about } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          tag="About"
          title="A builder focused on thoughtful software and real-world outcomes."
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
              className="grid gap-4"
            >
              {[
                ['What I Build', 'AI-native full-stack apps, agentic systems, quantitative and financial tooling, scalable APIs, and solution architectures that connect AI to real user workflows'],
                ['What I Value', 'Clarity, reliability, strong UX, maintainable code, and products that create real leverage for the people using them'],
                ["Where I'm Headed", 'Big tech, Fintech, and Wealth tech! Roles in AI engineering, solution architecture, or quant-adjacent product development where finance and intelligent systems meet'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
