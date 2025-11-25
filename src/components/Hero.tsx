import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="gradient-hero min-h-[85vh] flex items-center justify-center px-6 py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Stop working in crisis mode. <br />
            <span className="text-white/90">Your Excel is a time bomb.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            INTEGRAM is secure and convenient data management. The platform is installed within your company: automate accounting, planning, and reporting without entrusting data to third-party services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Get Free Consultation
            </Button>
          </div>
          <p className="text-white/80 text-lg pt-8">
            100% your data. Your servers. Your control.
          </p>
        </div>
      </div>
    </section>
  );
};
