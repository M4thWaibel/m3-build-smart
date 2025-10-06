import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#hero" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">M3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">M3 Engenharia</span>
              <span className="text-xs text-muted-foreground">& Construções</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-4">
              <a href="tel:+5511999999999" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-3 h-3 mr-1" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@m3engenharia.com.br" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3 h-3 mr-1" />
                contato@m3engenharia.com.br
              </a>
            </div>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium py-2 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar Orçamento
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
