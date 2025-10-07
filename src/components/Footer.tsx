import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
<footer className="bg-black text-white">
  <div className="container mx-auto px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 items-start">
      {/* Coluna 1: logo + descrição */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <img
            src={logo}
            alt="Logo M3"
            className="h-10 w-auto block object-contain shrink-0"
          />
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Soluções em construções industriais com fabricação própria e entrega garantida no prazo.
        </p>
        <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/M3-Engenharia-e-Constru%C3%A7%C3%B5es/61568956907966/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/m3construc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/m3-engenharia-e-constru%C3%A7%C3%B5es/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
      </div>

      {/* Coluna 2: links rápidos */}
      <nav className="space-y-2">
        <h4 className="font-semibold">Links Rápidos</h4>
        <div>
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
      </nav>

      {/* Coluna 3: serviços */}
      <nav className="space-y-2">
        <h4 className="font-semibold">Serviços</h4>
        <div>
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
      </nav>

      {/* Coluna 4: contato */}
      <div className="space-y-2">
        <h4 className="font-semibold">Contato</h4>
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

    {/* linha de copyright */}
    <hr className="border-border my-8" />
    <p className="text-center text-sm text-muted-foreground">
      © 2025 M3 Engenharia e Construções. Todos os direitos reservados.
    </p>
  </div>
</footer>

  );
};

export default Footer;
