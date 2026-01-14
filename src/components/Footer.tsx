import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-card p-2.5 text-muted-foreground shadow-soft transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-card p-2.5 text-muted-foreground shadow-soft transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
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
