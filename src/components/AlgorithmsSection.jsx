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
    <section id="algorithms" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 h-96 w-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-40 left-20 h-96 w-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="outline" className="mb-4 border-purple-300 dark:border-purple-400 text-purple-700 dark:text-purple-200 bg-white/90 dark:bg-purple-900/60 font-semibold shadow-lg">
            Algoritmos
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-[0_2px_20px_rgba(168,85,247,0.8)]">
            Principais Algoritmos Quânticos
          </h2>
          <p className="text-lg text-gray-100 dark:text-gray-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-medium">
            Conheça os algoritmos que estão moldando o futuro da computação
          </p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-950/50 dark:to-cyan-950/50 border border-purple-300 dark:border-purple-700">
            <TabsTrigger value="main" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-fuchsia-600 data-[state=active]:text-white">
              Algoritmos Principais
            </TabsTrigger>
            <TabsTrigger value="hybrid" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
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
              <div className="mb-8 rounded-lg border-2 border-purple-400 dark:border-purple-500 bg-white/10 dark:bg-purple-900/40 backdrop-blur-sm p-6 shadow-lg shadow-purple-500/30">
                <h3 className="mb-2 text-xl font-bold text-white drop-shadow-[0_2px_15px_rgba(168,85,247,0.6)]">
                  Era NISQ - Computadores Quânticos Ruidosos de Escala Intermediária
                </h3>
                <p className="text-gray-100 dark:text-gray-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-medium">
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
