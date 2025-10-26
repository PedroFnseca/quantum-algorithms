import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-purple-200/50 dark:border-purple-900/50 bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/10">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 shadow-lg shadow-purple-500/50 animate-gradient">
                <span className="text-xl font-bold text-white">Q</span>
              </div>
              <div>
                <h3 className="font-bold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Algoritmos Quânticos</h3>
                <p className="text-xs text-muted-foreground">
                  Explorando o Futuro da Computação
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Um guia educativo sobre os principais algoritmos quânticos e suas
              aplicações práticas no mundo real.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-purple-700 dark:text-purple-400">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#intro" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Introdução
                </a>
              </li>
              <li>
                <a href="#algorithms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Algoritmos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-cyan-700 dark:text-cyan-400">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/PedroFnseca/quantum-algorithms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-purple-200/50 dark:border-purple-900/50 pt-8 text-center text-sm text-muted-foreground">
          <p className="mt-2 text-xs">
            © {new Date().getFullYear()} Algoritmos Quânticos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
