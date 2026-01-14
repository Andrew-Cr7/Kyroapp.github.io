import { Plane, Building2, Dumbbell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Plane className="h-8 w-8" />,
      step: "01",
      title: "Arrive Anywhere",
      description: "Land in a new city? Open Kyro to discover partner gyms near you instantly.",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      step: "02",
      title: "Pick Your Gym",
      description: "Browse photos, amenities, and reviews. Choose the perfect gym for your workout style.",
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      step: "03",
      title: "Start Training",
      description: "Book your pass, show your QR code at the door, and get your workout in. Simple as that.",
    },
  ];

  return (
    <section id="how-it-works" className="kyro-section">
      <div className="kyro-container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            How It Works
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            Three steps to your next workout
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
          
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated">
                    {item.icon}
                  </div>
                  <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground shadow-soft">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="max-w-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
