Original prompt: Aplicar a skill de desenvolvimento de jogos para evoluir o NEØ Miniapp com arquitetura declarativa de sistemas, regimes econômicos e governança meta descrita no markdown enviado.

## Progress
- 2026-02-05: Criado arquivo de progresso e registrado a visão norteadora para esta sessão.
- 2026-02-05: Implemented declarative regime presets, meta-governor evaluations, and history tracking so the engine can switch active experiment policies and surface descriptive alerts.
- 2026-02-22: Reposicionei a UX para tom comercial com foco Telegram-first. Inclui Command Deck de conversao na Operacao, CTAs de monetizacao/retencao, labels de navegacao orientadas a negocio e onboarding com menor friccao.
- 2026-02-22: Expostos hooks de teste `window.render_game_to_text` e `window.advanceTime(ms)` para validacao deterministica com cliente Playwright do skill.
- 2026-02-22: Corrigido fluxo de testes do miniapp com Playwright do skill. Intro padrão desativado (sem bloqueio de conversão), botão manual estabilizado para clique automatizado e cenários validados: ação manual, navegação para Agentes e abertura da Loja.
- 2026-02-22: Eliminados erros de console no teste automatizado com fallback robusto de CloudStorage e guard para não inicializar Reown AppKit quando `VITE_REOWN_PROJECT_ID` não estiver configurado.

## TODOs e sugestões para próxima iteração
- Definir `VITE_REOWN_PROJECT_ID` válido no ambiente para reativar o AppKit em produção.
- Ajustar copy da Loja Premium para remover markdown literal (`**Telegram Stars**`) e aumentar clareza comercial.
- Criar funil de aquisição com tracking de origem (`start_param`) e reward de referral dentro do miniapp.
- 2026-02-22: README atualizado para refletir setup atual (Reown + Telegram) e removido contexto Gemini. Criados os guias `docs/GUIA_USUARIO_MINIAPP.md` e `docs/GUIA_EMPRESA_MINIAPP.md` com documentação de navegação, capacidades, monetização real e operação empresarial.
- 2026-02-22: Implementada migração forçada global no load via `VITE_FORCE_RESET_VERSION` + `meta.state_version`. Estados antigos agora resetam automaticamente no primeiro acesso após deploy com versão maior.
- 2026-02-22: Implementada telemetria mínima de pagamentos com endpoint `/api/payment-telemetry` (KV timeline + contadores) e eventos client-side em `utils/payments.ts`: `invoice_created`, `invoice_paid`, `invoice_failed`.
- 2026-02-22: Hardening aplicado em webhook e invoices. `api/webhook` agora suporta verificação por `TELEGRAM_WEBHOOK_SECRET`, ignora chats não privados e restringe comandos conhecidos. `api/create-invoice` ganhou validação forte de payload, allowlist de origem e suporte a verificação de `initData` (`TELEGRAM_INITDATA_ENFORCE`).
- 2026-02-22: Visual atualizado para glassmorphism iOS-like com gradiente dark navy -> pink aplicado globalmente. Bordas brancas perceptíveis foram substituídas por bordas magenta translúcidas.
- 2026-02-22: Criado Navigation QA Gate com Playwright (`playwright.config.ts` + `tests/e2e/navigation.spec.ts`) cobrindo tabs, fechamento de modais por `X`/backdrop e responsividade em `iPhone 12`, `Pixel 5` e desktop.
