const useCases = [
  {
    title: "Производственное планирование",
    before: "20+ файлов Excel, постоянная сверка версий, ошибки в расчётах материалов",
    after: "Единая система планирования с автоматическим расчётом потребности в материалах и контролем сроков"
  },
  {
    title: "Управление проектами",
    before: "Таблицы с задачами теряются, непонятно кто что делает, сроки срываются",
    after: "Прозрачная система с распределением задач, контролем выполнения и автоматической отчётностью"
  },
  {
    title: "Складской учёт",
    before: "Ручной ввод остатков, расхождения при инвентаризации, потери из-за ошибок",
    after: "Автоматический учёт движения товаров с историей операций и контролем минимальных остатков"
  },
  {
    title: "Бюджетирование",
    before: "Месяц на сбор данных от подразделений, множество ошибок при консолидации",
    after: "Каждое подразделение вносит данные в единую систему, консолидация происходит автоматически"
  },
  {
    title: "CRM и продажи",
    before: "Данные о клиентах в личных таблицах менеджеров, теряются при увольнении",
    after: "Централизованная база клиентов с историей взаимодействий и автоматическими напоминаниями"
  },
  {
    title: "HR и табельный учёт",
    before: "Таблицы с отпусками и больничными путаются, сложно посчитать фонд оплаты труда",
    after: "Автоматизированный учёт рабочего времени с интеграцией в расчёт зарплаты"
  }
];

export const UseCasesRu = () => {
  return (
    <section className="py-20 px-6 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          Примеры использования
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          ИНТЕГРАМ помогает автоматизировать любые процессы, где раньше использовались Excel-файлы
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-accent transition-all duration-300 border"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">
                {useCase.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="font-semibold text-sm text-muted-foreground">Было:</span>
                  </div>
                  <p className="text-muted-foreground ml-8">{useCase.before}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-sm text-foreground">Стало:</span>
                  </div>
                  <p className="text-foreground ml-8 font-medium">{useCase.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};