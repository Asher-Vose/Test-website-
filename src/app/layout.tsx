import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebVitals } from "./web-vitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Best practice for font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashervose.com"),
  title: {
    default: "Asher Vose",
    template: "%s | Asher Vose",
  },
  description: "Personal website of Asher Vose.",
  keywords: ["Asher Vose", "portfolio", "personal website"],
  authors: [{ name: "Asher Vose" }],
  creator: "Asher Vose",
  publisher: "Asher Vose",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover", // Support notches and safe areas
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashervose.com",
    title: "Asher Vose",
    description: "Personal website of Asher Vose.",
    siteName: "Asher Vose",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asher Vose",
    description: "Personal website of Asher Vose.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicons - Add your actual favicon files to /public */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Performance: DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Asher Vose",
              url: "https://ashervose.com",
              sameAs: [
                // Add your social media profiles here
                // "https://twitter.com/yourusername",
                // "https://linkedin.com/in/yourusername",
                // "https://github.com/yourusername",
              ],
              jobTitle: "Professional", // Update with actual job title
              description: "Personal website of Asher Vose.",
            }),
          }}
        />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
