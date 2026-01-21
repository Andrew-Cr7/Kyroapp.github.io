import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Kyro work?",
    answer:
      "Kyro connects you with gyms worldwide through our app. Simply browse available gyms in your destination, choose a pass duration (day, week, or month) and purchase directly through the app. Show your digital pass at the gym and you're ready to train!",
  },
  {
    question: "What types of passes are available?",
    answer:
      "We offer flexible pass options to suit any travel schedule: Day passes for quick workouts, Week passes for short trips, and Month passes for extended stays. Each pass gives you full access to the gym's facilities during your selected period.",
  },
  {
    question: "Which gyms are part of the Kyro network?",
    answer:
      "We're partnering with quality gyms in major cities and travel destinations worldwide. Our network includes everything from boutique fitness studios to fully-equipped commercial gyms. The full list will be available when we launch!",
  },
  {
    question: "How much do gym passes cost?",
    answer:
      "Pass prices vary by gym and location, but are always significantly cheaper than traditional memberships for short-term access. Day passes typically start from $10-25, with better value for longer durations. No hidden fees, no contracts.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. We use industry-standard encryption and secure payment processing. Your payment information is never stored on our servers, and all transactions are protected.",
  },
  {
    question: "Can I cancel or get a refund?",
    answer:
      "Unused passes can be refunded up to 24 hours before the start date. If a gym is unexpectedly closed during your pass period, we'll extend your pass or provide a full refund. Your satisfaction is our priority.",
  },
  {
    question: "When will Kyro launch?",
    answer:
      "We're working hard to launch soon! Join our waitlist to be the first to know when we go live and get exclusive early access benefits.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="kyro-section bg-secondary/30">
      <div className="kyro-container">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            FAQ
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            Questions? We've got answers.
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Kyro and how it works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border/50 bg-card px-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
