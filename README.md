# NEØ FlowOFF Miniapp Console

Miniapp de simulação de escala operacional para Telegram, com camadas de monetização via Telegram Stars e integração on-chain para mint de $NEOFLW.

## Stack
- Engine: React 19 + Vite
- Interface: Tailwind + CSS customizado
- Runtime: Telegram Mini App SDK
- Web3: Wagmi + Reown AppKit + Base Mainnet

## Setup
### Pré-requisitos
- Node.js 18+
- `VITE_REOWN_PROJECT_ID` (necessário para wallet connect e mint)
- `TELEGRAM_BOT_TOKEN` (necessário para `api/webhook` e `api/create-invoice`)

### Executar local
1. Instalar dependências:
```bash
npm install
```
2. Configurar ambiente (`.env.local` recomendado):
```env
VITE_REOWN_PROJECT_ID=seu_project_id_reown
TELEGRAM_BOT_TOKEN=seu_bot_token
VITE_FORCE_RESET_VERSION=20260222
```
3. Rodar:
```bash
npm run dev
```

### Reset global de usuários (migração forçada)
- O app compara `meta.state_version` salvo com `VITE_FORCE_RESET_VERSION`.
- Se o salvo for menor, o estado do usuário é resetado automaticamente no carregamento.
- Para forçar um novo reset geral, aumente `VITE_FORCE_RESET_VERSION` e faça deploy.

## Contexto de Produto
- Simulação: valuation e progresso de operação dentro do jogo.
- Monetização real: compra de itens via Telegram Stars.
- Ativo real: mint on-chain de $NEOFLW (quando mint está ativo no contrato).
- Saque real: fluxo atual abre contato comercial, não existe saque automático para fiat no app.

## Documentação
- Guia do usuário final: [docs/GUIA_USUARIO_MINIAPP.md](./docs/GUIA_USUARIO_MINIAPP.md)
- Guia interno da empresa: [docs/GUIA_EMPRESA_MINIAPP.md](./docs/GUIA_EMPRESA_MINIAPP.md)
- Deployment History: [docs/DEPLOYMENT_HISTORY.md](./docs/DEPLOYMENT_HISTORY.md)
- Roadmap Web3: [docs/ROADMAP_WEB3.md](./docs/ROADMAP_WEB3.md)

## Contrato
- Network: Base Mainnet (8453)
- Token: $NEOFLW
- Contract: `0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B`
- Explorer: [BaseScan](https://basescan.org/address/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B)

## Contato
- [neo@neoprotocol.space](mailto:neo@neoprotocol.space)
- [Telegram](https://t.me/neomello)
