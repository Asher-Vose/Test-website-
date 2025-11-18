"use client";

import { useEffect, useState } from "react";

interface SafeAreaInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * Hook to get safe area insets for devices with notches/rounded corners
 * Returns pixel values for safe areas (0 if not applicable)
 *
 * @returns Object with safe area inset values in pixels
 *
 * Usage:
 * const { top, right, bottom, left } = useSafeArea();
 */
export function useSafeArea(): SafeAreaInsets {
  const [insets, setInsets] = useState<SafeAreaInsets>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    const updateInsets = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      setInsets({
        top: parseInt(computedStyle.getPropertyValue("--safe-area-top") || "0"),
        right: parseInt(computedStyle.getPropertyValue("--safe-area-right") || "0"),
        bottom: parseInt(computedStyle.getPropertyValue("--safe-area-bottom") || "0"),
        left: parseInt(computedStyle.getPropertyValue("--safe-area-left") || "0"),
      });
    };

    updateInsets();
    window.addEventListener("resize", updateInsets);

    return () => window.removeEventListener("resize", updateInsets);
  }, []);

  return insets;
}
