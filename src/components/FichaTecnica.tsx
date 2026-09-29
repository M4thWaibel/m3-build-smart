import type { LinhaDeFicha } from "@/data/obras";

const FichaTecnica = ({ linhas, className = "" }: { linhas: LinhaDeFicha[]; className?: string }) => (
  <dl className={className}>
    {linhas.map(({ rotulo, valor }) => (
      <div key={rotulo} className="flex items-baseline justify-between gap-6 border-b border-linha py-[14px]">
        <dt className="shrink-0 text-texto text-aco">{rotulo}</dt>
        <dd className="text-right text-rotulo font-medium text-noite">{valor}</dd>
      </div>
    ))}
  </dl>
);

export default FichaTecnica;
