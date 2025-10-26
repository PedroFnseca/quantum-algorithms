import { useNavigate } from "react-router-dom";
import { AlgorithmCard } from "./AlgorithmCard";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MAIN_ALGORITHMS, HYBRID_ALGORITHMS } from "../constants/algorithms";

export function AlgorithmsSection() {
  const navigate = useNavigate();

  const handleLearnMore = (algorithm) => {
    navigate(`/algorithm/${algorithm.id}`);
  };

  return (
    <section id="algorithms" className="bg-gradient-to-b from-muted/30 via-purple-50/20 to-cyan-50/20 dark:via-purple-950/10 dark:to-cyan-950/10 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 h-96 w-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-40 left-20 h-96 w-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300">
            Algoritmos
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Principais Algoritmos Quânticos
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça os algoritmos que estão moldando o futuro da computação
          </p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-950/50 dark:to-cyan-950/50 border border-purple-300 dark:border-purple-700">
            <TabsTrigger value="main" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              Algoritmos Principais
            </TabsTrigger>
            <TabsTrigger value="hybrid" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              Algoritmos Híbridos
            </TabsTrigger>
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
              <div className="mb-8 rounded-lg border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20 p-6 shadow-lg shadow-purple-500/20">
                <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
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
