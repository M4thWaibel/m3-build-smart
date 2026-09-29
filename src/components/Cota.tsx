// Cota de desenho técnico: a assinatura visual do site. Só entra com medida real da obra
// (vão livre, comprimento). Altura e pé-direito ficam de fora, porque a cota é horizontal.
type CotaProps = {
  medida: string;
  /** "foto": traço amarelo e texto branco, sobre imagem. "azul": sobre fundo claro. */
  tom?: "foto" | "azul";
  className?: string;
};

const Cota = ({ medida, tom = "foto", className = "" }: CotaProps) => {
  const traco = tom === "foto" ? "bg-obra" : "bg-primary";
  const texto =
    tom === "foto" ? "text-white [text-shadow:0_1px_3px_rgba(10,30,58,0.7)]" : "text-primary";

  return (
    <div className={`flex items-center ${className}`} aria-hidden="true">
      <span className={`h-4 w-0.5 shrink-0 ${traco}`} />
      <span className={`h-0.5 flex-1 ${traco}`} />
      <span className={`whitespace-nowrap px-3 font-display text-cota font-medium ${texto}`}>{medida}</span>
      <span className={`h-0.5 flex-1 ${traco}`} />
      <span className={`h-4 w-0.5 shrink-0 ${traco}`} />
    </div>
  );
};

/** Escurece a base da foto para a cota continuar legível em céu claro ou piso de concreto. */
export const SombraDaCota = () => (
  <div
    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-noite/60 to-transparent"
    aria-hidden="true"
  />
);

export default Cota;
