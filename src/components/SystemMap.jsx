import { motion, useReducedMotion } from 'framer-motion'
import { lines, stations } from '../data/systemMap'

const DIM = '#c8cbc6'
const toPath = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')

// focus: null | { line: id } | { station: id }
export function litLines(focus) {
  if (!focus) return null
  if (focus.line) return new Set([focus.line])
  const st = stations.find((s) => s.id === focus.station)
  return st ? new Set(st.lines) : null
}

export default function SystemMap({ focus, setFocus, onSelect }) {
  // `?still` in the URL skips the draw-in, for screenshots and print.
  const reduce = useReducedMotion() || (typeof window !== 'undefined' && window.location.search.includes('still'))
  const lit = litLines(focus)
  const isLit = (id) => !lit || lit.has(id)

  return (
    <svg
      viewBox="70 40 1000 660"
      className="block h-auto w-full min-w-[720px] md:min-w-0"
      role="img"
      aria-label="System map of Sahil Virani's work. Each project or role is a coloured line and each technology it uses is a station. Lines meet at shared technologies such as FastAPI, TypeScript, Gemini API and Node.js. A purple Math line runs through statistics, stochastic calculus, machine learning, Monte Carlo methods and computational methods."
      onMouseLeave={() => setFocus(null)}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {lines.map((l, i) => (
          <motion.path
            key={l.id}
            d={toPath(l.points)}
            stroke={isLit(l.id) ? l.color : DIM}
            strokeWidth={12}
            style={{ mixBlendMode: 'multiply', transition: 'stroke 220ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </g>

      {/* Wide invisible hit paths so a line is easy to grab with a pointer */}
      <g fill="none" stroke="transparent" strokeWidth={30} strokeLinecap="round" strokeLinejoin="round">
        {lines.map((l) => (
          <path
            key={l.id}
            d={toPath(l.points)}
            className="cursor-pointer"
            onMouseEnter={() => setFocus({ line: l.id })}
            onClick={() => onSelect(l)}
          />
        ))}
      </g>

      <motion.g
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: reduce ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {stations.map((s) => {
          const on = s.lines.some(isLit)
          const [dx, dy, anchor] = s.at
          const shared = s.kind !== 'stop'
          return (
            <g
              key={s.id}
              className="cursor-default"
              onMouseEnter={() => setFocus({ station: s.id })}
            >
              {s.kind === 'capsule' && (
                <rect x={s.x - 14} y={s.y - 24} width={28} height={48} rx={14} fill="none" stroke="#111" strokeWidth={4} />
              )}
              {s.kind === 'interchange' && (
                <circle cx={s.x} cy={s.y} r={13} fill="none" stroke="#111" strokeWidth={4} />
              )}
              {s.kind === 'stop' && (
                <circle cx={s.x} cy={s.y} r={5.5} fill="#fff" stroke={on ? '#111' : DIM} strokeWidth={2.5} />
              )}
              <text
                x={s.x + dx}
                y={s.y + dy}
                textAnchor={anchor}
                className="font-sign"
                style={{
                  fontSize: shared ? 19 : 16.5,
                  fontWeight: shared ? 800 : 650,
                  fill: on ? '#111' : '#9a9e99',
                  transition: 'fill 220ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {s.label}
              </text>
            </g>
          )
        })}
      </motion.g>
    </svg>
  )
}
