# Componentes do Projeto

## Estrutura de Componentes

### Header.jsx
**Responsabilidade**: Navegação principal do site
- Sticky header com blur no scroll
- Logo com gradiente
- Link para repositório GitHub
- Responsivo com menu adaptativo

**Props**: Nenhuma

---

### Hero.jsx
**Responsabilidade**: Seção hero/banner principal
- Call-to-action com gradientes animados
- Scroll suave para seções
- Elementos decorativos de fundo
- Animação no ícone de átomo

**Props**: Nenhuma

---

### IntroSection.jsx
**Responsabilidade**: Introdução aos conceitos quânticos
- Exibe 3 conceitos fundamentais (Qubits, Superposição, Emaranhamento)
- Cards com hover effects
- Importa dados de `constants/algorithms.js`

**Props**: Nenhuma

**Dados**: Usa `QUANTUM_CONCEPTS` das constants

---

### AlgorithmsSection.jsx
**Responsabilidade**: Seção principal com todos os algoritmos
- Sistema de tabs (Principais vs Híbridos)
- Grid responsivo de cards
- Explicação da Era NISQ
- Gerencia estado de seleção (futuro: modal)

**Props**: Nenhuma

**Dados**: Usa `MAIN_ALGORITHMS` e `HYBRID_ALGORITHMS` das constants

**Callbacks**: 
- `handleLearnMore(algorithm)` - Placeholder para funcionalidade futura

---

### AlgorithmCard.jsx
**Responsabilidade**: Card individual de algoritmo (componente reutilizável)
- Exibe informações do algoritmo
- Hover effects e transições
- Badge de categoria
- Lista de impactos e exemplos
- Botão "Saiba Mais"

**Props**:
```jsx
{
  algorithm: {
    id: string,
    title: string,
    subtitle: string,
    category: string,
    icon: LucideIcon,
    color: string,
    bgColor: string,
    badgeVariant?: string,
    function: string,
    impacts: string[],
    examples?: string[]
  },
  onLearnMore: (algorithm) => void
}
```

---

### Footer.jsx
**Responsabilidade**: Rodapé do site
- Links de navegação
- Links para recursos externos
- Informações do autor
- Copyright

**Props**: Nenhuma

---

### ScrollToTop.jsx
**Responsabilidade**: Botão flutuante de voltar ao topo
- Aparece após scroll de 300px
- Animação de entrada/saída
- Scroll suave ao topo
- Posicionamento fixo

**Props**: Nenhuma

**Hooks**:
- `useEffect` para listener de scroll
- `useState` para controlar visibilidade

---

## Componentes UI (shadcn/ui)

### button.jsx
Botão com variantes: default, destructive, outline, secondary, ghost, link

### card.jsx
Container de conteúdo com header, content e footer opcionais

### badge.jsx
Badge/etiqueta com variantes: default, secondary, destructive, outline

### tabs.jsx
Sistema de abas com lista de triggers e conteúdo

---

## Boas Práticas Implementadas

### 1. Separação de Responsabilidades
- Cada componente tem uma única responsabilidade
- Lógica de dados separada em `constants/`
- Componentes UI reutilizáveis separados

### 2. Composição
- Componentes pequenos que se compõem
- Props claramente definidas
- Componentes sem estado quando possível

### 3. Acessibilidade
- Tags semânticas HTML5
- ARIA labels onde necessário
- Navegação por teclado
- Contraste de cores adequado

### 4. Performance
- Uso eficiente de hooks
- Limpeza de event listeners
- Componentes otimizados

### 5. Manutenibilidade
- Código DRY (Don't Repeat Yourself)
- Nomes descritivos
- Comentários onde necessário
- Estrutura de pastas clara

### 6. Responsividade
- Mobile-first approach
- Breakpoints do Tailwind
- Grid e flexbox responsivos
- Tipografia escalável

---

## Fluxo de Dados

```
constants/algorithms.js (dados)
        ↓
AlgorithmsSection.jsx (container)
        ↓
AlgorithmCard.jsx (presentational)
        ↓
UI Components (button, card, badge)
```

---

## Futuras Melhorias

1. **Modal de Detalhes**: Implementar modal ao clicar em "Saiba Mais"
2. **Dark Mode Toggle**: Adicionar botão de alternância de tema
3. **Animações**: Adicionar mais animações com Framer Motion
4. **i18n**: Internacionalização (PT/EN)
5. **SEO**: Meta tags e structured data
6. **Analytics**: Integração com Google Analytics
