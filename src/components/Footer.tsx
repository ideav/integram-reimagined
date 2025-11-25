export const Footer = () => {
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
              Secure data management platform for your business. Your servers. Your control.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#solution" className="hover:text-background transition-colors">Solutions</a></li>
              <li><a href="#use-cases" className="hover:text-background transition-colors">Use Cases</a></li>
              <li><a href="#process" className="hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Email: info@integram.io</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Support: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} INTEGRAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
