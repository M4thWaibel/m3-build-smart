import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import BotaoOrcamento from "@/components/BotaoOrcamento";
import { EMAIL, ENDERECO, TELEFONE, WHATSAPP } from "@/lib/contato";

const Canal = ({ Icone, rotulo, children }: { Icone: typeof Phone; rotulo: string; children: ReactNode }) => (
  <li className="flex gap-3.5 lg:gap-4">
    <Icone className="mt-0.5 h-5 w-5 shrink-0 text-obra lg:mt-[3px] lg:h-[22px] lg:w-[22px]" aria-hidden="true" />
    <div>
      <p className="text-pequeno text-white/70">{rotulo}</p>
      <div className="mt-0.5 text-texto text-white lg:text-grande">{children}</div>
    </div>
  </li>
);

// Fecho das páginas: o pedido de orçamento vai pelo bot de WhatsApp (sem formulário no site)
// e os canais diretos ficam ao lado para quem prefere ligar, escrever ou visitar.
const SecaoContato = ({ idDoBotao }: { idDoBotao: string }) => (
  <section id="contato" className="bg-noite py-[72px] text-white lg:py-[120px]">
    <div className="moldura grid gap-10 lg:grid-cols-[minmax(0,620px)_minmax(0,460px)] lg:items-end lg:justify-between lg:gap-16">
      <div>
        <h2 className="font-display text-t1-m font-semibold lg:text-t1">Conte o que você precisa construir</h2>
        <p className="mt-7 text-texto text-white/85 lg:mt-8 lg:text-grande">
          Mande a área, a cidade e o tipo de obra que a equipe comercial prepara o orçamento.
        </p>
        <div className="mt-8 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:items-center lg:gap-5">
          <BotaoOrcamento id={idDoBotao} variant="destaque" className="w-full lg:w-auto" />
          <p className="text-center text-pequeno text-white/70 lg:text-left">O atendimento é pelo WhatsApp.</p>
        </div>
      </div>
      <ul className="space-y-5 border-t border-white/15 pt-8 lg:space-y-6 lg:border-0 lg:pt-0">
        <Canal Icone={Phone} rotulo="WhatsApp e telefone">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            {TELEFONE}
          </a>
        </Canal>
        <Canal Icone={Mail} rotulo="E-mail">
          <a href={`mailto:${EMAIL}`} className="break-all underline-offset-4 hover:underline">
            {EMAIL}
          </a>
        </Canal>
        <Canal Icone={MapPin} rotulo="Endereço">
          {ENDERECO[0]},
          <br />
          {ENDERECO[1]}
        </Canal>
      </ul>
    </div>
  </section>
);

export default SecaoContato;
