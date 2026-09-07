import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "How it works", href: "/#how-it-works" },
    { label: "For Gyms", href: "/for-gyms" },
    { label: "Explore", href: "/#features" },
    { label: "About", href: "/#story" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-lg">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between lg:h-24">
          <a href="/" className="flex items-center gap-2" aria-label="Kyro - Home">
            <span className="font-display text-3xl font-bold tracking-tight text-primary lg:text-[38px]">
              Kyro
            </span>
            <span
              className="font-display text-3xl font-bold text-primary/50 lg:text-[38px]"
              aria-hidden="true"
            >
              &lt;
            </span>
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[15px] font-medium text-foreground/85 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              variant="hero"
              className="h-[52px] rounded-xl px-7 text-base font-semibold shadow-none"
              asChild
            >
              <a href="/#waitlist">Join Waitlist</a>
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-20 border-y border-border bg-background p-6 shadow-soft lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}

              <Button variant="hero" size="lg" className="mt-2" asChild>
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
