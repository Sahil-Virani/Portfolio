// Joins parts with a small drawn station dot. Overpass draws "·" off-centre in its own
// advance width, so a centred circle replaces the glyph and matches the map's stations.
export default function Dotted({ parts, text }) {
  const items = parts ?? text.split(' · ')
  return items.map((p, i) => (
    <span key={p + i}>
      {i > 0 && (
        <>
          <span
            aria-hidden="true"
            className="relative top-[-0.12em] mx-[0.55em] inline-block h-[0.28em] w-[0.28em] rounded-full bg-current align-middle"
          />
          <span className="sr-only">, </span>
        </>
      )}
      {p}
    </span>
  ))
}
