import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { QUANTUM_CONCEPTS } from "../constants/algorithms";

export function IntroSection() {
  return (
    <section id="intro" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="outline" className="mb-4">
          Fundamentos
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          O que são Algoritmos Quânticos?
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Algoritmos quânticos são projetados para rodar em{" "}
          <strong>computadores quânticos</strong>, aproveitando os princípios da
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
              className="border-2 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${concept.bgColor}`}
                >
                  <Icon className={`h-6 w-6 ${concept.color}`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{concept.title}</h3>
                <p className="text-muted-foreground">{concept.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
