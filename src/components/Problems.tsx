import { AlertCircle, Flag, Shield, Zap, Snail, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Version Conflicts",
    description: "\"Which file is current?\" — a classic that slows down all processes",
    color: "text-red-500"
  },
  {
    icon: Flag,
    title: "Formula Errors",
    description: "One wrong cell — and the project budget doesn't add up, you find errors after the fact",
    color: "text-orange-500"
  },
  {
    icon: Shield,
    title: "No Data Protection",
    description: "Password on file — an illusion: any employee can accidentally or intentionally copy, change, or delete all data",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Chaos and Lack of Transparency",
    description: "It's unclear who is at what stage, what tasks are pending, what the project status is",
    color: "text-yellow-500"
  },
  {
    icon: Snail,
    title: "It's Slow and Doesn't Scale",
    description: "As your business grows, your spreadsheets turn into a monster that's impossible to maintain",
    color: "text-purple-500"
  },
  {
    icon: Ban,
    title: "Limited Spreadsheet Capabilities",
    description: "No complete freedom of project development that expensive programmers have",
    color: "text-gray-500"
  }
];

export const Problems = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          If your business process lives in Excel, <br />
          <span className="text-muted-foreground">you lose money and nerves every day</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 border-l-4 border-l-accent hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon className={`w-10 h-10 ${problem.color} mb-4`} />
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/50 rounded-xl border-l-4 border-primary">
          <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
            "Excel is a great calculator, but not a business management system. It's not designed for collaboration and process control. It creates the illusion of order, but in reality — it's chaos that costs you money."
          </p>
        </div>
      </div>
    </section>
  );
};
