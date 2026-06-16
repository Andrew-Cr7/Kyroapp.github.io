import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "For Gyms", href: "/for-gyms" },
    { label: "Story", href: "/#story" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="kyro-container">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="Kyro - Home">
            <span className="font-display text-2xl font-bold text-primary">
              Kyro
            </span>
            <span className="text-accent text-2xl font-bold" aria-hidden="true">
              &lt;
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="hero" size="default" asChild>
              <a href="/#waitlist">Join Waitlist</a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-20 border-b border-border bg-background p-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}

              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href="/#waitlist" onClick={() => setIsMenuOpen(false)}>
                  Join Waitlist
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
