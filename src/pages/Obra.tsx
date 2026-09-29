import { Link, useParams } from "react-router-dom";
import Pagina from "@/components/Pagina";
import Galeria from "@/components/Galeria";
import FichaTecnica from "@/components/FichaTecnica";
import ChamadaOrcamento from "@/components/ChamadaOrcamento";
import ObraCartao from "@/components/ObraCartao";
import { Button } from "@/components/ui/button";
import { fichaCompleta, obraPorSlug, outrasObras } from "@/data/obras";
import { useTituloDaPagina } from "@/hooks/useTituloDaPagina";
import NotFound from "./NotFound";

// Página de cada obra (/obras/:slug), no lugar do modal "Saiba mais" do site antigo
const Obra = () => {
  const { slug } = useParams();
  const obra = obraPorSlug(slug);
  // Efeito do pai roda depois do filho: sem obra, o título tem de ser o mesmo da NotFound
  useTituloDaPagina(obra ? `${obra.titulo} em ${obra.cidade}` : "Página não encontrada");

  if (!obra) return <NotFound />;

  const galpao = /^galp/i.test(obra.titulo);
  const outras = outrasObras(obra.slug);

  return (
    <Pagina>
      <div className="moldura pb-6 pt-6 lg:pb-10 lg:pt-10">
        <nav aria-label="Trilha">
          <ol className="flex flex-wrap items-center gap-2 text-rotulo">
            <li>
              <Link to="/obras" className="font-medium text-primary underline underline-offset-4 hover:text-noite">
                Obras
              </Link>
            </li>
            <li className="text-aco" aria-hidden="true">
              /
            </li>
            <li className="text-aco" aria-current="page">
              {obra.titulo}
            </li>
          </ol>
        </nav>
        <h1 className="mt-4 font-display text-t1-m font-semibold lg:mt-6 lg:text-t1">{obra.titulo}</h1>
        <p className="mt-4 text-texto text-aco lg:mt-3 lg:text-grande">{obra.subtitulo}</p>
      </div>

      <Galeria key={obra.slug} obra={obra} />

      {/* No celular a ficha e o pedido vêm antes do texto; a partir de lg ficam na coluna da direita */}
      <div className="moldura flex flex-col pb-12 lg:grid lg:grid-cols-[minmax(0,776px)_440px] lg:justify-between lg:gap-16 lg:pb-[120px] lg:pt-[72px]">
        <aside className="pt-9 lg:col-start-2 lg:row-start-1 lg:pt-0">
          <h2 className="font-display text-t3 font-semibold">Ficha técnica</h2>
          <FichaTecnica linhas={fichaCompleta(obra)} className="mt-1.5 lg:mt-2" />
          <ChamadaOrcamento
            titulo={galpao ? "Precisa de um galpão como este?" : "Precisa de uma obra como esta?"}
            className="mt-7 lg:mt-10"
          />
        </aside>
        <section className="pt-12 lg:col-start-1 lg:row-start-1 lg:pt-0">
          <h2 className="font-display text-t2-m font-semibold lg:text-t2">Sobre a obra</h2>
          <p className="mt-4 text-texto lg:mt-6 lg:text-grande">{obra.descricao}</p>
        </section>
      </div>

      <section className="border-t border-linha bg-white py-12 lg:border-0 lg:bg-concreto lg:pb-[120px] lg:pt-24">
        <div className="moldura">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-t2-m font-semibold lg:text-t2">Outras obras</h2>
            <Link
              to="/obras"
              className="hidden text-rotulo font-medium text-primary underline underline-offset-4 hover:text-noite lg:inline"
            >
              Ver todas as obras
            </Link>
          </div>
          <div className="mt-7 grid gap-7 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {outras.map((outra, indice) => (
              <ObraCartao key={outra.slug} obra={outra} className={indice === 2 ? "hidden lg:block" : ""} />
            ))}
          </div>
          <Button asChild variant="contorno" size="m3" className="mt-7 w-full lg:hidden">
            <Link to="/obras">Ver todas as obras</Link>
          </Button>
        </div>
      </section>
    </Pagina>
  );
};

export default Obra;
