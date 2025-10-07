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
              <a href="https://www.facebook.com/people/M3-Engenharia-e-Constru%C3%A7%C3%B5es/61568956907966/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/m3construc/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/m3-engenharia-e-contru%C3%A7%C3%B5es/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-sm text-secondary hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm text-secondary hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-secondary hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-secondary hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-sm text-secondary hover:text-primary transition-colors">
                  Galpão Industrial
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-secondary hover:text-primary transition-colors">
                  Pré-Moldados
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-secondary hover:text-primary transition-colors">
                  Estruturas Metálicas
                </a>
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
                  Rod. Marechal Rondon (Br-273), km179<br />
                  Laranjal Paulista - SP
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="https://api.whatsapp.com/send/?phone=5515992635050&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-primary transition-colors">
                  (15) 99263-5050
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:comercial@m3constru.com.br" className="text-sm text-secondary hover:text-primary transition-colors">
                  comercial@m3constru.com.br
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
