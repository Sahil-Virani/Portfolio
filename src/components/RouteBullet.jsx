export default function RouteBullet({ line, size = 28, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 select-none items-center justify-center rounded-full font-sign font-black leading-none ${className}`}
      style={{
        width: size,
        height: size,
        background: line.color,
        color: line.ink,
        fontSize: size * 0.56,
        paddingTop: size * 0.08
      }}
    >
      {line.id}
    </span>
  )
}
