"use client";

import { useSyncExternalStore } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

/**
 * Hook to track viewport dimensions with React 19 best practices
 * - Uses useSyncExternalStore for proper external state sync
 * - Throttles resize events with requestAnimationFrame for performance
 * - SSR-safe with proper server-side handling
 *
 * @returns Object with current viewport width and height
 *
 * Usage:
 * const { width, height } = useViewportSize();
 * if (width < 768) { ... }
 */
export function useViewportSize(): ViewportSize {
  // Throttled resize handler using requestAnimationFrame
  let rafId: number | null = null;

  const subscribe = (callback: () => void) => {
    const handleResize = () => {
      // Cancel any pending frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      // Schedule callback on next animation frame
      rafId = requestAnimationFrame(() => {
        callback();
        rafId = null;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up any pending frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  };

  const getSnapshot = (): ViewportSize => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const getServerSnapshot = (): ViewportSize => {
    return {
      width: 0,
      height: 0,
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
