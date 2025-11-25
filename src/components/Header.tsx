import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "What We Offer", href: "#solution" },
  { name: "How It Works", href: "#process" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Benefits", href: "#benefits" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isRussian = location.pathname === '/ru';

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-2xl font-display font-bold">INTEGRAM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to={isRussian ? "/" : "/ru"}>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                {isRussian ? "EN" : "RU"}
              </Button>
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isRussian ? "Начать" : "Get Started"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <Link to={isRussian ? "/" : "/ru"} className="block">
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  <Globe className="w-4 h-4" />
                  {isRussian ? "English" : "Русский"}
                </Button>
              </Link>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isRussian ? "Начать" : "Get Started"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
