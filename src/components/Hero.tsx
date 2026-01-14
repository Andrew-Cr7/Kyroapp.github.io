import WaitlistForm from "./WaitlistForm";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern gym interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="kyro-container relative z-10">
        <div className="flex min-h-[calc(100vh-5rem)] items-center">
          <div className="max-w-2xl py-20">
            {/* Badge */}
            <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Coming Soon — Join the waitlist
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 animate-fade-up font-display text-5xl font-extrabold leading-tight text-foreground md:text-6xl lg:text-7xl" style={{ animationDelay: "100ms" }}>
              Train anywhere.
              <br />
              <span className="text-primary">Train Kyro.</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 animate-fade-up text-xl leading-relaxed text-muted-foreground md:text-2xl" style={{ animationDelay: "200ms" }}>
              Access gyms worldwide with flexible day, week, or month passes. 
              Perfect for travelers and digital nomads who never skip leg day.
            </p>

            {/* Waitlist Form */}
            <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
              <WaitlistForm variant="hero" />
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex animate-fade-up items-center gap-6" style={{ animationDelay: "400ms" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-xs font-semibold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> fitness enthusiasts 
                already on the waitlist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
