/**
 * Analytics utilities
 * Ready for integration with:
 * - Google Analytics 4
 * - Plausible Analytics
 * - Vercel Analytics
 * - Custom analytics
 */

export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

/**
 * Track a custom event
 * Auto-detects and sends to all configured analytics providers
 */
export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Plausible Analytics
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(action, {
      props: { category, label, value },
    });
  }

  // Custom analytics endpoint
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, category, label, value, timestamp: Date.now() }),
    }).catch((error) => {
      console.error("Failed to track event:", error);
    });
  }
}

/**
 * Track a page view
 */
export function trackPageView(url: string) {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
      page_path: url,
    });
  }

  // Plausible Analytics (auto-tracks page views)
  // Custom analytics
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "pageview", url, timestamp: Date.now() }),
    }).catch((error) => {
      console.error("Failed to track page view:", error);
    });
  }
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string, label?: string) {
  trackEvent({
    action: "click",
    category: "outbound_link",
    label: label || url,
  });
}

/**
 * Track file download
 */
export function trackDownload(filename: string) {
  trackEvent({
    action: "download",
    category: "file",
    label: filename,
  });
}

/**
 * Track email click
 */
export function trackEmail() {
  trackEvent({
    action: "click",
    category: "contact",
    label: "email",
  });
}

/**
 * Track social media click
 */
export function trackSocial(network: string, action: string = "click") {
  trackEvent({
    action,
    category: "social",
    label: network,
  });
}
