import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import { QUANTUM_CONCEPTS } from "../constants/algorithms";

export function IntroSection() {
  return (
    <section id="intro" className="container py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl" />
      </div>

      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-400 text-purple-700 dark:text-purple-200 bg-white/90 dark:bg-purple-900/60 font-semibold shadow-lg">
          Fundamentos
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-[0_2px_20px_rgba(168,85,247,0.8)]">
          O que são Algoritmos Quânticos?
        </h2>
        <p className="mb-12 text-lg text-gray-100 dark:text-gray-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-medium">
          Algoritmos quânticos são projetados para rodar em{" "}
          <strong className="text-purple-200 dark:text-purple-200 font-bold">computadores quânticos</strong>, aproveitando os princípios da
          computação quântica para resolver problemas que são intratáveis para os
          computadores clássicos.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {QUANTUM_CONCEPTS.map((concept, index) => {
          const Icon = concept.icon;
          return (
            <AnimatedSection 
              key={concept.title}
              delay={index * 0.1}
              direction="up"
            >
              <Card
                className="border-2 transition-all hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 h-full"
              >
                <CardContent className="p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${concept.bgColor} shadow-lg transition-transform hover:scale-110`}
                  >
                    <Icon className={`h-6 w-6 ${concept.color}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{concept.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{concept.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
