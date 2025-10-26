import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-purple-200/50 dark:border-purple-900/50 bg-transparent">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-500 shadow-lg shadow-purple-500/50 animate-gradient">
                <span className="text-xl font-bold text-white">Q</span>
              </div>
              <div>
                <h3 className="font-bold text-white drop-shadow-[0_2px_10px_rgba(168,85,247,0.6)]">Algoritmos Quânticos</h3>
                <p className="text-xs text-gray-200 dark:text-gray-200 drop-shadow-md">
                  Explorando o Futuro da Computação
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-100 dark:text-gray-100 max-w-md drop-shadow-md">
              Um guia educativo sobre os principais algoritmos quânticos e suas
              aplicações práticas no mundo real.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-purple-200 dark:text-purple-200 drop-shadow-md">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-200 dark:text-gray-200">
              <li>
                <a href="#intro" className="hover:text-purple-300 dark:hover:text-purple-300 transition-colors drop-shadow-md">
                  Introdução
                </a>
              </li>
              <li>
                <a href="#algorithms" className="hover:text-purple-300 dark:hover:text-purple-300 transition-colors drop-shadow-md">
                  Algoritmos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-cyan-200 dark:text-cyan-200 drop-shadow-md">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-200 dark:text-gray-200">
              <li>
                <a
                  href="https://github.com/PedroFnseca/quantum-algorithms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1 drop-shadow-md"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-purple-200/50 dark:border-purple-900/50 pt-8 text-center text-sm text-gray-200 dark:text-gray-200">
          <p className="mt-2 text-xs drop-shadow-md">
            © {new Date().getFullYear()} Algoritmos Quânticos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
