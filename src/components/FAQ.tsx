import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How difficult is it to install and maintain the system?",
    answer: "Installation is performed by our team. Maintenance requires a standard system administrator familiar with your server infrastructure. We provide all documentation."
  },
  {
    question: "Can we modify the system ourselves after implementation?",
    answer: "Of course! That's the main idea of the constructor. Your employees can change fields, add processes, and create new reports without programmers."
  },
  {
    question: "What's included in the license cost?",
    answer: "One-time payment for the license to use + payment for installation and initial configuration services. Then — only payment for consultation support if desired."
  },
  {
    question: "What do we need from our IT infrastructure?",
    answer: "A server (virtual or physical) running Windows Server or Linux with sufficient resources for your database. Our team will provide exact technical requirements."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border shadow-soft hover:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-display font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
