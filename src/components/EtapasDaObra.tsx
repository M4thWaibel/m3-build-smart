export type Etapa = { nome: string; texto: string };

// É uma sequência de verdade (cada etapa depende da anterior), por isso numerada.
// A mesma lista vale para a Home e para as páginas de serviço, para o site descrever a obra de um jeito só.
const ETAPAS_DA_OBRA: Etapa[] = [
  { nome: "Projeto e detalhamento", texto: "Projeto estrutural com cálculo e dimensionamento dentro das normas técnicas." },
  { nome: "Fabricação", texto: "Pré-moldados e peças metálicas produzidos e inspecionados na nossa fábrica." },
  { nome: "Montagem", texto: "Equipe especializada monta a estrutura na obra com segurança e precisão de encaixe." },
  { nome: "Entrega", texto: "Fechamentos, cobertura e acabamentos até a obra pronta para operar." },
];

/** Etapas ligadas por uma corrente de cotas: vertical no celular, horizontal a partir de lg. */
const EtapasDaObra = ({ etapas = ETAPAS_DA_OBRA, className = "" }: { etapas?: Etapa[]; className?: string }) => (
  <ol className={`lg:grid lg:grid-cols-4 ${className}`}>
    {etapas.map((etapa, indice) => {
      const ultima = indice === etapas.length - 1;
      return (
        <li key={etapa.nome} className={`relative pl-8 lg:pb-0 lg:pl-0 ${ultima ? "" : "pb-7"}`}>
          <span className="absolute inset-y-0 left-0 w-4 lg:hidden" aria-hidden="true">
            <span className="absolute left-0 top-0 h-0.5 w-4 bg-primary" />
            <span className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-primary" />
            {ultima && <span className="absolute bottom-0 left-0 h-0.5 w-4 bg-primary" />}
          </span>
          <p className="flex items-baseline gap-2.5 font-display font-semibold lg:gap-3">
            <span className="text-t3 text-primary lg:text-t2">{indice + 1}</span>
            <span className="text-t3 text-noite">{etapa.nome}</span>
          </p>
          <span className="relative mt-5 hidden h-4 lg:block" aria-hidden="true">
            <span className="absolute left-0 top-0 h-4 w-[1.5px] bg-primary" />
            <span className="absolute inset-x-0 top-[7px] h-[1.5px] bg-primary" />
            {ultima && <span className="absolute right-0 top-0 h-4 w-[1.5px] bg-primary" />}
          </span>
          <p className="mt-1.5 text-texto text-aco lg:mt-5 lg:pr-10">{etapa.texto}</p>
        </li>
      );
    })}
  </ol>
);

export default EtapasDaObra;
