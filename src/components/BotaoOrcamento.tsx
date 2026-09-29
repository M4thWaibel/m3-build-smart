import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { WHATSAPP } from "@/lib/contato";

type Props = {
  /** cta-merlinN: o mesmo id dos botões do site antigo, para o que o GTM já conta continuar contando. */
  id: string;
  variant?: ButtonProps["variant"];
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

// O pedido de orçamento é pelo bot de WhatsApp da Merlin: o index.html abre o bot no clique de
// qualquer [data-merlin]. Se o bot não carregou, o link leva direto ao WhatsApp comercial.
const BotaoOrcamento = ({ id, variant = "default", className, onClick, children = "Solicitar orçamento" }: Props) => (
  <Button asChild variant={variant} size="m3" className={className}>
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" id={id} data-merlin="" onClick={onClick}>
      {children}
    </a>
  </Button>
);

export default BotaoOrcamento;
