import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Início", href: isHomePage ? "#hero" : "/#hero" },
    { name: "Sobre Nós", href: isHomePage ? "#sobre" : "/#sobre" },
    { name: "Serviços", href: isHomePage ? "#servicos" : "/#servicos" },
    { name: "Portfólio", href: isHomePage ? "#portfolio" : "/#portfolio" },
    { name: "Diferenciais", href: isHomePage ? "#diferenciais" : "/#diferenciais" },
    { name: "Contato", href: isHomePage ? "#contato" : "/#contato" },
  ];

  const headerClass = isScrolled || !isHomePage
    ? 'bg-background border-b border-border shadow-sm'
    : 'bg-transparent border-b border-transparent';

  const textColor = isScrolled || !isHomePage ? 'text-foreground' : 'text-white';
  const subTextColor = isScrolled || !isHomePage ? 'text-muted-foreground' : 'text-white/80';
  const secondaryTextColor = isScrolled || !isHomePage ? 'text-secondary' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo M3 Engenharia e Construções"
              className="w-24 h-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${textColor}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-4">
              <a href="https://api.whatsapp.com/send/?phone=5515992635050&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={`text-sm hover:text-primary transition-colors ${secondaryTextColor}`}>
                (15) 99263-5050
              </a>
              <a href="mailto:comercial@m3constru.com.br" className={`flex items-center text-xs hover:text-primary transition-colors ${subTextColor}`}>
                <Mail className="w-3 h-3 mr-1" />
                comercial@m3constru.com.br
              </a>
            </div>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#" id="cta-merlin6">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className={`h-6 w-6 ${textColor}`} /> : <Menu className={`h-6 w-6 ${textColor}`} />}
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
              <Button
                id="cta-merlin7"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const merlinButton = document.querySelector('.merlin-button') as HTMLElement;
                  merlinButton?.click();
                }}
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
