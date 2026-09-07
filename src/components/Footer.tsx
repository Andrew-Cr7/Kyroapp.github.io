import { Instagram, X, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerGroups = [
    {
      title: "Get Started",
      links: [
        { label: "Home", href: "/" },
        { label: "For Gyms", href: "/for-gyms" },
        { label: "London Gym Day Passes", href: "/london-gym-day-passes" },
        { label: "UK Gym Day Passes", href: "/gym-day-passes-uk" },
      ],
    },
    {
      title: "Travel & Fitness",
      links: [
        { label: "Find a Gym While Travelling", href: "/how-to-find-a-gym-while-travelling" },
        { label: "Tourist Gyms in London", href: "/can-tourists-use-gyms-in-london" },
        { label: "Fitness While Travelling", href: "/fitness-while-travelling-guide" },
        { label: "Digital Nomad Gym Access", href: "/gym-access-for-digital-nomads" },
        { label: "Visitor Gym Access", href: "/visitor-gym-access" },
        { label: "Airport Layover Gym Access", href: "/airport-layover-gym-access" },
      ],
    },
    {
      title: "Guides",
      links: [
        { label: "Use a Gym Without Membership", href: "/can-you-use-a-gym-without-a-membership" },
        { label: "Gym Day Passes Explained", href: "/gym-day-passes-explained" },
        { label: "Find Gyms With Day Passes", href: "/how-to-find-gyms-with-day-passes" },
        { label: "Flexible Gym Passes", href: "/flexible-gym-passes-for-travellers" },
        { label: "Finding a Gym in a New City", href: "/finding-a-gym-in-a-new-city" },
        { label: "Short-Term Gym Alternatives", href: "/short-term-gym-membership-alternatives" },
        { label: "Tourist Gym Pass", href: "/tourist-gym-pass" },
        { label: "Stay Fit While Travelling", href: "/how-to-stay-fit-while-travelling" },
      ],
    },
    {
      title: "Business",
      links: [
        { label: "Business Travel Gym Access", href: "/business-travel-gym-access" },
      ],
    },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/kyroapp/", Icon: Instagram },
    { label: "X", href: "https://x.com/kyroappofficial", Icon: X },
    { label: "LinkedIn", href: "https://linkedin.com/company/kyroapp", Icon: Linkedin },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="kyro-container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr_150px] lg:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-bold text-primary">Kyro</span>
              <span className="text-accent text-3xl font-bold">&lt;</span>
            </div>
            <p className="mt-5 max-w-[150px] text-sm leading-6 text-muted-foreground">
              Train Anywhere.<br />Train Kyro.
            </p>
          </div>

          <nav
            className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4"
            aria-label="Footer navigation"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:border-l lg:border-border lg:pl-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-2.5 text-muted-foreground shadow-soft transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} Kyro. All rights reserved.</span>
          <a
            href="/privacy-policy"
            className="transition-colors hover:text-primary hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
