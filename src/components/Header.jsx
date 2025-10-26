import { Button } from "./ui/button";
import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200/50 dark:border-purple-900/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm shadow-purple-500/10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 shadow-lg shadow-purple-500/50 animate-gradient">
            <span className="text-xl font-bold text-white">Q</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Algoritmos Quânticos
            </h1>
            <p className="text-xs text-muted-foreground">
              Explorando o Futuro da Computação
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hover:bg-purple-50 dark:hover:bg-purple-950/30">
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
