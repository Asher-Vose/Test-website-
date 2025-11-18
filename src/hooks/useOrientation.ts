"use client";

import { useMediaQuery } from "./useMediaQuery";

export type OrientationType = "portrait" | "landscape" | "square" | null;

/**
 * Hook to detect screen orientation
 * Handles portrait, landscape, and square (1:1 ratio) orientations
 *
 * @returns Object with orientation state and boolean helpers
 *
 * Usage:
 * const { orientation, isPortrait, isLandscape } = useOrientation();
 */
export function useOrientation() {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isSquare = useMediaQuery("(aspect-ratio: 1/1)");

  let orientation: OrientationType = null;
  if (isSquare) {
    orientation = "square";
  } else if (isPortrait) {
    orientation = "portrait";
  } else if (isLandscape) {
    orientation = "landscape";
  }

  return {
    orientation,
    isPortrait,
    isLandscape,
    isSquare,
  };
}
