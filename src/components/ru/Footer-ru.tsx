export const FooterRu = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <span className="text-xl font-display font-bold">INTEGRAM</span>
            </div>
            <p className="text-background/80 text-sm">
              Платформа для безопасного управления данными вашего бизнеса. Ваши серверы. Ваш контроль.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#solution" className="hover:text-background transition-colors">Решения</a></li>
              <li><a href="#use-cases" className="hover:text-background transition-colors">Примеры использования</a></li>
              <li><a href="#process" className="hover:text-background transition-colors">Как это работает</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Email: info@integram.io</li>
              <li>Телефон: +7 (495) 123-4567</li>
              <li>Поддержка: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} INTEGRAM. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};