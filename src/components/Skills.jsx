import { experience, projects, skills } from '../data/portfolioData'
import { lines, lineById, lineLabel } from '../data/systemMap'
import SectionHeading from './SectionHeading'
import RouteBullet from './RouteBullet'

const norm = (s) => s.toLowerCase().replace(/\s+api$/, '').trim()

const MATH_STOPS = new Set(['statistics', 'stochastic calculus', 'machine learning', 'computational methods', 'monte carlo simulation'])

// Which map lines stop at this skill: lines whose project or experience entry lists it
// in its tech array, plus the Math line's coursework.
function routesFor(skill) {
  const n = norm(skill)
  return lines.filter((l) => {
    if (!l.project && !l.experience) return MATH_STOPS.has(n)
    const p = projects.find((pr) => pr.title === l.project)
    const job = experience.find((e) => e.role === l.experience)
    return [...(p?.tech ?? []), ...(job?.tech ?? [])].some((t) => norm(t) === n)
  })
}

export default function Skills() {
  const math = lineById['Σ']

  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-24 sm:pt-32">
      <div className="page">
        <SectionHeading id="skills-title" word="Skills" meta="Station index · bullets show the projects and roles that use each skill" />

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => {
            const isMath = group.category.startsWith('Mathematics')
            return (
              <div key={group.category}>
                <div className="flex items-center gap-3 border-b-[6px] pb-3" style={{ borderColor: isMath ? math.color : '#111' }}>
                  {isMath && <RouteBullet line={math} size={30} />}
                  <h3 className="font-sign text-[1.25rem] font-black leading-tight">{group.category}</h3>
                </div>
                {isMath && (
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    From the M.S. in Financial Engineering and the B.S. in CS: the maths behind honest model evaluation and reasoning under uncertainty.
                  </p>
                )}
                <ul className="mt-2">
                  {group.items.map((item) => {
                    const routes = routesFor(item)
                    return (
                      <li key={item} className="flex items-center justify-between gap-4 border-b border-rule py-[9px]">
                        <span className="font-bold">{item}</span>
                        {routes.length > 0 && (
                          <span className="flex shrink-0 gap-1" aria-label={`Used in ${routes.map(lineLabel).join(', ')}`}>
                            {routes.map((r) => (
                              <RouteBullet key={r.id} line={r} size={20} />
                            ))}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
