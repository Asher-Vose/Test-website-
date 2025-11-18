// Global window type extensions for analytics

interface Window {
  gtag?: (...args: unknown[]) => void;
  plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
}
