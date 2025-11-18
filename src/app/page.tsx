import { Container } from "@/components";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content - Accessibility best practice */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[color:var(--color-accent)] focus:text-[color:var(--color-background)] focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <header role="banner">
        <Container maxWidth="lg" className="pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40">
          <div className="text-center space-y-8 md:space-y-10 animate-[fadeInUp_0.8s_ease-out]">
            <h1 className="text-[length:var(--font-size-5xl)] md:text-[length:var(--font-size-6xl)] font-light tracking-tighter text-foreground leading-[1.1]">
              {siteConfig.hero.title}
            </h1>
            <p className="text-[length:var(--font-size-lg)] md:text-[length:var(--font-size-xl)] text-[color:var(--color-muted)] max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
              {siteConfig.hero.subtitle}
            </p>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main role="main" id="main-content">
        {/* About Section */}
        <section aria-labelledby="about-heading" className="relative py-20 md:py-32 lg:py-40" style={{ background: 'var(--gradient-subtle)' }}>
          <Container maxWidth="lg">
            <div className="space-y-20 md:space-y-28">
              <div className="text-center">
                <h2 id="about-heading" className="text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-4xl)] font-light tracking-tighter mb-6">
                  {siteConfig.about.heading}
                </h2>
                <div className="w-16 h-[1px] bg-[color:var(--color-border)] mx-auto opacity-50" aria-hidden="true"></div>
              </div>

              <div className="max-w-3xl mx-auto text-center">
                <p className="text-[length:var(--font-size-lg)] text-[color:var(--color-muted)] font-light leading-relaxed">
                  {siteConfig.about.description}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section aria-labelledby="contact-heading">
          <Container maxWidth="lg" className="py-20 md:py-32 lg:py-40">
            <div className="max-w-xl mx-auto text-center space-y-10">
              <div className="space-y-6">
                <h2 id="contact-heading" className="text-[length:var(--font-size-3xl)] md:text-[length:var(--font-size-4xl)] font-light tracking-tighter">
                  {siteConfig.contact.heading}
                </h2>
                <div className="w-16 h-[1px] bg-[color:var(--color-border)] mx-auto opacity-50" aria-hidden="true"></div>
              </div>

              <p className="text-[length:var(--font-size-lg)] text-[color:var(--color-muted)] font-light leading-relaxed">
                {siteConfig.contact.description}
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block px-10 py-5 rounded-full text-[length:var(--font-size-base)] font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] active:scale-95"
                style={{ background: 'var(--gradient-accent)', color: 'var(--background)' }}
                aria-label={`Email ${siteConfig.email}`}
              >
                {siteConfig.contact.buttonText}
              </a>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="border-t border-[color:var(--color-border)] opacity-50">
        <Container maxWidth="lg" className="py-16">
          <div className="text-center space-y-6">
            <p className="text-[length:var(--font-size-sm)] text-[color:var(--color-muted)] font-light tracking-wide">
              {siteConfig.footer.copyright}
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
