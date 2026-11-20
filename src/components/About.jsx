import { about } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Dotted from './Dotted'

const education = [
  { degree: 'M.S. Financial Engineering', detail: 'September 2026 – Fall 2027' },
  { degree: 'B.S. Computer Science', detail: 'Minor in Quantitative Finance · May 2026' }
]

function StationList({ title, items }) {
  return (
    <div>
      <h3 className="tracked mb-4"><Dotted text={title} /></h3>
      <ul className="relative ml-[7px] border-l-[6px] border-ink pl-6">
        {items.map((item) => (
          <li key={item.key} className="relative pb-4 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-[5px] h-[16px] w-[16px] rounded-full border-[3px] border-ink bg-white"
            />
            {item.node}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pt-24 sm:pt-32">
      <div className="page">
        <SectionHeading id="about-title" word="About" meta="Stevens Institute of Technology · Hoboken, NJ" />

        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div className="max-w-[66ch] space-y-6 text-[1.12rem] leading-[1.75] text-ink/90">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="grid content-start gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <StationList
              title="Education · Stevens"
              items={education.map((e) => ({
                key: e.degree,
                node: (
                  <>
                    <p className="font-extrabold leading-snug">{e.degree}</p>
                    <p className="text-[0.95rem] text-muted">
                      <Dotted text={e.detail} />
                    </p>
                  </>
                )
              }))}
            />
            <StationList
              title="Certifications"
              items={about.certifications.map((c) => ({ key: c, node: <p className="font-bold leading-snug">{c}</p> }))}
            />
            <StationList
              title="Awards"
              items={about.awards.map((a) => ({ key: a, node: <p className="font-bold leading-snug">{a}</p> }))}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
