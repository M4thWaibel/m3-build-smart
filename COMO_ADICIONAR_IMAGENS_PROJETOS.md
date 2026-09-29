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

Cada obra tem uma **página própria** em `/obras/<endereço-da-obra>` (ex.: `/obras/galpao-fabril-boituva`), com galeria de fotos, ficha técnica e texto. A lista completa fica em `/obras`, e a Home mostra uma obra em destaque e três cartões.

A **primeira imagem** da pasta é a capa: aparece no cartão, no destaque da Home e abre a galeria.

As imagens ficam organizadas em **pastas dentro de `src/assets/`**, uma pasta por obra.

---

## Como Funciona Agora

> ✅ **Não é preciso editar imports para trocar fotos.**

Os dados das obras ficam em [`src/data/obras.ts`](src/data/obras.ts). Esse arquivo carrega **automaticamente** todas as imagens de cada pasta de projeto usando `import.meta.glob` do Vite:

```typescript
const arquivos = import.meta.glob("../assets/Projeto*/*.{jpg,JPG,jpeg,JPEG,png,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
});
```

Regras automáticas:

- ✅ Toda imagem `.jpg`, `.jpeg` ou `.png` (maiúsculas ou minúsculas) dentro de uma pasta `Projeto N ...` entra na galeria daquela obra.
- ✅ A **ordem** segue o nome do arquivo (ordem numérica natural: `1.1`, `1.2`, `1.3`...).
- ✅ A **primeira** imagem vira a capa.
- 🚫 Arquivos `.txt` são ignorados.
- 🚫 Arquivos `.DNG` (RAW) são ignorados — **o navegador não exibe esse formato**. Converta para `.jpg` antes de usar.

Cada obra é ligada à sua pasta pelo número dela, por exemplo `fotos: fotosDaPasta("1")` para a pasta `Projeto 1 ...`.

---

## Passo a Passo

### Para TROCAR ou ADICIONAR fotos de uma obra existente

1. Abra a pasta da obra em `src/assets/` (veja o [mapa abaixo](#mapa-de-pastas--projetos)).
2. **Adicione, remova ou substitua** os arquivos de imagem (`.jpg`, `.jpeg`, `.png`).
3. Para controlar a **ordem**, nomeie os arquivos numericamente. Ex.:
   ```
   Projeto 1.1.jpg   ← capa e 1ª foto da galeria
   Projeto 1.2.jpg
   Projeto 1.3.jpg
   ```
4. Pronto. Salve e rode o projeto — não precisa mexer no código.

### Para CRIAR uma nova obra (projeto 13, 14...)

1. Crie a pasta `src/assets/Projeto 13 Nome do Cliente/` e coloque as imagens dentro.
2. Em [`src/data/obras.ts`](src/data/obras.ts), acrescente a obra à lista `obras`, na posição em que ela deve aparecer em `/obras`:
   ```typescript
   {
     slug: "galpao-logistico-tatui",      // vira o endereço /obras/galpao-logistico-tatui
     titulo: "Galpão Logístico",
     cidade: "Tatuí, SP",
     ano: "2026",
     situacao: "entregue",                 // ou "em_andamento"
     subtitulo: "Galpão com pilares pré-moldados e cobertura metálica em Tatuí, SP.",
     descricao: "Texto de 'Sobre a obra'.",
     resumo: "Tatuí, SP. 5.000 m² com vão livre de 40 m, 2026.",  // linha do cartão
     ficha: [
       { rotulo: "Área", valor: "5.000 m²" },
       { rotulo: "Vão livre", valor: "40 m" },
       { rotulo: "Estrutura", valor: "Pré-moldada e metálica" },
     ],
     cota: "vão livre 40 m",               // opcional: só com medida horizontal real
     fotos: fotosDaPasta("13"),
   },
   ```
3. Local, Ano e Situação entram sozinhos na ficha técnica; em `ficha` vão só as outras linhas.
4. O texto de abertura ("Doze obras em ...") e o botão "Ver as 12 obras" se atualizam sozinhos com a contagem e as cidades.
5. Para trocar a obra em destaque ou os três cartões da Home, mude `DESTAQUE` e `VITRINE` no fim do mesmo arquivo.

> 💡 O `slug` precisa ser único, sem acento e com hífens. Duas obras com o mesmo título se diferenciam pela cidade.

---

## Mapa de Pastas → Projetos

A numeração das pastas **não** segue a ordem de exibição no site. Mapeamento atual:

| Pasta em `src/assets/`              | Obra no site                          |
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

- ✅ **Fotos na horizontal** funcionam melhor: a galeria é 16:9 no computador e 4:3 no celular
- ✅ Use **mesma resolução** para todas as imagens de uma obra
- ✅ Coloque a melhor foto como a **primeira** (será a capa)
- ✅ A cota amarela (`cota`) aparece só sobre a capa; escolha uma capa em que a medida faça sentido

### 🚀 Performance (IMPORTANTE)

- ⚠️ Várias fotos atuais estão **muito pesadas** (algumas com 5–25 MB), o que deixa o site lento.
- ✅ Redimensione para **~1920px de largura** e exporte com qualidade **80–85%**.
- ✅ Meta de peso: **< 500 KB por imagem**.
- ✅ Ferramentas úteis: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/), ou WebP.

### 📝 Nomenclatura

Para controlar a ordem da galeria, use nomes numéricos sequenciais:
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

### ❌ Problema: Capa errada

**Causa:** A capa é sempre a **primeira** imagem da pasta.
- **Solução:** renomeie a foto desejada para que ela venha primeiro na ordem alfabética.

### ❌ Problema: Obra nova não aparece

- Verifique se a obra foi acrescentada à lista `obras` em `src/data/obras.ts`.
- Verifique se o número em `fotosDaPasta("13")` é o mesmo da pasta `Projeto 13 ...`.
- Página da obra abre "Esta página não existe": confira se o endereço usa exatamente o `slug`.

---

## 🎯 Checklist Rápido

Para trocar fotos de uma obra existente:

- [ ] As imagens estão na pasta correta dentro de `src/assets/` (veja o mapa)
- [ ] São `.jpg`, `.jpeg` ou `.png` (não `.DNG`)
- [ ] Estão nomeadas na ordem desejada (numérica)
- [ ] Foram otimizadas (< 500 KB cada)
- [ ] Abri a página da obra e conferi a capa, a galeria e o cartão em `/obras`

---

**Última atualização:** 24 de Setembro de 2026
