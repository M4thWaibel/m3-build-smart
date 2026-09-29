import { Link } from "react-router-dom";
import Cota, { SombraDaCota } from "@/components/Cota";
import type { Obra } from "@/data/obras";

const ObraCartao = ({ obra, className = "" }: { obra: Obra; className?: string }) => (
  <article className={className}>
    <Link
      to={`/obras/${obra.slug}`}
      className="group block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[421/300] overflow-hidden rounded bg-concreto">
        <img
          src={obra.fotos[0]}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {obra.cota && (
          <>
            <SombraDaCota />
            <Cota medida={obra.cota} className="absolute inset-x-[11%] bottom-7" />
          </>
        )}
      </div>
      <h3 className="mt-3.5 font-display text-t3 font-semibold text-noite decoration-2 underline-offset-4 group-hover:underline">
        {obra.titulo}
      </h3>
      <p className="mt-3.5 text-pequeno text-aco">{obra.resumo}</p>
      {obra.situacao === "em_andamento" && (
        <p className="mt-3.5 flex items-center gap-2 text-rotulo font-medium text-noite">
          <span className="h-2 w-2 bg-obra" aria-hidden="true" />
          Em andamento
        </p>
      )}
    </Link>
  </article>
);

export default ObraCartao;
