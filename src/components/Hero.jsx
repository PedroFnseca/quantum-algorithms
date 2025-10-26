import { Button } from "./ui/button";
import { ArrowRight, Atom } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20">
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 py-20 text-center md:py-32">
        <div className="flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur">
          <Atom className="h-4 w-4 text-purple-600 animate-spin" style={{ animationDuration: "3s" }} />
          <span className="text-sm font-medium">
            Bem-vindo ao Futuro da Computação
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Desvende o Poder dos{" "}
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Algoritmos Quânticos
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Explore como a computação quântica está revolucionando a computação,
          desde a quebra de criptografia até a descoberta de novos medicamentos.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" onClick={scrollToContent} className="group">
            Começar a Explorar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#algorithms">Ver Algoritmos</a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </section>
  );
}
