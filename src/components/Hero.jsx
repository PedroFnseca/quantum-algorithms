import { Button } from "./ui/button";
import { ArrowRight, Atom } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-cyan-50 to-background dark:from-purple-950/30 dark:via-cyan-950/20 dark:to-background">
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 py-20 text-center md:py-32">
        <div className="flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-950/50 dark:to-cyan-950/50 px-4 py-2 backdrop-blur shadow-lg shadow-purple-500/20">
          <Atom className="h-4 w-4 text-purple-600 dark:text-purple-400 animate-spin" style={{ animationDuration: "3s" }} />
          <span className="text-sm font-medium bg-gradient-to-r from-purple-700 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Bem-vindo ao Futuro da Computação
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Desvende o Poder dos{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Algoritmos Quânticos
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Explore como a computação quântica está revolucionando a computação,
          desde a quebra de criptografia até a descoberta de novos medicamentos.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" onClick={scrollToContent} className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg shadow-purple-500/50">
            Começar a Explorar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" asChild className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/30">
            <a href="#algorithms">Ver Algoritmos</a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-500/20 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
      </div>
    </section>
  );
}
