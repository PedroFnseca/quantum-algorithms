# Quantum Algorithms Website

Um site moderno e educativo sobre algoritmos quânticos, construído com React, Vite e shadcn/ui.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI modernos e acessíveis
- **Lucide React** - Ícones modernos e customizáveis

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/PedroFnseca/quantum-algorithms.git

# Entre na pasta do projeto
cd quantum-algorithms

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   └── tabs.jsx
│   ├── Header.jsx       # Cabeçalho da página
│   ├── Hero.jsx         # Seção hero com CTA
│   ├── IntroSection.jsx # Introdução aos conceitos quânticos
│   ├── AlgorithmCard.jsx # Card reutilizável para algoritmos
│   ├── AlgorithmsSection.jsx # Seção principal de algoritmos
│   ├── Footer.jsx       # Rodapé
│   ├── ScrollToTop.jsx  # Botão de voltar ao topo
│   └── index.js         # Barrel exports
├── lib/
│   └── utils.js         # Utilitários (cn function)
├── App.jsx              # Componente principal
├── main.jsx             # Entry point
└── index.css            # Estilos globais + Tailwind

```

## 🎨 Componentes e Boas Práticas

### Componentização

O projeto segue uma arquitetura modular com componentes reutilizáveis:

- **Header**: Navegação fixa no topo com logo e link para GitHub
- **Hero**: Seção de boas-vindas com gradientes e animações
- **IntroSection**: Explica conceitos fundamentais (Qubits, Superposição, Emaranhamento)
- **AlgorithmCard**: Componente reutilizável para exibir informações de cada algoritmo
- **AlgorithmsSection**: Usa tabs para organizar algoritmos principais e híbridos
- **Footer**: Informações de contato e links úteis
- **ScrollToTop**: Botão flutuante para voltar ao topo

### Padrões Utilizados

1. **Composition Pattern**: Componentes pequenos e focados que se compõem
2. **Props Pattern**: Passagem de dados via props para reutilização
3. **Presentational Components**: Componentes focados apenas em UI
4. **Single Responsibility**: Cada componente tem uma responsabilidade clara
5. **DRY (Don't Repeat Yourself)**: Código reutilizável através de componentes

### Acessibilidade

- Uso de tags semânticas HTML5
- ARIA labels em botões e links
- Navegação por teclado
- Contraste adequado de cores
- Responsividade mobile-first

## 🎯 Features

- ✅ Design moderno e responsivo
- ✅ Animações suaves e transições
- ✅ Tema claro/escuro (configurável via Tailwind)
- ✅ Componentes acessíveis
- ✅ Organização por tabs (Algoritmos Principais vs Híbridos)
- ✅ Cards interativos com hover effects
- ✅ Scroll suave entre seções
- ✅ Botão de voltar ao topo
- ✅ Gradientes e efeitos visuais modernos

## 📱 Responsividade

O site é totalmente responsivo com breakpoints para:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📚 Conteúdo Educativo

O site aborda:

1. **Introdução**: Conceitos básicos de computação quântica
2. **Algoritmo de Shor**: Fatoração e impacto na criptografia
3. **Algoritmo de Grover**: Busca quântica acelerada
4. **Simulação Quântica**: Modelagem molecular
5. **Algoritmos Híbridos (NISQ)**: VQE e QAOA

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👨‍💻 Autor

**Pedro Fonseca**
- GitHub: [@PedroFnseca](https://github.com/PedroFnseca)

---

Feito com ❤️ e React
