import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import BotaoOrcamento from "@/components/BotaoOrcamento";
import { TELEFONE, WHATSAPP } from "@/lib/contato";
import logo from "../assets/logo.jpg";

// Na ordem em que as seções aparecem na Home
const navegacao = [
  { nome: "Obras", secao: "obras" },
  { nome: "Fábrica", secao: "fabrica" },
  { nome: "Serviços", secao: "servicos" },
  { nome: "Contato", secao: "contato" },
];

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  // Fecha o menu do celular ao navegar (inclusive para uma seção da mesma página)
  useEffect(() => {
    setMenuAberto(false);
  }, [location.key]);

  useEffect(() => {
    if (!menuAberto) return;
    const fecharComEsc = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", fecharComEsc);
    return () => window.removeEventListener("keydown", fecharComEsc);
  }, [menuAberto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linha bg-white">
      <div className="moldura flex h-16 items-center justify-between lg:h-[84px]">
        <div className="flex items-center gap-14">
          <Link to="/" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
            <img src={logo} alt="M3 Engenharia e Construções, página inicial" className="h-[34px] w-auto lg:h-[41px]" />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navegacao.map((item) => (
                <li key={item.secao}>
                  <Link
                    to={{ pathname: "/", hash: item.secao }}
                    className="text-rotulo font-medium text-noite underline-offset-8 hover:text-primary hover:underline"
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-rotulo font-medium text-primary underline-offset-4 hover:underline"
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            {TELEFONE}
          </a>
          <BotaoOrcamento id="cta-merlin6" />
        </div>

        <div className="-mr-3 flex items-center lg:hidden">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Falar no WhatsApp: ${TELEFONE}`}
            className="grid h-12 w-12 place-items-center text-primary"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-celular"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="grid h-12 w-12 place-items-center text-noite"
          >
            {menuAberto ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav id="menu-celular" aria-label="Principal" className="border-t border-linha bg-white lg:hidden">
          <ul className="moldura py-2">
            {navegacao.map((item) => (
              <li key={item.secao} className="border-b border-linha last:border-0">
                <Link to={{ pathname: "/", hash: item.secao }} className="block py-4 font-display text-t3 font-semibold text-noite">
                  {item.nome}
                </Link>
              </li>
            ))}
          </ul>
          <div className="moldura pb-6">
            <BotaoOrcamento id="cta-merlin7" className="w-full" onClick={() => setMenuAberto(false)} />
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-rotulo font-medium text-primary underline underline-offset-4"
            >
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              {TELEFONE}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
