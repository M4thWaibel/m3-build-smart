# 📸 Guia: Como Adicionar / Trocar Imagens dos Projetos

> **⚠️ IMPORTANTE:** Este arquivo é apenas para referência interna.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Como Funciona Agora](#como-funciona-agora)
3. [Passo a Passo](#passo-a-passo)
4. [Mapa de Pastas → Projetos](#mapa-de-pastas--projetos)
5. [Dicas e Boas Práticas](#dicas-e-boas-práticas)
6. [Troubleshooting](#troubleshooting)

---

## Visão Geral

Cada projeto no portfólio possui uma **galeria de imagens** exibida no modal quando o usuário clica no card. A **primeira imagem** da galeria também é usada como capa do card.

As imagens ficam organizadas em **pastas dentro de `src/assets/`**, uma pasta por projeto.

---

## Como Funciona Agora

> ✅ **Não é mais preciso editar imports nem o array de projetos para trocar fotos.**

O arquivo [`src/pages/Home.tsx`](src/pages/Home.tsx) carrega **automaticamente** todas as imagens de cada pasta de projeto usando `import.meta.glob` do Vite:

```typescript
const galleryFiles = import.meta.glob(
  "../assets/Projeto*/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  { eager: true, query: "?url", import: "default" }
);
```

Regras automáticas:

- ✅ Toda imagem `.jpg`, `.jpeg` ou `.png` (maiúsculas ou minúsculas) dentro de uma pasta `Projeto N ...` entra na galeria daquele projeto.
- ✅ A **ordem** segue o nome do arquivo (ordem numérica natural: `1.1`, `1.2`, `1.3`...).
- ✅ A **primeira** imagem da galeria vira a capa do card.
- 🚫 Arquivos `.txt` são ignorados.
- 🚫 Arquivos `.DNG` (RAW) são ignorados — **o navegador não exibe esse formato**. Converta para `.jpg` antes de usar.

Cada projeto no array é ligado à sua pasta por um **token** (o número da pasta), por exemplo:

```typescript
const galleries = {
  galpaoFabril: getGallery("/Projeto 1 "),
  predioAdministrativo: getGallery("/Projeto 4 "),
  // ...
};
```

---

## Passo a Passo

### Para TROCAR ou ADICIONAR fotos de um projeto existente

1. Abra a pasta do projeto em `src/assets/` (veja o [mapa abaixo](#mapa-de-pastas--projetos)).
2. **Adicione, remova ou substitua** os arquivos de imagem (`.jpg`, `.jpeg`, `.png`).
3. Para controlar a **ordem**, nomeie os arquivos numericamente. Ex.:
   ```
   Projeto 1.1.jpg   ← capa do card e 1ª do carrossel
   Projeto 1.2.jpg
   Projeto 1.3.jpg
   ```
4. Pronto. Salve e rode o projeto — não precisa mexer no código.

### Para CRIAR um novo projeto (projeto 13, 14...)

1. Crie a pasta `src/assets/Projeto 13 Nome do Cliente/` e coloque as imagens dentro.
2. Em [`src/pages/Home.tsx`](src/pages/Home.tsx), adicione a galeria ao objeto `galleries`:
   ```typescript
   const galleries = {
     // ... existentes
     meuNovoProjeto: getGallery("/Projeto 13 "),
   };
   ```
3. Adicione o objeto do projeto ao array `projects`:
   ```typescript
   {
     image: galleries.meuNovoProjeto[0],
     title: "Novo Galpão",
     description: "Descrição curta para o card...",
     year: "2025",
     location: "São Paulo, SP",
     area: "5.000 m²",
     client: "Vão Livre 40m",
     status: "concluido" as const,
     gallery: galleries.meuNovoProjeto,
   },
   ```

> 💡 O token (`"/Projeto 13 "`) precisa ter a **barra antes** e o **espaço depois** do número, para não confundir `Projeto 1` com `Projeto 10`/`11`/`12`.

---

## Mapa de Pastas → Projetos

A numeração das pastas **não** segue a ordem de exibição no site. Mapeamento atual:

| Pasta em `src/assets/`              | Projeto no site                       |
|-------------------------------------|---------------------------------------|
| `Projeto 1 Galpão Fabril - Arq`     | Galpão Fabril (Boituva)               |
| `Projeto 2 Galpão Industrial - tras arq 6` | Galpão Industrial (Boituva, 22m) |
| `Projeto 3 Galpão Logistico - J pilon` | Galpão Logístico (Cerquilho)       |
| `Projeto 4 Predio adm - Arq 6`      | Prédio Administrativo (Boituva)       |
| `Projeto 5 Arqplast`                | Galpões Industriais (Boituva)         |
| `Projeto 6 Bola`                    | Fundação e Pilares (Piracicaba)       |
| `Projeto 7 Cipatex lona`            | Galpão de Lona (Cerquilho)            |
| `Projeto 8 Rinen`                   | Galpões para Estoque (Saltinho)       |
| `Projeto 9 Unafe 2`                 | Galpão Industrial (Piracicaba)        |
| `Projeto 10 Unafe 1`                | Galpão para Estoque (Piracicaba)      |
| `Projeto 11 Vollmens`               | Complexo Industrial (Saltinho)        |
| `Projeto 12 West`                   | Complexo Industrial (Piracicaba)      |

---

## Dicas e Boas Práticas

### 📐 Dimensões e Qualidade

- ✅ **Aspecto 16:9** (landscape) funciona melhor no modal
- ✅ Use **mesma resolução** para todas as imagens de um projeto
- ✅ Coloque a melhor foto como a **primeira** (será a capa do card)

### 🚀 Performance (IMPORTANTE)

- ⚠️ Várias fotos atuais estão **muito pesadas** (algumas com 5–25 MB), o que deixa o site lento.
- ✅ Redimensione para **~1920px de largura** e exporte com qualidade **80–85%**.
- ✅ Meta de peso: **< 500 KB por imagem**.
- ✅ Ferramentas úteis: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/), ou WebP.

### 📝 Nomenclatura

Para controlar a ordem do carrossel, use nomes numéricos sequenciais:
```
✅ Projeto 1.1.jpg
✅ Projeto 1.2.jpg
✅ Projeto 1.3.jpg
```
Qualquer nome funciona, mas a ordem de exibição é a ordem alfabética/numérica do nome.

---

## Troubleshooting

### ❌ Problema: Imagem não aparece

**Causa 1:** Arquivo em formato `.DNG` (RAW) → não é exibido pelo navegador.
- **Solução:** converta para `.jpg` ou `.png`.

**Causa 2:** Extensão não suportada pelo glob.
- Use apenas `.jpg`, `.jpeg` ou `.png`.

**Causa 3:** Imagem fora de uma pasta `Projeto N ...`.
- A imagem precisa estar **dentro** da pasta do projeto, não solta em `src/assets/`.

### ❌ Problema: Imagens na ordem errada

**Causa:** A ordem segue o nome do arquivo.
- **Solução:** renomeie os arquivos com prefixo numérico (`1.1`, `1.2`, `1.3`...).

### ❌ Problema: Capa do card errada

**Causa:** A capa é sempre a **primeira** imagem da galeria.
- **Solução:** renomeie a foto desejada para que ela venha primeiro na ordem alfabética.

### ❌ Problema: Projeto novo não aparece

- Verifique se você adicionou tanto a entrada em `galleries` quanto o objeto no array `projects`.
- Verifique se o token (`"/Projeto 13 "`) tem a barra antes e o espaço depois do número.

---

## 🎯 Checklist Rápido

Para trocar fotos de um projeto existente:

- [ ] As imagens estão na pasta correta dentro de `src/assets/` (veja o mapa)
- [ ] São `.jpg`, `.jpeg` ou `.png` (não `.DNG`)
- [ ] Estão nomeadas na ordem desejada (numérica)
- [ ] Foram otimizadas (< 500 KB cada)
- [ ] Testei o card e o modal clicando no projeto

---

**Última atualização:** 09 de Junho de 2026
