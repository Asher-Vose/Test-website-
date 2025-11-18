import Link from "next/link";
import { Container } from "@/components";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container maxWidth="lg" className="text-center py-20">
        <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]">
          {/* 404 number */}
          <h1 className="text-[length:var(--font-size-6xl)] font-light tracking-tighter leading-[1] text-foreground">
            404
          </h1>

          {/* Error message */}
          <div className="space-y-4">
            <h2 className="text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-4xl)] font-light tracking-tight">
              Page Not Found
            </h2>
            <p className="text-[length:var(--font-size-lg)] text-[color:var(--color-muted)] font-light leading-relaxed max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* Back to home button */}
          <Link
            href="/"
            className="inline-block px-10 py-5 rounded-full text-[length:var(--font-size-base)] font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] active:scale-95"
            style={{ background: 'var(--gradient-accent)', color: 'var(--background)' }}
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
