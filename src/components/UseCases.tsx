import { DollarSign, Calendar, Package, TrendingUp, Users, Target } from "lucide-react";

const useCases = [
  {
    icon: DollarSign,
    number: "01",
    title: "Cost and Revenue Tracking by Projects",
    before: "Many file versions with 10-20 tables with unconnected data",
    after: "Unified project registry with automatic profitability calculation"
  },
  {
    icon: Calendar,
    number: "02",
    title: "Resource Planning and Task Management",
    before: "Employee workload table that constantly needs updating",
    after: "Visual Gantt charts, automatic task distribution, and deadline control"
  },
  {
    icon: Package,
    number: "03",
    title: "Production Planning and Inventory Management",
    before: "Excel statements that lag behind reality",
    after: "Real-time inventory tracking, procurement planning, and production stage control"
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Budget Calculation and Financial Planning",
    before: "Multi-sheet budget files where any change is a headache",
    after: "Flexible financial models with current data and forecasts"
  },
  {
    icon: Users,
    number: "05",
    title: "Vacation Planning and Time Tracking",
    before: "Shared table that people can't edit simultaneously",
    after: "Clear calendar with approvals, schedule integration, and automatic timesheet generation"
  },
  {
    icon: Target,
    number: "06",
    title: "Client and Sales Management — More Flexible Than CRM",
    before: "Tables with client contacts that get lost and duplicated",
    after: "Unified client database with sales funnel and automatic deal tracking"
  }
];

export const UseCases = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          We automate what you're <br />
          <span className="text-primary">already trying to manage in spreadsheets</span>
        </h2>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-[auto,1fr] gap-8 items-start group"
            >
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-accent">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-5xl font-display font-bold text-muted-foreground/20">
                  {useCase.number}
                </span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-lg">
                    <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                      BEFORE
                    </div>
                    <p className="text-foreground/80">
                      {useCase.before}
                    </p>
                  </div>
                  
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-lg">
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                      AFTER
                    </div>
                    <p className="text-foreground/80">
                      {useCase.after}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
