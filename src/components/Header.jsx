import { Button } from "./ui/button";
import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-400/30 bg-gradient-to-r from-[#1a052d]/85 via-[#0d021f]/80 to-[#140533]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0d021f]/70 shadow-lg shadow-purple-900/30">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-500 shadow-lg shadow-purple-500/50 animate-gradient">
            <span className="text-xl font-bold text-white">Q</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Algoritmos Quânticos
            </h1>
            <p className="text-xs text-gray-200 drop-shadow-md">
              Explorando o Futuro da Computação
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-gray-200 hover:text-white hover:bg-purple-500/20 transition-colors"
          >
            <a
              href="https://github.com/PedroFnseca/quantum-algorithms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
