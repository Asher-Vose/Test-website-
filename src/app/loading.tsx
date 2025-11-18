import { Container } from "@/components";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container maxWidth="lg" className="text-center py-20">
        <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
          {/* Spinner */}
          <div className="inline-flex items-center justify-center">
            <div
              className="w-12 h-12 border-2 border-[color:var(--color-border)] border-t-[color:var(--color-accent)] rounded-full animate-spin"
              role="status"
              aria-label="Loading"
            />
          </div>

          {/* Loading text */}
          <p className="text-[length:var(--font-size-base)] text-[color:var(--color-muted)] font-light">
            Loading...
          </p>
        </div>
      </Container>
    </div>
  );
}
