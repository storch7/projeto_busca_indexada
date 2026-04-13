# 🔍 Busca Indexada (O Motor de Busca) - Projeto EDA2

Projeto voltado à disciplina de Estruturas de Dados 2 (EDA2) para consolidação através da prática do conceito de **Busca Indexada**. A arquitetura possui ênfase no isolamento da camada de lógica ("Back-End") da aplicação, buscando implementar algoritmos nativos (como Hash Maps / Índices Invertidos).

**API Consumida:** FakeStore API (`https://fakestoreapi.com/products`)

## 🎯 Proposta do Projeto
O objetivo não é um Frontend vistoso, mas sim criar um **Motor de Indexação robusto**. A aplicação consome listas de produtos reais e aloca esses produtos na nossa Estrutura de Dados (ex: HashMap). A busca deverá ocorrer não por filtros simples em arrays, mas pelo acesso em complexidade algorítmica `O(1)` utilizando estruturas desenhadas do absoluto zero.

### 🏗 Arquitetura Limpa
*   **models/**: Tipagens TypeScript refletindo instâncias e estruturas de dados reais.
*   **services/**: Isolamento das chamadas a APIs para facilitar Mocking e Fetch.
*   **structures/**: **O Coração do Repositório!** As estruturas puras em TypeScript (Ex: Implementação da `HashMap`).
*   **hooks/**: Onde nossa lógica de API e estrutura se conecta ao escopo do simulador visual.

---

## 🛠 Como Instalar

Certifique-se de possuir o Node.js v18+ instalado.

1. Clone ou faça o download deste repositório.
2. Acesse a pasta base (Front-end):
```bash
cd frontend
```
3. Instale as dependências essenciais:
```bash
npm install
```

---

## 💻 Como Executar e Testar

Atualmente, nosso projeto funciona usando um fluxo "Sandbox" voltado para checar as ações diretamente pelo console do navegador ou por rodadas de Test-Driven-Development (TDD).

Para executar o SandBox no navegador:
```bash
npm run dev
```
*(Abra o endereço gerado e aperte `F12` para ver a mágica lógica acontecer nas abas de Console e Network).*

Para executar a suite de testes (Vitest) - *Testes de lógica da Hash em breve*:
```bash
npm run test
```

> **Nota:** Este arquivo `README.md` é um documento vivo e será atualizado conforme modelarmos e validarmos novas camadas para o nosso motor de busca.
