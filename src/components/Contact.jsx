import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-24 sm:pt-32">
      <div className="page">
        {/* Terminus: the ink line ends in a bar */}
        <div aria-hidden="true" className="flex items-center">
          <span className="h-[10px] flex-1 bg-ink" />
          <span className="h-[56px] w-[10px] bg-ink" />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="contact-title" className="section-word">Contact</h2>
            <p className="mt-6 max-w-[48ch] text-[1.12rem] leading-relaxed text-ink/85">
              End of the line. I'm looking for AI engineering and full-stack roles in any industry. Based in the New York area and happy to talk.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-8 inline-flex items-center gap-3 break-all font-sign font-black tracking-[-0.02em] underline decoration-[4px] underline-offset-[0.18em] hover:decoration-route-blue"
              style={{ fontSize: 'clamp(1.35rem, 3.6vw, 2.6rem)' }}
            >
              <Mail className="hidden shrink-0 sm:block" size={36} strokeWidth={2.5} aria-hidden="true" />
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-col lg:items-stretch">
            <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn-ink justify-center">
              <Download size={18} strokeWidth={2.5} aria-hidden="true" />
              Resume
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-line justify-center">
              <Github size={18} strokeWidth={2.5} aria-hidden="true" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-line justify-center">
              <Linkedin size={18} strokeWidth={2.5} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
