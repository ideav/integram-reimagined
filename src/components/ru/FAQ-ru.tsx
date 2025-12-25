import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько стоит установить систему на нашем предприятии?",
    answer: "Годовая стоимость лицензии — 290000 рублей. Для сравнения, это стоимость месяца работы среднего аналитика, а вы весь год сможете экономить нервы и сотни часов целой команды."
  },
  {
    question: "Насколько сложно установить и поддерживать систему?",
    answer: "Установку выполняет наша команда. Поддержка требует обычного системного администратора, знакомого с вашей серверной инфраструктурой. Мы предоставляем всю документацию."
  },
  {
    question: "Что входит в стоимость лицензии?",
    answer: "В первый год в неё входят услуги по установке и первичной настройке, а также 20 часов поддержки, что достаточно для запуска небольшого проекта."
  },
  {
    question: "Сколько времени займет перенос наших данных из Excel?",
    answer: "Обычно требуется в пределах недели, чтобы перенести все ваши данные в новую систему, сделать отчеты и дэшборды и настроить права пользователей."
  },
  {
    question: "Сможем ли мы сами дорабатывать систему после внедрения?",
    answer: "Конечно! В этом и есть главная идея конструктора. Ваши сотрудники смогут менять поля, добавлять процессы, создавать новые отчёты без программистов."
  },
  {
    question: "Что нужно от нашей IT-инфраструктуры?",
    answer: "Сервер (виртуальный или физический) под управлением Windows Server или Linux. Подойдёт самая недорогая конфигурация с 2 ядрами и 2ГБ памяти."
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