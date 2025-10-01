import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    {
      name: "Serviços",
      items: [
        { name: "Galpão Industrial", href: "/galpao-industrial" },
        { name: "Pré-Moldados", href: "/pre-moldados" },
        { name: "Estruturas Metálicas", href: "/estruturas-metalicas" },
      ],
    },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Fornecedores", href: "/fornecedores" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">M3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">M3 Engenharia</span>
              <span className="text-xs text-muted-foreground">& Construções</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border border-border rounded-lg shadow-lg py-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
              <Link to="/#contato">Solicitar Orçamento</Link>
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
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`block text-sm font-medium py-2 ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <span className="block text-sm font-medium text-foreground py-2">{item.name}</span>
                      <div className="pl-4 flex flex-col space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/#contato" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
