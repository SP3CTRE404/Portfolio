import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6 gradient-text">404</h1>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-foreground">Page Not Found</h2>
        <p className="font-body text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="font-body font-semibold hover-lift neon-border">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
