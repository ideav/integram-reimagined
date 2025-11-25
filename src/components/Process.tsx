const steps = [
  {
    number: "1",
    title: "Consultation and Design",
    description: "Our specialist analyzes your processes and helps design the perfect system in the constructor."
  },
  {
    number: "2",
    title: "Installation and Configuration",
    description: "We install INTEGRAM on your servers and configure it for your tasks. Your IT specialists receive all necessary documentation."
  },
  {
    number: "3",
    title: "Launch and Training",
    description: "You transfer data from Excel, train employees, and start working in a secure and automated environment."
  }
];

export const Process = () => {
  return (
    <section className="py-20 px-6 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          How does it work?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-accent transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-accent">
                <div className="text-6xl font-display font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-primary/5 rounded-2xl border-2 border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="text-5xl">💬</div>
            <div>
              <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
                "We've been managing production planning in Excel for years. It was a nightmare: constant errors, outdated data, confusion when the responsible person changed. INTEGRAM allows us not just to automate the process, but literally 'embed' our unique rules into it. And most importantly — everything stays on our server, accounting and management are at peace. This is a transition from the stone age to digital!"
              </p>
              <p className="text-muted-foreground font-semibold">
                — Typical user, Production Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
