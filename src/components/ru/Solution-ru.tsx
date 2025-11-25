import { Shield, Lock, Wrench, Zap, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Полный контроль над данными",
    description: "INTEGRAM устанавливается на ваших серверах. Никаких облаков, никакой передачи данных третьим лицам."
  },
  {
    icon: Lock,
    title: "Безопасность на уровне предприятия",
    description: "Разграничение прав доступа, история изменений, резервное копирование — всё как в серьёзных корпоративных системах."
  },
  {
    icon: Wrench,
    title: "Конструктор для ваших процессов",
    description: "Не нужны программисты! Ваши сотрудники могут сами настраивать поля, правила, формы и отчёты."
  },
  {
    icon: Zap,
    title: "Автоматизация рутины",
    description: "Забудьте про ручной ввод данных и сверку файлов. Всё работает автоматически по заданным правилам."
  },
  {
    icon: Clock,
    title: "Всегда актуальные данные",
    description: "Все работают с одной версией данных в реальном времени. Никаких конфликтов версий."
  },
  {
    icon: Users,
    title: "Совместная работа",
    description: "Все видят актуальную информацию, знают, кто и что делает, прозрачность на всех этапах."
  }
];

export const SolutionRu = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            INTEGRAM — это безопасность и свобода
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Платформа, которая даёт вам инструменты для создания собственных систем управления данными, 
            не зависящих от внешних сервисов и программистов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
            Почему on-premise решение?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div>
              <h4 className="font-semibold mb-2 text-primary">✓ Ваши данные остаются у вас</h4>
              <p className="text-muted-foreground">
                Конфиденциальная информация не покидает вашу инфраструктуру. Соблюдение требований безопасности и регуляторов.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">✓ Независимость от внешних сервисов</h4>
              <p className="text-muted-foreground">
                Не зависите от доступности интернета или решений сторонних компаний. Полный контроль.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">✓ Настройка под ваши нужды</h4>
              <p className="text-muted-foreground">
                Интеграция с вашими системами, адаптация под ваши процессы и требования.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">✓ Разумная стоимость владения</h4>
              <p className="text-muted-foreground">
                Один раз платите за лицензию и работаете сколько нужно. Без ежемесячных подписок за каждого пользователя.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};