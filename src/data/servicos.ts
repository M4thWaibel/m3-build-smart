// As quatro páginas de serviço usam o mesmo modelo (src/pages/PaginaServico.tsx); só o conteúdo muda.
// Textos de catálogo, capacidade e vantagens vêm das páginas antigas, sem inventar nada.
import type { Etapa } from "@/components/EtapasDaObra";
import construcoesImage from "@/assets/projeto-3.jpg";
import galpoesImage from "@/assets/projeto-1.jpg";
import fabricaImage from "@/assets/fabricacao-propria.jpg";
import fabricaAereaImage from "@/assets/hero-industrial.png";
import estruturasImage from "@/assets/projeto-7.jpg";

export type ItemDeLista = { nome?: string; texto: string };

export type Servico = {
  /** Rota da página, a mesma do site antigo. */
  caminho: string;
  titulo: string;
  abertura: string;
  foto: string;
  /** Toda foto é de obra real (com link para ela) ou da fábrica. */
  legendaDaFoto: { obra: string } | { texto: string };
  catalogo: { titulo: string; itens: ItemDeLista[] };
  /** Três obras de exemplo; no celular aparecem as duas primeiras. */
  obras: { titulo: string; slugs: string[] };
  /** Bloco da fábrica, no desenho da Home; só nos serviços que saem de lá. */
  capacidade?: { numero: string; unidade: string; rotulo: string; texto: string; foto: string; altDaFoto: string };
  /** Sem etapas próprias, a página usa as mesmas da Home. */
  etapas?: { titulo: string; lista: Etapa[] };
  vantagens?: { titulo: string; itens: ItemDeLista[] };
  /** Ids dos botões de orçamento (topo e fecho), os mesmos do site antigo. */
  botoes: [string, string];
};

export const servicos = {
  construcoes: {
    caminho: "/construcoes-industriais",
    titulo: "Construções industriais",
    abertura:
      "Soluções completas em construções industriais, desde a fundação até a entrega final. Nossa equipe experiente garante qualidade, segurança e cumprimento de prazos em todos os projetos.",
    foto: construcoesImage,
    legendaDaFoto: { obra: "galpao-logistico-cerquilho" },
    catalogo: {
      titulo: "O que fazemos",
      itens: [
        { nome: "Fundações", texto: "Execução de fundações profundas e superficiais para qualquer tipo de solo." },
        { nome: "Alvenaria estrutural", texto: "Sistemas construtivos eficientes e econômicos." },
        { nome: "Galpões completos", texto: "Projetos turnkey, do início ao fim." },
        { nome: "Reformas e ampliações", texto: "Modernização e expansão de instalações existentes." },
        { nome: "Obras civis", texto: "Infraestrutura completa para o seu empreendimento." },
        { nome: "Projetos personalizados", texto: "Soluções sob medida para cada necessidade." },
      ],
    },
    obras: {
      titulo: "Obras industriais",
      slugs: ["complexo-industrial-piracicaba", "galpoes-industriais-boituva", "galpao-para-estoque-piracicaba"],
    },
    vantagens: {
      titulo: "Por que construir com a M3",
      itens: [
        { texto: "Gestão completa de obra, do início ao fim" },
        { texto: "Equipe técnica com mais de 20 anos de experiência" },
        { texto: "Fabricação própria de pré-moldados e estruturas metálicas" },
        { texto: "Controle rigoroso de qualidade e prazos" },
        { texto: "Orçamento detalhado e transparente" },
        { texto: "Acompanhamento técnico em todas as etapas" },
      ],
    },
    botoes: ["cta-merlin8", "cta-merlin9"],
  },
  galpoes: {
    caminho: "/galpoes-industriais",
    titulo: "Galpões industriais e logísticos",
    abertura:
      "Projetos completos de galpões industriais e logísticos, desenvolvidos para as necessidades específicas da sua operação.",
    foto: galpoesImage,
    legendaDaFoto: { obra: "galpao-fabril-boituva" },
    catalogo: {
      titulo: "Tipos de galpão",
      itens: [
        { nome: "Galpões fabris", texto: "Espaços otimizados para linhas de produção industrial." },
        { nome: "Galpões logísticos", texto: "Amplos vãos livres para armazenagem e movimentação." },
        { nome: "Galpões de estoque", texto: "Estruturas robustas para armazenamento seguro." },
        { nome: "Galpões comerciais", texto: "Soluções versáteis para comércio e serviços." },
      ],
    },
    obras: {
      titulo: "Obras de galpões",
      slugs: ["galpao-logistico-cerquilho", "galpoes-industriais-boituva", "galpoes-para-estoque-saltinho"],
    },
    vantagens: {
      titulo: "Por que construir com a M3",
      itens: [
        { texto: "Projeto personalizado conforme a sua necessidade" },
        { texto: "Estrutura completa, com fundação e cobertura" },
        { texto: "Pré-dimensionamento gratuito" },
        { texto: "Execução rápida com fabricação própria" },
        { texto: "Garantia de qualidade e durabilidade" },
        { texto: "Acompanhamento técnico em todas as etapas" },
      ],
    },
    botoes: ["cta-merlin10", "cta-merlin11"],
  },
  preMoldados: {
    caminho: "/pre-moldados",
    titulo: "Pré-moldados",
    abertura:
      "Produção própria de estruturas pré-moldadas de concreto, com controle rigoroso de qualidade e entrega garantida no prazo. Capacidade de 2.000 m³ por mês.",
    foto: fabricaImage,
    legendaDaFoto: { texto: "pátio da fábrica da M3" },
    catalogo: {
      titulo: "Peças que fabricamos",
      itens: [
        { nome: "Pilares e vigas", texto: "Estruturas de sustentação com alta resistência e precisão dimensional." },
        { nome: "Vigas calha", texto: "Sistema integrado de drenagem e estrutura para coberturas." },
        { nome: "Placas de fechamento", texto: "Fechamento lateral e divisórias com isolamento térmico." },
        { nome: "Escadas pré-fabricadas", texto: "Acesso seguro entre níveis com acabamento de qualidade." },
        { nome: "Muros de arrimo", texto: "Contenção de terrenos com máxima segurança estrutural." },
        { nome: "Lajes alveolares", texto: "Lajes com excelente relação peso/resistência para grandes vãos." },
      ],
    },
    obras: {
      titulo: "Obras com pré-moldados",
      slugs: ["predio-administrativo-boituva", "fundacao-e-pilares-piracicaba", "galpoes-para-estoque-saltinho"],
    },
    capacidade: {
      numero: "2.000",
      unidade: "m³",
      rotulo: "de pré-moldados por mês",
      texto: "Fábrica equipada com tecnologia moderna para produção de pré-moldados com precisão e qualidade.",
      // Foto de drone da fábrica. A antiga "Área de produção" (fabricacao-propria1.jpg, 1280×720, sem
      // EXIF) não é da M3: tem o perfil de imagem de banco/gerada, diferente de todas as fotos reais.
      foto: fabricaAereaImage,
      altDaFoto: "Vista aérea da fábrica da M3, com o pátio de peças pré-moldadas",
    },
    vantagens: {
      titulo: "Vantagens da fabricação própria",
      itens: [
        { nome: "Controle de qualidade total", texto: "Cada peça passa por inspeção rigorosa antes da entrega, garantindo os mais altos padrões de qualidade." },
        { nome: "Prazos reduzidos", texto: "Sem dependência de terceiros, garantimos entregas rápidas e cumprimento dos cronogramas." },
        { nome: "Melhor custo-benefício", texto: "Eliminação de intermediários resulta em preços competitivos sem comprometer a qualidade." },
      ],
    },
    botoes: ["cta-merlin12", "cta-merlin13"],
  },
  estruturas: {
    caminho: "/estruturas-metalicas",
    titulo: "Estruturas metálicas",
    abertura:
      "Produção especializada de estruturas metálicas, com capacidade de 50 toneladas por mês. Cobertura, fechamento e estruturas sob medida.",
    foto: estruturasImage,
    legendaDaFoto: { obra: "galpao-de-lona-cerquilho" },
    catalogo: {
      titulo: "Estruturas que fabricamos",
      itens: [
        { nome: "Escadas metálicas", texto: "Estruturas de acesso seguras e duráveis para ambientes industriais." },
        { nome: "Tesouras metálicas", texto: "Sustentação robusta para coberturas de grandes vãos livres." },
        { nome: "Terças e treliças", texto: "Cobertura com excelente relação custo-benefício e rapidez." },
        { nome: "Mezaninos", texto: "Aproveitamento vertical de espaço com segurança estrutural." },
        { nome: "Passarelas", texto: "Circulação elevada entre ambientes com proteção lateral." },
        { nome: "Estruturas especiais", texto: "Projetos customizados sob medida para cada necessidade." },
      ],
    },
    obras: {
      titulo: "Obras com estrutura metálica",
      slugs: ["galpao-fabril-boituva", "galpao-industrial-piracicaba", "galpoes-industriais-boituva"],
    },
    capacidade: {
      numero: "50",
      unidade: "t",
      rotulo: "de estrutura metálica por mês",
      texto: "Corte, dobra e soldagem realizados na nossa fábrica por profissionais qualificados, com equipamentos modernos e precisos.",
      foto: fabricaImage,
      altDaFoto: "Pátio da fábrica da M3 com treliças metálicas prontas para sair",
    },
    etapas: {
      titulo: "Processo de fabricação",
      lista: [
        { nome: "Projeto e detalhamento", texto: "Projetos estruturais detalhados, com cálculos e dimensionamentos precisos, seguindo normas técnicas." },
        { nome: "Fabricação", texto: "Corte, dobra e soldagem realizados por profissionais qualificados com equipamentos modernos." },
        { nome: "Tratamento e pintura", texto: "Tratamento anticorrosivo e pintura industrial para máxima durabilidade e proteção." },
        { nome: "Montagem em campo", texto: "Equipe especializada realiza a montagem na obra com segurança e precisão, garantindo perfeito encaixe." },
      ],
    },
    botoes: ["cta-merlin14", "cta-merlin15"],
  },
} satisfies Record<string, Servico>;
