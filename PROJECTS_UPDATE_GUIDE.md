# Guia de Atualização dos Dados dos Projetos

## Mudanças Implementadas

### Componentes Criados/Modificados

1. **`ProjectModal.tsx`** (Novo)
   - Modal para exibir detalhes completos do projeto
   - Carrossel de imagens da galeria
   - Descrição detalhada
   - Informações técnicas (localização, área, tipo de serviço)

2. **`ProjectsCarousel.tsx`** (Atualizado)
   - Cards agora são clicáveis
   - Botão "Saiba mais..." em azul no canto inferior direito
   - Animação hover (zoom na imagem)
   - Integração com o modal

### Interface Project Atualizada

```typescript
interface Project {
  image: string;                    // Imagem principal (obrigatório)
  title: string;                    // Título (obrigatório)
  description: string;              // Descrição curta para o card (obrigatório)
  year: string;                     // Ano (obrigatório)
  location: string;                 // Localização (obrigatório)
  area: string;                     // Área (obrigatório)
  client: string;                   // Cliente/Info adicional (obrigatório)
  status: "concluido" | "em_andamento";  // Status (obrigatório)
  
  // Novas propriedades opcionais
  gallery?: string[];               // Array de imagens para o modal
  detailedDescription?: string;     // Descrição detalhada para o modal
  serviceType?: string;             // Tipo de serviço específico
}
```

## Como Atualizar os Projetos em Home.tsx

### Antes (sem modal):
```typescript
{
  image: projeto1,
  title: "Galpão Fabril",
  description: "Com estrutura em concreto...",
  year: "2024",
  location: "Boituva, SP",
  area: "4.360 m²",
  client: "Vão Livre 38m",
  status: "concluido" as const
}
```

### Depois (com modal):
```typescript
{
  image: projeto1,
  title: "Galpão Fabril",
  description: "Com estrutura em concreto pré-moldado e metálica...",
  year: "2024",
  location: "Boituva, SP",
  area: "4.360 m²",
  client: "Vão Livre 38m",
  status: "concluido" as const,
  
  // Adicione estas propriedades:
  gallery: [projeto1, projeto1_alt1, projeto1_alt2],  // 3-10 imagens
  detailedDescription: "Este projeto consiste em um galpão fabril de grande porte, com estrutura mista em concreto pré-moldado e metálica. O projeto foi desenvolvido para atender às necessidades específicas do cliente, garantindo máxima eficiência operacional e durabilidade. A obra foi concluída dentro do prazo estabelecido, com rigoroso controle de qualidade em todas as etapas da construção.",
  serviceType: "Galpão Industrial - Estrutura Mista"
}
```

## Comportamento Atual (Funcional)

### Sem os novos campos:
Se você **não** adicionar `gallery`, `detailedDescription` e `serviceType`:
- ✅ O modal ainda funcionará
- ✅ Usará a imagem principal como única imagem da galeria
- ✅ Usará a descrição curta como descrição detalhada
- ✅ Usará o campo `client` como tipo de serviço

### Com os novos campos:
- ✅ Galeria com múltiplas imagens
- ✅ Descrição mais completa e detalhada
- ✅ Tipo de serviço específico

## Próximos Passos

1. **Criar mais imagens dos projetos** (opcional, mas recomendado)
   - Tire fotos adicionais de ângulos diferentes
   - Importe-as em `Home.tsx`
   - Adicione ao array `gallery`

2. **Escrever descrições detalhadas** (opcional)
   - Expanda as descrições atuais
   - Adicione detalhes técnicos
   - Mencione desafios superados

3. **Definir tipos de serviço** (opcional)
   - Ex: "Galpão Industrial - Estrutura Pré-Moldada"
   - Ex: "Complexo Logístico - Estrutura Metálica"
   - Ex: "Prédio Administrativo - Lajes Alveolares"

## Exemplo Completo

```typescript
import projeto1_img1 from "@/assets/projeto-1.jpg";
import projeto1_img2 from "@/assets/projeto-1-alt1.jpg";
import projeto1_img3 from "@/assets/projeto-1-alt2.jpg";

const projects = [
  {
    image: projeto1_img1,
    title: "Galpão Fabril",
    description: "Com estrutura em concreto pré-moldado e metálica, projetado para unir eficiência, resistência e funcionalidade.",
    year: "2024",
    location: "Boituva, SP",
    area: "4.360 m²",
    client: "Vão Livre 38m",
    status: "concluido" as const,
    gallery: [projeto1_img1, projeto1_img2, projeto1_img3],
    detailedDescription: "Projeto de galpão fabril executado com estrutura mista, combinando pilares e vigas em concreto pré-moldado com cobertura em estrutura metálica. O vão livre de 38 metros permite ampla flexibilidade no layout interno, otimizando o espaço para operações industriais. A obra foi entregue em 8 meses, com certificação de qualidade em todas as etapas construtivas.",
    serviceType: "Galpão Industrial - Estrutura Mista (Pré-Moldado + Metálica)"
  },
  // ... outros projetos
];
```

## Design e UX

### Cores e Estilo
- ✅ Usa `text-blue-600` para o botão "Saiba mais..." (seguindo padrão do site)
- ✅ Modal usa componentes `shadcn/ui` padrão do projeto
- ✅ Mantém consistência com o design system existente
- ✅ Animações suaves (hover, transições)

### Acessibilidade
- ✅ Cards são clicáveis e têm cursor pointer
- ✅ Botão "Saiba mais..." pode ser clicado separadamente
- ✅ Modal fecha ao clicar fora ou no X
- ✅ Contador de imagens na galeria

### Responsividade
- ✅ Modal se ajusta em telas pequenas (max-h-90vh com scroll)
- ✅ Galeria de imagens responsiva
- ✅ Grid de informações se adapta (3 colunas desktop, 1 mobile)
