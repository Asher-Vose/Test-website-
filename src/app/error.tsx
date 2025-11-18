"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Container } from "@/components";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container maxWidth="lg" className="text-center py-20">
        <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]" role="alert" aria-live="assertive">
          {/* Error icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[color:var(--color-border)]">
            <AlertCircle
              size={40}
              className="text-[color:var(--color-muted)]"
              aria-label="Error icon"
              role="img"
            />
          </div>

          {/* Error message */}
          <div className="space-y-4">
            <h2 className="text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-4xl)] font-light tracking-tight">
              Something went wrong
            </h2>
            <p className="text-[length:var(--font-size-lg)] text-[color:var(--color-muted)] font-light leading-relaxed max-w-md mx-auto">
              We encountered an unexpected error. Please try again.
            </p>
            {error.digest && (
              <p className="text-[length:var(--font-size-sm)] text-[color:var(--color-muted)] font-mono">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center pt-4">
            <button
              type="button"
              onClick={reset}
              className="inline-block px-10 py-5 rounded-full text-[length:var(--font-size-base)] font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] active:scale-95"
              style={{ background: 'var(--gradient-accent)', color: 'var(--background)' }}
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block px-10 py-5 rounded-full text-[length:var(--font-size-base)] font-medium tracking-wide transition-all duration-300 hover:scale-105 border border-[color:var(--color-border)] hover:bg-[color:var(--color-border)] active:scale-95"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
