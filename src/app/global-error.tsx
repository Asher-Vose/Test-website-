"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

/**
 * Global error boundary for root layout errors
 * Required by Next.js 16 for production error handling
 *
 * This catches errors in:
 * - Root layout (app/layout.tsx)
 * - Template errors
 * - Top-level loading/not-found errors
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: '#fafafa',
        color: '#1a1a1a',
      }}>
        <div
          role="alert"
          aria-live="assertive"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            {/* Error icon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#e5e7eb',
                marginBottom: '32px',
              }}
            >
              <AlertCircle
                size={40}
                style={{ color: '#6b7280' }}
                aria-label="Error icon"
                role="img"
              />
            </div>

            {/* Error message */}
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '300',
              marginBottom: '16px',
              letterSpacing: '-0.025em',
            }}>
              Something went wrong
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              fontWeight: '300',
              marginBottom: '24px',
              lineHeight: '1.625',
            }}>
              We encountered a critical error. Please try refreshing the page.
            </p>

            {error.digest && (
              <p style={{
                fontSize: '0.875rem',
                color: '#9ca3af',
                fontFamily: 'monospace',
                marginBottom: '32px',
              }}>
                Error ID: {error.digest}
              </p>
            )}

            {/* Actions */}
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button
                type="button"
                onClick={reset}
                style={{
                  padding: '16px 40px',
                  borderRadius: '9999px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Try Again
              </button>

              <a
                href="/"
                style={{
                  padding: '16px 40px',
                  borderRadius: '9999px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  background: 'transparent',
                  color: '#1a1a1a',
                  border: '1px solid #e5e7eb',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#e5e7eb'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
