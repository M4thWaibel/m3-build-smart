import BotaoOrcamento from "@/components/BotaoOrcamento";

/** Caixa escura da página da obra que abre o pedido de orçamento (bot de WhatsApp). */
const ChamadaOrcamento = ({ titulo, className = "" }: { titulo: string; className?: string }) => (
  <div className={`rounded bg-noite p-6 text-white lg:p-8 ${className}`}>
    <h2 className="font-display text-t3 font-semibold">{titulo}</h2>
    <p className="mt-3.5 text-texto text-white/80 lg:mt-4">
      Mande a área e a cidade da obra que a equipe comercial prepara o orçamento.
    </p>
    <BotaoOrcamento id="cta-merlin3" variant="destaque" className="mt-5 w-full lg:mt-6 lg:w-auto" />
  </div>
);

export default ChamadaOrcamento;
