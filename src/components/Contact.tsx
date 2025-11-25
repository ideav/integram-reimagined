import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Sent!",
      description: "Our specialist will contact you soon to discuss your project.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 px-6 gradient-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to secure and automate <br />
            <span className="text-primary">your business?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill out the form, and our specialist will contact you for a free analysis of your processes and INTEGRAM implementation cost calculation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 md:p-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <Input 
              id="name" 
              name="name"
              placeholder="Your name" 
              required 
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone
            </label>
            <Input 
              id="phone" 
              name="phone"
              type="tel" 
              placeholder="+1 (555) 123-4567" 
              required 
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              E-mail
            </label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="your@email.com" 
              required 
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Brief description of your main task
            </label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Tell us about your business processes and what you'd like to automate..." 
              required 
              className="min-h-32"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-accent hover:scale-[1.02] transition-all"
          >
            {isSubmitting ? "Sending..." : "Discuss My Project"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By clicking the button, you consent to the processing of personal data and agree to the Terms of Use
          </p>
        </form>
      </div>
    </section>
  );
};
