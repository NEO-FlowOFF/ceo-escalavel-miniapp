# Navigation QA Gate

Objetivo: bloquear deploy com regressão de navegação, fechamento de modal e responsividade.

## Escopo coberto

- Navegação por abas:
  - `Receita`
  - `Escala`
  - `Playbook`
  - `Board`
- Modais críticos:
  - `Loja Premium`
  - `Daily Operations`
  - `Ranking Global`
  - `Neo Mint`
  - `Saque`
  - `Detalhes do Agente`
- Responsividade:
  - validação em `iPhone 12`, `Pixel 5` e `Desktop Chrome`
  - sem overflow horizontal
  - área mínima de toque no menu inferior

## Comandos

```bash
npm run qa:navigation
```

Para rodar toda a suíte E2E:

```bash
npm run test:e2e
```

## Critério de aprovação

- 100% dos testes passando em todos os projetos do Playwright.
- Falha em qualquer modal ou viewport bloqueia release.
