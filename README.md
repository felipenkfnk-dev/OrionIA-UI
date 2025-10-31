# Orion IA UI

Interface moderna do assistente Orion IA construída com **React**, **Vite** e **TailwindCSS**. O layout apresenta modo claro/escuro com alternância manual, hero centralizado, chips de funcionalidades e botão flutuante de chat.

## Pré-requisitos

- Node.js 18+
- npm 9+ ou pnpm/yarn compatíveis

## Instalação

```bash
npm install
```

> Caso o registro padrão do npm esteja bloqueado, configure o espelho corporativo antes de instalar as dependências.

## Scripts disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento (http://localhost:5173)
npm run build    # Cria o bundle de produção
npm run preview  # Pré-visualiza o build gerado
```

## Estrutura principal

- `src/App.jsx`: layout e lógica da página principal, incluindo alternância de tema.
- `src/index.css`: diretivas Tailwind e estilos globais.
- `tailwind.config.js`: personalizações de tema e gradientes.

## Licença

Projeto disponibilizado para fins de demonstração interna da Orion IA.
