import { experience } from '../data/portfolioData'
import { lineByExperience, slugify } from '../data/systemMap'
import SectionHeading from './SectionHeading'
import RouteBullet from './RouteBullet'
import StackRoute from './StackRoute'

// Keep each half of "June 2025 – August 2025" together so the date only breaks after the dash.
function Period({ text }) {
  const [a, b] = text.split(' – ')
  return (
    <>
      <span className="whitespace-nowrap">{a}</span>
      {b && (
        <>
          {' – '}
          <span className="whitespace-nowrap">{b}</span>
        </>
      )}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-24 sm:pt-32">
      <div className="page">
        <SectionHeading id="experience-title" word="Experience" />

        <ol>
          {experience.map((job, i) => {
            const last = i === experience.length - 1
            const line = lineByExperience[job.role]
            return (
              <li
                key={job.role + job.company}
                id={slugify(job.role)}
                className="grid grid-cols-[36px_1fr] sm:grid-cols-[230px_56px_1fr]"
              >
                <p className="col-start-2 row-start-1 font-code text-[0.9rem] font-semibold leading-snug text-muted sm:col-start-1 sm:pr-6 sm:pt-[6px] sm:text-right">
                  <Period text={job.period} />
                </p>

                {/* Continuous rail with a station per role, at every width */}
                <div aria-hidden="true" className="relative col-start-1 row-span-2 row-start-1 sm:col-start-2">
                  <span className={`absolute left-1/2 top-0 w-[6px] -translate-x-1/2 bg-ink ${last ? 'h-[14px]' : 'h-full'}`} />
                  <span
                    className={`absolute left-1/2 top-[2px] -translate-x-1/2 rounded-full border-ink bg-white ${
                      i === 0 ? 'h-[26px] w-[26px] border-[5px]' : 'h-[20px] w-[20px] border-[4px]'
                    }`}
                  />
                </div>

                <div className="col-start-2 pb-14 pl-3 pt-2 sm:col-start-3 sm:row-start-1 sm:pl-2 sm:pt-0">
                  <div className="flex items-start gap-3">
                    {line && <RouteBullet line={line} size={30} className="mt-[2px]" />}
                    <h3 className="font-sign text-[1.6rem] font-black leading-tight tracking-[-0.01em]">{job.role}</h3>
                  </div>
                  <p className="mt-1 font-bold text-ink/80">{job.company}</p>
                  <ul className="mt-4 max-w-[72ch] space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="relative pl-6 text-[1.05rem] leading-[1.7] text-ink/85">
                        {/* Small station dot as the bullet, matching the map */}
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.62em] h-[9px] w-[9px] rounded-full border-2 border-ink bg-white"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {job.tech && <StackRoute tech={job.tech} color={line ? line.color : '#111111'} />}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
