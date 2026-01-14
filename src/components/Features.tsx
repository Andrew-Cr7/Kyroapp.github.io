import { MapPin, Clock, CreditCard, Globe } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="kyro-card kyro-glow group p-8 text-center">
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
      {icon}
    </div>
    <h3 className="mb-3 font-display text-xl font-bold text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Gyms Worldwide",
      description: "Access thousands of gyms across the globe. From Tokyo to Buenos Aires, your fitness journey never stops.",
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Flexible Passes",
      description: "Day, week, or month passes. Choose what works for your schedule with zero long-term commitments.",
    },
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: "Simple Pricing",
      description: "Transparent pricing with no hidden fees. Pay only for what you use, when you need it.",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Book Anywhere",
      description: "Browse, book, and access gyms instantly from your phone. No phone calls or paperwork needed.",
    },
  ];

  return (
    <section id="features" className="kyro-section bg-secondary/30">
      <div className="kyro-container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why Kyro?
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            Fitness without borders
          </h2>
          <p className="text-lg text-muted-foreground">
            We're breaking down the barriers that keep travelers from staying fit. 
            No more searching for gyms, negotiating prices, or signing long contracts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
