import WaitlistForm from "./WaitlistForm";
import { Sparkles } from "lucide-react";

const WaitlistCTA = () => {
  return (
    <section id="waitlist" className="kyro-section">
      <div className="kyro-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-card to-secondary p-8 md:p-16 shadow-elevated">
          {/* Decorative background elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Limited Early Access</span>
            </div>
            
            <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              Ready to train anywhere?
            </h2>
            
            <p className="mb-10 text-lg text-muted-foreground">
              Join our waitlist to be the first to know when Kyro launches. 
              Early members get exclusive perks and founding member benefits.
            </p>
            
            <WaitlistForm variant="section" />
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Founding member perks
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
