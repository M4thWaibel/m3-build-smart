import { Link } from "react-router-dom";
import Pagina from "@/components/Pagina";
import BotaoOrcamento from "@/components/BotaoOrcamento";
import ObraCartao from "@/components/ObraCartao";
import EtapasDaObra from "@/components/EtapasDaObra";
import SecaoContato from "@/components/SecaoContato";
import { Button } from "@/components/ui/button";
import { obrasPorSlugs } from "@/data/obras";
import type { ItemDeLista, Servico } from "@/data/servicos";
import { useTituloDaPagina } from "@/hooks/useTituloDaPagina";

const titulo2 = "font-display text-t2-m font-semibold lg:text-t2";

/** Título à esquerda e lista em duas colunas à direita, com um fio acima de cada item. */
const ListaEmColunas = ({ titulo, itens }: { titulo: string; itens: ItemDeLista[] }) => (
  <div className="grid gap-5 lg:grid-cols-[416px_minmax(0,1fr)] lg:gap-16">
    <h2 className={`${titulo2} text-balance`}>{titulo}</h2>
    <ul className="grid md:grid-cols-2 md:gap-x-6 md:gap-y-7">
      {itens.map((item) => (
        <li key={item.nome ?? item.texto} className="border-t border-linha py-4 md:pb-0 md:pt-[18px]">
          {item.nome && <h3 className="font-display text-t3 font-semibold text-noite">{item.nome}</h3>}
          <p className={`text-texto ${item.nome ? "mt-1.5 text-aco md:mt-2" : "text-noite"}`}>{item.texto}</p>
        </li>
      ))}
    </ul>
  </div>
);

const LegendaDaFoto = ({ legenda }: { legenda: Servico["legendaDaFoto"] }) => {
  const [obra] = "obra" in legenda ? obrasPorSlugs([legenda.obra]) : [];
  // Obra renomeada em obras.ts: melhor sem legenda do que "Na foto:" sozinho
  if ("obra" in legenda && !obra) return null;
  return (
    <p className="mt-3 px-4 text-pequeno text-aco lg:px-0">
      Na foto:{" "}
      {obra ? (
        <Link to={`/obras/${obra.slug}`} className="text-primary underline underline-offset-4 hover:text-noite">
          {obra.titulo}, {obra.cidade}
        </Link>
      ) : (
        "texto" in legenda && legenda.texto
      )}
    </p>
  );
};

// Modelo único das páginas de serviço (Construções, Galpões, Pré-moldados, Estruturas metálicas).
// O conteúdo de cada uma está em src/data/servicos.ts.
const PaginaServico = ({ servico }: { servico: Servico }) => {
  useTituloDaPagina(servico.titulo);
  const obras = obrasPorSlugs(servico.obras.slugs);
  const [botaoTopo, botaoContato] = servico.botoes;

  return (
    <Pagina>
      {/* Título, com o pedido de orçamento já na primeira tela */}
      <section className="moldura pb-6 pt-6 lg:pb-10 lg:pt-10">
        <nav aria-label="Trilha">
          <ol className="flex flex-wrap items-center gap-2 text-rotulo">
            <li>
              <Link
                to={{ pathname: "/", hash: "servicos" }}
                className="font-medium text-primary underline underline-offset-4 hover:text-noite"
              >
                Serviços
              </Link>
            </li>
            <li className="text-aco" aria-hidden="true">
              /
            </li>
            <li className="text-aco" aria-current="page">
              {servico.titulo}
            </li>
          </ol>
        </nav>
        <div className="mt-4 flex flex-col gap-6 lg:mt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="lg:max-w-[776px]">
            <h1 className="font-display text-t1-m font-semibold lg:text-t1">{servico.titulo}</h1>
            <p className="mt-4 text-texto text-aco lg:mt-3 lg:text-grande">{servico.abertura}</p>
          </div>
          {/* No computador o cabeçalho fixo já tem este botão logo acima; no celular, não */}
          <BotaoOrcamento id={botaoTopo} className="w-full lg:hidden" />
        </div>
      </section>

      {/* Foto: de ponta a ponta no celular, na largura da página a partir de lg */}
      <figure className="lg:moldura">
        <img
          src={servico.foto}
          alt=""
          className="aspect-[4/3] w-full object-cover lg:aspect-[1312/560] lg:rounded"
        />
        <figcaption>
          <LegendaDaFoto legenda={servico.legendaDaFoto} />
        </figcaption>
      </figure>

      {/* Catálogo do serviço */}
      <section className="moldura py-12 lg:py-24">
        <ListaEmColunas titulo={servico.catalogo.titulo} itens={servico.catalogo.itens} />
      </section>

      {/* Obras de exemplo: os cartões da Home, cada um leva à página da obra */}
      <section className="bg-concreto pb-14 pt-12 lg:pb-[120px] lg:pt-24">
        <div className="moldura">
          <div className="flex items-end justify-between gap-6">
            <h2 className={titulo2}>{servico.obras.titulo}</h2>
            <Link
              to="/obras"
              className="hidden text-rotulo font-medium text-primary underline underline-offset-4 hover:text-noite lg:inline"
            >
              Ver todas as obras
            </Link>
          </div>
          <div className="mt-7 grid gap-7 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {obras.map((obra, indice) => (
              <ObraCartao key={obra.slug} obra={obra} className={indice === 2 ? "hidden lg:block" : ""} />
            ))}
          </div>
          <Button asChild variant="contorno" size="m3" className="mt-7 w-full lg:hidden">
            <Link to="/obras">Ver todas as obras</Link>
          </Button>
        </div>
      </section>

      {/* Fábrica (só nos serviços que saem dela) e etapas */}
      <section className="moldura py-12 lg:py-[120px]">
        {servico.capacidade && (
          <div className="mb-12 grid gap-7 lg:mb-24 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
            <div>
              <h2 className={titulo2}>Capacidade da fábrica</h2>
              <p className="mt-4 text-texto text-aco lg:mt-6 lg:text-grande">{servico.capacidade.texto}</p>
              <p className="mt-6 flex items-baseline gap-1 font-display font-semibold text-primary lg:mt-8 lg:gap-1.5">
                <span className="text-numero-m font-medium lg:text-numero">{servico.capacidade.numero}</span>
                <span className="text-t3">{servico.capacidade.unidade}</span>
              </p>
              <p className="mt-1 text-pequeno text-aco lg:mt-1.5 lg:text-texto">{servico.capacidade.rotulo}</p>
            </div>
            <img
              src={servico.capacidade.foto}
              alt={servico.capacidade.altDaFoto}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded object-cover lg:aspect-[620/466]"
            />
          </div>
        )}
        <h2 className={titulo2}>{servico.etapas?.titulo ?? "Do projeto à entrega"}</h2>
        <EtapasDaObra etapas={servico.etapas?.lista} className="mt-6 lg:mt-10" />
      </section>

      {servico.vantagens && (
        <section className="moldura pb-14 lg:pb-[120px]">
          <ListaEmColunas titulo={servico.vantagens.titulo} itens={servico.vantagens.itens} />
        </section>
      )}

      <SecaoContato idDoBotao={botaoContato} />
    </Pagina>
  );
};

export default PaginaServico;
