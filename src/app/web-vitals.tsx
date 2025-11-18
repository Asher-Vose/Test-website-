"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Web Vitals monitoring component
 * Tracks Core Web Vitals (CLS, FID, FCP, LCP, TTFB, INP)
 *
 * Integrate with analytics:
 * - Google Analytics 4
 * - Vercel Analytics
 * - Custom analytics endpoint
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric);
    }

    // Send to analytics in production
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Send to Plausible if available
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(metric.name, {
        props: {
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        },
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metric),
      }).catch((error) => {
        console.error("Failed to send web vitals:", error);
      });
    }
  });

  return null;
}
