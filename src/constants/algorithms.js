import { Key, Search, Atom, Zap, FlaskConical } from "lucide-react";

export const MAIN_ALGORITHMS = [
  {
    id: "shor",
    title: "Algoritmo de Shor",
    subtitle: "O Quebrador de Criptografia",
    category: "Criptografia",
    icon: Key,
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-950/30",
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
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-950/30",
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
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-950/30",
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
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-950/30",
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
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-950/30",
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
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-950/30",
  },
  {
    icon: FlaskConical,
    title: "Superposição",
    description:
      "Permite que um qubit represente 0 e 1 ao mesmo tempo, explorando múltiplas soluções paralelamente.",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-950/30",
  },
  {
    icon: Zap,
    title: "Emaranhamento",
    description:
      "Qubits interligados de forma complexa, onde o estado de um afeta instantaneamente o outro.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100 dark:bg-cyan-950/30",
  },
];
