const steps = [
  {
    number: "1",
    title: "Консультация и проектирование",
    description: "Наш специалист анализирует ваши процессы и помогает спроектировать идеальную систему в конструкторе."
  },
  {
    number: "2",
    title: "Установка и настройка",
    description: "Мы устанавливаем INTEGRAM на ваши серверы и настраиваем под ваши задачи. Ваши IT-специалисты получают всю необходимую документацию."
  },
  {
    number: "3",
    title: "Запуск и обучение",
    description: "Вы переносите данные из Excel, обучаете сотрудников и начинаете работать в безопасной и автоматизированной среде."
  }
];

export const ProcessRu = () => {
  return (
    <section className="py-20 px-6 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          Как это работает?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-accent transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-accent">
                <div className="text-6xl font-display font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-primary/5 rounded-2xl border-2 border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="text-5xl">💬</div>
            <div>
              <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
                «Мы годами вели планирование производства в Excel. Это был кошмар: постоянные ошибки, неактуальные данные, путаница при смене ответственного. INTEGRAM позволяет не просто автоматизировать процесс, а буквально „вшить" в него наши уникальные правила. И главное — всё остаётся на нашем сервере, бухгалтерия и руководство спокойны. Это переход из каменного века в цифровой!»
              </p>
              <p className="text-muted-foreground font-semibold">
                — Типичный пользователь, директор по производству
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};