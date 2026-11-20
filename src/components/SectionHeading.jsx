import Dotted from './Dotted'

export default function SectionHeading({ id, word, meta }) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="title-bar" />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 id={id} className="section-word">
          {word}
        </h2>
        {meta && (
          <p className="tracked sm:pb-2 sm:text-right">
            <Dotted text={meta} />
          </p>
        )}
      </div>
    </header>
  )
}
