import { SpecularButton } from "@/components/ui/specular-button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="neu-card p-10 md:p-14 rounded-[2.5rem] max-w-lg text-center">
        <div className="neu-chip-inset px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-white/10 mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">Error 404</span>
        </div>
        <h1 className="font-heading font-bold text-7xl md:text-8xl mb-4 tracking-tight text-white">404</h1>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-white">Page Not Found</h2>
        <p className="font-body text-base text-zinc-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <SpecularButton
          size="md"
          radius={9999}
          tint="#ffffff"
          tintOpacity={0.08}
          intensity={1.2}
          href="/"
        >
          Return Home
        </SpecularButton>
      </div>
    </div>
  )
}
