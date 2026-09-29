import type { ReactNode } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { EMAIL, ENDERECO, REDES, TELEFONE, WHATSAPP } from "@/lib/contato";
import logo from "../assets/logo.jpg";

const servicos = [
  { nome: "Construções industriais", caminho: "/construcoes-industriais" },
  { nome: "Galpões industriais", caminho: "/galpoes-industriais" },
  { nome: "Pré-moldados", caminho: "/pre-moldados" },
  { nome: "Estruturas metálicas", caminho: "/estruturas-metalicas" },
];

const empresa = [
  { nome: "Obras", caminho: "/obras" },
  { nome: "Fábrica", caminho: "/#fabrica" },
  { nome: "Trabalhe conosco", caminho: "/trabalhe-conosco" },
  { nome: "Seja fornecedor", caminho: "/seja-fornecedor" },
];

const redes = [
  { nome: "Instagram", href: REDES.instagram, Icone: Instagram },
  { nome: "Facebook", href: REDES.facebook, Icone: Facebook },
  { nome: "LinkedIn", href: REDES.linkedin, Icone: Linkedin },
];

const link = "text-pequeno text-aco underline-offset-4 hover:text-primary hover:underline";

const Coluna = ({ titulo, children, className = "" }: { titulo: string; children: ReactNode; className?: string }) => (
  <div className={className}>
    <h2 className="font-sans text-rotulo font-medium text-noite">{titulo}</h2>
    <ul className="mt-3 space-y-3">{children}</ul>
  </div>
);

const Footer = () => (
  <footer className="bg-concreto">
    <div className="moldura pb-10 pt-12 lg:pt-[72px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-[340px]">
          {/* multiply tira o quadrado branco do JPG sobre o fundo concreto */}
          <img src={logo} alt="M3 Engenharia e Construções" className="h-[41px] w-auto mix-blend-multiply" />
          <p className="mt-[18px] text-pequeno text-aco">
            Construções industriais com fabricação própria de pré-moldados e estruturas metálicas.
          </p>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[auto_auto_auto] lg:gap-x-24">
          <Coluna titulo="Serviços">
            {servicos.map((item) => (
              <li key={item.caminho}>
                <Link to={item.caminho} className={link}>{item.nome}</Link>
              </li>
            ))}
          </Coluna>
          <Coluna titulo="Empresa">
            {empresa.map((item) => (
              <li key={item.caminho}>
                <Link to={item.caminho} className={link}>{item.nome}</Link>
              </li>
            ))}
          </Coluna>
          <Coluna titulo="Contato" className="col-span-2 lg:col-span-1">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={link}>{TELEFONE}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
            </li>
            <li className="text-pequeno text-aco">
              {ENDERECO[0]}
              <br />
              {ENDERECO[1]}
            </li>
          </Coluna>
        </nav>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-linha pt-6 lg:mt-14">
        <p className="text-pequeno text-aco">© {new Date().getFullYear()} M3 Engenharia e Construções</p>
        <ul className="flex items-center gap-4 lg:gap-5">
          {redes.map(({ nome, href, Icone }) => (
            <li key={nome}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={nome} className="block text-aco hover:text-primary">
                <Icone className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
