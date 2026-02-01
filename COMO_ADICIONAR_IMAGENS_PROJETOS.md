# 📸 Guia: Como Adicionar Novas Imagens aos Projetos

> **⚠️ IMPORTANTE:** Este arquivo é apenas para referência interna e **NÃO deve ser commitado** no repositório GitHub.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Passo a Passo](#passo-a-passo)
3. [Exemplo Prático Completo](#exemplo-prático-completo)
4. [Dicas e Boas Práticas](#dicas-e-boas-práticas)
5. [Troubleshooting](#troubleshooting)

---

## Visão Geral

Cada projeto no portfolio possui uma **galeria de imagens** que é exibida no modal quando o usuário clica no card do projeto. Esta galeria permite visualizar de **3 a 10 imagens** de cada obra.

### Estrutura Atual

- **Imagem Principal** (`image`): Exibida no card
- **Galeria** (`gallery`): Array de imagens exibidas no modal
- **Localização**: `src/pages/Home.tsx`

---

## Passo a Passo

### 1️⃣ Preparar as Imagens

1. **Tire fotos do projeto** de diferentes ângulos
2. **Renomeie os arquivos** seguindo o padrão:
   ```
   projeto-X-img1.jpg
   projeto-X-img2.jpg
   projeto-X-img3.jpg
   ```
   Onde `X` é o número do projeto

3. **Otimize as imagens** (recomendado):
   - Formato: JPG ou WebP
   - Tamanho ideal: 1920x1080px (Full HD)
   - Qualidade: 80-85%
   - Peso máximo: 500KB por imagem

### 2️⃣ Adicionar Imagens ao Projeto

1. **Copie as imagens** para a pasta de assets:
   ```
   src/assets/
   ```

2. **Importe as imagens** no arquivo `Home.tsx`:
   ```typescript
   // No topo do arquivo, junto com os outros imports
   import projeto13_img1 from "@/assets/projeto-13-img1.jpg";
   import projeto13_img2 from "@/assets/projeto-13-img2.jpg";
   import projeto13_img3 from "@/assets/projeto-13-img3.jpg";
   ```

### 3️⃣ Atualizar o Array de Projetos

Adicione a propriedade `gallery` ao projeto:

```typescript
const projects = [
  // ... outros projetos
  {
    image: projeto13_img1, // Imagem principal
    title: "Novo Galpão",
    description: "Descrição curta para o card...",
    year: "2025",
    location: "São Paulo, SP",
    area: "5.000 m²",
    client: "Vão Livre 40m",
    status: "concluido" as const,
    
    // ✅ ADICIONE ESTA LINHA com todas as imagens
    gallery: [projeto13_img1, projeto13_img2, projeto13_img3],
  },
];
```

---

## Exemplo Prático Completo

### Cenário: Adicionar 5 imagens ao "Galpão Fabril" (projeto1)

#### **Etapa 1: Preparar arquivos**

Arquivos de imagem:
```
src/assets/projeto-1-img1.jpg  (já existe)
src/assets/projeto-1-img2.jpg  (nova)
src/assets/projeto-1-img3.jpg  (nova)
src/assets/projeto-1-img4.jpg  (nova)
src/assets/projeto-1-img5.jpg  (nova)
```

#### **Etapa 2: Importar no Home.tsx**

```typescript
// No topo do arquivo (linha ~30)
import projeto1_img1 from "@/assets/projeto-1.jpg";
import projeto1_img2 from "@/assets/projeto-1-img2.jpg";
import projeto1_img3 from "@/assets/projeto-1-img3.jpg";
import projeto1_img4 from "@/assets/projeto-1-img4.jpg";
import projeto1_img5 from "@/assets/projeto-1-img5.jpg";
```

#### **Etapa 3: Atualizar o array de projetos**

```typescript
const projects = [
  {
    image: projeto1_img1,
    title: "Galpão Fabril",
    description: "Com estrutura em concreto pré-moldado e metálica...",
    year: "2024",
    location: "Boituva, SP",
    area: "4.360 m²",
    client: "Vão Livre 38m",
    status: "concluido" as const,
    
    // ✅ ANTES (demonstração):
    // gallery: [projeto1, projeto1, projeto1],
    
    // ✅ DEPOIS (com imagens reais):
    gallery: [
      projeto1_img1,
      projeto1_img2,
      projeto1_img3,
      projeto1_img4,
      projeto1_img5
    ],
  },
  // ... outros projetos
];
```

---

## Dicas e Boas Práticas

### 📐 Dimensões e Qualidade

- ✅ **Aspecto 16:9** (landscape) funciona melhor no modal
- ✅ Use **mesma resolução** para todas as imagens de um projeto
- ✅ Mantenha **consistência de qualidade** entre as fotos

### 🎨 Ordem das Imagens

Organize a galeria de forma lógica:

1. **Imagem 1**: Vista geral/fachada (a mesma do card)
2. **Imagem 2**: Detalhe interno/estrutura
3. **Imagem 3**: Outro ângulo importante
4. **Imagens 4-10**: Detalhes adicionais

### 🚀 Performance

- Evite imagens muito grandes (>1MB)
- Use ferramentas como [TinyPNG](https://tinypng.com/) para comprimir
- Considere usar formato WebP para melhor compressão

### 📝 Nomenclatura

Siga o padrão consistente:
```
✅ projeto-1-img1.jpg
✅ projeto-1-img2.jpg
✅ projeto-12-img3.jpg

❌ galpao-foto.jpg
❌ IMG_2024.jpg
❌ nova-imagem-do-projeto.jpg
```

---

## Troubleshooting

### ❌ Problema: Imagem não aparece

**Causa 1:** Import incorreto
```typescript
// ❌ ERRADO
import projeto1 from "assets/projeto-1.jpg";

// ✅ CORRETO
import projeto1 from "@/assets/projeto-1.jpg";
```

**Causa 2:** Caminho do arquivo errado
- Verifique se o arquivo existe em `src/assets/`
- Verifique a extensão (.jpg, .png, .webp)

### ❌ Problema: Modal mostra apenas 1 imagem

**Causa:** Gallery não foi adicionada ou está vazia
```typescript
// ❌ PROBLEMA
{
  image: projeto1,
  // ... outras propriedades
  // gallery não existe ou está vazia
}

// ✅ SOLUÇÃO
{
  image: projeto1,
  // ... outras propriedades
  gallery: [projeto1, projeto1_img2, projeto1_img3],
}
```

### ❌ Problema: Erro de compilação TypeScript

**Causa:** Sintaxe incorreta no array
```typescript
// ❌ ERRADO (falta vírgula)
gallery: [projeto1 projeto2 projeto3]

// ✅ CORRETO
gallery: [projeto1, projeto2, projeto3]
```

---

## 🎯 Checklist Rápido

Antes de fazer commit, verifique:

- [ ] Todas as imagens estão na pasta `src/assets/`
- [ ] Todos os imports estão no topo do `Home.tsx`
- [ ] A propriedade `gallery` foi adicionada ao projeto
- [ ] O array tem entre 3 e 10 imagens
- [ ] A primeira imagem do `gallery` é a mesma do `image`
- [ ] As imagens foram otimizadas (<500KB cada)
- [ ] Testei o modal clicando no projeto

---

## 📊 Status Atual dos Projetos

| Projeto | Imagens na Galeria | Status |
|---------|-------------------|--------|
| Galpão Fabril | 3 (temporário) | ⚠️ Precisa imagens reais |
| Prédio Administrativo | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpão Logístico | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpão Industrial | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpão Industrial (Piracicaba) | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpões Industriais | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpão de Lona | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpões para Estoque | 3 (temporário) | ⚠️ Precisa imagens reais |
| Complexo Industrial (Saltinho) | 3 (temporário) | ⚠️ Precisa imagens reais |
| Galpão para Estoque (Piracicaba) | 3 (temporário) | ⚠️ Precisa imagens reais |
| Fundação e Pilares | 3 (temporário) | ⚠️ Precisa imagens reais |
| Complexo Industrial (Piracicaba) | 3 (temporário) | ⚠️ Precisa imagens reais |

> 💡 **Nota:** Atualmente todos os projetos têm 3 imagens temporárias (a mesma imagem repetida 3 vezes) para demonstração do carrossel. Substitua por imagens reais seguindo este guia.

---

## 🔗 Arquivos Relacionados

- **Componente do Modal**: `src/components/ProjectModal.tsx`
- **Carrossel de Projetos**: `src/components/ProjectsCarousel.tsx`
- **Dados dos Projetos**: `src/pages/Home.tsx` (linhas 90-211)
- **Interface TypeScript**: `src/components/ProjectsCarousel.tsx` (linhas 10-19)

---

**Última atualização:** 31 de Janeiro de 2026
