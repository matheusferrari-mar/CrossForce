# Documentação do Projeto: Academia Cross Force (CrossForce Functional)

## 1. Visão Geral

**CrossForce Functional** é o website oficial de uma rede de academias, desenvolvido com foco em alta performance, acessibilidade e uma interface de usuário (UI) moderna e imersiva. O layout combina uma temática *dark mode* com elementos visuais robustos que remetem à força do treinamento funcional, complementados por um acento em ciano (`#00cbe6`) usado em toda a aplicação para reforçar a identidade da marca em CTAs, estados de hover e destaques.

## 2. Tecnologias e Stack

O projeto utiliza um ecossistema moderno baseado em React e ferramentas de estilização avançadas:

* **Next.js:** Framework React utilizado para renderização e estruturação da aplicação, com separação entre *Server Components* e *Client Components*.
* **TypeScript:** Utilizado para tipagem estática e maior segurança de código no desenvolvimento.
* **Tailwind CSS:** Motor de estilização utilitária para construção rápida, escalável e responsiva das interfaces.
* **shadcn/ui:** Biblioteca de componentes modulares acessíveis (ex.: `Dialog`), instalados sob demanda na pasta `@/components/ui`.
* **Lenis:** Biblioteca para efeito de *smooth scroll* (rolagem suave), proporcionando uma navegação fluida e de alto padrão. Respeita a preferência de *Reduced Motion* do sistema operacional do usuário.
* **Framer Motion:** Biblioteca de animação declarativa utilizada para micro-interações (hover em cards e botões), animações de entrada sincronizadas com o scroll (`whileInView`) e transições do carrossel de imagens.

## 3. Integração de Animações (Lenis + Framer Motion)

Para criar uma experiência de navegação imersiva, o projeto sincroniza a rolagem suave (Lenis) com as animações de interface (Framer Motion), garantindo que os elementos entrem em tela e reajam ao hover de forma consistente com o ritmo do scroll.

### Padrões de animação adotados

* **Entrada em cascata (`whileInView`):** Seções e cards (ex.: `PlanoCard`, blocos de diferenciais da página Sobre) surgem com fade-in + leve deslocamento vertical (`opacity: 0 → 1`, `y: 20px → 0`) no momento em que entram na viewport, com `viewport={{ once: true }}` para não repetir a animação a cada scroll.
* **Micro-interações de hover:** Botões e CTAs utilizam `hover:scale-[1.02]` a `1.03` combinados com `active:scale-[0.97]`/`[0.98]`, simulando feedback tátil de clique. Cards elevam-se (`-translate-y-2`) com sombra progressiva no hover.
* **Carrossel de imagens (`ImageCarousel`):** Componente próprio construído com Framer Motion, usando `AnimatePresence` para transições entre slides, `drag="x"` para suporte a swipe/arraste, autoplay com pausa automática no hover, e indicadores de posição (dots).

### Sincronização com o Lenis

Ao integrar bibliotecas de animação de scroll mais avançadas (como o GSAP ScrollTrigger, caso seja adotado futuramente para efeitos adicionais), é importante que o Lenis e a lib de animação compartilhem o mesmo relógio de atualização, para evitar conflitos de posição ou engasgos durante o scroll. A técnica recomendada é conectar o `lenis.raf` ao ticker interno da biblioteca de animação (ex.: `gsap.ticker.add()`), em vez de depender apenas do `requestAnimationFrame` padrão do navegador.

## 4. Estrutura e Arquitetura Principal

A arquitetura do projeto segue as boas práticas do ecossistema Next.js, priorizando performance e SEO.

### Layout Principal (`layout.tsx`)

Arquivo base do projeto, funcionando como **Server Component** focado em otimização estrutural:

* **Fontes:** Utiliza `next/font/google` para importar a família tipográfica **Montserrat**.
* **Metadados:** Exporta configurações para motores de busca, definindo o título "Academia Cross Force - Site de uma rede de academias".
* **Estrutura de UI:** Envelopa todas as páginas em um cabeçalho global (`<Header />`), corpo principal elástico (`<main className="flex-1">`) e um rodapé (`<Footer />`).

### Sistema de Rolagem Suave (`SmoothScroll.tsx`)

Para evitar conflitos com a renderização no servidor, a integração com o Lenis foi isolada em um provedor **Client Component** (`'use client'`):

* Parâmetros configurados para uma curva de aceleração suave (`duration: 1.4`, easing exponencial customizado, `smoothWheel: true`).
* Respeita a preferência de *Reduced Motion* do sistema operacional do usuário.

### Componentes Principais

| Componente | Responsabilidade |
|---|---|
| `Header` | Navegação global, fixa no topo (`sticky`), com estado ativo por rota e sublinhado animado em ciano nos links. |
| `Footer` | Rodapé com navegação rápida, informações de contato, redes sociais e créditos de desenvolvimento. |
| `PlanoCard` | Card de exibição de planos, com destaque visual para o plano popular, controles de admin (editar/excluir) e entrada animada em cascata. |
| `ImageCarousel` | Carrossel de imagens reutilizável (drag, autoplay, indicadores), usado atualmente na página Sobre. |

## 5. UI/UX e Design System

A interface foi alinhada utilizando Flexbox e Grid do Tailwind, priorizando consistência entre páginas.

### Paleta de Cores

* **Fundo escuro:** Alterna entre Azul Profundo/Cinza Chumbo (`#1C2E36` → `#000000` em gradiente no Header, `#121212` em seções de destaque) e Cinza Gelo/Off-White (`#f4f6f9`, `#f5f6f8`) em seções de conteúdo mais claras.
* **Cor de destaque (accent):** Ciano `#00cbe6` (hover em `#00b3cc`), aplicado em CTAs, bordas do plano popular, ícones e estados ativos de navegação — é o principal elemento de identidade visual da marca ao longo do site.
* **Texto:** Branco/Cinza Gelo sobre fundos escuros; Preto/Cinza Escuro sobre fundos claros, priorizando alto contraste e legibilidade.

### Tipografia

Textos em **Montserrat**, com títulos principais em peso *Bold/Black* e caixa alta (uppercase), reforçando a identidade robusta da marca.

## 6. Como Executar o Projeto Localmente

1. **Instalação das dependências:**
   ```bash
   npm install
   ```

2. **Ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O projeto ficará disponível em `http://localhost:3000`.

3. **Build de produção:**
   ```bash
   npm run build
   npm start
   ```

## 7. Estrutura de Páginas

> Conforme escopo contratual, o projeto contempla 4 páginas principais, todas compartilhando o mesmo Header, Footer e sistema de scroll/animação descritos acima:

* **Home** (`/`)
* **Sobre** (`/sobrePage/`)
* **Planos** (`/planosPage/`)
* **Professores** (`/professoresPage/`)