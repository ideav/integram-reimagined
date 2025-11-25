import { AlertCircle, Flag, Shield, Zap, Snail, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Конфликт версий",
    description: "«Какой файл актуальный?» — классика, замедляющая все процессы",
    color: "text-red-500"
  },
  {
    icon: Flag,
    title: "Ошибки в формулах",
    description: "Одна неверная ячейка — и бюджет проекта не сходится, ошибки находятся постфактум",
    color: "text-orange-500"
  },
  {
    icon: Shield,
    title: "Нет защиты данных",
    description: "Пароль на файл — иллюзия: любой сотрудник может случайно или умышленно скопировать, изменить или удалить все данные",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Хаос и непрозрачность",
    description: "Непонятно, кто на каком этапе, какие задачи висят, каков статус проекта",
    color: "text-yellow-500"
  },
  {
    icon: Snail,
    title: "Медленно и не масштабируется",
    description: "По мере роста бизнеса ваши таблицы превращаются в монстра, которого невозможно обслуживать",
    color: "text-purple-500"
  },
  {
    icon: Ban,
    title: "Ограниченные возможности таблиц",
    description: "Нет полной свободы развития проекта, которая есть у дорогих программистов",
    color: "text-gray-500"
  }
];

export const ProblemsRu = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          Если ваш бизнес-процесс живёт в Excel, <br />
          <span className="text-muted-foreground">вы теряете деньги и нервы каждый день</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 border-l-4 border-l-accent hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon className={`w-10 h-10 ${problem.color} mb-4`} />
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/50 rounded-xl border-l-4 border-primary">
          <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
            «Excel — это отличный калькулятор, но не система управления бизнесом. Он не предназначен для совместной работы и контроля процессов. Он создаёт иллюзию порядка, но на деле — это хаос, который стоит вам денег.»
          </p>
        </div>
      </div>
    </section>
  );
};