"use client";

import { useEffect, useState } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

/**
 * Hook to track viewport dimensions
 * Useful for dynamic responsive calculations
 *
 * @returns Object with current viewport width and height
 *
 * Usage:
 * const { width, height } = useViewportSize();
 * if (width < 768) { ... }
 */
export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
