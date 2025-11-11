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
    description: "O Algoritmo de Shor é um algoritmo quântico que pode fatorar números inteiros em tempo polinomial. Ele utiliza a Transformada de Fourier Quântica (QFT) para encontrar o período de uma função, que é a chave para fatorar números grandes. O algoritmo combina computação quântica e clássica: a parte quântica encontra o período, e a parte clássica usa esse período para determinar os fatores.",
    impacts: [
      "Ameaça à segurança da criptografia RSA usada em toda a internet",
      "Um supercomputador levaria bilhões de anos; Shor faria em horas/dias",
      "Impulsionou o desenvolvimento de criptografia pós-quântica",
    ],
    examples: [
      "Transações bancárias e senhas dependem da dificuldade de fatoração",
      "Novos métodos de criptografia seguros contra ataques quânticos",
    ],
    codeExample: ``,
    resources: [
      {
        title: "Paper Original",
        description: "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
        url: "https://arxiv.org/abs/quant-ph/9508027"
      },
      {
        title: "Tutorial Qiskit",
        description: "Implementação do Algoritmo de Shor no Qiskit",
        url: "https://qiskit.org/textbook/ch-algorithms/shor.html"
      },
      {
        title: "Vídeo Explicativo",
        description: "Como o Algoritmo de Shor Funciona - MinutePhysics",
        url: "https://www.youtube.com/watch?v=lvTqbM5Dq4Q"
      },
      {
        title: "Documentação IBM Quantum",
        description: "Guia completo sobre fatoração quântica",
        url: "https://quantum-computing.ibm.com/"
      }
    ]
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
    description: "O Algoritmo de Grover é um algoritmo de busca quântica que oferece uma aceleração quadrática em relação aos algoritmos clássicos. Ele usa uma técnica chamada 'amplificação de amplitude' para aumentar a probabilidade de medir o estado correto. O algoritmo aplica repetidamente o operador de Grover, que consiste em um oráculo e um operador de difusão, até que a amplitude do estado desejado seja maximizada.",
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
    codeExample: ``,
    resources: [
      {
        title: "Paper Original",
        description: "A fast quantum mechanical algorithm for database search",
        url: "https://arxiv.org/abs/quant-ph/9605043"
      },
      {
        title: "Tutorial Qiskit",
        description: "Implementação do Algoritmo de Grover",
        url: "https://qiskit.org/textbook/ch-algorithms/grover.html"
      },
      {
        title: "Simulação Interativa",
        description: "Visualize o Algoritmo de Grover em ação",
        url: "https://quantum-computing.ibm.com/composer/"
      },
      {
        title: "Vídeo Explicativo",
        description: "Grover's Algorithm Explained - Qiskit",
        url: "https://www.youtube.com/watch?v=0RPFWZj7Jm0"
      }
    ]
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
    description: "A Simulação Quântica usa computadores quânticos para modelar sistemas quânticos naturais, como moléculas e materiais. Como Richard Feynman propôs, 'a natureza é quântica, então para simulá-la precisamos de um computador quântico'. Estas simulações permitem calcular propriedades moleculares, estados de energia e reações químicas com precisão impossível para computadores clássicos.",
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
    codeExample: ``,
    resources: [
      {
        title: "Paper Fundamental",
        description: "Simulating Physics with Computers - Richard Feynman",
        url: "https://link.springer.com/article/10.1007/BF02650179"
      },
      {
        title: "Qiskit Nature",
        description: "Framework para simulações de química e materiais",
        url: "https://qiskit.org/ecosystem/nature/"
      },
      {
        title: "Tutorial Completo",
        description: "Quantum Chemistry Simulation with Qiskit",
        url: "https://qiskit.org/textbook/ch-applications/quantum-chemistry.html"
      },
      {
        title: "Artigo IBM Research",
        description: "Quantum Computing for Chemistry Applications",
        url: "https://research.ibm.com/blog/quantum-simulation-chemistry"
      }
    ]
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
    description: "O VQE é um algoritmo híbrido variacional que combina um processador quântico para preparar estados quânticos e um otimizador clássico para minimizar a energia. Ele é projetado para hardware NISQ (Noisy Intermediate-Scale Quantum), sendo tolerante a ruído e requerendo circuitos quânticos mais curtos. O algoritmo itera entre preparar um estado quântico parametrizado e otimizar esses parâmetros classicamente.",
    impacts: [
      "Algoritmo híbrido quântico-clássico",
      "Funciona em computadores quânticos atuais (NISQ)",
      "Usado por empresas químicas como a Dow",
    ],
    examples: [
      "Cálculo de propriedades de novas moléculas",
      "Design de produtos químicos mais eficientes",
    ],
    codeExample: ``,
    resources: [
      {
        title: "Paper Original",
        description: "A variational eigenvalue solver on a photonic quantum processor",
        url: "https://arxiv.org/abs/1304.3061"
      },
      {
        title: "Tutorial Qiskit",
        description: "VQE Tutorial - Qiskit Textbook",
        url: "https://qiskit.org/textbook/ch-applications/vqe-molecules.html"
      },
      {
        title: "Case Study",
        description: "How Dow Chemical Uses VQE for Materials Science",
        url: "https://www.ibm.com/quantum/resources"
      },
      {
        title: "Documentação",
        description: "Qiskit Algorithms - VQE Implementation",
        url: "https://qiskit.org/documentation/stubs/qiskit.algorithms.VQE.html"
      }
    ]
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
    description: "O QAOA é um algoritmo híbrido desenvolvido para resolver problemas de otimização combinatória. Ele alterna entre aplicar um Hamiltoniano de problema (que codifica o problema de otimização) e um Hamiltoniano misturador, com parâmetros ajustados por um otimizador clássico. É especialmente eficaz para problemas NP-difíceis como MaxCut, onde encontrar a solução ótima é computacionalmente intratável.",
    impacts: [
      "Algoritmo híbrido para otimização combinatória",
      "Aplicável em computadores quânticos atuais",
      "Adotado por empresas como Volkswagen",
    ],
    examples: [
      "Otimização de portfólios financeiros",
      "Resolução de problemas de logística e fluxo de tráfego",
    ],
    codeExample: ``,
    resources: [
      {
        title: "Paper Original",
        description: "A Quantum Approximate Optimization Algorithm",
        url: "https://arxiv.org/abs/1411.4028"
      },
      {
        title: "Tutorial Qiskit",
        description: "QAOA for MaxCut Problem",
        url: "https://qiskit.org/textbook/ch-applications/qaoa.html"
      },
      {
        title: "Case Study Volkswagen",
        description: "Traffic Flow Optimization with QAOA",
        url: "https://www.volkswagen-newsroom.com/en/press-releases/quantum-computing"
      },
      {
        title: "Guia Prático",
        description: "Solving Optimization Problems with QAOA",
        url: "https://qiskit.org/documentation/optimization/"
      }
    ]
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
