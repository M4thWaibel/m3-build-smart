# m3-build-smart

Site institucional da **M3 Engenharia e Construções**, desenvolvido para oferecer uma experiência moderna, intuitiva e profissional, representando a identidade da empresa, seus valores e suas principais obras.

## Visão geral do projeto

O projeto tem como objetivo apresentar a M3 Engenharia e Construções no ambiente digital, transmitindo confiança e credibilidade para potenciais clientes, com foco em obras industriais e estruturas pré-moldadas.  
Além da camada visual, o site também foi pensado para ser leve, responsivo e funcional em diferentes dispositivos, com atenção especial a SEO básico e boas práticas de desenvolvimento web.

## Sobre a M3 Engenharia e Construções

- Fundada em 2022, com foco em obras industriais e estruturas pré-moldadas.  
- Propósito de oferecer tranquilidade aos clientes, priorizando agilidade, segurança e qualidade em cada projeto.  

## Principais características

- Layout moderno, limpo e alinhado à identidade visual da M3.  
- Site totalmente responsivo, otimizado para diferentes tamanhos de tela (desktop, tablet e mobile).  
- Otimizações de SEO básico e melhoria de performance visando carregamento rápido e boa experiência do usuário.  
- Configurações de DNS, redirecionamentos e hospedagem ajustados para garantir estabilidade e disponibilidade.  

## Tecnologias utilizadas

- **HTML** – estrutura semântica das páginas.  
- **CSS** – estilização base e ajustes finos de layout.  
- **JavaScript** – interações e comportamentos dinâmicos no front-end.  
- **TailwindCSS** – estilização utilitária, criação ágil de componentes e consistência visual.  
- **GitHub** – versionamento de código e controle de histórico.  
- **Hostinger** – hospedagem do site em ambiente de produção.  
- Configurações de **DNS** e redirecionamento de domínio, garantindo acesso por URL amigável e funcionamento estável.  

## Aprendizados e desafios

- Aprofundamento em configuração de DNS, migração de domínio e infraestrutura web.  
- Exploração de TailwindCSS, testando diferentes layouts até chegar a uma combinação visualmente agradável e profissional.  
- Evolução em comunicação com o cliente, desde o alinhamento de expectativas até a validação de versões de layout e tecnologia.  

## Pré‑requisitos

Para rodar o projeto localmente em ambiente de desenvolvimento:

- Navegador moderno (Chrome, Firefox, Edge, etc.).  
- Git instalado para clonar o repositório.  
- Opcionalmente, um servidor HTTP simples (como extensão Live Server do VS Code ou `http-server` via Node.js) para simular o ambiente de produção de forma mais realista.  

## Como executar o projeto

1. **Clonar o repositório:**

``` md
git clone https://github.com/M4thWaibel/m3-build-smart.git
cd m3-build-smart
```

2. **Abrir o projeto no navegador (modo simples):**  
- Abra o arquivo `index.html` diretamente no navegador, arrastando o arquivo ou usando “Abrir arquivo”.  

3. **Executar com um servidor local (recomendado):**  
- Usando a extensão Live Server (VS Code): clique com o botão direito em `index.html` e selecione “Open with Live Server”.  
- Ou, com Node.js instalado:
  ```
  npx http-server .
  ```
  Em seguida, acesse o endereço exibido no terminal (por exemplo, `http://localhost:8080`).  

## Estrutura sugerida do projeto

Adapte os nomes de pastas conforme a organização atual do repositório:

- `index.html` – página inicial do site institucional.  
- `assets/` – imagens, ícones e arquivos de mídia.  
- `css/` – arquivos de estilo (incluindo Tailwind compilado, se aplicável).  
- `js/` – scripts JavaScript responsáveis por interações e comportamentos específicos.  