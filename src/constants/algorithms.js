import { Key, Search, Atom, Zap, FlaskConical } from "lucide-react";

export const MAIN_ALGORITHMS = [
  {
    id: "shor",
    title: "Algoritmo de Shor",
    subtitle: "O Quebrador de Criptografia",
    category: "Criptografia",
    icon: Key,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-950/40 dark:to-rose-950/40",
    badgeVariant: "destructive",
    function:
      "Fatorar números inteiros muito grandes em seus fatores primos (ex: 15 → 3 × 5)",
    impacts: [
      "Ameaça à segurança da criptografia RSA usada em toda a internet",
      "Um supercomputador levaria bilhões de anos; Shor faria em horas/dias",
      "Impulsionou o desenvolvimento de criptografia pós-quântica",
    ],
    examples: [
      "Transações bancárias e senhas dependem da dificuldade de fatoração",
      "Novos métodos de criptografia seguros contra ataques quânticos",
    ],
  },
  {
    id: "grover",
    title: "Algoritmo de Grover",
    subtitle: "A Super-Busca",
    category: "Busca",
    icon: Search,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950/40 dark:to-blue-950/40",
    badgeVariant: "default",
    function:
      "Encontrar um item em uma lista desordenada em √N passos (vs N/2 clássico)",
    impacts: [
      "Aceleração quadrática para buscas em bancos de dados não estruturados",
      "Otimiza problemas complexos como o Caixeiro Viajante",
      "Melhora significativa em algoritmos de IA e Machine Learning",
    ],
    examples: [
      "Otimização de rotas entre múltiplas cidades",
      "Aceleração de buscas em espaços de estados para ML",
      "Verificação de circuitos eletrônicos para encontrar falhas",
    ],
  },
  {
    id: "simulation",
    title: "Simulação Quântica",
    subtitle: "Imitando a Natureza",
    category: "Simulação",
    icon: Atom,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-950/40 dark:to-violet-950/40",
    function:
      "Modelar o comportamento de moléculas e materiais em nível atômico com altíssima precisão",
    impacts: [
      "Aplicação mais promissora de curto prazo",
      "Revoluciona o desenvolvimento de novos materiais e medicamentos",
      "Impossível de simular eficientemente em computadores clássicos",
    ],
    examples: [
      "Desenvolvimento de novos fármacos e vacinas",
      "Design de supercondutores em temperatura ambiente",
      "Criação de fertilizantes sustentáveis com fixação de nitrogênio",
    ],
  },
];

export const HYBRID_ALGORITHMS = [
  {
    id: "vqe",
    title: "VQE",
    subtitle: "Variational Quantum Eigensolver",
    category: "Era NISQ",
    icon: FlaskConical,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-950/40 dark:to-green-950/40",
    function: "Encontra a energia mínima de uma molécula (estado fundamental)",
    impacts: [
      "Algoritmo híbrido quântico-clássico",
      "Funciona em computadores quânticos atuais (NISQ)",
      "Usado por empresas químicas como a Dow",
    ],
    examples: [
      "Cálculo de propriedades de novas moléculas",
      "Design de produtos químicos mais eficientes",
    ],
  },
  {
    id: "qaoa",
    title: "QAOA",
    subtitle: "Quantum Approximate Optimization",
    category: "Era NISQ",
    icon: Zap,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40",
    function: "Encontra soluções aproximadas para problemas de otimização complexos",
    impacts: [
      "Algoritmo híbrido para otimização combinatória",
      "Aplicável em computadores quânticos atuais",
      "Adotado por empresas como Volkswagen",
    ],
    examples: [
      "Otimização de portfólios financeiros",
      "Resolução de problemas de logística e fluxo de tráfego",
    ],
  },
];

export const QUANTUM_CONCEPTS = [
  {
    icon: Atom,
    title: "Qubits",
    description:
      "Diferente dos bits clássicos (0 ou 1), os qubits podem existir em múltiplos estados simultaneamente.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-950/40 dark:to-fuchsia-950/40",
  },
  {
    icon: FlaskConical,
    title: "Superposição",
    description:
      "Permite que um qubit represente 0 e 1 ao mesmo tempo, explorando múltiplas soluções paralelamente.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-950/40",
  },
  {
    icon: Zap,
    title: "Emaranhamento",
    description:
      "Qubits interligados de forma complexa, onde o estado de um afeta instantaneamente o outro.",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-950/40 dark:to-teal-950/40",
  },
];
