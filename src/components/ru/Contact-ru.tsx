import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactRu = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваше обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Готовы избавиться от Excel-хаоса?
          </h2>
          <p className="text-xl text-muted-foreground">
            Оставьте заявку на бесплатную консультацию. Мы покажем, как INTEGRAM может решить ваши задачи.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-card border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ваше имя *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ivan@company.ru"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Компания
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="ООО «Ваша компания»"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Расскажите о вашей задаче
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Какой процесс вы хотите автоматизировать?"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
          >
            Отправить заявку
          </Button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-display font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">info@integram.io</p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-2">Телефон</h3>
            <p className="text-muted-foreground">+7 (495) 123-4567</p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-2">Поддержка</h3>
            <p className="text-muted-foreground">24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};