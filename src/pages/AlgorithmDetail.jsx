import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, Lightbulb, Cpu, Code } from "lucide-react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PageTransition } from "../components/PageTransition";
import { AnimatedSection } from "../components/AnimatedSection";
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
      <PageTransition>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_15px_rgba(168,85,247,0.6)]">Algoritmo não encontrado</h1>
          <Button 
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 border-0"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Button>
        </div>
      </PageTransition>
    );
  }

  const Icon = algorithm.icon;

  return (
    <PageTransition>
      <div className="min-h-screen py-12">
        <div className="container max-w-5xl">
          <AnimatedSection direction="left">
            <Button
              variant="ghost"
              className="mb-8 text-white hover:bg-purple-500/20 hover:text-purple-200 border border-purple-400/50 backdrop-blur-sm"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div 
              className={`rounded-2xl ${algorithm.bgColor} p-8 mb-8 shadow-lg`}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className={`p-4 rounded-xl bg-white/50 dark:bg-black/20 ${algorithm.color}`}
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="h-12 w-12" />
                </motion.div>
                <div className="flex-1">
                  <Badge className="mb-3" variant={algorithm.badgeVariant || "default"}>
                    {algorithm.category}
                  </Badge>
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
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
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  Como Funciona
                </CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {algorithm.description || "Esta seção conterá uma explicação detalhada de como o algoritmo funciona, incluindo os princípios quânticos envolvidos e o passo a passo do processo."}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
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
                    <motion.li 
                      key={index} 
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-cyan-600 dark:text-cyan-400 mt-1">✦</span>
                      <span className="text-lg">{impact}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card className="mb-8 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cpu className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" />
                  Exemplos Práticos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {algorithm.examples.map((example, index) => (
                    <motion.div 
                      key={index} 
                      className="p-4 rounded-lg bg-muted/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-lg">{example}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <Card className="mb-8 border-2 border-violet-200 dark:border-violet-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  Exemplo de Implementação
                </CardTitle>
              </CardHeader>
              <CardContent>
                {algorithm.codeExample ? (
                  <>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <SyntaxHighlighter
                        language="python"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                        }}
                        showLineNumbers={true}
                      >
                        {algorithm.codeExample}
                      </SyntaxHighlighter>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Este é um exemplo funcional de implementação usando Qiskit. 
                      Você pode executá-lo em um ambiente Python com Qiskit instalado.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <SyntaxHighlighter
                        language="python"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                        }}
                        showLineNumbers={true}
                      >
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
                      </SyntaxHighlighter>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Em breve, exemplos de código comentados e explicados passo a passo.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Card className="border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-2xl">Recursos Adicionais</CardTitle>
              </CardHeader>
              <CardContent>
                {algorithm.resources ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground mb-4">
                      Links para artigos científicos, vídeos explicativos, tutoriais
                      interativos e documentação oficial.
                    </p>
                    {algorithm.resources.map((resource, index) => (
                      <motion.a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 rounded-lg border-2 border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all bg-gradient-to-r from-purple-50/50 to-transparent dark:from-purple-950/20 dark:to-transparent"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <h3 className="font-semibold text-lg mb-1 text-purple-700 dark:text-purple-300">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </motion.a>
                    ))}
                  </div>
                ) : (
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
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
