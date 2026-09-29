import { Link } from "react-router-dom";
import Pagina from "@/components/Pagina";
import Cota, { SombraDaCota } from "@/components/Cota";
import ObraCartao from "@/components/ObraCartao";
import FichaTecnica from "@/components/FichaTecnica";
import EtapasDaObra from "@/components/EtapasDaObra";
import SecaoContato from "@/components/SecaoContato";
import BotaoOrcamento from "@/components/BotaoOrcamento";
import { Button } from "@/components/ui/button";
import {
  DESTAQUE,
  VITRINE,
  aberturaDasObras,
  obraPorSlug,
  obras,
  obrasPorSlugs,
  rotuloDaSituacao,
  type Obra,
} from "@/data/obras";
import heroImage from "../assets/hero-industrial.png";
import fabricacaoImage from "@/assets/fabricacao-propria.jpg";
import construcoesImage from "@/assets/projeto-3.jpg";
import galpoesImage from "@/assets/projeto-1.jpg";
import preMoldadosImage from "@/assets/projeto-6.jpg";
// Galpão de Lona (estrutura metálica galvanizada), a mesma foto da página do serviço;
// projeto-2.jpg era o Prédio Administrativo, que é todo pré-moldado
import estruturasImage from "@/assets/projeto-7.jpg";
import logo1 from "@/assets/Logo1.jpg";
import logo2 from "@/assets/Logo2.jpg";
import logo3 from "@/assets/Logo3.jpg";
import logo4 from "@/assets/Logo4.jpg";
import logo5 from "@/assets/Logo5.jpg";
import logo6 from "@/assets/Logo6.jpg";
import logo7 from "@/assets/Logo7.jpg";
import logo8 from "@/assets/Logo8.jpg";
import logo9 from "@/assets/Logo9.png";
import logo10 from "@/assets/Logo10.png";

const capacidades = [
  { numero: "2.000", unidade: "m³", texto: "de pré-moldados por mês" },
  { numero: "50", unidade: "t", texto: "de estrutura metálica por mês" },
];


const servicos = [
  {
    titulo: "Construções industriais",
    descricao: "Fundação, alvenaria estrutural e galpões completos para a sua indústria.",
    curta: "Fundação, alvenaria estrutural e galpões completos.",
    caminho: "/construcoes-industriais",
    foto: construcoesImage,
  },
  {
    titulo: "Galpões industriais e logísticos",
    descricao: "Projetos sob medida para produção, estoque e distribuição.",
    curta: "Sob medida para produção, estoque e distribuição.",
    caminho: "/galpoes-industriais",
    foto: galpoesImage,
  },
  {
    titulo: "Pré-moldados",
    descricao: "Pilares, vigas, placas de fechamento, muros, protendidos e escadas.",
    curta: "Pilares, vigas, placas, muros, protendidos e escadas.",
    caminho: "/pre-moldados",
    foto: preMoldadosImage,
  },
  {
    titulo: "Estruturas metálicas",
    descricao: "Estruturas de cobertura e fechamento, pilares, mezaninos e passarelas.",
    curta: "Cobertura e fechamento, pilares, mezaninos e passarelas.",
    caminho: "/estruturas-metalicas",
    foto: estruturasImage,
  },
];

const clientes = [
  { logo: logo1, nome: "Arqplast" },
  { logo: logo2, nome: "USM" },
  { logo: logo3, nome: "Cipatex" },
  { logo: logo4, nome: "Vanilplast" },
  { logo: logo5, nome: "Rinen" },
  { logo: logo6, nome: "Unafe" },
  { logo: logo7, nome: "Vollmens" },
  { logo: logo8, nome: "West Brasil" },
  { logo: logo9, nome: "Cobrecom" },
  { logo: logo10, nome: "Angelelli" },
];

const destaque = obraPorSlug(DESTAQUE) as Obra;
const vitrine = obrasPorSlugs(VITRINE);

const Home = () => (
  <Pagina>
    {/* Hero */}
    <section id="hero" className="relative isolate flex min-h-[700px] items-end overflow-hidden bg-noite lg:min-h-[760px]">
      <img
        src={heroImage}
        alt="Vista aérea da fábrica da M3 com peças pré-moldadas e estruturas metálicas no pátio"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,30,58,0.2)_0%,rgba(10,30,58,0.55)_40%,rgba(10,30,58,0.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(10,30,58,0.93)_0%,rgba(10,30,58,0.8)_36%,rgba(10,30,58,0.25)_68%,rgba(10,30,58,0.05)_100%)]"
        aria-hidden="true"
      />
      <div className="moldura pb-9 lg:pb-[108px]">
        <h1 className="max-w-[800px] font-display text-display-m font-semibold text-white lg:text-display">
          Galpões e estruturas industriais, do projeto à montagem.
        </h1>
        <p className="mt-4 max-w-[600px] text-texto text-white/90 lg:mt-6 lg:text-grande">
          <span className="lg:hidden">Fábrica própria: 2.000 m³ de pré-moldados e 50 t de estrutura metálica por mês.</span>
          <span className="hidden lg:inline">
            Fábrica própria com capacidade de 2.000 m³ de pré-moldados e 50 toneladas de estrutura metálica por mês. A sua
            obra não fica esperando fornecedor.
          </span>
        </p>
        <div className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:items-center">
          <BotaoOrcamento id="cta-merlin1" variant="destaque" />
          <Button asChild variant="contornoClaro" size="m3" className="hidden lg:inline-flex">
            <a href="#obras">Ver obras realizadas</a>
          </Button>
          <a href="#obras" className="text-center text-rotulo font-medium text-white underline underline-offset-4 lg:hidden">
            Ver obras realizadas
          </a>
        </div>
      </div>
    </section>

    {/* Obras realizadas */}
    <section id="obras" className="py-[72px] lg:py-[120px]">
      <div className="moldura">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 className="font-display text-t1-m font-semibold lg:text-t1">Obras realizadas</h2>
          <p className="text-texto text-aco lg:max-w-[470px]">{aberturaDasObras()}</p>
        </div>

        <article className="mt-8 grid gap-[18px] lg:mt-14 lg:grid-cols-[minmax(0,840fr)_minmax(0,416fr)] lg:items-center lg:gap-14">
          <Link
            to={`/obras/${destaque.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="relative block aspect-[4/3] overflow-hidden rounded bg-concreto lg:aspect-[3/2]"
          >
            <img src={destaque.fotos[0]} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            {destaque.cota && (
              <>
                <SombraDaCota />
                <Cota medida={destaque.cota} className="absolute inset-x-[10%] bottom-6 lg:inset-x-[16.5%] lg:bottom-8" />
              </>
            )}
          </Link>
          <div>
            <p className="text-rotulo text-aco">{rotuloDaSituacao(destaque)}</p>
            <h3 className="mt-[18px] font-display text-t2-m font-semibold lg:mt-[22px] lg:text-t2">{destaque.titulo}</h3>
            <p className="mt-[18px] text-texto text-aco lg:mt-[22px]">{destaque.descricao}</p>
            <FichaTecnica
              linhas={[{ rotulo: "Local", valor: destaque.cidade }, ...destaque.ficha]}
              className="mt-[18px] lg:mt-[22px]"
            />
            <Button asChild variant="contorno" size="m3" className="mt-[18px] w-full lg:mt-8 lg:w-auto">
              <Link to={`/obras/${destaque.slug}`} aria-label={`Ver a obra: ${destaque.titulo}`}>
                Ver a obra
              </Link>
            </Button>
          </div>
        </article>

        <div className="mt-8 grid gap-9 md:grid-cols-2 md:gap-6 lg:mt-14 lg:grid-cols-3">
          {/* No celular e no tablet ficam dois cartões, como na proposta; o terceiro volta a partir de lg */}
          {vitrine.map((obra, indice) => (
            <ObraCartao key={obra.slug} obra={obra} className={indice === 2 ? "hidden lg:block" : ""} />
          ))}
        </div>

        <Button asChild variant="contorno" size="m3" className="mt-8 w-full lg:mt-14 lg:w-auto">
          <Link to="/obras">Ver as {obras.length} obras</Link>
        </Button>
      </div>
    </section>

    {/* Fábrica */}
    <section id="fabrica" className="bg-concreto py-[72px] lg:py-[120px]">
      <div className="moldura">
        <div className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
          <div>
            <h2 className="font-display text-t1-m font-semibold lg:text-t1">Fabricamos as peças que montamos</h2>
            <p className="mt-7 text-texto text-aco lg:mt-8 lg:text-grande">
              Pilares, vigas, lajes e estruturas metálicas saem da nossa fábrica direto para a obra. Sem intermediário, cada
              peça é inspecionada antes da entrega e o cronograma não depende de terceiros.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-6 lg:mt-8 lg:flex lg:gap-16">
              {capacidades.map((item) => (
                <li key={item.unidade} className="lg:w-[210px]">
                  <p className="flex items-baseline gap-1 font-display font-semibold text-primary lg:gap-1.5">
                    <span className="text-numero-m font-medium lg:text-numero">{item.numero}</span>
                    <span className="text-t3">{item.unidade}</span>
                  </p>
                  <p className="mt-1 text-pequeno text-aco lg:mt-1.5 lg:text-texto">{item.texto}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={fabricacaoImage}
            alt="Pátio da fábrica com pilares, vigas e treliças metálicas prontos para sair"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded object-cover lg:aspect-[620/466]"
          />
        </div>

        <div className="mt-12 lg:mt-24">
          <h3 className="font-display text-t2-m font-semibold lg:text-t2">Do projeto à entrega</h3>
          <EtapasDaObra className="mt-6 lg:mt-10" />
        </div>
      </div>
    </section>

    {/* Serviços */}
    <section id="servicos" className="pb-14 pt-[72px] lg:pb-24 lg:pt-[120px]">
      <div className="moldura">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 className="font-display text-t1-m font-semibold lg:text-t1">O que construímos</h2>
          <p className="hidden text-texto text-aco lg:block lg:max-w-[470px]">
            Da fundação à cobertura, com peças fabricadas por nós e montadas por equipe especializada.
          </p>
        </div>
        <ul className="mt-7 grid gap-7 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {servicos.map((servico) => (
            <li key={servico.caminho}>
              <Link
                to={servico.caminho}
                className="group flex gap-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 lg:block"
              >
                <img
                  src={servico.foto}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-[104px] w-[120px] shrink-0 rounded object-cover lg:aspect-[310/232] lg:h-auto lg:w-full"
                />
                <div className="lg:mt-3.5">
                  <h3 className="font-display text-t3 font-semibold text-noite">{servico.titulo}</h3>
                  <p className="mt-1.5 text-pequeno text-aco lg:mt-3.5 lg:text-texto">
                    <span className="lg:hidden">{servico.curta}</span>
                    <span className="hidden lg:inline">{servico.descricao}</span>
                  </p>
                  <span className="mt-1.5 inline-block text-rotulo font-medium text-primary underline underline-offset-4 group-hover:text-noite lg:mt-3.5">
                    Conhecer o serviço
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Clientes */}
    <section aria-labelledby="clientes-titulo" className="pb-[72px] lg:pb-[120px]">
      <div className="moldura">
        <div className="border-t border-linha pt-8 lg:flex lg:items-center lg:gap-16 lg:pt-12">
          <h2 id="clientes-titulo" className="text-balance font-sans text-pequeno font-normal text-aco lg:w-[180px] lg:shrink-0">
            Empresas que confiam na M3
          </h2>
          {/* Linhas de 4 (celular) ou 6 (tablet) com a última centralizada; de lg a 1400 px, duas linhas de 5;
              acima disso, uma linha só (em 10 colunas mais estreitas os logos ficariam ilegíveis) */}
          <ul className="mt-6 flex flex-wrap justify-center gap-x-2.5 gap-y-5 lg:mt-0 lg:grid lg:flex-1 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-6 min-[1400px]:grid-cols-10">
            {clientes.map((cliente) => (
              <li key={cliente.nome} className="w-[82px] md:w-[104px] lg:w-auto">
                <img
                  src={cliente.logo}
                  alt={cliente.nome}
                  loading="lazy"
                  decoding="async"
                  className="h-[34px] w-full object-contain mix-blend-multiply grayscale lg:h-11"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <SecaoContato idDoBotao="cta-merlin2" />
  </Pagina>
);

export default Home;
