# Notas do Projeto — Primeiro Passe

## Stack
Vite + React 19 + TypeScript + Tailwind CSS v4 (CSS-first config, sem
`tailwind.config.js` — tema definido em `src/index.css` via `@theme`).
Roteamento com `react-router-dom` (`BrowserRouter`), com `.htaccess` em
`public/.htaccess` (copiado para `dist/`) fazendo o fallback de SPA no
Apache (Hostinger/HostGator).

## Comandos
- `npm run dev` — servidor de desenvolvimento
- `npm run build` — `tsc -b && vite build`, gera `dist/`
- `npm run lint` — oxlint
- `npm run preview` — serve o build de produção localmente

## Estrutura de dados (edição por pessoas leigas)
- `src/data/athletes.ts` — cadastro de atletas (fonte única de verdade)
- `src/data/siteConfig.ts` — dados gerais da agência (WhatsApp, endereço, redes sociais)
- `public/atletas/` — pasta para fotos locais dos atletas

## Observações importantes
- `lucide-react` (versão atual instalada, 1.x) **não possui mais ícones de
  marca** (Instagram, YouTube, etc.) por questões de trademark. Ícones de
  marca customizados ficam em `src/components/BrandIcons.tsx`.
- Formulário de orçamento (`src/pages/Assessment.tsx`) não usa backend: monta
  a mensagem e abre link `wa.me` diretamente.
- Vídeos de atletas: campo `videoUrl` aceita link normal do YouTube
  (watch, youtu.be, shorts); convertido para embed via `src/lib/youtube.ts`.
