import { Shield, Cog, Gauge, FileText, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Complete Data Sovereignty",
    description: "All information about your projects, finances, and clients stays within your network. No external access."
  },
  {
    icon: Cog,
    title: "Integration with Your Systems",
    description: "Connect INTEGRAM to your 1C, accounting programs, or other internal services via API."
  },
  {
    icon: Gauge,
    title: "Full Performance Control",
    description: "System speed depends only on the power of your servers. No \"slowdowns\" due to cloud neighbors."
  },
  {
    icon: FileText,
    title: "Corporate Standards Compliance",
    description: "Perfect for companies working with state secrets, personal data, or strict internal regulations."
  },
  {
    icon: DollarSign,
    title: "Fixed Payment",
    description: "You buy an annual license at a constant price. It's more profitable in the long term."
  }
];

export const Solution = () => {
  return (
    <section className="py-20 px-6 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            INTEGRAM — your digital workshop <br />
            <span className="text-primary">under complete control</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Imagine a unified space where all processes of your small or medium business are automated, data is protected, and employees work according to clear regulations.
          </p>
          <p className="text-lg text-foreground mt-6 max-w-3xl mx-auto">
            INTEGRAM is a constructor for creating such systems. <strong>Local version</strong> is a solution for those for whom security and confidentiality are critical.
          </p>
        </div>

        <div className="my-20 flex justify-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border-2 border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-display font-bold">Your Business Ecosystem</h3>
              <p className="text-muted-foreground mt-2">All systems integrated, all data secure</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Why your servers are your strength
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-display font-semibold mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
