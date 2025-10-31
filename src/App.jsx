import { useEffect, useMemo, useState } from 'react';

const featureChips = [
  { label: 'Gerar Ideia de Negócio', gradient: 'from-sky-400/30 via-indigo-500/20 to-purple-500/30' },
  { label: 'Validar Nicho', gradient: 'from-violet-500/25 via-blue-500/20 to-cyan-400/25' },
  { label: 'Pesquisa de Mercado', gradient: 'from-amber-400/30 via-fuchsia-500/20 to-purple-500/30' },
  { label: 'Criar Oferta e Produto', gradient: 'from-emerald-400/25 via-sky-500/20 to-indigo-500/25' },
  { label: 'Gerar Landing Page', gradient: 'from-rose-400/25 via-violet-500/20 to-blue-400/25' },
  { label: 'Vender com a Orion', gradient: 'from-blue-500/25 via-purple-500/20 to-indigo-500/25' },
];

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 14.79 9.05 9.05 0 0121 12.79z"
    />
  </svg>
);

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.06-1.06M7.697 7.697 6.636 6.636m10.728 0-1.06 1.06M7.697 16.303l-1.06 1.06M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
    />
  </svg>
);

const paperPlaneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.94 2.94a1.5 1.5 0 011.63-.33l12 5a1.5 1.5 0 010 2.78l-12 5A1.5 1.5 0 012 14.06V11l7-1-7-1V3.94c0-.4.16-.78.44-1.06z" />
  </svg>
);

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/30 text-slate-800 shadow-orion-light backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orion dark:border-white/10 dark:bg-white/10 dark:text-white"
    aria-label="Alternar tema"
    type="button"
  >
    {theme === 'dark' ? sunIcon : moonIcon}
  </button>
);

function App() {
  const prefersDark = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'dark' || stored === 'light') return stored;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-orion-light px-6 py-10 text-slate-900 transition-colors duration-500 dark:bg-orion-dark dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 blur-3xl dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-blue-500/5" />

      <div className="flex w-full max-w-6xl flex-col gap-12 rounded-3xl border border-white/30 bg-white/50 p-8 shadow-orion-light backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-orion lg:p-14">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 font-semibold uppercase tracking-widest text-white shadow-lg">
              OI
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                Orion IA
              </span>
              <span className="text-base font-semibold text-slate-700 dark:text-slate-100">
                Todo mundo cria. Todo mundo pode.
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
            <nav className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-200">
              <a
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-300 hover:bg-white/60 hover:text-slate-900 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
                href="#precos"
              >
                Preços
              </a>
              <a
                className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                href="#entrar"
              >
                Entrar
              </a>
            </nav>
            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            />
          </div>
        </header>

        <main className="flex flex-col items-center justify-center gap-10 text-center">
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-snug dark:text-white">
            Olá eu sou a Orion, uma IA criada para transformar ideias em negócios digitais reais.
          </h1>

          <div className="flex w-full max-w-3xl flex-col gap-4">
            <div className="flex w-full flex-col gap-3 rounded-3xl border border-white/40 bg-white/70 p-4 shadow-xl backdrop-blur-lg transition-all duration-300 focus-within:-translate-y-0.5 focus-within:shadow-orion dark:border-white/10 dark:bg-white/5 dark:shadow-orion">
              <label htmlFor="search" className="text-left text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-300">
                Acesse a Orion
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="search"
                  type="text"
                  placeholder="Vamos criar o seu negócio digital?"
                  className="w-full rounded-2xl border border-transparent bg-white/90 px-5 py-3 text-base text-slate-700 shadow-inner transition focus:border-orion-blue focus:outline-none focus:ring-4 focus:ring-orion-blue/20 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
                />
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
                >
                  {paperPlaneIcon}
                  Enviar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featureChips.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br ${feature.gradient} p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10`}
                >
                  <span className="relative z-10 text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-slate-900 dark:text-white dark:group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="relative z-10 mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.label}
                  </p>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="rounded-full border border-transparent bg-gradient-to-r from-slate-900 via-indigo-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:from-sky-500 dark:via-indigo-500 dark:to-purple-500"
              >
                Ver todas as ferramentas
              </button>
            </div>
          </div>
        </main>
      </div>

      <button
        type="button"
        className="fixed bottom-6 right-6 flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-[1.03] hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.7)]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
          {paperPlaneIcon}
        </span>
        Falar com a Orion
      </button>

      <footer className="mt-12 max-w-4xl text-center text-xs text-slate-500 dark:text-slate-300">
        Ao enviar uma mensagem, você concorda com nossos Termos de Uso e Política de Privacidade.
      </footer>
    </div>
  );
}

export default App;
