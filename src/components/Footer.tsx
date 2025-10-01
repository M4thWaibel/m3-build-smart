import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">M3</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-background leading-tight">M3 Engenharia</span>
                <span className="text-xs text-secondary">& Construções</span>
              </div>
            </div>
            <p className="text-sm text-secondary mb-4">
              Soluções em construções industriais com fabricação própria e entrega garantida no prazo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-secondary hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/fornecedores" className="text-sm text-secondary hover:text-primary transition-colors">
                  Seja Nosso Fornecedor
                </Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="text-sm text-secondary hover:text-primary transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/galpao-industrial" className="text-sm text-secondary hover:text-primary transition-colors">
                  Galpão Industrial
                </Link>
              </li>
              <li>
                <Link to="/pre-moldados" className="text-sm text-secondary hover:text-primary transition-colors">
                  Pré-Moldados
                </Link>
              </li>
              <li>
                <Link to="/estruturas-metalicas" className="text-sm text-secondary hover:text-primary transition-colors">
                  Estruturas Metálicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary">
                  Rua Exemplo, 123<br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+5511999999999" className="text-sm text-secondary hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:contato@m3engenharia.com.br" className="text-sm text-secondary hover:text-primary transition-colors">
                  contato@m3engenharia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} M3 Engenharia e Construções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
