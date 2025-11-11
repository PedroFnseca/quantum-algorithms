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
    codeExample: `#O algoritmo de Shor foi removido das versões mais modernas do Qiskit
#Essa é uma implementação original, nas versões abaixo da 1.0
from qiskit.algorithms import Shor
from qiskit import Aer
from qiskit.utils import QuantumInstance

N = 15
backend = Aer.get_backend('aer_simulator')
qi = QuantumInstance(backend)

shor = Shor(quantum_instance=qi)
result = shor.factor(N)

print(result)`,
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
    codeExample: `    import qiskit
    from qiskit import QuantumCircuit, transpile
    from qiskit_aer import AerSimulator
    from qiskit.visualization import plot_histogram
    import numpy as np

    # --- 1. Definir o Oráculo ---
    # (Isto permanece igual)
    oracle = QuantumCircuit(2, name='Oráculo')
    oracle.cz(0, 1)  # Porta Controlled-Z entre o qubit 0 e o qubit 1
    oracle_gate = oracle.to_gate() # Converte o circuito em uma porta reutilizável

    # --- 2. Definir o Difusor (Amplificação) ---
    # Esta é a versão simplificada e correta para 2 qubits (N=4)
    # (H-X-CZ-X-H)
    def diffuser(n_qubits):
        qc = QuantumCircuit(n_qubits, name='Difusor')
        
        # 1. Aplicar portas H a todos os qubits
        qc.h(range(n_qubits))
        
        # 2. Aplicar portas X a todos os qubits
        qc.x(range(n_qubits))
        
        # 3. Aplicar uma porta Controlled-Z
        qc.cz(0, 1) # Substitui o bloco H-mct-H
        
        # 4. Aplicar portas X a todos os qubits
        qc.x(range(n_qubits))
        
        # 5. Aplicar portas H a todos os qubits
        qc.h(range(n_qubits))
        
        return qc.to_gate()
    # --- 3. Construir o Circuito Principal ---
    n = 2  # Número de qubits
    grover_circuit = QuantumCircuit(n)

    # Iniciar com uma superposição uniforme (portas H)
    grover_circuit.h(range(n))
    grover_circuit.barrier() # Apenas para visualização

    # Aplicar o Oráculo e o Difusor (1 iteração é ideal para n=2)
    grover_circuit.append(oracle_gate, [0, 1])
    grover_circuit.append(diffuser(n), range(n))
    grover_circuit.barrier()

    # Medir os resultados
    grover_circuit.measure_all()

    print("--- Circuito de Grover (para N=4, buscando |11>) ---")
    print(grover_circuit)

    # --- 4. Executar o Simulador ---
    simulator = AerSimulator()
    compiled_circuit = transpile(grover_circuit, simulator)
    result = simulator.run(compiled_circuit).result()
    counts = result.get_counts()

    # Exibir os resultados
    print("\\n--- Resultados da Simulação ---")
    print(counts)
    plot_histogram(counts)`,
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
    codeExample: `from qiskit.primitives import Estimator
from qiskit_algorithms import VQE
from qiskit_algorithms.optimizers import SLSQP

from qiskit_nature.second_q.drivers import PySCFDriver, ElectronicStructureDriverType
from qiskit_nature.second_q.transformers import ActiveSpaceTransformer
from qiskit_nature.second_q.mappers import ParityMapper
from qiskit_nature.second_q.mappers import QubitConverter
from qiskit_nature.second_q.circuit.library import UCCSD
from qiskit_nature.second_q.algorithms import GroundStateEigensolver
from qiskit_nature.second_q.problems import ElectronicStructureProblem

# --- 1) Definir a molécula (H2) ---
driver = PySCFDriver(
    atom="H 0 0 0; H 0 0 0.735",  # distância ~0.735 Å
    basis="sto3g",
    driver_type=ElectronicStructureDriverType.PYSCF
)

# --- 2) Construir o problema eletrônico ---
es_problem: ElectronicStructureProblem = driver.run()

# --- 3) Reduzir espaço ativo para eficiência ---
active_transformer = ActiveSpaceTransformer(num_electrons=2, num_molecular_orbitals=2)
es_problem = active_transformer.transform(es_problem)

# --- 4) Mapear para qubits com otimização (Parity + two-qubit reduction) ---
mapper = ParityMapper()
qubit_converter = QubitConverter(mapper, two_qubit_reduction=True)

# --- 5) Extrair parâmetros para construir o UCCSD ansatz ---
num_spin_orbitals = es_problem.num_spin_orbitals
num_particles = es_problem.num_particles

# --- 6) Construir o Ansatz UCCSD (circuito) ---
ansatz = UCCSD(
    num_spin_orbitals=num_spin_orbitals,
    num_particles=num_particles,
    qubit_converter=qubit_converter,
    reps=1,
    preserve_spin=True
)

# --- 7) Montar o VQE híbrido ---
estimator = Estimator()
optimizer = SLSQP(maxiter=200)

vqe = VQE(estimator=estimator, ansatz=ansatz, optimizer=optimizer)

# --- 8) GroundStateEigensolver ---
solver = GroundStateEigensolver(qubit_converter, vqe)

# --- 9) Rodar ---
print("Rodando VQE (UCCSD) com ParityMapper + two-qubit reduction + ActiveSpace...")
result = solver.solve(es_problem)

# --- 10) Mostrar resultados ---
energy = None
if hasattr(result, "total_energies"):
    energy = result.total_energies[0]
elif hasattr(result, "computed_energies"):
    energy = result.computed_energies[0]

print(f"Energia fundamental (Hartree): {energy:.6f}")
print(f"Energia de referência (exata): -1.137306 Hartrees") # Para 0.735A/sto3g`,
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
    codeExample: `import numpy as np
from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

# --- O QUE ESTA SIMULAÇÃO FAZ ---
# Este código simula a "Evolução Temporal" de um sistema quântico simples.
#
# 1. PREPARAÇÃO: Começamos com um sistema de 2 qubits no estado inicial |01>.
# 2. SIMULAÇÃO: Aplicamos uma "interação" (um Hamiltoniano H = X⊗X) por um
#    período de tempo (t = pi/2).
# 3. RESULTADO: Esta interação específica faz com que o estado |01>
#    "evolua" para o estado |10>.
#
# Em essência, estamos usando o Qiskit para calcular como um estado
# quântico muda ao longo do tempo, exatamente como a física quântica prevê.
# ---

# --- 1. Definir os parâmetros da simulação ---

# Vamos simular por um tempo t = pi/2
# A porta que simula H = X⊗X é a RXXGate, que usa um ângulo theta = 2*t
time_t = np.pi / 2
theta = 2 * time_t

# --- 2. Construir o Circuito ---
qc = QuantumCircuit(2)

# Estado inicial: |01>
# (No Qiskit, o qubit 0 é o da direita, então q1=0, q0=1)
qc.x(0)  # Inicia q0 como 1
qc.barrier()

# --- 3. A "Simulação" (Evolução Temporal) ---
# Aplicamos a evolução H = X⊗X por tempo 't'
# A porta qc.rxx(theta, 0, 1) faz exatamente isso.
qc.rxx(theta, 0, 1)
qc.barrier()

# --- 4. Medição ---
# Medimos o resultado final
qc.measure_all()

print("--- Circuito de Simulação (Evolução de |01> para |10>) ---")
print(qc)

# --- 5. Executar o Simulador ---
simulator = AerSimulator()
compiled_circuit = transpile(qc, simulator)
result = simulator.run(compiled_circuit, shots=1024).result()
counts = result.get_counts()

# Exibir os resultados
print("\n--- Resultados da Simulação ---")
print(counts)
plot_histogram(counts)`,
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
        title: "The Quantum Algorithm That Could Make Big Pharma Billions",
        description: "Vídeo sobre VQE na indústria farmacêutica",
        url: "https://www.youtube.com/watch?v=Fvwyd0536Gc"
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
    codeExample: `# --- O QUE ESTE CÓDIGO FAZ ---
# Este código usa o QAOA (Quantum Approximate Optimization Algorithm)
# para resolver o problema "MaxCut" (Corte Máximo) em um gráfico.
#
# 1. PROBLEMA: Definimos um gráfico simples (um quadrado). O objetivo
#    é dividir os 4 pontos (nós) em dois grupos (A e B) para
#    "cortar" o maior número possível de linhas (arestas).
#
# 2. TRADUÇÃO: O problema do gráfico é traduzido para um formato
#    matemático (QUBO) que o QAOA entende.
#
# 3. SOLUÇÃO (Híbrida): O QAOA usa um circuito quântico (Sampler)
#    para "chutar" soluções e um otimizador clássico (SLSQP)
#    para melhorar esses chutes, até encontrar a solução ideal.
#
# 4. RESULTADO: A solução binária (ex: [0, 1, 0, 1]) é traduzida
#    de volta, mostrando a divisão perfeita dos grupos.
# ---

import networkx as nx
from qiskit.primitives import Sampler
from qiskit_algorithms import QAOA, MinimumEigenOptimizer
from qiskit_algorithms.optimizers import SLSQP
from qiskit_optimization.applications import Maxcut
from qiskit_optimization.converters import QuadraticProgramToQubo

# --- 1. Definir o Problema (O Gráfico) ---
G = nx.Graph()
G.add_edges_from([(0, 1), (1, 2), (2, 3), (3, 0)])

# --- 2. "Traduzir" o Problema (Para o Qiskit) ---
maxcut = Maxcut(G)
qp = maxcut.to_quadratic_program()
print("--- Problema Quadrático (MaxCut) ---")
print(qp.prettyprint())

# --- 3. Definir o Algoritmo (QAOA) ---
sampler = Sampler()
optimizer = SLSQP()
qaoa = QAOA(sampler=sampler, optimizer=optimizer, reps=1)

# --- 4. Montar o Solucionador (Solver) ---
qaoa_solver = MinimumEigenOptimizer(qaoa)

# --- 5. Resolver! ---
print("\nIniciando o QAOA para encontrar a melhor divisão...")
qubo_converter = QuadraticProgramToQubo()
qubo = qubo_converter.convert(qp)

result = qaoa_solver.solve(qubo)

# --- 6. Mostrar o Resultado ---
print("\n--- Resultado do QAOA ---")
print(f"Solução binária: {result.x}")
print(f"Número de arestas cortadas: {-result.fval}")

solution_sets = maxcut.interpret(result)
print(f"Divisão dos grupos: {solution_sets}")`,
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
