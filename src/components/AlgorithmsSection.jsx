import { AlgorithmCard } from "./AlgorithmCard";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MAIN_ALGORITHMS, HYBRID_ALGORITHMS } from "../constants/algorithms";

export function AlgorithmsSection() {
  const handleLearnMore = (algorithm) => {
    console.log("Learn more about:", algorithm);
    // Future: Open modal or navigate to detail page
  };

  return (
    <section id="algorithms" className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Algoritmos
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Principais Algoritmos Quânticos
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça os algoritmos que estão moldando o futuro da computação
          </p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="main">Algoritmos Principais</TabsTrigger>
            <TabsTrigger value="hybrid">Algoritmos Híbridos</TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {MAIN_ALGORITHMS.map((algorithm) => (
                <AlgorithmCard
                  key={algorithm.id}
                  algorithm={algorithm}
                  onLearnMore={handleLearnMore}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hybrid" className="mt-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  Era NISQ - Computadores Quânticos Ruidosos de Escala Intermediária
                </h3>
                <p className="text-muted-foreground">
                  Na era atual, algoritmos híbridos que combinam processadores
                  quânticos e clássicos são fundamentais para obter resultados
                  práticos com a tecnologia disponível hoje.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {HYBRID_ALGORITHMS.map((algorithm) => (
                  <AlgorithmCard
                    key={algorithm.id}
                    algorithm={algorithm}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
