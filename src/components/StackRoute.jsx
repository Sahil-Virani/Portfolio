// A stack drawn as a short route: one coloured track with a station per technology.
export default function StackRoute({ tech, color, className = 'mt-6' }) {
  return (
    <ul aria-label="Stack" className={`flex flex-wrap gap-y-5 ${className}`}>
      {tech.map((t, i) => (
        <li key={t} className="relative pr-7">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-[5px] h-[8px] ${i === tech.length - 1 ? 'w-[16px]' : 'w-full'}`}
            style={{ background: color }}
          />
          <span aria-hidden="true" className="absolute left-0 top-0 h-[18px] w-[18px] rounded-full border-[3px] border-ink bg-white" />
          <span className="block pt-7 text-[0.9rem] font-bold leading-none">{t}</span>
        </li>
      ))}
    </ul>
  )
}
