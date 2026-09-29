import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cota, { SombraDaCota } from "@/components/Cota";
import type { Obra } from "@/data/obras";

const setaClasses =
  "absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-noite shadow-[0_2px_8px_rgba(10,30,58,0.25)] hover:bg-concreto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obra lg:grid";

// Foto grande com contador e miniaturas. No celular troca de foto arrastando para o lado.
const Galeria = ({ obra }: { obra: Obra }) => {
  const [atual, setAtual] = useState(0);
  const inicioDoToque = useRef<number | null>(null);
  const total = obra.fotos.length;
  const ir = (indice: number) => setAtual((indice + total) % total);

  const terminarToque = (x: number) => {
    if (inicioDoToque.current === null) return;
    const distancia = x - inicioDoToque.current;
    inicioDoToque.current = null;
    if (Math.abs(distancia) > 40) ir(distancia < 0 ? atual + 1 : atual - 1);
  };

  return (
    <section aria-label={`Fotos: ${obra.titulo}`} className="lg:moldura">
      <div
        className="relative aspect-[4/3] overflow-hidden bg-concreto lg:aspect-[16/9] lg:rounded"
        onTouchStart={(e) => (inicioDoToque.current = e.touches[0].clientX)}
        onTouchEnd={(e) => terminarToque(e.changedTouches[0].clientX)}
      >
        <img
          src={obra.fotos[atual]}
          alt={total > 1 ? `${obra.titulo}, foto ${atual + 1} de ${total}` : obra.titulo}
          className="h-full w-full object-cover"
        />
        {/* A cota foi medida na capa; nas outras fotos o ângulo muda e ela mentiria */}
        {obra.cota && atual === 0 && (
          <>
            <SombraDaCota />
            <Cota medida={obra.cota} className="absolute inset-x-[10%] bottom-6 lg:inset-x-[20%] lg:bottom-9" />
          </>
        )}
        {total > 1 && (
          <>
            <p className="absolute right-4 top-4 rounded bg-white px-2 py-1 text-rotulo font-medium text-noite lg:right-6 lg:top-6">
              {atual + 1} de {total}
            </p>
            <button type="button" onClick={() => ir(atual - 1)} aria-label="Foto anterior" className={`${setaClasses} left-6`}>
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => ir(atual + 1)} aria-label="Próxima foto" className={`${setaClasses} right-6`}>
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <ul className="mt-3 grid grid-cols-3 gap-2.5 px-4 lg:mt-4 lg:flex lg:gap-3 lg:px-0">
          {obra.fotos.map((foto, indice) => (
            <li key={foto}>
              <button
                type="button"
                onClick={() => setAtual(indice)}
                aria-label={`Ver foto ${indice + 1} de ${total}`}
                aria-current={indice === atual}
                className={`block aspect-[111/76] w-full overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:aspect-auto lg:h-[124px] lg:w-[200px] ${
                  indice === atual ? "ring-2 ring-primary ring-offset-2" : "opacity-75 hover:opacity-100"
                }`}
              >
                <img src={foto} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Galeria;
