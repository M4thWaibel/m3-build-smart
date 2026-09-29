// As obras do site. A Home, a lista em /obras e cada página /obras/:slug leem daqui.
//
// Fotos: cada obra lê a própria pasta em src/assets ("Projeto N ..."). Para trocar ou
// acrescentar fotos basta mexer na pasta; a primeira em ordem de nome é a capa.
// Arquivos .txt e .DNG (RAW, que o navegador não exibe) ficam de fora.
const arquivos = import.meta.glob("../assets/Projeto*/*.{jpg,JPG,jpeg,JPEG,png,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const fotosDaPasta = (pasta: string): string[] =>
  Object.entries(arquivos)
    .filter(([caminho]) => caminho.includes(`/Projeto ${pasta} `))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url);

export type LinhaDeFicha = { rotulo: string; valor: string };

export type Obra = {
  slug: string;
  titulo: string;
  cidade: string;
  ano: string;
  situacao: "entregue" | "em_andamento";
  /** Linha abaixo do título na página da obra. */
  subtitulo: string;
  /** Texto da obra em destaque na Home e de "Sobre a obra". */
  descricao: string;
  /** Linha do cartão, abaixo do título. */
  resumo: string;
  /** Linhas da ficha técnica além de Local, Ano e Situação, que saem dos campos acima. */
  ficha: LinhaDeFicha[];
  /** Medida horizontal real, desenhada como cota sobre a capa. Sem medida assim, sem cota. */
  cota?: string;
  fotos: string[];
};

export const obras: Obra[] = [
  {
    slug: "galpao-fabril-boituva",
    titulo: "Galpão Fabril",
    cidade: "Boituva, SP",
    ano: "2024",
    situacao: "entregue",
    subtitulo: "Galpão com estrutura em concreto pré-moldado e metálica em Boituva, SP.",
    descricao:
      "Estrutura em concreto pré-moldado e metálica, pensada para unir eficiência, resistência e funcionalidade.",
    resumo: "Boituva, SP. 4.360 m² com vão livre de 38 m, 2024.",
    ficha: [
      { rotulo: "Área", valor: "4.360 m²" },
      { rotulo: "Vão livre", valor: "38 m" },
      { rotulo: "Estrutura", valor: "Pré-moldada e metálica" },
    ],
    cota: "vão livre 38 m",
    fotos: fotosDaPasta("1"),
  },
  {
    slug: "predio-administrativo-boituva",
    titulo: "Prédio Administrativo",
    cidade: "Boituva, SP",
    ano: "2025",
    situacao: "entregue",
    subtitulo: "Prédio de seis andares em estrutura pré-moldada em Boituva, SP.",
    descricao:
      "Estrutura totalmente pré-moldada, com lajes alveolares para maior eficiência e precisão construtiva.",
    resumo: "Boituva, SP. 2.620 m² em 6 andares, entregue em 2025.",
    ficha: [
      { rotulo: "Área construída", valor: "2.620 m²" },
      { rotulo: "Altura", valor: "24,5 m, 6 andares" },
      { rotulo: "Estrutura", valor: "Pré-moldada, lajes alveolares" },
    ],
    fotos: fotosDaPasta("4"),
  },
  {
    slug: "galpao-logistico-cerquilho",
    titulo: "Galpão Logístico",
    cidade: "Cerquilho, SP",
    ano: "2023",
    situacao: "entregue",
    subtitulo: "Galpão com pilares pré-moldados e fechamento em alvenaria em Cerquilho, SP.",
    descricao:
      "Pilares pré-moldados e fechamento em alvenaria, pensados para oferecer amplitude, resistência e praticidade operacional.",
    resumo: "Cerquilho, SP. 3.420 m² construídos em 2023.",
    ficha: [
      { rotulo: "Área construída", valor: "3.420 m²" },
      { rotulo: "Vão livre", valor: "30 m" },
      { rotulo: "Estrutura", valor: "Pilares pré-moldados" },
      { rotulo: "Fechamento", valor: "Alvenaria" },
    ],
    cota: "vão livre 30 m",
    fotos: fotosDaPasta("3"),
  },
  {
    slug: "galpao-industrial-boituva",
    titulo: "Galpão Industrial",
    cidade: "Boituva, SP",
    ano: "2024",
    situacao: "entregue",
    subtitulo: "Galpão com pilares pré-moldados e cobertura metálica em Boituva, SP.",
    descricao:
      "Pilares pré-moldados, vigas de rolamento e estrutura metálica de cobertura, com amplo vão livre e excelente aproveitamento interno.",
    resumo: "Boituva, SP. 2.600 m² com vão livre de 22 m, 2024.",
    ficha: [
      { rotulo: "Área", valor: "2.600 m²" },
      { rotulo: "Vão livre", valor: "22 m" },
      { rotulo: "Estrutura", valor: "Pré-moldada e metálica" },
    ],
    cota: "vão livre 22 m",
    fotos: fotosDaPasta("2"),
  },
  {
    slug: "galpao-industrial-piracicaba",
    titulo: "Galpão Industrial",
    cidade: "Piracicaba, SP",
    ano: "2026",
    situacao: "em_andamento",
    subtitulo: "Galpão de 60 × 120 m com pilares pré-moldados e cobertura metálica em Piracicaba, SP.",
    descricao:
      "Pilares pré-moldados, vigas de rolamento e estrutura metálica de cobertura, pensados para oferecer resistência e eficiência construtiva.",
    resumo: "Piracicaba, SP. 7.200 m² em 60 × 120 m.",
    ficha: [
      { rotulo: "Área", valor: "7.200 m²" },
      { rotulo: "Dimensões", valor: "60 × 120 m" },
      { rotulo: "Estrutura", valor: "Pré-moldada e metálica" },
    ],
    cota: "120 m",
    fotos: fotosDaPasta("9"),
  },
  {
    slug: "galpoes-industriais-boituva",
    titulo: "Galpões Industriais",
    cidade: "Boituva, SP",
    ano: "2024",
    situacao: "entregue",
    subtitulo: "Quatro galpões com pilares pré-moldados e cobertura metálica em Boituva, SP.",
    descricao:
      "Conjunto de quatro galpões com pilares pré-moldados e estrutura metálica de cobertura, feitos para garantir amplitude, durabilidade e eficiência nas operações.",
    resumo: "Boituva, SP. Quatro galpões, 4.000 m², 2024.",
    ficha: [
      { rotulo: "Área", valor: "4.000 m²" },
      { rotulo: "Galpões", valor: "4" },
      { rotulo: "Vão livre", valor: "30 m" },
      { rotulo: "Estrutura", valor: "Pré-moldada e metálica" },
    ],
    cota: "vão livre 30 m",
    fotos: fotosDaPasta("5"),
  },
  {
    slug: "galpao-de-lona-cerquilho",
    titulo: "Galpão de Lona",
    cidade: "Cerquilho, SP",
    ano: "2023",
    situacao: "entregue",
    subtitulo: "Galpão em estrutura metálica galvanizada com cobertura em lona em Cerquilho, SP.",
    descricao:
      "Estrutura metálica galvanizada e cobertura em lona, pensadas para dar leveza, praticidade e resistência às intempéries.",
    resumo: "Cerquilho, SP. 1.500 m² em estrutura galvanizada, 2023.",
    ficha: [
      { rotulo: "Área", valor: "1.500 m²" },
      { rotulo: "Vão livre", valor: "20 m" },
      { rotulo: "Estrutura", valor: "Metálica galvanizada" },
      { rotulo: "Cobertura", valor: "Lona" },
    ],
    cota: "vão livre 20 m",
    fotos: fotosDaPasta("7"),
  },
  {
    slug: "galpoes-para-estoque-saltinho",
    titulo: "Galpões para Estoque",
    cidade: "Saltinho, SP",
    ano: "2024",
    situacao: "entregue",
    subtitulo: "Galpões em concreto pré-moldado com vigas protendidas em Saltinho, SP.",
    descricao:
      "Estrutura em concreto pré-moldado, vigas de cobertura protendidas e painéis de fechamento, para garantir robustez, durabilidade e amplo espaço interno.",
    resumo: "Saltinho, SP. 2.100 m² com vigas protendidas, 2024.",
    ficha: [
      { rotulo: "Área", valor: "2.100 m²" },
      { rotulo: "Vão livre", valor: "27 m" },
      { rotulo: "Estrutura", valor: "Pré-moldada, vigas protendidas" },
    ],
    cota: "vão livre 27 m",
    fotos: fotosDaPasta("8"),
  },
  {
    slug: "complexo-industrial-saltinho",
    titulo: "Complexo Industrial",
    cidade: "Saltinho, SP",
    ano: "2025",
    situacao: "em_andamento",
    subtitulo: "Complexo de galpões em estrutura pré-moldada em Saltinho, SP.",
    descricao:
      "Diversos galpões em estrutura pré-moldada, pensados para dar robustez, eficiência e flexibilidade às operações industriais.",
    resumo: "Saltinho, SP. Galpões num terreno de mais de 40 mil m².",
    ficha: [
      { rotulo: "Terreno", valor: "Mais de 40 mil m²" },
      { rotulo: "Estrutura", valor: "Pré-moldada" },
    ],
    fotos: fotosDaPasta("11"),
  },
  {
    slug: "galpao-para-estoque-piracicaba",
    titulo: "Galpão para Estoque",
    cidade: "Piracicaba, SP",
    ano: "2023",
    situacao: "entregue",
    subtitulo: "Galpão com muro de arrimo e pilares pré-moldados em Piracicaba, SP.",
    descricao:
      "Fundações, muro de arrimo de 4 m, pilares pré-moldados e painéis de fechamento, com segurança estrutural e ótimo aproveitamento interno.",
    resumo: "Piracicaba, SP. 870 m² com pé-direito de 8 m, 2023.",
    ficha: [
      { rotulo: "Área", valor: "870 m²" },
      { rotulo: "Pé-direito", valor: "8 m" },
      { rotulo: "Muro de arrimo", valor: "4 m" },
      { rotulo: "Estrutura", valor: "Pré-moldada" },
    ],
    fotos: fotosDaPasta("10"),
  },
  {
    slug: "fundacao-e-pilares-piracicaba",
    titulo: "Fundação e Pilares",
    cidade: "Piracicaba, SP",
    ano: "2024",
    situacao: "entregue",
    subtitulo: "Fundações e pilares pré-moldados para 9.650 m² em Piracicaba, SP.",
    descricao:
      "Execução de fundações e pilares pré-moldados para um amplo vão livre e excelente desempenho estrutural.",
    resumo: "Piracicaba, SP. 9.650 m² com vão livre de 24 m, 2024.",
    ficha: [
      { rotulo: "Área construída", valor: "9.650 m²" },
      { rotulo: "Vão livre", valor: "24 m" },
      { rotulo: "Escopo", valor: "Fundações e pilares pré-moldados" },
    ],
    cota: "vão livre 24 m",
    fotos: fotosDaPasta("6"),
  },
  {
    slug: "complexo-industrial-piracicaba",
    titulo: "Complexo Industrial",
    cidade: "Piracicaba, SP",
    ano: "2025",
    situacao: "em_andamento",
    subtitulo: "Complexo com áreas industriais, refeitório e vestiários em Piracicaba, SP.",
    descricao:
      "Diversos galpões, incluindo áreas industriais, refeitório e vestiários, pensados para garantir funcionalidade, conforto e eficiência operacional.",
    resumo: "Piracicaba, SP. 48 mil m² com áreas industriais, refeitório e vestiários.",
    ficha: [{ rotulo: "Área", valor: "48 mil m²" }],
    fotos: fotosDaPasta("12"),
  },
];

export const obraPorSlug = (slug?: string) => obras.find((obra) => obra.slug === slug);

/**
 * As obras na ordem pedida. Slug que não existe mais é ignorado em vez de quebrar a página,
 * com aviso no console do modo de desenvolvimento para a troca de nome não passar despercebida.
 */
export const obrasPorSlugs = (slugs: string[]) =>
  slugs.map((slug) => {
    const obra = obraPorSlug(slug);
    if (!obra && import.meta.env.DEV) console.warn(`Obra "${slug}" não existe em src/data/obras.ts`);
    return obra;
  }).filter((obra): obra is Obra => Boolean(obra));

/** Obra em destaque na Home e os três cartões ao lado dela. */
export const DESTAQUE = "galpao-fabril-boituva";
export const VITRINE = ["galpao-logistico-cerquilho", "galpao-industrial-piracicaba", "predio-administrativo-boituva"];

/** As três obras seguintes na lista, dando a volta no fim; a própria obra nunca entra. */
export const outrasObras = (slug: string, quantidade = 3) => {
  const i = obras.findIndex((obra) => obra.slug === slug);
  return Array.from({ length: Math.min(quantidade, obras.length - 1) }, (_, n) => obras[(i + 1 + n) % obras.length]);
};

export const rotuloDaSituacao = (obra: Obra) =>
  obra.situacao === "entregue" ? `Entregue em ${obra.ano}` : "Em andamento";

/** Local, Ano, as linhas próprias da obra e Situação: a ficha completa da página da obra. */
export const fichaCompleta = (obra: Obra): LinhaDeFicha[] => [
  { rotulo: "Local", valor: obra.cidade },
  { rotulo: "Ano", valor: obra.ano },
  ...obra.ficha,
  { rotulo: "Situação", valor: obra.situacao === "entregue" ? "Entregue" : "Em andamento" },
];

// Contagens por extenso para o texto de abertura; a lista cresce sem alguém lembrar de mudar o número
const EXTENSO = ["zero", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"];
const porExtenso = (n: number) => EXTENSO[n] ?? String(n);
const maiuscula = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1);

export const aberturaDasObras = () => {
  const cidades = [...new Set(obras.map((obra) => obra.cidade.replace(/, SP$/, "")))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
  const listaDeCidades =
    cidades.length > 1 ? `${cidades.slice(0, -1).join(", ")} e ${cidades[cidades.length - 1]}` : cidades[0];
  const entregues = obras.filter((obra) => obra.situacao === "entregue").length;
  const emAndamento = obras.length - entregues;
  const total = `${maiuscula(porExtenso(obras.length))} ${obras.length === 1 ? "obra" : "obras"}`;
  let situacao = `${maiuscula(porExtenso(entregues))} ${entregues === 1 ? "entregue" : "entregues"}`;
  if (emAndamento > 0) {
    situacao += ` e ${porExtenso(emAndamento)} em andamento`;
    if (obraPorSlug("complexo-industrial-piracicaba")?.situacao === "em_andamento") {
      situacao += ", entre elas um complexo industrial de 48 mil m²";
    }
  }
  return `${total} em ${listaDeCidades}. ${situacao}.`;
};
