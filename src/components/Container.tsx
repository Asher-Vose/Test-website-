import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
}

/**
 * Responsive container component with mobile-first design
 *
 * @param maxWidth - Maximum width constraint (default: "xl")
 * @param padding - Apply responsive padding (default: true)
 *
 * Usage:
 * <Container maxWidth="lg">Content</Container>
 */
export function Container({
  children,
  className = "",
  maxWidth = "xl",
  padding = true,
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  const paddingClasses = padding ? "px-4 sm:px-6 md:px-8 lg:px-12" : "";

  return (
    <div className={`mx-auto w-full ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}
