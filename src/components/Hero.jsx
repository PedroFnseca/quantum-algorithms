import { Button } from "./ui/button";
import { ArrowRight, Atom } from "lucide-react";
import { QuantumGraphBackground } from "./QuantumGraphBackground";
import { FloatingParticles } from "./FloatingParticles";
// eslint-disable-next-line
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <QuantumGraphBackground />
      
      <FloatingParticles />

      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 py-20 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 rounded-full border border-purple-200/50 dark:border-purple-800/50 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-4 py-2 backdrop-blur-xl shadow-lg shadow-purple-500/30"
        >
          <Atom className="h-4 w-4 text-purple-400 animate-spin" style={{ animationDuration: "3s" }} />
          <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Bem-vindo ao Futuro da Computação
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Desvende o Poder dos{" "}
          <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Algoritmos Quânticos
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg text-gray-100 md:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-medium"
        >
          Explore como a computação quântica está revolucionando a computação,
          desde a quebra de criptografia até a descoberta de novos medicamentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button 
            size="lg" 
            onClick={scrollToContent} 
            className="group bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 border-0"
          >
            Começar a Explorar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:text-white backdrop-blur-xl bg-purple-950/30 shadow-xl"
          >
            <a href="#algorithms">Ver Algoritmos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
