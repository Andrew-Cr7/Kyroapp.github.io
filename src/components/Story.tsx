import { Globe2, Heart, Users } from "lucide-react";

const Story = () => {
  return (
    <section id="story" className="kyro-section bg-primary text-primary-foreground">
      <div className="kyro-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
              Our Story
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
              Built by travelers, for travelers
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-primary-foreground/80">
              <p>
                We're two brothers who love fitness and travel. Having visited 50+ countries 
                between us, we've spent years juggling our workouts with life on the road—searching 
                for gyms in new places, dealing with confusing prices, and skipping workouts when 
                we couldn't find a place to train.
              </p>
              <p>
                Having both played sport at a high level—including semi-professional rugby—and 
                being passionate about fitness since our teens, we knew there had to be a better way.
              </p>
              <p className="font-semibold text-primary-foreground">
                So we created Kyro.
              </p>
            </div>
          </div>

          {/* Stats/Values */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-primary-foreground/5 p-6 backdrop-blur-sm">
              <Globe2 className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-display text-3xl font-bold">50+</h3>
              <p className="text-primary-foreground/70">Countries visited by our founding team</p>
            </div>
            <div className="rounded-2xl bg-primary-foreground/5 p-6 backdrop-blur-sm">
              <Users className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-display text-3xl font-bold">3</h3>
              <p className="text-primary-foreground/70">Continents where our team works from</p>
            </div>
            <div className="col-span-full rounded-2xl bg-primary-foreground/5 p-6 backdrop-blur-sm">
              <Heart className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-display text-2xl font-bold">Our Mission</h3>
              <p className="text-primary-foreground/70">
                To make fitness accessible globally. Whether you're in Tokyo, Buenos Aires, or 
                Cape Town, Kyro helps you keep your routine on track and discover new fitness communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
