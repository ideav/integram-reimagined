import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Насколько сложно установить и поддерживать систему?",
    answer: "Установку выполняет наша команда. Поддержка требует обычного системного администратора, знакомого с вашей серверной инфраструктурой. Мы предоставляем всю документацию."
  },
  {
    question: "Сможем ли мы сами дорабатывать систему после внедрения?",
    answer: "Конечно! В этом и есть главная идея конструктора. Ваши сотрудники смогут менять поля, добавлять процессы, создавать новые отчёты без программистов."
  },
  {
    question: "Что входит в стоимость лицензии?",
    answer: "Разовая оплата лицензии на использование + оплата услуг по установке и первичной настройке. Далее — только оплата консультационной поддержки по желанию."
  },
  {
    question: "Что нужно от нашей IT-инфраструктуры?",
    answer: "Сервер (виртуальный или физический) под управлением Windows Server или Linux с достаточными ресурсами для вашей базы данных. Наша команда предоставит точные технические требования."
  }
];

export const FAQRu = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          Часто задаваемые вопросы
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