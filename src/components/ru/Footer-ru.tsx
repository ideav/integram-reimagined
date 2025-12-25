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
              <span className="text-xl font-display font-bold">ИНТЕГРАМ</span>
            </div>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="https://integram.io/terms.html" className="hover:text-background transition-colors">Правила использования</a></li>
              <li><a href="https://integram.io/OfferOJSC.pdf" className="hover:text-background transition-colors">Публичная оферта</a></li>
              <li><a href="https://integram.io/acct.html" className="hover:text-background transition-colors">Платежная информация</a></li>
              <li>В реестре отечественного ПО,<br />запись №30872</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#solution" className="hover:text-background transition-colors">Решения</a></li>
              <li><a href="#use-cases" className="hover:text-background transition-colors">Примеры использования</a></li>
              <li><a href="#process" className="hover:text-background transition-colors">Как это работает</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">Вопросы и ответы</a></li>
              <li><a href="https://integram.io/login.html#reg" target="_blank" className="hover:text-background transition-colors">Попробовать своими руками</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Email: info@integram.io</li>
              <li>Телефон: +7 (995) 506-0167</li>
              <li>АО Интеграм, ИНН 9716002710</li>
              <li>Телеграм: <a target="_blank" href="https://t.me/ideavr" className="hover:text-background transition-colors">t.me/ideavr</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} <a target="_blank" href="https://integram.io" className="hover:text-background transition-colors">ИНТЕГРАМ</a>. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};