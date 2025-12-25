import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactRu = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string
    };
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/send_to_telegram.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({
          title: "Спасибо за ваше обращение!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || 'Не удалось отправить заявку');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Произошла ошибка при отправке заявки. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Готовы избавиться от Excel-хаоса?
          </h2>
          <p className="text-xl text-muted-foreground">
            Оставьте заявку на бесплатную консультацию. Мы покажем, как ИНТЕГРАМ может решить ваши задачи.
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
                required
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Телефон *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ivan@company.ru"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Компания
            </label>
            <Input
              id="company"
              name="company"
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
              rows={5}
              placeholder="Какой процесс вы хотите автоматизировать?"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с <a href="https://integram.io/terms.html">Правилами использования</a>
          </p>
        </form>

      </div>
    </section>
  );
};