import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, Lightbulb, Cpu, Code } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MAIN_ALGORITHMS, HYBRID_ALGORITHMS } from "../constants/algorithms";

export function AlgorithmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [algorithm, setAlgorithm] = useState(null);

  useEffect(() => {
    const allAlgorithms = [...MAIN_ALGORITHMS, ...HYBRID_ALGORITHMS];
    const found = allAlgorithms.find((alg) => alg.id === id);
    setAlgorithm(found);

    window.scrollTo(0, 0);
  }, [id]);

  if (!algorithm) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Algoritmo não encontrado</h1>
        <Button onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Home
        </Button>
      </div>
    );
  }

  const Icon = algorithm.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 via-purple-50/20 to-cyan-50/20 dark:via-purple-950/10 dark:to-cyan-950/10 py-12">
      <div className="container max-w-5xl">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Home
        </Button>

        <div className={`rounded-2xl ${algorithm.bgColor} p-8 mb-8 shadow-lg`}>
          <div className="flex items-start gap-6">
            <div className={`p-4 rounded-xl bg-white/50 dark:bg-black/20 ${algorithm.color}`}>
              <Icon className="h-12 w-12" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3" variant={algorithm.badgeVariant || "default"}>
                {algorithm.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {algorithm.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {algorithm.subtitle}
              </p>
              <p className="text-lg">
                {algorithm.function}
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              Como Funciona
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg">
              Esta seção conterá uma explicação detalhada de como o algoritmo funciona,
              incluindo os princípios quânticos envolvidos e o passo a passo do processo.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Lightbulb className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              Impactos e Aplicações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {algorithm.impacts.map((impact, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-1">✦</span>
                  <span className="text-lg">{impact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 border-pink-200 dark:border-pink-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Cpu className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              Exemplos Práticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {algorithm.examples.map((example, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50">
                  <p className="text-lg">{example}</p>
                </div>
              ))}
              <div className="mt-6 p-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-300 dark:border-purple-700">
                <p className="text-muted-foreground">
                  Esta seção conterá exemplos mais detalhados, possivelmente com
                  visualizações, diagramas ou simulações interativas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              Exemplo de Implementação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 text-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>
{`# TODO: Adicionar exemplo de código
# Este será um exemplo de implementação usando Qiskit ou similar

# Exemplo placeholder:
from qiskit import QuantumCircuit

# Criar circuito quântico
qc = QuantumCircuit(2)

# Adicionar operações
# ...

# Executar
# ...`}
              </pre>
            </div>
            <p className="text-muted-foreground mt-4">
              Em breve, exemplos de código comentados e explicados passo a passo.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="text-2xl">Recursos Adicionais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Links para artigos científicos, vídeos explicativos, tutoriais
                interativos e documentação oficial.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Paper original</li>
                <li>• Tutoriais interativos</li>
                <li>• Vídeos explicativos</li>
                <li>• Documentação Qiskit</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
