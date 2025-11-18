"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * Tailwind breakpoints matching our design system
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * Hook to detect current breakpoint
 * Mobile-first approach - returns true when viewport is >= breakpoint
 *
 * @returns Object with boolean properties for each breakpoint
 *
 * Usage:
 * const breakpoint = useBreakpoint();
 * if (breakpoint.md) { ... }
 */
export function useBreakpoint() {
  const sm = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const md = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const lg = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const xl = useMediaQuery(`(min-width: ${breakpoints.xl})`);
  const xxl = useMediaQuery(`(min-width: ${breakpoints["2xl"]})`);

  return {
    sm,
    md,
    lg,
    xl,
    "2xl": xxl,
    // Helper properties
    isMobile: !md,
    isTablet: md && !lg,
    isDesktop: lg,
  };
}
