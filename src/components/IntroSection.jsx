import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { QUANTUM_CONCEPTS } from "../constants/algorithms";

export function IntroSection() {
  return (
    <section id="intro" className="container py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300">
          Fundamentos
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
          O que são Algoritmos Quânticos?
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Algoritmos quânticos são projetados para rodar em{" "}
          <strong className="text-purple-600 dark:text-purple-400">computadores quânticos</strong>, aproveitando os princípios da
          computação quântica para resolver problemas que são intratáveis para os
          computadores clássicos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {QUANTUM_CONCEPTS.map((concept) => {
          const Icon = concept.icon;
          return (
            <Card
              key={concept.title}
              className="border-2 transition-all hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-700"
            >
              <CardContent className="p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${concept.bgColor} shadow-lg transition-transform hover:scale-110`}
                >
                  <Icon className={`h-6 w-6 ${concept.color}`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">{concept.title}</h3>
                <p className="text-muted-foreground">{concept.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
