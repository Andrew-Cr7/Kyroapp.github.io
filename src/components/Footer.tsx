import { Instagram, X, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "For Gyms", href: "/for-gyms" },
    { label: "London Gym Day Passes", href: "/london-gym-day-passes" },
    { label: "UK Gym Day Passes", href: "/gym-day-passes-uk" },
    {
      label: "Find a Gym While Travelling",
      href: "/how-to-find-a-gym-while-travelling",
    },
    {
      label: "Tourist Gyms in London",
      href: "/can-tourists-use-gyms-in-london",
    },
    {
      label: "Fitness While Travelling",
      href: "/fitness-while-travelling-guide",
    },
    {
      label: "Digital Nomad Gym Access",
      href: "/gym-access-for-digital-nomads",
    },
    {
      label: "Business Travel Gym Access",
      href: "/business-travel-gym-access",
    },
    { label: "Visitor Gym Access", href: "/visitor-gym-access" },
    {
      label: "Airport Layover Gym Access",
      href: "/airport-layover-gym-access",
    },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="kyro-container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary">
              Kyro
            </span>
            <span className="text-accent text-2xl font-bold">&lt;</span>
          </div>

          {/* Tagline */}
          <p className="text-center text-sm text-muted-foreground">
            Train Anywhere. Train Kyro.
          </p>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/kyroapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2.5 text-muted-foreground shadow-soft transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/kyroappofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2.5 text-muted-foreground shadow-soft transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
              aria-label="X"
            >
              <X className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/kyroapp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2.5 text-muted-foreground shadow-soft transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {currentYear} Kyro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
