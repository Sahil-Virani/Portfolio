export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink py-8 sm:mt-32">
      <div className="page flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sahil Virani</p>
        <p>Map routed by hand. Built with React, Vite and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
